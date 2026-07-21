"use client";

import Link from "next/link";
import { Placeholder, Section, Arrow } from "./ui";
import { usePopup } from "./popup-context";
import { bridge, cost, hero, nav, pain, solution, products } from "@/content/blocks";

export function Header() {
  const { show } = usePopup();
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(44,44,47,0.88)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--line)" }}>
      <div className="wrap" style={{ display: "flex", alignItems: "center", gap: "1.25rem", height: 72 }}>
        <Link href="/" className="panel" style={{ padding: "0.6rem 1.4rem", fontSize: "0.75rem", letterSpacing: "0.16em", color: "var(--dim)", textDecoration: "none", flex: "none" }}>
          ЛОГО
        </Link>
        <span className="dim nav-desktop" style={{ fontSize: "0.75rem", lineHeight: 1.3, maxWidth: 170 }}>
          Внедрение SAP<br />для производства и торговли
        </span>

        <nav style={{ marginLeft: "auto", display: "flex", gap: "1.35rem" }} className="nav-desktop">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} style={{ color: "var(--muted)", textDecoration: "none", fontSize: "0.86rem", whiteSpace: "nowrap" }}>
              {n.label}
            </Link>
          ))}
        </nav>
        <button className="btn nav-desktop" onClick={() => show("lead")}>Получить расчёт</button>
        <button className="btn nav-mobile" onClick={() => show("menu")} style={{ marginLeft: "auto", padding: "0.7rem 1rem" }} aria-label="Открыть меню">
          Меню
        </button>
      </div>
      <style>{`
        .nav-mobile { display: none; }
        @media (max-width: 1080px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: inline-flex; }
        }
      `}</style>
    </header>
  );
}

