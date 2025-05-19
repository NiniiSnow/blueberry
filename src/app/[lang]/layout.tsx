import React, { ReactElement } from "react";
import Layout from "@/components/layout/Layout";
import TranslationProvider from "@/components/provider/TranslatorProvider";
import { Metadata } from "next";
import { getServerTranslation } from "@/utils/getServerTranslation";

export async function generateMetadata({ params }: { params: { lang: string } }): Promise<Metadata> {
  const { lang } = await  params;
  const t = await getServerTranslation(lang, "common");

  return {
    title: {
      template: `%s | ${t('siteName')}`,
      default: t('siteName'),
    },
    description: t('description'),
    openGraph: {
      title: t('siteName'),
      description: t('description'),
      url: 'https://blueberrygardens.ge',
      siteName: t('siteName'),
      images: [
        {
          url: '/images/blueberry_garden_scene.webp',
          width: 1200,
          height: 630,
          alt: t('ogImageAlt'),
        },
      ],
      locale: lang,
      type: 'website',
    },
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
