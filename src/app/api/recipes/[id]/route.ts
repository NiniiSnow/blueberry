import { NextRequest, NextResponse } from 'next/server';
import { recipes } from '@/data/recipes';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const acceptLang = (request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en') as keyof typeof recipes;
  
  const languagerecipes = recipes[acceptLang] || recipes.en;
  const recipe = languagerecipes.find(recipe => recipe.id === id);

  if (!recipe) {
    return NextResponse.json(
      { error: 'recipe not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(recipe);
}
