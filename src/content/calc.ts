import type { Locale } from "./locale";

/**
 * Тексты калькулятора оборотного капитала.
 *
 * Модель расчёта (`calculator/model.ts`) возвращает ключи, а не готовые фразы:
 * формулы согласованы с рабочим файлом клиента, и трогать их нельзя, поэтому
 * язык добавлен отдельным слоем поверх, а не внутри вычислений.
 */
const RU = {
  signals: {
    ccc: "Денежный цикл",
    stock: "Запасы",
    receivables: "Дебиторка",
    roi: "Отдача капитала",
    supplier: "Поставщики",
  },
  states: {
    strong: "Сильный", normal: "Нормальный", risk: "Риск",
    excess: "Избыток", deficit: "Дефицит", ok: "В норме",
    betterThanNorm: "Лучше нормы",
    high: "Высокая", medium: "Средняя", low: "Низкая",
    noTerm: "Без отсрочки", termWorks: "Отсрочка работает", payEarly: "Платите раньше срока",
  },
  hints: {
    cccFast: "Деньги оборачиваются быстро",
    cccControl: "Держите под контролем",
    cccStretched: "Оборот денег растянут",
    stockSleeping: "На складе спят деньги",
    stockShortage: "Риск встать без товара",
    stockOk: "Запас соответствует обороту",
    recCredit: "Вы кредитуете своих клиентов",
    recFast: "Деньги собираются быстрее срока",
    recOk: "Сроки соблюдаются",
    roiGood: "Капитал работает эффективно",
    roiGrow: "Есть куда расти",
    roiTied: "В обороте связано слишком много денег",
    supNoTerm: "Закупки оплачиваются сразу — цикл финансируете вы",
    supWorks: "Часть цикла финансирует поставщик",
    supUnused: "Бесплатные деньги поставщика не используются",
  },
  presets: { distrib: "Дистрибуция", retail: "Розница", production: "Производство" },
};

const UZ: typeof RU = {
  signals: {
    ccc: "Pul aylanish tsikli",
    stock: "Zaxiralar",
    receivables: "Debitorlik qarzi",
    roi: "Kapital qaytimi",
    supplier: "Yetkazib beruvchilar",
  },
  states: {
    strong: "Kuchli", normal: "Normal", risk: "Tavakkal",
    excess: "Ortiqcha", deficit: "Tanqislik", ok: "Normada",
    betterThanNorm: "Normadan yaxshi",
    high: "Yuqori", medium: "Oʻrtacha", low: "Past",
    noTerm: "Muhlatsiz", termWorks: "Muhlat ishlaydi", payEarly: "Muddatdan oldin toʻlaysiz",
  },
  hints: {
    cccFast: "Pul tez aylanadi",
    cccControl: "Nazoratda ushlab turasiz",
    cccStretched: "Pul aylanishi choʻzilgan",
    stockSleeping: "Omborda pul uxlab yotadi",
    stockShortage: "Tovarsiz qolish tavakkali",
    stockOk: "Zaxira aylanmaga mos",
    recCredit: "Siz mijozlaringizni kreditlayapsiz",
    recFast: "Pul muddatdan tezroq yigʻiladi",
    recOk: "Muddatlarga rioya qilinadi",
    roiGood: "Kapital samarali ishlaydi",
    roiGrow: "Oʻsishga joy bor",
    roiTied: "Aylanmada juda koʻp pul bogʻlanib qolgan",
    supNoTerm: "Xaridlar darhol toʻlanadi — tsiklni siz moliyalashtirasiz",
    supWorks: "Tsiklning bir qismini yetkazib beruvchi moliyalashtiradi",
    supUnused: "Yetkazib beruvchining bepul puli ishlatilmayapti",
  },
  presets: { distrib: "Distribyutsiya", retail: "Chakana savdo", production: "Ishlab chiqarish" },
};

export type CalcStrings = typeof RU;

export function calc(locale: Locale): CalcStrings {
  return locale === "uz" ? UZ : RU;
}
