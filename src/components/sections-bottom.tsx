"use client";

import Link from "next/link";
import { Placeholder, Section, Stat, Arrow } from "./ui";
import { usePopup } from "./popup-context";
import {
  cases, casesMeta, clients, contacts, faq, finalCta, footer,
  industries, nav, navHome, navSecondary, pricing, process, readiness, team, why,
} from "@/content/blocks";

export function Industries() {
  return (
    <Section id="industries" kicker={industries.kicker} h2={industries.h2} lead={industries.lead}>
      <div className="split">
        <div className="grid" style={{ gap: "1.75rem" }}>
          {industries.groups.map((g) => (
            <div key={g.name}>
              <h3 className="h3" style={{ marginBottom: "0.9rem" }}>{g.name}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {g.items.map((i) => (
                  <span key={i} className="panel-2" style={{ padding: "0.5rem 0.9rem", fontSize: "0.85rem" }}>{i}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
        <Placeholder img={industries.img} style={{ minHeight: 420 }} />
      </div>
    </Section>
  );
}

export function Cases() {
  return (
    <Section id="cases" kicker={casesMeta.kicker} h2={casesMeta.h2} lead={casesMeta.lead}>
      <div className="grid" style={{ gap: "1.5rem" }}>
        {cases.map((c) => (
          <article key={c.slug} className="panel" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
            <div className="split" style={{ gap: "clamp(1.5rem, 3vw, 3rem)" }}>
              <div>
                <p className="dim" style={{ fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.industry}</p>
                <h3 className="h2" style={{ fontSize: "clamp(1.4rem, 1.1rem + 1.2vw, 2rem)", marginTop: "0.7rem" }}>{c.client}</h3>
                <p className="dim" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>{c.scale}</p>
                <p className="muted" style={{ marginTop: "1.1rem", fontSize: "0.94rem" }}>{c.intro}</p>
                <Link className="btn" href={`/cases/${c.slug}`} style={{ marginTop: "1.5rem", textDecoration: "none" }}>
                  {casesMeta.cta} <Arrow dir="right" />
                </Link>
              </div>
              <div className="grid g2" style={{ gap: "0.7rem" }}>
                {c.after.map((a) => (
                  <div key={a.label} className="panel-2" style={{ padding: "1.1rem 1.2rem" }}>
                    <div style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{a.value}</div>
                    <div className="muted" style={{ fontSize: "0.8rem", marginTop: "0.35rem" }}>{a.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <h3 className="h3" style={{ margin: "3.5rem 0 1.25rem" }}>{clients.h3}</h3>
      <Placeholder img={{ brief: clients.imgBrief }} style={{ minHeight: 130 }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1rem" }}>
        {clients.items.map((c) => (
          <span key={c} className="dim" style={{ fontSize: "0.78rem", border: "1px solid var(--line)", borderRadius: 999, padding: "0.35rem 0.8rem" }}>{c}</span>
        ))}
      </div>
    </Section>
  );
}

export function Process() {
  return (
    <Section id="process" kicker={process.kicker} h2={process.h2} lead={process.lead}>
      <div className="grid" style={{ gap: 0 }}>
        {process.steps.map((s) => (
          <article key={s.n} style={{ display: "grid", gridTemplateColumns: "auto minmax(0,1fr)", gap: "clamp(1rem, 3vw, 2.5rem)", padding: "1.75rem 0", borderTop: "1px solid var(--line)" }}>
            <span className="ghost" style={{ fontSize: "clamp(2.2rem, 1.5rem + 3vw, 4rem)" }}>{s.n}</span>
            <div className="split" style={{ gap: "clamp(1rem, 3vw, 3rem)" }}>
              <div>
                <p className="dim" style={{ fontSize: "0.76rem", letterSpacing: "0.14em", textTransform: "uppercase" }}>{s.name}</p>
                <h3 className="h3" style={{ marginTop: "0.5rem" }}>{s.title}</h3>
              </div>
              <div>
                <p className="muted" style={{ margin: 0, fontSize: "0.94rem" }}>{s.text}</p>
                <p className="dim" style={{ marginTop: "0.8rem", fontSize: "0.82rem" }}>На выходе: {s.out}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
      <Placeholder img={process.img} style={{ minHeight: 180, marginTop: "2.5rem" }} />
    </Section>
  );
}

export function Readiness() {
  const { show } = usePopup();
  return (
    <Section id="readiness" kicker={readiness.kicker} h2={readiness.h2} lead={readiness.lead}>
      <div className="grid g3">
        {readiness.items.map((r) => (
          <article key={r.title} className="panel" style={{ padding: "1.6rem" }}>
            <h3 className="h3">{r.title}</h3>
            <p className="muted" style={{ marginTop: "0.7rem", fontSize: "0.92rem" }}>{r.text}</p>
          </article>
        ))}
      </div>
      <div className="panel" style={{ marginTop: "2rem", padding: "1.75rem", display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <h3 className="h3">{readiness.cta}</h3>
          <p className="dim" style={{ fontSize: "0.85rem", marginTop: "0.4rem" }}>{readiness.ctaNote}</p>
        </div>
        <button className="btn btn-solid btn-lg" onClick={() => show("checklist")}>Скачать <Arrow /></button>
      </div>
    </Section>
  );
}

export function Why() {
  return (
    <Section id="why" kicker={why.kicker} h2={why.h2}>
      <div className="grid g4" style={{ marginBottom: "2.5rem" }}>
        {why.stats.map((s) => <Stat key={s.label} {...s} />)}
      </div>
      <div className="split">
        <div className="grid" style={{ gap: "1.25rem" }}>
          {why.points.map((p) => (
            <article key={p.title} style={{ borderTop: "1px solid var(--line)", paddingTop: "1.25rem" }}>
              <h3 className="h3">{p.title}</h3>
              <p className="muted" style={{ marginTop: "0.6rem", fontSize: "0.92rem" }}>{p.text}</p>
            </article>
          ))}
        </div>
        <Placeholder img={why.imgCert} style={{ minHeight: 400 }} />
      </div>
    </Section>
  );
}

export function Team() {
  return (
    <Section id="team" kicker={team.kicker} h2={team.h2}>
      <div className="grid g3">
        {team.people.map((p) => (
          <article key={p.name} className="panel" style={{ padding: "1.25rem" }}>
            <Placeholder img={{ brief: `Портрет: ${p.name}, ${p.role}. Единый фон и свет со всей командой.` }} style={{ minHeight: 190, marginBottom: "1.1rem" }} />
            <h3 className="h3" style={{ fontSize: "1.05rem" }}>{p.name}</h3>
            <p className="dim" style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>{p.role}</p>
            <p className="muted" style={{ fontSize: "0.86rem", marginTop: "0.7rem" }}>{p.note}</p>
          </article>
        ))}
      </div>
      <p className="note" style={{ marginTop: "1.5rem" }}>ТЗ на съёмку: {team.imgBrief}</p>
    </Section>
  );
}

export function Pricing() {
  const { show } = usePopup();
  return (
    <Section id="pricing" kicker={pricing.kicker} h2={pricing.h2} lead={pricing.lead}>
      <p className="note" style={{ marginBottom: "1.75rem" }}>{pricing.note}</p>
      <div className="grid g3" style={{ alignItems: "stretch" }}>
        {pricing.tariffs.map((t) => (
          <article key={t.id} className="panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column", borderColor: t.popular ? "var(--dim)" : undefined }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "0.5rem" }}>
              <h3 className="h3">{t.name}</h3>
              {t.popular && <span className="note">Чаще всего</span>}
            </div>
            <p className="dim" style={{ fontSize: "0.85rem", marginTop: "0.7rem" }}>{t.for}</p>
            <div style={{ marginTop: "1.5rem", paddingTop: "1.25rem", borderTop: "1px solid var(--line)" }}>
              <div style={{ fontSize: "1.8rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{t.price}</div>
              <div className="dim" style={{ fontSize: "0.8rem", marginTop: "0.3rem" }}>{t.priceNote} · срок {t.term}</div>
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0 1.75rem", display: "grid", gap: "0.6rem" }}>
              {t.includes.map((i) => (
                <li key={i} className="muted" style={{ fontSize: "0.88rem", display: "flex", gap: "0.6rem" }}>
                  <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{i}
                </li>
              ))}
            </ul>
            <button className={`btn ${t.popular ? "btn-solid" : ""}`} style={{ marginTop: "auto" }} onClick={() => show("calc")}>
              Рассчитать под нас
            </button>
          </article>
        ))}
      </div>

      <div className="panel" style={{ marginTop: "2rem", padding: "1.75rem" }}>
        <h3 className="h3">{pricing.guarantee.title}</h3>
        <div className="grid g2" style={{ marginTop: "1.25rem" }}>
          {pricing.guarantee.items.map((g) => (
            <p key={g} className="muted" style={{ margin: 0, fontSize: "0.92rem", display: "flex", gap: "0.6rem" }}>
              <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{g}
            </p>
          ))}
        </div>
      </div>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" kicker={faq.kicker} h2={faq.h2}>
      <div className="panel">
        {faq.items.map((f, i) => (
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
  );
}

export function FinalCta() {
  const { show } = usePopup();
  return (
    <Section id="final">
      <div className="panel" style={{ padding: "clamp(1.75rem, 4vw, 3.5rem)" }}>
        <div className="split" style={{ alignItems: "center" }}>
          <div>
            <h2 className="h2">{finalCta.h2}</h2>
            <p className="lead" style={{ marginTop: "1.25rem" }}>{finalCta.lead}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.75rem 0 0", display: "grid", gap: "0.7rem" }}>
              {finalCta.bullets.map((b) => (
                <li key={b} className="muted" style={{ fontSize: "0.94rem", display: "flex", gap: "0.6rem" }}>
                  <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{b}
                </li>
              ))}
            </ul>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2rem" }}>
              <button className="btn btn-solid btn-lg" onClick={() => show("lead")}>{finalCta.cta} <Arrow dir="right" /></button>
              <button className="btn btn-lg" onClick={() => show("zoom")}>{finalCta.altCta}</button>
            </div>
            <p className="dim" style={{ fontSize: "0.82rem", marginTop: "1rem" }}>{finalCta.alt}</p>
          </div>
          <Placeholder
            img={{ brief: "Фото встречи консультанта BIS с клиентом на его производстве: двое смотрят в ноутбук с открытой системой. Живой репортажный кадр, не постановка в переговорной." }}
            style={{ minHeight: 380 }}
          />
        </div>
      </div>
    </Section>
  );
}

export function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--line)", paddingBlock: "3.5rem 2.5rem" }}>
      <div className="wrap">
        <div className="grid g4" style={{ gap: "2rem" }}>
          <div>
            <div className="panel" style={{ padding: "0.6rem 1.4rem", fontSize: "0.75rem", letterSpacing: "0.16em", color: "var(--dim)", display: "inline-block" }}>ЛОГО</div>
            <p className="dim" style={{ fontSize: "0.82rem", marginTop: "1rem" }}>{contacts.legal}</p>
          </div>
          <div>
            <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 0 }}>Контакты</p>
            <p style={{ margin: "0.9rem 0 0", fontSize: "0.92rem" }}>
              <a href={contacts.phoneHref} style={{ color: "var(--text)", textDecoration: "none" }}>{contacts.phone}</a>
            </p>
            <p className="muted" style={{ margin: "0.4rem 0 0", fontSize: "0.92rem" }}>{contacts.email}</p>
            <p className="muted" style={{ margin: "0.4rem 0 0", fontSize: "0.88rem" }}>{contacts.address}</p>
          </div>
          <div>
            <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 0 }}>{footer.navTitle}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0.9rem 0 0", display: "grid", gap: "0.5rem" }}>
              {nav.map((n) => (
                <li key={n.href}><Link href={n.href} className="muted" style={{ textDecoration: "none", fontSize: "0.9rem" }}>{n.label}</Link></li>
              ))}
            </ul>
            <ul style={{ listStyle: "none", padding: 0, margin: "0.9rem 0 0", display: "grid", gap: "0.4rem" }}>
              {navHome.map((n) => (
                <li key={n.href}><Link href={n.href} className="dim" style={{ textDecoration: "none", fontSize: "0.85rem" }}>{n.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", marginTop: 0 }}>Компания</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0.9rem 0 0", display: "grid", gap: "0.5rem" }}>
              {navSecondary.map((n) => (
                <li key={n.href}><Link href={n.href} className="muted" style={{ textDecoration: "none", fontSize: "0.9rem" }}>{n.label}</Link></li>
              ))}
            </ul>
            <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: "1.5rem 0 0" }}>{footer.legalTitle}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "0.9rem 0 0", display: "grid", gap: "0.5rem" }}>
              {footer.legal.map((l) => (
                <li key={l.href}><a href={l.href} className="muted" style={{ textDecoration: "none", fontSize: "0.9rem" }}>{l.label}</a></li>
              ))}
            </ul>
          </div>
        </div>
        <p className="note" style={{ marginTop: "2.5rem" }}>{footer.note}</p>
      </div>
    </footer>
  );
}

export function StickyMobile() {
  const { show } = usePopup();
  return (
    <div className="sticky-mobile">
      <a href={contacts.phoneHref} className="btn" style={{ flex: 1, padding: "0.85rem 0.75rem" }}>Позвонить</a>
      {/* Квиз-расчёт трижды цепляет аватара по ходу страницы, но на мобильном без sticky не нажимается */}
      <button className="btn btn-solid" style={{ flex: 2, padding: "0.85rem 1rem" }} onClick={() => show("calc")}>Посчитать, сколько теряю</button>
    </div>
  );
}
