import type { Case, Faq, Tariff } from "../types";
import * as ru from "../blocks";

/**
 * УЗБЕКСКАЯ ВЕРСИЯ ТЕКСТОВ САЙТА.
 *
 * Приём: объект русской версии разворачивается спредом, поверх переопределяются
 * только текстовые поля. Так гарантируется одинаковая форма данных с русской
 * версией и не дублируются служебные поля — брифы к изображениям, пропорции,
 * slug, числовые значения и адреса ссылок. Брифы намеренно остаются
 * по-русски: это задание дизайнеру, а не текст сайта, наружу они не выводятся.
 *
 * Перевод смысловой, не дословный. Обращение — на «siz». Диакритика oʻ/gʻ.
 */

export const contacts = {
  ...ru.contacts,
  address: "Toshkent, Abdulla Qahhor koʻchasi 56A, Ventum Plaza biznes markazi, 6-qavat, 602-ofis",
  legal: "BIS · 2019 yildan SAP joriy etish va qoʻllab-quvvatlash",
};

export const nav = [
  { label: "SAP Business One", href: "/sap-business-one" },
  { label: "SAP S/4HANA", href: "/sap-s-4hana" },
  { label: "Xizmatlar", href: "/services" },
  { label: "Loyihalar", href: "/portfolio" },
  { label: "Kompaniya haqida", href: "/aboutus" },
  { label: "Blog", href: "/blog" },
  { label: "Aloqa", href: "/contacts" },
];

export const navHome = [
  { label: "Muammolar", href: "/#pain" },
  { label: "Yechim", href: "/#solution" },
  { label: "Qanday joriy etamiz", href: "/#process" },
  { label: "Loyihalar", href: "/#cases" },
  { label: "Formatlar", href: "/#pricing" },
  { label: "Savollar", href: "/#faq" },
];

export const navSecondary = [
  { label: "SAP Akademiya", href: "/courses" },
  { label: "Vakansiyalar", href: "/vacancy" },
  { label: "Ishlab chiqarish uchun ERP", href: "/production" },
  { label: "Ulgurji savdo uchun ERP", href: "/wholesale-trade" },
  { label: "Distribyutsiya uchun ERP", href: "/distribution" },
  { label: "Chakana savdo uchun ERP", href: "/retail-trade" },
];

// ── 01. ОФФЕР ───────────────────────────────────────────────────────────────
export const hero = {
  ...ru.hero,
  eyebrow: "2019 yildan Oʻzbekistonda SAP joriy etamiz",
  h1: "Excel, 1C va oʻnlab chat oʻrniga bitta tizim",
  h1Plain: "Bitta tizim — ",
  h1Accent: "Excel, 1C va oʻnlab chat oʻrniga",
  lead:
    "Buyurtma va xodim koʻpaygan sari jadvallar bardosh bermay qoʻyadi. SAP moliya, ombor, xarid va sotuvni **bitta tizimga** yigʻadi — va siz oy oxirida emas, **haqiqiy foydani istalgan paytda** koʻrasiz.",
  cta: "1 kunda hisob-kitob olish",
  ctaSecondary: "Avval qancha yoʻqotayotganimni hisoblash",
  facts: [
    { value: "35+", label: "Oʻzbekistonda SAP joriy etilgan loyiha" },
    { value: "2019", label: "yildan avtomatlashtirish bozorida" },
    { value: "$2M+", label: "jamoa boshqargan SAP loyihalari" },
  ],
  badgeOnImg: { value: "$2M+", label: "jamoa boshqargan SAP loyihalari" },
};

// ── 02. МОСТИК ──────────────────────────────────────────────────────────────
export const bridge = {
  text:
    "Bu — saytning prototipi. Bu yerda rang ham, fotosurat ham yoʻq — faqat tuzilma va maʼno. Shu koʻrinishda sayt mijozga nimani va qanday tartibda aytayotganini rasmlarga chalgʻimasdan oʻqiysiz. Dizayn matn kelishilgandan keyin qoʻshiladi.",
};

// ── 03. БОЛЬ ────────────────────────────────────────────────────────────────
export const pain = {
  kicker: "Hammasi shundan boshlanadi",
  h2: "Siz kompaniyani oʻzingiz ishonmaydigan raqamlar bilan boshqaryapsiz",
  lead:
    "Agar shu roʻyxatdan hech boʻlmasa uchtasi sizga tegishli boʻlsa, gap xodimlarning tartib-intizomida emas. Gap shundaki, kompaniyada yagona hisob tizimi yoʻq.",
  items: [
    {
      title: "Tannarx oy oxirida hisoblanadi",
      text: "U ham taxminan. Mijozga narxni **ishlab chiqarish qanchaga tushganini bilishdan oldin** aytasiz.",
    },
    {
      title: "Ombordagi qoldiq 1C va Excel bilan toʻgʻri kelmaydi",
      text: "Omborchi bir gapni, hisobot boshqasini aytadi, menejer esa **yoʻq narsani sotib qoʻyadi**. Choraklik inventarizatsiya teshikni yopadi, sababini emas.",
    },
    {
      title: "Oylik hisobot keyingi oyning 15-sanasida keladi",
      text: "Qarorni bir yarim oylik maʼlumot asosida qabul qilasiz. Bu — **orqaga qarab boshqarish**.",
    },
    {
      title: "Har bir boʻlim oʻz jadvalini yuritadi",
      text: "Sotuv — birida, ishlab chiqarish — boshqasida, buxgalteriya — uchinchisida. Ularni qoʻlda birlashtirishga **xato qilishi ham, ishdan boʻshab ketishi ham mumkin boʻlgan** odam majbur.",
    },
    {
      title: "Pul harakatsiz tovarda muzlagan, qanchasi esa nomaʼlum",
      text: "Omborda oylab joyidan jilmaydigan tovar turadi. Tizim boʻlmasa, bu shunchaki «zaxira», **muzlatilgan kapital emas**.",
    },
    {
      title: "Kompaniya oʻsdi, boshqaruv esa oʻsmadi",
      text: "Aylanma bir necha barobar oshdi, siz esa **operatsion ishni hamon oʻzingizda ushlab turasiz** — sizsiz raqamlarni hech kim yigʻmaydi.",
    },
  ],
};

