import * as en from "./en/service-detail";
import * as fr from "./fr/service-detail";
import * as de from "./de/service-detail";
import * as nl from "./nl/service-detail";
import * as pl from "./pl/service-detail";
import * as es from "./es/service-detail";

const contentByLocale = { en, fr, de, nl, pl, es };

export function getServiceDetailContent(locale) {
  return contentByLocale[locale] || contentByLocale.en;
}
