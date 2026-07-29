export type Img = {
  /** ТЗ дизайнеру: что именно должно быть на этом изображении */
  brief: string;
  ratio?: string;
  tall?: boolean;
};

export type Stat = { value: string; label: string; note?: string };

export type Card = {
  title: string;
  text?: string;
  meta?: string;
  items?: string[];
};

export type Case = {
  slug: string;
  client: string;
  industry: string;
  scale: string;
  intro: string;
  before: string[];
  after: { value: string; label: string }[];
  quote?: { text: string; author: string };
  img: Img;
};

export type Faq = { q: string; a: string };

/** Страница продукта (SAP Business One, SAP S/4HANA) — один шаблон на оба. */
export type ProductPage = {
  slug: string;
  /** Пункт «хлебных крошек» и title страницы */
  title: string;
  metaDescription: string;
  hero: {
    eyebrow: string;
    h1: string;
    lead: string;
    cta: string;
    ctaSecondary: string;
    facts: Stat[];
    img: Img;
  };
  /** Кому подходит / кому не подходит — честная отсечка */
  fit: {
    kicker: string;
    h2: string;
    lead: string;
    yes: { title: string; text: string }[];
    no: string[];
  };
  /** Функциональные блоки системы */
  modules: {
    kicker: string;
    h2: string;
    lead: string;
    items: { name: string; text: string; marks: string[] }[];
  };
  /** Сценарий «день из жизни» — как выглядит работа в системе */
  scenario: {
    kicker: string;
    h2: string;
    lead: string;
    steps: { time: string; title: string; text: string }[];
    img: Img;
  };
  /** Сроки, состав проекта, бюджетная вилка */
  project: {
    kicker: string;
    h2: string;
    lead: string;
    phases: { name: string; term: string; text: string }[];
    budget: { label: string; value: string; note: string }[];
    note?: string;
  };
  faq: Faq[];
  /** Ссылки на релевантные кейсы */
  caseSlugs: string[];
};

export type BlogPost = {
  slug: string;
  /** Заголовок статьи — то, что стоит в <h1> на странице */
  title: string;
  /**
   * Заголовок для поисковой выдачи, если он отличается от <h1>.
   * У статей, перенесённых с прежнего сайта, это разные строки, и обе
   * набирали позиции — сокращать их до одной нельзя.
   */
  metaTitle?: string;
  /** Подзаголовок в списке и лид в статье */
  excerpt: string;
  /** Дата публикации. У перенесённых статей отсутствует: прежний сайт её не хранил. */
  date?: string;
  readingTime: string;
  category: string;
  author?: string;
  /** Готовый файл обложки в public. У статей, написанных под новый сайт, вместо него cover-бриф. */
  image?: string;
  cover?: Img;
  /** Тело статьи: простые блоки, без markdown-парсера */
  body: BlogBlock[];
};

export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string; author?: string }
  | { type: "callout"; title: string; text: string }
  | { type: "img"; img: Img };

export type Tariff = {
  id: string;
  name: string;
  for: string;
  price: string;
  priceNote: string;
  term: string;
  includes: string[];
  popular?: boolean;
};
