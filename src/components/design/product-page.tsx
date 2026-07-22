import type { ProductPage as ProductPageData } from "@/content/types";
import { cases } from "@/content/blocks";
import { PageHero } from "./page-hero";
import { Reveal } from "./reveal";
import { Btn, Section, SectionHead, TextLink } from "./ui";
import "./sections/sections.css";
import "./product-page.css";
import { em } from "./emphasis";
import { LeadButton } from "./lead-popup";

/**
 * Один шаблон на обе страницы продукта: у Business One и S/4HANA одинаковая
 * структура данных, и расхождение вёрстки между ними означало бы, что два
 * одинаковых по смыслу раздела выглядят по-разному без причины.
 */
export function ProductPageView({ data }: { data: ProductPageData }) {
  const related = cases.filter((c) => data.caseSlugs.includes(c.slug));

  return (
    <>
      <PageHero
        crumbs={[{ label: "Главная", href: "/design" }, { label: data.title }]}
        eyebrow={data.hero.eyebrow}
        h1={data.hero.h1}
        lead={data.hero.lead}
        facts={data.hero.facts}
      >
        <div className="dh-cta-row">
          <Btn href="#lead">{data.hero.cta}</Btn>
          <TextLink href="/design#pricing">{data.hero.ctaSecondary}</TextLink>
        </div>
      </PageHero>

      {/* Кому подходит и кому нет — честная отсечка идёт сразу за оффером */}
      <Section id="fit" tone="tint">
        <Reveal>
          <SectionHead kicker={data.fit.kicker} h2={data.fit.h2} lead={data.fit.lead} />
        </Reveal>

        <div className="dp-fit">
          <div className="dp-fit-yes">
            {data.fit.yes.map((y, i) => (
              <Reveal key={y.title} delay={(i % 2) * 80} className="dp-fit-item">
                <h3 className="d-h3">{y.title}</h3>
                <p>{em(y.text)}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={140} className="dp-fit-no">
            <span className="d-footer-cap">Когда не нужно</span>
            <ul>
              {data.fit.no.map((n) => (
                <li key={n}>{n}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section id="modules">
        <Reveal>
          <SectionHead kicker={data.modules.kicker} h2={data.modules.h2} lead={data.modules.lead} />
        </Reveal>

        <div className="d-products">
          {data.modules.items.map((m, i) => (
            <Reveal key={m.name} delay={(i % 3) * 70} className="d-product">
              <span className="d-product-idx">{String(i + 1).padStart(2, "0")}</span>
              <div className="d-product-name">
                <h3 className="d-h3">{m.name}</h3>
              </div>
              <div className="d-product-body">
                <p>{em(m.text)}</p>
                <ul className="d-marks">
                  {m.marks.map((mk) => (
                    <li key={mk}>{mk}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* День из жизни: время слева задаёт ленту, как в расписании */}
      <Section id="scenario" tone="ink">
        <Reveal>
          <SectionHead kicker={data.scenario.kicker} h2={data.scenario.h2} lead={data.scenario.lead} />
        </Reveal>

        <ol className="dp-day">
          {data.scenario.steps.map((s, i) => (
            <Reveal as="li" key={s.time} delay={(i % 3) * 70}>
              <span className="dp-day-time">{s.time}</span>
              <h3 className="d-h3">{s.title}</h3>
              <p>{em(s.text)}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section id="project" tone="tint">
        <Reveal>
          <SectionHead kicker={data.project.kicker} h2={data.project.h2} lead={data.project.lead} />
        </Reveal>

        <ol className="d-phases dp-phases">
          {data.project.phases.map((p, i) => (
            <Reveal as="li" key={p.name} delay={(i % 3) * 70}>
              <div className="d-phase-mark">
                <span className="d-phase-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="d-phase-name">{p.term}</span>
              </div>
              <h3 className="d-h3">{p.name}</h3>
              <p>{em(p.text)}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="dp-budget">
          <span className="d-footer-cap dp-budget-cap">Из чего складывается бюджет</span>
          <div className="dp-budget-rows">
            {data.project.budget.map((b) => (
              <div key={b.label}>
                <span className="dp-budget-label">{b.label}</span>
                <b>{b.value}</b>
                <span className="dp-budget-note">{b.note}</span>
              </div>
            ))}
          </div>
          {data.project.note ? <p className="d-note">{data.project.note}</p> : null}
        </Reveal>
      </Section>

      {related.length ? (
        <Section id="cases">
          <Reveal>
            <SectionHead kicker="Кейсы" h2="Внедрения этого продукта" />
          </Reveal>
          <div className="d-cases">
            {related.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80} className="d-case">
                <div className="d-case-head">
                  <span className="d-case-idx">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="d-h3">{c.client}</h3>
                    <p className="d-case-industry">{c.industry}</p>
                  </div>
                </div>
                <div className="d-case-body">
                  <p className="d-case-intro">{c.intro}</p>
                </div>
                <div className="d-case-after">
                  {c.after.slice(0, 4).map((a) => (
                    <div key={a.label}>
                      <b>{a.value}</b>
                      <span>{a.label}</span>
                    </div>
                  ))}
                  <TextLink href={`/design/cases/${c.slug}`}>Смотреть кейс полностью</TextLink>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>
      ) : null}

      <Section id="faq" tone="tint">
        <Reveal>
          <SectionHead kicker="Вопросы" h2={`Что спрашивают про ${data.title}`} />
        </Reveal>
        <div className="d-faq">
          {data.faq.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 50}>
              <details className="d-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <i aria-hidden />
                </summary>
                <p>{em(item.a)}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section id="lead" className="d-final">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">Разберём ваш процесс на бесплатном аудите</h2>
          <p className="d-lead">
            За одну встречу покажем, где вы теряете деньги сейчас, и как это закрывает {data.title}. Письменное заключение остаётся у вас в любом случае.
          </p>
          <div className="dh-cta-row">
            <LeadButton source="audit">Записаться на аудит</LeadButton>
            <TextLink href="/design/simulator">Сначала посчитать потери</TextLink>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
