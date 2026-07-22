/**
 * Логотипы клиентов, полученные из рабочей группы BIS в Telegram.
 * Приведены к одному виду: фон убран, знак переведён в монохром и посажен на
 * одну оптическую высоту — исходники приходили на фонах от чёрного до жёлтого,
 * и в один ряд их было не поставить.
 */
export type ClientLogo = { name: string; file: string; w: number; h: number };

export const clientLogos: ClientLogo[] = [
  { name: "7 TECH", file: "7-tech.png", w: 160, h: 160 },
  { name: "ASL BARAKA", file: "asl-baraka.png", w: 294, h: 160 },
  { name: "AVANTA TRADE", file: "avanta-trade.png", w: 188, h: 160 },
  { name: "BABY BOO", file: "baby-boo.png", w: 382, h: 160 },
  { name: "BRRAUF", file: "brrauf.png", w: 161, h: 160 },
  { name: "CLIMADENS", file: "climadens.png", w: 180, h: 160 },
  { name: "CREDO MOBILE", file: "credo-mobile.png", w: 605, h: 160 },
  { name: "DARIAN", file: "darian.png", w: 160, h: 160 },
  { name: "E'ZOZ", file: "ezoz.png", w: 159, h: 160 },
  { name: "ELMAS", file: "elmas.png", w: 535, h: 160 },
  { name: "ENZO", file: "enzo.png", w: 533, h: 160 },
  { name: "EURO-FOOD", file: "euro-food.png", w: 158, h: 160 },
  { name: "EXACT", file: "exact.png", w: 159, h: 160 },
  { name: "GLAMOUR COSMETICS", file: "glamour-cosmetics.png", w: 271, h: 160 },
  { name: "GOOD LIFE", file: "good-life.png", w: 556, h: 160 },
  { name: "ICOMFORT", file: "icomfort.png", w: 162, h: 160 },
  { name: "KRUPASNAB", file: "krupasnab.png", w: 204, h: 160 },
  { name: "MASAAFA", file: "masaafa.png", w: 620, h: 52 },
  { name: "MEGATON", file: "megaton.png", w: 160, h: 160 },
  { name: "MMX PRO", file: "mmx-pro.png", w: 180, h: 160 },
  { name: "MUNIS", file: "munis.png", w: 541, h: 160 },
  { name: "NEOLINE", file: "neoline.png", w: 301, h: 160 },
  { name: "ORIENT CERAMIC", file: "orient-ceramic.png", w: 174, h: 160 },
  { name: "PROBOX", file: "probox.png", w: 169, h: 160 },
  { name: "UNIAUTO", file: "uniauto.png", w: 424, h: 160 },
  { name: "UZKIP", file: "uzkip.png", w: 160, h: 160 },
  { name: "VENTUM", file: "ventum.png", w: 161, h: 160 },
  { name: "МАРИМОЛОКО", file: "маримолоко.png", w: 355, h: 160 },
];
