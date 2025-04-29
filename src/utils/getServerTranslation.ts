import i18next from "i18next";
import Backend from "i18next-fs-backend";
import path from "path";

export async function getServerTranslation(lang: string, namespace = "common") {
  const i18n = i18next.createInstance();
  
  await i18n.use(Backend).init({
    lng: lang,
    fallbackLng: "en",
    ns: [namespace], 
    defaultNS: "common",
    backend: {
      loadPath: path.resolve(`./public/locales/${lang}/${namespace}.json`),
    },
  });

  return i18n.t; 
}
