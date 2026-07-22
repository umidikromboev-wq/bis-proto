import Link from "next/link";
import type { ReactNode } from "react";
import { PixelArrow } from "./marks";

/** Внутренние ссылки идут через Link, внешние и якоря — через <a>. */
function isInternal(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

type BtnProps = {
  children: ReactNode;
  href: string;
  /** primary — заливка брендом, ghost — белая, light — белая на тёмной секции */
  variant?: "primary" | "ghost" | "light";
  small?: boolean;
};

/**
 * Кнопка: подпись слева, квадратная иконочная плитка справа.
 * Плитка инвертирована относительно кнопки — она и держит акцент.
 * Кнопки плоские и неподвижные: обратную связь даёт только цвет.
 */
export function Btn({ children, href, variant = "primary", small = false }: BtnProps) {
  const cls = ["dh-btn", `dh-btn-${variant}`, small ? "dh-btn-sm" : ""].filter(Boolean).join(" ");
  const inner = (
    <>
      <span className="dh-btn-label">{children}</span>
      <span className="dh-btn-icon"><PixelArrow /></span>
    </>
  );
  return isInternal(href) ? (
    <Link href={href} className={cls}>{inner}</Link>
  ) : (
    <a href={href} className={cls}>{inner}</a>
  );
}

/** Второстепенное действие: без рамки, с линией, раскрывающейся от левого края. */
export function TextLink({ children, href }: { children: ReactNode; href: string }) {
  const inner = (
    <>
      <span className="dh-textlink-label">{children}</span>
      <span className="dh-textlink-icon"><PixelArrow /></span>
    </>
  );
  return isInternal(href) ? (
    <Link href={href} className="dh-textlink">{inner}</Link>
  ) : (
    <a href={href} className="dh-textlink">{inner}</a>
  );
}

export function Kicker({ children }: { children: ReactNode }) {
  return <p className="d-kicker">{children}</p>;
}

/**
 * Шапка секции. Заголовок и лид всегда идут парой и всегда в одном порядке —
 * так у всех секций сайта один ритм входа.
 */
export function SectionHead({ kicker, h2, lead, id }: { kicker?: string; h2: string; lead?: string; id?: string }) {
  return (
    <div className="d-head">
      {kicker ? <Kicker>{kicker}</Kicker> : null}
      <h2 className="d-h2" id={id}>{h2}</h2>
      {lead ? <p className="d-lead">{lead}</p> : null}
    </div>
  );
}

export function Section({
  children,
  id,
  tone = "plain",
  className = "",
}: {
  children: ReactNode;
  id?: string;
  /** plain — на бумаге, tint — на белой плашке, ink — тёмная секция */
  tone?: "plain" | "tint" | "ink";
  className?: string;
}) {
  const tones = { plain: "", tint: "d-section--tint", ink: "d-section--ink" };
  return (
    <section id={id} className={`d-section ${tones[tone]} ${className}`.trim()}>
      <div className="d-wrap">{children}</div>
    </section>
  );
}
