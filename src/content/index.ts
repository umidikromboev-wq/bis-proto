import type { Locale } from "./locale";

import * as blocksRu from "./blocks";
import * as blocksUz from "./uz/blocks";
import * as playbookRu from "./playbook";
import * as playbookUz from "./uz/playbook";
import * as blogRu from "./blog";
import * as blogUz from "./uz/blog";
import { academy as academyRu } from "./academy";
import { academy as academyUz } from "./uz/academy";
import { careers as careersRu } from "./careers";
import { careers as careersUz } from "./uz/careers";
import { contactsPage as contactsPageRu } from "./contacts-page";
import { contactsPage as contactsPageUz } from "./uz/contacts-page";
import { productB1 as productB1Ru } from "./product-b1";
import { productB1 as productB1Uz } from "./uz/product-b1";
import { productS4 as productS4Ru } from "./product-s4";
import { productS4 as productS4Uz } from "./uz/product-s4";
import { designTeam as designTeamRu } from "./design-team";
import { designTeam as designTeamUz } from "./uz/design-team";
import { clientLogos } from "./client-logos";

/**
 * Единая точка доступа к текстам сайта.
 *
 * Компоненты не импортируют файлы контента напрямую, а получают язык пропсом
 * и берут тексты отсюда: `const c = content(locale)`. Так добавление третьего
 * языка не потребует правок в вёрстке — только новый набор файлов.
 *
 * Типы узбекских наборов выводятся из русских (спред + переопределение полей),
 * поэтому расхождение в форме данных ловится компилятором, а не глазами.
 */
const RU = {
  blocks: blocksRu,
  playbook: playbookRu,
  blog: blogRu,
  academy: academyRu,
  careers: careersRu,
  contactsPage: contactsPageRu,
  productB1: productB1Ru,
  productS4: productS4Ru,
  designTeam: designTeamRu,
  clientLogos,
};

const UZ: typeof RU = {
  blocks: blocksUz,
  playbook: playbookUz,
  blog: blogUz,
  academy: academyUz,
  careers: careersUz,
  contactsPage: contactsPageUz,
  productB1: productB1Uz,
  productS4: productS4Uz,
  designTeam: designTeamUz,
  // Логотипы клиентов — файлы и названия брендов, переводить нечего.
  clientLogos,
};

export type SiteContent = typeof RU;

export function content(locale: Locale): SiteContent {
  return locale === "uz" ? UZ : RU;
}

export type { Locale };
