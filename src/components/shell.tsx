"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { PopupProvider } from "./popup-context";
import { Popups } from "./popups";
import { Header } from "./sections-top";
import { Footer, StickyMobile } from "./sections-bottom";

/** Единый каркас всех страниц: шапка, подвал, попапы и мобильная панель. */
export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <PopupProvider>
      <Header />
      <main>{children}</main>
      <Footer />
      <StickyMobile />
      <Popups />
    </PopupProvider>
  );
}

/** Хлебные крошки: показывают, где пользователь находится внутри сайта. */
export function Breadcrumbs({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav aria-label="Хлебные крошки" className="wrap" style={{ paddingTop: "1.75rem" }}>
      <ol style={{ listStyle: "none", display: "flex", flexWrap: "wrap", gap: "0.5rem", padding: 0, margin: 0, fontSize: "0.8rem" }}>
        {items.map((it, i) => (
          <li key={it.label} style={{ display: "flex", gap: "0.5rem" }}>
            {it.href ? (
              <Link href={it.href} className="dim" style={{ textDecoration: "none" }}>{it.label}</Link>
            ) : (
              <span className="muted">{it.label}</span>
            )}
            {i < items.length - 1 && <span className="dim" aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
