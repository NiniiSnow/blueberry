import { Recipe } from "@/types/recipes";
import Image from "next/image";

export default function RecipeCard({ 
 recipe 
}: { 
  recipe: Recipe
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow min-h-[300px]">
      <div className="relative h-48">
        <Image
          src={recipe.image}
          alt={recipe.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-main">{recipe.title}</h3>
        <p>{recipe.shortDescription}</p>
      </div>
    </div>
  );
}
