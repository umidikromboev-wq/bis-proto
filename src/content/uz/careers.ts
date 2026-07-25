import { careers as ru } from "../careers";

/** Узбекская версия страницы «Вакансии». */
export const careers = {
  ...ru,
  hero: {
    kicker: "Vakansiyalar",
    h1: "SAPni mijoz bizni keyingilarga tavsiya qiladigan darajada joriy etamiz",
    lead:
      "Biz Toshkentdagi sertifikatlangan konsultantlarning kichik jamoasimiz. Odam soni bilan emas, loyihalar bilan oʻsamiz: joriy etishni dalolatnoma topshirishgacha emas, natijagacha yetkazadiganlarni olamiz.",
  },

  why: {
    kicker: "Nega BIS",
    h2: "Ish haqidan tashqari nima olasiz",
    items: [
      { title: "Birovning tizimini qoʻllab-quvvatlash emas, haqiqiy SAP loyihalari", text: "Siz joriy etishni tekshiruvdan ishga tushirishgacha olib borasiz va umumiy navbatda tiket yopmasdan, mijozdagi natijani koʻrasiz." },
      { title: "Toʻlanadigan ekspertiza", text: "Kompaniya jamoani rivojlantirishga yiliga $30 000 dan ortiq sarflaydi: SAP sertifikatsiyalari, oʻqitish, Activate uslubiga kirish. Siz loyihalar hisobidan oʻsasiz." },
      { title: "Mijoz biznesi bilan bevosita aloqa", text: "Gap tranzaksiyalar haqida emas, biznes egasining puli va jarayonlari haqida boradi. Bu vazifalar darajasini ham, fikrlash darajasini ham oʻzgartiradi." },
      { title: "Konveyer emas, jamoa", text: "Mijoz bilan ismi bor aniq odamlar ishlaydi. Ishingiz 200 kishilik boʻlimda erib ketmaydi, koʻrinadi." },
    ],
  },

  positions: [
    {
      id: "sap-consultant",
      title: "SAP Business One konsultanti",
      type: "Toʻliq bandlik · Toshkent, ofis",
      about: "Ishlab chiqarish va distribyutsiya mijozlarida joriy etishni olib borasiz: tekshiruv, Fit-to-Standard, sozlash, foydalanuvchilarni oʻqitish.",
      need: [
        "SAP Business One joriy etish yoki qoʻllab-quvvatlashda 1 yildan tajriba",
        "Biznes jarayonlarini tushunish: ombor, xarid, sotuv, tannarx",
        "Rus va oʻzbek tillari — erkin, mijozlar bilan joyida ishlash uchun",
      ],
      plus: [
        "Stolning oʻsha tomonida — ishlab chiqarish yoki distribyutsiyada tajriba",
        "SAP sertifikatsiyasi",
      ],
    },
    {
      id: "backend-dev",
      title: "Backend dasturchi (.NET / C#)",
      type: "Toʻliq bandlik · Toshkent, ofis yoki gibrid",
      about: "SAPni saytlar, kassalar, banklar va marketpleyslar bilan Service Layer API orqali integratsiya qilasiz, HANAda soʻrovlarni optimallashtirasiz.",
      need: [
        ".NET / C# da jangovar loyihalarda 2 yildan tajriba",
        "SQL va soʻrovlarni optimallashtirish tajribasi",
        "Tashqi API bilan ishlash va birovning hujjatlarini tushunish koʻnikmasi",
      ],
      plus: [
        "ERP yoki 1C bilan integratsiya tajribasi",
        "SAP Service Layer yoki HANA bilan tanishlik",
      ],
    },
    {
      id: "project-manager",
      title: "Joriy etish loyiha menejeri",
      type: "Toʻliq bandlik · Toshkent, ofis",
      about: "Joriy etish loyihasini Activate fazalari boʻyicha ushlab turasiz: muddatlar, ikki tomondagi jamoa, har bosqichni mijoz qabul qilishi.",
      need: [
        "IT yoki joriy etish loyihalarini boshqarishda 2 yildan tajriba",
        "Faqat ijrochilarni emas, mijozning birinchi shaxsini ham yurita olish",
        "Hujjatlarda tartib: reja, smeta, qabul bayonnomalari",
      ],
      plus: [
        "ERP loyihalarida tajriba",
        "SAP Activate uslubini bilish",
      ],
    },
  ],

  process: {
    kicker: "Ishga qabul qanday kechadi",
    h2: "Murojaatdan keyin bir oy sukut saqlamasdan",
    steps: [
      { n: "01", title: "Murojaat", text: "Rezyumeni pochtaga «vakansiya» belgisi va lavozim nomi bilan yuborasiz." },
      { n: "02", title: "Qisqa suhbat", text: "15–20 daqiqa: tajriba va kutilmalarni muhokama qilamiz, loyihalar haqidagi savollaringizga javob beramiz." },
      { n: "03", title: "Texnik uchrashuv", text: "Amaliyotdan olingan haqiqiy holatni tahlil qilamiz — qogʻozdagi mavhum masalalarni emas." },
      { n: "04", title: "Taklif", text: "Shartlar, loyihalardagi rol va rivojlanish rejasi. Qarorni «qachondir» emas, kelishilgan muddatda aytamiz." },
    ],
  },

  cta: {
    ...ru.cta,
    note: "Jangovar versiyada — rezyume yuklash va Telegram maydoni bilan murojaat shakli.",
    h2: "Oʻzingizga mos lavozimni topmadingizmi?",
    text: "Agar SAP, integratsiyalar yoki joriy etishni boshqarishda kuchli boʻlsangiz — yozing. Biz loyihalar bilan oʻsamiz va kuchli odamlar uchun rol ochamiz.",
  },
};
