import type { Locale } from "./locale";

/**
 * Сценарии попапа заявки.
 *
 * Кнопки на всех экранах ведут к одному действию, поэтому и форма одна.
 * Различаются заголовок, список обещаний и тег источника — по нему в Telegram
 * видно, какой блок принёс заявку.
 *
 * Раньше набор жил внутри компонента попапа. Вынесен в контент, потому что это
 * тексты страницы, а не вёрстка: их правит заказчик и они переводятся.
 */
export type LeadSource = "audit" | "zoom" | "calc" | "checklist" | "guide" | "estimate" | "contacts";

export type Scenario = {
  kicker: string;
  title: string;
  lead: string;
  submit: string;
  /** Что человек получает — показывается списком слева от полей. */
  bullets: string[];
  /** Строка под кнопкой: снимает страх «сейчас начнут звонить». */
  micro: string;
  withCompany?: boolean;
};

const RU: Record<LeadSource, Scenario> = {
  audit: {
    kicker: "Бесплатный аудит",
    title: "Разберём ваши процессы и назовём бюджет",
    lead: "Одна встреча 40–60 минут. По итогу вы получаете письменное заключение — оно остаётся у вас, даже если решите работать не с нами.",
    submit: "Записаться на аудит",
    bullets: [
      "Где в ваших процессах сейчас теряются деньги",
      "Какой контур внедрять первым именно вам",
      "Ориентир по бюджету и срокам под ваш масштаб",
      "Честный ответ, если внедрять вам пока рано",
    ],
    micro: "Ответим в рабочее время. Без автодозвона и рассылок.",
    withCompany: true,
  },
  zoom: {
    kicker: "Открытая встреча",
    title: "Zoom каждый четверг в 16:00",
    lead: "Разбираем процессы участников и показываем систему вживую. Группа небольшая — чтобы успеть разобрать каждого.",
    submit: "Занять место",
    bullets: [
      "Живой показ SAP Business One, а не слайды",
      "Разбор процессов участников встречи",
      "Ответы на вопросы по бюджету и срокам",
      "Без обязательств и продажи в лоб",
    ],
    micro: "Пришлём ссылку на встречу в Telegram или на почту.",
  },
  calc: {
    kicker: "Расчёт на ваших цифрах",
    title: "Посчитаем, во что обходится текущий учёт",
    lead: "Консультант соберёт расчёт по вашей номенклатуре и процессам: где заморожены деньги и что из этого закрывает система.",
    submit: "Получить расчёт",
    bullets: [
      "Оценка замороженных в складе денег",
      "Во что обходится закрытие периода сейчас",
      "Эффект по вашей отрасли, а не средний по рынку",
    ],
    micro: "3 минуты на заявку · ответ в Telegram или на почту.",
    withCompany: true,
  },
  checklist: {
    kicker: "Чек-лист",
    title: "Готовность к внедрению: 12 пунктов",
    lead: "Проверьте себя до разговора с любым интегратором — не только с нами. Пришлём файл в ответном сообщении.",
    submit: "Получить чек-лист",
    bullets: [
      "12 условий, без которых проект буксует",
      "На чём чаще всего срывается внедрение",
      "Что подготовить до первой встречи",
    ],
    micro: "Пришлём файл в Telegram или на почту.",
  },
  guide: {
    kicker: "Гайд",
    title: "Business One или S/4HANA",
    lead: "Где проходит граница между продуктами и как не переплатить за масштаб, который вам не нужен.",
    submit: "Получить гайд",
    bullets: [
      "Признаки, по которым видно ваш продукт",
      "Разница в бюджете и сроках проекта",
      "Когда переход с одного на другой оправдан",
    ],
    micro: "Пришлём файл в Telegram или на почту.",
  },
  estimate: {
    kicker: "Шаблон",
    title: "Структура сметы внедрения",
    lead: "Из каких статей складывается бюджет проекта и какие две обычно забывают заложить.",
    submit: "Получить шаблон",
    bullets: [
      "Полный перечень статей бюджета",
      "Доли, которые занимает каждая статья",
      "Две статьи, которые чаще всего пропускают",
    ],
    micro: "Пришлём файл в Telegram или на почту.",
  },
  contacts: {
    kicker: "Связаться",
    title: "Оставьте контакт — перезвоним",
    lead: "Расскажите в двух словах о компании и задаче. Ответит консультант, который ведёт проекты, а не оператор.",
    submit: "Отправить заявку",
    bullets: [
      "Ответ в рабочее время",
      "Разговор по существу, без скриптов",
      "Не передаём контакты третьим лицам",
    ],
    micro: "Или напишите в Telegram — ответим быстрее.",
    withCompany: true,
  },
};