// ── 04. ЦЕНА БЕЗДЕЙСТВИЯ ────────────────────────────────────────────────────
export const cost = {
  kicker: "Harakatsizlik narxi",
  h2: "Tizimsiz oʻtgan har oy pulga tushadi — faqat buning hisob-fakturasi kelmaydi",
  lead:
    "Bu mavhum gap emas. Bizga joriy etishdan oldin kelgan kompaniyalarda bu summa mana shulardan yigʻilgan.",
  items: [
    {
      title: "Muzlagan ombor",
      text: "Import va distribyutsiya kompaniyalarida harakatsiz tovarda **oylik aylanmaga teng summa** muntazam turib qoladi. Bu pul ishlamaydi.",
      source: "BIS mijozlarining ombor qoldiqlari tahlili",
    },
    {
      title: "Koʻr-koʻrona chegirma",
      text: "Aniq tannarxni bilmagan menejer chegirmani boshidan chiqarib beradi. Hajm ustida bitta zararli bitim **yoʻnalish boʻyicha yillik foydani yeb ketadi**.",
    },
    {
      title: "Tizim oʻrniga odamlar",
      text: "Hisobotlarni qoʻlda birlashtirish — mahsulot yaratmaydigan, ammo toʻlanadigan soatlar. Va tavakkal: **bilim egasi bilimi bilan birga ketadi**.",
    },
    {
      title: "Qoʻldan ketgan buyurtmalar",
      text: "Mijoz qimmatligi uchun emas, **muddatni aytib bera olmaganingiz uchun** ketadi. Muddat aniqligi — mahsulotning bir qismi.",
    },
    {
      title: "Kechikkan qarorlar",
      text: "Hisobot bir yarim oy yurgan paytda siz muammoni oldini olish emas, **allaqachon yuz bergan** holatga javob berasiz.",
    },
    {
      title: "Oʻsish chegarasi",
      text: "Tizimsiz miqyoslash **biznes egasiga borib taqaladi**. Ikkinchi zavod yoki yangi hududni operatsion jihatdan shunchaki koʻtara olmaysiz.",
    },
  ],
  cta: "Qancha pul harakatsiz turganini hisoblash",
};

// ── 05. РЕШЕНИЕ ─────────────────────────────────────────────────────────────
export const solution = {
  ...ru.solution,
  kicker: "Biz nima qilamiz",
  h2: "SAP — buxgalteriya uchun programma emas. Bu biznesingiz haqidagi yagona haqiqat",
  body: [
    "Bularning bari oltita alohida jadval emas, bitta uzluksiz jarayon.",
    "Menejer buyurtmani qabul qildi — ishlab chiqarish topshiriqni darhol koʻradi, ombor nima yetishmayotganini koʻradi, siz esa bundan qancha foyda olishingizni koʻrasiz. Oy oxirida emas. Hozir.",
  ],
  compare: {
    ...ru.solution.compare,
    h3: "Excel va 1C SAP Business One bilan qiyoslanganda",
    note: "Biznes egalari birinchi uchrashuvda eng koʻp aytadigan vazifalar boʻyicha qiyos",
    rows: [
      {
        task: "Mahsulot tannarxi",
        old: "Iqtisodchi oy oxirida oʻz uslubi bilan hisoblaydi. Tekshiradigan odam yoʻq.",
        neu: "Har bir buyurtma boʻyicha xomashyo, ish va qoʻshimcha xarajatlar bilan avtomatik hisoblanadi.",
      },
      {
        task: "Ombordagi qoldiqlar",
        old: "Maʼlumot ombor, sotuv va buxgalteriya oʻrtasida bir-biriga toʻgʻri kelmaydi.",
        neu: "Hamma uchun bitta raqam, operatsiya sodir boʻlgan payt. Buyurtma uchun zaxiralash — darhol.",
      },
      {
        task: "Oyni yopish",
        old: "10–15 kunlik qoʻlda solishtirish.",
        neu: "Bir necha kunga qisqaradi — Climadens Pro loyihasida 10 kunga.",
      },
      {
        task: "Xaridni rejalashtirish",
        old: "«Chamalab» va taʼminotchining xotirasiga tayanib.",
        neu: "MRP ishlab chiqarish rejasi va yetkazib berish muddatlariga qarab xomashyo ehtiyojini hisoblaydi.",
      },
      {
        task: "Formulalardagi xatolar",
        old: "Bitta surilgan katak butun hisobotni buzadi va buni hech kim sezmaydi.",
        neu: "Formulalar va bogʻlanishlar tizim ichida qotirilgan, foydalanuvchi ularni buza olmaydi.",
      },
      {
        task: "Kompaniyaning oʻsishi",
        old: "Yangi ombor yoki yuridik shaxs = yangi fayl va yangi tartibsizlik.",
        neu: "Xuddi shu tizimga yana bitta kontur sifatida qoʻshiladi.",
      },
    ],
  },
};

