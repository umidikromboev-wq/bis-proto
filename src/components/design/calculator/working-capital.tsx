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

const MONEY_KEYS = [
  "revenue", "cogs", "purchases", "ebit", "netProfit",
  "stock", "receivables", "cash", "payables", "fixedAssets",
  "raw", "wip", "finished", "rawPurchases", "rawConsumed", "cogm",
] as const;

const PLAIN_KEYS = ["leadTime", "safetyStock", "termDays", "bankRate", "supplierTerm"] as const;

export function WorkingCapitalCalculator() {
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
    const text = "Расчёт оборотного капитала — BIS";
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, "_blank");
  }

  return (
    <div className="sim sim-page wc">
      <nav className="dp-crumbs sim-crumbs" aria-label="Хлебные крошки">
        <span><Link href="/">Главная</Link><i aria-hidden>/</i></span>
        <span><b>Калькулятор оборотного капитала</b></span>
      </nav>

      <section className="section wc-section">
        <div className="wrap">
          <p className="kicker">Калькулятор · оборотный капитал</p>
          <h1 className="h1 wc-h1">Сколько ваших денег стоит в обороте без движения</h1>
          <p className="lead wc-lead">
            Тот самый расчёт, который консультант BIS делает на первой встрече. Возьмите готовый пример или
            подставьте свои цифры: сколько дней живёт товар, когда возвращаются деньги от клиентов и сколько из
            оборота можно вернуть без единого сума инвестиций.
          </p>

          <div className="sim-grid wc-grid">
            <div className="panel wc-inputs">
              <div className="wc-top">
                <div className="wc-top-col">
                  <span className="wc-eyebrow">Пример бизнеса</span>
                  <div className="wc-chips">
                    {PRESET_LABELS.map((p) => (
                      <button key={p.key} className={`pbtn ${preset === p.key ? "active" : ""}`} onClick={() => applyPreset(p.key)}>
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="wc-top-col">
                  <span className="wc-eyebrow">Валюта</span>
                  <div className="ctoggle">
                    <button className={currency === "usd" ? "active" : ""} onClick={() => setCurrency("usd")}>$</button>
                    <button className={currency === "uzs" ? "active" : ""} onClick={() => setCurrency("uzs")}>сум</button>
                  </div>
                </div>
              </div>

              <div className="wc-top">
                <div className="wc-top-col">
                  <span className="wc-eyebrow">Тип бизнеса</span>
                  <div className="wc-chips">
                    <button className={`pbtn ${!isProduction ? "active" : ""}`} onClick={() => setIndustry("trade")}>Торговля</button>
                    <button className={`pbtn ${isProduction ? "active" : ""}`} onClick={() => setIndustry("production")}>Производство</button>
                  </div>
                </div>
                {!isProduction ? (
                  <div className="wc-top-col">
                    <span className="wc-eyebrow">Точность</span>
                    <div className="wc-chips">
                      <button className={`pbtn ${input.basis === "simple" ? "active" : ""}`} onClick={() => set("basis", "simple" as Basis)}>Просто</button>
                      <button className={`pbtn ${input.basis === "exact" ? "active" : ""}`} onClick={() => set("basis", "exact" as Basis)}>Точно</button>
                    </div>
                  </div>
                ) : null}
              </div>

              <p className="wc-note wc-mode">
                {isProduction
                  ? "В производстве запасы считаются по трём стадиям: сырьё делится на потребление, незавершёнка на выпуск, готовая продукция на себестоимость продаж."
                  : input.basis === "exact"
                    ? "Точный режим: склад считается от себестоимости, кредиторка — от закупок. Так делает финансист."
                    : "Простой режим: всё считается от выручки. Нужны только четыре суммы, точность ниже."}
              </p>

              <GroupTitle>Обороты за год</GroupTitle>
              <MoneyField label="Выручка" hint="продажи за 12 месяцев" value={input.revenue} currency={currency} onChange={(v) => set("revenue", v)} />
              {(isProduction || input.basis === "exact") && (
                <MoneyField label="Себестоимость проданного" hint="COGS" value={input.cogs} currency={currency} onChange={(v) => set("cogs", v)} />
              )}
              {!isProduction && input.basis === "exact" && (
                <MoneyField label="Закупки у поставщиков" hint="за 12 месяцев" value={input.purchases} currency={currency} onChange={(v) => set("purchases", v)} />
              )}
              {isProduction && (
                <>
                  <MoneyField label="Закупка сырья" hint="у поставщиков за год" value={input.rawPurchases} currency={currency} onChange={(v) => set("rawPurchases", v)} />
                  <MoneyField label="Израсходовано сырья" hint="ушло в производство" value={input.rawConsumed} currency={currency} onChange={(v) => set("rawConsumed", v)} />
                  <MoneyField label="Выпущено продукции" hint="по себестоимости, COGM" value={input.cogm} currency={currency} onChange={(v) => set("cogm", v)} />
                </>
              )}
              <MoneyField label="Операционная прибыль" hint="EBITDA за год" value={input.ebit} currency={currency} onChange={(v) => set("ebit", v)} />
              <MoneyField label="Чистая прибыль" hint="после налогов и процентов" value={input.netProfit} currency={currency} onChange={(v) => set("netProfit", v)} />

              <GroupTitle>Что сейчас в обороте</GroupTitle>
              {isProduction ? (
                <>
                  <MoneyField label="Сырьё на складе" value={input.raw} currency={currency} onChange={(v) => set("raw", v)} />
                  <MoneyField label="Незавершённое производство" value={input.wip} currency={currency} onChange={(v) => set("wip", v)} />
                  <MoneyField label="Готовая продукция" value={input.finished} currency={currency} onChange={(v) => set("finished", v)} />
                </>
              ) : (
                <MoneyField label="Товар на складе" hint="остаток по себестоимости" value={input.stock} currency={currency} onChange={(v) => set("stock", v)} />
              )}
              <MoneyField label="Дебиторка" hint="долг клиентов перед вами" value={input.receivables} currency={currency} onChange={(v) => set("receivables", v)} />
              <MoneyField label="Деньги в кассе и на счетах" value={input.cash} currency={currency} onChange={(v) => set("cash", v)} />
              <MoneyField label="Кредиторка" hint="ваш долг поставщикам" value={input.payables} currency={currency} onChange={(v) => set("payables", v)} />
              <MoneyField label="Основные средства" hint="оборудование, транспорт, здания" value={input.fixedAssets} currency={currency} onChange={(v) => set("fixedAssets", v)} />

              <GroupTitle>Нормативы и сроки</GroupTitle>
              <div className="wc-sliders">
                <SliderField label="Срок поставки" hint="от заказа до склада" value={input.leadTime} display={`${input.leadTime} дн.`} min={1} max={90} step={1} onChange={(v) => set("leadTime", v)} />
                <SliderField label="Страховой запас" hint="на случай сбоя поставки" value={input.safetyStock} display={`${input.safetyStock} дн.`} min={0} max={60} step={1} onChange={(v) => set("safetyStock", v)} />
                <SliderField label="Отсрочка клиентам" hint="согласованный срок оплаты" value={input.termDays} display={`${input.termDays} дн.`} min={0} max={90} step={1} onChange={(v) => set("termDays", v)} />
                <SliderField label="Отсрочка от поставщиков" hint="сколько дней даёт поставщик" value={input.supplierTerm} display={`${input.supplierTerm} дн.`} min={0} max={120} step={1} onChange={(v) => set("supplierTerm", v)} />
                <SliderField label="Ставка банка" hint="во сколько обходятся деньги" value={Math.round(input.bankRate * 100)} display={percent(input.bankRate)} min={5} max={45} step={1} onChange={(v) => set("bankRate", v / 100)} />
              </div>

              <div className="manual wc-manual">
                <p className="wc-h3">Норматив запаса — главный рычаг</p>
                <p className="wc-note">
                  {isProduction ? "Здоровый запас сырья" : "Здоровый склад"} — это срок поставки плюс страховой
                  запас: {result.healthyStockDays} дн. и {money(result.healthyStock, currency)}. Всё, что лежит
                  сверх этого, — деньги, которые вы уже потратили, но ещё не заработали. Система считает такой
                  норматив по каждой позиции, а не по складу целиком.
                </p>
              </div>
            </div>

            <ResultPanel result={result} input={input} currency={currency} onRequest={() => openLead("calc")} onShare={share} />
          </div>

          <Insights result={result} input={input} currency={currency} />

          <div className="panel-2 wc-disclaimer">
            <b>Чего расчёт не видит:</b> упущенных сделок из-за неназванного срока, скидок вслепую без точной
            себестоимости и часов, которые люди тратят на ручную сверку. Поэтому реальная цена текущей схемы{" "}
            <b>выше расчётной</b>, а не ниже.
          </div>
          <p className="note wc-source">
            Методика и формулы — рабочий расчёт консультантов BIS: денежный цикл (DIO + DSO − DPO), нормативы запаса
            и отдача оборотного капитала. Точный расчёт консультант делает по вашей номенклатуре и клиентам.
          </p>
        </div>
      </section>

      <div className="msticky">
        <div>
          <div className="dim sim-mono wc-sticky-label">Заморожено в обороте</div>
          <div className="wc-sticky-value">{money(result.frozen, currency)}</div>
        </div>
        <button className="btn btn-solid wc-sticky-btn" onClick={() => openLead("calc")}>Разобрать расчёт</button>
      </div>
    </div>
  );
}
