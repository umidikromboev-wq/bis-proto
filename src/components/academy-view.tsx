"use client";

import { Section, Stat, Arrow } from "./ui";
import { Breadcrumbs } from "./shell";
import { usePopup } from "./popup-context";
import { academy } from "@/content/academy";

export function AcademyView() {
  const { show } = usePopup();
  const { hero, why, formats, materials, cta } = academy;

  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "SAP Академия" }]} />

      <section className="section" style={{ paddingBlock: "clamp(2.5rem, 2rem + 4vw, 4.5rem)" }}>
        <div className="wrap">
          <p className="kicker">{hero.kicker}</p>
          <h1 className="h1" style={{ maxWidth: "22ch" }}>{hero.h1}</h1>
          <p className="lead" style={{ marginTop: "1.5rem", maxWidth: "60ch" }}>{hero.lead}</p>
        </div>
      </section>

      {/* ── Зачем обучение ─────────────────────────────────────────────── */}
      <Section kicker={why.kicker} h2={why.h2} lead={why.lead}>
        <div className="grid g3">
          {why.stats.map((s) => <Stat key={s.label} {...s} />)}
        </div>
      </Section>

      {/* ── Форматы ────────────────────────────────────────────────────── */}
      <Section kicker={formats.kicker} h2={formats.h2}>
        <div className="grid g2">
          {formats.items.map((f) => (
            <article key={f.title} className="panel" style={{ padding: "1.75rem" }}>
              <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>{f.for}</p>
              <h3 className="h3" style={{ marginTop: "0.7rem" }}>{f.title}</h3>
              <p className="muted" style={{ marginTop: "0.8rem", fontSize: "0.92rem" }}>{f.text}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1.1rem" }}>
                {f.marks.map((m) => (
                  <span key={m} className="panel-2 dim" style={{ padding: "0.4rem 0.8rem", fontSize: "0.78rem" }}>{m}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </Section>

      {/* ── Материалы ──────────────────────────────────────────────────── */}
      <Section kicker={materials.kicker} h2={materials.h2} lead={materials.lead}>
        <div className="panel" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
          <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.9rem" }}>
            {materials.items.map((m) => (
              <li key={m} className="muted" style={{ fontSize: "0.98rem", display: "flex", gap: "0.7rem" }}>
                <span aria-hidden style={{ color: "var(--accent)", flex: "none" }}>—</span>{m}
              </li>
            ))}
          </ul>
        </div>
        <p className="note" style={{ marginTop: "1.5rem" }}>{materials.note}</p>
      </Section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <Section>
        <div className="panel" style={{ padding: "clamp(1.75rem, 4vw, 3rem)" }}>
          <div className="split" style={{ alignItems: "center" }}>
            <div>
              <h2 className="h2" style={{ fontSize: "clamp(1.4rem, 1.1rem + 1.4vw, 2rem)" }}>{cta.h2}</h2>
              <p className="muted" style={{ marginTop: "0.9rem", fontSize: "0.96rem" }}>{cta.text}</p>
              <p className="note" style={{ marginTop: "1.25rem" }}>{cta.note}</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              <button className="btn btn-solid btn-lg" onClick={() => show("lead")}>{cta.primary} <Arrow dir="right" /></button>
              <button className="btn btn-lg" onClick={() => show("checklist")}>{cta.secondary}</button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
