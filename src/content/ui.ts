import type { Locale } from "./locale";

/**
 * Подписи интерфейса — то, что вшито в вёрстку, а не лежит в текстах страниц:
 * названия кнопок, служебные заголовки, aria-подписи, поля формы, ярлыки
 * калькулятора.
 *
 * Держим отдельно от контента: контент правит заказчик, а эти строки живут
 * вместе с компонентами и меняются только при изменении вёрстки.
 *
 * Узбекский набор типизирован от русского, поэтому пропущенная строка — это
 * ошибка компиляции, а не незамеченный русский текст на узбекской версии.
 */
const RU = {
  // Навигация и каркас
  navMain: "Основная навигация",
  navSections: "Разделы сайта",
  navSecondary: "Дополнительные разделы",
  breadcrumbs: "Хлебные крошки",
  home: "Главная",
  menu: "Меню",
  close: "Закрыть",
  more: "Ещё",
  contact: "Связаться",
  contacts: "Контакты",
  tagline: "Ташкент · внедрение и поддержка SAP",
  partnerLine: "Внедряем SAP в Узбекистане с 2019 года",
  nextStep: "Следующий шаг",
  footerCallH: ["Разберём ваши процессы", "и покажем систему на них"] as [string, string],
  workingCapital: "Калькулятор оборотного капитала",

  // Кнопки и призывы
  bookAudit: "Записаться на аудит",
  getEstimate: "Получить расчёт за 1 день",
  countFrozen: "Посчитать замороженные деньги",
  countCapitalFirst: "Сначала посчитать оборотный капитал",
  otherCases: "Другие кейсы",
  viewCase: "Смотреть кейс полностью",
  writeEmail: "Написать на почту",
  writeTelegram: "Написать в Telegram",

  // Первый экран
  heroInto: "в одну систему",
  heroProfit: "реальную прибыль в любой момент",
  factoryAlt:
    "Производство, объединённое в одну систему SAP: склад, цех, конвейер и аналитика",

  // Внутренние страницы
  sameReviewH2: "Хотите такой же разбор по своей компании?",
  sameReviewLead:
    "Бесплатный аудит: покажем, где вы теряете деньги, и что из этого закрывает система.",
  address: "Адрес",
  hours: "Часы работы",
  whatNeeded: "Что нужно",
  niceToHave: "Будет плюсом",
  whenNotNeeded: "Когда не нужно",
  budgetOf: "Из чего складывается бюджет",
  auditProcessH2: "Разберём ваш процесс на бесплатном аудите",
  task: "Задача",
  mostChosen: "Чаще всего выбирают",
  term: "Срок",
  meetingAlt: "Разбор процессов на встрече с консультантом BIS",
  dashboardAlt:
    "Дашборд SAP Business One: выручка, денежный поток, складские остатки и статусы заказов",

  // Схемы
  processState: "Состояние процесса",
  businessType: "Тип бизнеса",
  businessState: "Состояние бизнеса",
  now: "Сейчас",
  withSystem: "С системой",

  // Форма заявки
  leadDone: "Заявка принята",
  fieldName: "Как к вам обращаться",
  fieldNamePlaceholder: "Имя",
  fieldPhone: "Телефон",
  fieldCompany: "Компания",
  fieldCompanyPlaceholder: "Название и сфера",
  fieldTask: "Что за задача",
  fieldTaskPlaceholder: "Пара слов о процессах или вопросе",

  // Калькулятор оборотного капитала
  calcKicker: "Калькулятор · оборотный капитал",
  calcH1: "Сколько ваших денег стоит в обороте без движения",
  calcPreset: "Пример бизнеса",
  calcCurrency: "Валюта",
  calcSum: "сум",
  calcTrade: "Торговля",
  calcProduction: "Производство",
  calcPrecision: "Точность",
  calcSimple: "Просто",
  calcExact: "Точно",
  calcYearTurnover: "Обороты за год",
  calcInCirculation: "Что сейчас в обороте",
  calcNormsTerms: "Нормативы и сроки",
  calcStockLever: "Норматив запаса — главный рычаг",
  calcBlindSpots: "Чего расчёт не видит:",
  calcAboveCalc: "выше расчётной",
  calcFrozen: "Заморожено в обороте",
  calcBreakdown: "Разобрать расчёт",
  calcReturnGives: "Что даёт возврат этих денег",
  calcNoCall: "Без звонка · ссылка сохраняет все цифры · можно переслать финдиректору",
  calcDiagnosis: "Диагностика",
  calcIfShorter: "Если цикл сократится",
  calcCycleShorter: "Цикл короче на",
  calcCashFreed: "Высвободится денег",
  calcProfitOnTop: "Прибыль сверху",
  calcWhereProduction: "Где стоит производство",

  // Крошки и подписи схем, добавленные при переводе
  crumbCases: "Кейсы",
  crumbBlog: "Блог",
  crumbContacts: "Контакты",
  crumbCareers: "Вакансии",
  crumbAcademy: "Академия",
  baDistribution: "Дистрибуция",
  baProduction: "Производство",
  baRetail: "Розница",
  baMargin: "Маржинальность",
  baFrozenShare: "Доля выручки, замороженная в неликвиде",
  baDiscountShare: "Доля сделок со скидкой «из головы»",
  baMarginLoss: "Средняя потеря маржи на такой сделке",
  baLostOrders: "Доля упущенных заказов",
  baPeopleManual: "Людей на ручном сведении отчётов",
  baTimeManual: "Их времени уходит на сведение",
  baSalary: "Зарплата такого сотрудника",
  baMoneyCost: "Стоимость денег для компании",
};

