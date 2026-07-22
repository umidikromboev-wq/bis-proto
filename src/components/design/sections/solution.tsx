import { products, solution } from "@/content/blocks";
import { Reveal } from "../reveal";
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
          {solution.body.map((p) => (
            <p key={p}>{p}</p>
          ))}
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

/**
 * Продукты. Три решения подряд, а не три равные карточки.
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

      <div className="d-products">
        {products.items.map((item, i) => (
          <Reveal key={item.name} delay={i * 90} className="d-product">
            <span className="d-product-idx">{String(i + 1).padStart(2, "0")}</span>
            <div className="d-product-name">
              <h3 className="d-h3">{item.name}</h3>
              <p className="d-product-for">{item.for}</p>
            </div>
            <div className="d-product-body">
              <p>{item.text}</p>
              <ul className="d-marks">
                {item.marks.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
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
