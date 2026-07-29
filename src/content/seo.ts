import type { Locale } from "./locale";

/**
 * Заголовки и описания страниц для поиска и соцсетей.
 *
 * Держим отдельно от текстов страниц: title и description пишутся под выдачу
 * (запрос, длина, призыв), а не под чтение на странице. Тексты внутри страниц
 * от этого не зависят и правятся независимо.
 *
 * Длина: title до ~60 символов, description до ~155 — дальше поиск обрезает.
 *
 * Страницы, перешедшие с прежнего сайта bis-pro.com, сохраняют его заголовки и
 * описания дословно, даже когда они длиннее этого ориентира. Это не недосмотр:
 * именно по этим формулировкам страницы годами набирали позиции, и переписать
 * их «покрасивее» — верный способ просесть в выдаче. Поиск обрежет показ, но
 * ключевые слова из title учитываются целиком.
 *
 * Исключения, где взяты новые формулировки, перечислены рядом с записями:
 * прежние там были непригодны (заголовок из одного слова, пустое описание).
 */
export type SeoEntry = { title: string; description: string };

/** Ключ — путь без языкового префикса. */
export type SeoKey =
  | "/"
  | "/sap-business-one"
  | "/sap-s-4hana"
  | "/portfolio"
  | "/blog"
  | "/contacts"
  | "/simulator"
  | "/courses"
  | "/vacancy"
  // Восстановлены с прежнего сайта: эти адреса были в индексе.
  | "/aboutus"
  | "/services"
  | "/production"
  | "/retail-trade"
  | "/wholesale-trade"
  | "/distribution";

const RU: Record<SeoKey, SeoEntry> = {
  "/": {
    title: "SAP Business One в Узбекистане | Внедрение ERP и Автоматизация Бизнеса",
    // Из прежнего описания убрано «Официальный партнёр SAP Business One»:
    // статуса нет, SAP его не выдаёт (правка заказчика 2026-07-22). Остальная
    // формулировка сохранена — в ней ключевые слова главной страницы.
    description:
      "Внедрение SAP Business One в Узбекистане. ERP система для управления предприятием и автоматизации бизнеса в Ташкенте. Бесплатная консультация!",
  },
  "/sap-business-one": {
    title: "SAP Business One Uzbekistan | ERP платформа и система управления бизнесом",
    description:
      "SAP Business One Uzbekistan — ERP платформа и система управления бизнесом. Управляйте финансами, складом, производством и аналитикой в одной системе. Начните работу с SAP программой — запросите демо и консультацию!",
  },
  "/sap-s-4hana": {
    title: "SAP S/4HANA Uzbekistan | ERP платформа для крупного бизнеса и real-time управления",
    description:
      "SAP S/4HANA Uzbekistan — ERP платформа и система управления бизнесом для крупных компаний. Управляйте финансами, производством и аналитикой в реальном времени. Начните цифровизацию с SAP — запросите демо и консультацию!",
  },
  // Прежний заголовок — одно слово «Portfolio», описание пустое. Здесь замена
  // не риск, а исправление: терять в выдаче нечего.
  "/portfolio": {
    title: "Кейсы внедрения SAP — BIS",
    description:
      "Что изменилось у Climadens Pro, Benefit и BRAUF Wood после запуска: оборачиваемость, неликвид, срок закрытия периода. Цифры из отчётов клиентов.",
  },
  "/blog": {
    title: "Блог SAP и ERP | Новости, статьи и карьерные возможности",
    description:
      "Блог о SAP Business One и ERP системах. Новости, статьи, аналитика и карьерные возможности в сфере автоматизации бизнеса.",
  },
  "/contacts": {
    title: "Контакты | SAP Business One Uzbekistan контакты и адрес",
    description:
      "Контакты SAP Business One Uzbekistan. Адрес офиса в Ташкенте, телефон и email для связи по ERP решениям.",
  },
  "/simulator": {
    title: "Калькулятор оборотного капитала — BIS",
    description:
      "Посчитайте за три минуты, сколько ваших денег стоит в обороте без движения: денежный цикл, избыток запасов и дебиторки, сумма к возврату.",
  },
  "/courses": {
    title: "Курс SAP Business One Uzbekistan | Обучение ERP и профессии за 1 месяц",
    description:
      "Курс SAP Business One Uzbekistan: обучение ERP системе и работе с SAP программой. Освойте востребованную профессию за 1 месяц, получите практический опыт. Запишитесь сейчас!",
  },
  // Прежний заголовок — одно слово «Вакансии», описание пустое: заменяем.
  "/vacancy": {
    title: "Вакансии в BIS — работа с SAP в Ташкенте",
    description:
      "Ищем SAP-консультантов, backend-разработчиков и проект-менеджеров. Реальные внедрения, более $30 000 в год в развитие команды.",
  },
  "/aboutus": {
    // Из прежних заголовка и описания убрано «Официальный партнёр SAP Business
    // One»: статуса нет (правка заказчика 2026-07-22). Ключевые слова сохранены.
    title: "О компании | Внедрение SAP Business One в Узбекистане",
    description:
      "BIS — команда внедрения SAP Business One в Узбекистане. Более 30 успешных проектов автоматизации бизнес-процессов предприятий. Бесплатная консультация!",
  },
  "/services": {
    title: "Услуги SAP Business One в Узбекистане | Внедрение ERP и Консалтинг",
    description:
      "Услуги SAP Business One в Узбекистане: внедрение ERP и SAP консалтинг. Автоматизация бизнес-процессов и управление предприятием. Бесплатная консультация!",
  },
  // У отраслевых страниц прежние заголовки состояли из одного слова
  // («Производство», «Дистрибуция»), описания были пустыми. Здесь замена —
  // исправление, а не риск: терять в выдаче нечего.
  "/production": {
    title: "ERP для производства | Автоматизация производства с SAP Business One",
    description:
      "Внедрение SAP на производстве в Узбекистане: фактическая себестоимость по каждому заказу, планирование сырья, учёт брака и отходов. Бесплатный аудит процессов.",
  },
  "/retail-trade": {
    title: "ERP для розничной торговли | Автоматизация ритейла с SAP Business One",
    description:
      "Автоматизация розничной торговли в Узбекистане: единый остаток по всем точкам, управление закупками и уценкой, аналитика продаж в SAP. Бесплатный аудит.",
  },
  "/wholesale-trade": {
    title: "ERP для оптовой торговли | Автоматизация опта с SAP Business One",
    description:
      "Автоматизация оптовой торговли в Узбекистане: контроль неликвида и дебиторки, управление запасами и закупками, аналитика маржи в SAP. Бесплатный аудит.",
  },
  "/distribution": {
    title: "ERP для дистрибуции | Автоматизация дистрибуции с SAP Business One",
    description:
      "Автоматизация дистрибуции в Узбекистане: закупка, склад, отгрузка и расчёты с партнёрами в одной системе SAP Business One. Бесплатный аудит процессов.",
  },
};

