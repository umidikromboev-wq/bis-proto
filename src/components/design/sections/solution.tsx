import { products, solution } from "@/content/blocks";
import { Reveal } from "../reveal";
import { ProcessChain } from "../schemes/chain";
import { ScrollText } from "../schemes/scroll-text";
import { GlassIcon, type IconName } from "../icon";
import { SapMark } from "../marks";
import { PixelArrow } from "../marks";
import { Section, SectionHead } from "../ui";

/**
 * Решение. Текст плюс сравнение «как было / как стало».
 *
 * Сравнение — не таблица с рамками, а две колонки на одной строке задачи:
 * старый способ приглушён, новый набран основным цветом. Читатель сравнивает
 * построчно, а не разбирает сетку из ячеек.
 */
export function Solution() {
  return (
    <Section id="solution">
      <div className="d-solution-top">
        <Reveal>
          <SectionHead kicker={solution.kicker} h2={solution.h2} />
        </Reveal>
        <Reveal delay={110} className="d-solution-body">
          {/* Первый абзац — главный тезис страницы, поэтому он проявляется по
              словам при прокрутке: читатель проходит фразу до конца, а не
              проскакивает её глазами. Второй остаётся обычным текстом —
              два «караоке» подряд превратили бы приём в трюк. */}
          <ScrollText text={solution.body[0]} />
          <p className="d-solution-tail">{solution.body[1]}</p>
        </Reveal>
      </div>

      {/* Фраза «это один непрерывный процесс, а не шесть отдельных таблиц»
          текстом не доказывается — её нужно увидеть. */}
      <Reveal delay={80}>
        <ProcessChain />
      </Reveal>

      <Reveal className="d-compare">
        <div className="d-compare-head">
          <h3 className="d-h3">{solution.compare.h3}</h3>
          <p className="d-compare-note">{solution.compare.note}</p>
        </div>

        {/* Логотипы вместо подписей: сравнение читается с одного взгляда,
            ещё до чтения строк. */}
        <div className="d-compare-legend">
          <span>Задача</span>
          <span className="d-cmp-brand">
            <img src="/design/excel.svg" alt="Microsoft Excel" width={20} height={20} />
            <img src="/design/onec.svg" alt="1С" width={34} height={20} />
            <i>Excel и 1С</i>
          </span>
          <span className="d-cmp-brand is-new">
            <SapMark />
            <i>SAP Business One</i>
          </span>
        </div>

        <dl className="d-compare-rows">
          {solution.compare.rows.map((row) => (
            <div className="d-compare-row" key={row.task}>
              <dt>{row.task}</dt>
              {/* Подписи «как сейчас» и «в системе» видны только на узком
                  экране: там колонки схлопываются, и без них плюс и минус
                  сливаются в один поток текста. */}
              <dd className="d-compare-old"><span className="d-cmp-tag">Как сейчас</span>{row.old}</dd>
              <dd className="d-compare-new"><span className="d-cmp-tag">В системе</span>{row.neu}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

/** Иконка на контур системы — по его предмету. */
const MODULE_ICONS: IconName[] = ["finance", "warehouse", "procurement", "production", "partnership", "analytics", "support", "people"];

/** Иконка на продукт: масштаб бизнеса, под который он сделан. */
const PRODUCT_ICONS: IconName[] = ["production", "cloud", "integration"];

/**
 * Продукты. Строка-витрина: превью, крупное имя, стрелка, чипы.
 *
 * Карточки уравняли бы их в весе, хотя 90% внедрений — это Business One.
 * Строка во всю ширину даёт место назвать, кому продукт подходит, и оставляет
 * иерархию: первый читается первым.
 */
export function Products() {
  return (
    <Section id="products" tone="tint">
      <Reveal>
        <SectionHead kicker={products.kicker} h2={products.h2} lead={products.lead} />
      </Reveal>

      <div className="sc-rows">
        {products.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 90}>
            <article className="sc-row">
              <div className="sc-row-art">
                <GlassIcon name={PRODUCT_ICONS[i]} />
              </div>
              <div>
                <div className="sc-row-title">
                  <h3>{item.name}</h3>
                  <span className="sc-row-arrow" aria-hidden><PixelArrow /></span>
                </div>
                <p className="sc-row-sub">{item.text}</p>
                <ul className="sc-row-tags">
                  <li>{item.for}</li>
                  {item.marks.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="d-modules">
        <h3 className="d-h3">{products.modules.h3}</h3>
        <ul>
          {products.modules.items.map((m, i) => (
            <li key={m}>
              <GlassIcon name={MODULE_ICONS[i]} />
              {m}
            </li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
