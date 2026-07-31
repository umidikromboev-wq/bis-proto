import Image from "next/image";
import { Reveal } from "../reveal";
import { ScrollText } from "../schemes/scroll-text";
import { PixelArrow } from "../marks";
import { Btn, Kicker, Section, SectionHead, TextLink } from "../ui";
import { LeadButton, LeadTextLink } from "../lead-popup";
import { content } from "@/content";
import { DEFAULT_LOCALE, type Locale } from "@/content/locale";
import { ui } from "@/content/ui";

/** Порядок документов в контенте задаёт, какой попап открывает каждая плитка. */
/**
 * Лид-магнит. Главный конверсионный блок страницы.
 *
 * Обещание конкретное — расчёт на цифрах клиента, поэтому рядом стоит имя
 * консультанта, который его делает: «оставьте заявку» и «вам ответит Жасур» —
 * разные по весу обещания.
 */
export function LeadMagnet({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const site = content(locale);
  const { leadMagnet } = site.playbook;
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
            <LeadButton source="calc" variant="light">{leadMagnet.cta}</LeadButton>
            <span className="d-note">{leadMagnet.micro}</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="d-lead-side">
          {/* Снимок самой встречи: обещание «разберём на аудите» становится
              картинкой того, как это выглядит, а не остаётся словами. */}
          <Image
            className="d-lead-photo"
            src="/design/photos/audit.webp"
            alt={txt.meetingAlt}
            width={2000}
            height={1116}
            sizes="(max-width: 1000px) 100vw, 34vw"
          />
          <div className="d-expert">
            {/* Портрет из фотосессии BIS вместо инициалов: обещание «расчёт
                делает консультант, а не робот» держится на том, что этого
                консультанта видно в лицо. */}
            <Image
              className="d-expert-avatar"
              src="/design/team/mavlyanov.webp"
              alt={leadMagnet.expert.name}
              width={900}
              height={1125}
            />
            <div>
              <b>{leadMagnet.expert.name}</b>
              <span>{leadMagnet.expert.role}</span>
            </div>
          </div>
          <p className="d-expert-line">{leadMagnet.expert.line}</p>

          <div className="d-zoom">
            <p>{leadMagnet.zoom.text}</p>
            <LeadTextLink source="zoom">{leadMagnet.zoom.cta}</LeadTextLink>
          </div>
        </Reveal>
      </div>

      <Reveal className="d-docs">
        <h3 className="d-h3">{leadMagnet.docs.h3}</h3>
        <div className="d-docs-list">
          {leadMagnet.docs.items.map((d, i) => (
            // Ссылка со скачиванием вместо попапа: обещали «забрать материалы
            // без разговора» — значит без формы, иначе обещание ложное.
            <a
              key={d.name}
              className="d-doc"
              href={d.file}
              download
              target="_blank"
              rel="noopener"
            >
              <span className="d-doc-top">
                {/* Иконка формата: человек должен понимать, что получит файл,
                    ещё до клика — иначе «скачать» читается как очередная форма. */}
                <span className="d-doc-badge" aria-hidden>PDF</span>
                <span className="d-doc-format">{d.format}</span>
              </span>
              <b>{d.name}</b>
              <span className="d-doc-text">{d.text}</span>
              <span className="d-doc-btn">
                {txt.download}
                <PixelArrow />
              </span>
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
export function Pricing({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const site = content(locale);
  const { pricing } = site.blocks;
  return (
    <Section id="pricing">
      <Reveal>
        <SectionHead kicker={pricing.kicker} h2={pricing.h2} lead={pricing.lead} />
      </Reveal>

      <div className="d-tariffs">
        {pricing.tariffs.map((t, i) => (
          <Reveal key={t.id} delay={i * 90} className={`d-tariff${t.popular ? " is-popular" : ""}`}>
            {t.popular ? <span className="d-tariff-flag">{txt.mostChosen}</span> : null}
            <h3 className="d-h3">{t.name}</h3>
            <p className="d-tariff-for">{t.for}</p>
            <p className="d-tariff-term"><span>{txt.term}</span>{t.term}</p>
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
export function Faq({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const site = content(locale);
  const { faq } = site.blocks;
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

/**
 * Финальный призыв.
 *
 * Правая половина раньше пустовала, и блок читался как обрыв страницы.
 * Теперь там дашборд SAP на мониторе: последнее, что видит человек перед
 * решением, — это то, что он получит. Обещание «покажем систему» становится
 * показом системы.
 */
export function FinalCta({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const site = content(locale);
  const { finalCta } = site.blocks;
  return (
    <Section id="audit" className="d-final">
      <div className="d-final-grid">
        <Reveal className="d-final-inner">
          <h2 className="d-h2">{finalCta.h2}</h2>
          <p className="d-lead">{finalCta.lead}</p>

          <ul className="d-final-bullets">
            {finalCta.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>

          <div className="dh-cta-row">
            <LeadButton source="audit">{finalCta.cta}</LeadButton>
            <LeadTextLink source="zoom">{finalCta.altCta}</LeadTextLink>
          </div>
          <p className="d-note">{finalCta.alt}</p>
        </Reveal>

        <Reveal delay={120} className="d-final-art">
          <Image
            src="/design/photos/dashboard.webp"
            alt={txt.dashboardAlt}
            width={2200}
            height={1643}
            sizes="(max-width: 1000px) 100vw, 52vw"
          />
        </Reveal>
      </div>
    </Section>
  );
}
