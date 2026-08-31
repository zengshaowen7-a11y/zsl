import { defineRouting } from "next-intl/routing";

export const plannedLocales = [];

export const routing = defineRouting({
  locales: ["en", "fr", "de", "nl", "pl", "es"],
  defaultLocale: "en",
  localePrefix: "as-needed",
  localeDetection: true,
});
