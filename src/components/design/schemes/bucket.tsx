"use client";

import { useState } from "react";
import { cost } from "@/content/blocks";

/**
 * Схема «Дырявое ведро» — приём из каталога смысловых приёмов: метафора
 * потерь ресурсов, которые «по умолчанию» невидны.
 *
 * Секция называется «счёт за это не приходит» — то есть речь именно о
 * незаметных потерях. Список из шести пунктов такую мысль не передаёт: шесть
 * абзацев читаются как шесть отдельных мелочей. Ведро собирает их в одну
 * картину: воды столько же, но она уходит, и видно, через какие именно дыры.
 *
 * Наведение на пункт подсвечивает свою дыру, наведение на дыру — свой пункт.
 * Связь двусторонняя, иначе схема остаётся украшением рядом с текстом.
 */
/** Дыры сидят на самом контуре ведра, иначе струя не вытекает наружу, а
 *  остаётся внутри силуэта и читается как пузырёк, а не как течь. */
const WALL = (y: number, side: -1 | 1) => {
  const t = (y - 34) / 162;               // 34 — верх, 196 — дно
  return { x: side < 0 ? 34 + t * 32 : 166 - t * 32, y };
};
const HOLES = [WALL(96, -1), WALL(120, 1), WALL(148, -1), WALL(166, 1), { x: 88, y: 194 }, { x: 116, y: 194 }];

export function LeakyBucket() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className="sc-bucket">
      <div className="sc-bucket-art" aria-hidden>
        <svg viewBox="0 0 200 210" role="presentation">
          <defs>
            <linearGradient id="sc-water" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#33c7ea" stopOpacity="0.55" />
              <stop offset="1" stopColor="#1c86d6" stopOpacity="0.28" />
            </linearGradient>
          </defs>

          {/* корпус ведра */}
          <path d="M34 34 L166 34 L146 186 Q144 196 134 196 L66 196 Q56 196 54 186 Z" className="sc-bucket-body" />
          <ellipse cx="100" cy="34" rx="66" ry="11" className="sc-bucket-rim" />
          <path d="M40 70 L160 70 L143 178 Q142 184 136 184 L64 184 Q58 184 57 178 Z" fill="url(#sc-water)" />

          {HOLES.map((h, i) => {
            const cx = h.x;
            const cy = h.y;
            const on = active === i;
            return (
              <g key={i} className={`sc-hole${on ? " is-on" : ""}`}>
                <circle cx={cx} cy={cy} r={on ? 6 : 4.5} />
                {/* струя рисуется только у активной дыры: шесть одновременных
                    струй превратили бы схему в шум */}
                {on ? <rect x={cx - 1.7} y={cy} width="3.4" height="46" rx="1.7" className="sc-jet" /> : null}
              </g>
            );
          })}
        </svg>
        <span className="sc-puddle" />
      </div>

      <ul className="sc-leaks">
        {cost.items.map((item, i) => (
          <li
            key={item.title}
            className={active === i ? "is-on" : ""}
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
          >
            <button type="button" onFocus={() => setActive(i)} onClick={() => setActive(i)}>
              <span className="sc-leak-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="sc-leak-body">
                <b>{item.title}</b>
                <span>{item.text}</span>
                {item.source ? <i>{item.source}</i> : null}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
