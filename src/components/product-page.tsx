"use client";

import Link from "next/link";
import { Placeholder, Section, Arrow } from "./ui";
import { Breadcrumbs } from "./shell";
import { usePopup } from "./popup-context";
import { cases } from "@/content/blocks";
import type { ProductPage } from "@/content/types";

export function ProductPageView({ data }: { data: ProductPage }) {
  const { show } = usePopup();
  const related = cases.filter((c) => data.caseSlugs.includes(c.slug));

  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: data.title }]} />

      {/* ── Оффер продукта ─────────────────────────────────────────────── */}
      <section className="section" style={{ paddingBlock: "clamp(2.5rem, 2rem + 4vw, 5rem)" }}>
        <div className="wrap split" style={{ alignItems: "center" }}>
          <div>
            <p className="kicker">{data.hero.eyebrow}</p>
            <h1 className="h1">{data.hero.h1}</h1>
            <p className="lead" style={{ marginTop: "1.5rem", maxWidth: "48ch" }}>{data.hero.lead}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.25rem" }}>
              <button className="btn btn-solid btn-lg" onClick={() => show("lead")}>
                {data.hero.cta} <Arrow dir="right" />
              </button>
              <button className="btn btn-lg" onClick={() => show("zoom")}>{data.hero.ctaSecondary}</button>
            </div>

            <dl style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "3rem" }}>
              {data.hero.facts.map((f) => (
                <div key={f.label}>
                  <dt style={{ fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{f.value}</dt>
                  <dd className="dim" style={{ margin: "0.3rem 0 0", fontSize: "0.82rem", maxWidth: "20ch" }}>
                    {f.label}
                    {f.note && <span style={{ display: "block", opacity: 0.75 }}>{f.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <Placeholder img={data.hero.img} style={{ minHeight: 420 }} />
        </div>
      </section>

      {/* ── Кому подходит / кому нет ───────────────────────────────────── */}
      <Section kicker={data.fit.kicker} h2={data.fit.h2} lead={data.fit.lead}>
        <div className="split">
          <div className="grid" style={{ gap: "1rem" }}>
            {data.fit.yes.map((y) => (
              <article key={y.title} className="panel" style={{ padding: "1.5rem" }}>
                <h3 className="h3">{y.title}</h3>
                <p className="muted" style={{ marginTop: "0.6rem", fontSize: "0.92rem" }}>{y.text}</p>
              </article>
            ))}
          </div>
          <div className="panel-2" style={{ padding: "1.75rem", alignSelf: "start" }}>
            <h3 className="h3">Когда мы скажем «не надо»</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 0", display: "grid", gap: "0.85rem" }}>
              {data.fit.no.map((n) => (
                <li key={n} className="muted" style={{ fontSize: "0.9rem", display: "flex", gap: "0.6rem" }}>
                  <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{n}
                </li>
              ))}
            </ul>
            <p className="dim" style={{ fontSize: "0.82rem", marginTop: "1.5rem" }}>
              Проданное «на вырост» внедрение возвращается к нам провалом проекта и антирекомендацией. Нам это дороже, чем один отказ.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Модули ─────────────────────────────────────────────────────── */}
      <Section kicker={data.modules.kicker} h2={data.modules.h2} lead={data.modules.lead}>
        <div className="grid g2">
          {data.modules.items.map((m) => (
            <article key={m.name} className="panel" style={{ padding: "1.6rem" }}>
              <h3 className="h3">{m.name}</h3>
              <p className="muted" style={{ marginTop: "0.7rem", fontSize: "0.92rem" }}>{m.text}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1.1rem" }}>
                {m.marks.map((k) => (
                  <span key={k} className="panel-2 dim" style={{ padding: "0.4rem 0.8rem", fontSize: "0.78rem" }}>{k}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Сценарий работы ────────────────────────────────────────────── */}
      <Section kicker={data.scenario.kicker} h2={data.scenario.h2} lead={data.scenario.lead}>
        <div className="grid" style={{ gap: 0 }}>
          {data.scenario.steps.map((s) => (
            <article
              key={s.title}
              style={{ display: "grid", gridTemplateColumns: "minmax(90px, auto) minmax(0,1fr)", gap: "clamp(1rem, 3vw, 2.5rem)", padding: "1.4rem 0", borderTop: "1px solid var(--line)" }}
            >
              <span className="dim" style={{ fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", paddingTop: "0.2rem" }}>{s.time}</span>
              <div className="split" style={{ gap: "clamp(1rem, 3vw, 3rem)" }}>
                <h3 className="h3">{s.title}</h3>
                <p className="muted" style={{ margin: 0, fontSize: "0.94rem" }}>{s.text}</p>
              </div>
            </article>
          ))}
        </div>
        <Placeholder img={data.scenario.img} style={{ minHeight: 260, marginTop: "2.5rem" }} />
      </Section>

      {/* ── Проект: фазы и бюджет ──────────────────────────────────────── */}
      <Section kicker={data.project.kicker} h2={data.project.h2} lead={data.project.lead}>
        <div className="split">
          <div className="grid" style={{ gap: 0 }}>
            {data.project.phases.map((p, i) => (
              <article key={p.name} style={{ display: "flex", gap: "1.1rem", padding: "1.2rem 0", borderTop: "1px solid var(--line)" }}>
                <span className="dim" style={{ fontSize: "0.78rem", paddingTop: "0.25rem" }}>0{i + 1}</span>
                <div>
                  <h3 className="h3" style={{ fontSize: "1.05rem" }}>{p.name}</h3>
                  <p className="dim" style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>{p.term}</p>
                  <p className="muted" style={{ fontSize: "0.9rem", marginTop: "0.6rem" }}>{p.text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="panel" style={{ padding: "1.75rem", alignSelf: "start" }}>
            <h3 className="h3">Из чего складывается бюджет</h3>
            <div className="grid" style={{ gap: "1rem", marginTop: "1.25rem" }}>
              {data.project.budget.map((b) => (
                <div key={b.label} style={{ borderTop: "1px solid var(--line)", paddingTop: "0.9rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
                    <span style={{ fontSize: "0.95rem", fontWeight: 600 }}>{b.label}</span>
                    <span style={{ fontSize: "1.15rem", fontWeight: 700 }}>{b.value}</span>
                  </div>
                  <p className="dim" style={{ fontSize: "0.8rem", margin: "0.35rem 0 0" }}>{b.note}</p>
                </div>
              ))}
            </div>
            <button className="btn btn-solid" style={{ width: "100%", marginTop: "1.75rem" }} onClick={() => show("calc")}>
              Рассчитать под нашу компанию
            </button>
            {data.project.note && <p className="note" style={{ marginTop: "1.25rem" }}>{data.project.note}</p>}
          </div>
        </div>
      </Section>

      {/* ── Релевантные кейсы ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <Section kicker="Кейсы по этому продукту" h2="Как это работает у компаний вашего профиля">
          <div className="grid g2">
            {related.map((c) => (
              <article key={c.slug} className="panel" style={{ padding: "1.75rem" }}>
                <p className="dim" style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.industry}</p>
                <h3 className="h3" style={{ marginTop: "0.6rem", fontSize: "1.35rem" }}>{c.client}</h3>
                <p className="muted" style={{ marginTop: "0.8rem", fontSize: "0.92rem" }}>{c.intro}</p>
                <Link className="btn" href={`/cases/${c.slug}`} style={{ marginTop: "1.5rem", textDecoration: "none" }}>
                  Открыть кейс <Arrow dir="right" />
                </Link>
              </article>
            ))}
          </div>
        </Section>
      )}

      {/* ── FAQ продукта ───────────────────────────────────────────────── */}
      <Section kicker="Вопросы" h2={`Что спрашивают про ${data.title}`}>
        <div className="panel">
          {data.faq.map((f, i) => (
            <details key={f.q} style={{ borderTop: i ? "1px solid var(--line)" : undefined }}>
              <summary style={{ cursor: "pointer", padding: "1.35rem 1.5rem", fontSize: "1.02rem", fontWeight: 600, listStyle: "none", display: "flex", justifyContent: "space-between", gap: "1rem" }}>
                {f.q}
                <span className="dim" aria-hidden>+</span>
              </summary>
              <p className="muted" style={{ margin: 0, padding: "0 1.5rem 1.5rem", fontSize: "0.94rem", maxWidth: "78ch" }}>{f.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* ── Финальный призыв ───────────────────────────────────────────── */}
      <Section>
        <div className="panel" style={{ padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "52ch" }}>
            <h2 className="h2" style={{ fontSize: "clamp(1.4rem, 1.1rem + 1.4vw, 2rem)" }}>Подойдёт ли {data.title} вашей компании</h2>
            <p className="muted" style={{ marginTop: "0.9rem", fontSize: "0.96rem" }}>
              За одну встречу разберём процессы и скажем прямо: этот продукт, другой из линейки или пока не нужно ничего менять. Письменное заключение остаётся у вас.
            </p>
          </div>
          <button className="btn btn-solid btn-lg" onClick={() => show("lead")}>Записаться на аудит <Arrow dir="right" /></button>
        </div>
      </Section>
    </>
  );
}
