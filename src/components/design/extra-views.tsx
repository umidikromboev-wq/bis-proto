import { GlassIcon, type IconName } from "./icon";
import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";
import { Btn, Section, SectionHead, TextLink } from "./ui";
import "./sections/sections.css";
import "./schemes/schemes.css";
import "./inner.css";
import { em } from "./emphasis";
import { LeadButton } from "./lead-popup";
import { content } from "@/content";
import { ui } from "@/content/ui";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/content/locale";



/* ─────────────── SAP Академия ─────────────── */

const ACADEMY_ICONS: IconName[] = ["people", "shield"];

export function AcademyView({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const lp = (path: string) => localePath(locale, path);
  const txt = ui(locale);
  const home = { label: txt.home, href: lp("/") };
  const { academy } = site;
  const { hero, why, formats, materials, cta } = academy;
  return (
    <>
      <PageHero
        crumbs={[home, { label: txt.academyCrumb }]}
        eyebrow={hero.kicker}
        h1={hero.h1}
        lead={hero.lead}
        facts={why.stats.map((s) => ({ value: s.value, label: s.label }))}
      />

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={why.kicker} h2={why.h2} lead={why.lead} />
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <SectionHead kicker={formats.kicker} h2={formats.h2} />
        </Reveal>
        <div className="sc-rows">
          {formats.items.map((f, i) => (
            <Reveal key={f.title} delay={i * 90}>
              <article className="sc-row">
                <div className="sc-row-art">
                  <GlassIcon name={ACADEMY_ICONS[i] ?? "checklist"} />
                </div>
                <div>
                  <div className="sc-row-title">
                    <h3>{f.title}</h3>
                  </div>
                  <p className="sc-row-sub">{f.text}</p>
                  <ul className="sc-row-tags">
                    <li>{f.for}</li>
                    {f.marks.map((m) => (
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
          <SectionHead kicker={materials.kicker} h2={materials.h2} lead={materials.lead} />
        </Reveal>
        <Reveal className="d-guarantee" delay={90}>
          <ul>
            {materials.items.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">{cta.h2}</h2>
          <p className="d-lead">{cta.text}</p>
          <div className="dh-cta-row">
            <LeadButton source="audit" variant="light">{cta.primary}</LeadButton>
            <TextLink href={lp("/#lead")}>{cta.secondary}</TextLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}

/* ─────────────── Вакансии ─────────────── */

export function CareersView({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const site = content(locale);
  const lp = (path: string) => localePath(locale, path);
  const home = { label: txt.home, href: lp("/") };
  const { careers } = site;
  const { hero, why, positions, process, cta } = careers;
  return (
    <>
      <PageHero crumbs={[home, { label: txt.crumbCareers }]} eyebrow={hero.kicker} h1={hero.h1} lead={hero.lead} />

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={why.kicker} h2={why.h2} />
        </Reveal>
        <ul className="d-conditions">
          {why.items.map((it, i) => (
            <Reveal as="li" key={it.title} delay={(i % 3) * 70}>
              <h3 className="d-h3">{it.title}</h3>
              <p>{it.text}</p>
            </Reveal>
          ))}
        </ul>
      </Section>

      <Section>
        <Reveal>
          <SectionHead kicker={txt.openPositionsKicker} h2={txt.openPositionsH2} />
        </Reveal>
        <div className="di-cases">
          {positions.map((p, i) => (
            <Reveal key={p.id} delay={i * 80}>
              <article className="di-case-card" style={{ cursor: "default" }}>
                <div>
                  <div className="di-case-client">
                    <span className="d-case-idx">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="d-h3">{p.title}</h3>
                  </div>
                  <p className="di-case-meta">{p.type}</p>
                  <p className="di-case-scale">{p.about}</p>
                </div>
                <div>
                  <span className="d-footer-cap" style={{ color: "var(--dim)" }}>{txt.whatNeeded}</span>
                  <ul className="di-before">
                    {p.need.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                  {p.plus?.length ? (
                    <>
                      <span className="d-footer-cap" style={{ color: "var(--dim)", marginTop: "1.4rem" }}>{txt.niceToHave}</span>
                      <ul className="di-before">
                        {p.plus.map((n) => (
                          <li key={n}>{n}</li>
                        ))}
                      </ul>
                    </>
                  ) : null}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="tint">
        <Reveal>
          <SectionHead kicker={process.kicker} h2={process.h2} />
        </Reveal>
        <div className="sc-road">
          {/* Раньше здесь стоял инлайновый grid на 4 колонки — инлайн бьёт медиазапросы
              из schemes.css, поэтому на телефоне колонки оставались по 52 px и текст
              вставал лесенкой. Число колонок задаётся модификатором и падает до одной. */}
          <ol className="sc-road-4">
            {process.steps.map((s, i) => (
              <Reveal as="li" key={s.n} delay={i * 70}>
                <span className="sc-road-dot" aria-hidden />
                <span className="sc-road-n">{s.n}</span>
                <h3>{s.title}</h3>
                <p>{em(s.text)}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section tone="ink">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">{cta.h2}</h2>
          <p className="d-lead">{cta.text}</p>
          <div className="dh-cta-row">
            <Btn href={cta.emailHref} variant="light">{txt.writeTo} {cta.email}</Btn>
          </div>
          <p className="d-note">{cta.note}</p>
        </Reveal>
      </Section>
    </>
  );
}
