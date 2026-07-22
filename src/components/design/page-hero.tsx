import Link from "next/link";
import type { ReactNode } from "react";
import { SapMark } from "./marks";
import { SplitHeading } from "./split-text";
import "./page-hero.css";

type Crumb = { label: string; href?: string };

/**
 * Первый экран внутренней страницы.
 *
 * Намеренно короче главного: там первый экран продаёт, здесь — ориентирует.
 * Поэтому нет 100dvh и нет визуала во всю колонку, но сохранены приёмы
 * главной — знак SAP в бейдже, заголовок по буквам, тонкий набор.
 */
export function PageHero({
  crumbs,
  eyebrow,
  h1,
  accent,
  lead,
  facts,
  children,
}: {
  crumbs?: Crumb[];
  eyebrow?: string;
  /** обычная часть заголовка */
  h1: string;
  /** часть заголовка, набранная брендовым цветом */
  accent?: string;
  lead?: string;
  facts?: { value: string; label: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="dp">
      <div className="d-wrap">
        {crumbs?.length ? (
          <nav className="dp-crumbs" aria-label="Хлебные крошки">
            {crumbs.map((c, i) => (
              <span key={c.label}>
                {c.href ? <Link href={c.href}>{c.label}</Link> : <b>{c.label}</b>}
                {i < crumbs.length - 1 ? <i aria-hidden>/</i> : null}
              </span>
            ))}
          </nav>
        ) : null}

        {eyebrow ? (
          <p className="dh-eyebrow dp-eyebrow">
            <SapMark className="dh-eyebrow-mark" />
            {eyebrow}
          </p>
        ) : null}

        <h1 className="dp-h1">
          <SplitHeading
            segments={accent ? [{ text: `${h1} ` }, { text: accent, accent: true }] : [{ text: h1 }]}
          />
        </h1>

        {lead ? <p className="dp-lead">{lead}</p> : null}
        {children}

        {facts?.length ? (
          <div className="dp-facts">
            {facts.map((f, i) => (
              <div key={f.label}>
                <span className="dp-fact-idx">{String(i + 1).padStart(2, "0")}</span>
                <b>{f.value}</b>
                <span>{f.label}</span>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  );
}
