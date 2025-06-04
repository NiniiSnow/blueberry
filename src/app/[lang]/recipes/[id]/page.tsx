import { getServerTranslation } from "@/utils/getServerTranslation";
import Image from "next/image";
import { Metadata } from "next";
import { Recipe } from "@/types/recipes";
import { getRecipe } from "@/services/recipes";

type RecipePageProps = {
  params: Promise<{ lang: string; id: string }>,
  searchParams?: Promise<string>
};

export async function generateMetadata({ params }: { params: Promise<{ lang: string; id: string }> }): Promise<Metadata> {
  const { lang, id } = await params;
  const recipe = await getRecipe(id, lang);
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://blueberrygardens.ge';
  
  return {
    title: recipe.title,
    description: recipe.shortDescription,
    openGraph: {
      title: recipe.title,
      description: recipe.shortDescription,
      type: 'article',
      url: `${baseUrl}/${lang}/recipes/${id}`,
      images: [{
        url: recipe.image,
        width: 1200,
        height: 630,
        alt: recipe.title,
        type: 'image/webp',
      }],
      siteName: 'Blueberry Gardens',
    },
    twitter: {
      card: 'summary_large_image',
      title: recipe.title,
      description: recipe.shortDescription,
      images: [recipe.image],
    },
  };
}

export default async function RecipePage({ params }: RecipePageProps) {
  const { lang, id } = await params;
  const recipeTranslations = await getServerTranslation(lang, "common");
  const recipe: Recipe = await getRecipe(id, lang);
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-blue-main mb-4">{recipe.title}</h1>
        <p className="text-gray-600 mb-4">{recipe.shortDescription}</p>
      </div>

      <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{recipeTranslations("ingredients")}</h2>
          <ul className="space-y-2">
            {recipe.ingredients?.map((ingredient:string, index:number) => (
              <li key={index} className="flex items-center">
                <span className="w-2 h-2 bg-blue-main rounded-full mr-2"></span>
                {ingredient}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">{recipeTranslations("instructions")}</h2>
          <ol className="list-decimal list-inside space-y-4">
            {recipe.instructions?.map((instruction:string, index:number) => (
              <li key={index} className="text-gray-700">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{recipeTranslations("nutritionInfo")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ recipeTranslations('calories')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.calories}</p>
            </div>
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ recipeTranslations('protein')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.protein}</p>
            </div>
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ recipeTranslations('fat')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.fat}</p>
            </div>
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ recipeTranslations('carbohydrates')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.carbohydrates}</p>
            </div>
        </div>
      </div>
    </div>
  );    
}