// ── 06. ПРОДУКТЫ ────────────────────────────────────────────────────────────
export const products = {
  kicker: "Sizga aynan nima toʻgʻri keladi",
  h2: "SAPning ikki yechimi. Tanlov dasturga ajratilgan budjetga emas, miqyosga bogʻliq",
  lead:
    "Birinchi uchrashuvda sizga hali erta yoki keraksiz boʻlsa, buni ochiq aytamiz. Keragidan ortiqni sotish — muvaffaqiyatsiz loyiha va salbiy tavsiya olish demak.",
  items: [
    {
      name: "SAP Business One",
      for: "Kichik va oʻrta biznes: ishlab chiqarish, distribyutsiya, ulgurji va chakana savdo",
      text: "BISning asosiy mahsuloti. Moliya, ombor, xarid, sotuv, ishlab chiqarish va tannarx **bitta tizimda**. **Joriy etishlarimizning 90%** — aynan shu.",
      marks: ["Konturlar boʻyicha bosqichma-bosqich ishga tushirish", "10 foydalanuvchidan", "Oʻz serveringizda yoki bulutda"],
    },
    {
      name: "SAP S/4HANA",
      for: "Murakkab tuzilmali yirik korxonalar va holdinglar",
      text: "Katta hajmdagi maʼlumotlarda **real vaqtdagi tahlil**, bir nechta yuridik shaxs va ishlab chiqarish maydonchasi.",
      marks: ["Bir nechta yuridik shaxs", "Real vaqtdagi tahlil", "Tarmoq modullari"],
    },
  ],
  modules: {
    h3: "Tizim nimani qamrab oladi",
    items: [
      "Moliya va buxgalteriya",
      "Ombor va zaxiralarni boshqarish",
      "Xarid va taʼminot",
      "Ishlab chiqarish va tannarx",
      "Sotuv va CRM",
      "Tahlil va hisobotlar",
      "Servis va xizmat koʻrsatish",
      "Xodimlar maʼlumotlari",
    ],
  },
};

// ── 07. ОТРАСЛИ ─────────────────────────────────────────────────────────────
export const industries = {
  ...ru.industries,
  kicker: "Tarmoq tajribasi",
  h2: "Sizning jarayoningizdan biz allaqachon oʻtganmiz — uni sizning hisobingizdan oʻrganmaymiz",
  lead:
    "Tarmoq tajribasi tekshiruv bosqichini qisqartiradi: tor joyingiz qayerda ekanini siz aytishdan oldin bilamiz.",
  groups: [
    {
      name: "Ishlab chiqarish",
      items: [
        "Qurilish materiallari",
        "Poʻlat va polimer quvurlar",
        "Toʻqimachilik",
        "Alyuminiy kompozit panellar",
        "Polimer qadoqlash",
        "Poligrafiya",
        "Maishiy texnika",
        "Sanoat ventilyatsiyasi",
      ],
    },
    {
      name: "Distribyutsiya va ulgurji savdo",
      items: [
        "Santexnika, nasoslar, isitish tizimlari",
        "Mebel furniturasi",
        "Mobil aksessuarlar",
        "Qurilish asboblari",
        "Keng isteʼmol tovarlari",
        "Shinalar",
      ],
    },
    {
      name: "Chakana savdo",
      items: ["Doʻkonlar tarmogʻi", "Toʻqimachilik va kiyim", "Kosmetika", "Oziq-ovqat"],
    },
  ],
};

