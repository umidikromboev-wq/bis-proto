import { designTeam as ru, type Person } from "../design-team";

/**
 * Узбекская версия блока команды.
 * Имена даны латиницей — так они подписаны на действующем сайте bis-pro.com
 * в блоке «Mutaxassislar jamoasi». Файлы портретов общие с русской версией.
 */
export const designTeam: Person[] = [
  { ...ru[0], name: "Ergashev Ahmadjon", role: "Asoschi, CEO", note: "$2M dan ortiq summadagi SAP ERP loyihalarini boshqargan. ACCA sertifikatlangan mutaxassisi" },
  { ...ru[1], name: "Zairov Sardorjon", role: "SAP Business One loyihalari rahbari", note: "Aylanmasi $1M+ boʻlgan distribyutsiya biznesida CEO tajribasi" },
  { ...ru[2], name: "Ernazarov Sarvar", role: "Operatsion direktor", note: "Biznes jarayonlarini raqamlashtirish, texnik strategiya va jamoani boshqarish" },
  { ...ru[3], name: "Mavlyanov Jasur", role: "SAP konsultanti, loyihalar rahbari", note: "Biznes jarayonlarini SAP Business One ga koʻchirish va boʻlimlar oʻrtasida maʼlumot almashinuvini integratsiyalash" },
  { ...ru[4], name: "Muxtorov Ibrohim", role: "Konsultant, loyihalar rahbari", note: "SAP Business One ni joriy etish va qoʻllab-quvvatlash" },
  { ...ru[5], name: "Turgʻunboyev Ilhom", role: "Texnik mutaxassis", note: "SAP B1 boʻyicha konsultant, tizimlar integratsiyasi, maʼlumotlar tahlili va loyihalarni texnik qoʻllab-quvvatlash" },
];
