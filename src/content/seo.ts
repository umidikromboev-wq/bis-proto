import type { Locale } from "./locale";

/**
 * Заголовки и описания страниц для поиска и соцсетей.
 *
 * Держим отдельно от текстов страниц: title и description пишутся под выдачу
 * (запрос, длина, призыв), а не под чтение на странице. Тексты внутри страниц
 * от этого не зависят и правятся независимо.
 *
 * Длина: title до ~60 символов, description до ~155 — дальше поиск обрезает.
 */
export type SeoEntry = { title: string; description: string };

/** Ключ — путь без языкового префикса. */
export type SeoKey =
  | "/"
  | "/sap-business-one"
  | "/sap-s4hana"
  | "/cases"
  | "/blog"
  | "/contacts"
  | "/simulator"
  | "/academy"
  | "/careers";

const RU: Record<SeoKey, SeoEntry> = {
  "/": {
    title: "Внедрение SAP в Узбекистане — BIS",
    description:
      "Внедряем SAP Business One и S/4HANA с 2019 года: финансы, склад, закупки, производство и себестоимость в одной системе. 35+ внедрений, бесплатный аудит процессов.",
  },
  "/sap-business-one": {
    title: "SAP Business One — внедрение в Узбекистане",
    description:
      "Производство, склад, себестоимость и финансы в одной системе. Поэтапный запуск от 3 месяцев, бюджет известен до договора. 90% наших внедрений — Business One.",
  },
  "/sap-s4hana": {
    title: "SAP S/4HANA для холдингов Узбекистана",
    description:
      "Несколько юрлиц и площадок, консолидация и аналитика в реальном времени. Пилотное юрлицо за 3–4 месяца, дальше тираж на группу.",
  },
  "/cases": {
    title: "Кейсы внедрения SAP — BIS",
    description:
      "Что изменилось у Climadens Pro, Benefit и BRAUF Wood после запуска: оборачиваемость, неликвид, срок закрытия периода. Цифры из отчётов клиентов.",
  },
  "/blog": {
    title: "Блог о внедрении ERP — BIS",
    description:
      "Почему проекты ERP проваливаются, где заканчивается зона 1С и из чего складывается бюджет внедрения. Без рекламы систем.",
  },
  "/contacts": {
    title: "Контакты BIS — внедрение SAP в Ташкенте",
    description:
      "Офис в Ташкенте, БЦ Ventum Plaza. Бесплатный аудит процессов, открытая встреча в Zoom по четвергам, расчёт оборотного капитала за 3 минуты.",
  },
  "/simulator": {
    title: "Калькулятор оборотного капитала — BIS",
    description:
      "Посчитайте за три минуты, сколько ваших денег стоит в обороте без движения: денежный цикл, избыток запасов и дебиторки, сумма к возврату.",
  },
  "/academy": {
    title: "SAP Академия — обучение по ролям",
    description:
      "Обучение по ролям сокращает время освоения SAP примерно на 30%. Не менее 15% бюджета внедрения — отдельный этап с планом и приёмкой.",
  },
  "/careers": {
    title: "Вакансии в BIS — работа с SAP в Ташкенте",
    description:
      "Ищем SAP-консультантов, backend-разработчиков и проект-менеджеров. Реальные внедрения, более $30 000 в год в развитие команды.",
  },
};

const UZ: Record<SeoKey, SeoEntry> = {
  "/": {
    title: "Oʻzbekistonda SAP joriy etish — BIS",
    description:
      "2019 yildan SAP Business One va S/4HANA joriy etamiz: moliya, ombor, xarid, ishlab chiqarish va tannarx bitta tizimda. 35+ loyiha, bepul audit.",
  },
  "/sap-business-one": {
    title: "SAP Business One — Oʻzbekistonda joriy etish",
    description:
      "Ishlab chiqarish, ombor, tannarx va moliya bitta tizimda. 3 oydan bosqichma-bosqich ishga tushirish, budjet shartnomadan oldin maʼlum.",
  },
  "/sap-s4hana": {
    title: "Oʻzbekiston holdinglari uchun SAP S/4HANA",
    description:
      "Bir nechta yuridik shaxs va maydoncha, konsolidatsiya va real vaqtdagi tahlil. Pilot yuridik shaxs 3–4 oyda, keyin guruhga tarqatiladi.",
  },
  "/cases": {
    title: "SAP joriy etish loyihalari — BIS",
    description:
      "Climadens Pro, Benefit va BRAUF Wood da ishga tushgandan keyin nima oʻzgardi: aylanish, harakatsiz tovar, davrni yopish muddati.",
  },
  "/blog": {
    title: "ERP joriy etish haqida blog — BIS",
    description:
      "Nega ERP loyihalari barbod boʻladi, 1C ning hududi qayerda tugaydi va joriy etish budjeti nimalardan yigʻiladi. Tizim reklamasisiz.",
  },
  "/contacts": {
    title: "BIS aloqa — Toshkentda SAP joriy etish",
    description:
      "Toshkentdagi ofis, Ventum Plaza biznes markazi. Jarayonlarning bepul auditi, payshanba kunlari Zoomda ochiq uchrashuv, 3 daqiqada hisob.",
  },
  "/simulator": {
    title: "Aylanma kapital kalkulyatori — BIS",
    description:
      "Uch daqiqada hisoblang: pulingizning qanchasi aylanmada harakatsiz turadi, pul aylanish tsikli, ortiqcha zaxira va qaytariladigan summa.",
  },
  "/academy": {
    title: "SAP Akademiya — rollar boʻyicha oʻqitish",
    description:
      "Rollar boʻyicha oʻqitish SAPni oʻzlashtirish vaqtini qariyb 30% qisqartiradi. Budjetning kamida 15% — rejasi va qabuli bor alohida bosqich.",
  },
  "/careers": {
    title: "BIS vakansiyalari — Toshkentda SAP bilan ish",
    description:
      "SAP konsultantlari, backend dasturchilar va loyiha menejerlarini izlayapmiz. Haqiqiy loyihalar, jamoaga yiliga $30 000 dan ortiq sarf.",
  },
};

export function seo(locale: Locale): Record<SeoKey, SeoEntry> {
  return locale === "uz" ? UZ : RU;
}

/** Все статические маршруты — используется картой сайта. */
export const SEO_KEYS: SeoKey[] = Object.keys(RU) as SeoKey[];
