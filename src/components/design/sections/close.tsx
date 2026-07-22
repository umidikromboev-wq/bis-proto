import { faq, finalCta, pricing } from "@/content/blocks";
import { leadMagnet } from "@/content/playbook";
import { Reveal } from "../reveal";
import { ScrollText } from "../schemes/scroll-text";
import { Btn, Kicker, Section, SectionHead, TextLink } from "../ui";

/**
 * Лид-магнит. Главный конверсионный блок страницы.
 *
 * Обещание конкретное — расчёт на цифрах клиента, поэтому рядом стоит имя
 * консультанта, который его делает: «оставьте заявку» и «вам ответит Жасур» —
 * разные по весу обещания.
 */
export function LeadMagnet() {
  return (
    <Section id="lead" tone="ink">
      <div className="d-lead-grid">
        <Reveal>
          <SectionHead kicker={leadMagnet.kicker} h2={leadMagnet.h2} lead={leadMagnet.lead} />

          <ul className="d-lead-bullets">
            {leadMagnet.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="d-lead-actions">
            <Btn href="#form" variant="light">{leadMagnet.cta}</Btn>
            <span className="d-note">{leadMagnet.micro}</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="d-lead-side">
          <div className="d-expert">
            <span className="d-expert-avatar" aria-hidden>ЖМ</span>
            <div>
              <b>{leadMagnet.expert.name}</b>
              <span>{leadMagnet.expert.role}</span>
            </div>
          </div>
          <p className="d-expert-line">{leadMagnet.expert.line}</p>

          <div className="d-zoom">
            <p>{leadMagnet.zoom.text}</p>
            <TextLink href="#zoom">{leadMagnet.zoom.cta}</TextLink>
          </div>
        </Reveal>
      </div>

      <Reveal className="d-docs">
        <h3 className="d-h3">{leadMagnet.docs.h3}</h3>
        <div className="d-docs-list">
          {leadMagnet.docs.items.map((d) => (
            <a key={d.name} href="#doc" className="d-doc">
              <span className="d-doc-format">{d.format}</span>
              <b>{d.name}</b>
              <span className="d-doc-text">{d.text}</span>
            </a>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/**
 * Тарифы. Здесь колонки уместны: их сравнивают между собой.
 *
 * Рекомендуемый пакет выделен не заливкой, а брендовой вертикалью и меткой —
 * заливка сделала бы соседние пакеты похожими на отбракованные.
 */
export function Pricing() {
  return (
    <Section id="pricing">
      <Reveal>
        <SectionHead kicker={pricing.kicker} h2={pricing.h2} lead={pricing.lead} />
      </Reveal>

      <div className="d-tariffs">
        {pricing.tariffs.map((t, i) => (
          <Reveal key={t.id} delay={i * 90} className={`d-tariff${t.popular ? " is-popular" : ""}`}>
            {t.popular ? <span className="d-tariff-flag">Чаще всего выбирают</span> : null}
            <h3 className="d-h3">{t.name}</h3>
            <p className="d-tariff-for">{t.for}</p>
            <div className="d-tariff-price">
              <b>{t.price}</b>
              <span>{t.priceNote}</span>
            </div>
            <p className="d-tariff-term"><span>Срок</span>{t.term}</p>
            <ul className="d-tariff-includes">
              {t.includes.map((inc) => (
                <li key={inc}>{inc}</li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>

      <Reveal className="d-guarantee">
        <h3 className="d-h3">{pricing.guarantee.title}</h3>
        <ul>
          {pricing.guarantee.items.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </Reveal>
    </Section>
  );
}

/**
 * Вопросы. Нативный details — раскрытие без единой строки скрипта,
 * работает с клавиатуры и доступно скринридерам по умолчанию.
 */
export function Faq() {
  return (
    <Section id="faq" tone="tint">
      {/* Заголовок залипает, пока справа прокручиваются вопросы: читатель не
          теряет тему длинного списка, а левая половина перестаёт пустовать. */}
      <div className="sc-split">
        <div className="sc-split-side">
          <Reveal>
            <Kicker>{faq.kicker}</Kicker>
            <ScrollText className="sc-read--tight" text={faq.h2} />
          </Reveal>
        </div>

        <div className="d-faq">
          {faq.items.map((item, i) => (
            <Reveal key={item.q} delay={Math.min(i, 4) * 50}>
              <details className="d-faq-item">
                <summary>
                  <span>{item.q}</span>
                  <i aria-hidden />
                </summary>
                <p>{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/** Финальный призыв. Последняя развилка: аудит или открытая встреча. */
export function FinalCta() {
  return (
    <Section id="audit" className="d-final">
      <Reveal className="d-final-inner">
        <h2 className="d-h2">{finalCta.h2}</h2>
        <p className="d-lead">{finalCta.lead}</p>

        <ul className="d-final-bullets">
          {finalCta.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>

        <div className="dh-cta-row">
          <Btn href="#form">{finalCta.cta}</Btn>
          <TextLink href="#zoom">{finalCta.altCta}</TextLink>
        </div>
        <p className="d-note">{finalCta.alt}</p>
      </Reveal>
    </Section>
  );
}
