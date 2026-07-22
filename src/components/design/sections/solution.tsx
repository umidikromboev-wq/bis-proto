import { products, solution } from "@/content/blocks";
import { Reveal } from "../reveal";
import { ScrollText } from "../schemes/scroll-text";
import { GlassIcon, type IconName } from "../icon";
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

      <Reveal className="d-compare">
        <div className="d-compare-head">
          <h3 className="d-h3">{solution.compare.h3}</h3>
          <p className="d-compare-note">{solution.compare.note}</p>
        </div>

        <div className="d-compare-legend" aria-hidden>
          <span>Задача</span>
          <span>Excel и 1С</span>
          <span className="is-new">SAP Business One</span>
        </div>

        <dl className="d-compare-rows">
          {solution.compare.rows.map((row) => (
            <div className="d-compare-row" key={row.task}>
              <dt>{row.task}</dt>
              <dd className="d-compare-old">{row.old}</dd>
              <dd className="d-compare-new">{row.neu}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </Section>
  );
}

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
          {products.modules.items.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}
