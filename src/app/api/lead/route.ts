/**
 * Приём заявок с сайта и отправка их в Telegram.
 *
 * Все формы сайта приходят сюда — различаются тегом источника, чтобы по
 * переписке было видно, какой попап принёс заявку.
 */

/** Откуда пришла заявка. Пишется в сообщение тегом. */
const SOURCE_TAGS: Record<string, string> = {
  audit: "#аудит",
  zoom: "#zoom_четверг",
  calc: "#расчёт",
  checklist: "#чек_лист",
  guide: "#гайд",
  estimate: "#смета",
  contacts: "#контакты",
};

/** Ограничения на входящие поля: защита от мусора и раздутых сообщений. */
const LIMITS = { name: 80, phone: 32, company: 120, comment: 600, industry: 60 };

type Lead = {
  name?: string;
  phone?: string;
  company?: string;
  comment?: string;
  industry?: string;
  source?: string;
  page?: string;
};

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

/** Экранируем то, что уходит в Telegram с parse_mode HTML. */
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  let body: Lead;
  try {
    body = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  const name = clean(body.name, LIMITS.name);
  const phone = clean(body.phone, LIMITS.phone);
  const digits = phone.replace(/\D/g, "");

  // Валидация повторяет клиентскую: форму можно отправить и в обход браузера.
  if (name.length < 2) {
    return Response.json({ ok: false, error: "name" }, { status: 422 });
  }
  if (digits.length < 9 || digits.length > 15) {
    return Response.json({ ok: false, error: "phone" }, { status: 422 });
  }

  if (!token || !chatId) {
    // Молча показать «спасибо» нельзя: заявка была бы потеряна, а человек
    // остался бы ждать звонка.
    console.error("[lead] TELEGRAM_BOT_TOKEN или TELEGRAM_CHAT_ID не заданы");
    return Response.json({ ok: false, error: "not_configured" }, { status: 503 });
  }

  const source = clean(body.source, 40);
  const tag = SOURCE_TAGS[source] ?? "#заявка";
  const company = clean(body.company, LIMITS.company);
  const industry = clean(body.industry, LIMITS.industry);
  const comment = clean(body.comment, LIMITS.comment);
  const page = clean(body.page, 200);

  const lines = [
    `<b>Заявка с сайта</b> ${tag}`,
    "",
    `<b>Имя:</b> ${escapeHtml(name)}`,
    `<b>Телефон:</b> ${escapeHtml(phone)}`,
    company ? `<b>Компания:</b> ${escapeHtml(company)}` : "",
    industry ? `<b>Отрасль:</b> ${escapeHtml(industry)}` : "",
    comment ? `<b>Комментарий:</b> ${escapeHtml(comment)}` : "",
    page ? `<b>Страница:</b> ${escapeHtml(page)}` : "",
  ].filter(Boolean);

  try {
    const res = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: chatId,
        text: lines.join("\n"),
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    if (!res.ok) {
      const detail = await res.text();
      console.error("[lead] Telegram ответил ошибкой:", res.status, detail);
      return Response.json({ ok: false, error: "delivery" }, { status: 502 });
    }
  } catch (error: unknown) {
    console.error("[lead] не удалось достучаться до Telegram:", error);
    return Response.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
