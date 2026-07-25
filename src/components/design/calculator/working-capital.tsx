"use client";

/**
 * Калькулятор оборотного капитала — веб-версия рабочего файла клиента.
 * Считает то же, что консультант BIS считает на встрече: сколько денег
 * заморожено в запасах и дебиторке, за сколько дней оборачивается рубль
 * и что даёт сокращение цикла.
 *
 * Формулы вынесены в model.ts, форматирование — в format.ts, поля — в
 * fields.tsx, вывод — в result-panel.tsx. Здесь только состояние и порядок
 * блоков.
 */

import { useCallback, useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useLeadPopup } from "../lead-popup";
import { calculate, type Basis, type CalcInput, type Industry } from "./model";
import { DEFAULT_PRESET, PRESETS, PRESET_LABELS, type PresetKey } from "./presets";
import { money, percent, RATE, type Currency } from "./format";
import { GroupTitle, MoneyField, SliderField } from "./fields";
import { Insights, ResultPanel } from "./result-panel";
import "../simulator.css";
import "./working-capital.css";
import { ui } from "@/content/ui";
import { calc } from "@/content/calc";
import { DEFAULT_LOCALE, type Locale } from "@/content/locale";

const MONEY_KEYS = [
  "revenue", "cogs", "purchases", "ebit", "netProfit",
  "stock", "receivables", "cash", "payables", "fixedAssets",
  "raw", "wip", "finished", "rawPurchases", "rawConsumed", "cogm",
] as const;

const PLAIN_KEYS = ["leadTime", "safetyStock", "termDays", "bankRate", "supplierTerm"] as const;

