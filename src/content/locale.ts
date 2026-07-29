/**
 * Языки сайта.
 *
 * Русская версия живёт в корне, узбекская — под /uz. Так сделано намеренно:
 * русские адреса уже согласованы с заказчиком и разосланы, ломать их из-за
 * появления второго языка нельзя.
 */

export type Locale = "ru" | "uz";

export const LOCALES: readonly Locale[] = ["ru", "uz"];

export const DEFAULT_LOCALE: Locale = "ru";

/** Подпись языка в переключателе. Узбекский — латиницей, это официальная письменность. */
export const LOCALE_LABEL: Record<Locale, string> = {
  ru: "Рус",
  uz: "Oʻzb",
};

/** Значение атрибута lang для <html>. */
export const LOCALE_LANG: Record<Locale, string> = {
  ru: "ru",
  uz: "uz",
};

/**
 * Приводит внутреннюю ссылку к нужному языку.
 * localePath("uz", "/portfolio") → "/uz/portfolio", localePath("ru", "/portfolio") → "/portfolio".
 * Внешние ссылки, телефоны, почта и анкоря возвращаются без изменений.
 */
export function localePath(locale: Locale, href: string): string {
  if (!href.startsWith("/")) return href;
  if (locale === DEFAULT_LOCALE) return href;
  return href === "/" ? "/uz" : `/uz${href}`;
}
