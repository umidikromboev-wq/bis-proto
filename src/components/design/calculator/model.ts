import type { CalcStrings } from "@/content/calc";

/** Стадия запасов в производстве. Названия живут в словаре, здесь только ключ. */
export type StageKey = "raw" | "wip" | "finished";
/**
 * Модель оборотного капитала — формулы взяты один в один из рабочего файла
 * клиента «Aylanma kapital kalkulyatori» (листы Kalkulyator, SKU tahlil,
 * Debitorlar, Kreditorlar, Jamlash, Ishlab chiqarish, Formulalar).
 *
 * Соответствие листам:
 *  · режим «Простой / Точный» = Rejim Sodda / Aniq (Kalkulyator!B5);
 *  · торговля = Kalkulyator + Jamlash;
 *  · производство = лист Ishlab chiqarish (три стадии запасов).
 *
 * Единственное расширение против файла: в производстве норматив
 * «lead time + safety stock» применяется к сырью — в таблице норматив описан
 * только для торгового склада. В интерфейсе это подписано явно.
 */

export type Industry = "trade" | "production";
export type Basis = "simple" | "exact";

export interface CalcInput {
  readonly industry: Industry;
  /** Простой — всё считается от выручки, точный — склад от COGS, кредиторка от закупок */
  readonly basis: Basis;

  readonly revenue: number;
  readonly cogs: number;
  readonly purchases: number;
  readonly ebit: number;
  readonly netProfit: number;

  readonly stock: number;
  readonly receivables: number;
  readonly cash: number;
  readonly payables: number;
  readonly fixedAssets: number;

  /** Производство: три стадии запасов и их базы */
  readonly raw: number;
  readonly wip: number;
  readonly finished: number;
  readonly rawPurchases: number;
  readonly rawConsumed: number;
  readonly cogm: number;

  readonly leadTime: number;
  readonly safetyStock: number;
  readonly termDays: number;
  readonly bankRate: number;
  readonly supplierTerm: number;
}

export type Verdict = "good" | "watch" | "risk";

/**
 * Сигнал диагностики. Несёт ключи, а не готовые фразы: формулы согласованы с
 * рабочим файлом клиента и не должны знать про язык интерфейса.
 */
export interface Signal {
  readonly signal: keyof CalcStrings["signals"];
  readonly state: keyof CalcStrings["states"];
  readonly hint: keyof CalcStrings["hints"];
  readonly verdict: Verdict;
}

export interface CccScenario {
  readonly days: number;
  readonly released: number;
  readonly profit: number;
}

export interface CalcResult {
  readonly dailyRevenue: number;
  readonly dailyCogs: number;
  readonly dailyPurchase: number;

  readonly dio: number;
  readonly dioRaw: number;
  readonly dioWip: number;
  readonly dioFinished: number;
  readonly dso: number;
  readonly dpo: number;
  readonly ccc: number;
  readonly operatingCycle: number;

  readonly inventory: number;
  readonly workingCapital: number;
  readonly totalCapital: number;
  readonly operatingRoi: number;
  readonly totalRoi: number;
  readonly netMargin: number;

  readonly healthyStockDays: number;
  readonly healthyStock: number;
  readonly excessStock: number;
  readonly healthyReceivables: number;
  readonly excessReceivables: number;

  readonly frozen: number;
  readonly extraProfit: number;
  readonly newWorkingCapital: number;
  readonly newRoi: number;
  readonly cheapMoney: number;

  readonly longestStage: StageKey;
  readonly stageShare: { readonly raw: number; readonly wip: number; readonly finished: number };
  readonly scenarios: readonly CccScenario[];
  readonly signals: readonly Signal[];
}

const DAYS = 365;
/** На сколько дней сокращается цикл в сценариях «что будет, если» */
const SCENARIO_DAYS = [5, 10, 15, 20] as const;

function div(a: number, b: number): number {
  return b === 0 ? 0 : a / b;
}

function cccSignal(ccc: number): Signal {
  if (ccc <= 15) return { signal: "ccc", state: "strong", hint: "cccFast", verdict: "good" };
  if (ccc <= 45) return { signal: "ccc", state: "normal", hint: "cccControl", verdict: "watch" };
  return { signal: "ccc", state: "risk", hint: "cccStretched", verdict: "risk" };
}

function stockSignal(excess: number): Signal {
  if (excess > 0) return { signal: "stock", state: "excess", hint: "stockSleeping", verdict: "risk" };
  if (excess < 0) return { signal: "stock", state: "deficit", hint: "stockShortage", verdict: "watch" };
  return { signal: "stock", state: "ok", hint: "stockOk", verdict: "good" };
}

function receivablesSignal(excess: number): Signal {
  if (excess > 0) return { signal: "receivables", state: "excess", hint: "recCredit", verdict: "risk" };
  if (excess < 0) return { signal: "receivables", state: "betterThanNorm", hint: "recFast", verdict: "good" };
  return { signal: "receivables", state: "ok", hint: "recOk", verdict: "good" };
}

