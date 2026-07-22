"use client";

import { useEffect, useRef, type ReactNode } from "react";

/**
 * Лента, которая едет сама и при этом листается рукой.
 *
 * CSS-анимация для этого не годится: она двигает трек трансформом, а он не
 * связан с прокруткой, и пользователь физически не может её перехватить.
 * Поэтому здесь настоящий горизонтальный скролл — тач и трекпад работают
 * сами собой, — а автодвижение делает rAF, прибавляя scrollLeft.
 *
 * Список отрисован дважды: как только прокрутка уходит за половину, мы
 * вычитаем половину ширины. Позиция в кадре при этом не меняется, поэтому
 * склейки не видно и лента бесконечная в обе стороны.
 */
export function DragMarquee({
  children,
  speed = 0.4,
  className = "",
  label,
}: {
  children: ReactNode;
  /** пикселей за кадр */
  speed?: number;
  className?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let paused = reduce;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const half = () => el.scrollWidth / 2;

    const tick = () => {
      if (!paused && !dragging) el.scrollLeft += speed;
      // нормализуем позицию в обе стороны — лента бесконечна и влево
      if (el.scrollLeft >= half()) el.scrollLeft -= half();
      else if (el.scrollLeft <= 0) el.scrollLeft += half();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const pause = () => { paused = true; };
    const resume = () => { if (!reduce) paused = false; };

    const onDown = (e: PointerEvent) => {
      // тач и трекпад скроллят нативно, перехватываем только мышь
      if (e.pointerType !== "mouse") return;
      dragging = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.classList.add("is-dragging");
      // Слушаем window, а не сам элемент: setPointerCapture сам поднимает
      // pointerleave, и перетаскивание обрывалось на первых же пикселях.
      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      e.preventDefault();
      el.scrollLeft = startScroll - (e.clientX - startX);
    };
    const onUp = () => {
      if (!dragging) return;
      dragging = false;
      el.classList.remove("is-dragging");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };

    el.addEventListener("pointerenter", pause);
    el.addEventListener("pointerleave", resume);
    el.addEventListener("focusin", pause);
    el.addEventListener("focusout", resume);
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("touchend", resume, { passive: true });
    el.addEventListener("pointerdown", onDown);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resume);
      el.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
    };
  }, [speed]);

  return (
    <div className={`dm ${className}`.trim()} ref={ref} role="group" aria-label={label} tabIndex={0}>
      <div className="dm-row">{children}</div>
    </div>
  );
}
