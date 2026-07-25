import * as ru from "../playbook";

/**
 * Узбекская версия блоков из playbook конверсионных приёмов.
 * Приём тот же: спред русского объекта, поверх — только текстовые поля.
 */

export const logoStrip = {
  ...ru.logoStrip,
  title: "BIS bilan SAP da allaqachon ishlayotganlar",
};

export const unifiedBase = {
  ...ru.unifiedBase,
  kicker: "Yagona baza",
  h2: "«Yagona tizim» — bu shior emas. Aynan nima bogʻlanishini koʻrsatamiz",
  lead:
    "ERP sotib olishdagi asosiy qoʻrquv — modullar bogʻlanmasligi va oʻsha tartibsizlik, faqat qimmatrogʻi chiqishi. Shu sababli bogʻlanishlarni ikonkali chizmada emas, **aniq harakatlarda** koʻrsatamiz.",
  links: [
    {
      action: "Menejer buyurtmani qabul qildi",
      effect: "Ombor zaxirani darhol koʻradi, ishlab chiqarish — topshiriqni, moliya — **shu buyurtma boʻyicha kelgusi tushum va marjani**.",
      old: "Ilgari: WhatsAppga xat, pochtadagi jadval, omborchiga qoʻngʻiroq",
    },
    {
      action: "Omborchi kirimni qabul qildi",
      effect: "**Qoldiq hamma uchun yangilandi**: menejer nimani sotish mumkinligini koʻradi, taʼminotchi — soʻrovni yopish mumkinligini.",
      old: "Ilgari: qoldiq 1C da, ombor Excelida va menejerning xotirasida — uch xil raqam",
    },
    {
      action: "Tsex xomashyoni fakt boʻyicha hisobdan chiqardi",
      effect: "Buyurtma tannarxi brak va chiqindilar bilan birga **darhol qayta hisoblandi**. Chegirma **haqiqiy raqamdan** hisoblanadi.",
      old: "Ilgari: iqtisodchi tannarxni oy oxirida oʻz uslubi bilan yigʻardi",
    },
    {
      action: "Buxgalter toʻlovni oʻtkazdi",
      effect: "Mijozning qarzdorligi yopildi, yuk berish limiti yangilandi, menejer yana yuk berish mumkinligini koʻradi.",
      old: "Ilgari: menejer «toʻladimi yoʻqmi» deb buxgalteriyaga qoʻngʻiroq qilardi",
    },
    {
      action: "MRP ehtiyojni hisobladi",
      effect: "Xarid soʻrovlari xomashyo ishlab chiqarish rejasi uchun omborda boʻlishi kerak boʻlgan sanalar bilan shakllandi.",
      old: "Ilgari: taʼminotchi xotira va tajribasiga tayanib buyurtma berardi",
    },
    {
      action: "Biznes egasi dashbordni ochdi",
      effect: "Marja, aylanish va harakatsiz tovarni **joriy maʼlumotlarda** koʻradi — «menga hisobot qilib bering» degan soʻrovsiz.",
      old: "Ilgari: hisobot keyingi oyning 15-sanasiga",
    },
  ],
};

export const effect = {
  ...ru.effect,
  kicker: "Samara",
  h2: "Ishga tushgandan keyin raqamlarda nima oʻzgaradi",
  lead:
    "Bitta chiroyli raqam emas, oraliqlar: natija tarmoqqa va joriy etishdan oldingi hisob holatiga bogʻliq. **Pastki chegara — hamma olgan natija**, yuqorisi — eng yaxshi loyihalar.",
  bars: [
    { label: "Davrni yopish muddati", from: "−5", to: "−10 kun", pct: 70, note: "Climadens Pro loyihasida — 10 kun" },
    { label: "Sotuv oʻsishi", from: "+10", to: "+15%", pct: 55, note: "buyurtmani qayta ishlash tezligi va aniq muddatlar hisobiga" },
    { label: "Xodimlarni boshqarish xarajatlari", from: "−10", to: "−15%", pct: 45, note: "hisobotlarni qoʻlda yigʻish kamayadi" },
    { label: "Harakatsiz tovardagi ombor qoldiqlari", from: "−20", to: "−40%", pct: 80, note: "taʼminotchining sezgisiga koʻra xarid emas, zaxira normativlari" },
    { label: "Boshqaruv hisobotini yigʻish vaqti", from: "soatlar", to: "daqiqalar", pct: 90, note: "hisobotni odam yigʻmaydi, u oʻzi quriladi" },
  ],
  multipliers: [
    { value: "2×", label: "buyurtma qabuldan yuk berishgacha tezroq qayta ishlanadi", note: "sotuv va ombor bogʻlangan loyihalarda" },
    { value: "1", label: "uch manba oʻrniga bitta qoldiq raqami" },
    { value: "0", label: "oy oxirida boʻlimlar oʻrtasida qoʻlda solishtirish" },
  ],
};