const UZ: Record<SeoKey, SeoEntry> = {
  "/": {
    title: "SAP Business One Uzbekistan | ERP tizimi joriy etish va biznesni avtomatlashtirish",
    description:
      "SAP Business One Uzbekistan bilan ERP tizimi joriy eting. Biznesni avtomatlashtiring, xarajatlarni kamaytiring va daromadni oshiring. Bepul konsultatsiya oling!",
  },
  "/sap-business-one": {
    title: "SAP Business One Uzbekistan | ERP platforma va biznes boshqaruv tizimi",
    description:
      "SAP Business One Uzbekistan — ERP platforma va biznes boshqaruv tizimi. Moliyaviy menejment, ombor, ishlab chiqarish va analitikani yagona tizimda boshqaring. SAP dasturi bilan ishlashni boshlang — demo va bepul konsultatsiya oling!",
  },
  "/sap-s-4hana": {
    title: "SAP S/4HANA Uzbekistan | Yirik biznes uchun ERP platforma va real vaqt boshqaruvi",
    description:
      "SAP S/4HANA Uzbekistan — yirik kompaniya uchun ERP platforma va biznes boshqaruvi tizimi. Real vaqt rejimida moliyaviy menejment, ishlab chiqarish va analitikani boshqaring. SAP tizimi bilan raqamlashtirishni boshlang — demo va bepul konsultatsiya oling!",
  },
  "/portfolio": {
    title: "SAP joriy etish loyihalari — BIS",
    description:
      "Climadens Pro, Benefit va BRAUF Wood da ishga tushgandan keyin nima oʻzgardi: aylanish, harakatsiz tovar, davrni yopish muddati.",
  },
  "/blog": {
    title: "SAP va ERP blog | Yangiliklar, qoʻllanmalar va karyera imkoniyatlari",
    description:
      "SAP Business One Uzbekistan, ERP tizimi va biznesni avtomatlashtirish boʻyicha maqolalar. Yangiliklar, qoʻllanmalar va karyera imkoniyatlarini oʻrganing.",
  },
  "/contacts": {
    title: "Kontaktlar | SAP Business One Uzbekistan aloqa maʼlumotlari",
    description:
      "SAP Business One Uzbekistan va ERP tizimi boʻyicha savollar uchun biz bilan bogʻlaning. Toshkentdagi ofis manzili, telefon va email maʼlumotlari.",
  },
  "/simulator": {
    title: "Aylanma kapital kalkulyatori — BIS",
    description:
      "Uch daqiqada hisoblang: pulingizning qanchasi aylanmada harakatsiz turadi, pul aylanish tsikli, ortiqcha zaxira va qaytariladigan summa.",
  },
  "/courses": {
    title: "SAP Business One kursi Uzbekistan | ERP tizimi oʻrganish va 1 oyda mutaxassis boʻling",
    // На прежнем сайте описание этой страницы было по ошибке оставлено на
    // русском языке. Смысл и ключевые слова сохранены, язык исправлен.
    description:
      "SAP Business One kursi Uzbekistan: ERP tizimi va SAP dasturida ishlashni oʻrganing. Talab yuqori kasbni 1 oyda egallang, amaliy tajriba oling. Hoziroq yoziling!",
  },
  "/vacancy": {
    title: "BIS vakansiyalari — Toshkentda SAP bilan ish",
    description:
      "SAP konsultantlari, backend dasturchilar va loyiha menejerlarini izlayapmiz. Haqiqiy loyihalar, jamoaga yiliga $30 000 dan ortiq sarf.",
  },
  "/aboutus": {
    // «Rasmiy hamkori» убрано по той же причине, что и в русской версии.
    title: "Biz haqimizda | Oʻzbekistonda SAP Business One joriy etish",
    description:
      "BIS — Oʻzbekistonda SAP Business One joriy etuvchi jamoa. 30+ muvaffaqiyatli loyiha va tajribali jamoa bilan biznesni tizimlashtirish boʻyicha ishonchli yechimlar.",
  },
  "/services": {
    title: "SAP Business One Uzbekistan xizmatlari | ERP joriy etish va konsalting",
    description:
      "SAP Business One xizmatlari: ERP dastur joriy etish va SAP konsalting. Korxona boshqaruv tizimi yordamida biznesni avtomatlashtiring. Bepul maslahat oling!",
  },
  "/production": {
    title: "Ishlab chiqarish uchun ERP | SAP Business One bilan avtomatlashtirish",
    description:
      "Oʻzbekistonda ishlab chiqarishda SAP joriy etish: har bir buyurtma boʻyicha haqiqiy tannarx, xomashyoni rejalashtirish, brak va chiqindi hisobi. Bepul audit.",
  },
  "/retail-trade": {
    title: "Chakana savdo uchun ERP | SAP Business One bilan avtomatlashtirish",
    description:
      "Oʻzbekistonda chakana savdoni avtomatlashtirish: barcha nuqtalar boʻyicha yagona qoldiq, xarid va arzonlashtirishni boshqarish, savdo tahlili. Bepul audit.",
  },
  "/wholesale-trade": {
    title: "Ulgurji savdo uchun ERP | SAP Business One bilan avtomatlashtirish",
    description:
      "Oʻzbekistonda ulgurji savdoni avtomatlashtirish: harakatsiz tovar va debitorlik nazorati, zaxira va xaridni boshqarish, marja tahlili. Bepul audit.",
  },
  "/distribution": {
    title: "Distribyutsiya uchun ERP | SAP Business One bilan avtomatlashtirish",
    description:
      "Oʻzbekistonda distribyutsiyani avtomatlashtirish: xarid, ombor, joʻnatish va hamkorlar bilan hisob-kitob yagona SAP Business One tizimida. Bepul audit.",
  },
};

export function seo(locale: Locale): Record<SeoKey, SeoEntry> {
  return locale === "uz" ? UZ : RU;
}

/** Все статические маршруты — используется картой сайта. */
export const SEO_KEYS: SeoKey[] = Object.keys(RU) as SeoKey[];
