import { FactoryStage } from "./factory-stage";
import { SapMark } from "./marks";
import { Btn, TextLink } from "./ui";
import { SplitHeading } from "./split-text";
import "./hero.css";

/** Доказательства компании. Живут на первом экране — их не нужно искать скроллом. */
const STATS = [
  { val: "35+", lbl: "внедрений SAP в Узбекистане" },
  { val: "с 2019", lbl: "на рынке автоматизации" },
  { val: "Партнёр SAP", lbl: "лицензии и поддержка вендора напрямую" },
];

/**
 * Первый экран дизайн-версии.
 * Раскладка — колонка на всю высоту вьюпорта: шапка, герой, полоса цифр.
 * Полоса цифр входит в те же 100dvh, поэтому доказательства видно без скролла.
 */
export function DesignHero() {
  return (
    <header className="dh">
      <div className="dh-wrap">
        <section className="dh-hero">
          <div className="dh-content">
            <p className="dh-eyebrow dh-fade dh-fade-1">
              <SapMark className="dh-eyebrow-mark" />
              Внедряем SAP в Узбекистане с 2019 года
            </p>
            <h1 className="dh-h1">
              <SplitHeading
                segments={[
                  { text: "Одна система вместо " },
                  { text: "Excel, 1С и десяти чатов", accent: true },
                ]}
              />
            </h1>
            {/* Полужирным выделены только механизм и результат — то, что должно
                считываться при беглом взгляде. Больше выделений убивают само выделение. */}
            <p className="dh-lead dh-fade dh-fade-2">
              Когда заказов и людей всё больше, таблицы перестают справляться. SAP собирает финансы, склад, закупки и продажи <strong>в одну систему</strong> — и вы видите <strong>реальную прибыль в любой момент</strong>, а не в конце месяца.
            </p>
            <div className="dh-cta-row dh-fade dh-fade-3">
              <Btn href="#lead">Получить расчёт за 1 день</Btn>
              {/* Второе действие намеренно без рамки: две одинаково весомые
                  кнопки конкурируют и размывают главный шаг. */}
              <TextLink href="/design/simulator">Посчитать замороженные деньги</TextLink>
            </div>
          </div>

          <div className="dh-stage dh-fade dh-fade-2">
            <div className="dh-stage-media">
              <FactoryStage />
            </div>
          </div>

          <div className="dh-stats">
            {STATS.map((s, i) => (
              <div className="dh-stat dh-fade dh-fade-4" key={s.val}>
                <span className="dh-stat-idx">{String(i + 1).padStart(2, "0")}</span>
                <b>{s.val}</b>
                <span className="dh-stat-lbl">{s.lbl}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </header>
  );
}
