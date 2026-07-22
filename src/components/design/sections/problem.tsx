import { cost, pain } from "@/content/blocks";
import { GlassIcon, type IconName } from "../icon";
import { Reveal } from "../reveal";
import { Btn, Section, SectionHead } from "../ui";
import { em } from "../emphasis";

/**
 * Боль. Шесть симптомов одной причины.
 *
 * Намеренно не карточная сетка: это перечень признаков, который читают
 * подряд и примеряют на себя. Крупный номер и волосяная линия дают ритм,
 * а рамки вокруг каждого пункта только дробили бы список на шесть плиток.
 */
export function Pain() {
  return (
    <Section id="pain" tone="tint">
      <Reveal>
        <SectionHead kicker={pain.kicker} h2={pain.h2} lead={pain.lead} />
      </Reveal>

      <ul className="d-symptoms">
        {pain.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 2) * 90}>
            <span className="d-symptom-idx">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="d-h3">{item.title}</h3>
            <p>{em(item.text)}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/** Иконка на статью потерь — по её предмету. */
const COST_ICONS: IconName[] = ["warehouse", "finance", "people", "partnership", "time", "growth"];

/**
 * Цена бездействия. Единственная тёмная секция в верхней половине страницы.
 *
 * Здесь было две неудачные попытки — «дырявое ведро» и «счёт». Обе подменяли
 * задачу поиском образа, хотя задача простая: показать шесть видов потерь
 * так, чтобы их прочитали. Метафора отнимала место у самих потерь, а
 * раскрывающиеся строки прятали половину текста.
 *
 * Поэтому секция говорит тем же языком, что и работающие блоки сайта: всё
 * видно сразу, ничего не спрятано, вес держат иконка и крупный заголовок.
 * Смена среды при этом остаётся: тёмный фон делает работу, которую иначе
 * пришлось бы делать красным цветом и восклицательными знаками.
 */
export function Cost() {
  return (
    <Section id="cost" tone="ink">
      <Reveal>
        <SectionHead kicker={cost.kicker} h2={cost.h2} lead={cost.lead} />
      </Reveal>

      <ul className="d-losses">
        {cost.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 70}>
            <span className="d-loss-mark">
              <GlassIcon name={COST_ICONS[i]} />
              <span className="d-loss-n">{String(i + 1).padStart(2, "0")}</span>
            </span>
            <h3 className="d-h3">{item.title}</h3>
            <p>{em(item.text)}</p>
            {item.source ? <span className="d-loss-src">{item.source}</span> : null}
          </Reveal>
        ))}
      </ul>

      <Reveal className="d-losses-cta">
        <Btn href="/design/simulator" variant="light">{cost.cta}</Btn>
        <span className="d-note">
          Точную сумму заочно не назовёт никто: она зависит от оборота, отрасли и состояния
          учёта. Симулятор покажет порядок за три минуты.
        </span>
      </Reveal>
    </Section>
  );
}