const UZ: Record<LeadSource, Scenario> = {
  audit: {
    kicker: "Bepul audit",
    title: "Jarayonlaringizni tahlil qilamiz va budjetni aytamiz",
    lead: "Bitta uchrashuv 40–60 daqiqa. Natijada yozma xulosa olasiz — biz bilan ishlamaslikka qaror qilsangiz ham u sizda qoladi.",
    submit: "Auditga yozilish",
    bullets: [
      "Jarayonlaringizda hozir pul qayerda yoʻqolayotgani",
      "Aynan sizga qaysi konturni birinchi joriy etish kerak",
      "Miqyosingizga mos budjet va muddat mezoni",
      "Joriy etish hali erta boʻlsa — ochiq javob",
    ],
    micro: "Ish vaqtida javob beramiz. Avtoqoʻngʻiroq va tarqatmalarsiz.",
    withCompany: true,
  },
  zoom: {
    kicker: "Ochiq uchrashuv",
    title: "Zoom har payshanba 16:00 da",
    lead: "Qatnashchilarning jarayonlarini tahlil qilamiz va tizimni jonli koʻrsatamiz. Guruh kichik — har birini koʻrib chiqishga ulgurish uchun.",
    submit: "Joy olish",
    bullets: [
      "Slaydlar emas, SAP Business One ning jonli koʻrsatuvi",
      "Uchrashuv qatnashchilari jarayonlarining tahlili",
      "Budjet va muddatlar boʻyicha savollarga javob",
      "Majburiyatsiz va peshma-pesh sotuvsiz",
    ],
    micro: "Uchrashuv havolasini Telegram yoki pochtaga yuboramiz.",
  },
  calc: {
    kicker: "Sizning raqamlaringizda hisob",
    title: "Hozirgi hisob nimaga tushayotganini hisoblaymiz",
    lead: "Konsultant nomenklaturangiz va jarayonlaringiz boʻyicha hisob yigʻadi: pul qayerda muzlagan va bundan nimasini tizim yopadi.",
    submit: "Hisob-kitob olish",
    bullets: [
      "Omborda muzlagan pul bahosi",
      "Davrni yopish hozir nimaga tushadi",
      "Bozor boʻyicha oʻrtacha emas, sizning tarmogʻingiz boʻyicha samara",
    ],
    micro: "Soʻrov uchun 3 daqiqa · javob Telegram yoki pochtaga.",
    withCompany: true,
  },
  checklist: {
    kicker: "Chek-list",
    title: "Joriy etishga tayyorlik: 12 band",
    lead: "Har qanday integrator bilan gaplashishdan oldin oʻzingizni tekshirib koʻring — faqat biz bilan emas. Faylni javob xabarida yuboramiz.",
    submit: "Chek-listni olish",
    bullets: [
      "Loyiha toʻxtab qoladigan 12 shart",
      "Joriy etish eng koʻp nimada uzilib qoladi",
      "Birinchi uchrashuvgacha nimani tayyorlash kerak",
    ],
    micro: "Faylni Telegram yoki pochtaga yuboramiz.",
  },
  guide: {
    kicker: "Qoʻllanma",
    title: "Business One yoki S/4HANA",
    lead: "Mahsulotlar orasidagi chegara qayerdan oʻtadi va kerak boʻlmagan miqyos uchun ortiqcha toʻlamaslik yoʻli.",
    submit: "Qoʻllanmani olish",
    bullets: [
      "Sizning mahsulotingiz koʻrinadigan belgilar",
      "Loyiha budjeti va muddatlaridagi farq",
      "Biridan boshqasiga oʻtish qachon oqlanadi",
    ],
    micro: "Faylni Telegram yoki pochtaga yuboramiz.",
  },
  estimate: {
    kicker: "Shablon",
    title: "Joriy etish smetasining tuzilishi",
    lead: "Loyiha budjeti qanday moddalardan yigʻiladi va odatda qaysi ikkitasini hisobga olishni unutadilar.",
    submit: "Shablonni olish",
    bullets: [
      "Budjet moddalarining toʻliq roʻyxati",
      "Har bir modda egallaydigan ulush",
      "Eng koʻp oʻtkazib yuboriladigan ikki modda",
    ],
    micro: "Faylni Telegram yoki pochtaga yuboramiz.",
  },
  contacts: {
    kicker: "Bogʻlanish",
    title: "Kontakt qoldiring — qoʻngʻiroq qilamiz",
    lead: "Kompaniya va vazifa haqida ikki soʻzda yozing. Operator emas, loyihalarni olib boradigan konsultant javob beradi.",
    submit: "Soʻrov yuborish",
    bullets: [
      "Ish vaqtida javob",
      "Skriptlarsiz, mohiyat boʻyicha suhbat",
      "Kontaktlarni uchinchi shaxslarga bermaymiz",
    ],
    micro: "Yoki Telegramga yozing — tezroq javob beramiz.",
    withCompany: true,
  },
};

export function leadScenarios(locale: Locale): Record<LeadSource, Scenario> {
  return locale === "uz" ? UZ : RU;
}
