import Link from "next/link";
import { cases, casesMeta, process, readiness, team, why } from "@/content/blocks";
import { trust } from "@/content/playbook";
import { Reveal } from "../reveal";
import { GlassIcon, type IconName } from "../icon";
import { ScrollText } from "../schemes/scroll-text";
import { Btn, Section, SectionHead, TextLink } from "../ui";

/** Инициалы вместо портрета: единых фотографий команды пока нет. */
function initials(name: string) {
  return name.split(" ").slice(0, 2).map((w) => w[0]).join("");
}

/**
 * Доверие. Регалии и цитата основателя.
 *
 * Тёмная секция: цитата — единственное место на сайте, где говорит человек,
 * а не компания, и смена среды выделяет её сильнее любой рамки.
 */
export function Trust() {
  return (
    <Section id="trust" tone="ink">
      <Reveal>
        <SectionHead kicker={trust.kicker} h2={trust.h2} />
      </Reveal>

      <div className="d-regalia">
        {trust.regalia.map((r, i) => (
          <Reveal key={r.value} delay={i * 70} className="d-regale">
            <b>{r.value}</b>
            <span>{r.label}</span>
          </Reveal>
        ))}
      </div>

      <Reveal className="d-quote">
        <blockquote>
          <p>{trust.quote.text}</p>
          <footer>{trust.quote.author}</footer>
        </blockquote>
      </Reveal>
    </Section>
  );
}

/**
 * Кейсы. Цифры «после» — главное, поэтому они крупные и идут сеткой,
 * а список «до» приглушён: он нужен для контекста, а не для чтения целиком.
 */
export function Cases() {
  return (
    <Section id="cases">
      <Reveal>
        <SectionHead kicker={casesMeta.kicker} h2={casesMeta.h2} lead={casesMeta.lead} />
      </Reveal>

      <div className="d-cases">
        {cases.map((c, i) => (
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
              <ul className="d-case-before">
                {c.before.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </div>

            <div className="d-case-after">
              {c.after.map((a) => (
                <div key={a.label}>
                  <b>{a.value}</b>
                  <span>{a.label}</span>
                </div>
              ))}
              <TextLink href={`/design/cases/${c.slug}`}>{casesMeta.cta}</TextLink>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/**
 * Процесс. Шесть фаз SAP Activate.
 *
 * Схема «Змея (Roadmap)» из каталога смысловых приёмов: сплошная линия
 * проходит через все шесть точек, и маршрут виден целиком — иначе читателю
 * приходится собирать его из шести отдельных карточек. Каждая фаза
 * заканчивается документом, который заказчик подписывает.
 */
export function Process() {
  return (
    <Section id="process" tone="tint">
      <Reveal>
        <SectionHead kicker={process.kicker} h2={process.h2} lead={process.lead} />
      </Reveal>

      <div className="sc-road">
        <ol>
          {process.steps.map((s, i) => (
            <Reveal as="li" key={s.n} delay={i * 60}>
              <span className="sc-road-dot" aria-hidden />
              <span className="sc-road-n">{s.n}</span>
              <span className="sc-road-name">{s.name}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className="sc-road-out">{s.out}</span>
            </Reveal>
          ))}
        </ol>
      </div>
    </Section>
  );
}

const READY_ICONS: IconName[] = ["people", "settings", "report", "checklist", "support", "shield"];
const WHY_ICONS: IconName[] = ["shield", "people", "settings", "support"];

/** Честно о рисках. Снятие возражения до договора, а не после. */
export function Readiness() {
  return (
    <Section id="readiness">
      <Reveal>
        <SectionHead kicker={readiness.kicker} h2={readiness.h2} lead={readiness.lead} />
      </Reveal>

      <ul className="d-conditions">
        {readiness.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 70}>
            <GlassIcon name={READY_ICONS[i]} />
            <h3 className="d-h3">{item.title}</h3>
            <p>{item.text}</p>
          </Reveal>
        ))}
      </ul>

      <Reveal className="d-conditions-cta">
        <Btn href="#lead" variant="ghost">{readiness.cta}</Btn>
        <span className="d-note">{readiness.ctaNote}</span>
      </Reveal>
    </Section>
  );
}

/** Почему BIS. Цифры компании плюс четыре аргумента. */
export function Why() {
  return (
    <Section id="why" tone="tint">
      <Reveal>
        <SectionHead kicker={why.kicker} h2={why.h2} />
      </Reveal>

      <Reveal delay={80}>
        <ScrollText
          className="sc-read--tight"
          text="За семь лет мы собрали не портфолио, а повторяемый результат: цифры ниже — это то, что стоит за каждым следующим проектом."
        />
      </Reveal>

      {/* Цифры разделены волосяными вертикалями: так они читаются как один
          набор показателей, а не как четыре независимые плашки. */}
      <div className="sc-figures">
        {why.stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 70} className="sc-figure">
            <b>{s.value}</b>
            <span>{s.label}</span>
          </Reveal>
        ))}
      </div>

      <div className="d-why-points">
        {why.points.map((p, i) => (
          <Reveal key={p.title} delay={(i % 2) * 80} className="d-why-point">
            <GlassIcon name={WHY_ICONS[i]} />
            <h3 className="d-h3">{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Команда. Пока без портретов — инициалы честнее разнородных фото. */
export function Team() {
  return (
    <Section id="team">
      <Reveal>
        <SectionHead kicker={team.kicker} h2={team.h2} />
      </Reveal>

      {/* Лента едет сама и замирает на наведении: шесть человек в статичной
          сетке занимают экран целиком, а движение показывает, что команда
          больше одного ряда, не забирая высоту. */}
      <div className="sc-marquee" aria-label="Команда BIS">
        <div className="sc-marquee-track">
          {[0, 1].map((copy) => (
            <div className="sc-marquee-row" key={copy} aria-hidden={copy === 1}>
              {team.people.map((p) => (
                <article className="sc-person" key={`${copy}-${p.name}`}>
                  <span className="sc-person-avatar" aria-hidden>{initials(p.name)}</span>
                  <h3>{p.name}</h3>
                  <p className="sc-person-role">{p.role}</p>
                  <p className="sc-person-note">{p.note}</p>
                </article>
              ))}
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** Ссылка на все кейсы — используется на главной под блоком кейсов. */
export function AllCasesLink() {
  return (
    <div className="d-wrap" style={{ paddingBottom: "1rem" }}>
      <Link href="/design/cases" className="dh-textlink">
        <span className="dh-textlink-label">Все кейсы внедрения</span>
      </Link>
    </div>
  );
}
