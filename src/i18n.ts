import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../public/locales/en/common.json";
import ge from "../public/locales/ge/common.json";
import ru from "../public/locales/ru/common.json";

i18n.use(initReactI18next).init({
  fallbackLng: "en",
  lng: typeof window !== "undefined" ? localStorage.getItem("language") || "en" : "en",
  interpolation: { escapeValue: false },
  resources: {
    ge: { translation: ge },
    en: { translation: en },
    ru: { translation: ru },
  },
});

export const changeLanguage = (lng: string) => {
  i18n.changeLanguage(lng);
  if (typeof window !== "undefined") {
    localStorage.setItem("language", lng);
    document.cookie = `language=${lng}; path=/; SameSite=Lax`; 
  }
};

export default i18n;