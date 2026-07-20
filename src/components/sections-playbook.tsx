"use client";

import { Placeholder, Section, Arrow } from "./ui";
import { usePopup } from "./popup-context";
import { clients, contacts } from "@/content/blocks";
import { chatWidget, effect, leadMagnet, logoStrip, roles, trust, unifiedBase } from "@/content/playbook";

/** TR-01 · лента логотипов под героем */
export function LogoStrip() {
  return (
    <div className="wrap" style={{ paddingBlock: "1rem 2rem" }}>
      <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "1rem" }}>
        {logoStrip.title}
      </p>
      <Placeholder img={{ brief: logoStrip.imgBrief }} style={{ minHeight: 110 }} />
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.9rem" }}>
        {clients.items.slice(0, 10).map((c) => (
          <span key={c} className="dim" style={{ fontSize: "0.76rem", border: "1px solid var(--line)", borderRadius: 999, padding: "0.3rem 0.75rem" }}>{c}</span>
        ))}
      </div>
      <p className="note" style={{ marginTop: "1rem" }}>{logoStrip.note}</p>
    </div>
  );
}

/** MD-04 ★ · единая база на конкретных связках */
export function UnifiedBase() {
  return (
    <Section id="unified" kicker={unifiedBase.kicker} h2={unifiedBase.h2} lead={unifiedBase.lead}>
      <div className="grid g2">
        {unifiedBase.links.map((l) => (
          <article key={l.action} className="panel" style={{ padding: "1.5rem" }}>
            <h3 className="h3" style={{ fontSize: "1.05rem" }}>{l.action}</h3>
            <p style={{ margin: "0.8rem 0 0", fontSize: "0.94rem", display: "flex", gap: "0.6rem" }}>
              <span aria-hidden style={{ color: "var(--accent)", flex: "none" }}>→</span>
              {l.effect}
            </p>
            <p className="dim" style={{ margin: "0.9rem 0 0", fontSize: "0.82rem" }}>{l.old}</p>
          </article>
        ))}
      </div>
      <Placeholder img={unifiedBase.img} style={{ minHeight: 220, marginTop: "2rem" }} />
    </Section>
  );
}

/** VL-01 / VL-02 · эффект внедрения */
export function Effect() {
  return (
    <Section id="effect" kicker={effect.kicker} h2={effect.h2} lead={effect.lead}>
      <div className="split">
        <div className="grid" style={{ gap: "1.4rem" }}>
          {effect.bars.map((b) => (
            <div key={b.label}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: "1rem", alignItems: "baseline" }}>
                <span style={{ fontSize: "0.94rem", fontWeight: 600 }}>{b.label}</span>
                <span style={{ fontSize: "1.05rem", fontWeight: 700, whiteSpace: "nowrap" }}>
                  <span className="dim" style={{ fontWeight: 400 }}>{b.from} …</span> {b.to}
                </span>
              </div>
              <div style={{ height: 8, background: "var(--panel)", border: "1px solid var(--line)", borderRadius: 999, marginTop: "0.6rem", overflow: "hidden" }}>
                <div style={{ width: `${b.pct}%`, height: "100%", background: "var(--dim)" }} />
              </div>
              <p className="dim" style={{ fontSize: "0.8rem", margin: "0.5rem 0 0" }}>{b.note}</p>
            </div>
          ))}
        </div>

        <div className="grid" style={{ gap: "1rem", alignSelf: "start" }}>
          {effect.multipliers.map((m) => (
            <div key={m.label} className="panel" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)", fontWeight: 700, lineHeight: 1, letterSpacing: "-0.03em" }}>{m.value}</div>
              <p className="muted" style={{ margin: "0.7rem 0 0", fontSize: "0.9rem" }}>{m.label}</p>
              {m.note && <p className="dim" style={{ margin: "0.35rem 0 0", fontSize: "0.78rem" }}>{m.note}</p>}
            </div>
          ))}
        </div>
      </div>
      <p className="note" style={{ marginTop: "2rem" }}>{effect.note}</p>
    </Section>
  );
}