// ── 08. КЕЙСЫ ───────────────────────────────────────────────────────────────
export const cases: Case[] = [
  {
    ...ru.cases[0],
    industry: "Injenerlik santexnikasi distribyutsiyasi",
    scale: "Climadens, Pilsa, Grundfos, Uterm, Warmhaus rasmiy dileri",
    intro:
      "Isitish tizimlari va santexnika savdosida SAP orqali sotuvni +15% ga oshirish va hisobot muddatini 10 kunga qisqartirish keysi. Natijalar bilan tanishing!",
    before: [
      "Zaxiralarni qoʻlda boshqarish: xatolar, kechikishlar, foyda yoʻqotish",
      "Maʼlumot kiritish uzoq va noqulay, pozitsiyalar takrorlanadi",
      "Boʻlimlar oʻrtasida yagona ishlash tizimi yoʻq",
      "Davrni yopish nomaqbul darajada koʻp vaqt olardi",
    ],
    after: [
      { value: "+15%", label: "sotuv oʻsishi" },
      { value: "+15%", label: "mijozlar bazasi oʻsishi" },
      { value: "−10 kun", label: "davrni yopish muddati" },
      { value: "−10–15%", label: "xodimlarni boshqarish xarajatlari" },
    ],
  },
  {
    ...ru.cases[1],
    industry: "Qurilish materiallari ishlab chiqarish, toʻliq tsikl",
    scale: "15 000 xil mahsulot · 300 dan ortiq xodim · 2016 yildan",
    intro:
      "Qurilish materiallari zavodida SAP orqali zaxira aylanishini 32% ga oshirish va ombor nelikvidini 28% ga kamaytirish keysi. Natijalarni ko‘ring!",
    before: [
      "15 000 nomenklatura pozitsiyasi yagona tizimdan tashqarida",
      "Har bir mahsulot turi boʻyicha tannarx shaffof emas",
      "Xomashyo rejasi hisob-kitobga emas, taʼminotchining tajribasiga tayanadi",
      "Xomashyo va tayyor mahsulot qoldiqlari oy oxirida qoʻlda yigʻilardi",
    ],
    after: [
      { value: "+32%", label: "zaxira aylanishining oʻsishi" },
      { value: "−28%", label: "omborda harakatsiz tovarning qisqarishi" },
      { value: "15 000", label: "tizim boshqaruvidagi mahsulot turi" },
      { value: "300+", label: "xodim yagona konturda ishlaydi" },
    ],
  },
  {
    ...ru.cases[2],
    industry: "Mebel tarmogʻi uchun yarim tayyor mahsulot ishlab chiqarish",
    scale: "Shpon listlari va mijoz oʻlchamiga koʻra eshik ishlab chiqarish",
    intro:
  "Mebel va eshik ishlab chiqarishda ofis va sexni SAP bilan birlashtirish, MRP hamda avto-tannarx hisobi keysi. 3 oyda olingan natijalar bilan tanishing!",
    before: [
      "Ofis va ishlab chiqarish bogʻlanmagan: buyurtma tsexga kechikib yetardi",
      "Buyurtma boʻyicha foyda shaffof emasdi",
      "Tannarx qoʻlda hisoblanardi",
      "Mijozlar, toʻlovlar va qarzdorlik boʻyicha statistika yoʻq",
    ],
    after: [
      { value: "Onlayn", label: "buyurtma darhol ishlab chiqarishga tushadi" },
      { value: "Avto", label: "buyurtma boʻyicha tannarx hisobi" },
      { value: "MRP", label: "xomashyo va bajarish muddatlari hisobi" },
      { value: "3 oy", label: "mijoz samarani koʻrgan muddat" },
    ],
    quote: {
      text:
        "Ofis va ishlab chiqarish toʻliq integratsiyalashdi. Endi buyurtmalar darhol tizimda koʻrinadi, barcha boʻlimlar bir maromda ishlaydi, foyda va tannarx esa kimningdir xotirasida emas, tizimda koʻrinib turadi.",
      author: "Lutfillo, BRAUF Wood rahbari",
    },
  },
  {
    ...ru.cases[3],
    industry: "Antiradarlar chakana va B2B distribyutsiyasi",
    scale: "B2B mijozlar bilan ishlaydigan doʻkonlar tarmogʻi va ombor",
    intro:
      "Neoline bilan trening dasturi doirasida tanishib qoldik, bir muncha vaqtdan soʻng esa kompaniya oʻzi aloqaga chiqdi. Antiradarlar bozori kengayib, koʻchalar kameraga toʻlib borayotgan davr edi. Bozor oʻsib, eski tizim yangi jarayonlar va biznes talablariga javob berolmay qolayotgandi.",
    before: [
      "Doʻkonlar boshqa doʻkonlardan buyurtma qabul qilib, ularni omborga Telegram orqali qoʻlda uzatishardi",
      "Omborchi oʻnlab buyurtmani tahlil qilib, oʻzining dasturiga qoʻlda kiritishga majbur edi — bu koʻp vaqt olardi va xatolarga olib kelardi",
      "B2B mijozlar uchun bonuslarni rahbarlar oʻzlari hisoblashardi, bu koʻp vaqt olib, bilinar-bilinmas xatoliklarga sabab boʻlardi",
      "Bozor va buyurtmalar hajmi oʻsgani sari eski tizim bunga bardosh berolmay qolayotgandi",
    ],
    after: [
      { value: "Veb-ilova", label: "doʻkon xodimlari uchun, SAP bilan integratsiyalangan" },
      { value: "Mobil ilova", label: "ombor xodimlari uchun, SAP bilan integratsiyalangan" },
      { value: "Avto", label: "mijozlar bonusi boʻyicha hisobotlar shakllanishi" },
      { value: "Tezlashdi", label: "buyurtmalarni qayta ishlash va savdo tezligi" },
    ],
    quote: {
      text:
        "Korxona rahbarlari qoʻlga kiritgan yutuqlari orasida xotirjamlik va vaqtdan yutganlarini alohida taʼkidlashdi.",
      author: "Neoline rahbarlari",
    },
    img: {
      brief:
        "Neoline doʻkoni yoki ombori manzarasi — smartfon yoki planshet bilan ishlayotgan xodim, tovar javonlari fonida, tabiiy yorugʻlik, jonli chakana savdo hissi.",
    },
  },
  {
    ...ru.cases[4],
    client: "Krupasnab",
    industry: "Rossiyadan don-dun oziq-ovqat mahsulotlarini import qilish",
    scale: "Oʻz bozorining 70% ulushini egallagan yetakchi kompaniya",
    intro:
      "Rahbar Murodjon aka BIS haqida «Raqamlashtirish» podkastidan eshitib, oʻzi aloqaga chiqdi. Bir-ikki uchrashuvdan soʻng loyihani boshlashga kelishdik.",
   before: [
  "Hisob-kitoblarni Google Sheets’da oʻzlari yuritishardi — bu koʻp vaqt olardi va strategik ishlarga vaqt qolmasdi",
  "Rahbar safarda boʻlganda ham hisob-kitob uchun noutbukdan judo boʻlolmasdi",
  "Oʻsayotgan korxonaning maʼlumotlari kattalashgan sari jadvalga ishonmay, kattalashishdan xavotirlanishardi",
  "Taʼminot, ombor va moliya boʻyicha yagona koʻrinish yoʻq edi — sotuvchilar buyurtmani toʻliq ishonch bilan qabul qila olmasdi",
],
    after: [
      { value: "Mobil ilova", label: "orqali omborchi tovarni vaqtida kirim qiladi" },
      { value: "Avto", label: "Rossiyaga buyurtmalar va qoʻshimcha xarajatlar hisobi" },
      { value: "Bir zumda", label: "Balans va Foyda-zarar hisobotlari" },
      { value: "70%", label: "bozor ulushiga ega yetakchi kompaniya" },
    ],
    quote: {
      text:
        "Dastur hayotimizda nimani oʻzgartirdi desangiz — birinchi navbatda xotirjamlik va boʻsh vaqt berdi.",
      author: "Murodjon aka, Krupasnab rahbari",
    },
  },
];

