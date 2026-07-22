"use client";

import { useState } from "react";
import { cost } from "@/content/blocks";
import { PixelArrow } from "../marks";

/**
 * «Счёт, который вам не выставят».
 *
 * Заголовок секции говорит буквально: каждый месяц без системы стоит денег,
 * просто счёт за это не приходит. Значит блок и должен быть этим счётом —
 * приём «Артефакты» из каталога: вместо рассказа о документе показывают сам
 * документ.
 *
 * Суммы в строках намеренно стоят вопросительными знаками. Подставить туда
 * придуманные цифры было бы враньём: они зависят от оборота и отрасли. Зато
 * пустая колонка «Сумма» делает работу лучше любого числа — она заставляет
 * посчитать, и следующий шаг стоит прямо под ней.
 *
 * Строка раскрывается по клику: шесть развёрнутых пояснений превращают счёт
 * в стену текста и ломают метафору документа.
 */
export function LossInvoice() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="inv">
      <div className="inv-paper">
        <div className="inv-head">
          <div>
            <span className="inv-cap">Счёт, который вам не выставят</span>
            <p className="inv-title">Потери без единой системы</p>
          </div>
          <span className="inv-period">за год</span>
        </div>

        <ul className="inv-rows">
          {cost.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.title} className={isOpen ? "is-open" : ""}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : i)}>
                  <span className="inv-n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="inv-name">{item.title}</span>
                  <span className="inv-sum" aria-label="сумма не рассчитана">?</span>
                </button>
                <div className="inv-body" hidden={!isOpen}>
                  <p>{item.text}</p>
                  {item.source ? <span className="inv-src">{item.source}</span> : null}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="inv-total">
          <span className="inv-total-label">Итого за год</span>
          <span className="inv-total-sum">?</span>
        </div>

        <a className="inv-cta" href="/design/simulator">
          <span>{cost.cta}</span>
          <span className="inv-cta-icon"><PixelArrow /></span>
        </a>

        <p className="inv-note">
          Сумма зависит от оборота, отрасли и состояния учёта — поэтому в строках стоит вопрос,
          а не придуманная цифра. Свою вы получите за три минуты.
        </p>
      </div>
    </div>
  );
}
