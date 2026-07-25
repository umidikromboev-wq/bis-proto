"use client";

import { useMemo, useState } from "react";
import { GlassIcon, type IconName } from "../icon";
import { ui } from "@/content/ui";
import { DEFAULT_LOCALE, type Locale } from "@/content/locale";

/**
 * Инструмент «до / после» на цифрах самого посетителя.
 *
 * Приём «Было — стало» из каталога смысловых приёмов, но применённый не к
 * абстрактной паре состояний, а к его собственной компании: он двигает свои
 * параметры и видит две картины одного бизнеса. Абзац «система окупается»
 * такого не делает — здесь предприниматель сам приходит к сумме.
 *
 * Формулы и константы перенесены из проверенного симулятора прототипа без
 * изменений: цифры уже согласованы, менять их в дизайн-версии нельзя.
 */
const PRESETS = {
  prod: { labelKey: "baProduction", revenue: 4_000_000, margin: 25, frozen: 10, wacc: 22, blindShare: 40, blindLoss: 3, people: 2, salary: 700, time: 60, lost: 3 },
  distrib: { labelKey: "baDistribution", revenue: 6_000_000, margin: 18, frozen: 12, wacc: 22, blindShare: 35, blindLoss: 2.5, people: 2, salary: 600, time: 55, lost: 4 },
  retail: { labelKey: "baRetail", revenue: 3_000_000, margin: 30, frozen: 8, wacc: 22, blindShare: 25, blindLoss: 2, people: 1, salary: 550, time: 50, lost: 3 },
} as const;

type PresetKey = keyof typeof PRESETS;

/** Единицы измерения у ползунков — короткие подписи, тоже переводятся. */
const UNIT = { perYear: { ru: "% в год", uz: "% yiliga" }, people: { ru: "чел.", uz: "kishi" }, perMonth: { ru: "$ / мес", uz: "$ / oyda" } };

/** Параметры расчёта — те же, что в проверенном симуляторе прототипа. */
const SLIDERS = [
  { k: "margin", labelKey: "baMargin", unit: "%", min: 5, max: 60, step: 1 },
  { k: "frozen", labelKey: "baFrozenShare", unit: "%", min: 1, max: 30, step: 1 },
  { k: "wacc", labelKey: "baMoneyCost", unit: UNIT.perYear, min: 8, max: 40, step: 1 },
  { k: "blindShare", labelKey: "baDiscountShare", unit: "%", min: 0, max: 80, step: 5 },
  { k: "blindLoss", labelKey: "baMarginLoss", unit: "%", min: 0.5, max: 10, step: 0.5 },
  { k: "people", labelKey: "baPeopleManual", unit: UNIT.people, min: 0, max: 10, step: 1 },
  { k: "salary", labelKey: "baSalary", unit: UNIT.perMonth, min: 200, max: 3000, step: 50 },
  { k: "time", labelKey: "baTimeManual", unit: "%", min: 10, max: 100, step: 5 },
  { k: "lost", labelKey: "baLostOrders", unit: "%", min: 0, max: 15, step: 0.5 },
] as const;

type SliderKey = (typeof SLIDERS)[number]["k"];
type LabelKey = keyof ReturnType<typeof ui>;
type Params = Record<SliderKey, number>;

function paramsOf(k: PresetKey): Params {
  const p = PRESETS[k];
  return { margin: p.margin, frozen: p.frozen, wacc: p.wacc, blindShare: p.blindShare,
           blindLoss: p.blindLoss, people: p.people, salary: p.salary, time: p.time, lost: p.lost };
}

/** Доля неликвида, высвобождаемая системой разово, и возврат по каждой строке за год. */
const UNFREEZE = 0.3;
const REC = { A: 0.3, B: 0.8, C: 0.7, D: 0.5 };

const LINE_ICONS: IconName[] = ["warehouse", "finance", "people", "growth"];

