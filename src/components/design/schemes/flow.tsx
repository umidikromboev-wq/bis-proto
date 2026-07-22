"use client";

import { useState } from "react";
import { unifiedBase } from "@/content/playbook";
import { GlassIcon, type IconName } from "../icon";
import { em } from "../emphasis";

/**
 * Схема сквозного потока — приём «Модель потока» из каталога смысловых приёмов
 * (демонстрация потерь движущегося вещества в узловых точках), собранный с
 * приёмом «Было — стало».
 *
 * Главный страх при покупке ERP — «модули не свяжутся». Словами это не
 * снимается: фраза «единая система» ничем не отличается от такой же фразы у
 * конкурента. Поэтому здесь два состояния одной и той же цепочки: в режиме
 * «Раньше» между узлами разрывы и в каждом разрыве написано, где именно
 * теряются данные; в режиме «В SAP» цепочка сплошная. Переключатель делает
 * работу, которую иначе пришлось бы делать абзацем текста.
 */
const NODES: { icon: IconName; short: string }[] = [
  { icon: "partnership", short: "Заказ" },
  { icon: "warehouse", short: "Склад" },
  { icon: "production", short: "Цех" },
  { icon: "finance", short: "Деньги" },
  { icon: "procurement", short: "Закупка" },
  { icon: "analytics", short: "Аналитика" },
];

export function FlowScheme() {
  const [live, setLive] = useState(true);
  const links = unifiedBase.links;

  return (
    <div className="sc-flow">
      <div className="sc-switch" role="group" aria-label="Состояние процесса">
        <button
          type="button"
          className={!live ? "is-on" : ""}
          onClick={() => setLive(false)}
          aria-pressed={!live}
        >
          Раньше
        </button>
        <button
          type="button"
          className={live ? "is-on" : ""}
          onClick={() => setLive(true)}
          aria-pressed={live}
        >
          В SAP
        </button>
        <span className="sc-switch-thumb" data-side={live ? "right" : "left"} aria-hidden />
      </div>

      <ol className={`sc-chain${live ? " is-live" : " is-broken"}`}>
        {links.map((l, i) => (
          <li key={l.action}>
            <div className="sc-node">
              <GlassIcon name={NODES[i].icon} />
              <span className="sc-node-short">{NODES[i].short}</span>
            </div>

            <div className="sc-body">
              <h3 className="d-h3">{l.action}</h3>
              {/* Обе реплики всегда в разметке: они меняются местами, а не
                  подгружаются, поэтому переключение мгновенное и без сдвига. */}
              <p className="sc-live">{em(l.effect)}</p>
              <p className="sc-old">{l.old.replace(/^Раньше:\s*/, "")}</p>
            </div>

            {i < links.length - 1 ? <span className="sc-link" aria-hidden /> : null}
          </li>
        ))}
      </ol>

      <p className="sc-caption">
        {live
          ? "Данные вводятся один раз и дальше идут по цепочке сами."
          : "На каждом стыке данные вводятся заново — и расходятся."}
      </p>
    </div>
  );
}