/** AU-02 · кому полезен, по ролям */
export function Roles() {
  return (
    <Section id="roles" kicker={roles.kicker} h2={roles.h2} lead={roles.lead}>
      <div className="grid g3">
        {roles.items.map((r) => (
          <article key={r.role} className="panel" style={{ padding: "1.6rem" }}>
            <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.14em", textTransform: "uppercase", margin: 0 }}>{r.role}</p>
            <h3 className="h3" style={{ marginTop: "0.8rem", fontSize: "1.02rem" }}>«{r.pain}»</h3>
            <p className="muted" style={{ marginTop: "0.8rem", fontSize: "0.9rem" }}>{r.gain}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/** TR-03 ★ · регалии + цитата основателя */
export function Trust() {
  return (
    <Section id="trust" kicker={trust.kicker} h2={trust.h2}>
      <div className="grid g4" style={{ marginBottom: "2.5rem" }}>
        {trust.regalia.map((r) => (
          <div key={r.value} className="panel" style={{ padding: "1.4rem 1.5rem" }}>
            <div style={{ fontSize: "clamp(1.3rem, 1rem + 1.2vw, 1.9rem)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.1 }}>{r.value}</div>
            <div className="muted" style={{ fontSize: "0.84rem", marginTop: "0.6rem" }}>{r.label}</div>
          </div>
        ))}
      </div>

      <div className="panel" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        <div className="split" style={{ alignItems: "center" }}>
          <blockquote style={{ margin: 0 }}>
            <p className="lead" style={{ margin: 0, color: "var(--text)", fontSize: "clamp(1.05rem, 1rem + 0.6vw, 1.4rem)" }}>
              «{trust.quote.text}»
            </p>
            <footer className="dim" style={{ marginTop: "1.25rem", fontSize: "0.88rem" }}>{trust.quote.author}</footer>
            <p className="note" style={{ marginTop: "1.25rem" }}>{trust.quote.note}</p>
          </blockquote>
          <Placeholder img={trust.img} style={{ minHeight: 340 }} />
        </div>
      </div>
    </Section>
  );
}

/** CV-04 ★ + CV-05 · лид-магниты */
export function LeadMagnet() {
  const { show } = usePopup();
  return (
    <Section id="leadmagnet" kicker={leadMagnet.kicker} h2={leadMagnet.h2} lead={leadMagnet.lead}>
      <div className="panel" style={{ padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
        <div className="split" style={{ alignItems: "center" }}>
          <div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: "0.7rem" }}>
              {leadMagnet.bullets.map((b) => (
                <li key={b} className="muted" style={{ fontSize: "0.94rem", display: "flex", gap: "0.6rem" }}>
                  <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{b}
                </li>
              ))}
            </ul>
            <button className="btn btn-solid btn-lg" style={{ marginTop: "2rem" }} onClick={() => show("calc")}>
              {leadMagnet.cta} <Arrow dir="right" />
            </button>
            {/* CV-03 · микрокопирайт снятия риска под кнопкой */}
            <p className="dim" style={{ fontSize: "0.82rem", marginTop: "0.9rem" }}>{leadMagnet.micro}</p>
          </div>

          <div className="panel-2" style={{ padding: "1.5rem" }}>
            <Placeholder img={{ brief: leadMagnet.expert.imgBrief }} style={{ minHeight: 240 }} />
            <p style={{ margin: "1.1rem 0 0", fontSize: "1rem", fontWeight: 600 }}>{leadMagnet.expert.name}</p>
            <p className="dim" style={{ margin: "0.3rem 0 0", fontSize: "0.82rem" }}>{leadMagnet.expert.role}</p>
            <p className="muted" style={{ margin: "0.8rem 0 0", fontSize: "0.88rem" }}>{leadMagnet.expert.line}</p>
          </div>
        </div>
      </div>

      <h3 className="h3" style={{ margin: "3rem 0 1.25rem" }}>{leadMagnet.docs.h3}</h3>
      <div className="grid g3">
        {leadMagnet.docs.items.map((d) => (
          <article key={d.name} className="panel" style={{ padding: "1.6rem", display: "flex", flexDirection: "column" }}>
            <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.12em", textTransform: "uppercase", margin: 0 }}>{d.format}</p>
            <h4 className="h3" style={{ marginTop: "0.8rem", fontSize: "1.05rem" }}>{d.name}</h4>
            <p className="muted" style={{ marginTop: "0.7rem", fontSize: "0.9rem" }}>{d.text}</p>
            <button className="btn" style={{ marginTop: "auto", marginBlockStart: "1.5rem" }} onClick={() => show(d.popup)}>
              Скачать
            </button>
          </article>
        ))}
      </div>
      <p className="note" style={{ marginTop: "1.5rem" }}>{leadMagnet.docs.note}</p>
    </Section>
  );
}

/** CV-08 · Telegram-first виджет (в прототипе — заглушка) */
export function ChatWidget() {
  return (
    <a
      href={contacts.telegram}
      target="_blank"
      rel="noopener noreferrer"
      className="chat-widget"
      title={chatWidget.note}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M21 4 3 11l6 2.5L12 20l3-5 6-11Z" />
        <path d="m9 13.5 3-2.5" />
      </svg>
      <span>{chatWidget.label}</span>
    </a>
  );
}
