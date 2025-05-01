import { NextRequest, NextResponse } from 'next/server';
import { recipes } from '@/data/recipes';
import { RecipePosts } from '@/types/recipes';



export async function GET(req: NextRequest) {
  const acceptLang = (req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en') as keyof RecipePosts;
  const data = recipes[acceptLang] || recipes.en;
  return NextResponse.json(data);
}