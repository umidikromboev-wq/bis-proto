"use client";

import { useState, type FormEvent } from "react";

const INDUSTRIES = [
  "Производство",
  "Дистрибуция / опт",
  "Розничная торговля",
  "Импорт",
  "Услуги",
  "Другое",
];

/** Маска +998 (90) 123-45-67 */
export function maskUz(raw: string) {
  const d = raw.replace(/\D/g, "").replace(/^998/, "").slice(0, 9);
  const p = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
  if (!p.length) return "+998 ";
  let out = `+998 (${p[0]}`;
  if (p[1]) out += `) ${p[1]}`;
  if (p[2]) out += `-${p[2]}`;
  if (p[3]) out += `-${p[3]}`;
  return out;
}

export type LeadFormProps = {
  submitLabel: string;
  source: string;
  withIndustry?: boolean;
  withCompany?: boolean;
  extra?: { label: string; options: string[]; name: string };
};

export function LeadForm({ submitLabel, source, withIndustry = true, withCompany, extra }: LeadFormProps) {
  const [phone, setPhone] = useState("+998 ");
  const [name, setName] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);

  const digits = phone.replace(/\D/g, "").replace(/^998/, "");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (name.trim().length < 2) next.name = "Напишите, как к вам обращаться";
    if (digits.length !== 9) next.phone = "Номер должен содержать 9 цифр после +998";
    setErrors(next);
    if (Object.keys(next).length) return;
    // ПРОТОТИП: реальная отправка появится на этапе сборки.
    // Куда уходят заявки — согласовать: Telegram-бот + amoCRM/Bitrix.
    // Источник заявки уже размечен, чтобы считать конверсию по каждому попапу.
    void source;
    setSent(true);
  }

  if (sent) {
    return (
      <div className="panel" style={{ padding: "1.75rem" }}>
        <p className="note" style={{ marginBottom: "1rem" }}>Экран «Спасибо»</p>
        <h3 className="h3">Заявка принята</h3>
        <p className="muted" style={{ marginTop: "0.75rem" }}>
          Консультант BIS позвонит в течение рабочего дня. Если удобнее в мессенджере — напишите нам в Telegram,
          ответим быстрее.
        </p>
        <p className="micro" style={{ marginTop: "1rem" }}>
          В боевой версии здесь: подтверждение, ссылка на Telegram, отправка события в аналитику и письмо на почту.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      <label className="field">
        <span>Как к вам обращаться</span>
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Имя"
          aria-invalid={!!errors.name}
          autoComplete="name"
        />
        {errors.name && <span className="err">{errors.name}</span>}
      </label>

      <label className="field">
        <span>Телефон</span>
        <input
          className="input"
          value={phone}
          onChange={(e) => setPhone(maskUz(e.target.value))}
          inputMode="tel"
          placeholder="+998 (90) 123-45-67"
          aria-invalid={!!errors.phone}
          autoComplete="tel"
        />
        {errors.phone && <span className="err">{errors.phone}</span>}
      </label>

      {withCompany && (
        <label className="field">
          <span>Компания</span>
          <input className="input" name="company" placeholder="Название" autoComplete="organization" />
        </label>
      )}

      {/* CV-06 · Telegram — главный канал связи в Узбекистане */}
      <label className="field">
        <span>Telegram — ответим быстрее, чем по телефону</span>
        <input className="input" name="telegram" placeholder="@username или тот же номер" />
      </label>

      {withIndustry && (
        <label className="field">
          <span>Отрасль</span>
          <select className="input select" name="industry" defaultValue="">
            <option value="" disabled>Выберите отрасль</option>
            {INDUSTRIES.map((i) => (
              <option key={i} value={i}>{i}</option>
            ))}
          </select>
        </label>
      )}

      {extra && (
        <fieldset className="field" style={{ border: 0, padding: 0, margin: "0 0 0.9rem" }}>
          <span style={{ display: "block", fontSize: "0.74rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)", marginBottom: "0.55rem" }}>
            {extra.label}
          </span>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {extra.options.map((o, i) => (
              <label key={o} className="panel-2" style={{ padding: "0.6rem 0.9rem", cursor: "pointer", fontSize: "0.9rem", display: "inline-flex", gap: "0.5rem", alignItems: "center" }}>
                <input type="radio" name={extra.name} value={o} defaultChecked={i === 0} />
                {o}
              </label>
            ))}
          </div>
        </fieldset>
      )}

      <button type="submit" className="btn btn-solid btn-lg" style={{ width: "100%", marginTop: "0.5rem" }}>
        {submitLabel}
      </button>

      {/* CV-03 · снятие риска прямо перед кликом */}
      <p className="micro" style={{ marginTop: "0.8rem", textAlign: "center" }}>
        Бесплатно · без обязательств · ответим в рабочий день
      </p>

      <p className="micro" style={{ marginTop: "0.9rem" }}>
        Нажимая кнопку, вы соглашаетесь с{" "}
        <a href="#popup:policy" style={{ color: "var(--muted)" }}>политикой обработки персональных данных</a>.
      </p>
    </form>
  );
}
