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
