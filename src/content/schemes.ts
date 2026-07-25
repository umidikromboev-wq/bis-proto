import type { Locale } from "./locale";
import type { IconName } from "@/components/design/icon";

/**
 * Тексты смысловых схем — цепочки процесса и состояния потока данных.
 *
 * Раньше жили внутри компонентов схем. Вынесены сюда, потому что это текст,
 * который читает посетитель, а не разметка: его правит заказчик и переводят.
 */
type Stage = { icon: IconName; name: string; note: string };

const RU = {
  chain: {
    stages: [
      { icon: "partnership", name: "Заказ от клиента", note: "менеджер принял и зарезервировал" },
      { icon: "procurement", name: "Закупка сырья", note: "MRP посчитал, чего не хватит" },
      { icon: "production", name: "Производственное задание", note: "цех видит состав и срок" },
      { icon: "warehouse", name: "Движение по складу", note: "остаток обновился для всех" },
      { icon: "analytics", name: "Расчёт себестоимости", note: "пересчитался по факту списания" },
      { icon: "finance", name: "Деньги", note: "маржа по заказу видна сразу" },
    ] as Stage[],
    caption:
      "Данные вводятся один раз в начале цепочки и дальше идут по ней сами — без повторного ввода на каждом стыке.",
  },
  flow: {
    nodes: [
      { icon: "partnership", short: "Заказ" },
      { icon: "warehouse", short: "Склад" },
      { icon: "production", short: "Цех" },
      { icon: "finance", short: "Деньги" },
      { icon: "procurement", short: "Закупка" },
      { icon: "analytics", short: "Аналитика" },
    ] as { icon: IconName; short: string }[],
    before: "На каждом стыке данные вводятся заново — и расходятся.",
    after: "Данные вводятся один раз и дальше идут по цепочке сами.",
    analytics: "Аналитика",
  },
};

const UZ: typeof RU = {
  chain: {
    stages: [
      { icon: "partnership", name: "Mijozdan buyurtma", note: "menejer qabul qildi va zaxiraladi" },
      { icon: "procurement", name: "Xomashyo xaridi", note: "MRP nima yetmasligini hisobladi" },
      { icon: "production", name: "Ishlab chiqarish topshirigʻi", note: "tsex tarkib va muddatni koʻradi" },
      { icon: "warehouse", name: "Ombordagi harakat", note: "qoldiq hamma uchun yangilandi" },
      { icon: "analytics", name: "Tannarx hisobi", note: "hisobdan chiqarish fakti boʻyicha qayta hisoblandi" },
      { icon: "finance", name: "Pul", note: "buyurtma boʻyicha marja darhol koʻrinadi" },
    ] as Stage[],
    caption:
      "Maʼlumot zanjir boshida bir marta kiritiladi va keyin oʻzi zanjir boʻylab boradi — har bir tutashuvda qaytadan kiritilmaydi.",
  },
  flow: {
    nodes: [
      { icon: "partnership", short: "Buyurtma" },
      { icon: "warehouse", short: "Ombor" },
      { icon: "production", short: "Tsex" },
      { icon: "finance", short: "Pul" },
      { icon: "procurement", short: "Xarid" },
      { icon: "analytics", short: "Tahlil" },
    ] as { icon: IconName; short: string }[],
    before: "Har bir tutashuvda maʼlumot qaytadan kiritiladi — va bir-biriga toʻgʻri kelmaydi.",
    after: "Maʼlumot bir marta kiritiladi va keyin oʻzi zanjir boʻylab boradi.",
    analytics: "Tahlil",
  },
};

export function schemes(locale: Locale): typeof RU {
  return locale === "uz" ? UZ : RU;
}
