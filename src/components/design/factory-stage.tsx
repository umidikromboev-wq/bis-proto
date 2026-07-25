"use client";

import { useEffect, useRef, useState } from "react";
import "./factory-stage.css";
import { ui } from "@/content/ui";
import { DEFAULT_LOCALE, type Locale } from "@/content/locale";

/**
 * Точки привязаны к объектам на кадре в процентах от него же (2000×1562).
 * Поэтому слой точек обязан совпадать с прямоугольником видео пиксель в
 * пиксель — этим занимается .dh-figure в стилях.
 */
const SPOTS = [
  { x: 56, y: 67, side: "right", val: "+30%", lblKey: "fsLoad", icon: "gauge" },
  { x: 31, y: 56, side: "left", val: "−40%", lblKey: "fsDowntime", icon: "pause" },
  { x: 69, y: 17, side: "left", val: "−25%", lblKey: "fsAdminCost", icon: "wallet" },
  { x: 81, y: 51, side: "left", val: "+15%", lblKey: "fsSalesGrowth", icon: "trend" },
] as const;

function Icon({ name }: { name: (typeof SPOTS)[number]["icon"] }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  if (name === "gauge") return <svg {...common}><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" /><path d="m13.4 10.6 4.1-4.1" /><path d="M4 18a9 9 0 1 1 16 0" /></svg>;
  if (name === "pause") return <svg {...common}><circle cx="12" cy="12" r="8.5" /><path d="M10 9.5v5M14 9.5v5" /></svg>;
  if (name === "wallet") return <svg {...common}><path d="M4 8.5A2.5 2.5 0 0 1 6.5 6H18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6.5A2.5 2.5 0 0 1 4 16.5v-8Z" /><path d="M4 8.5h14" /><path d="M16.5 13.5h.01" /></svg>;
  return <svg {...common}><path d="M4 16.5 9.5 11l3.5 3.5L20 7.5" /><path d="M15 7.5h5v5" /></svg>;
}

/**
 * Живой изо-завод с точками показателей.
 *
 * Фон у видео убрать нельзя — модель белая на белом, ключом её не отделить.
 * Прозрачность даёт CSS-маска: альфа снята с первого кадра этого же клипа, а
 * камера в нём зафиксирована, поэтому одна статичная маска подходит ко всем
 * кадрам. Постер — тот же кадр с уже вшитой альфой, подмены не видно.
 */
export function FactoryStage({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const [active, setActive] = useState(0); // первая точка раскрыта сразу — она же показывает, что точки живые
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      v.removeAttribute("autoplay");
      v.pause();
      return;
    }
    v.play().catch(() => {});
  }, []);

  return (
    <div className="dh-figure">
      <video
        ref={videoRef}
        className="dh-factory"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/design/factory.webp"
        width={2000}
        height={1562}
        aria-label={txt.factoryAlt}
      >
        <source src="/design/factory.webm" type="video/webm" />
        <source src="/design/factory.mp4" type="video/mp4" />
      </video>

      {/* Верхний левый угол кадра пустой — подсказка там ничего не перекрывает */}
      <p className="dh-spot-hint" aria-hidden>
        <span />
        {txt.fsHint}
      </p>

      <div className="dh-spots">
        {SPOTS.map((s, i) => (
          <div
            key={txt[s.lblKey]}
            className={`dh-spot${active === i ? " is-active" : ""}`}
            data-side={s.side}
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
          >
            <button
              type="button"
              className="dh-spot-btn"
              aria-expanded={active === i}
              // Без переключения: на тач-экране перед кликом успевает
              // сработать наведение, и клик тут же закрывал бы только что
              // открытую точку. Наведение слушаем только у мыши.
              onClick={() => setActive(i)}
              onPointerEnter={(e) => { if (e.pointerType === "mouse") setActive(i); }}
              onFocus={() => setActive(i)}
            >
              <Icon name={s.icon} />
              <span className="dh-sr">
                {s.val} — {txt[s.lblKey]}
              </span>
            </button>
            <span className="dh-tip" aria-hidden={active !== i}>
              <b>{s.val}</b>
              <i>{txt[s.lblKey]}</i>
            </span>
          </div>
        ))}
      </div>

      {/* На узком экране подсказке некуда развернуться у самой точки —
          у крайних точек она вылезает за кадр в любую сторону. Поэтому там
          показатель уезжает в отдельную плашку в углу кадра. */}
      {active >= 0 ? (
        <span className="dh-tip-bar" aria-hidden>
          <b>{SPOTS[active].val}</b>
          <i>{txt[SPOTS[active].lblKey]}</i>
        </span>
      ) : null}
    </div>
  );
}
