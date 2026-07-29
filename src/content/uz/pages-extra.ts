import type { IndustryPage } from "../pages-extra";
import {
  aboutPage as aboutRu,
  industryCommon as commonRu,
  industryPages as ru,
  servicesPage as servicesRu,
} from "../pages-extra";

/**
 * Узбекские версии восстановленных страниц.
 *
 * Адреса общие с русскими (/uz/production и т. д.) — так было и на прежнем
 * сайте, поэтому slug, кейс и фотография наследуются, а переводится только
 * текст. Перечни направлений перенесены с узбекских страниц bis-pro.com.
 */

const ITEMS: Record<string, { crumb: string; h1: string; lead: string; itemsTitle: string; items: string[] }> = {
  production: {
    crumb: "Ishlab chiqarish",
    h1: "Biz bilan kengaytiriladigan va aqlli uskunalar ishlab chiqing!",
    lead:
      "SAPdagi ishlab chiqarish hisobi **har bir buyurtma boʻyicha haqiqiy tannarxni** hisoblaydi, oylik oʻrtachani emas: xomashyo hisobdan chiqarilishi, brak va chiqindilar sodir boʻlgan kuniyoq hisobga tushadi.",
    itemsTitle: "Bizga quyidagi yoʻnalishlarda ishonishadi",
    items: [
      "Toʻqimachilik ishlab chiqarishi",
      "Poʻlat quvurlar ishlab chiqarish",
      "Maishiy texnika ishlab chiqarish",
      "Polimer quvurlar ishlab chiqarish",
      "Qurilish materiallari ishlab chiqarish",
      "Quritgichlar ishlab chiqarish",
      "Poligrafiya",
      "Sanoat ventilyatsiya tizimlarini ishlab chiqarish",
    ],
  },
  "retail-trade": {
    crumb: "Chakana savdo",
    h1: "Noyob mijoz tajribasi va barqaror savdo zanjirini yarating!",
    lead:
      "Chakana savdoda pul kassa bilan ombor orasida yoʻqoladi. SAP **qoldiq, savdo va xaridni bitta raqamga** keltiradi — nimani buyurtma qilish va nimani arzonlashtirish kerakligi shundan koʻrinadi.",
    itemsTitle: "Chakana savdoda bizneslarga quyidagi yoʻnalishlarda oʻsishga yordam berdik",
    items: [
      "Mobil aksessuarlar chakana savdosi",
      "Toʻqimachilik mahsulotlari chakana savdosi",
      "Santexnika chakana savdosi",
    ],
  },
  "wholesale-trade": {
    crumb: "Ulgurji savdo",
    h1: "Ufqlarni kengaytiring – savdoda maʼlumot kuchidan foydalaning!",
    lead:
      "Ulgurji savdo aylanma bilan yashaydi: harakatsiz tovarda muzlagan pul va muddati oʻtgan debitorlik marjani chegirmalardan tezroq yeydi. SAP **ikkalasini ham har kuni** koʻrsatadi.",
    itemsTitle: "Quyidagi sohalarda loyihalarni muvaffaqiyatli amalga oshirdik",
    items: [
      "Santexnika, nasoslar, isitish tizimlari ulgurji savdosi",
      "Mebel furniturasi ulgurji savdosi",
      "Mobil aksessuarlar ulgurji savdosi",
      "Qurilish asboblari ulgurji savdosi",
      "Keng isteʼmol tovarlari ulgurji savdosi",
      "Shinalar ulgurji savdosi",
    ],
  },
  distribution: {
    crumb: "Distribyutsiya",
    h1: "SAP Business One bilan distribyutsiyani avtomatlashtirish",
    lead:
      "Distribyutor bir vaqtda xarid, ombor, joʻnatish va hamkorlar pulini boshqaradi. Tarqoq jadvallar bu yerda birinchi boʻlib buziladi — **hisob kechiktirish kunlariga boradi**.",
    itemsTitle: "Bu tarmoqlarga distribyutsiya samaradorligini oshirishda yordam berdik",
    items: [
      "Mobil aksessuarlar distribyutsiyasi",
      "Maishiy texnika distribyutsiyasi",
      "Mebel furniturasi distribyutsiyasi",
      "Qurilish materiallari distribyutsiyasi",
    ],
  },
};

export const industryPages: IndustryPage[] = ru.map((p) => ({ ...p, ...ITEMS[p.slug] }));

export const industryCommon = {
  ...commonRu,
  modulesKicker: "Tizim nimani qamrab oladi",
  modulesH2: "Bu sohada koʻpincha ishga tushiriladigan konturlar",
  modules: [
    "Moliya va buxgalteriya",
    "Zaxiralarni boshqarish",
    "Xaridlarni boshqarish",
    "CRM va savdo",
    "Servisni boshqarish",
    "Xodimlar maʼlumotlarini boshqarish",
    "Tahlil va hisobotlar",
  ],
  caseKicker: "Isbot",
  caseH2: "SAP muvaffaqiyatli joriy etilgan loyiha",
  caseCta: "Loyihani toʻliq koʻrish",
  ctaH2: "Hali ishonchingiz komil emasmi? Nega bizni tanlashlarini bilib oling",
  ctaText:
    "Jarayonlarning bepul auditi: holatingizni tahlil qilamiz, tor joylarni koʻrsatamiz va yozma xulosa beramiz — natijada joriy etish hozir foydali emasligi aniqlansa ham.",
  ctaPrimary: "Bepul audit soʻrash",
  ctaSecondary: "Barcha sohalar va loyihalar",
};