function money(usd: number) {
  return "$" + Math.round(usd).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function BeforeAfter({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const labelOf = (key: string) => txt[key as LabelKey] as string;
  const unitOf = (u: string | { ru: string; uz: string }) => (typeof u === "string" ? u : u[locale]);
  const [preset, setPreset] = useState<PresetKey | null>("prod");
  const [revenue, setRevenue] = useState<number>(PRESETS.prod.revenue);
  const [p, setP] = useState<Params>(paramsOf("prod"));
  const [after, setAfter] = useState(false);
  const [open, setOpen] = useState(false);

  function applyPreset(k: PresetKey) {
    setPreset(k);
    setRevenue(PRESETS[k].revenue);
    setP(paramsOf(k));
  }
  /** Ручная правка снимает пресет: цифры больше не «типовые», а свои. */
  function setParam(k: SliderKey, v: number) {
    setPreset(null);
    setP((prev) => ({ ...prev, [k]: v }));
  }

  const r = useMemo(() => {
    const excessStock = revenue * (p.frozen / 100);
    const A = excessStock * (p.wacc / 100);                       // деньги, замороженные в неликвиде
    const B = revenue * (p.blindShare / 100) * (p.blindLoss / 100); // скидка вслепую
    const C = p.people * p.salary * 12 * (p.time / 100);            // ручное сведение отчётов
    const D = revenue * (p.lost / 100) * (p.margin / 100);          // упущенные заказы
    const total = A + B + C + D;
    const recover = A * REC.A + B * REC.B + C * REC.C + D * REC.D;
    return { A, B, C, D, total, recover, unfreeze: excessStock * UNFREEZE };
  }, [revenue, p]);

  const lines = [
    { name: "Замороженный склад", now: r.A, rec: REC.A },
    { name: "Скидка вслепую", now: r.B, rec: REC.B },
    { name: "Ручное сведение отчётов", now: r.C, rec: REC.C },
    { name: "Упущенные заказы", now: r.D, rec: REC.D },
  ];

  return (
    <div className="ba">
      <div className="ba-controls">
        <div className="ba-field">
          <span className="ba-cap">{txt.businessType}</span>
          <div className="ba-presets" role="group" aria-label={txt.businessType}>
            {(Object.keys(PRESETS) as PresetKey[]).map((k) => (
              <button
                key={k}
                type="button"
                className={preset === k ? "is-on" : ""}
                aria-pressed={preset === k}
                onClick={() => applyPreset(k)}
              >
                {labelOf(PRESETS[k].labelKey)}
              </button>
            ))}
          </div>
        </div>

        <div className="ba-field">
          <label className="ba-cap" htmlFor="ba-rev">Годовая выручка · {money(revenue)}</label>
          <input
            id="ba-rev"
            type="range"
            min={500_000}
            max={20_000_000}
            step={100_000}
            value={revenue}
            onChange={(e) => setRevenue(Number(e.target.value))}
          />
        </div>
      </div>

      {/* Параметры свёрнуты: девять ползунков сразу отпугивают, а пресет уже
          даёт осмысленный ответ. Кому нужна точность — раскрывает и правит. */}
      <details className="ba-params" open={open} onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}>
        <summary>
          <span>{open ? "Скрыть параметры" : "Уточнить под свою компанию"}</span>
          <i aria-hidden />
        </summary>
        <div className="ba-params-grid">
          {SLIDERS.map((s) => (
            <label key={s.k}>
              <span className="ba-param-head">
                <span>{labelOf(s.labelKey)}</span>
                <b>{p[s.k]}<i>{unitOf(s.unit)}</i></b>
              </span>
              <input
                type="range"
                min={s.min}
                max={s.max}
                step={s.step}
                value={p[s.k]}
                onChange={(e) => setParam(s.k, Number(e.target.value))}
              />
            </label>
          ))}
        </div>
      </details>

      {/* Переключатель состояний — тот же приём, что и в схеме потока:
          один и тот же бизнес показан дважды. */}
      <div className="sc-switch ba-switch" role="group" aria-label={txt.businessState}>
        <button type="button" className={!after ? "is-on" : ""} aria-pressed={!after} onClick={() => setAfter(false)}>{txt.now}</button>
        <button type="button" className={after ? "is-on" : ""} aria-pressed={after} onClick={() => setAfter(true)}>{txt.withSystem}</button>
        <span className="sc-switch-thumb" data-side={after ? "right" : "left"} aria-hidden />
      </div>

      <div className={`ba-total${after ? " is-after" : ""}`}>
        <span className="ba-cap">{after ? "Возвращается в год" : "Утекает в год"}</span>
        <b>{money(after ? r.recover : r.total)}</b>
        <span className="ba-total-note">
          {after
            ? `Плюс ${money(r.unfreeze)} разово — деньги, высвобожденные из неликвида`
            : "Сумма не приходит счётом: она растворена в остатках, скидках и часах"}
        </span>
      </div>

      <ul className="ba-lines">
        {lines.map((l, i) => {
          const value = after ? l.now * l.rec : l.now;
          const share = Math.max(4, Math.round((value / (after ? r.recover : r.total)) * 100));
          return (
            <li key={l.name}>
              <GlassIcon name={LINE_ICONS[i]} />
              <div className="ba-line-body">
                <div className="ba-line-head">
                  <span>{l.name}</span>
                  <b>{money(value)}</b>
                </div>
                <div className="ba-line-track">
                  <span style={{ ["--pct" as string]: `${share}%` }} />
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="d-note ba-note">
        Расчёт по отраслевым средним, а не по вашим данным: он показывает порядок суммы, а не точную цифру.
        Точный разбор делает консультант на бесплатном аудите.
      </p>
    </div>
  );
}
