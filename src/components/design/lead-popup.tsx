"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { PixelArrow } from "./marks";
import { ui } from "@/content/ui";
import { DEFAULT_LOCALE, type Locale } from "@/content/locale";
import { leadScenarios, type LeadSource, type Scenario } from "@/content/lead";

export type { LeadSource };

/**
 * Заявка с сайта: форма живёт в попапе, а не отдельной страницей.
 *
 * Кнопки на всех экранах ведут к одному действию, поэтому и форма одна.
 * Различаются только заголовок и тег источника — по нему в Telegram видно,
 * какой блок принёс заявку.
 */




type PopupApi = { openLead: (source: LeadSource) => void; locale: Locale };

const PopupCtx = createContext<PopupApi>({ openLead: () => {}, locale: DEFAULT_LOCALE });

export function useLeadPopup() {
  return useContext(PopupCtx);
}

export function LeadPopupProvider({ children, locale = DEFAULT_LOCALE }: { children: ReactNode; locale?: Locale }) {
  const [source, setSource] = useState<LeadSource | null>(null);

  const openLead = useCallback((next: LeadSource) => setSource(next), []);
  const close = useCallback(() => setSource(null), []);

  useEffect(() => {
    if (!source) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [source, close]);

  return (
    <PopupCtx.Provider value={{ openLead, locale }}>
      {children}
      {source ? <LeadDialog source={source} onClose={close} /> : null}
    </PopupCtx.Provider>
  );
}

/**
 * Кнопка, открывающая попап. Выглядит ровно как обычная кнопка сайта —
 * разница только в том, что действие происходит здесь же, без перехода.
 */
export function LeadButton({
  children,
  source,
  variant = "primary",
  small = false,
  className = "",
}: {
  children: ReactNode;
  source: LeadSource;
  variant?: "primary" | "ghost" | "light";
  small?: boolean;
  className?: string;
}) {
  const { openLead } = useLeadPopup();
  const cls = ["dh-btn", `dh-btn-${variant}`, small ? "dh-btn-sm" : "", className].filter(Boolean).join(" ");
  return (
    <button type="button" className={cls} onClick={() => openLead(source)}>
      <span className="dh-btn-label">{children}</span>
      <span className="dh-btn-icon"><PixelArrow /></span>
    </button>
  );
}

/**
 * Плитка документа. Раньше это была ссылка с `download` на несуществующий
 * файл — теперь она открывает попап, в котором за файл оставляют контакт.
 */
export function DocButton({ children, source }: { children: ReactNode; source: LeadSource }) {
  const { openLead } = useLeadPopup();
  return (
    <button type="button" className="d-doc" onClick={() => openLead(source)}>
      {children}
    </button>
  );
}

/** То же действие вторым по весу: там, где рядом уже стоит главная кнопка. */
export function LeadTextLink({ children, source }: { children: ReactNode; source: LeadSource }) {
  const { openLead } = useLeadPopup();
  return (
    <button type="button" className="dh-textlink dh-textlink--btn" onClick={() => openLead(source)}>
      <span className="dh-textlink-label">{children}</span>
      <span className="dh-textlink-icon"><PixelArrow /></span>
    </button>
  );
}

function LeadDialog({ source, onClose }: { source: LeadSource; onClose: () => void }) {
  const { locale } = useLeadPopup();
  const txt = ui(locale);
  const SCENARIOS = leadScenarios(locale);
  const s = SCENARIOS[source];
  return (
    <div
      className="dl-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="dl-modal" role="dialog" aria-modal="true" aria-label={s.title}>
        <button type="button" className="dl-close" onClick={onClose} aria-label={txt.close}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden>
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>

        <div className="dl-grid">
          <div className="dl-side">
            <p className="d-kicker">{s.kicker}</p>
            <h2 className="dl-title">{s.title}</h2>
            <p className="dl-lead">{s.lead}</p>
            <ul className="dl-bullets">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>

          <LeadForm scenario={s} source={source} />
        </div>
      </div>
    </div>
  );
}

/** Маска под узбекский номер: +998 (90) 123-45-67 */
function maskUz(raw: string) {
  const d = raw.replace(/\D/g, "").replace(/^998/, "").slice(0, 9);
  const parts = [d.slice(0, 2), d.slice(2, 5), d.slice(5, 7), d.slice(7, 9)].filter(Boolean);
  if (!parts.length) return "+998 ";
  let out = `+998 (${parts[0]}`;
  if (parts[1]) out += `) ${parts[1]}`;
  if (parts[2]) out += `-${parts[2]}`;
  if (parts[3]) out += `-${parts[3]}`;
  return out;
}

type Status = "idle" | "sending" | "sent" | "failed";

function LeadForm({ scenario, source }: { scenario: Scenario; source: LeadSource }) {
  const { locale } = useLeadPopup();
  const txt = ui(locale);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("+998 ");
  const [company, setCompany] = useState("");
  const [comment, setComment] = useState("");
  const [errors, setErrors] = useState<{ name?: string; phone?: string }>({});
  const [status, setStatus] = useState<Status>("idle");

  const digits = phone.replace(/\D/g, "").replace(/^998/, "");

  // Ловушка для ботов. Настоящий посетитель поле не видит и не заполняет,
  // автозаполнялка ботов лезет во все поля подряд.
  const [website, setWebsite] = useState("");
  // Момент открытия формы — сервер по нему отличает человека от скрипта.
  const [startedAt] = useState(() => Date.now());

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next: { name?: string; phone?: string } = {};
    if (name.trim().length < 2) next.name = "Напишите, как к вам обращаться";
    if (digits.length !== 9) next.phone = "Нужно 9 цифр после +998";
    setErrors(next);
    if (Object.keys(next).length) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          phone,
          company: company.trim(),
          comment: comment.trim(),
          website,
          startedAt,
          source,
          page: typeof window === "undefined" ? "" : window.location.pathname,
        }),
      });
      setStatus(res.ok ? "sent" : "failed");
    } catch {
      setStatus("failed");
    }
  }

  if (status === "sent") {
    return (
      <div className="dl-form dl-done">
        <h3 className="dl-title">{txt.leadDone}</h3>
        <p className="dl-lead">
          Консультант BIS свяжется с вами в рабочее время. Если удобнее в мессенджере — напишите нам в Telegram,
          там отвечаем быстрее.
        </p>
        <a className="dh-btn dh-btn-primary" href="https://t.me/BIS_UZ_PLACEHOLDER" target="_blank" rel="noreferrer">
          <span className="dh-btn-label">{txt.writeTelegram}</span>
          <span className="dh-btn-icon"><PixelArrow /></span>
        </a>
      </div>
    );
  }

  return (
    <form className="dl-form" onSubmit={onSubmit} noValidate>
      {/* Ловушка: убрана из потока и с клавиатуры, скринридеру не видна. */}
      <div className="dl-trap" aria-hidden>
        <label htmlFor="dl-website">Website</label>
        <input
          id="dl-website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>
      <label className="dl-field">
        <span>{txt.fieldName}</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder={txt.fieldNamePlaceholder}
          autoComplete="name"
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name ? <i>{errors.name}</i> : null}
      </label>

      <label className="dl-field">
        <span>{txt.fieldPhone}</span>
        <input
          value={phone}
          onChange={(e) => setPhone(maskUz(e.target.value))}
          placeholder="+998 (90) 123-45-67"
          inputMode="tel"
          autoComplete="tel"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <i>{errors.phone}</i> : null}
      </label>

      {scenario.withCompany ? (
        <label className="dl-field">
          <span>{txt.fieldCompany}</span>
          <input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder={txt.fieldCompanyPlaceholder}
            autoComplete="organization"
          />
        </label>
      ) : null}

      <label className="dl-field">
        <span>{txt.fieldTask} <em>— по желанию</em></span>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={3}
          placeholder={txt.fieldTaskPlaceholder}
        />
      </label>

      <button type="submit" className="dh-btn dh-btn-primary dl-submit" disabled={status === "sending"}>
        <span className="dh-btn-label">{status === "sending" ? "Отправляем…" : scenario.submit}</span>
        <span className="dh-btn-icon"><PixelArrow /></span>
      </button>

      {/* Сбой отправки не прячем за экраном «спасибо»: человек должен узнать,
          что заявка не ушла, и получить рабочий способ связаться. */}
      {status === "failed" ? (
        <p className="dl-error" role="alert">
          Не удалось отправить заявку. Позвоните нам:{" "}
          <a href="tel:+998908231012">+998 90 823 10 12</a>
        </p>
      ) : (
        <p className="dl-micro">{scenario.micro}</p>
      )}
    </form>
  );
}
