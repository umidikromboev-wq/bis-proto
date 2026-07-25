import { FactoryStage } from "./factory-stage";
import { SapMark } from "./marks";
import { Btn, TextLink } from "./ui";
import { SplitHeading } from "./split-text";
import { em } from "./emphasis";
import "./hero.css";
import { content } from "@/content";
import { ui } from "@/content/ui";
import { DEFAULT_LOCALE, localePath, type Locale } from "@/content/locale";

/**
 * Первый экран.
 * Раскладка — колонка на всю высоту вьюпорта: шапка, герой, полоса цифр.
 * Полоса цифр входит в те же 100dvh, поэтому доказательства видно без скролла.
 *
 * Цифры берутся из контента, а не из локального списка: раньше здесь стояло
 * «Партнёр SAP», хотя это заявление снято со всего сайта — статуса партнёра у
 * компании нет, SAP его не выдаёт.
 */
export function DesignHero({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const { hero } = content(locale).blocks;
  const lp = (path: string) => localePath(locale, path);

  return (
    <header className="dh">
      <div className="dh-wrap">
        <section className="dh-hero">
          <div className="dh-content">
            <p className="dh-eyebrow dh-fade dh-fade-1">
              <SapMark className="dh-eyebrow-mark" />
              {hero.eyebrow}
            </p>
            <h1 className="dh-h1">
              <SplitHeading
                segments={[
                  { text: hero.h1Plain },
                  { text: hero.h1Accent, accent: true },
                ]}
              />
            </h1>
            {/* Полужирным выделены только механизм и результат — то, что должно
                считываться при беглом взгляде. Больше выделений убивают само выделение. */}
            <p className="dh-lead dh-fade dh-fade-2">
              {em(hero.lead)}
            </p>
            <div className="dh-cta-row dh-fade dh-fade-3">
              <Btn href="#lead">{hero.cta}</Btn>
              {/* Второе действие намеренно без рамки: две одинаково весомые
                  кнопки конкурируют и размывают главный шаг. */}
              <TextLink href={lp("/simulator")}>{txt.countFrozen}</TextLink>
            </div>
          </div>

          <div className="dh-stage dh-fade dh-fade-2">
            <div className="dh-stage-media">
              <FactoryStage locale={locale} />
            </div>
          </div>

          <div className="dh-stats">
            {hero.facts.map((s, i) => (
              <div className="dh-stat dh-fade dh-fade-4" key={s.value}>
                <span className="dh-stat-idx">{String(i + 1).padStart(2, "0")}</span>
                <b>{s.value}</b>
                <span className="dh-stat-lbl">{s.label}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </header>
  );
}
