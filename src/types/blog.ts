export interface BlogPost {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  date: string;
}

export interface BlogPosts {
  en: BlogPost[];
  ge: BlogPost[];
  ru: BlogPost[];
}
