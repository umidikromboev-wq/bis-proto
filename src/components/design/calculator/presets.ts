/**
 * Готовые примеры бизнеса. Дистрибуция и производство — цифры из рабочего
 * файла клиента (12 млн оборота), розница — тот же профиль в меньшем масштабе.
 * Все суммы в долларах; интерфейс пересчитывает их в сумы по курсу.
 */

import type { CalcInput } from "./model";

export type PresetKey = "distrib" | "retail" | "production";

export const PRESET_LABELS: { readonly key: PresetKey; readonly label: string }[] = [
  { key: "distrib", label: "Дистрибуция" },
  { key: "retail", label: "Розница" },
  { key: "production", label: "Производство" },
];

const distrib: CalcInput = {
  industry: "trade",
  basis: "exact",
  revenue: 12_000_000,
  cogs: 9_000_000,
  purchases: 9_000_000,
  ebit: 1_200_000,
  netProfit: 900_000,
  stock: 1_080_000,
  receivables: 550_000,
  cash: 560_000,
  payables: 700_000,
  fixedAssets: 500_000,
  raw: 0,
  wip: 0,
  finished: 0,
  rawPurchases: 0,
  rawConsumed: 0,
  cogm: 0,
  leadTime: 10,
  safetyStock: 5,
  termDays: 15,
  bankRate: 0.24,
  supplierTerm: 30,
};

const retail: CalcInput = {
  ...distrib,
  revenue: 4_000_000,
  cogs: 2_800_000,
  purchases: 2_800_000,
  ebit: 400_000,
  netProfit: 280_000,
  stock: 420_000,
  receivables: 90_000,
  cash: 180_000,
  payables: 260_000,
  fixedAssets: 300_000,
  leadTime: 12,
  safetyStock: 8,
  termDays: 7,
  supplierTerm: 30,
};

const production: CalcInput = {
  ...distrib,
  industry: "production",
  cogs: 9_000_000,
  raw: 300_000,
  wip: 200_000,
  finished: 500_000,
  rawPurchases: 2_500_000,
  rawConsumed: 2_000_000,
  cogm: 5_000_000,
  stock: 1_000_000,
  leadTime: 20,
  safetyStock: 10,
  termDays: 30,
  supplierTerm: 45,
};

export const PRESETS: Record<PresetKey, CalcInput> = { distrib, retail, production };

export const DEFAULT_PRESET: PresetKey = "distrib";