function roiSignal(roi: number): Signal {
  if (roi >= 0.5) return { signal: "roi", state: "high", hint: "roiGood", verdict: "good" };
  if (roi >= 0.2) return { signal: "roi", state: "medium", hint: "roiGrow", verdict: "watch" };
  return { signal: "roi", state: "low", hint: "roiTied", verdict: "risk" };
}

function supplierSignal(dpo: number, term: number): Signal {
  if (term <= 0) return { signal: "supplier", state: "noTerm", hint: "supNoTerm", verdict: "watch" };
  if (dpo >= term) return { signal: "supplier", state: "termWorks", hint: "supWorks", verdict: "good" };
  return { signal: "supplier", state: "payEarly", hint: "supUnused", verdict: "watch" };
}

export function calculate(input: CalcInput): CalcResult {
  const isProduction = input.industry === "production";
  const isExact = input.basis === "exact";

  const dailyRevenue = div(input.revenue, DAYS);
  const dailyCogs = div(input.cogs, DAYS);
  const dailyPurchase = div(input.purchases, DAYS);
  const dailyRawConsumed = div(input.rawConsumed, DAYS);
  const dailyCogm = div(input.cogm, DAYS);
  const dailyRawPurchase = div(input.rawPurchases, DAYS);

  // Ombor kunlari (DIO). Простой режим — база выручка, точный — COGS.
  const stockBase = isExact ? dailyCogs : dailyRevenue;

  const dioRaw = div(input.raw, dailyRawConsumed);
  const dioWip = div(input.wip, dailyCogm);
  const dioFinished = div(input.finished, dailyCogs);
  const inventory = isProduction ? input.raw + input.wip + input.finished : input.stock;
  const dio = isProduction ? dioRaw + dioWip + dioFinished : div(input.stock, stockBase);

  // DSO всегда считается от выручки — Formulalar!A7.
  const dso = div(input.receivables, dailyRevenue);
  // DPO: производство — от закупки сырья, торговля — от закупок либо выручки.
  const dpo = isProduction ? div(input.payables, dailyRawPurchase) : div(input.payables, isExact ? dailyPurchase : dailyRevenue);
  const ccc = dio + dso - dpo;
  const operatingCycle = dio + dso;

  const workingCapital = inventory + input.receivables + input.cash - input.payables;
  const totalCapital = workingCapital + input.fixedAssets;
  const operatingRoi = div(input.ebit, workingCapital);
  const totalRoi = div(input.ebit, totalCapital);
  const netMargin = div(input.netProfit, input.revenue);

  // Здоровый уровень: лид-тайм + страховой запас, в производстве — по сырью.
  const healthyStockDays = input.leadTime + input.safetyStock;
  const healthyBase = isProduction ? dailyRawConsumed : stockBase;
  const healthyStock = healthyBase * healthyStockDays;
  const measuredStock = isProduction ? input.raw : input.stock;
  const excessStock = measuredStock - healthyStock;

  const healthyReceivables = dailyRevenue * input.termDays;
  const excessReceivables = input.receivables - healthyReceivables;

  const frozen = Math.max(excessStock, 0) + Math.max(excessReceivables, 0);
  const extraProfit = frozen * operatingRoi;
  const newWorkingCapital = workingCapital - frozen;
  const newRoi = div(input.ebit, newWorkingCapital);
  const cheapMoney = input.payables * input.bankRate;

  const stages: { key: StageKey; days: number }[] = [
    { key: "raw", days: dioRaw },
    { key: "wip", days: dioWip },
    { key: "finished", days: dioFinished },
  ];
  const longest = stages.reduce((a, b) => (b.days > a.days ? b : a), stages[0]);
  const stageTotal = dioRaw + dioWip + dioFinished;

  const scenarios: CccScenario[] = SCENARIO_DAYS.map((days) => {
    const released = dailyRevenue * days;
    return { days, released, profit: released * operatingRoi };
  });

  const signals: Signal[] = [
    cccSignal(ccc),
    stockSignal(excessStock),
    receivablesSignal(excessReceivables),
    roiSignal(operatingRoi),
    supplierSignal(dpo, input.supplierTerm),
  ];

  return {
    dailyRevenue,
    dailyCogs,
    dailyPurchase,
    dio,
    dioRaw,
    dioWip,
    dioFinished,
    dso,
    dpo,
    ccc,
    operatingCycle,
    inventory,
    workingCapital,
    totalCapital,
    operatingRoi,
    totalRoi,
    netMargin,
    healthyStockDays,
    healthyStock,
    excessStock,
    healthyReceivables,
    excessReceivables,
    frozen,
    extraProfit,
    newWorkingCapital,
    newRoi,
    cheapMoney,
    longestStage: longest.key,
    stageShare: {
      raw: div(dioRaw, stageTotal),
      wip: div(dioWip, stageTotal),
      finished: div(dioFinished, stageTotal),
    },
    scenarios,
    signals,
  };
}