export const casesMeta = {
  ...ru.casesMeta,
  kicker: "Dalillar",
  h2: "Joriy etishdan keyin kompaniyalarda nima oʻzgardi",
  lead:
    "Raqamlar tizim ishga tushgandan keyin mijozlarning oʻz hisobotlaridan olingan. Har bir loyihani mijoz kontakti bilan tasdiqlash mumkin — uchrashuvda beramiz.",
  cta: "Loyihani toʻliq koʻrish",
};

export const clients = {
  ...ru.clients,
  h3: "Bizga ishonadilar",
};

// ── 09. ПРОЦЕСС ─────────────────────────────────────────────────────────────
export const process = {
  ...ru.process,
  kicker: "Joriy etish qanday kechadi",
  h2: "SAP Activate uslubi boʻyicha olti faza. Loyiha qayerda turganini har doim bilasiz",
  lead:
    "Biz oʻz ish tartibimizni oʻylab chiqarmaymiz. SAP Activate — SAP butun dunyoda shu standart boʻyicha joriy etiladi. Har bir faza siz imzolaydigan hujjat bilan tugaydi.",
  steps: [
    {
      n: "01",
      name: "Discover",
      title: "Baholash va modelni tanlash",
      text: "Jarayonlarni koʻramiz, miqyosni baholaymiz, tanlaymiz: bulut yoki oʻz serveringiz. Shu yerda **sizga hali erta boʻlsa, ochiq aytamiz**.",
      out: "Qoʻllanilishi haqida xulosa va dastlabki smeta",
    },
    {
      n: "02",
      name: "Prepare",
      title: "Loyihaga tayyorgarlik",
      text: "Ikki tomondan loyiha jamoasini yigʻamiz, loyiha rahbarlarini tayinlaymiz, sinov konturini yoyamiz.",
      out: "Loyiha rejasi, jamoa tarkibi, bosqichlar muddatlari",
    },
    {
      n: "03",
      name: "Explore",
      title: "Fit-to-Standard",
      text: "Kalit bosqich. Jarayonlaringiz SAPning standart jarayonlari bilan solishtiriladi. Standart bilan yopish mumkin boʻlgan hamma narsani standart bilan yopamiz — **maxsus ishlanmalar qimmat turadi va yangilanishlarda buziladi**.",
      out: "Kontseptual loyiha va farqlar roʻyxati",
    },
    {
      n: "04",
      name: "Realize",
      title: "Sozlash va sinovdan oʻtkazish",
      text: "Tizimni sozlaymiz, maʼlumotlarni koʻchiramiz va tozalaymiz, **xodimlaringiz bilan birga** bosqichma-bosqich sinaymiz.",
      out: "Sozlangan tizim va sinov bayonnomasi",
    },
    {
      n: "05",
      name: "Deploy",
      title: "Oʻqitish va ishga tushirish",
      text: "Foydalanuvchilarni rollari boʻyicha oʻqitamiz, tayyorlikni tekshiramiz, qoldiqlarni koʻchiramiz va ishchi rejimga oʻtamiz.",
      out: "Oʻqitilgan jamoa va ishlayotgan tizim",
    },
    {
      n: "06",
      name: "Run",
      title: "Qoʻllab-quvvatlash va rivojlantirish",
      text: "Birinchi haftalar muammolarini hal qilamiz, kerak joyda qayta oʻqitamiz, keyin — **soʻrov boʻyicha kuzatib borish va ishlanmalar**.",
      out: "Qoʻllab-quvvatlash reglamenti va shaxsiy konsultant",
    },
  ],
};

