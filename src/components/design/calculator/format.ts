/** Форматирование чисел калькулятора: деньги в двух валютах, дни и проценты. */

export type Currency = "usd" | "uzs";

/** Курс держим одной константой — заменяется при пересмотре цен. */
export const RATE = 12_800;

export function sep(value: number): string {
  return Math.round(value).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export function money(usd: number, currency: Currency): string {
  if (currency === "usd") {
    const sign = usd < 0 ? "−" : "";
    return `${sign}$${sep(Math.abs(usd))}`;
  }
  const value = usd * RATE;
  const abs = Math.abs(value);
  const sign = value < 0 ? "−" : "";
  if (abs >= 1e9) return `${sign}${(abs / 1e9).toFixed(2).replace(".", ",")} млрд сум`;
  if (abs >= 1e6) return `${sign}${Math.round(abs / 1e6)} млн сум`;
  return `${sign}${sep(abs)} сум`;
}

export function days(value: number, unit = "дн."): string {
  return `${value.toFixed(1).replace(".", ",")} ${unit}`;
}

export function percent(value: number, digits = 0): string {
  return `${(value * 100).toFixed(digits).replace(".", ",")}%`;
}

export function toDisplay(usd: number, currency: Currency): number {
  return currency === "usd" ? usd : usd * RATE;
}

export function parseMoney(raw: string, currency: Currency): number {
  const digits = parseInt(raw.replace(/[^\d]/g, "") || "0", 10);
  return currency === "usd" ? digits : digits / RATE;
}
