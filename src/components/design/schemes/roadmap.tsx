"use client";

import { useEffect, useRef } from "react";
import { process } from "@/content/blocks";
import { em } from "../emphasis";

/**
 * Шесть фаз внедрения, закреплённые на экране.
 *
 * Секция удерживает экран, пока читатель не пройдёт все фазы: линия внизу
 * тянется по мере прокрутки, фазы загораются одна за другой, и только после
 * последней страница едет дальше. Приём «Змея (Roadmap)» из каталога, но со
 * временем: маршрут не показывают целиком сразу — по нему ведут.
 *
 * Смысл в том, что шесть фаз, выложенных разом, читаются как таблица. Здесь
 * же человек физически проходит проект от Discover до Run и запоминает, что
 * этапов шесть, а у каждого есть документ на выходе.
 *
 * Как и в «караоке», за кадр в DOM уходит одно число: прогресс кладётся в
 * CSS-переменную, а всё остальное считает CSS.
 */
export function PinnedRoadmap() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const steps = process.steps.length;

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    // При выключенной анимации закрепление только мешает: показываем всё сразу.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      wrap.style.setProperty("--p", "1");
      wrap.dataset.static = "true";
      return;
    }

    let frame = 0;
    const update = () => {
      frame = 0;
      const r = wrap.getBoundingClientRect();
      // прогресс считается по тому, сколько высоты обёртки уже уехало вверх
      const travel = r.height - window.innerHeight;
      const p = travel > 0 ? -r.top / travel : 0;
      wrap.style.setProperty("--p", String(Math.min(1, Math.max(0, p))));
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
  }, []);

  return (
    <div className="rd" ref={wrapRef} style={{ ["--n" as string]: steps }}>
      <div className="rd-sticky">
        <div className="d-wrap rd-inner">
          <div className="rd-head">
            <p className="d-kicker">{process.kicker}</p>
            <h2 className="d-h2">{process.h2}</h2>
            <p className="d-lead">{process.lead}</p>
          </div>

          <ol className="rd-track">
            {/* линия тянется вместе с прогрессом — она и есть индикатор пути */}
            <span className="rd-line" aria-hidden />
            <span className="rd-line-fill" aria-hidden />

            {process.steps.map((s, i) => (
              <li key={s.n} style={{ ["--i" as string]: i }}>
                <span className="rd-dot" aria-hidden />
                <span className="rd-n">{s.n}</span>
                <span className="rd-name">{s.name}</span>
                <h3>{s.title}</h3>
                <p>{em(s.text)}</p>
                <span className="rd-out">{s.out}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}
