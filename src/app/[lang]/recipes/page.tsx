import { getServerTranslation } from "@/utils/getServerTranslation";

type RecipesPageProps = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<string> | undefined;
};

export default async function Recipes({params}: RecipesPageProps) {
  const { lang } = await params;
  const recipesTranslations = await getServerTranslation(lang, "common");

  return (
    <div className="min-h-screen w-full">
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <h1 className="text-4xl font-bold text-blue-main mb-4">
          {recipesTranslations ? recipesTranslations("recipes") : "Loading..."}
        </h1>
        <p className="text-lg text-gray-600">Coming soon...</p>
      </div>
    </div>
  )
}