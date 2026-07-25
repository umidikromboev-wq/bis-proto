"use client";

/**
 * Правая колонка калькулятора — итог, и широкий блок под ним: диагностика,
 * сценарии ускорения цикла, стадии запасов в производстве.
 */

import { money, days, percent, type Currency } from "./format";
import type { CalcInput, CalcResult } from "./model";
import { ui } from "@/content/ui";
import { DEFAULT_LOCALE, type Locale } from "@/content/locale";

export function ResultPanel({
  result,
  input,
  currency,
  onRequest,
  onShare,
  locale = DEFAULT_LOCALE,
}: {
  result: CalcResult;
  input: CalcInput;
  currency: Currency;
  onRequest: () => void;
  onShare: () => void;
  locale?: Locale;
}) {
  const txt = ui(locale);
  const stockPart = Math.max(result.excessStock, 0);
  const receivablePart = Math.max(result.excessReceivables, 0);
  const max = Math.max(stockPart, receivablePart, 1);
  const rows = [
    { name: input.industry === "production" ? "Избыток сырья на складе" : "Избыток запасов на складе", value: stockPart },
    { name: "Не собранная вовремя дебиторка", value: receivablePart },
  ];

  return (
    <div className="sim-result">
      <p className="wc-eyebrow">{txt.calcFrozen}</p>
      <div className="sim-big">{money(result.frozen, currency)}</div>
      <p className="dim wc-under">
        Это ваши деньги, которые уже вложены и не работают. Чтобы их вернуть, инвестор не нужен.
      </p>

      <div className="wc-rows">
        {rows.map((row) => (
          <div key={row.name} className="rrow">
            <div className="rr-top">
              <span className="muted">{row.name}</span>
              <b>{money(row.value, currency)}</b>
            </div>
            <div className="rbar">
              <i style={{ width: `${Math.round((row.value / max) * 100)}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="wc-metrics">
        <Metric label="Запасы" value={days(result.dio)} />
        <Metric label="Дебиторка" value={days(result.dso)} />
        <Metric label="Кредиторка" value={days(result.dpo)} />
        <Metric label="Денежный цикл" value={days(result.ccc)} accent />
      </div>

      <div className="wc-metrics">
        <Metric label="Оборотный капитал" value={money(result.workingCapital, currency)} />
        <Metric label="Отдача капитала" value={percent(result.operatingRoi)} />
      </div>

      <div className="green wc-green">
        <p className="wc-eyebrow">{txt.calcReturnGives}</p>
        <GreenRow label="Дополнительная прибыль в год" value={`${money(result.extraProfit, currency)}/год`} />
        <GreenRow label="Отдача капитала станет" value={percent(result.newRoi)} />
        <GreenRow label="Бесплатные деньги поставщика" value={`${money(result.cheapMoney, currency)}/год`} />
        <p className="dim wc-small">
          Дополнительная прибыль — замороженная сумма, вложенная в оборот с вашей же текущей отдачей.
        </p>
      </div>

      <button className="btn btn-solid wc-cta" onClick={onRequest}>
        Разобрать расчёт с консультантом
      </button>
      <button className="btn wc-cta" onClick={onShare}>
        Отправить расчёт себе в Telegram
      </button>
      <p className="dim wc-foot">{txt.calcNoCall}</p>
    </div>
  );
}

function Metric({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`wc-metric${accent ? " is-accent" : ""}`}>
      <span className="dim">{label}</span>
      <b className="sim-mono">{value}</b>
    </div>
  );
}

function GreenRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="wc-green-row">
      <span className="muted">{label}</span>
      <span className="g-val">{value}</span>
    </div>
  );
}

export function Insights({
  result,
  input,
  currency,
  locale = DEFAULT_LOCALE,
}: {
  result: CalcResult;
  input: CalcInput;
  currency: Currency;
  locale?: Locale;
}) {
  const txt = ui(locale);
  return (
    <div className="wc-insights">
      <section className="panel wc-panel">
        <h2 className="wc-h3">{txt.calcDiagnosis}</h2>
        <div className="wc-signals">
          {result.signals.map((s) => (
            <div key={s.label} className={`wc-signal is-${s.verdict}`}>
              <span className="dim">{s.label}</span>
              <b>{s.state}</b>
              <p>{s.hint}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel wc-panel">
        <h2 className="wc-h3">{txt.calcIfShorter}</h2>
        <p className="wc-note">
          Каждый день денежного цикла стоит вам одной дневной выручки — {money(result.dailyRevenue, currency)}.
          Единая система сокращает цикл за счёт точных остатков, нормативов запаса и контроля сроков оплаты.
        </p>
        <table className="wc-table">
          <thead>
            <tr>
              <th>{txt.calcCycleShorter}</th>
              <th>{txt.calcCashFreed}</th>
              <th>{txt.calcProfitOnTop}</th>
            </tr>
          </thead>
          <tbody>
            {result.scenarios.map((s) => (
              <tr key={s.days}>
                <td className="sim-mono">{s.days} дн.</td>
                <td className="sim-mono">{money(s.released, currency)}</td>
                <td className="sim-mono wc-good">{money(s.profit, currency)}/год</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {input.industry === "production" ? (
        <section className="panel wc-panel">
          <h2 className="wc-h3">{txt.calcWhereProduction}</h2>
          <p className="wc-note">
            Запасы разложены на три стадии — каждая делится на свою базу: сырьё на потребление, незавершёнка на
            выпуск, готовая продукция на себестоимость продаж.
          </p>
          <div className="wc-stages">
            <Stage label="Сырьё" value={result.dioRaw} share={result.stageShare.raw} />
            <Stage label="Незавершённое производство" value={result.dioWip} share={result.stageShare.wip} />
            <Stage label="Готовая продукция" value={result.dioFinished} share={result.stageShare.finished} />
          </div>
          <p className="wc-note">
            Дольше всего деньги стоят на стадии «{result.longestStage}». Операционный цикл от сырья до денег —{" "}
            {days(result.operatingCycle)}.
          </p>
        </section>
      ) : null}
    </div>
  );
}

function Stage({ label, value, share }: { label: string; value: number; share: number }) {
  return (
    <div className="wc-stage">
      <div className="rr-top">
        <span className="muted">{label}</span>
        <b className="sim-mono">{days(value)}</b>
      </div>
      <div className="rbar">
        <i style={{ width: `${Math.round(share * 100)}%` }} />
      </div>
      <span className="dim wc-small">{percent(share)} всего запаса</span>
    </div>
  );
}
