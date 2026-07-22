"use client";

import { useEffect, useRef } from "react";

/**
 * Текст, который проявляется по словам по мере прокрутки.
 *
 * Приём из каталога — «Караоке»: подсветка идёт синхронно с чтением и задаёт
 * темп. Здесь он держит главный тезис страницы: читатель физически проходит
 * фразу до конца, а не проскакивает абзац глазами.
 *
 * Считаем один прогресс на блок и кладём его в CSS-переменную, а раскраску
 * каждого слова делает CSS через color-mix. Так на кадр приходится одна запись
 * в DOM вместо сотни — иначе на длинной фразе скролл начинает дёргаться.
 */
export function ScrollText({ text, className = "" }: { text: string; className?: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.setProperty("--p", "1");
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      // фраза считается прочитанной, когда её низ доходит до середины экрана
      const start = vh * 0.85;
      const end = vh * 0.35;
      const p = (start - r.top) / Math.max(start - end + r.height * 0.6, 1);
      el.style.setProperty("--p", String(Math.min(1, Math.max(0, p))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [text]);

  return (
    <p
      ref={ref}
      className={`sc-read ${className}`.trim()}
      style={{ ["--n" as string]: words.length }}
    >
      {words.map((w, i) => (
        <span key={`${w}-${i}`} style={{ ["--i" as string]: i }}>
          {w}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </p>
  );
}
