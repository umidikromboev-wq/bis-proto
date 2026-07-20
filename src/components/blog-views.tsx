"use client";

import Link from "next/link";
import { Placeholder, Section, Arrow } from "./ui";
import { Breadcrumbs } from "./shell";
import { usePopup } from "./popup-context";
import { blogMeta, posts } from "@/content/blog";
import type { BlogPost } from "@/content/types";

function formatDate(iso: string): string {
  const months = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const [y, m, d] = iso.split("-").map(Number);
  return `${d} ${months[m - 1]} ${y}`;
}

/** Список статей — /blog */
export function BlogIndex() {
  const [lead, ...rest] = posts;

  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог" }]} />

      <Section kicker={blogMeta.kicker} h2={blogMeta.h2} lead={blogMeta.lead}>
        <article className="panel" style={{ padding: "clamp(1.5rem, 3vw, 2.25rem)" }}>
          <div className="split" style={{ gap: "clamp(1.5rem, 3vw, 3rem)", alignItems: "center" }}>
            <div>
              <p className="dim" style={{ fontSize: "0.76rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {lead.category} · {formatDate(lead.date)} · {lead.readingTime}
              </p>
              <h3 className="h2" style={{ fontSize: "clamp(1.4rem, 1.1rem + 1.3vw, 2.1rem)", marginTop: "0.8rem", textTransform: "none" }}>
                {lead.title}
              </h3>
              <p className="muted" style={{ marginTop: "1rem", fontSize: "0.96rem" }}>{lead.excerpt}</p>
              <Link className="btn" href={`/blog/${lead.slug}`} style={{ marginTop: "1.6rem", textDecoration: "none" }}>
                Читать <Arrow dir="right" />
              </Link>
            </div>
            <Placeholder img={lead.cover} style={{ minHeight: 300 }} />
          </div>
        </article>

        <div className="grid g2" style={{ marginTop: "1.5rem" }}>
          {rest.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="panel" style={{ padding: "1.75rem", textDecoration: "none", color: "inherit", display: "flex", flexDirection: "column" }}>
              <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                {p.category} · {formatDate(p.date)} · {p.readingTime}
              </p>
              <h3 className="h3" style={{ marginTop: "0.8rem", fontSize: "1.25rem" }}>{p.title}</h3>
              <p className="muted" style={{ marginTop: "0.8rem", fontSize: "0.92rem" }}>{p.excerpt}</p>
              <span className="dim" style={{ marginTop: "auto", paddingTop: "1.25rem", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Читать →
              </span>
            </Link>
          ))}
        </div>

        <p className="note" style={{ marginTop: "2rem" }}>{blogMeta.note}</p>
      </Section>
    </>
  );
}

/** Страница статьи — /blog/[slug] */
export function PostView({ post }: { post: BlogPost }) {
  const { show } = usePopup();
  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <>
      <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог", href: "/blog" }, { label: post.category }]} />

      <article>
        <section className="section" style={{ paddingBlock: "clamp(2.5rem, 2rem + 4vw, 4.5rem)" }}>
          <div className="wrap" style={{ maxWidth: 820 }}>
            <p className="kicker">{post.category}</p>
            <h1 className="h1" style={{ fontSize: "clamp(1.8rem, 1.2rem + 2.6vw, 3rem)", textTransform: "none" }}>{post.title}</h1>
            <p className="lead" style={{ marginTop: "1.5rem" }}>{post.excerpt}</p>
            <p className="dim" style={{ fontSize: "0.84rem", marginTop: "1.5rem" }}>
              {post.author} · {formatDate(post.date)} · {post.readingTime}
            </p>
          </div>
          <div className="wrap" style={{ marginTop: "2.5rem" }}>
            <Placeholder img={post.cover} style={{ minHeight: 320 }} />
          </div>
        </section>

        <div className="wrap" style={{ maxWidth: 820, paddingBottom: "clamp(3rem, 2rem + 4vw, 6rem)" }}>
          {post.body.map((b, i) => <Block key={i} block={b} />)}
        </div>
      </article>

      <Section>
        <div className="panel" style={{ padding: "clamp(1.75rem, 4vw, 3rem)", display: "flex", flexWrap: "wrap", gap: "1.5rem", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ maxWidth: "52ch" }}>
            <h2 className="h2" style={{ fontSize: "clamp(1.4rem, 1.1rem + 1.4vw, 2rem)" }}>Проверим это на ваших процессах</h2>
            <p className="muted" style={{ marginTop: "0.9rem", fontSize: "0.96rem" }}>
              Бесплатный аудит: разбираем, где вы теряете деньги, и даём письменное заключение — даже если внедрять вам сейчас невыгодно.
            </p>
          </div>
          <button className="btn btn-solid btn-lg" onClick={() => show("lead")}>Записаться на аудит <Arrow dir="right" /></button>
        </div>

        {others.length > 0 && (
          <>
            <h3 className="h3" style={{ margin: "3rem 0 1.25rem" }}>Читать дальше</h3>
            <div className="grid g2">
              {others.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="panel" style={{ padding: "1.5rem", textDecoration: "none", color: "inherit", display: "block" }}>
                  <p className="dim" style={{ fontSize: "0.74rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>{p.category}</p>
                  <h4 className="h3" style={{ marginTop: "0.6rem", fontSize: "1.15rem" }}>{p.title}</h4>
                  <p className="muted" style={{ marginTop: "0.7rem", fontSize: "0.9rem" }}>{p.excerpt}</p>
                </Link>
              ))}
            </div>
          </>
        )}
      </Section>
    </>
  );
}

function Block({ block }: { block: BlogPost["body"][number] }) {
  switch (block.type) {
    case "h3":
      return <h2 className="h3" style={{ fontSize: "clamp(1.2rem, 1.05rem + 0.8vw, 1.6rem)", marginTop: "2.5rem" }}>{block.text}</h2>;
    case "p":
      return <p style={{ marginTop: "1.1rem", fontSize: "1.05rem", lineHeight: 1.7, color: "var(--text)" }}>{block.text}</p>;
    case "list":
      return (
        <ul style={{ listStyle: "none", padding: 0, margin: "1.5rem 0 0", display: "grid", gap: "0.7rem" }}>
          {block.items.map((i) => (
            <li key={i} className="muted" style={{ fontSize: "0.98rem", display: "flex", gap: "0.7rem" }}>
              <span aria-hidden style={{ color: "var(--dim)" }}>—</span>{i}
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <blockquote className="panel" style={{ margin: "2rem 0 0", padding: "1.75rem" }}>
          <p style={{ margin: 0, fontSize: "1.1rem", lineHeight: 1.55 }}>«{block.text}»</p>
          {block.author && <footer className="dim" style={{ marginTop: "0.9rem", fontSize: "0.84rem" }}>{block.author}</footer>}
        </blockquote>
      );
    case "callout":
      return (
        <aside className="panel-2" style={{ margin: "2rem 0 0", padding: "1.5rem", borderLeft: "3px solid var(--accent)" }}>
          <p className="h3" style={{ margin: 0, fontSize: "1.02rem" }}>{block.title}</p>
          <p className="muted" style={{ margin: "0.7rem 0 0", fontSize: "0.94rem" }}>{block.text}</p>
        </aside>
      );
    case "img":
      return <Placeholder img={block.img} style={{ minHeight: 260, marginTop: "2rem" }} />;
  }
}
