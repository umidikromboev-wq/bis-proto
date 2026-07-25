"use client";

/**
 * Правая колонка калькулятора — итог, и широкий блок под ним: диагностика,
 * сценарии ускорения цикла, стадии запасов в производстве.
 */

import { money, days, percent, type Currency } from "./format";
import type { CalcInput, CalcResult } from "./model";
import { ui } from "@/content/ui";
import { calc } from "@/content/calc";
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
  const cs = calc(locale);
  const stageName = (k: "raw" | "wip" | "finished") =>
    k === "raw" ? cs.panel.raw : k === "wip" ? cs.panel.wip : cs.fields.finished;
  const stockPart = Math.max(result.excessStock, 0);
  const receivablePart = Math.max(result.excessReceivables, 0);
  const max = Math.max(stockPart, receivablePart, 1);
  const rows = [
    { name: input.industry === "production" ? cs.panel.excessRaw : cs.panel.excessStock, value: stockPart },
    { name: cs.panel.lateReceivables, value: receivablePart },
  ];

  return (
    <div className="sim-result">
      <p className="wc-eyebrow">{txt.calcFrozen}</p>
      <div className="sim-big">{money(result.frozen, currency)}</div>
      <p className="dim wc-under">
        {cs.panel.yourMoney}
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
        <Metric label={cs.signals.stock} value={days(result.dio, cs.fields.days)} />
        <Metric label={cs.signals.receivables} value={days(result.dso, cs.fields.days)} />
        <Metric label={cs.fields.payables} value={days(result.dpo, cs.fields.days)} />
        <Metric label={cs.signals.ccc} value={days(result.ccc, cs.fields.days)} accent />
      </div>

      <div className="wc-metrics">
        <Metric label={cs.panel.workingCapital} value={money(result.workingCapital, currency)} />
        <Metric label={cs.signals.roi} value={percent(result.operatingRoi)} />
      </div>

      <div className="green wc-green">
        <p className="wc-eyebrow">{txt.calcReturnGives}</p>
        <GreenRow label={cs.panel.extraProfit} value={`${money(result.extraProfit, currency)}/${cs.panel.perYear}`} />
        <GreenRow label={cs.panel.roiBecomes} value={percent(result.newRoi)} />
        <GreenRow label={cs.panel.freeSupplierMoney} value={`${money(result.cheapMoney, currency)}/${cs.panel.perYear}`} />
        <p className="dim wc-small">
          {cs.panel.extraProfitNote}
        </p>
      </div>

      <button className="btn btn-solid wc-cta" onClick={onRequest}>
        {cs.panel.discussWithConsultant}
      </button>
      <button className="btn wc-cta" onClick={onShare}>
        {cs.panel.sendToTelegram}
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
  const cs = calc(locale);
  const stageName = (k: "raw" | "wip" | "finished") =>
    k === "raw" ? cs.panel.raw : k === "wip" ? cs.panel.wip : cs.fields.finished;
  return (
    <div className="wc-insights">
      <section className="panel wc-panel">
        <h2 className="wc-h3">{txt.calcDiagnosis}</h2>
        <div className="wc-signals">
          {result.signals.map((s) => (
            <div key={s.signal} className={`wc-signal is-${s.verdict}`}>
              <span className="dim">{cs.signals[s.signal]}</span>
              <b>{cs.states[s.state]}</b>
              <p>{cs.hints[s.hint]}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="panel wc-panel">
        <h2 className="wc-h3">{txt.calcIfShorter}</h2>
        <p className="wc-note">
          {cs.panel.dailyCost1} {money(result.dailyRevenue, currency)}. {cs.panel.dailyCost2}
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
                <td className="sim-mono">{s.days} {cs.fields.days}</td>
                <td className="sim-mono">{money(s.released, currency)}</td>
                <td className="sim-mono wc-good">{money(s.profit, currency)}/${cs.panel.perYear}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {input.industry === "production" ? (
        <section className="panel wc-panel">
          <h2 className="wc-h3">{txt.calcWhereProduction}</h2>
          <p className="wc-note">
            {cs.panel.stagesNote}
          </p>
          <div className="wc-stages">
            <Stage label={cs.panel.raw} value={result.dioRaw} share={result.stageShare.raw} unit={cs.panel.ofAllStock} />
            <Stage label={cs.panel.wip} value={result.dioWip} share={result.stageShare.wip} unit={cs.panel.ofAllStock} />
            <Stage label={cs.fields.finished} value={result.dioFinished} share={result.stageShare.finished} unit={cs.panel.ofAllStock} />
          </div>
          <p className="wc-note">
            {cs.panel.longestStage1} «{stageName(result.longestStage)}». {cs.panel.longestStage2}{" "}
            {days(result.operatingCycle, cs.fields.days)}.
          </p>
        </section>
      ) : null}
    </div>
  );
}

function Stage({ label, value, share, unit }: { label: string; value: number; share: number; unit: string }) {
  return (
    <div className="wc-stage">
      <div className="rr-top">
        <span className="muted">{label}</span>
        <b className="sim-mono">{days(value)}</b>
      </div>
      <div className="rbar">
        <i style={{ width: `${Math.round(share * 100)}%` }} />
      </div>
      <span className="dim wc-small">{percent(share)} {unit}</span>
    </div>
  );
}
