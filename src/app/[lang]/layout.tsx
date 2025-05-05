import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import TranslationProvider from "@/components/provider/TranslatorProvider";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: {
      template: '%s | Blueberry Gardens',
      default: 'Blueberry Gardens',
    },
    description: 'Blueberry farm in Georgia',
    alternates: {
      canonical: '/',
      languages: {
        'en': '/en',
        'ka': '/ge',
        'ru': '/ru',
      },
    },
  };
}

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
