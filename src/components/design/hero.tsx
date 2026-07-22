import Link from "next/link";
import type { ReactNode } from "react";
import { FactoryVideo } from "./factory-video";
import { PixelArrow, SapMark } from "./marks";
import "./hero.css";

const NAV = [
  { label: "SAP Business One", href: "#" },
  { label: "SAP S/4HANA", href: "#" },
  { label: "Кейсы", href: "#" },
  { label: "Блог", href: "#" },
  { label: "Контакты", href: "#" },
];

/** Метрики вокруг завода — эффект внедрения SAP. dir: up = рост, down = снижение. */
const METRICS = [
  { pos: "m1", dir: "up", val: "+30%", lbl: "загрузка оборудования" },
  { pos: "m2", dir: "down", val: "-40%", lbl: "простои производства" },
  { pos: "m3", dir: "down", val: "-25%", lbl: "затраты на управление" },
  { pos: "m4", dir: "up", val: "+15%", lbl: "рост продаж" },
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
  if (internal) {
    return (
      <Link href={href} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <a href={href} className={cls}>
      {inner}
    </a>
  );
}

function Trend({ up }: { up: boolean }) {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {up ? <path d="M7 17 17 7M9 7h8v8" /> : <path d="M7 7l10 10M17 9v8H9" />}
    </svg>
  );
}

/** Первый экран дизайн-версии. Живой изо-завод справа, контент слева. */
export function DesignHero() {
  return (
    <header className="dh">
      <div className="dh-wrap">
        <nav className="dh-nav" aria-label="Основная навигация">
          <Link href="/" className="dh-logo">
            <b>BIS</b>
            <span>Business Intelligence Solutions</span>
          </Link>
          <div className="dh-navlinks">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}>{n.label}</a>
            ))}
          </div>
          <div className="dh-navcta">
            <a href="tel:+998908231012" className="dh-phone">+998 90 823 10 12</a>
            <Btn href="#" small>Получить расчёт</Btn>
          </div>
        </nav>

        <section className="dh-hero">
          <div className="dh-content">
            <p className="dh-eyebrow dh-rise dh-rise-1">
              <SapMark className="dh-eyebrow-mark" />
              Официальный партнёр SAP в Узбекистане
            </p>
            <h1 className="dh-h1 dh-rise dh-rise-2">
              Одна система вместо <em>Excel, 1С и&nbsp;десяти чатов</em>
            </h1>
            <p className="dh-lead dh-rise dh-rise-3">
              Когда заказов и людей всё больше, таблицы перестают справляться. SAP связывает финансы, склад, закупки и продажи в одном месте. Данные вводятся один раз и видны всем. Вы держите бизнес под контролем и масштабируетесь спокойно.
            </p>
            <div className="dh-cta-row dh-rise dh-rise-4">
              <Btn href="#">Получить расчёт за 1 день</Btn>
              <Btn href="/simulator" variant="ghost" internal>Сначала посчитать, сколько теряю</Btn>
            </div>
          </div>

          <div className="dh-stage">
            <div className="dh-stage-media">
              <FactoryVideo />
            </div>
            {METRICS.map((m) => (
              <div key={m.pos} className={`dh-metric ${m.pos} dh-float`}>
                <div className={`m-val ${m.dir}`}>
                  <Trend up={m.dir === "up"} />
                  {m.val}
                </div>
                <div className="m-lbl">{m.lbl}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="dh-stats">
          <div className="dh-stat"><b>35+</b><span>внедрений SAP в Узбекистане</span></div>
          <div className="dh-stat"><b>с 2016</b><span>на рынке автоматизации</span></div>
          <div className="dh-stat"><b>Партнёр SAP</b><span>лицензии и поддержка вендора напрямую</span></div>
        </div>
      </div>
    </header>
  );
}
