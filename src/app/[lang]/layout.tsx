import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import TranslationProvider from "@/components/provider/TranslatorProvider";

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: ReactElement<{ lang: string }>;
  params: { lang: string }; 
}>) {
  const { lang } = await params
  return (
    <TranslationProvider lang={lang}>
      <Layout language={lang}>
        {React.cloneElement(children, { lang })}
      </Layout>
    </TranslationProvider>
  );
}
