import { getServerTranslation } from "@/utils/getServerTranslation";
import Image from "next/image";
import { Metadata } from "next";

export async function generateMetadata({ params }: { params: { lang: string, id: string } }): Promise<Metadata> {
  const recipe = await getRecipe(params.id, params.lang);
  
  return {
    title: recipe.title,
    description: recipe.shortDescription,
    openGraph: {
      title: recipe.title,
      description: recipe.shortDescription,
      images: [{ url: recipe.image, width: 1200, height: 630 }],
    }
  };
}

export default async function RecipePage({ params }: { params: { lang: string, id: string } }) {
  const { lang, id } = params;
  const recipe = await getRecipe(id, lang);
  const t = await getServerTranslation(lang, "common");

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
          <h2 className="text-2xl font-semibold mb-4">{t("ingredients")}</h2>
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
          <h2 className="text-2xl font-semibold mb-4">{t("instructions")}</h2>
          <ol className="list-decimal list-inside space-y-4">
            {recipe.instructions?.map((instruction:string, index:number) => (
              <li key={index} className="text-gray-700">{instruction}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">{t("nutritionInfo")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ t('calories')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.calories}</p>
            </div>
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ t('protein')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.calories}</p>
            </div>
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ t('fat')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.calories}</p>
            </div>
            <div  className="text-center">
              <p className="font-semibold text-blue-main">{ t('carbohydrates')}</p>
              <p className="text-sm text-gray-600">{recipe.nutrition.calories}</p>
            </div>
        </div>
      </div>
    </div>
  );    
}

export async function getRecipe(id: string , language:string) {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
    return fetch(`${baseUrl}/api/recipes/${id}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept-Language": language,
        },
        next: { revalidate: 3600 } 
    })
    .then((res) => {
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
    });
}