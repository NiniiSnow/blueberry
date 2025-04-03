"use client";
import { I18nextProvider } from "react-i18next";
import i18n from "@/i18n";
import { useEffect } from "react";

export default function TranslationProvider({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) {
  useEffect(() => {
    if (i18n.language !== lang) {
      i18n.changeLanguage(lang); 
    }
  }, [lang]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}