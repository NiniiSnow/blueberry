import { BlogPost } from "@/types/blog";
import Image from "next/image";

async function getBlogPost(lang: string, id: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/blogs/${id}`, {
    headers: {
      'Accept-Language': lang
    }
  });
  
  if (!res.ok) {
    throw new Error('Blog not found');
  }
  
  return res.json();
}

type BlogPostPageProps = {
  params: Promise<{ lang: string; id: string }>,
  searchParams?: Promise<string> | undefined
};

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { lang, id } = await params;
  const blog: BlogPost = await getBlogPost(lang, id);

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose lg:prose-xl">
        <Image
          src={blog.image}
          width={1200}
          height={600}
          alt={blog.title}
          className="w-full h-[400px] object-cover rounded-lg mb-8"
        />
        <h1 className="text-4xl font-bold text-blue-main mb-4">{blog.title}</h1>
        <div className="text-gray-500 mb-8">{blog.date}</div>
        <div className="whitespace-pre-wrap">{blog.fullDescription}</div>
      </article>
    </div>
  );
}