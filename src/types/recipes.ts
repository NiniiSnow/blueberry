export interface RecipePosts {
    en: Recipe[];
    ge: Recipe[];
    ru: Recipe[];
  };
  
export interface Recipe {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  totalTime: number;
  servings?: number;
  ingredients: string[];
  instructions: string[];
  nutrition: {
    calories: number;
    protein: number;
    fat: number;
    carbohydrates: number;
  };
  author: string;
  date: string;
}

