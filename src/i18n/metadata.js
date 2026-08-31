import { getTranslations } from "next-intl/server";

export async function getPageMetadata(locale, page) {
  const t = await getTranslations({ locale, namespace: `PageMetadata.${page}` });
  return {
    title: t("title"),
    ...(t.has("description") ? { description: t("description") } : {}),
  };
}
