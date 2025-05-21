import RecipeCard from "@/components/ui/RecipeCard";
import { Recipe } from "@/types/recipes";
import { getServerTranslation } from "@/utils/getServerTranslation";
import Link from "next/link";

type RecipesPageProps = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<string> | undefined;
};

export default async function Recipes({params}: RecipesPageProps) {
  const { lang } = await params;
  const recipesData: Recipe[] = await GetRecipes(lang);
  const recipesTranslations = await getServerTranslation(lang, "common");

  return (
    <div className="min-h-screen w-full">
      {
        recipesData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-10 p-5">
            {recipesData.map((recipe) => (
              <Link
              key={recipe.id}
              href={`/${lang}/recipes/${recipe.id}`}
              >
                <RecipeCard
                key={recipe.id}
                recipe={recipe}
                />
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-blue-main mb-4">
              {recipesTranslations ? recipesTranslations("recipes") : "Loading..."}
            </h1>
            <p className="text-lg text-gray-600">Coming soon...</p>
          </div>
        )
      }
    </div>
  )
}

async function GetRecipes(lang: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/recipes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
      next: { revalidate: 3600 } 
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return []; 
  }
}