// ── 10. ГОТОВНОСТЬ (снятие возражения) ──────────────────────────────────────
export const readiness = {
  kicker: "Tavakkallar haqida ochiq",
  h2: "Joriy etish dastur sababli barbod boʻlmaydi. Aslida u mana nimalarga bogʻliq",
  lead:
    "Bu haqda shartnomadan keyin emas, oldin gaplashamiz. Bu shartlar boʻlmasa, loyihani keyinga surish maʼqul — aks holda toʻlaysiz, natijani esa olmaysiz.",
  items: [
    {
      title: "Birinchi shaxsning ishtiroki",
      text: "Biznes egasi yoki direktor jalb boʻlmasa, loyiha **ikkinchi oyda sur'atini yoʻqotadi**. Buni IT boʻlimiga toʻliq topshirib qoʻyib boʻlmaydi.",
    },
    {
      title: "Jarayonlarni oʻzgartirishga tayyorlik",
      text: "SAP standarti yaxshiroq ishlaydigan joyda «biz doim shunday qilganmiz»dan voz kechish kerak boʻladi. Eski tartibsizlikka moslashtirish — **hech narsani oʻzgartirmaslikning eng qimmat usuli**.",
    },
    {
      title: "Toza maʼlumotlar",
      text: "Nomenklatura takrorlari va notoʻgʻri qoldiqlar yuklashdan oldin tozalanishi kerak. Bu — **loyiha budjetining 10–15%**, va bu bosqichni oʻtkazib boʻlmaydi.",
    },
    {
      title: "Oʻqitishga budjet",
      text: "**Budjetning kamida 15%**. Rollar boʻyicha oʻqitish tizimni oʻzlashtirish vaqtini qariyb 30% qisqartiradi — **bu yerda tejash joriy etishga qarshilikka aylanadi**.",
    },
    {
      title: "Ichkarida superfoydalanuvchilar",
      text: "Har bir boʻlimda tizimni boshqalardan chuqurroq oʻzlashtirib, hamkasblariga yordam beradigan oʻz odami kerak. Ularni biz tayyorlaymiz.",
    },
    {
      title: "Toʻgʻri hamkor",
      text: "Integrator tanlashdagi xato **dastur zoʻr boʻlsa ham loyihani choʻktiradi**. Tarmoq loyihalari va mijoz kontaktlarini soʻrang — faqat bizdan emas, har qanday pudratchidan.",
    },
  ],
  cta: "Joriy etishga tayyorlik chek-listini yuklab olish",
  ctaNote: "PDF, 12 band. Har qanday integrator bilan gaplashishdan oldin oʻzingizni tekshirib koʻring",
};

// ── 11. ПОЧЕМУ BIS ──────────────────────────────────────────────────────────
export const why = {
  ...ru.why,
  kicker: "Nega BIS",
  h2: "Ishlab chiqarish va distribyutsiyada oʻzi ishlagan hamkor",
  stats: [
    { value: "35+", label: "SAP joriy etilgan loyiha" },
    { value: "10", label: "sertifikatlangan mutaxassis" },
    { value: "$2M+", label: "jamoa boshqargan SAP loyihalari" },
    { value: "$200K", label: "ekspertizani rivojlantirishga sarflangan" },
  ],
  points: [
    {
      title: "Faqat SAP boʻyicha ixtisoslashuv",
      text: "Biz «har qanday avtomatlashtirish» bilan shugʻullanmaymiz. **Jamoaning butun amaliyoti — SAP Business One va S/4HANA**: litsenziyalash, joriy etish, integratsiyalar va ishga tushgandan keyingi kuzatib borish.",
    },
    {
      title: "Biz modullar tilida emas, biznes tilida gaplashamiz",
      text: "Loyihalar rahbarining ortida **aylanmasi $1M+ boʻlgan distribyutsiyada CEO tajribasi**, asoschida — **ACCA malakasi** bor. Gap tranzaksiyalar haqida emas, pul haqida boradi.",
    },
    {
      title: "Oʻz ishlanmalarimiz",
      text: "Backend .NET/C# da, integratsiyalar SAP Service Layer API orqali, HANAda soʻrovlarni optimallashtirish. Saytingiz, kassalaringiz yoki bank bilan integratsiyani **oʻzimiz qilamiz**.",
    },
    {
      title: "Tez javob berish guruhi",
      text: "Jiddiy uzilishda **konsultant maydonchaga chiqadi**. Ishlab chiqarish uchun tizimning toʻxtashi — tsexning toʻxtashi.",
    },
  ],
};

