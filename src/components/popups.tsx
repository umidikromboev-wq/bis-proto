"use client";

import { useState, type ReactNode } from "react";
import { usePopup } from "./popup-context";
import { LeadForm } from "./lead-form";
import { Placeholder } from "./ui";
import { cases, contacts, nav, navHome, navSecondary, finalCta, readiness } from "@/content/blocks";

export function Popups() {
  const { open, close } = usePopup();
  if (!open) return null;

  const caseMatch = open.startsWith("case:") ? cases.find((c) => c.slug === open.slice(5)) : null;

  return (
    <div className="overlay" onMouseDown={(e) => e.target === e.currentTarget && close()}>
      <div className="modal" role="dialog" aria-modal="true" style={caseMatch || open === "policy" ? { maxWidth: 940 } : undefined}>
        <CloseBtn onClick={close} />
        {open === "lead" && <LeadPopup />}
        {open === "zoom" && <ZoomPopup />}
        {open === "calc" && <CalcPopup />}
        {open === "checklist" && <ChecklistPopup />}
        {open === "policy" && <PolicyPopup />}
        {open === "requisites" && <RequisitesPopup />}
        {open === "menu" && <MenuPopup onNavigate={close} />}
        {caseMatch && <CasePopup slug={caseMatch.slug} />}
      </div>
    </div>
  );
}

function CloseBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Закрыть"
      style={{
        position: "absolute", top: 14, right: 14, width: 40, height: 40, borderRadius: 999,
        border: "1px solid var(--line)", background: "transparent", color: "var(--muted)", cursor: "pointer",
        display: "grid", placeItems: "center",
      }}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M6 6l12 12M18 6L6 18" />
      </svg>
    </button>
  );
}

function Head({ kicker, title, lead }: { kicker?: string; title: string; lead?: string }) {
  return (
    <header style={{ marginBottom: "1.5rem", paddingRight: "3rem" }}>
      {kicker && <p className="kicker" style={{ marginBottom: "0.9rem" }}>{kicker}</p>}
      <h2 className="h3" style={{ fontSize: "clamp(1.3rem, 1.1rem + 1vw, 1.85rem)", textTransform: "none" }}>{title}</h2>
      {lead && <p className="muted" style={{ marginTop: "0.75rem", fontSize: "0.96rem" }}>{lead}</p>}
    </header>
  );
}

function LeadPopup() {
  return (
    <>
      <Head
        kicker="Бесплатный аудит"
        title="Разберём ваши процессы и назовём бюджет"
        lead="Одна встреча 40–60 минут. По итогу вы получаете письменное заключение — оно остаётся у вас, даже если решите работать не с нами."
      />
      <div className="split" style={{ gap: "2rem" }}>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "grid", gap: "0.85rem" }}>
          {finalCta.bullets.map((b) => (
            <li key={b} style={{ display: "flex", gap: "0.7rem", fontSize: "0.94rem" }}>
              <span aria-hidden style={{ color: "var(--dim)" }}>—</span>
              <span className="muted">{b}</span>
            </li>
          ))}
        </ul>
        <LeadForm submitLabel="Записаться на аудит" source="popup-lead" withCompany />
      </div>
    </>
  );
}

function ZoomPopup() {
  return (
    <>
      <Head
        kicker="Открытая встреча"
        title="Zoom каждый четверг в 16:00"
        lead="Разбираем реальные процессы участников и показываем систему вживую. Мест ограниченное количество — группа маленькая, чтобы успеть разобрать каждого."
      />
      <LeadForm submitLabel="Занять место" source="popup-zoom" />
      <p className="micro" style={{ marginTop: "1rem" }}>
        Прототип: здесь будет счётчик свободных мест и автоматическая отправка ссылки на встречу.
      </p>
    </>
  );
}

