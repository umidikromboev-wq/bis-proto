import type { Locale } from "./locale";

/**
 * Навигация шторки меню.
 *
 * Живёт отдельно от `blocks.nav`: в подвале нужны только названия разделов, а в
 * меню у каждого пункта есть ещё поясняющая подпись — она часть вёрстки меню,
 * а не текста страниц.
 */
const RU = {
  primary: [
    { label: "SAP Business One", href: "/sap-business-one", note: "Для растущего бизнеса" },
    { label: "SAP S/4HANA", href: "/sap-s-4hana", note: "Для крупного предприятия" },
    { label: "Услуги", href: "/services", note: "Внедрение, консалтинг, поддержка" },
    { label: "Кейсы", href: "/portfolio", note: "Внедрения в Узбекистане" },
    { label: "О компании", href: "/aboutus", note: "Команда и подход" },
    { label: "Блог", href: "/blog", note: "Разборы и сравнения" },
    { label: "Контакты", href: "/contacts", note: "Поговорить с командой" },
  ],
  secondary: [
    { label: "Калькулятор оборотного капитала", href: "/simulator" },
    { label: "SAP Академия", href: "/courses" },
    { label: "Вакансии", href: "/vacancy" },
  ],
  /**
   * Отраслевые страницы. Вынесены отдельным блоком: это посадочные под запросы
   * вида «ERP для производства», и они должны быть доступны ссылкой с любой
   * страницы — иначе останутся сиротами, которые поиск обходит редко.
   */
  industriesLabel: "Отрасли",
  industries: [
    { label: "Производство", href: "/production" },
    { label: "Оптовая торговля", href: "/wholesale-trade" },
    { label: "Дистрибуция", href: "/distribution" },
    { label: "Розничная торговля", href: "/retail-trade" },
  ],
};

const UZ: typeof RU = {
  primary: [
    { label: "SAP Business One", href: "/sap-business-one", note: "Oʻsayotgan biznes uchun" },
    { label: "SAP S/4HANA", href: "/sap-s-4hana", note: "Yirik korxona uchun" },
    { label: "Xizmatlar", href: "/services", note: "Joriy etish, konsalting, qoʻllab-quvvatlash" },
    { label: "Loyihalar", href: "/portfolio", note: "Oʻzbekistondagi joriy etishlar" },
    { label: "Kompaniya haqida", href: "/aboutus", note: "Jamoa va yondashuv" },
    { label: "Blog", href: "/blog", note: "Tahlil va qiyoslar" },
    { label: "Aloqa", href: "/contacts", note: "Jamoa bilan gaplashish" },
  ],
  secondary: [
    { label: "Aylanma kapital kalkulyatori", href: "/simulator" },
    { label: "SAP Akademiya", href: "/courses" },
    { label: "Vakansiyalar", href: "/vacancy" },
  ],
  industriesLabel: "Sohalar",
  industries: [
    { label: "Ishlab chiqarish", href: "/production" },
    { label: "Ulgurji savdo", href: "/wholesale-trade" },
    { label: "Distribyutsiya", href: "/distribution" },
    { label: "Chakana savdo", href: "/retail-trade" },
  ],
};

export function menuNav(locale: Locale): typeof RU {
  return locale === "uz" ? UZ : RU;
}
