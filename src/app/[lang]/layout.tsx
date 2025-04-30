import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import TranslationProvider from "@/components/provider/TranslatorProvider";

export default function LangLayout({
  children,
  params,
}: Readonly<{
  children: ReactElement<{ lang: string }>;
  params: { lang: string }; 
}>) {
  return (
    <TranslationProvider lang={params.lang}>
      <Layout language={params.lang}>
        {React.cloneElement(children, { lang: params.lang })}
      </Layout>
    </TranslationProvider>
  );
}