const QUIZ = [
  {
    q: "Чем занимается компания?",
    a: ["Производство", "Дистрибуция или опт", "Розница", "Импорт"],
  },
  {
    q: "Сколько человек будет работать в системе?",
    a: ["До 10", "10–30", "30–70", "Больше 70"],
  },
  {
    q: "Что болит сильнее всего?",
    a: ["Не знаю реальную себестоимость", "Не сходятся остатки", "Долго закрываем месяц", "Нет общей картины по компании"],
  },
  {
    q: "В чём ведёте учёт сейчас?",
    a: ["Excel и Google Таблицы", "1С", "1С + Excel", "Своя самописная система"],
  },
];

function CalcPopup() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const done = step >= QUIZ.length;

  return (
    <>
      <Head
        kicker={done ? "Последний шаг" : `Шаг ${step + 1} из ${QUIZ.length}`}
        title={done ? "Куда прислать расчёт?" : QUIZ[step].q}
        lead={done ? "Соберём предварительную оценку бюджета и сроков под ваши ответы и пришлём в течение рабочего дня." : undefined}
      />

      <div style={{ height: 3, background: "var(--line)", borderRadius: 999, marginBottom: "1.5rem" }}>
        <div style={{ height: "100%", width: `${((done ? QUIZ.length : step) / QUIZ.length) * 100}%`, background: "var(--text)", borderRadius: 999, transition: "width 300ms var(--ease)" }} />
      </div>

      {!done ? (
        <div style={{ display: "grid", gap: "0.6rem" }}>
          {QUIZ[step].a.map((option) => (
            <button
              key={option}
              className="panel-2"
              onClick={() => {
                setAnswers([...answers.slice(0, step), option]);
                setStep(step + 1);
              }}
              style={{ padding: "1rem 1.2rem", textAlign: "left", cursor: "pointer", color: "var(--text)", font: "inherit" }}
            >
              {option}
            </button>
          ))}
          {step > 0 && (
            <button onClick={() => setStep(step - 1)} style={{ background: "none", border: 0, color: "var(--dim)", cursor: "pointer", justifySelf: "start", padding: "0.5rem 0", font: "inherit", fontSize: "0.85rem" }}>
              ← Назад
            </button>
          )}
        </div>
      ) : (
        <>
          <div className="panel" style={{ padding: "1rem 1.2rem", marginBottom: "1.25rem" }}>
            <p className="dim" style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 0.5rem" }}>Ваши ответы</p>
            <p className="muted" style={{ margin: 0, fontSize: "0.9rem" }}>{answers.join(" · ")}</p>
          </div>
          <LeadForm submitLabel="Получить расчёт" source="popup-calc" withIndustry={false} withCompany />
        </>
      )}
    </>
  );
}

function ChecklistPopup() {
  return (
    <>
      <Head kicker="Лид-магнит" title={readiness.cta.replace("Скачать ", "")} lead={readiness.ctaNote} />
      <div className="split" style={{ gap: "2rem" }}>
        <Placeholder
          img={{ brief: "Обложка PDF-чек-листа: разворот двух страниц на нейтральном фоне, видно структуру документа и логотип BIS." }}
          style={{ minHeight: 240 }}
        />
        <LeadForm submitLabel="Получить чек-лист" source="popup-checklist" />
      </div>
      <p className="micro" style={{ marginTop: "1rem" }}>
        Прототип: сам PDF нужно подготовить отдельно. После отправки формы файл приходит на телефон в Telegram и на почту.
      </p>
    </>
  );
}

