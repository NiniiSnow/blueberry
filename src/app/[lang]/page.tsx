import { getServerTranslation } from "@/utils/getServerTranslation";

export default async function Home({ params }: { params: { lang: string } }) {
  const language =  params.lang || "en"; 
  const homeText = await getServerTranslation(language, "common");
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        { homeText ? homeText("welcome") : "Loading..." }
      </main>
    </div>
  );
}
