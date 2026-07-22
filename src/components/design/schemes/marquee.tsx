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
/** Сколько ждать после отпускания пальца, пока догорит инерция прокрутки. */
const INERTIA_MS = 1400;

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

    // Позицию ведём отдельной дробной переменной. Прибавлять доли пикселя
    // прямо к scrollLeft нельзя: браузер округляет его до целого, и лента
    // вместо ровного хода идёт ступеньками по пикселю.
    let pos = el.scrollLeft;
    // Время, до которого автодвижение молчит. Нужно из-за инерции: палец уже
    // отпущен, а лента ещё катится сама, и запись scrollLeft в этот момент
    // рвёт инерцию — на телефоне это и читается как дёрганье.
    let quietUntil = 0;

    const tick = (now: number) => {
      const h = half();
      if (!paused && !dragging && now >= quietUntil) {
        pos += speed;
        // нормализуем позицию в обе стороны — лента бесконечна и влево
        if (pos >= h) pos -= h;
        else if (pos <= 0) pos += h;
        el.scrollLeft = pos;
      } else {
        // Ведёт пользователь — только следим за позицией и ничего не пишем.
        pos = el.scrollLeft;
      }
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
    // Палец опущен — стоим. Отпущен — ждём, пока угаснет инерция, и только
    // потом продолжаем ехать сами.
    const onTouchStart = () => { quietUntil = Number.POSITIVE_INFINITY; };
    // resume здесь обязателен: на тач-экране pointerenter ставит паузу, а
    // парного pointerleave может не прийти — и лента замирала навсегда.
    const onTouchEnd = () => { quietUntil = performance.now() + INERTIA_MS; resume(); };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    el.addEventListener("touchcancel", onTouchEnd, { passive: true });
    el.addEventListener("pointerdown", onDown);

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", pause);
      el.removeEventListener("pointerleave", resume);
      el.removeEventListener("focusin", pause);
      el.removeEventListener("focusout", resume);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
      el.removeEventListener("touchcancel", onTouchEnd);
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
