/**
 * Приём заявок с сайта и отправка их в Telegram.
 *
 * Все формы сайта приходят сюда — различаются тегом источника, чтобы по
 * переписке было видно, какой попап принёс заявку.
 */

import { clientIp, rateLimit } from "@/lib/rate-limit";

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

/**
 * Порог антиспама: с одного адреса не больше 5 заявок за 10 минут.
 * Живой человек столько не отправляет, скрипт — за секунду.
 */
const RATE_LIMIT = { max: 5, windowMs: 10 * 60 * 1000 };

/** Тело запроса дальше этого размера даже не разбираем. */
const MAX_BODY_BYTES = 8 * 1024;

/**
 * Минимальное время заполнения формы.
 *
 * Главная защита от ботов на serverless: счётчик в памяти там ненадёжен —
 * экземпляров несколько и у каждого своя память, — а время заполнения приходит
 * из самой формы и проверяется без общего хранилища. Человек физически не
 * успевает ввести имя и телефон за три секунды, скрипт отправляет мгновенно.
 */
const MIN_FILL_MS = 3000;
/** Форма, открытая сутки назад, — почти наверняка не человек за экраном. */
const MAX_FILL_MS = 12 * 60 * 60 * 1000;

type Lead = {
  name?: string;
  /** Ловушка: поле скрыто от человека и заполняется только ботами. */
  website?: string;
  /** Момент открытия формы — по нему считается время заполнения. */
  startedAt?: number;
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

  // Заявка отправляется только со своих страниц. Запрос без совпадающего
  // источника — это не браузер посетителя, а чужой скрипт.
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (origin && host && new URL(origin).host !== host) {
    return Response.json({ ok: false, error: "forbidden" }, { status: 403 });
  }

  const limit = rateLimit(`lead:${clientIp(request)}`, RATE_LIMIT.max, RATE_LIMIT.windowMs);
  if (!limit.allowed) {
    return Response.json(
      { ok: false, error: "rate_limited" },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter) } },
    );
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return Response.json({ ok: false, error: "too_large" }, { status: 413 });
  }

  let body: Lead;
  try {
    body = JSON.parse(raw);
  } catch {
    return Response.json({ ok: false, error: "bad_request" }, { status: 400 });
  }

  // Ловушка для ботов: поле скрыто стилями, человек его не видит и не заполняет.
  // Отвечаем успехом — чтобы бот не подбирал обход, увидев отказ.
  if (clean(body.website, 200)) {
    console.warn("[lead] отсеяна заявка с заполненной ловушкой");
    return Response.json({ ok: true });
  }

  // Слишком быстрое заполнение — признак скрипта. Ответ тоже успешный:
  // бот не должен понять, по какому признаку его отсеяли.
  const startedAt = typeof body.startedAt === "number" ? body.startedAt : 0;
  const filledIn = startedAt > 0 ? Date.now() - startedAt : -1;
  if (filledIn >= 0 && (filledIn < MIN_FILL_MS || filledIn > MAX_FILL_MS)) {
    console.warn("[lead] отсеяна заявка по времени заполнения:", filledIn, "мс");
    return Response.json({ ok: true });
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
