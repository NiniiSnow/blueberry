import { Recipe } from "@/types/recipes";

export async function getRecipe(recipeId: string, language: string): Promise<Recipe> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/recipes/${recipeId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": language,
    },
    next: { revalidate: 3600 } 
  });

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  return res.json();
}