const UZ: typeof RU = {
  navMain: "Asosiy navigatsiya",
  navSections: "Sayt boʻlimlari",
  navSecondary: "Qoʻshimcha boʻlimlar",
  breadcrumbs: "Navigatsiya zanjiri",
  home: "Bosh sahifa",
  menu: "Menyu",
  close: "Yopish",
  more: "Yana",
  contact: "Bogʻlanish",
  contacts: "Aloqa",
  tagline: "Toshkent · SAP joriy etish va qoʻllab-quvvatlash",
  partnerLine: "2019 yildan Oʻzbekistonda SAP joriy etamiz",
  nextStep: "Keyingi qadam",
  footerCallH: ["Jarayonlaringizni tahlil qilamiz", "va tizimni ularda koʻrsatamiz"],
  workingCapital: "Aylanma kapital kalkulyatori",

  bookAudit: "Auditga yozilish",
  getEstimate: "1 kunda hisob-kitob olish",
  countFrozen: "Muzlagan pulni hisoblash",
  countCapitalFirst: "Avval aylanma kapitalni hisoblash",
  otherCases: "Boshqa loyihalar",
  viewCase: "Loyihani toʻliq koʻrish",
  writeEmail: "Pochtaga yozish",
  writeTelegram: "Telegramga yozish",

  heroInto: "bitta tizimga",
  heroProfit: "haqiqiy foydani istalgan paytda",
  factoryAlt:
    "Bitta SAP tizimiga birlashtirilgan ishlab chiqarish: ombor, tsex, konveyer va tahlil",

  sameReviewH2: "Oʻz kompaniyangiz boʻyicha ham shunday tahlil xohlaysizmi?",
  sameReviewLead:
    "Bepul audit: qayerda pul yoʻqotayotganingizni va bundan nimasini tizim yopishini koʻrsatamiz.",
  address: "Manzil",
  hours: "Ish vaqti",
  whatNeeded: "Nima kerak",
  niceToHave: "Ustunlik boʻladi",
  whenNotNeeded: "Qachon kerak emas",
  budgetOf: "Budjet nimalardan yigʻiladi",
  auditProcessH2: "Jarayoningizni bepul auditda tahlil qilamiz",
  task: "Vazifa",
  mostChosen: "Eng koʻp tanlanadi",
  term: "Muddat",
  meetingAlt: "BIS konsultanti bilan uchrashuvda jarayonlar tahlili",
  dashboardAlt:
    "SAP Business One dashbordi: tushum, pul oqimi, ombor qoldiqlari va buyurtma holatlari",

  processState: "Jarayon holati",
  businessType: "Biznes turi",
  businessState: "Biznes holati",
  now: "Hozir",
  withSystem: "Tizim bilan",

  leadDone: "Soʻrov qabul qilindi",
  fieldName: "Sizga qanday murojaat qilaylik",
  fieldNamePlaceholder: "Ism",
  fieldPhone: "Telefon",
  fieldCompany: "Kompaniya",
  fieldCompanyPlaceholder: "Nomi va faoliyat sohasi",
  fieldTask: "Qanday vazifa",
  fieldTaskPlaceholder: "Jarayonlar yoki savol haqida bir-ikki soʻz",

  calcKicker: "Kalkulyator · aylanma kapital",
  calcH1: "Pulingizning qanchasi aylanmada harakatsiz turadi",
  calcPreset: "Biznes namunasi",
  calcCurrency: "Valyuta",
  calcSum: "soʻm",
  calcTrade: "Savdo",
  calcProduction: "Ishlab chiqarish",
  calcPrecision: "Aniqlik",
  calcSimple: "Oddiy",
  calcExact: "Aniq",
  calcYearTurnover: "Yillik aylanma",
  calcInCirculation: "Hozir aylanmada nima bor",
  calcNormsTerms: "Normativlar va muddatlar",
  calcStockLever: "Zaxira normativi — asosiy richag",
  calcBlindSpots: "Hisob nimani koʻrmaydi:",
  calcAboveCalc: "hisoblanganidan yuqori",
  calcFrozen: "Aylanmada muzlagan",
  calcBreakdown: "Hisobni tahlil qilish",
  calcReturnGives: "Bu pulning qaytishi nima beradi",
  calcNoCall: "Qoʻngʻiroqsiz · havola barcha raqamlarni saqlaydi · moliya direktoriga yuborish mumkin",
  calcDiagnosis: "Diagnostika",
  calcIfShorter: "Agar tsikl qisqarsa",
  calcCycleShorter: "Tsikl qisqaradi",
  calcCashFreed: "Boʻshaydigan pul",
  calcProfitOnTop: "Ustama foyda",
  calcWhereProduction: "Ishlab chiqarish qayerda turadi",

  crumbCases: "Loyihalar",
  crumbBlog: "Blog",
  crumbContacts: "Aloqa",
  crumbCareers: "Vakansiyalar",
  crumbAcademy: "Akademiya",
  baDistribution: "Distribyutsiya",
  baProduction: "Ishlab chiqarish",
  baRetail: "Chakana savdo",
  baMargin: "Marjinallik",
  baFrozenShare: "Harakatsiz tovarda muzlagan tushum ulushi",
  baDiscountShare: "«Boshdan chiqarilgan» chegirmali bitimlar ulushi",
  baMarginLoss: "Bunday bitimda oʻrtacha marja yoʻqotishi",
  baLostOrders: "Qoʻldan ketgan buyurtmalar ulushi",
  baPeopleManual: "Hisobotlarni qoʻlda yigʻadigan odamlar",
  baTimeManual: "Yigʻishga ketadigan vaqtlari",
  baSalary: "Bunday xodimning ish haqi",
  baMoneyCost: "Kompaniya uchun pulning qiymati",
};

export type UiStrings = typeof RU;

export function ui(locale: Locale): UiStrings {
  return locale === "uz" ? UZ : RU;
}
