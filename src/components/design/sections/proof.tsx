import Image from "next/image";
import { Reveal } from "../reveal";
import { GlassIcon, type IconName } from "../icon";
import { DragMarquee } from "../schemes/marquee";
import { ScrollText } from "../schemes/scroll-text";
import { Btn, Section, SectionHead, TextLink } from "../ui";
import { em } from "../emphasis";
import { content } from "@/content";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/content/locale";
import { ui } from "@/content/ui";

/**
 * Доверие. Регалии и цитата основателя.
 *
 * Тёмная секция: цитата — единственное место на сайте, где говорит человек,
 * а не компания, и смена среды выделяет её сильнее любой рамки.
 */
export function Trust({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const { team } = site.blocks;
  const { trust } = site.playbook;
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

      {/* Портрет рядом с цитатой: это единственное место, где говорит
          человек, а не компания, и лицо здесь делает больше, чем подпись. */}
      <Reveal className="d-quote">
        <Image
          className="d-quote-photo"
          src="/design/team/ergashev.webp"
          alt={trust.quote.author}
          width={900}
          height={1125}
        />
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
export function Cases({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const txt = ui(locale);
  const lp = (path: string) => localePath(locale, path);
  const { cases, casesMeta } = site.blocks;
  return (
    <Section id="cases">
      <Reveal>
        <SectionHead kicker={casesMeta.kicker} h2={casesMeta.h2} lead={casesMeta.lead} />
      </Reveal>

      <div className="d-cases">
        {cases.map((c, i) => (
          <Reveal key={c.slug} delay={i * 80} className="d-case">
            {/* Снимок отрасли клиента: кейс про склад и цех, и показать их
                нагляднее, чем пересказать. Это иллюстрация среды, а не фото
                самого объекта заказчика. */}
            <Image
              className="d-case-photo"
              src={`/design/cases/${c.slug}.webp`}
              alt={`${txt.clientIndustry}: ${c.industry.toLowerCase()}`}
              width={1600}
              height={1195}
              sizes="(max-width: 1000px) 100vw, 26vw"
            />
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
              <Btn href={lp(`/cases/${c.slug}`)} variant="ghost" small>{casesMeta.cta}</Btn>
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
export function Process({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const { process } = site.blocks;
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
              <p>{em(s.text)}</p>
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

/**
 * Честно о рисках. Снятие возражения до договора, а не после.
 *
 * Кнопка скачивания чек-листа отсюда убрана: тот же документ отдаётся ниже,
 * в блоке материалов, и два входа к одному файлу на одной странице делят
 * внимание вместо того, чтобы вести к заявке.
 */
export function Readiness({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const { readiness } = site.blocks;
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
            <p>{em(item.text)}</p>
          </Reveal>
        ))}
      </ul>

    </Section>
  );
}

/** Почему BIS. Цифры компании плюс четыре аргумента. */
export function Why({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const { why } = site.blocks;
  return (
    <Section id="why" tone="tint">
      <Reveal>
        <SectionHead kicker={why.kicker} h2={why.h2} />
      </Reveal>

      <Reveal delay={80}>
        <ScrollText
          className="sc-read--tight"
          text={why.kicker === "Nega BIS" ? "Yillar davomida portfolio emas, takrorlanadigan natija yigʻdik: quyidagi raqamlar har bir keyingi loyiha ortida turadi." : "За семь лет мы собрали не портфолио, а повторяемый результат: цифры ниже — это то, что стоит за каждым следующим проектом."}
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
            <p>{em(p.text)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/**
 * Команда. Реальные портреты из фотосессии BIS.
 *
 * Съёмка единая: один фон, один свет, поясной план — именно этого требовал
 * бриф, и разнородные снимки здесь разваливали бы ряд. В списке только те
 * пятеро, чьи лица и роли удалось сверить с блоком команды на действующем
 * сайте BIS; додумывать остальных по фотографиям было бы выдумкой.
 */
export function Team({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const txt = ui(locale);
  const { team } = site.blocks;
  const { designTeam } = site;
  return (
    <Section id="team">
      <Reveal>
        <SectionHead kicker={team.kicker} h2={team.h2} />
      </Reveal>

      {/* Лента едет сама, замирает на наведении и листается рукой:
          автодвижение показывает, что команда больше одного ряда, а рука
          даёт вернуться к любому человеку. */}
      <DragMarquee label={txt.teamMarquee} className="dm-team" speed={0.35}>
        {[0, 1].map((copy) =>
          designTeam.map((p) => (
            <article className="sc-person sc-person--photo" key={`${copy}-${p.slug}`} aria-hidden={copy === 1}>
              <Image
                className="sc-person-photo"
                src={`/design/team/${p.slug}.webp`}
                alt={copy === 0 ? `${p.name} — ${p.role}` : ""}
                width={900}
                height={1125}
                loading="lazy"
                draggable={false}
              />
              <h3>{p.name}</h3>
              <p className="sc-person-role">{p.role}</p>
              <p className="sc-person-note">{p.note}</p>
            </article>
          )),
        )}
      </DragMarquee>
    </Section>
  );
}

/**
 * Ссылка на все кейсы — используется на главной под блоком кейсов.
 *
 * Это кнопка, а не текстовая ссылка: она стоит одна, без соседнего главного
 * действия, и как ссылка на узком экране терялась. Иконочная плитка обязательна
 * — без неё разметка кнопки на мобильном разъезжается.
 */
export function AllCasesLink({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const site = content(locale);
  const txt = ui(locale);
  const lp = (path: string) => localePath(locale, path);
  const { cases } = site.blocks;
  return (
    <div className="d-wrap d-allcases">
      <Btn href={lp("/cases")} variant="ghost">
        {txt.allCases}
      </Btn>
    </div>
  );
}
