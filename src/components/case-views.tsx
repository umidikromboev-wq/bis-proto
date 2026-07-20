"use client";

import Link from "next/link";
import { Placeholder, Section, Arrow } from "./ui";
import { Breadcrumbs } from "./shell";
import { usePopup } from "./popup-context";
import { cases, casesMeta, clients } from "@/content/blocks";
import type { Case } from "@/content/types";

/** Список всех кейсов — /cases */
export function CasesIndex() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Кейсы" }]} />

      <Section kicker={casesMeta.kicker} h2="Кейсы внедрения SAP" lead={casesMeta.lead}>
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
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {clients.items.map((c) => (
            <span key={c} className="dim" style={{ fontSize: "0.78rem", border: "1px solid var(--line)", borderRadius: 999, padding: "0.35rem 0.8rem" }}>{c}</span>
          ))}
        </div>
        <p className="note" style={{ marginTop: "2rem" }}>
          [?] Запросить у клиента ещё 2–3 кейса с цифрами — трёх мало для раздела «Кейсы» как отдельной страницы
        </p>
      </Section>
    </>
  );
}

/** Страница одного кейса — /cases/[slug] */
export function CaseView({ item }: { item: Case }) {
  const { show } = usePopup();
  const others = cases.filter((c) => c.slug !== item.slug);

  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Кейсы", href: "/cases" }, { label: item.client }]} />

      <section className="section" style={{ paddingBlock: "clamp(2.5rem, 2rem + 4vw, 4.5rem)" }}>
        <div className="wrap">
          <p className="kicker">{item.industry}</p>
          <h1 className="h1" style={{ maxWidth: "18ch" }}>{item.client}</h1>
          <p className="dim" style={{ fontSize: "0.9rem", marginTop: "1rem" }}>{item.scale}</p>
          <p className="lead" style={{ marginTop: "1.5rem", maxWidth: "62ch" }}>{item.intro}</p>
          <Placeholder img={item.img} style={{ minHeight: 340, marginTop: "2.5rem" }} />
        </div>
      </section>

      <Section kicker="До внедрения" h2="С чем компания пришла">
        <div className="grid g2">
          {item.before.map((b, i) => (
            <article key={b} style={{ display: "flex", gap: "1.25rem", padding: "1.25rem 0", borderTop: "1px solid var(--line)" }}>
              <span className="ghost" style={{ fontSize: "clamp(2rem, 1.5rem + 2vw, 3rem)" }}>{i + 1}</span>
              <p className="muted" style={{ margin: 0, fontSize: "0.96rem" }}>{b}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section kicker="После внедрения" h2="Что изменилось" lead="Цифры взяты из отчётов самого клиента после запуска системы.">
        <div className="grid g4">
          {item.after.map((a) => (
            <div key={a.label} className="panel" style={{ padding: "1.5rem" }}>
              <div style={{ fontSize: "clamp(1.7rem, 1.2rem + 1.4vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>{a.value}</div>
              <div className="muted" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>{a.label}</div>
            </div>
          ))}
        </div>

        {item.quote && (
          <blockquote className="panel" style={{ margin: "2.5rem 0 0", padding: "clamp(1.5rem, 3vw, 2.5rem)" }}>
            <p className="lead" style={{ margin: 0, fontSize: "clamp(1.05rem, 1rem + 0.5vw, 1.35rem)", color: "var(--text)" }}>
              «{item.quote.text}»
            </p>
            <footer className="dim" style={{ marginTop: "1.25rem", fontSize: "0.86rem" }}>{item.quote.author}</footer>
          </blockquote>
        )}
      </Section>

      <Section>
        <div className="panel" style={{ padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "52ch" }}>
            <h2 className="h2" style={{ fontSize: "clamp(1.4rem, 1.1rem + 1.4vw, 2rem)" }}>Хотите такой же разбор по своей компании</h2>
            <p className="muted" style={{ marginTop: "0.9rem", fontSize: "0.96rem" }}>
              Контакт этого клиента дадим на встрече — спросите у него всё, что хотите, включая то, что шло не по плану.
            </p>
          </div>
          <button className="btn btn-solid btn-lg" onClick={() => show("lead")}>Записаться на аудит <Arrow dir="right" /></button>
        </div>

        <h3 className="h3" style={{ margin: "3rem 0 1.25rem" }}>Другие кейсы</h3>
        <div className="grid g2">
          {others.map((c) => (
            <Link key={c.slug} href={`/cases/${c.slug}`} className="panel" style={{ padding: "1.5rem", textDecoration: "none", color: "inherit", display: "block" }}>
              <p className="dim" style={{ fontSize: "0.76rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{c.industry}</p>
              <h4 className="h3" style={{ marginTop: "0.6rem", fontSize: "1.2rem" }}>{c.client}</h4>
              <p className="muted" style={{ marginTop: "0.7rem", fontSize: "0.9rem" }}>{c.intro}</p>
            </Link>
          ))}
        </div>
      </Section>
    </>
  );
}
