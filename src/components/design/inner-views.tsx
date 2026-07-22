import Link from "next/link";
import { notFound } from "next/navigation";
import { cases, casesMeta } from "@/content/blocks";
import { blogMeta, posts } from "@/content/blog";
import { contactsPage } from "@/content/contacts-page";
import type { BlogBlock } from "@/content/types";
import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";
import { Btn, Section, SectionHead, TextLink } from "./ui";
import "./sections/sections.css";
import "./inner.css";
import { em } from "./emphasis";

const HOME = { label: "Главная", href: "/design" };

/* ─────────────── кейсы ─────────────── */

export function CasesList() {
  return (
    <>
      <PageHero crumbs={[HOME, { label: "Кейсы" }]} h1={casesMeta.h2} lead={casesMeta.lead} />
      <Section>
        <div className="di-cases">
          {cases.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 70}>
              <Link href={`/design/cases/${c.slug}`} className="di-case-card">
                <div>
                  <div className="di-case-client">
                    <span className="d-case-idx">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="d-h3">{c.client}</h2>
                  </div>
                  <p className="di-case-meta">{c.industry}</p>
                  <p className="di-case-scale">{c.scale}</p>
                </div>
                <div className="di-case-nums">
                  {c.after.slice(0, 4).map((a) => (
                    <div key={a.label}>
                      <b>{a.value}</b>
                      <span>{a.label}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

export function CaseView({ slug }: { slug: string }) {
  const c = cases.find((x) => x.slug === slug);
  if (!c) notFound();
  const others = cases.filter((x) => x.slug !== slug);

  return (
    <>
      <PageHero
        crumbs={[HOME, { label: "Кейсы", href: "/design/cases" }, { label: c.client }]}
        h1={c.client}
        lead={c.intro}
        facts={c.after.slice(0, 3).map((a) => ({ value: a.value, label: a.label }))}
      />

      <Section tone="tint">
        <div className="di-case-grid">
          <Reveal>
            <SectionHead kicker="Что было" h2="С чем компания пришла" />
            <ul className="di-before">
              {c.before.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={110}>
            <SectionHead kicker="О компании" h2="Масштаб и отрасль" />
            <p className="d-lead">{c.industry}</p>
            <p className="d-lead">{c.scale}</p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead kicker="Что стало" h2="Результат после запуска" />
        </Reveal>
        <div className="di-after">
          {c.after.map((a, i) => (
            <Reveal key={a.label} delay={(i % 4) * 70}>
              <b>{a.value}</b>
              <span>{a.label}</span>
            </Reveal>
          ))}
        </div>
        {c.quote ? (
          <Reveal className="d-quote" >
            <blockquote>
              <p style={{ color: "var(--ink)" }}>{c.quote.text}</p>
              <footer style={{ color: "var(--brand)" }}>{c.quote.author}</footer>
            </blockquote>
          </Reveal>
        ) : null}
      </Section>

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">Хотите такой же разбор по своей компании?</h2>
          <p className="d-lead">Бесплатный аудит: покажем, где вы теряете деньги, и что из этого закрывает система.</p>
          <div className="dh-cta-row">
            <Btn href="#form" variant="light">Записаться на аудит</Btn>
            <TextLink href="/design/cases">Другие кейсы</TextLink>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead kicker="Ещё кейсы" h2="Другие внедрения" />
        </Reveal>
        <div className="di-cases">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 80}>
              <Link href={`/design/cases/${o.slug}`} className="di-case-card">
                <div>
                  <div className="di-case-client">
                    <h3 className="d-h3">{o.client}</h3>
                  </div>
                  <p className="di-case-meta">{o.industry}</p>
                </div>
                <div className="di-case-nums">
                  {o.after.slice(0, 2).map((a) => (
                    <div key={a.label}>
                      <b>{a.value}</b>
                      <span>{a.label}</span>
                    </div>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ─────────────── блог ─────────────── */

export function BlogList() {
  return (
    <>
      <PageHero crumbs={[HOME, { label: "Блог" }]} eyebrow={undefined} h1={blogMeta.h2} lead={blogMeta.lead} />
      <Section>
        <div className="di-posts">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 70}>
              <Link href={`/design/blog/${p.slug}`} className="di-post-card">
                <div className="di-post-meta">
                  <span className="di-post-cat">{p.category}</span>
                  <span>{p.date}</span>
                  <span>{p.readingTime}</span>
                </div>
                <div>
                  <h2 className="d-h3">{p.title}</h2>
                  <p className="di-post-excerpt">{p.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/** Тело статьи — простые блоки, без markdown-парсера: так задумано в контенте. */
function Block({ b }: { b: BlogBlock }) {
  if (b.type === "p") return <p>{em(b.text)}</p>;
  if (b.type === "h3") return <h3>{b.text}</h3>;
  if (b.type === "list") return <ul>{b.items.map((i) => <li key={i}>{i}</li>)}</ul>;
  if (b.type === "quote")
    return (
      <blockquote>
        <p>{em(b.text)}</p>
        {b.author ? <footer>{b.author}</footer> : null}
      </blockquote>
    );
  if (b.type === "callout")
    return (
      <aside className="di-callout">
        <b>{b.title}</b>
        <p>{em(b.text)}</p>
      </aside>
    );
  return null;
}

export function PostView({ slug }: { slug: string }) {
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();
  const others = posts.filter((p) => p.slug !== slug);

  return (
    <>
      <PageHero
        crumbs={[HOME, { label: "Блог", href: "/design/blog" }, { label: post.category }]}
        h1={post.title}
        lead={post.excerpt}
      >
        <p className="di-post-meta" style={{ flexDirection: "row", gap: "1.2rem", marginTop: "1.6rem" }}>
          <span>{post.author}</span>
          <span>{post.date}</span>
          <span>{post.readingTime}</span>
        </p>
      </PageHero>

      <Section>
        <Reveal className="di-article">
          {post.body.map((b, i) => (
            <Block key={i} b={b} />
          ))}
        </Reveal>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker="Читать дальше" h2="Другие разборы" />
        </Reveal>
        <div className="di-posts">
          {others.map((o, i) => (
            <Reveal key={o.slug} delay={i * 80}>
              <Link href={`/design/blog/${o.slug}`} className="di-post-card">
                <div className="di-post-meta">
                  <span className="di-post-cat">{o.category}</span>
                  <span>{o.readingTime}</span>
                </div>
                <div>
                  <h3 className="d-h3">{o.title}</h3>
                  <p className="di-post-excerpt">{o.excerpt}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
}

/* ─────────────── контакты ─────────────── */

export function ContactsView() {
  const { hero, channels, office, formats, requisites, vacancies } = contactsPage;
  return (
    <>
      <PageHero crumbs={[HOME, { label: "Контакты" }]} eyebrow={hero.kicker} h1={hero.h1} lead={hero.lead} />

      <Section>
        <div className="di-channels">
          {channels.map((c, i) => (
            <Reveal key={c.title} delay={i * 80} className="di-channel">
              <span className="di-channel-title">{c.title}</span>
              <a href={c.href}>{c.value}</a>
              <p>{c.note}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={formats.kicker} h2={formats.h2} />
        </Reveal>
        <div className="di-formats">
          {formats.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 90} className="di-format">
              <span className="di-format-time">{f.time}</span>
              <h3 className="d-h3">{f.title}</h3>
              <p>{f.text}</p>
              <div><Btn href="#form" variant="ghost" small>{f.cta}</Btn></div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="di-office">
          <Reveal>
            <SectionHead h2={office.h2} />
            <dl style={{ marginTop: "2rem" }}>
              <div>
                <dt>Адрес</dt>
                <dd>{office.address}</dd>
              </div>
              <div>
                <dt>Часы работы</dt>
                <dd>{office.hours}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={110}>
            <SectionHead h2={requisites.h2} />
            <p className="d-lead">{requisites.company} · {requisites.partner}</p>
            <div className="di-requisites">
              {requisites.rows.map((r) => (
                <div key={r.label}>
                  <dt>{r.label}</dt>
                  <dd>{r.value}</dd>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">{vacancies.h2}</h2>
          <p className="d-lead">{vacancies.text}</p>
          <div className="dh-cta-row">
            <Btn href="mailto:info@bis-pro.com" variant="light">Написать на почту</Btn>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
