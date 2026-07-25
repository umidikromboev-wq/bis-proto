import { contactsPage as ru } from "../contacts-page";

/** Узбекская версия страницы «Контакты». */
export const contactsPage = {
  ...ru,
  hero: {
    kicker: "Aloqa",
    h1: "Ofisga keling yoki onlayn tahlildan boshlang",
    lead:
      "Biz Toshkentdamiz, ammo loyihalarni butun respublika boʻylab olib boramiz: tekshiruv va oʻqitish sizning maydonchangizda, qolgani — masofadan.",
  },

  channels: [
    {
      title: "Qoʻngʻiroq qilish",
      value: "+998 90 823 10 12",
      href: "tel:+998908231012",
      note: "Du–Ju, 9:00–18:00. Javob beradigan robot ham, kollmarkaz ham emas",
    },
    {
      title: "Telegramga yozish",
      value: "@bis_uz",
      href: "https://t.me/bis_uz",
      note: "Xohlagan vaqtda yozing — ish vaqtida javob beramiz",
    },
    {
      title: "Pochta",
      value: "info@bis-pro.com",
      href: "mailto:info@bis-pro.com",
      note: "Smeta soʻrovlari va tijorat taklifi uchun",
    },
  ],

  office: {
    ...ru.office,
    h2: "Ofis",
    address: "Toshkent, Abdulla Qahhor koʻchasi 56A, Ventum Plaza biznes markazi, 6-qavat, 602-ofis",
    hours: "Du–Ju, 9:00–18:00. Sha, Ya — kelishuv boʻyicha",
    parking: "Biznes markaz oldida mehmonlar uchun avtoturargoh. Kirish asosiy resepshendan, lift bilan 6-qavatga, 602-ofis.",
    mapNote: "Dizayn bosqichida bu yerda ofis belgisi va marshrut tuzish tugmasi bilan interaktiv xarita boʻladi.",
  },

  formats: {
    kicker: "Qanday boshlash",
    h2: "Birinchi suhbatning uch formati — oʻzingizga mosini tanlang",
    items: [
      {
        title: "Jarayonlarning bepul auditi",
        text: "Uchrashuv sizning maydonchangizda yoki onlayn. Qayerda pul yoʻqotayotganingizni tahlil qilamiz va tizimni sizning tarmogʻingizda koʻrsatamiz. Natijada — har qanday holatda sizda qoladigan yozma xulosa.",
        time: "1,5–2 soat",
        cta: "Auditga yozilish",
        popup: "lead" as const,
      },
      {
        title: "Zoomdagi ochiq uchrashuv",
        text: "Har payshanba 16:00 da. SAP Business One ni ishlab chiqarish va distribyutsiyaning odatiy jarayonlarida koʻrsatamiz, savollarga javob beramiz. 60 slaydlik kompaniya taqdimotisiz.",
        time: "40 daqiqa",
        cta: "Payshanbaga joy olish",
        popup: "zoom" as const,
      },
      {
        title: "Aylanma kapital hisobi",
        text: "Raqamlaringiz boʻyicha qisqa soʻrov: qoldiqlar, debitorlik qarzi, yetkazib berish va toʻlov muddatlari. Pul aylanmasi hisobi va hozir aylanmada muzlagan summani yuboramiz.",
        time: "3 daqiqa",
        cta: "Aylanma kapitalni hisoblash",
        popup: "calc" as const,
      },
    ],
  },

  requisites: {
    ...ru.requisites,
    h2: "Rekvizitlar",
    company: "BIS",
    partner: "2019 yildan SAP joriy etish va qoʻllab-quvvatlash",
    rows: [
      { label: "Yuridik shaxs va STIR", value: "mijozdan aniqlanmoqda" },
      { label: "Bank rekvizitlari", value: "mijozdan aniqlanmoqda" },
      { label: "Yuridik manzil", value: "100015, Toshkent shahri, Mirobod tumani, Abdulla Qahhor koʻchasi, 56A, 602-ofis" },
      { label: "Direktor", value: "Ergashev Ahmadjon" },
    ],
  },

  vacancies: {
    ...ru.vacancies,
    h2: "BIS da ish",
    text: "SAP konsultantlari va dasturchilarni izlayapmiz. Agar Business One yoki Service Layer API orqali integratsiyalar bilan tajribangiz boʻlsa — pochtaga «vakansiya» belgisi bilan yozing.",
  },
};
