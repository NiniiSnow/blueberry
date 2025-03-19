import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  fallbackLng: "en", 
  lng: "en", 
  interpolation: { escapeValue: false },
  resources: {
    ge: { translation: require("../public/locales/ge/common.json") },
    en: { translation: require("../public/locales/en/common.json") },
    ru: { translation: require("../public/locales/ru/common.json") },
  },
});

export default i18n;