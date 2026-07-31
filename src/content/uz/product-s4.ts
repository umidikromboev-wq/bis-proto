import type { ProductPage } from "../types";
import { productS4 as ru } from "../product-s4";

/** Узбекская версия страницы продукта SAP S/4HANA. */
export const productS4: ProductPage = {
  ...ru,
  metaDescription:
    "Oʻzbekiston holdinglari va yirik korxonalari uchun SAP S/4HANA: bir nechta yuridik shaxs, konsolidatsiya, real vaqtdagi tahlil. 35+ loyiha tajribasiga ega jamoa joriy etadi.",

  hero: {
    ...ru.hero,
    eyebrow: "Mahsulot · holdinglar va yirik korxonalar uchun",
    lead:
      "Kompaniya bitta kompaniya boʻlishdan toʻxtaganda: bir nechta yuridik shaxs, maydoncha va hudud, **konsolidatsiyalangan manzarani esa bir hafta qoʻlda yigʻishadi**. S/4HANA **uchib borayotgandek hisoblaydi** — oddiy baza javob bermay qoʻygan hajmlarda.",
    cta: "S/4HANA loyihasini muhokama qilish",
    ctaSecondary: "Business One bilan qiyoslash",
    facts: [
      { value: "6 oydan", label: "loyiha muddati", note: "yuridik shaxs va maydonchalar soniga bogʻliq" },
      { value: "Real-time", label: "tranzaksion maʼlumotlarda tahlil" },
      { value: "$2M+", label: "jamoa boshqargan SAP loyihalari" },
    ],
  },

  fit: {
    ...ru.fit,
    kicker: "Ochiq chegara",
    h2: "S/4HANA uni koʻtara oladigan hammaga kerak emas",
    lead:
      "Bu qatordagi eng qimmat va eng uzoq variant. U **aylanma hajmi bilan emas, tuzilma murakkabligi bilan** oqlanadi. Tuzilma oddiy boʻlsa — Business One xuddi shu vazifani tezroq va arzonroq yopadi.",
    yes: [
      {
        title: "Bir nechta yuridik shaxs va konsolidatsiya",
        text: "Kompaniyalar guruhi, guruh ichidagi aylanmalar, hisobot har bir yuridik shaxs boʻyicha ham, butun guruh boʻyicha ham.",
      },
      {
        title: "Bir nechta ishlab chiqarish maydonchasi",
        text: "Turli joylardagi zavod yoki tsexlar, ular orasida yarim tayyor mahsulot yuradi va **uzluksiz tannarxni** koʻrish kerak.",
      },
      {
        title: "Katta hajmdagi tranzaksiyalar",
        text: "Chakana savdo tarmogʻi yoki distribyutsiya, bu yerda hozirgi tizimda hisobotlar **daqiqalarda quriladi, oyni yopish esa haftalarda**.",
      },
      {
        title: "Guruh yoki investor talablari",
        text: "MHXS boʻyicha hisobot, audit, bosh kompaniya yoki bankning hisob shaffofligiga qoʻygan talablari.",
      },
    ],
    no: [
      "Bitta yuridik shaxs va bitta maydoncha — Business One oling, budjetdagi farq bir necha barobar",
      "Kompaniya tomonidan ajratilgan loyiha jamoasi yoʻq — bunday miqyosli loyiha «yoʻl-yoʻlakay» tortilmaydi",
      "Jarayonlar tavsiflanmagan va har chorakda oʻzgaradi — avval barqarorlashtiring, keyin avtomatlashtiring",
      "Maqsad «kattalardagidek boʻlsin» — bu mumkin boʻlgan eng qimmat motivatsiya",
    ],
  },

  modules: {
    ...ru.modules,
    kicker: "Ichida nima bor",
    h2: "S/4HANA funksional konturlari",
    lead:
      "Tarkib Explore fazasida aniqlanadi: **faqat guruhning haqiqiy jarayonlarini yopadigan** narsani olamiz. Qolgani sotib olinmaydi va sozlanmaydi.",
    items: [
      {
        name: "Moliya va konsolidatsiya",
        text: "Har bir yuridik shaxs boʻyicha hisob va guruh boʻyicha konsolidatsiyalangan hisobot. Guruh ichidagi aylanmalar **avtomatik oʻzaro yopiladi**.",
        marks: ["Bir nechta yuridik shaxs", "Guruh ichidagi hisob-kitoblar", "MHXS boʻyicha hisobot"],
      },
      {
        name: "Boshqaruv hisobi va kontrolling",
        text: "Xarajat markazlari, xarajat vujudga keladigan joylar, maydonchalar orasidagi bosqichlar boʻyicha tannarx hisobi.",
        marks: ["Xarajat markazlari", "Boʻlimlar boʻyicha reja-fakt", "Uzluksiz tannarx"],
      },
      {
        name: "Ishlab chiqarish",
        text: "Bir nechta maydonchada ishlab chiqarishni rejalashtirish, zavodlar orasida yarim tayyor mahsulot koʻchishi bilan birga.",
        marks: ["Koʻp maydonchali rejalashtirish", "Quvvat va yuklanish", "Sifatni boshqarish"],
      },
      {
        name: "Yetkazib berish zanjiri",
        text: "Guruh boʻyicha talab va xaridni rejalashtirish, yirik taqsimlash markazlarida ombor logistikasini boshqarish.",
        marks: ["Talabni rejalashtirish", "Ombor logistikasi", "Tashuvlarni boshqarish"],
      },
      {
        name: "Sotuv va distribyutsiya",
        text: "Murakkab narx sxemalari, sotuv kanallari, tarmoqlar va dilerlar bilan turli shartlarda ishlash.",
        marks: ["Sotuv kanallari", "Murakkab narx sxemalari", "Shartnomalarni boshqarish"],
      },
      {
        name: "Real vaqtdagi tahlil",
        text: "Hisobotlar alohida omborga tunda yuklamasdan, **toʻgʻridan-toʻgʻri tranzaksion maʼlumotlarda** quriladi.",
        marks: ["Ichki tahlil", "Rollar boʻyicha dashbordlar", "Prognoz modellari"],
      },
    ],
  },

  scenario: {
    ...ru.scenario,
    kicker: "Guruh darajasida nima oʻzgaradi",
    h2: "Oy haftalarda emas, kunlarda yopiladi — va raqam hamma uchun bitta",
    lead:
      "Business One va S/4HANA orasidagi farq alohida operatsiyada emas, guruhni boshqarish umuman qanday koʻrinishida sezilarli.",
    steps: [
      {
        time: "Ilgari",
        title: "Hisobotni moliya direktori yigʻadi",
        text: "Har bir yuridik shaxs oʻz yuklamasini yuboradi, kimdir boshqa formatda, kimdir kechikib. **Yigʻish kunlarni oladi**, xatolar keyinchalik topiladi.",
      },
      {
        time: "Endi",
        title: "Konsolidatsiyani tizim hisoblaydi",
        text: "Maʼlumotlar bitta konturda, guruh ichidagi aylanmalar qoʻl bilan emas, qoidalar boʻyicha yopiladi. **Moliya direktori yigʻmaydi, tekshiradi**.",
      },
      {
        time: "Ilgari",
        title: "Tannarx zavod chegarasida uziladi",
        text: "Yarim tayyor mahsulot ikkinchi maydonchaga ketadi — keyin uning qiymati normativ boʻyicha hisoblanadi, chunki faktikni yigʻishga manba yoʻq.",
      },
      {
        time: "Endi",
        title: "Tannarx uzluksiz",
        text: "Zavodlararo koʻchishlar bilan birga har bir bosqichdagi faktik qiymat koʻrinadi. **Qaysi maydoncha xarajat qoʻshayotgani** tushunarli.",
      },
      {
        time: "Ilgari",
        title: "Ogʻir hisobot tunda quriladi",
        text: "Keng nomenklatura boʻyicha tahlil navbatga qoʻyiladi, rahbar tonggacha kutadi — va kechagi manzarani oladi.",
      },
      {
        time: "Endi",
        title: "Tahlil soʻrov paytida",
        text: "Hisobot joriy maʼlumotlarda quriladi. Boshqaruv qarori **keyingi uchrashuvda emas, shu uchrashuvda** qabul qilinadi.",
      },
    ],
  },

  project: {
    ...ru.project,
    note: "Mijozdan soʻrash kerak: yakunlangan S/4HANA loyihalari bormi — sahifa tasdiqlangan tajriba emas, ekspertiza sifatida yozilgan",
    kicker: "Loyiha",
    h2: "Kompaniyalar guruhida joriy etish qanday boradi",
    lead:
      "Biz butun guruhni bir vaqtda ishga tushirmaymiz. Birinchi boʻlib **pilot yuridik shaxs** boradi, unda model sinovdan oʻtadi, keyin qolganlarga tarqatiladi — bu **tavakkalni sezilarli kamaytiradi**.",
    phases: [
      { name: "Discover va miqyosni baholash", term: "4–6 hafta", text: "Guruh tuzilmasi auditi, jarayon va tizimlar inventarizatsiyasi, yoyish modelini tanlash. Natijada — xulosa va smeta." },
      { name: "Maqsadli modelni loyihalash", term: "6–10 hafta", text: "Har bir kontur boʻyicha Fit-to-Standard, butun guruh uchun yagona maʼlumotnoma va konsolidatsiya qoidalari." },
      { name: "Pilot yuridik shaxs", term: "3–4 oy", text: "Bitta korxonada sozlash, koʻchirish va ishga tushirishning toʻliq tsikli — model haqiqiy maʼlumotlarda tekshiriladi." },
      { name: "Qolgan yuridik shaxslarga tarqatish", term: "har biriga 1,5–3 oy", text: "Sinovdan oʻtgan model guruhning keyingi kompaniyalariga yoyiladi. Har bir ulanish oldingisidan qisqaroq." },
      { name: "Guruh konsolidatsiyasi va hisoboti", term: "4–8 hafta", text: "Konsolidatsiyalangan hisobotni sozlash, guruh ichidagi aylanmalarni yopish, egalar va banklar uchun hisobotlar." },
      { name: "Qoʻllab-quvvatlash va rivojlantirish", term: "doimiy", text: "Ajratilgan kuzatib borish guruhi, guruh tuzilmasi oʻzgarishlariga moslashtirish." },
    ],
  },

  faq: [
    {
      q: "Bizda kompaniyalar guruhi bor, ammo kichik. Business One yetarmikin?",
      a: "Koʻpincha yetadi. Business One bir nechta yuridik shaxs bilan ishlay oladi va agar tuzilma murakkab boʻlmasa, konsolidatsiya esa boshqaruv hisoboti darajasida kerak boʻlsa, bu arzonroq va tezroq. Chegara murakkab guruh ichidagi hisob-kitoblar, MHXS talablari va hisobotlar sekinlashadigan hajmlar paydo boʻlgan joydan oʻtadi. Auditda chegaraning qaysi tomonida ekaningizni ochiq aytamiz.",
    },
    {
      q: "S/4HANA loyihasi aslida qancha davom etadi?",
      a: "Pilot yuridik shaxs — maʼlumotlar tayyor va jamoa jalb boʻlsa 3–4 oy. Guruhga toʻliq tarqatish — bir yildan. Tuzilmani tekshirmasdan aytiladigan muddatlar — baho emas, marketing.",
    },
    {
      q: "Business One dan keyinroq S/4HANA ga oʻtish mumkinmi?",
      a: "Ha, va bu normal yoʻl: avval bitta kompaniyada tartib oʻrnatish, keyin modelni guruhga miqyoslash. Business One da sinovdan oʻtgan maʼlumotnomalar, jarayonlar va hisob mantigʻi oʻtishda tashlanmaydi — ular maqsadli modelning asosi boʻladi.",
    },
    {
      q: "Bizga oʻz IT boʻlimi kerakmi?",
      a: "S/4HANA uchun — ha, hech boʻlmasa kompaniya ichidagi tizimlar uchun javob beradigan bitta odam. Bunday odam boʻlmasa, birinchi navbatda shuni yopish kerak: bunday miqyosli loyiha faqat pudratchi tomonida yashamaydi.",
    },
    {
      q: "Oʻzbekistonning mahalliy hisoboti nima boʻladi?",
      a: "Rasmiy hisobot yoki lokalizatsiya bilan, yoki soliq hisobi uchun qoladigan 1C bilan integratsiya orqali yopiladi. Sxemani loyihalash bosqichida tanlaymiz — budjet ham, muddatlar ham unga bogʻliq.",
    },
  ],
};
