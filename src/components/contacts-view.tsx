"use client";

import { Placeholder, Section, Arrow } from "./ui";
import { Breadcrumbs } from "./shell";
import { usePopup } from "./popup-context";
import { LeadForm } from "./lead-form";
import { contactsPage } from "@/content/contacts-page";

export function ContactsView() {
  const { show } = usePopup();
  const { hero, channels, office, formats, requisites, vacancies } = contactsPage;

  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />

      <section className="section" style={{ paddingBlock: "clamp(2.5rem, 2rem + 4vw, 4.5rem)" }}>
        <div className="wrap">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="h1" style={{ maxWidth: "22ch" }}>{hero.h1}</h1>
          <p className="lead" style={{ marginTop: "1.5rem", maxWidth: "58ch" }}>{hero.lead}</p>

          <div className="grid g3" style={{ marginTop: "2.5rem" }}>
            {channels.map((c) => (
              <a key={c.title} href={c.href} className="panel" style={{ padding: "1.6rem", textDecoration: "none", color: "inherit", display: "block" }}>
                <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>{c.title}</p>
                <p style={{ fontSize: "1.15rem", fontWeight: 600, margin: "0.8rem 0 0" }}>{c.value}</p>
                <p className="muted" style={{ fontSize: "0.86rem", margin: "0.6rem 0 0" }}>{c.note}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── Форматы первого контакта ───────────────────────────────────── */}
      <Section kicker={formats.kicker} h2={formats.h2}>
        <div className="grid g3">
          {formats.items.map((f) => (
            <article key={f.title} className="panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
              <h3 className="h3">{f.title}</h3>
              <p className="dim" style={{ fontSize: "0.8rem", marginTop: "0.5rem" }}>{f.time}</p>
              <p className="muted" style={{ fontSize: "0.92rem", marginTop: "1rem" }}>{f.text}</p>
              <button className="btn" style={{ marginTop: "auto", marginBlockStart: "1.5rem" }} onClick={() => show(f.popup)}>
                {f.cta}
              </button>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Офис ───────────────────────────────────────────────────────── */}
      <Section kicker="Где мы" h2={office.h2}>
        <div className="split">
          <div>
            <p className="lead" style={{ marginTop: 0 }}>{office.address}</p>
            <dl style={{ display: "grid", gap: "1rem", marginTop: "2rem" }}>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "0.9rem" }}>
                <dt className="dim" style={{ fontSize: "0.76rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Часы работы</dt>
                <dd style={{ margin: "0.45rem 0 0", fontSize: "0.96rem" }}>{office.hours}</dd>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "0.9rem" }}>
                <dt className="dim" style={{ fontSize: "0.76rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>Парковка и вход</dt>
                <dd style={{ margin: "0.45rem 0 0", fontSize: "0.96rem" }}>{office.parking}</dd>
              </div>
            </dl>
            <p className="note" style={{ marginTop: "1.75rem" }}>{office.mapNote}</p>
          </div>
          <Placeholder img={office.img} style={{ minHeight: 380 }} />
        </div>
      </Section>

      {/* ── Форма прямо на странице ────────────────────────────────────── */}
      <Section kicker="Заявка" h2="Напишите нам — ответим в рабочий день">
        <div className="split">
          <div className="panel" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            <LeadForm submitLabel="Отправить заявку" source="contacts-page" withCompany />
          </div>
          <div>
            <h3 className="h3">Что будет после отправки</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 0", display: "grid", gap: "0.8rem" }}>
              {[
                "Перезвоним в течение рабочего дня и уточним профиль компании",
                "Предложим формат: аудит на площадке или разбор онлайн",
                "До встречи пришлём короткий список вопросов, чтобы не тратить её на сбор данных",
                "Никаких рассылок и повторных звонков «просто напомнить»",
              ].map((t) => (
                <li key={t} className="muted" style={{ fontSize: "0.94rem", display: "flex", gap: "0.6rem" }}>
                  <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{t}
                </li>
              ))}
            </ul>
            <button className="btn btn-solid" style={{ marginTop: "2rem" }} onClick={() => show("calc")}>
              Или сначала посчитать потери <Arrow dir="right" />
            </button>
          </div>
        </div>
      </Section>

      {/* ── Реквизиты и вакансии ───────────────────────────────────────── */}
      <Section kicker="Юридическая информация" h2={requisites.h2}>
        <div className="split">
          <div className="panel" style={{ padding: "1.75rem" }}>
            <p style={{ margin: 0, fontSize: "1.05rem", fontWeight: 600 }}>{requisites.company}</p>
            <p className="dim" style={{ margin: "0.4rem 0 0", fontSize: "0.86rem" }}>{requisites.partner}</p>
            <dl style={{ display: "grid", gap: "0.75rem", margin: "1.5rem 0 0" }}>
              {requisites.rows.map((r) => (
                <div key={r.label} style={{ display: "flex", justifyContent: "space-between", gap: "1rem", borderTop: "1px solid var(--line)", paddingTop: "0.7rem" }}>
                  <dt className="dim" style={{ fontSize: "0.86rem" }}>{r.label}</dt>
                  <dd style={{ margin: 0, fontSize: "0.9rem", textAlign: "right" }}>{r.value}</dd>
                </div>
              ))}
            </dl>
            <p className="note" style={{ marginTop: "1.5rem" }}>{requisites.note}</p>
          </div>

          <div className="panel-2" style={{ padding: "1.75rem", alignSelf: "start" }}>
            <h3 className="h3">{vacancies.h2}</h3>
            <p className="muted" style={{ marginTop: "0.9rem", fontSize: "0.94rem" }}>{vacancies.text}</p>
            <p className="note" style={{ marginTop: "1.25rem" }}>{vacancies.note}</p>
          </div>
        </div>
      </Section>
    </>
  );
}
