"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { PixelArrow, SapMark } from "./marks";
import "./menu.css";

/** Дизайн-версия живёт под /design, пока не станет основной. */
const base = (href: string) => `/design${href}`;

const PRIMARY = [
  { label: "SAP Business One", href: "/sap-business-one", note: "Для растущего бизнеса" },
  { label: "SAP S/4HANA", href: "/sap-s4hana", note: "Для крупного предприятия" },
  { label: "Кейсы", href: "/cases", note: "Внедрения в Узбекистане" },
  { label: "Блог", href: "/blog", note: "Разборы и сравнения" },
  { label: "Контакты", href: "/contacts", note: "Поговорить с командой" },
];

const SECONDARY = [
  { label: "Симулятор потерь", href: "/simulator" },
  { label: "SAP Академия", href: "/academy" },
  { label: "Вакансии", href: "/careers" },
];

/**
 * Шапка и полноэкранное меню.
 *
 * Свёрнуты в один клиентский компонент, потому что от состояния «меню
 * открыто» зависит и сама шторка, и вид шапки поверх неё: логотип
 * переключается на белый, кнопка морфится в крестик. Разносить это по двум
 * компонентам значило бы поднимать состояние вверх и делать клиентским весь
 * первый экран.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    triggerRef.current?.focus();
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
      <nav className={`dh-nav${open ? " is-menu-open" : ""}`} aria-label="Основная навигация">
        <Link href="/design" className="dh-logo" aria-label="BIS — Business Intelligence Solutions">
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
              <span aria-hidden={open}>Меню</span>
              <span aria-hidden={!open}>Закрыть</span>
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
              <span className="dh-menu-cap">Ещё</span>
              <ul className="dh-menu-sub">
                {SECONDARY.map((s) => (
                  <li key={s.href}>
                    <Link href={base(s.href)} onClick={close}>{s.label}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="dh-menu-block" style={{ ["--i" as string]: 6 }}>
              <span className="dh-menu-cap">Связаться</span>
              <a className="dh-menu-phone" href="tel:+998908231012">+998 90 823 10 12</a>
              <a className="dh-menu-cta" href="#lead" onClick={close}>
                Получить расчёт за 1 день
                <span className="dh-menu-cta-icon"><PixelArrow /></span>
              </a>
            </div>
          </div>

          <div className="dh-menu-foot" style={{ ["--i" as string]: 7 }}>
            <span className="dh-menu-foot-mark">
              <SapMark />
              Официальный партнёр SAP в Узбекистане
            </span>
            <span>Ташкент · внедрение и поддержка SAP</span>
          </div>
        </div>
      </div>
    </>
  );
}
