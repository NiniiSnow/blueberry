import { NextRequest, NextResponse } from 'next/server';
import { blogs } from '@/data/blogs';
import { BlogPosts } from '@/types/blog';

export async function GET(req: NextRequest) {
    const acceptLang = (req.headers.get('accept-language')?.split(',')[0].split('-')[0] || 'en') as keyof BlogPosts;
    const data = blogs[acceptLang] || blogs.en; 
    return NextResponse.json(data);
}