export function WorkingCapitalCalculator({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const txt = ui(locale);
  const cs = calc(locale);
  const { openLead } = useLeadPopup();
  const [currency, setCurrency] = useState<Currency>("usd");
  const [preset, setPreset] = useState<PresetKey | null>(DEFAULT_PRESET);
  const [input, setInput] = useState<CalcInput>(PRESETS[DEFAULT_PRESET]);

  // Ссылку с расчётом можно переслать — состояние восстанавливается из адреса.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (!q.get("revenue")) return;
    const isUzs = q.get("cur") === "uzs";
    if (isUzs) setCurrency("uzs");
    setPreset(null);
    setInput((prev) => {
      const next = { ...prev } as Record<string, unknown>;
      MONEY_KEYS.forEach((k) => {
        const raw = q.get(k);
        if (raw !== null) next[k] = isUzs ? +raw / RATE : +raw;
      });
      PLAIN_KEYS.forEach((k) => {
        const raw = q.get(k);
        if (raw !== null) next[k] = +raw;
      });
      const industry = q.get("industry");
      if (industry === "production" || industry === "trade") next.industry = industry;
      const basis = q.get("basis");
      if (basis === "simple" || basis === "exact") next.basis = basis;
      return next as unknown as CalcInput;
    });
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  const result = useMemo(() => calculate(input), [input]);
  const isProduction = input.industry === "production";

  const set = useCallback(<K extends keyof CalcInput>(key: K, value: CalcInput[K]) => {
    setPreset(null);
    setInput((prev) => ({ ...prev, [key]: value }));
  }, []);

  function applyPreset(key: PresetKey) {
    setPreset(key);
    setInput(PRESETS[key]);
  }

  function setIndustry(industry: Industry) {
    setPreset(null);
    setInput((prev) => ({ ...prev, industry, basis: industry === "production" ? "exact" : prev.basis }));
  }

  function share() {
    const p = new URLSearchParams();
    p.set("cur", currency);
    p.set("industry", input.industry);
    p.set("basis", input.basis);
    MONEY_KEYS.forEach((k) => p.set(k, String(Math.round(input[k] * (currency === "uzs" ? RATE : 1)))));
    PLAIN_KEYS.forEach((k) => p.set(k, String(input[k])));
    const url = `${window.location.origin}${window.location.pathname}?${p.toString()}`;
    const text = cs.copy.shareText;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <div className="sim sim-page wc">
      <nav className="dp-crumbs sim-crumbs" aria-label={txt.breadcrumbs}>
        <span><Link href="/">{txt.home}</Link><i aria-hidden>/</i></span>
        <span><b>{txt.workingCapital}</b></span>
      </nav>

      <section className="section wc-section">
        <div className="wrap">
          <p className="kicker">{txt.calcKicker}</p>
          <h1 className="h1 wc-h1">{txt.calcH1}</h1>
          <p className="lead wc-lead">
            {cs.copy.lead1} {cs.copy.lead2} {cs.copy.lead3}
          </p>

          <div className="sim-grid wc-grid">
            <div className="panel wc-inputs">
              <div className="wc-top">
                <div className="wc-top-col">
                  <span className="wc-eyebrow">{txt.calcPreset}</span>
                  <div className="wc-chips">
                    {PRESET_LABELS.map((p) => (
                      <button key={p.key} className={`pbtn ${preset === p.key ? "active" : ""}`} onClick={() => applyPreset(p.key)}>
                        {cs.presets[p.labelKey]}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="wc-top-col">
                  <span className="wc-eyebrow">{txt.calcCurrency}</span>
                  <div className="ctoggle">
                    <button className={currency === "usd" ? "active" : ""} onClick={() => setCurrency("usd")}>$</button>
                    <button className={currency === "uzs" ? "active" : ""} onClick={() => setCurrency("uzs")}>{txt.calcSum}</button>
                  </div>
                </div>
              </div>

              <div className="wc-top">
                <div className="wc-top-col">
                  <span className="wc-eyebrow">{txt.businessType}</span>
                  <div className="wc-chips">
                    <button className={`pbtn ${!isProduction ? "active" : ""}`} onClick={() => setIndustry("trade")}>{txt.calcTrade}</button>
                    <button className={`pbtn ${isProduction ? "active" : ""}`} onClick={() => setIndustry("production")}>{txt.calcProduction}</button>
                  </div>
                </div>
                {!isProduction ? (
                  <div className="wc-top-col">
                    <span className="wc-eyebrow">{txt.calcPrecision}</span>
                    <div className="wc-chips">
                      <button className={`pbtn ${input.basis === "simple" ? "active" : ""}`} onClick={() => set("basis", "simple" as Basis)}>{txt.calcSimple}</button>
                      <button className={`pbtn ${input.basis === "exact" ? "active" : ""}`} onClick={() => set("basis", "exact" as Basis)}>{txt.calcExact}</button>
                    </div>
                  </div>
                ) : null}
              </div>

              <p className="wc-note wc-mode">
                {isProduction
                  ? cs.copy.modeProduction
                  : input.basis === "exact"
                    ? cs.copy.modeExact
                    : cs.copy.modeSimple}
              </p>

              <GroupTitle>{txt.calcYearTurnover}</GroupTitle>
              <MoneyField label={cs.fields.revenue} hint={cs.fields.revenueHint} value={input.revenue} currency={currency} onChange={(v) => set("revenue", v)} />
              {(isProduction || input.basis === "exact") && (
                <MoneyField label={cs.fields.cogs} hint="COGS" value={input.cogs} currency={currency} onChange={(v) => set("cogs", v)} />
              )}
              {!isProduction && input.basis === "exact" && (
                <MoneyField label={cs.fields.purchases} hint={cs.fields.purchasesHint} value={input.purchases} currency={currency} onChange={(v) => set("purchases", v)} />
              )}
              {isProduction && (
                <>
                  <MoneyField label={cs.fields.rawPurchases} hint={cs.fields.rawPurchasesHint} value={input.rawPurchases} currency={currency} onChange={(v) => set("rawPurchases", v)} />
                  <MoneyField label={cs.fields.rawConsumed} hint={cs.fields.rawConsumedHint} value={input.rawConsumed} currency={currency} onChange={(v) => set("rawConsumed", v)} />
                  <MoneyField label={cs.fields.cogm} hint={cs.fields.cogmHint} value={input.cogm} currency={currency} onChange={(v) => set("cogm", v)} />
                </>
              )}
              <MoneyField label={cs.fields.ebit} hint={cs.fields.ebitHint} value={input.ebit} currency={currency} onChange={(v) => set("ebit", v)} />
              <MoneyField label={cs.fields.netProfit} hint={cs.fields.netProfitHint} value={input.netProfit} currency={currency} onChange={(v) => set("netProfit", v)} />

              <GroupTitle>{txt.calcInCirculation}</GroupTitle>
              {isProduction ? (
                <>
                  <MoneyField label={cs.fields.raw} value={input.raw} currency={currency} onChange={(v) => set("raw", v)} />
                  <MoneyField label={cs.fields.wip} value={input.wip} currency={currency} onChange={(v) => set("wip", v)} />
                  <MoneyField label={cs.fields.finished} value={input.finished} currency={currency} onChange={(v) => set("finished", v)} />
                </>
              ) : (
                <MoneyField label={cs.fields.stock} hint={cs.fields.stockHint} value={input.stock} currency={currency} onChange={(v) => set("stock", v)} />
              )}
              <MoneyField label={cs.fields.receivables} hint={cs.fields.receivablesHint} value={input.receivables} currency={currency} onChange={(v) => set("receivables", v)} />
              <MoneyField label={cs.fields.cash} value={input.cash} currency={currency} onChange={(v) => set("cash", v)} />
              <MoneyField label={cs.fields.payables} hint={cs.fields.payablesHint} value={input.payables} currency={currency} onChange={(v) => set("payables", v)} />
              <MoneyField label={cs.fields.fixedAssets} hint={cs.fields.fixedAssetsHint} value={input.fixedAssets} currency={currency} onChange={(v) => set("fixedAssets", v)} />

              <GroupTitle>{txt.calcNormsTerms}</GroupTitle>
              <div className="wc-sliders">
                <SliderField label={cs.fields.leadTime} hint={cs.fields.leadTimeHint} value={input.leadTime} display={`${input.leadTime} ${cs.fields.days}`} min={1} max={90} step={1} onChange={(v) => set("leadTime", v)} />
                <SliderField label={cs.fields.safetyStock} hint={cs.fields.safetyStockHint} value={input.safetyStock} display={`${input.safetyStock} ${cs.fields.days}`} min={0} max={60} step={1} onChange={(v) => set("safetyStock", v)} />
                <SliderField label={cs.fields.termDays} hint={cs.fields.termDaysHint} value={input.termDays} display={`${input.termDays} ${cs.fields.days}`} min={0} max={90} step={1} onChange={(v) => set("termDays", v)} />
                <SliderField label={cs.fields.supplierTerm} hint={cs.fields.supplierTermHint} value={input.supplierTerm} display={`${input.supplierTerm} ${cs.fields.days}`} min={0} max={120} step={1} onChange={(v) => set("supplierTerm", v)} />
                <SliderField label={cs.fields.bankRate} hint={cs.fields.bankRateHint} value={Math.round(input.bankRate * 100)} display={percent(input.bankRate)} min={5} max={45} step={1} onChange={(v) => set("bankRate", v / 100)} />
              </div>

              <div className="manual wc-manual">
                <p className="wc-h3">{txt.calcStockLever}</p>
                <p className="wc-note">
                  {isProduction ? cs.copy.healthyRaw : cs.copy.healthyStock} {cs.copy.healthyIs}{" "}
                  {result.healthyStockDays} {cs.fields.days} {cs.copy.healthyAnd} {money(result.healthyStock, currency)}. {cs.copy.healthyTail}
                </p>
              </div>
            </div>

            <ResultPanel result={result} input={input} currency={currency} onRequest={() => openLead("calc")} onShare={share} locale={locale} />
          </div>

          <Insights result={result} input={input} currency={currency} locale={locale} />

          <div className="panel-2 wc-disclaimer">
            <b>{txt.calcBlindSpots}</b> {cs.copy.blindTail}{" "}
            <b>{txt.calcAboveCalc}</b>{cs.copy.blindEnd}
          </div>
          <p className="note wc-source">
            {cs.copy.method}
          </p>
        </div>
      </section>

      <div className="msticky">
        <div>
          <div className="dim sim-mono wc-sticky-label">{txt.calcFrozen}</div>
          <div className="wc-sticky-value">{money(result.frozen, currency)}</div>
        </div>
        <button className="btn btn-solid wc-sticky-btn" onClick={() => openLead("calc")}>{txt.calcBreakdown}</button>
      </div>
    </div>
  );
}
