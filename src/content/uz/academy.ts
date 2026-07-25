import { academy as ru } from "../academy";

/** Узбекская версия страницы «SAP Академия». */
export const academy = {
  ...ru,
  hero: {
    kicker: "SAP Akademiya",
    h1: "Tizim odamlaringiz uni qanchalik oʻzlashtirgan boʻlsa, shunchalik ishlaydi",
    lead:
      "Rollar boʻyicha oʻqitish SAPni oʻzlashtirish vaqtini qariyb 30% qisqartiradi va joriy etishning asosiy tavakkalini — xodimlar qarshiligini yoʻqqa chiqaradi. Shu sababli oʻqitish bizda «loyiha oxirida, vaqt qolsa» emas, rejasi va qabuli bor alohida bosqich.",
  },

  why: {
    kicker: "Bu nima uchun kerak",
    h2: "Joriy etish dastur sababli emas, oʻqitilmagan odamlar sababli barbod boʻladi",
    lead:
      "Oʻqitish tejash uchun qisqartirilsa, xodimlar «ehtimolga qarshi» Excelni yuritishda davom etadi va kompaniya ikki marta toʻlaydi: tizim uchun ham, ishlashning eski usuli uchun ham. Akademiya shu tafovutni yopadi.",
    stats: [
      { value: "~30%", label: "rollar boʻyicha oʻqitishda oʻzlashtirish vaqtidan tejash" },
      { value: "15% dan", label: "oʻqitishning joriy etish budjetidagi ulushi — qisqartirilmaydi" },
      { value: "rollar boʻyicha", label: "omborchi oʻzining, buxgalter oʻzining ishini oʻrganadi" },
    ],
  },

  formats: {
    kicker: "Formatlar",
    h2: "Nimani va kimni oʻqitamiz",
    items: [
      {
        title: "Foydalanuvchilarni rollari boʻyicha oʻqitish",
        for: "Joriy etish loyihasiga kiradi",
        text: "Har bir boʻlim mavhum misollarda emas, sizning sozlangan tizimingizda oʻz senariylarini oʻrganadi. Sotuv — buyurtma va limitlarni, ombor — qabul va zaxiralarni, ishlab chiqarish — topshiriq va hisobdan chiqarishni.",
        marks: ["Sizning konfiguratsiyangizda", "Haqiqiy operatsiyalar senariysi", "Oʻzlashtirishni tekshirish"],
      },
      {
        title: "Superfoydalanuvchilarni tayyorlash",
        for: "Joriy etish loyihasiga kiradi",
        text: "Har bir boʻlimda tizimni boshqalardan chuqurroq tushunadigan va biz ketgandan keyin hamkasblariga yordam beradigan ichki chempionni tayyorlaymiz. Tizimni tirik ushlab turadigan narsa — aynan shu.",
        marks: ["Boʻlimga 1 superfoydalanuvchi", "Chuqurlashtirilgan tahlil", "Hamkasblarga joyida yordam"],
      },
      {
        title: "Tizim administratorini oʻqitish",
        for: "Oʻz IT boʻlimi bor kompaniyalar uchun",
        text: "Mutaxassisingiz maʼlumotnomalar, kirish huquqlari, chop etish shakllari va asosiy sozlamalarni yuritishni oʻrganadi — mayda oʻzgarishlar uchun pudratchi kerak boʻlmasin.",
        marks: ["Huquq va rollar", "Maʼlumotnoma va shakllar", "Asosiy kuzatib borish"],
      },
      {
        title: "Ishga tushgandan keyin qayta oʻqitish",
        for: "Qoʻllab-quvvatlashning bir qismi",
        text: "Bir necha hafta ishlagach, kamchilik ochilgan joyga qaytamiz: yangi xodimlar, esdan chiqqan senariylar, tizimni chetlab oʻta boshlagan uchastkalar.",
        marks: ["Haqiqiy kamchiliklar tahlili", "Yangi xodimlar", "Chetlab oʻtish yoʻllari profilaktikasi"],
      },
    ],
  },

  materials: {
    ...ru.materials,
    kicker: "Materiallar",
    h2: "Oʻqitishdan keyin sizda nima qoladi",
    lead:
      "Oʻqitish ogʻzaki tahlil bilan tugamaydi. Jamoada qaytib murojaat qilish va yangi xodimlarni tanishtirish mumkin boʻlgan materiallar qoladi.",
    items: [
      "Konfiguratsiyangizga moslangan, har bir boʻlim uchun rolli koʻrsatmalar",
      "Kalit operatsiyalar reglamenti: buyurtma, qabul, ishlab chiqarish topshirigʻi, yopish",
      "Oʻquv sessiyalari yozuvlari — bahsli joyni qayta uchrashuvsiz koʻrib chiqish mumkin",
      "Yangi xodimlarni bizning ishtirokimizsiz tanishtirish uchun chek-listlar",
    ],
  },

  cta: {
    ...ru.cta,
    h2: "Oʻqitish joriy etish bilan birga hisoblanadi",
    text: "«Kurslar» uchun alohida narx yoʻq: oʻqitish loyihaning bir qismi va smetaga budjetning 15% dan boshlab kiritiladi. Auditda buning sizning jamoangiz uchun qanday koʻrinishini koʻrsatamiz.",
    primary: "Auditga yozilish",
    secondary: "Tayyorlik chek-listini yuklab olish",
  },
};