export const team = {
  ...ru.team,
  kicker: "Jamoa",
  h2: "Siz bilan aynan shu odamlar ishlaydi — nomsiz joriy etish boʻlimi emas",
  people: [
    { name: "Ergashev Ahmadjon", role: "Asoschi, CEO", note: "$2M dan ortiq summadagi SAP ERP loyihalarini boshqargan. ACCA sertifikatlangan mutaxassisi" },
    { name: "Zairov Sardorjon", role: "SAP Business One loyihalari rahbari", note: "Aylanmasi $1M+ boʻlgan distribyutsiya biznesida CEO tajribasi" },
    { name: "Mavlyanov Jasur", role: "SAP konsultanti, loyiha menejeri", note: "Biznes jarayonlarini SAP Business One ga koʻchirish va boʻlimlar oʻrtasida maʼlumot almashinuvini integratsiyalash" },
    { name: "Yaqubov Odilbek", role: "SAP konsultanti, loyiha menejeri", note: "Biznes jarayonlarini tizimlashtirish, avtomatlashtirish va raqamlashtirish" },
    { name: "Kamalov Bunyod", role: "Backend dasturchi", note: "SAP Service Layer API orqali integratsiyalar, .NET/C#, HANAda SQL optimizatsiyasi" },
    { name: "Usmonaliev Nozimjon", role: "Software Engineer", note: "FinTech, ERP, WMS va TMS yoʻnalishlarida miqyoslanadigan yechimlar" },
  ],
};

// ── 12. ТАРИФЫ ──────────────────────────────────────────────────────────────
export const pricing = {
  ...ru.pricing,
  kicker: "Ish formatlari",
  h2: "Loyiha hajmi soʻrov qoldirishdan va qoʻngʻiroqdan oldin ayon",
  lead:
    "Ishlar tarkibi foydalanuvchilar soni, tarmoq xususiyatlari va integratsiyalar hajmiga bogʻliq. Quyida — BIS loyihalarni olib boradigan uchta format. Bepul auditdan keyin oʻz konturingiz uchun qatʼiy smeta olasiz.",
  tariffs: [
    {
      id: "start",
      name: "Start",
      for: "Distribyutsiya va savdo, 15 foydalanuvchigacha. Ombor, xarid, sotuv va moliya kerak.",
      term: "3–4 oy",
      includes: [
        "Tekshiruv va kontseptual loyiha",
        "Moliya, ombor, xarid, sotuv",
        "Maʼlumotnomalarni koʻchirish va tozalash",
        "Foydalanuvchilarni rollari boʻyicha oʻqitish",
        "Ishga tushgandan keyin 3 oy qoʻllab-quvvatlash",
      ],
    },
    {
      id: "production",
      name: "Ishlab chiqarish",
      for: "Ishlab chiqarish kompaniyalari. Tannarx, ishlab chiqarish buyurtmalari va xomashyo rejasi kerak.",
      term: "4–6 oy",
      popular: true,
      includes: [
        "«Start» paketidagi hammasi",
        "Ishlab chiqarish buyurtmalari va spetsifikatsiyalar",
        "Faktik tannarx hisobi",
        "Materiallarga ehtiyojni rejalashtirish (MRP)",
        "Mavjud tizimlar bilan integratsiya",
        "6 oy qoʻllab-quvvatlash va shaxsiy konsultant",
      ],
    },
    {
      id: "holding",
      name: "Holding",
      for: "Bir nechta yuridik shaxs, maydoncha yoki hudud. Konsolidatsiya va uzluksiz tahlil kerak.",
      term: "6 oydan",
      includes: [
        "«Ishlab chiqarish» paketidagi hammasi",
        "Bir nechta yuridik shaxs va konsolidatsiya",
        "Jarayoningizga moslangan tarmoq ishlanmalari",
        "Integratsiyalarni toʻliq ishlab chiqish",
        "Ajratilgan tez javob berish guruhi",
        "Tizimni kuzatib borish va rivojlantirish",
      ],
    },
  ] as Tariff[],
  guarantee: {
    title: "Toʻlashdan oldin nima olasiz",
    items: [
      "Jarayonlarning bepul auditi va xulosa — biz bilan ishlamaslikka qaror qilsangiz ham",
      "Shartnoma imzolashdan oldin qatʼiy smeta va bosqichlar rejasi",
      "Fazalar boʻyicha toʻlov: har biri siz qabul qiladigan hujjat bilan yopiladi",
      "Joriy etish hozir sizga foydali boʻlmasa — ochiq rad javobi",
    ],
  },
};

