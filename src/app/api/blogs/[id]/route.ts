import { NextRequest, NextResponse } from 'next/server';
import { blogs } from '@/data/blogs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const acceptLang = (request.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en') as keyof typeof blogs;
  
  const languageBlogs = blogs[acceptLang] || blogs.en;
  const blog = languageBlogs.find(blog => blog.id === id);

  if (!blog) {
    return NextResponse.json(
      { error: 'Blog not found' },
      { status: 404 }
    );
  }

  return NextResponse.json(blog);
}