export const roles = {
  ...ru.roles,
  kicker: "Kimga foydali",
  h2: "Bitta tizim — uni xohlashning turli sabablari",
  lead:
    "Qarorni biznes egasi qabul qiladi, ammo joriy etishga qarshilik har qanday boʻlimdan chiqishi mumkin. Shu sababli foydani toʻlovchiga emas, **har biriga** koʻrsatamiz.",
  items: [
    {
      role: "Biznes egasiga",
      pain: "Qaror qabul qiladigan raqamlarimga ishonmayman",
      gain: "**Joriy maʼlumotlarda kompaniya boʻyicha toʻliq manzara**: yoʻnalishlar boʻyicha marja, omborda muzlagan pul, tor joylar.",
    },
    {
      role: "Moliya direktoriga",
      pain: "Oyni yopish 10–15 kun qoʻlda solishtirishni oladi",
      gain: "Yopish **bir necha kunga qisqaradi**, boshqaruv va rasmiy hisobotlar bitta maʼlumotdan yigʻiladi.",
    },
    {
      role: "Ishlab chiqarishga",
      pain: "Buyurtma tsexga kechikib va normal spetsifikatsiyasiz keladi",
      gain: "Topshiriq **darhol tarkibi va muddati bilan** keladi, MRP qaysi xomashyo yetmasligini oldindan aytadi.",
    },
    {
      role: "Omborga",
      pain: "Qoldiqlar toʻgʻri kelmaydi, inventarizatsiya teshikni yopadi, sababini emas",
      gain: "**Hamma uchun bitta qoldiq**, buyurtma uchun zaxira, partiyalar va seriya raqamlari. Inventarizatsiya omborni toʻxtatmasdan.",
    },
    {
      role: "Sotuvga",
      pain: "Mijozga muddatni aytolmayman va yoʻq narsani sotib qoʻyishdan qoʻrqaman",
      gain: "**Boʻsh qoldiq va ishlab chiqarish muddati** koʻrinadi, qarzdorlik limiti zararga yuk berishga yoʻl qoʻymaydi.",
    },
    {
      role: "Taʼminotga",
      pain: "Xotiraga tayanib buyurtma beraman, keyin yo muddat buziladi, yo ombor toʻlib ketadi",
      gain: "Ehtiyoj **ishlab chiqarish rejasi boʻyicha**, yetkazib berish sanalari va yetkazib beruvchilar narx tarixi bilan hisoblanadi.",
    },
  ],
};

export const trust = {
  ...ru.trust,
  kicker: "Nega bizga ishonadilar",
  h2: "Faqat SAP bilan shugʻullanadigan va joriy etish natijasi uchun javob beradigan jamoa",
  regalia: [
    { value: "Faqat SAP", label: "jamoaning butun amaliyoti — Business One va S/4HANA, chalgʻimasdan" },
    { value: "2019", label: "yildan Oʻzbekiston avtomatlashtirish bozorida" },
    { value: "35+", label: "SAP joriy etilgan loyiha" },
    { value: "10", label: "sertifikatlangan mutaxassis" },
  ],
  quote: {
    ...ru.trust.quote,
    text:
      "Kompaniya tayyor emasligini koʻrsak, loyihadan voz kechamiz. «Oʻsib ketar» degan hisobga sotilgan joriy etish muvaffaqiyatsizlik va salbiy tavsiya bilan qaytadi — hamma bir-birini biladigan bozorda bu bitta bitimdan qimmatga tushadi.",
    author: "Ergashev Ahmadjon, BIS asoschisi",
  },
};

export const leadMagnet = {
  ...ru.leadMagnet,
  kicker: "Lid-magnit",
  h2: "Joriy etish samarasini sizning raqamlaringizda hisoblab beramiz",
  lead:
    "«Soʻrov qoldiring, biz bogʻlanamiz» emas. Siz kompaniyangiz haqida **6 savolga** javob berasiz — hisob-kitob olasiz: hozir pul qayerda yoʻqolayotgani va bundan nimasini tizim yopadi.",
  bullets: [
    "Nomenklaturangiz boʻyicha omborda muzlagan pul bahosi",
    "Davrni yopish hozirgi koʻrinishida nimaga tushadi",
    "Aynan sizga qaysi konturni birinchi joriy etish kerak",
    "Miqyosingizga mos budjet va muddat mezoni",
  ],
  cta: "Hisob-kitob olish",
  micro: "3 daqiqa · qoʻngʻiroqsiz · javob Telegram yoki pochtaga",
  zoom: {
    text: "Kontakt qoldirishga tayyor emasmisiz? Tizim va jamoani Zoomdagi ochiq uchrashuvda koʻring — har payshanba 16:00 da, majburiyatsiz.",
    cta: "Payshanbaga joy olish",
  },
  expert: {
    ...ru.leadMagnet.expert,
    name: "Mavlyanov Jasur",
    role: "SAP konsultanti, loyiha menejeri",
    line: "Hisob-kitobni robot emas, konsultant qiladi. Auditda ham xuddi shu odam bilan gaplashasiz.",
  },
  docs: {
    ...ru.leadMagnet.docs,
    h3: "Yoki materiallarni suhbatsiz oling",
    items: [
      {
        name: "Joriy etishga tayyorlik chek-listi",
        format: "PDF · 12 band",
        text: "Har qanday integrator bilan gaplashishdan oldin oʻzingizni tekshirib koʻring — faqat biz bilan emas.",
        file: "/docs/bis-chek-list-gotovnosti.pdf",
      },
      {
        name: "Qoʻllanma: Business One yoki S/4HANA",
        format: "PDF · 14 bet",
        text: "Mahsulotlar orasidagi chegara qayerdan oʻtadi va kerak boʻlmagan miqyos uchun ortiqcha toʻlamaslik yoʻli.",
        file: "/docs/bis-guide-business-one-ili-s4hana.pdf",
      },
      {
        name: "Joriy etish smetasining tuzilishi",
        format: "PDF · shablon",
        text: "Budjet qanday moddalardan yigʻiladi va odatda qaysi ikkitasini hisobga olishni unutadilar.",
        file: "/docs/bis-struktura-smety.pdf",
      },
    ],
  },
};

export const chatWidget = {
  ...ru.chatWidget,
  label: "Telegramga yozish",
  greeting: "Assalomu alaykum! Qanday biznes va qanday vazifa ekanini yozing — ish vaqtida javob beraman.",
};
