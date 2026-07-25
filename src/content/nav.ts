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
    { label: "SAP S/4HANA", href: "/sap-s4hana", note: "Для крупного предприятия" },
    { label: "Кейсы", href: "/cases", note: "Внедрения в Узбекистане" },
    { label: "Блог", href: "/blog", note: "Разборы и сравнения" },
    { label: "Контакты", href: "/contacts", note: "Поговорить с командой" },
  ],
  secondary: [
    { label: "Калькулятор оборотного капитала", href: "/simulator" },
    { label: "SAP Академия", href: "/academy" },
    { label: "Вакансии", href: "/careers" },
  ],
};

const UZ: typeof RU = {
  primary: [
    { label: "SAP Business One", href: "/sap-business-one", note: "Oʻsayotgan biznes uchun" },
    { label: "SAP S/4HANA", href: "/sap-s4hana", note: "Yirik korxona uchun" },
    { label: "Loyihalar", href: "/cases", note: "Oʻzbekistondagi joriy etishlar" },
    { label: "Blog", href: "/blog", note: "Tahlil va qiyoslar" },
    { label: "Aloqa", href: "/contacts", note: "Jamoa bilan gaplashish" },
  ],
  secondary: [
    { label: "Aylanma kapital kalkulyatori", href: "/simulator" },
    { label: "SAP Akademiya", href: "/academy" },
    { label: "Vakansiyalar", href: "/careers" },
  ],
};

export function menuNav(locale: Locale): typeof RU {
  return locale === "uz" ? UZ : RU;
}