export function Hero() {
  const { show } = usePopup();
  return (
    <section className="section" style={{ paddingBlock: "clamp(3rem, 2rem + 5vw, 6rem)" }}>
      <div className="wrap split" style={{ alignItems: "center" }}>
        <div>
          <p className="kicker">{hero.eyebrow}</p>
          <h1 className="h1">{hero.h1}</h1>
          <p className="lead" style={{ marginTop: "1.5rem", maxWidth: "48ch" }}>{hero.lead}</p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "2.25rem" }}>
            <button className="btn btn-solid btn-lg" onClick={() => show("lead")}>
              {hero.cta} <Arrow dir="right" />
            </button>
            <Link href="/simulator" className="btn btn-lg" style={{ textDecoration: "none" }}>{hero.ctaSecondary}</Link>
          </div>

          <dl style={{ display: "flex", flexWrap: "wrap", gap: "2.5rem", marginTop: "3rem" }}>
            {hero.facts.map((f) => (
              <div key={f.label}>
                <dt style={{ fontSize: "1.6rem", fontWeight: 700, letterSpacing: "-0.02em" }}>{f.value}</dt>
                <dd className="dim" style={{ margin: "0.3rem 0 0", fontSize: "0.82rem", maxWidth: "18ch" }}>{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div style={{ position: "relative" }}>
          <Placeholder img={hero.img} style={{ minHeight: 460 }} />
          <div className="panel-2" style={{ position: "absolute", left: "1rem", bottom: "1rem", padding: "0.9rem 1.1rem" }}>
            <div style={{ fontSize: "1.3rem", fontWeight: 700 }}>{hero.badgeOnImg.value}</div>
            <div className="dim" style={{ fontSize: "0.75rem", maxWidth: "22ch" }}>{hero.badgeOnImg.label}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Bridge() {
  return (
    <div className="wrap" style={{ paddingBlock: "1rem 3rem" }}>
      <p className="muted" style={{ maxWidth: "62ch", margin: "0 auto", textAlign: "center", fontSize: "0.94rem", display: "flex", gap: "0.7rem", alignItems: "flex-start" }}>
        <span aria-hidden style={{ width: 7, height: 7, background: "var(--accent)", flex: "none", marginTop: 8 }} />
        {bridge.text}
      </p>
    </div>
  );
}

export function Pain() {
  const { show } = usePopup();
  return (
    <Section id="pain" kicker={pain.kicker} h2={pain.h2} lead={pain.lead}>
      <div className="grid g3">
        {pain.items.map((p, i) => (
          <article key={p.title} className="panel" style={{ padding: "1.6rem" }}>
            <span className="dim" style={{ fontSize: "0.75rem" }}>0{i + 1}</span>
            <h3 className="h3" style={{ marginTop: "0.8rem" }}>{p.title}</h3>
            <p className="muted" style={{ marginTop: "0.7rem", fontSize: "0.92rem" }}>{p.text}</p>
          </article>
        ))}
      </div>
      <div style={{ marginTop: "2.5rem", display: "flex", justifyContent: "center" }}>
        <button className="btn btn-lg" onClick={() => show("calc")}>Узнать, что из этого решается системой</button>
      </div>
    </Section>
  );
}

export function Cost() {
  return (
    <Section id="cost" kicker={cost.kicker} h2={cost.h2} lead={cost.lead}>
      <div className="grid g2">
        {cost.items.map((c, i) => (
          <article key={c.title} style={{ display: "flex", gap: "1.25rem", padding: "1.25rem 0", borderTop: "1px solid var(--line)" }}>
            <span className="ghost">{i + 1}</span>
            <div>
              <h3 className="h3">{c.title}</h3>
              <p className="muted" style={{ marginTop: "0.6rem", fontSize: "0.92rem" }}>{c.text}</p>
              {c.source && <p className="dim" style={{ marginTop: "0.5rem", fontSize: "0.78rem" }}>Источник: {c.source}</p>}
            </div>
          </article>
        ))}
      </div>
      {/* Тизер симулятора — сам расчёт живёт на отдельной странице, чтобы не грузить лендинг */}
      <div className="panel" style={{ marginTop: "2.5rem", padding: "1.75rem", display: "flex", flexWrap: "wrap", gap: "1.25rem", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ maxWidth: "46ch" }}>
          <h3 className="h3">Посчитайте свою сумму — на ваших цифрах, без формы и звонка</h3>
          <p className="dim" style={{ fontSize: "0.85rem", marginTop: "0.5rem" }}>Оборот, склад, скидки, ручной труд — каждая строка считается на ваших глазах. Результат можно отправить себе в Telegram.</p>
        </div>
        <Link href="/simulator" className="btn btn-solid btn-lg" style={{ textDecoration: "none" }}>{cost.cta} <Arrow dir="right" /></Link>
      </div>
    </Section>
  );
}

export function Solution() {
  return (
    <Section id="solution" kicker={solution.kicker} h2={solution.h2}>
      <div className="split" style={{ marginBottom: "3.5rem" }}>
        <div>
          {solution.body.map((p) => (
            <p key={p} className="lead" style={{ marginTop: 0, marginBottom: "1.2rem" }}>{p}</p>
          ))}
        </div>
        <Placeholder img={solution.img} style={{ minHeight: 300 }} />
      </div>

      <h3 className="h3" style={{ marginBottom: "0.6rem" }}>{solution.compare.h3}</h3>
      <p className="dim" style={{ fontSize: "0.85rem", marginTop: 0, marginBottom: "1.25rem" }}>{solution.compare.note}</p>

      {/* Десктоп — таблица. На мобильном её читают на одну строку, поэтому там — карточки. */}
      <div className="panel cmp-desktop" style={{ overflowX: "auto" }}>
        <table className="cmp" style={{ minWidth: 720 }}>
          <thead>
            <tr>
              <th>Задача</th>
              <th>Excel и 1С</th>
              <th>SAP Business One</th>
            </tr>
          </thead>
          <tbody>
            {solution.compare.rows.map((r) => (
              <tr key={r.task}>
                <td>{r.task}</td>
                <td className="old">{r.old}</td>
                <td>{r.neu}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="cmp-mobile" style={{ gap: "0.9rem" }}>
        {solution.compare.rows.map((r) => (
          <article key={r.task} className="panel" style={{ padding: "1.25rem" }}>
            <h4 className="h3" style={{ fontSize: "1.02rem" }}>{r.task}</h4>
            <p className="dim" style={{ margin: "0.9rem 0 0", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>Excel и 1С</p>
            <p className="muted" style={{ margin: "0.3rem 0 0", fontSize: "0.9rem" }}>{r.old}</p>
            <p style={{ margin: "0.9rem 0 0", fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--accent)" }}>SAP Business One</p>
            <p style={{ margin: "0.3rem 0 0", fontSize: "0.9rem" }}>{r.neu}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Products() {
  const { show } = usePopup();
  return (
    <Section id="products" kicker={products.kicker} h2={products.h2} lead={products.lead}>
      <div className="grid g3">
        {products.items.map((p) => (
          <article key={p.name} className="panel" style={{ padding: "1.75rem", display: "flex", flexDirection: "column" }}>
            <h3 className="h3">{p.name}</h3>
            <p className="dim" style={{ fontSize: "0.82rem", marginTop: "0.6rem" }}>{p.for}</p>
            <p className="muted" style={{ fontSize: "0.92rem", marginTop: "1rem" }}>{p.text}</p>
            <ul style={{ listStyle: "none", padding: 0, margin: "1.25rem 0 0", display: "grid", gap: "0.45rem" }}>
              {p.marks.map((m) => (
                <li key={m} className="dim" style={{ fontSize: "0.82rem" }}>— {m}</li>
              ))}
            </ul>
            <button className="btn" style={{ marginTop: "auto", paddingTop: "0.8rem", paddingBottom: "0.8rem" }} onClick={() => show("lead")}>
              Подойдёт ли нам
            </button>
          </article>
        ))}
      </div>

      <h3 className="h3" style={{ margin: "3.5rem 0 1.25rem" }}>{products.modules.h3}</h3>
      <div className="grid g4">
        {products.modules.items.map((m) => (
          <div key={m} className="panel-2" style={{ padding: "1.1rem 1.25rem", fontSize: "0.9rem" }}>{m}</div>
        ))}
      </div>
    </Section>
  );
}
