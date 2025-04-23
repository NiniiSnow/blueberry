import { NextRequest, NextResponse } from 'next/server';
import { blogs } from '../route'; // Import the blogs data

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
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
