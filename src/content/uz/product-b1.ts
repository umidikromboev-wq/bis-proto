import type { ProductPage } from "../types";
import { productB1 as ru } from "../product-b1";

/** Узбекская версия страницы продукта SAP Business One. */
export const productB1: ProductPage = {
  ...ru,
  metaDescription:
    "Oʻzbekistonda SAP Business One joriy etish: ishlab chiqarish, ombor, tannarx va moliya bitta tizimda. Bosqichma-bosqich ishga tushirish, respublikada 35+ loyiha.",

  hero: {
    ...ru.hero,
    eyebrow: "Mahsulot · joriy etishlarimizning 90%",
    lead:
      "Excel va 1C dan oʻsib chiqqan, ammo hali holdingga aylanmagan kompaniya uchun tizim. Buyurtma, xarid, ishlab chiqarish, ombor va pul **bitta konturda** yashaydi — tannarx esa **operatsiya sodir boʻlgan paytda oʻzi hisoblanadi**.",
    cta: "Business One boʻyicha hisob-kitob olish",
    ctaSecondary: "Tizimni mening jarayonlarimda koʻrsatish",
    facts: [
      { value: "Bosqichma-bosqich", label: "birinchi kontur loyiha tugashidan oldin ishlaydi", note: "toʻliq loyiha — 4–6 oy" },
      { value: "10 dan", label: "foydalanuvchi", note: "kamrogʻi odatda iqtisodiy jihatdan oʻzini oqlamaydi" },
      { value: "35+", label: "BIS jamoasi joriy etgan SAP loyihasi" },
    ],
  },

  fit: {
    ...ru.fit,
    kicker: "Ochiq chegara",
    h2: "Business One kimga samara beradi — va kimga rad javobini beramiz",
    lead:
      "Samarani tizim emas, tizimning vazifa miqyosiga mos kelishi beradi. Moslik boʻlmasa, **foydalanmaydigan funksional uchun toʻlaysiz**.",
    yes: [
      {
        title: "Tannarx hisobi bilan ishlab chiqarish",
        text: "Spetsifikatsiyalar, texnik kartalar, bosqichlar bor. Tsex boʻyicha oyiga oʻrtacha qancha chiqqanini emas, **buyurtma haqiqatda qanchaga tushganini** bilish kerak.",
      },
      {
        title: "Keng nomenklaturali distribyutsiya",
        text: "Mingdan ortiq SKU, bir nechta ombor, partiyalar va yaroqlilik muddatlari. Bunday hajmda qoʻlda hisob **haqiqatdan farq qilishi kafolatlangan**.",
      },
      {
        title: "Ikkinchi maydonchaga chiqish arafasidagi kompaniya",
        text: "Yangi ombor, tsex yoki hudud ochyapsiz va hozirgi hisob sxemasi u yerga miqyoslanmasligini tushunasiz.",
      },
      {
        title: "Biznes egasi — tor joy",
        text: "Sizsiz raqamlarni hech kim yigʻmaydi. Tizim **kompaniyaning asosiy kalkulyatori rolini sizdan oladi**.",
      },
    ],
    no: [
      "Hisob bitta jadvalga sigʻadi va unda hammasi toʻgʻri chiqadi — sizga erta",
      "Vazifa faqat soliq uchun buxgalteriya hisoboti boʻlsa — buni 1C bilan yopish arzonroq",
      "Ombor va ishlab chiqarishsiz xizmatlar, 10 xodimgacha — CRM va hisob programmasini oling",
      "Jarayonlarni oʻzgartirishga tayyorlik yoʻq: tizim tartibsizlikni yoʻqotmaydi, qotirib qoʻyadi",
    ],
  },

  modules: {
    ...ru.modules,
    kicker: "Ichida nima bor",
    h2: "Alohida jadval boʻlishdan toʻxtaydigan sakkiz kontur",
    lead:
      "Barchasi bir vaqtda joriy etilmaydi. Boshida **hozir pul yoʻqotayotgan** konturlarni olamiz, qolganini keyingi bosqichlarda qoʻshamiz.",
    items: [
      {
        name: "Moliya va buxgalteriya",
        text: "Hisobvaraqlar rejasi, bank va kassa, oʻzaro hisob-kitoblar, yoʻnalishlar boʻyicha foyda hisoboti. Boshqaruv va rasmiy hisobotlar bitta maʼlumotdan.",
        marks: ["Koʻp valyutalilik", "Yoʻnalishlar boʻyicha P&L hisoboti", "Budjetlashtirish"],
      },
      {
        name: "Ombor va zaxiralar",
        text: "Kirim, koʻchirish, buyurtma uchun zaxira, partiyalar va seriya raqamlari. Qoldiq **ombor, sotuv va buxgalteriya uchun bir xil**.",
        marks: ["Bir nechta ombor", "Partiyalar va yaroqlilik muddati", "Toʻxtatmasdan inventarizatsiya"],
      },
      {
        name: "Xarid va taʼminot",
        text: "Soʻrov, yetkazib beruvchiga buyurtma, qabul, hisob-fakturalarni solishtirish. Qaysi yetkazib beruvchi muddatni va qanchaga buzayotgani koʻrinadi.",
        marks: ["Narxlar tarixi", "Yetkazib berish muddati nazorati", "Hujjatlar boʻyicha solishtirish"],
      },
      {
        name: "Ishlab chiqarish va tannarx",
        text: "Spetsifikatsiyalar, ishlab chiqarish buyurtmalari, xomashyoni hisobdan chiqarish, ish va qoʻshimcha xarajatlar hisobi. **Har bir buyurtma boʻyicha faktik tannarx**.",
        marks: ["Koʻp darajali spetsifikatsiyalar", "Fakt rejaga qarshi", "Brak va chiqindilar hisobi"],
      },
      {
        name: "Materiallarni rejalashtirish (MRP)",
        text: "Tizim yetkazib berish muddatlari va joriy qoldiqlarni hisobga olib, ishlab chiqarish rejasi uchun nima va qaysi sanaga yetmasligini hisoblaydi.",
        marks: ["Sanalar boʻyicha ehtiyoj", "Ombor qoldiqlari hisobi", "Xaridga avtomatik soʻrovlar"],
      },
      {
        name: "Sotuv va CRM",
        text: "Mijozlar, tijorat taklifi, buyurtmalar, qarzdorlik limitlari. Menejer mavjud qoldiqni koʻradi va **yoʻq narsani sotmaydi**.",
        marks: ["Qarzdorlik nazorati", "Narxlar va qoidaga koʻra chegirmalar", "Bitimlar voronkasi"],
      },
      {
        name: "Tahlil va hisobotlar",
        text: "Biznes egasi va rahbarlar uchun dashbordlar: marja, aylanish, harakatsiz tovar, reja-fakt. Oʻzi yangilanadi.",
        marks: ["Rollar boʻyicha dashbordlar", "Dasturchisiz hisobotlar", "Excelga yuklab olish"],
      },
      {
        name: "Servis va xizmat koʻrsatish",
        text: "Kafolat, servis soʻrovlari, mijozdagi uskuna xizmat tarixi. Texnika va injenerlik uskunalari uchun dolzarb.",
        marks: ["Servis shartnomalari", "Obyekt boʻyicha tarix", "Soʻrovlar boʻyicha SLA"],
      },
    ],
  },

  scenario: {
    ...ru.scenario,
    kicker: "Bu ishda qanday koʻrinadi",
    h2: "Bitta buyurtma, bitta kun, oltita boʻlim — bitta ham fayl yuborilmaydi",
    lead:
      "Bu ishga tushgandan keyingi ishlab chiqarish kompaniyasining odatiy senariysi. Sanab oʻtilganlarning hech biri kimningdir messenjerga yozishini talab qilmaydi.",
    steps: [
      {
        time: "09:40",
        title: "Menejer buyurtmani qabul qiladi",
        text: "Boʻsh qoldiq va ishlab chiqarish muddatini koʻradi, mijozga sanani aytadi — **«taxminan oy oxirida» emas, aniq sana**. Tizimga qotirilgan chegaradan past chegirma bera olmaydi.",
      },
      {
        time: "09:41",
        title: "Zaxira va ishlab chiqarish topshirigʻi",
        text: "Tayyor mahsulot zaxiralanadi, yetmayotganiga spetsifikatsiya bilan ishlab chiqarish buyurtmasi yaratiladi. Tsex topshiriqni navbatda koʻradi.",
      },
      {
        time: "10:15",
        title: "MRP xomashyoni hisoblaydi",
        text: "Tizim reja uchun xomashyo qoldiqlarini tekshiradi va material omborda boʻlishi kerak boʻlgan sanalar bilan xarid ehtiyojini shakllantiradi.",
      },
      {
        time: "12:30",
        title: "Taʼminot buyurtma joylashtiradi",
        text: "Soʻrov yetkazib beruvchiga oʻtgan narxlar va muddatlar tarixi bilan ketadi. Taʼminotchiga «buyurtma berdikmi?» deb hech kim qoʻngʻiroq qilmaydi.",
      },
      {
        time: "16:00",
        title: "Tsex fakt boʻyicha hisobot beradi",
        text: "Faktik xomashyo va ish vaqti hisobdan chiqariladi. Buyurtma tannarxi brak va chiqindilar bilan birga **oʻsha zahoti qayta hisoblanadi**.",
      },
      {
        time: "17:10",
        title: "Biznes egasi marjani koʻradi",
        text: "Dashbordda — oʻtgan oy uchun kompaniya boʻyicha emas, **shu buyurtma boʻyicha foyda**. Keyingi buyurtma narxi haqidagi qaror fakt boʻyicha qabul qilinadi.",
      },
    ],
  },

  project: {
    ...ru.project,
    kicker: "Loyiha",
    h2: "Loyiha va budjet nimalardan yigʻiladi",
    lead:
      "Ish tarkibini **shartnomadan oldin** aytamiz. Har bir faza siz qabul qiladigan hujjat bilan tugaydi — va faqat shundan keyin keyingisi boshlanadi.",
    phases: [
      { name: "Tekshiruv va kontseptual loyiha", term: "3–4 hafta", text: "Jarayonlarni tahlil qilamiz, SAP standartidan farqlarni qayd etamiz, yozma xulosa va smeta olasiz." },
      { name: "Tizimni sozlash", term: "6–8 hafta", text: "Konturlar, maʼlumotnomalar, kirish huquqlari va chop etish shakllarini jarayoningizga moslab sozlaymiz." },
      { name: "Maʼlumotlarni koʻchirish va tozalash", term: "2–4 hafta", text: "Nomenklatura, kontragentlar va qoldiqlarni koʻchiramiz. Takrorlar va keraksizlar shu yerda tozalanadi — bu loyiha budjetining 10–15%." },
      { name: "Jamoangiz bilan sinovdan oʻtkazish", term: "2–3 hafta", text: "Haqiqiy senariylarni oʻtkazamiz: buyurtma, ishlab chiqarish, yuk berish, yopish. Ochilgan kamchiliklarni tuzatamiz." },
      { name: "Rollar boʻyicha oʻqitish", term: "2 hafta", text: "Omborchi oʻzining, buxgalter oʻzining ishini oʻrganadi. Har bir boʻlimda superfoydalanuvchi tayyorlaymiz." },
      { name: "Ishga tushirish va barqarorlashtirish", term: "2–4 hafta", text: "Ishchi rejimga oʻtish, birinchi haftalarni kuzatib borish, birinchi oyni yopishdagi xatolar tahlili." },
    ],
    budget: [
      { label: "SAP litsenziyalari", value: "$1 800 – $3 200", note: "bitta foydalanuvchi uchun: Limited arzonroq, Professional qimmatroq" },
      { label: "Joriy etish ishlari", value: "$18 000 – $45 000", note: "budjetning asosiy qismi, konturlar soniga bogʻliq" },
      { label: "Maʼlumotlarni koʻchirish", value: "10–15%", note: "loyiha budjetidagi ulush" },
      { label: "Oʻqitish", value: "15% dan", note: "bu yerda tejash joriy etishga qarshilikka aylanadi" },
    ],
  },

  faq: [
    {
      q: "Business One S/4HANA dan nimasi bilan farq qiladi?",
      a: "«Zoʻrligi» bilan emas, vazifa miqyosi bilan. Business One tuzilmasi tushunarli bitta kompaniya uchun — bir necha yuz foydalanuvchigacha. S/4HANA yuridik shaxslar bir nechta boʻlganda, maydonchalar turli hududlarda boʻlganda, konsolidatsiya va katta hajmdagi tahlil kerak boʻlganda zarur. Business One yetadigan joyda S/4HANA uchun ortiqcha toʻlash — kelajakka zaxira emas, muzlatilgan pul va uzoqroq loyiha.",
    },
    {
      q: "Hammasini bir vaqtda joriy etmasa boʻladimi?",
      a: "Ha, va koʻpincha shunday qilamiz. Birinchi bosqichda hozir pul yoʻqotayotgan konturni olamiz: odatda bu ombor va tannarx. Qolganini jamoa birinchisini oʻzlashtirgach qoʻshamiz. Hammasini bir vaqtda ishga tushirishga urinish — choʻzilgan loyihalarning asosiy sababi.",
    },
    {
      q: "Bulut yoki oʻz server?",
      a: "Oʻz server — maʼlumotlarni kompaniya ichida saqlash talabi boʻlsa va infratuzilma allaqachon boʻlsa. Bulut — oʻz IT boʻlimi boʻlmasa va uskunaga kapital sarf qilishni istamasangiz. Funksionalda farq yoʻq, farq xarajatlar modelida. Tanlovni Discover fazasida qayd etamiz.",
    },
    {
      q: "Bizning 1C ga nima boʻladi?",
      a: "Koʻpincha u rasmiy hisob uchun qoladi, boshqaruv esa SAPga oʻtadi. Almashinuvni integratsiya orqali sozlaymiz — maʼlumot ikki marta kiritilmaydi. 1C dan butunlay voz kechish shart emas va biz buni majburlamaymiz.",
    },
    {
      q: "Loyihaga bizning tomondan qancha odam kerak?",
      a: "Kompaniya tomonidan haqiqiy vakolatga ega loyiha rahbari — albatta. Va ombor, ishlab chiqarish, sotuv va buxgalteriyadan bittalab kalit foydalanuvchi. Bu toʻliq bandlik emas, ammo «vaqt boʻlganda» ham emas: faol fazalarda ish vaqtining qariyb 20–30%.",
    },
  ],
};
