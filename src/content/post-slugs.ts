import { DEFAULT_LOCALE, type Locale } from "./locale";

/**
 * Пары адресов одной статьи в двух языках.
 *
 * У статей, перенесённых с прежнего сайта, русский и узбекский адреса разные —
 * узбекская версия писалась под свои поисковые запросы, а не транслитерацией
 * русского слага. Вывести соответствие из пути невозможно, поэтому оно задано
 * явно; карта снята с атрибутов hreflang прежнего сайта.
 *
 * Без неё языковые версии проставятся неверно, и поиск сочтёт узбекскую статью
 * либо дублем русской, либо самостоятельной страницей без пары.
 *
 * Статьи, написанные под новый сайт, используют один слаг на оба языка и в
 * карте не нуждаются — для них работает возврат исходного значения.
 */
const RU_TO_UZ: Record<string, string> = {
  "chto-takoe-sap": "sap-nima-va-qanday-ishlaydi",
  "chto-takoe-sap-erp": "sap-erp-tizimi",
  "integraciya-sap-v-biznes-klyuch-k-cifrovoy-transformacii-w7g89w":
    "integraciya-sap-v-biznes-klyuch-k-cifrovoy-transformacii-w7g89w",
  "kak-uvelichit-pribyl-importa": "import-kompaniyalar-foydasini-oshirish",
  "sap-business-one-ili-odoo-chto-vybrat-dlya-avtomatizacii-biznesa":
    "sap-business-one-vs-odoo-qaysi-erp-platformasi-mos",
  "sap-business-one-kontrol-sklada": "sap-business-one-ombor-nazorati",
  "sap-vs-1c-sravnenie-erp-sistem-dlya-biznesa": "sap-yoki-1c-erp-tizimlar-taqoslash-biznes-uchun",
};

const UZ_TO_RU: Record<string, string> = Object.fromEntries(
  Object.entries(RU_TO_UZ).map(([ru, uz]) => [uz, ru]),
);

/** Слаг той же статьи на другом языке. Если пары нет, слаг общий для обоих языков. */
export function postSlugIn(from: Locale, to: Locale, slug: string): string {
  if (from === to) return slug;
  const table = from === DEFAULT_LOCALE ? RU_TO_UZ : UZ_TO_RU;
  return table[slug] ?? slug;
}
