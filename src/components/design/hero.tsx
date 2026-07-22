import Link from "next/link";
import type { ReactNode } from "react";
import { FactoryStage } from "./factory-stage";
import { SiteHeader } from "./menu";
import { PixelArrow, SapMark } from "./marks";
import { SplitHeading } from "./split-text";
import "./hero.css";

/** Доказательства компании. Живут на первом экране — их не нужно искать скроллом. */
const STATS = [
  { val: "35+", lbl: "внедрений SAP в Узбекистане" },
  { val: "с 2019", lbl: "на рынке автоматизации" },
  { val: "Партнёр SAP", lbl: "лицензии и поддержка вендора напрямую" },
];

type BtnProps = {
  children: ReactNode;
  href: string;
  /** primary — заливка брендом, ghost — белая на светлом фоне */
  variant?: "primary" | "ghost";
  /** компактный размер для шапки */
  small?: boolean;
  /** внутренняя навигация идёт через Link, внешние ссылки и якоря — через <a> */
  internal?: boolean;
};

/**
 * Кнопка: подпись слева, квадратная иконочная плитка справа.
 * Плитка инвертирована относительно кнопки — она и держит акцент.
 */
function Btn({ children, href, variant = "primary", small = false, internal = false }: BtnProps) {
  const cls = ["dh-btn", `dh-btn-${variant}`, small ? "dh-btn-sm" : ""].filter(Boolean).join(" ");
  const inner = (
    <>
      <span className="dh-btn-label">{children}</span>
      <span className="dh-btn-icon">
        <PixelArrow />
      </span>
    </>
  );
  return internal ? (
    <Link href={href} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}

/**
 * Первый экран дизайн-версии.
 * Раскладка — колонка на всю высоту вьюпорта: шапка, герой, полоса цифр.
 * Полоса цифр входит в те же 100dvh, поэтому доказательства видно без скролла.
 */
export function DesignHero() {
  return (
    <header className="dh">
      <div className="dh-wrap">
        <SiteHeader />

        <section className="dh-hero">
          <div className="dh-content">
            <p className="dh-eyebrow dh-fade dh-fade-1">
              <SapMark className="dh-eyebrow-mark" />
              Официальный партнёр SAP в Узбекистане
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
              <Btn href="#">Получить расчёт за 1 день</Btn>
              {/* Второе действие намеренно без рамки: две одинаково весомые
                  кнопки конкурируют и размывают главный шаг. */}
              <Link href="/simulator" className="dh-textlink">
                <span className="dh-textlink-label">Посчитать, сколько теряю</span>
                <span className="dh-textlink-icon"><PixelArrow /></span>
              </Link>
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