function CasePopup({ slug }: { slug: string }) {
  const c = cases.find((x) => x.slug === slug)!;
  return (
    <>
      <Head kicker={c.industry} title={`${c.client}: что изменилось после внедрения`} lead={c.intro} />
      <Placeholder img={c.img} style={{ minHeight: 220, marginBottom: "1.75rem" }} />
      <div className="split" style={{ gap: "2rem" }}>
        <div>
          <p className="dim" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>До внедрения</p>
          <ul style={{ margin: "0.9rem 0 0", padding: 0, listStyle: "none", display: "grid", gap: "0.7rem" }}>
            {c.before.map((b) => (
              <li key={b} className="muted" style={{ fontSize: "0.92rem", display: "flex", gap: "0.6rem" }}>
                <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{b}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="dim" style={{ fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Эффект</p>
          <div className="grid g2" style={{ marginTop: "0.9rem", gap: "0.7rem" }}>
            {c.after.map((a) => (
              <div key={a.label} className="panel-2" style={{ padding: "0.9rem 1rem" }}>
                <div style={{ fontSize: "1.4rem", fontWeight: 700 }}>{a.value}</div>
                <div className="muted" style={{ fontSize: "0.8rem", marginTop: "0.25rem" }}>{a.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {c.quote && (
        <blockquote className="panel" style={{ margin: "1.75rem 0 0", padding: "1.5rem" }}>
          <p style={{ margin: 0, fontSize: "1.05rem", lineHeight: 1.5 }}>«{c.quote.text}»</p>
          <footer className="dim" style={{ marginTop: "0.9rem", fontSize: "0.85rem" }}>{c.quote.author}</footer>
        </blockquote>
      )}
      <a href="#popup:lead" className="btn btn-solid btn-lg" style={{ marginTop: "1.75rem", width: "100%" }}>
        Хочу такой же результат
      </a>
    </>
  );
}

function PolicyPopup() {
  return (
    <>
      <Head title="Политика обработки персональных данных" />
      <div className="muted" style={{ fontSize: "0.9rem", display: "grid", gap: "0.9rem" }}>
        <p className="note">Прототип: юридический текст предоставляет клиент или его юрист</p>
        <p>Здесь размещается полный текст политики: кто оператор, какие данные собираются (имя, телефон, отрасль, компания), с какой целью, сколько хранятся, как отозвать согласие, контакты для обращений.</p>
        <p>Обязательно к моменту запуска: сайт собирает персональные данные через формы, без опубликованной политики это нарушение и риск блокировки рекламных кабинетов.</p>
      </div>
    </>
  );
}

function RequisitesPopup() {
  return (
    <>
      <Head title="Реквизиты компании" />
      <div className="muted" style={{ fontSize: "0.92rem", display: "grid", gap: "0.6rem" }}>
        <p>{contacts.legal}</p>
        <p>Адрес: {contacts.address}</p>
        <p>Телефон: {contacts.phone}</p>
        <p>Почта: {contacts.email}</p>
        <p>ИНН: 306 742 815</p>
        <p>Расчётный счёт: 2020 8000 3067 4281 5001</p>
        <p>Банк: АКБ «Капиталбанк», Мирабадский филиал, г. Ташкент · МФО 01041</p>
        <p className="dim">Реквизиты предварительные — сверить с уставными документами.</p>
      </div>
    </>
  );
}

function MenuPopup({ onNavigate }: { onNavigate: () => void }) {
  return (
    <>
      <Head title="Меню" />
      <nav style={{ display: "grid", gap: "0.25rem" }}>
        {nav.map((n) => (
          <a key={n.href} href={n.href} onClick={onNavigate} style={{ padding: "0.9rem 0", borderBottom: "1px solid var(--line)", color: "var(--text)", textDecoration: "none", fontSize: "1.15rem" }}>
            {n.label}
          </a>
        ))}
      </nav>
      <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: "1.5rem 0 0.6rem" }}>Разделы главной</p>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {navHome.map((n) => (
          <a key={n.href} href={n.href} onClick={onNavigate} className="panel-2 muted" style={{ padding: "0.5rem 0.9rem", fontSize: "0.85rem", textDecoration: "none" }}>
            {n.label}
          </a>
        ))}
      </nav>
      <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: "1.5rem 0 0.6rem" }}>Ещё</p>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {navSecondary.map((n) => (
          <a key={n.href} href={n.href} onClick={onNavigate} className="dim" style={{ padding: "0.5rem 0.9rem", fontSize: "0.85rem", textDecoration: "none", border: "1px solid var(--line)", borderRadius: 999 }}>
            {n.label}
          </a>
        ))}
      </nav>
      <a href={contacts.phoneHref} className="btn" style={{ width: "100%", marginTop: "1.5rem" }}>{contacts.phone}</a>
      <a href="#popup:lead" className="btn btn-solid" style={{ width: "100%", marginTop: "0.6rem" }}>Получить расчёт</a>
    </>
  );
}

export function PopupHost({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