// ── 13. FAQ ─────────────────────────────────────────────────────────────────
export const faq: { kicker: string; h2: string; items: Faq[] } = {
  kicker: "Savollar",
  h2: "Qarorga kelishdan oldin nima soʻraladi",
  items: [
    {
      q: "Yarim yil — uzoq. Shu vaqt davomida toʻlab, hech nima koʻrmaymizmi?",
      a: "Yoʻq, va bu biz uchun prinsipial masala. Biz butun tizimni bir vaqtda ishga tushirmaymiz: birinchi bosqichda siz hozir pul yoʻqotayotgan konturni olamiz — koʻpincha bu ombor va tannarx. U butun loyiha tugashidan oldin ishlay boshlaydi, qolgan konturlar esa jamoa birinchisini oʻzlashtirgach qoʻshiladi. Toʻlov fazalar boʻyicha: har biri siz qabul qiladigan hujjat bilan yopiladi va har fazadan keyin davom etish yoki toʻxtash haqida oʻzingiz qaror qilasiz.",
    },
    {
      q: "Joriy etish qancha vaqt oladi?",
      a: "Distribyutsiya va savdo — 3–4 oy. Ishlab chiqarish — 4–6 oy. Bir nechta yuridik shaxsli holding — 6 oydan. Muddat maʼlumotlaringiz holatiga juda bogʻliq: maʼlumotnomalar tartibda boʻlsa, loyiha tezroq boradi.",
    },
    {
      q: "Bu aslida qanchaga tushadi?",
      a: "Budjet SAP litsenziyalari, joriy etish ishlari, infratuzilma va oʻqitishdan yigʻiladi. Oʻqitish — budjetning kamida 15%, maʼlumotlarni koʻchirish — 10–15%. Aniq smetani bepul auditdan keyin, shartnoma imzolashdan oldin olasiz.",
    },
    {
      q: "Bizda allaqachon 1C bor. Nega almashtirish kerak?",
      a: "1C buxgalteriya va mahalliy hisobotlarni yaxshi yopadi. SAP boshqa vazifani hal qiladi: ishlab chiqarish va tannarxni boshqarish, xomashyoni rejalashtirish, bir nechta yuridik shaxsning bitta konturda ishlashi. Agar ogʻriqli joyingiz faqat buxgalteriya hisobi boʻlsa, almashtirish kerak emasligini ochiq aytamiz.",
    },
    {
      q: "Oʻz jarayonlarimizni buzishga toʻgʻri keladimi?",
      a: "Qisman ha, va bu ongli qaror. Fit-to-Standard bosqichida jarayonlaringizni SAP standarti bilan solishtiramiz. Standart yaxshiroq boʻlgan joyda unga oʻtamiz. Sizning xususiyatingiz bozorda ustunlik beradigan joyda tizimni moslashtiramiz.",
    },
    {
      q: "Xodimlar tizimni qabul qilmasa nima boʻladi?",
      a: "Bu har qanday joriy etishning asosiy tavakkali va u boshqariladi. Oʻqitish «hammaga bir xil» emas, rollar boʻyicha boradi, har bir boʻlimda superfoydalanuvchi tayyorlaymiz. Rollar boʻyicha oʻqitish oʻzlashtirish vaqtini qariyb 30% qisqartiradi.",
    },
    {
      q: "Natijaga kafolat berasizmi?",
      a: "Shartnomada ish hajmi, fazalar muddatlari va har fazani qabul qilish mezonlarini qatʼiy belgilaymiz. Foydaning aniq foizda oʻsishini hech kim kafolatlab bera olmaydi — u sizning qarorlaringizga ham bogʻliq. Biz kafolatlaydigani: ishlayotgan tizim, oʻqitilgan odamlar va ishga tushgandan keyingi qoʻllab-quvvatlash.",
    },
    {
      q: "Ishga tushgandan keyin ham ishlaysizmi?",
      a: "Ha. Qoʻllab-quvvatlash paketga 3–6 oyga kiradi, keyin — kuzatib borish shartnomasi boʻyicha: shaxsiy konsultant, soʻrov boʻyicha ishlanmalar, jiddiy uzilishlarda tez javob berish guruhining chiqishi.",
    },
    {
      q: "Biz kichik kompaniyamiz. Bizga hali erta emasmi?",
      a: "Mezon — aylanma emas, murakkablik. Agar ishlab chiqarishingiz, bir nechta omboringiz, keng nomenklaturangiz boʻlsa yoki qoldiqlar allaqachon toʻgʻri kelmasa — erta emas. Agar biznes oddiy va hisob bitta jadvalga sigʻsa — erta, va biz shundoq aytamiz.",
    },
  ],
};

// ── 14. ФИНАЛ ───────────────────────────────────────────────────────────────
export const finalCta = {
  h2: "Jarayonlarning bepul auditidan boshlang",
  lead:
    "Bitta uchrashuvda qayerda pul yoʻqotayotganingizni tahlil qilamiz va bu tizimda qanday koʻrinishini koʻrsatamiz. 60 slaydlik taqdimotlarsiz.",
  bullets: [
    "Jarayonlaringiz va yoʻqotish nuqtalari tahlili",
    "SAP Business One ni sizning tarmogʻingiz misolida koʻrsatish",
    "Budjet va muddatlarning dastlabki hisobi",
    "Yozma xulosa — har qanday holatda sizda qoladi",
  ],
  cta: "Auditga yozilish",
  alt: "Yoki Zoomdagi ochiq uchrashuvga keling — har payshanba 16:00 da",
  altCta: "Payshanbaga joy olish",
};

export const footer = {
  ...ru.footer,
  navTitle: "Boʻlimlar",
  legalTitle: "Hujjatlar",
  legal: [
    { label: "Maxfiylik siyosati", href: "#popup:policy" },
    { label: "Kompaniya rekvizitlari", href: "#popup:requisites" },
  ],
};
