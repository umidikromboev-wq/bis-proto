"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useCallback, useEffect, useRef, useState } from "react";
import { PixelArrow, SapMark } from "./marks";
import { DEFAULT_LOCALE, LOCALES, LOCALE_LABEL, localePath, type Locale } from "@/content/locale";
import { menuNav } from "@/content/nav";
import { ui } from "@/content/ui";
import "./menu.css";

/**
 * Шапка и полноэкранное меню.
 *
 * Свёрнуты в один клиентский компонент, потому что от состояния «меню
 * открыто» зависит и сама шторка, и вид шапки поверх неё: логотип
 * переключается на белый, кнопка морфится в крестик. Разносить это по двум
 * компонентам значило бы поднимать состояние вверх и делать клиентским весь
 * первый экран.
 */
export function SiteHeader({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const { primary: PRIMARY, secondary: SECONDARY, industries: INDUSTRIES, industriesLabel } = menuNav(locale);
  const base = (href: string) => localePath(locale, href);
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
  }, []);

  // Фон шапки появляется только после того, как первый экран уехал вверх.
  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        return;
      }
      if (e.key !== "Tab") return;
      // Пока меню открыто, фокус не должен уходить на страницу под шторкой.
      const nodes = panelRef.current?.querySelectorAll<HTMLElement>("a[href], button");
      if (!nodes?.length) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      } else if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      }
    };

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <>
      <nav className={`dh-nav${stuck ? " is-stuck" : ""}${open ? " is-menu-open" : ""}`} aria-label={txt.navMain}>
        <Link href={base("/")} className="dh-logo" aria-label="BIS — Business Intelligence Solutions">
          <Image src="/design/bis-logo.png" alt="BIS — Business Intelligence Solutions" width={1012} height={782} priority />
          <Image src="/design/bis-logo-white.png" alt="" aria-hidden width={1012} height={782} />
        </Link>

        <div className="dh-navcta">
          <a href="tel:+998908231012" className="dh-phone">+998 90 823 10 12</a>
          <button
            ref={triggerRef}
            type="button"
            className={`dh-burger${open ? " is-open" : ""}`}
            aria-expanded={open}
            aria-controls="dh-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="dh-burger-label">
              <span aria-hidden={open}>{txt.menu}</span>
              <span aria-hidden={!open}>{txt.close}</span>
            </span>
            <span className="dh-burger-icon" aria-hidden>
              <i />
              <i />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="dh-menu"
        ref={panelRef}
        className={`dh-menu${open ? " is-open" : ""}`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="dh-menu-inner">
          {/* Языки стоят выше навигации: выбор языка предшествует выбору
              раздела. Узбекская подпись латиницей — официальная письменность.
              Переключение ведёт на главную нужного языка, а не на текущий
              адрес: перевод адресов у разделов совпадает, но не у статей. */}
          <div className="dh-menu-lang" style={{ ["--i" as string]: 0 }}>
            {LOCALES.map((l, i) => (
              <Fragment key={l}>
                {i > 0 ? <span className="dh-lang-sep" aria-hidden /> : null}
                {l === locale ? (
                  <span className="dh-lang is-active" aria-current="true">{LOCALE_LABEL[l]}</span>
                ) : (
                  <Link href={localePath(l, "/")} className="dh-lang" onClick={close} hrefLang={l}>
                    {LOCALE_LABEL[l]}
                  </Link>
                )}
              </Fragment>
            ))}
          </div>

          <ul className="dh-menu-list">
            {PRIMARY.map((item, i) => (
              <li key={item.href} style={{ ["--i" as string]: i }}>
                <Link href={base(item.href)} onClick={close}>
                  <span className="dh-menu-idx">{String(i + 1).padStart(2, "0")}</span>
                  <span className="dh-menu-word">{item.label}</span>
                  <span className="dh-menu-note">{item.note}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="dh-menu-side">
            <div className="dh-menu-block" style={{ ["--i" as string]: 5 }}>
              <span className="dh-menu-cap">{txt.more}</span>
              <ul className="dh-menu-sub">
                {SECONDARY.map((s) => (
                  <li key={s.href}>
                    <Link href={base(s.href)} onClick={close}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dh-menu-block" style={{ ["--i" as string]: 6 }}>
              <span className="dh-menu-cap">{industriesLabel}</span>
              <ul className="dh-menu-sub">
                {INDUSTRIES.map((s) => (
                  <li key={s.href}>
                    <Link href={base(s.href)} onClick={close}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dh-menu-block" style={{ ["--i" as string]: 7 }}>
              <span className="dh-menu-cap">{txt.contact}</span>
              <a className="dh-menu-phone" href="tel:+998908231012">+998 90 823 10 12</a>
              <a className="dh-menu-cta" href="#lead" onClick={close}>
                {txt.getEstimate}
                <span className="dh-menu-cta-icon"><PixelArrow /></span>
              </a>
            </div>
          </div>

          <div className="dh-menu-foot" style={{ ["--i" as string]: 7 }}>
            <span className="dh-menu-foot-mark">
              <SapMark />
              {txt.partnerLine}
            </span>
            <span>{txt.tagline}</span>
          </div>
        </div>
      </div>
    </>
  );
}
