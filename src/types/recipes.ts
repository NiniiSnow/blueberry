export interface RecipePosts {
    en: Recipe[];
    ge: Recipe[];
    ru: Recipe[];
  };
  
export interface Recipe{
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    image: string;
    date: string;
  };
  