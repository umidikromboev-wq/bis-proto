import { cost, pain } from "@/content/blocks";
import { Reveal } from "../reveal";
import { Btn, Section, SectionHead } from "../ui";

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
            <p>{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

/**
 * Цена бездействия. Единственная тёмная секция в верхней половине страницы.
 *
 * Смена среды делает работу, которую иначе пришлось бы делать красным цветом
 * и восклицательными знаками: читатель физически чувствует, что разговор
 * сменил тон, — а дальше страница возвращается на светлое, к решению.
 */
export function Cost() {
  return (
    <Section id="cost" tone="ink">
      <Reveal>
        <SectionHead kicker={cost.kicker} h2={cost.h2} lead={cost.lead} />
      </Reveal>

      <ul className="d-losses">
        {cost.items.map((item, i) => (
          <Reveal as="li" key={item.title} delay={(i % 3) * 80}>
            <h3 className="d-h3">{item.title}</h3>
            <p>{item.text}</p>
            {item.source ? <span className="d-loss-src">{item.source}</span> : null}
          </Reveal>
        ))}
      </ul>

      <Reveal className="d-losses-cta">
        <Btn href="/design/simulator" variant="light">{cost.cta}</Btn>
      </Reveal>
    </Section>
  );
}
