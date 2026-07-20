"use client";

import { Section, Arrow } from "./ui";
import { Breadcrumbs } from "./shell";
import { careers } from "@/content/careers";

export function CareersView() {
  const { hero, why, positions, positionsNote, process, cta } = careers;

  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Вакансии" }]} />

      <section className="section" style={{ paddingBlock: "clamp(2.5rem, 2rem + 4vw, 4.5rem)" }}>
        <div className="wrap">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="h1" style={{ maxWidth: "20ch" }}>{hero.h1}</h1>
          <p className="lead" style={{ marginTop: "1.5rem", maxWidth: "58ch" }}>{hero.lead}</p>
        </div>
      </section>

      {/* ── Почему у нас ────────────────────────────────────────────────── */}
      <Section kicker={why.kicker} h2={why.h2}>
        <div className="grid g2">
          {why.items.map((it) => (
            <article key={it.title} className="panel" style={{ padding: "1.6rem" }}>
              <h3 className="h3">{it.title}</h3>
              <p className="muted" style={{ marginTop: "0.7rem", fontSize: "0.92rem" }}>{it.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Открытые позиции ───────────────────────────────────────────── */}
      <Section kicker="Открытые позиции" h2="Кого ищем сейчас">
        <div className="grid" style={{ gap: "1.25rem" }}>
          {positions.map((p) => (
            <article key={p.id} className="panel" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              <div className="split" style={{ gap: "clamp(1.5rem, 3vw, 3rem)" }}>
                <div>
                  <h3 className="h3" style={{ fontSize: "clamp(1.2rem, 1.05rem + 0.8vw, 1.6rem)" }}>{p.title}</h3>
                  <p className="dim" style={{ fontSize: "0.82rem", marginTop: "0.5rem", letterSpacing: "0.06em", textTransform: "uppercase" }}>{p.type}</p>
                  <p className="muted" style={{ marginTop: "1rem", fontSize: "0.94rem" }}>{p.about}</p>
                  <a className="btn" href={`${cta.emailHref}%20%C2%B7%20${encodeURIComponent(p.title)}`} style={{ marginTop: "1.5rem", textDecoration: "none" }}>
                    Откликнуться <Arrow dir="right" />
                  </a>
                </div>
                <div>
                  <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>Что нужно</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0.8rem 0 0", display: "grid", gap: "0.55rem" }}>
                    {p.need.map((n) => (
                      <li key={n} className="muted" style={{ fontSize: "0.9rem", display: "flex", gap: "0.6rem" }}>
                        <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{n}
                      </li>
                    ))}
                  </ul>
                  <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: "1.25rem 0 0" }}>Будет плюсом</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: "0.8rem 0 0", display: "grid", gap: "0.55rem" }}>
                    {p.plus.map((n) => (
                      <li key={n} className="dim" style={{ fontSize: "0.86rem", display: "flex", gap: "0.6rem" }}>
                        <span aria-hidden>+</span>{n}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="note" style={{ marginTop: "1.75rem" }}>{positionsNote}</p>
      </Section>

      {/* ── Как проходит найм ──────────────────────────────────────────── */}
      <Section kicker={process.kicker} h2={process.h2}>
        <div className="grid g4">
          {process.steps.map((s) => (
            <article key={s.n} style={{ borderTop: "1px solid var(--line)", paddingTop: "1.25rem" }}>
              <span className="ghost" style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)" }}>{s.n}</span>
              <h3 className="h3" style={{ marginTop: "0.8rem", fontSize: "1.05rem" }}>{s.title}</h3>
              <p className="muted" style={{ marginTop: "0.6rem", fontSize: "0.88rem" }}>{s.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <Section>
        <div className="panel" style={{ padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "52ch" }}>
            <h2 className="h2" style={{ fontSize: "clamp(1.4rem, 1.1rem + 1.4vw, 2rem)" }}>{cta.h2}</h2>
            <p className="muted" style={{ marginTop: "0.9rem", fontSize: "0.96rem" }}>{cta.text}</p>
            <p className="note" style={{ marginTop: "1.25rem" }}>{cta.note}</p>
          </div>
          <a className="btn btn-solid btn-lg" href={cta.emailHref} style={{ textDecoration: "none" }}>
            Написать нам <Arrow dir="right" />
          </a>
        </div>
      </Section>
    </>
  );
}