export const aboutPage = {
  ...aboutRu,
  crumb: "Kompaniya haqida",
  h1: "Biz haqimizda",
  lead:
    "BIS — 2019 yildan beri Oʻzbekistonda SAP joriy etayotgan jamoa. Biz faqat ERP bilan ishlaymiz va ERP kerak boʻlmagan loyihalarni olmaymiz.",
  factsKicker: "Qisqacha",
  facts: [
    { value: "2019", label: "tashkil etilgan yil" },
    { value: "35+", label: "SAP joriy etish loyihasi" },
    { value: "$2M+", label: "boshqarilgan loyihalar qiymati" },
  ],
  approachKicker: "Qanday ishlaymiz",
  approachH2: "Biz tizim oʻrnatilgani uchun emas, joriy etish natijasi uchun javob beramiz",
  approachLead:
    "Loyiha jarayonlarning bepul auditidan boshlanadi va topshirish dalolatnomasi bilan emas, ishlayotgan tizim bilan tugaydi. Auditda joriy etish hozir foydali emasligi aniqlansa, **shuni ochiq aytamiz** va yozma xulosani beramiz.",
  approach: [
    {
      title: "Qayta ishlash oʻrniga standart",
      text: "SAPning standart funksiyasi bilan yopish mumkin boʻlgan hamma narsani standart bilan yopamiz: qoʻshimcha ishlanmalar qimmat turadi va yangilanishlarda buziladi.",
    },
    {
      title: "Budjet shartnomadan oldin maʼlum",
      text: "Avval tekshiruv va xulosa, keyin qatʼiy smeta. Tekshiruvdan oldin aytilgan «toʻliq» qatʼiy narx doim yo pasaytirilgan, yo zaxira bilan oshirilgan boʻladi.",
    },
    {
      title: "Bosqichma-bosqich ishga tushirish",
      text: "Hammasini birdan emas, pul yoʻqotilayotgan konturdan boshlaymiz. Shunda jamoa tizimni oʻzlashtirishga ulguradi, samara esa birinchi bosqichdayoq koʻrinadi.",
    },
  ],
  expertiseKicker: "Tajriba nima bilan tasdiqlangan",
  expertiseH2: "Loyihalar ortidagi tajriba",
  expertise: [
    "$2M dan ortiq qiymatdagi SAP ERP loyihalarini boshqarish",
    "Kompaniya asoschisida ACCA sertifikati",
    "SAP Activate metodologiyasi — SAPning xalqaro standarti boʻyicha joriy etish",
    "Faqat pudratchi tomonidan emas, buyurtmachi tomonidan ham biznes boshqarish tajribasi",
  ],
  ctaH2: "Tanishamizmi?",
  ctaText: "Jarayonlarning bepul auditidan boshlaymiz — bu hech narsaga majbur qilmaydi, xulosa esa sizda qoladi.",
  ctaPrimary: "Audit soʻrash",
  ctaSecondary: "Loyihalarni koʻrish",
};

export const servicesPage = {
  ...servicesRu,
  crumb: "Xizmatlar",
  h1: "Eng yaxshisini tanlang – bizning xizmatlarimiz",
  lead:
    "Uch yoʻnalish: SAPni noldan joriy etish, ishlayotgan tizim boʻyicha konsalting va texnik qoʻllab-quvvatlash.",
  listKicker: "Yoʻnalishlar",
  listH2: "Bizga nima bilan murojaat qilishadi",
  services: [
    {
      ...servicesRu.services[0],
      title: "SAP Business One va S/4HANA joriy etish",
      text: "Toʻliq loyiha: jarayonlarni tekshirish, sozlash, maʼlumotlarni koʻchirish va tozalash, rollar boʻyicha oʻqitish, ishga tushirish va dastlabki haftalarda kuzatib borish.",
      marks: ["3 oydan", "Shartnomagacha smeta", "SAP Activate metodologiyasi"],
    },
    {
      ...servicesRu.services[1],
      title: "SAP Business One boʻyicha konsalting",
      text: "Ishlayotgan tizimni tahlil qilamiz: sozlama jarayondan qayerda chetga chiqqan, nima notoʻgʻri hisoblanayapti, qaysi konturlar ishga tushmagan. Natijada — ustuvorliklari bilan ish rejasi.",
      marks: ["Joriy tizim auditi", "Yozma xulosa", "Ishlanmalar rejasi"],
    },
    {
      ...servicesRu.services[2],
      title: "SAP Business One texnik qoʻllab-quvvatlash",
      text: "Ishga tushgandan keyin tizimni kuzatib borish: nosozliklarni hal qilish, soʻrov boʻyicha ishlanmalar, xodim almashganda qayta oʻqitish, yangilanishlar.",
      marks: ["Shaxsiy konsultant", "Javob berish reglamenti", "Soʻrov boʻyicha ishlanmalar"],
    },
  ],
  processKicker: "Loyiha qanday oʻtadi",
  processH2: "Olti bosqich, va har biri siz imzolaydigan hujjat bilan tugaydi",
  ctaH2: "Qaysi xizmat kerakligiga ishonchingiz komil emasmi?",
  ctaText:
    "Jarayonlarning bepul auditidan boshlang: natijasida sizga joriy etish, joriy tizim boʻyicha konsalting yoki hozircha hech narsa kerak emasligi aniq boʻladi.",
  ctaPrimary: "Bepul audit soʻrash",
  ctaSecondary: "Loyihalarni koʻrish",
};
