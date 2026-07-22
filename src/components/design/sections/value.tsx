import Image from "next/image";
import { industries } from "@/content/blocks";
import { clientLogos } from "@/content/client-logos";
import { effect, logoStrip, roles, unifiedBase } from "@/content/playbook";
import { Reveal } from "../reveal";
import { GlassIcon, type IconName } from "../icon";

import { FlowScheme } from "../schemes/flow";
import { Section, SectionHead } from "../ui";
import { em } from "../emphasis";

/**
 * Лента клиентов сразу под первым экраном.
 *
 * Знаки настоящие — из рабочей группы BIS. Все приведены к монохрому и одной
 * оптической высоте: исходники пришли на фонах от чёрного до жёлтого, и в
 * пёстром виде ряд читался бы как свалка, а не как список клиентов.
 * Лента едет сама — двадцать восемь знаков в статичный ряд не встают.
 */
export function LogoStrip() {
  return (
    <section className="d-strip" aria-label={logoStrip.title}>
      <div className="d-wrap">
        <span className="d-strip-title">{logoStrip.title}</span>
      </div>
      <div className="d-strip-track">
        {/* вторая копия подхватывает ленту в момент, когда первая уезжает */}
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1}>
            {clientLogos.map((c) => (
              <li key={`${copy}-${c.file}`}>
                <Image
                  src={`/design/logos/${c.file}`}
                  alt={copy === 0 ? c.name : ""}
                  width={c.w}
                  height={c.h}
                  loading="lazy"
                />
              </li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  );
}

/**
 * Единая база. Снимает главный страх при покупке ERP — «модули не свяжутся».
 *
 * Показано схемой «Модель потока» в паре с приёмом «Было — стало»: одна и та
 * же цепочка в двух состояниях. Фраза «единая система» ничем не отличается от
 * такой же фразы у конкурента — а разорванная и сплошная цепочка отличаются.
 */
export function UnifiedBase() {
  return (
    <Section id="unified">
      <Reveal>
        <SectionHead
          kicker={unifiedBase.kicker}
          h2={unifiedBase.h2}
          // Лид из контента писался под прототип без графики и заканчивался
          // словами «а не на схеме с иконками» — на экране, где теперь стоит
          // именно схема, он спорит сам с собой. Первая половина сохранена.
          lead="Главный страх при покупке ERP — что **модули не свяжутся и получится тот же зоопарк, только дороже**. Поэтому показываем связки **на конкретных действиях**: переключите состояние и посмотрите, что меняется на каждом стыке."
        />
      </Reveal>

      <Reveal delay={90}>
        <FlowScheme />
      </Reveal>
    </Section>
  );
}

/**
 * Эффект внедрения. Диапазоны, а не одна красивая цифра.
 *
 * Полоса — единственный график на сайте, поэтому она предельно простая:
 * длина кодирует величину эффекта, значение стоит рядом, источник — под ним.
 * Никаких осей и легенд: они здесь ничего не добавили бы.
 */
export function Effect() {
  return (
    <Section id="effect" tone="tint">
      {/* Две колонки: шапка держится слева, пока справа идут показатели.
          Одной колонкой во всю страницу список занимал левую половину, а
          правая оставалась пустой на два экрана. */}
      <div className="dn-split">
        <Reveal className="dn-aside">
          <SectionHead kicker={effect.kicker} h2={effect.h2} lead={effect.lead} />
        </Reveal>

      {/* Круговая шкала вместо полосы: значение стоит внутри круга, и каждый
          показатель читается как отдельная величина, а не как строка таблицы.
          Круг заполняется, когда строка появляется в экране. */}
      <ul className="dn-list">
        {effect.bars.map((bar, i) => (
          <Reveal as="li" key={bar.label} delay={i * 90} className="dn-row">
            <span className="dn-gauge" style={{ ["--pct" as string]: bar.pct }}>
              <svg viewBox="0 0 120 120" aria-hidden>
                <circle className="dn-track" cx="60" cy="60" r="52" />
                <circle className="dn-fill" cx="60" cy="60" r="52" />
              </svg>
              <span className="dn-value">
                {bar.from}
                <i>…{bar.to}</i>
              </span>
            </span>
            <div className="dn-body">
              <h3 className="d-h3">{bar.label}</h3>
              <p>{em(bar.note)}</p>
            </div>
          </Reveal>
        ))}
        </ul>
      </div>

      <div className="d-multipliers">
        {effect.multipliers.map((m, i) => (
          <Reveal key={m.label} delay={i * 90} className="d-multiplier">
            <b>{m.value}</b>
            <span>{m.label}</span>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Фотография на группу: снимок среды, в которой работает клиент. */
const INDUSTRY_PHOTOS = ["production", "distribution", "retail"];

/**
 * Отрасли. Три группы, внутри — плотный список направлений.
 *
 * Снимки документальные и намеренно неглянцевые: сайт продаёт учёт на
 * реальном производстве, и вылизанный сток здесь работал бы против доверия.
 */
export function Industries() {
  return (
    <Section id="industries">
      <Reveal>
        <SectionHead kicker={industries.kicker} h2={industries.h2} lead={industries.lead} />
      </Reveal>

      <div className="d-industries">
        {industries.groups.map((g, i) => (
          <Reveal key={g.name} delay={i * 90} className="d-industry">
            <Image
              className="d-industry-photo"
              src={`/design/photos/${INDUSTRY_PHOTOS[i]}.webp`}
              alt=""
              aria-hidden
              width={1600}
              height={1195}
              sizes="(max-width: 700px) 100vw, 33vw"
            />
            <h3 className="d-h3">
              <span className="d-industry-count">{String(g.items.length).padStart(2, "0")}</span>
              {g.name}
            </h3>
            <ul>
              {g.items.map((it) => (
                <li key={it}>{it}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/** Иконка на роль — по её предмету, а не по должности. */
const ROLE_ICONS: IconName[] = ["analytics", "finance", "production", "warehouse", "partnership", "procurement"];

/**
 * Роли. Второй срез аудитории поверх отраслевого.
 *
 * У каждой роли своя боль и своя выгода, поэтому строка держит обе: боль
 * приглушена, выгода набрана основным цветом — читается как переход из «до»
 * в «после» внутри одной строки.
 */
export function Roles() {
  return (
    <Section id="roles" tone="tint">
      <Reveal>
        <SectionHead kicker={roles.kicker} h2={roles.h2} lead={roles.lead} />
      </Reveal>

      <div className="d-roles">
        {roles.items.map((r, i) => (
          <Reveal key={r.role} delay={(i % 2) * 80} className="d-role">
            <GlassIcon name={ROLE_ICONS[i]} />
            <h3 className="d-h3">{r.role}</h3>
            <p className="d-role-pain">«{r.pain}»</p>
            <p className="d-role-gain">{em(r.gain)}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
