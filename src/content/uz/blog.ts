import type { BlogPost } from "../types";
import { posts as ru, blogMeta as blogMetaRu } from "../blog";
import { importedPosts } from "./blog-imported";

/** Узбекская версия блога. Обложки и slug общие с русской версией. */
export const blogMeta = {
  ...blogMetaRu,
  kicker: "Blog",
  h2: "ERP qanday tanlanadi va joriy etiladi — tizim reklamasisiz",
  lead:
    "Loyihalarni haqiqatda nima buzayotgani haqida yozamiz: maʼlumotlar, odamlar va biznes egasining qarorlari. Materiallar oxir-oqibat SAPni ham, bizni ham tanlamasangiz ham foydali.",
};

const ownPosts: BlogPost[] = [
  {
    ...ru[0],
    title: "Nega ERP joriy etish barbod boʻladi — va deyarli hech qachon dastur sababli emas",
    excerpt:
      "Loyihaning hech narsaga aylanmasligining olti sababi tahlili. Oltisi ham tizim tomonida emas, kompaniya tomonida.",
    readingTime: "7 daqiqa",
    category: "Joriy etish",
    author: "Zairov Sardorjon, SAP Business One loyihalari rahbari",
    body: [
      { type: "p", text: "Soʻnggi yillarda [joriy etishga](/uz/services) urinish allaqachon boʻlgan — baʼzida ikkinchi marta — kompaniyalarga kirdik. Bu hikoyalarda dastur deyarli har doim normal boʻlgan. Hammasi bir xil oltita joyda buzilardi." },
      { type: "h3", text: "1. Birinchi shaxs loyihadan chiqib ketdi" },
      { type: "p", text: "Biznes egasi boshida ishtirok etadi, ikkinchi oyda esa hammasini IT direktorga topshiradi. Shu paytdan loyiha jarayonlarni oʻzgartirishdan toʻxtaydi: IT boʻlimida tijorat direktoriga uning chegirma sxemasi endi ishlamasligini aytadigan vakolat yoʻq." },
      { type: "callout", title: "Tekshiruv", text: "Agar loyihaning haftalik holat yigʻilishida mavjud jarayonni bekor qila oladigan odam boʻlmasa — loyiha allaqachon tavakkal zonasida." },
      { type: "h3", text: "2. Maʼlumotlar borligicha yuklandi" },
      { type: "p", text: "Nomenklatura takrorlari, uch xil yozilgan kontragentlar, eski tizimda ham toʻgʻri kelmagan qoldiqlar. Bularning bari yangi [ERP tizimiga](/uz/post/sap-erp-tizimi) koʻchadi va u yerda yangi tizim yomon ishlayotganining «dalili»ga aylanadi. Maʼlumotlarni tozalash — loyiha budjetining 10–15%, va uni oʻtkazib boʻlmaydi." },
      { type: "h3", text: "3. Jarayonni oʻzgartirish oʻrniga moslashtirish" },
      { type: "p", text: "Kompaniya tizimni oʻzining hozirgi ish tartibiga moslashtirishni soʻraydi. Har bir moslashtirish joriy etishda pulga tushadi, yangilanishlarda buziladi va qoʻllab-quvvatlashni talab qiladi. Ikki yildan keyin yangilash imkonsiz va faqat bitta odam biladigan noyob tizim chiqadi." },
      { type: "quote", text: "Hech narsani oʻzgartirmaslikning eng qimmat usuli — oʻz tartibsizligini avtomatlashtirishga pul toʻlash.", author: "Mijozning muvaffaqiyatsiz loyihasi tahlilidan" },
      { type: "h3", text: "4. Oʻqitish tejash uchun qisqartirildi" },
      { type: "p", text: "Oʻqitish — budjetning kamida 15%. U qisqartirilganda odamlar «ehtimolga qarshi» Excelda parallel hisob yuritishda davom etadi va kompaniya ikki marta toʻlaydi: tizim uchun ham, ishlashning eski usuli uchun ham." },
      { type: "h3", text: "5. Hammasi bir vaqtda ishga tushirildi" },
      { type: "p", text: "Moliya, [ombor](/uz/post/sap-business-one-ombor-nazorati), [ishlab chiqarish](/uz/production), [CRM](/uz/post/crm-va-erp-tizimlarining-farqi) va servis bir vaqtda. Jamoa bitta ham konturni oʻzlashtirishga ulgurmaydi, bir moduldagi xatolar boshqasidagi muammolar bilan izohlanadi, muddatlar esa loyiha kompaniya ichida qoʻllab-quvvatlashni yoʻqotadigan darajada surilib ketadi." },
      { type: "h3", text: "6. Kompaniya tomonidan natija uchun hech kim javob bermadi" },
      { type: "p", text: "Pudratchi sozlash uchun javob beradi, ammo omborchining qabulni skanerlamaganiga javob bera olmaydi. Kompaniya ichida haqiqiy vakolat va vaqti bor loyiha rahbari kerak." },
      { type: "list", items: [
        "Birinchi shaxs loyihada ikkinchi oyga qadar emas, oxirigacha",
        "Maʼlumotlar shikoyatlardan keyin emas, koʻchirishdan oldin tozalanadi",
        "Standart yomon boʻlmagan hamma joyda moslashtirish oʻrniga standart",
        "Rollar boʻyicha oʻqitish, «hammaga bir xil» emas",
        "Bosqichma-bosqich ishga tushirish: avval pul yoʻqolayotgan kontur",
        "Vakolatga ega oʻz loyiha rahbari",
      ] },
      { type: "p", text: "Agar bu roʻyxatdan toʻrttadan kami yopilgan boʻlsa — joriy etishni bir chorakka surib, uni tayyorgarlikka sarflash maʼqul. Bu loyihani barbod qilib, keyin jamoaga nega yana shu mavzuga qaytayotganingizni izohlashdan arzonroq." },
      { type: "h3", text: "Shuningdek oʻqing" },
      { type: "list", items: [
        "[SAP joriy etish budjeti nimalardan yigʻiladi](/uz/post/skolko-stoit-vnedrenie-sap-v-uzbekistane)",
        "[SAP yoki 1C: halol solishtirish](/uz/post/sap-ili-1c-chestnoe-sravnenie)",
        "[Bizning joriy etish loyihalarimiz](/uz/portfolio)"
      ] }
    ],
  },
  {
    ...ru[1],
    title: "SAP yoki 1C: 1C ning hududi qayerda tugaydi",
    excerpt:
      "«Qaysi biri yaxshi» emas, har bir tizim qanday vazifalarni yopadi. Va nega yarim hollarda 1C da qolishni tavsiya qilamiz.",
    readingTime: "6 daqiqa",
    category: "Tizim tanlash",
    author: "Ergashev Ahmadjon, BIS asoschisi",
    body: [
      { type: "p", text: "«SAP yoki [1C](/uz/post/sap-yoki-1c-erp-tizimlar-taqoslash-biznes-uchun)» savolini deyarli har bir birinchi uchrashuvda beradilar. Unga «qaysi biri yaxshi» formatida javob berish maʼnosiz: tizimlar turli vazifalarni hal qiladi va kompaniyada koʻpincha bir vaqtda ishlaydi." },
      { type: "h3", text: "1C nimani yaxshi bajaradi" },
      { type: "p", text: "Rasmiy hisob va mahalliy hisobot — 1C ning kuchli tomoni. Bu yerda u arzonroq, sozlashda tezroq va buxgalteringizga tushunarliroq. Agar asosiy ogʻriq shunda boʻlsa, tizimni almashtirish kerak emas va biz shundoq aytamiz." },
      { type: "h3", text: "SAP hududi qayerdan boshlanadi" },
      { type: "list", items: [
        "Oyiga oʻrtacha emas, har bir [ishlab chiqarish](/uz/production) buyurtmasi boʻyicha faktik tannarx",
        "Yetkazib berish muddatlarini hisobga olib, ishlab chiqarish rejasi uchun xomashyo ehtiyojini rejalashtirish",
        "Bitta konturda bir nechta yuridik shaxs va maydoncha, konsolidatsiya bilan",
        "Qoldiqlarni qoʻlda solishtirish ishlamay qoʻygan keng nomenklatura",
        "Bir yarim oydan keyin emas, davr yopilishidan oldin kerak boʻladigan boshqaruv hisoboti",
      ] },
      { type: "callout", title: "Oddiy test", text: "Agar iqtisodchingiz tannarxni oʻz jadvalida hisoblasa va uning hisobini tekshiradigan odam boʻlmasa — siz buxgalteriya programmasi yopadigan chegaradan chiqib ketgansiz." },
      { type: "h3", text: "Gibrid senariy" },
      { type: "p", text: "Koʻpincha ishlaydigan sxema shunday koʻrinadi: boshqaruv, ishlab chiqarish va [ombor](/uz/post/sap-business-one-ombor-nazorati) SAPga oʻtadi, rasmiy hisob 1C da qoladi, tizimlar orasida almashinuv sozlanadi. Maʼlumot ikki marta kiritilmaydi, har bir tizim esa oʻzi kuchli boʻlgan ishni qiladi." },
      { type: "h3", text: "Oʻtish qachon oʻzini oqlamaydi" },
      { type: "p", text: "Agar sizda ishlab chiqarishsiz savdo, mingtagacha pozitsiya va qoldiqlari toʻgʻri keladigan bitta ombor boʻlsa — oʻtish oʻzini oqlamaydi. Biz bunday loyihalardan voz kechganmiz: keragidan ortiqni sotish hamma bir-birini biladigan bozorda norozi mijoz va salbiy tavsiya olish demak." },
      { type: "p", text: "Suhbatning toʻgʻri tartibi — «qaysi tizimni olamiz» emas, «hozir qaysi vazifa eng qimmatga tushayapti». Ikkinchi savolga javob odatda birinchisini ham yopadi." },
      { type: "h3", text: "Shuningdek oʻqing" },
      { type: "list", items: [
        "[SAP ERP tizimi nima](/uz/post/sap-erp-tizimi)",
        "[CRM va ERP tizimlarining farqi](/uz/post/crm-va-erp-tizimlarining-farqi)",
        "[SAP Business One](/uz/sap-business-one)"
      ] }
    ],
  },
  {
    ...ru[2],
    title: "SAP joriy etish budjeti nimalardan yigʻiladi",
    excerpt:
      "Toʻrtta xarajat moddasi, ikkitasini odatda hisobga olishni unutadilar. Va nega tekshiruvsiz «toʻliq» smeta — yomon belgi.",
    readingTime: "5 daqiqa",
    category: "Budjet",
    author: "Zairov Sardorjon, SAP Business One loyihalari rahbari",
    body: [
      { type: "p", text: "Biznes egalari odatda bitta raqamni soʻraydi: «[SAP](/uz/post/sap-nima-va-qanday-ishlaydi) qanchaga tushadi». Bitta raqam mavjud emas, ammo har qanday taklifni — bizningkini ham — tekshirish mumkin boʻlgan tushunarli tuzilma mavjud." },
      { type: "h3", text: "1. Litsenziyalar" },
      { type: "p", text: "Foydalanuvchilar soni va kirish turiga qarab hisoblanadi: faqat hisobotlarni koʻradigan odamga toʻliq litsenziya kerak emas. Bu narxi pudratchiga bogʻliq boʻlmagan yagona modda." },
      { type: "h3", text: "2. Joriy etish ishlari" },
      { type: "p", text: "[Tekshiruv, sozlash, sinov, ishga tushirish](/uz/services). Budjetning asosiy qismi va pudratchilar bir necha barobar farq qiladigan yagona modda. Arzon taklif odatda hajmdan tekshiruv va sinov olib tashlangani degani." },
      { type: "h3", text: "3. Maʼlumotlarni koʻchirish — 10–15%" },
      { type: "p", text: "«Esdan chiqadigan» moddalarning birinchisi. Maʼlumotnomalarni koʻchirish yetarli emas, ularni tozalash kerak: takrorlar, bitta kontragentning turli yozilishi, oʻlchov birligi yoʻq pozitsiyalar. Bu ishni pudratchiga toʻliq yuklab boʻlmaydi — uch kartochkadan qaysi biri toʻgʻri ekanini faqat sizning odamingiz hal qiladi." },
      { type: "h3", text: "4. Oʻqitish — 15% dan" },
      { type: "p", text: "Ikkinchi «esdan chiqadigan» modda. Rollar boʻyicha [oʻqitish](/uz/courses) tizimni oʻzlashtirish vaqtini qariyb uchdan birga qisqartiradi. U qisqartirilganda pul baribir sarflanadi — faqat keyinroq va Excelda parallel hisob shaklida." },
      { type: "callout", title: "Qizil chiziq", text: "Jarayonlarni tekshirishdan oldin aytilgan qatʼiy «toʻliq» smeta — yo loyiha davomida oʻsadigan pasaytirilgan raqam, yo nomaʼlumlik uchun zaxira bilan oshirilgani. Normal tartib: audit → xulosa → qatʼiy smeta → shartnoma." },
      { type: "h3", text: "Nimani qaytim deb hisoblash kerak" },
      { type: "p", text: "«Xodimlarda tejash»ni emas, [harakatsiz tovarda](/uz/post/sap-business-one-ombor-nazorati) muzlagan pulni, haqiqiy tannarxdan past sotilgan bitimlarni va aytilmagan muddat sababli qoʻldan ketgan buyurtmalarni hisoblang. Biz ishlagan kompaniyalarda samaraning asosiy qismini aynan shu uch modda bergan." },
      { type: "p", text: "Jarayonlarning bepul auditini har qanday holatda qilamiz — hatto natijasida joriy etish hozir sizga foydali emasligi aniqlansa ham. Yozma xulosa sizda qoladi." },
      { type: "h3", text: "Shuningdek oʻqing" },
      { type: "list", items: [
        "[Nega ERP joriy etish barbod boʻladi](/uz/post/pochemu-vnedreniya-erp-provalivayutsya)",
        "[ERP tizimini qanday tanlash kerak](/uz/post/erp-tizimini-tanlash-axborot-uzilishi)",
        "[Joriy etish xizmatlari](/uz/services)"
      ] }
    ],
  },
];

/**
 * У перенесённых статей узбекские адреса свои, поэтому они не наследуются
 * от русских через спред, а лежат отдельными записями.
 */
export const posts: BlogPost[] = [...ownPosts, ...importedPosts];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}
