export const API_URLS = {
  CONTACT: '/api/contact',
  BLOGS: '/api/blogs',
  RECIPES: '/api/recipes',
} as const;

export const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';;
