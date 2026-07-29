import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GlassIcon } from "./icon";
import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";
import { Section, SectionHead, TextLink } from "./ui";
import "./sections/sections.css";
import "./inner.css";
import { em } from "./emphasis";
import { LeadButton } from "./lead-popup";
import { content } from "@/content";
import { ui } from "@/content/ui";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/content/locale";

/**
 * Страницы, восстановленные с прежнего сайта: «О нас», «Услуги» и четыре
 * отраслевые. Отраслевые собраны одним шаблоном — они отличаются только
 * заголовком, перечнем направлений и кейсом-доказательством.
 */

/* ─────────────── О нас ─────────────── */

export function AboutView({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const lp = (path: string) => localePath(locale, path);
  const txt = ui(locale);
  const home = { label: txt.home, href: lp("/") };
  const p = site.aboutPage;
  const { team } = site.blocks;

  return (
    <>
      <PageHero
        crumbs={[home, { label: p.crumb }]}
        eyebrow={p.factsKicker}
        h1={p.h1}
        lead={p.lead}
        facts={p.facts}
      />

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={p.approachKicker} h2={p.approachH2} lead={p.approachLead} />
        </Reveal>
        <div className="di-cols">
          {p.approach.map((a, i) => (
            <Reveal key={a.title} delay={i * 90}>
              <article className="di-col">
                <h3 className="d-h3">{a.title}</h3>
                <p>{em(a.text)}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead kicker={team.kicker} h2={team.h2} />
        </Reveal>
        <div className="di-team">
          {team.people.map((person, i) => (
            <Reveal key={person.name} delay={(i % 3) * 80}>
              <article className="di-person">
                <h3>{person.name}</h3>
                <p className="di-person-role">{person.role}</p>
                <p className="di-person-note">{person.note}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={p.expertiseKicker} h2={p.expertiseH2} />
        </Reveal>
        <Reveal className="d-guarantee" delay={90}>
          <ul>
            {p.expertise.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">{p.ctaH2}</h2>
          <p className="d-lead">{p.ctaText}</p>
          <div className="dh-cta-row">
            <LeadButton source="audit" variant="light">{p.ctaPrimary}</LeadButton>
            <TextLink href={lp("/portfolio")}>{p.ctaSecondary}</TextLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* ─────────────── Услуги ─────────────── */

export function ServicesView({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const lp = (path: string) => localePath(locale, path);
  const txt = ui(locale);
  const home = { label: txt.home, href: lp("/") };
  const p = site.servicesPage;
  const { process } = site.blocks;

  return (
    <>
      <PageHero crumbs={[home, { label: p.crumb }]} eyebrow={p.listKicker} h1={p.h1} lead={p.lead} />

      <Section>
        <Reveal>
          <SectionHead kicker={p.listKicker} h2={p.listH2} />
        </Reveal>
        <div className="sc-rows">
          {p.services.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <article className="sc-row">
                <div className="sc-row-art">
                  <GlassIcon name={s.icon} />
                </div>
                <div>
                  <div className="sc-row-title">
                    <h3>{s.title}</h3>
                  </div>
                  <p className="sc-row-sub">{s.text}</p>
                  <ul className="sc-row-tags">
                    {s.marks.map((m) => (
                      <li key={m}>{m}</li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={p.processKicker} h2={p.processH2} />
        </Reveal>
        <div className="di-steps">
          {process.steps.map((s, i) => (
            <Reveal key={s.n} delay={(i % 3) * 80}>
              <article className="di-step">
                <span className="di-step-n">{s.n}</span>
                <h3 className="d-h3">{s.title}</h3>
                <p>{em(s.text)}</p>
                <p className="di-step-out">{s.out}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">{p.ctaH2}</h2>
          <p className="d-lead">{p.ctaText}</p>
          <div className="dh-cta-row">
            <LeadButton source="audit" variant="light">{p.ctaPrimary}</LeadButton>
            <TextLink href={lp("/portfolio")}>{p.ctaSecondary}</TextLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* ─────────────── Отраслевые страницы ─────────────── */

export function IndustryView({ slug, locale = DEFAULT_LOCALE }: { slug: string; locale?: Locale }) {
  const site = content(locale);
  const lp = (path: string) => localePath(locale, path);
  const txt = ui(locale);
  const home = { label: txt.home, href: lp("/") };
  const p = site.industryPages.find((x) => x.slug === slug);
  if (!p) notFound();
  const c = site.blocks.cases.find((x) => x.slug === p.caseSlug);
  const common = site.industryCommon;

  return (
    <>
      <PageHero crumbs={[home, { label: p.crumb }]} eyebrow={p.crumb} h1={p.h1} lead={p.lead} />

      <Section>
        <Reveal>
          <Image
            src={p.photo}
            alt=""
            width={1600}
            height={900}
            className="di-industry-photo"
            sizes="(max-width: 900px) 100vw, 1100px"
            priority
          />
        </Reveal>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={p.crumb} h2={p.itemsTitle} />
        </Reveal>
        <div className="di-tags">
          {p.items.map((item, i) => (
            <Reveal key={item} delay={(i % 4) * 60}>
              <span className="di-tag">{item}</span>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Reveal>
          <SectionHead kicker={common.modulesKicker} h2={common.modulesH2} />
        </Reveal>
        <Reveal className="d-guarantee" delay={90}>
          <ul>
            {common.modules.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Reveal>
      </Section>

      {c ? (
        <Section tone="tint">
          <Reveal>
            <SectionHead kicker={common.caseKicker} h2={common.caseH2} />
          </Reveal>
          <Reveal delay={90}>
            <Link href={lp(`/portfolio/${c.slug}`)} className="di-case-card">
              <div>
                <div className="di-case-client">
                  <h3 className="d-h3">{c.client}</h3>
                </div>
                <p className="di-case-meta">{c.industry}</p>
                <p className="di-case-scale">{common.caseCta}</p>
              </div>
              <div className="di-case-nums">
                {c.after.slice(0, 3).map((a) => (
                  <div key={a.label}>
                    <b>{a.value}</b>
                    <span>{a.label}</span>
                  </div>
                ))}
              </div>
            </Link>
          </Reveal>
        </Section>
      ) : null}

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">{common.ctaH2}</h2>
          <p className="d-lead">{common.ctaText}</p>
          <div className="dh-cta-row">
            <LeadButton source="audit" variant="light">{common.ctaPrimary}</LeadButton>
            <TextLink href={lp("/portfolio")}>{common.ctaSecondary}</TextLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
