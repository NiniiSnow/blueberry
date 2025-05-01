import BlogPostCard from "@/components/ui/BlogPostCard";
import { BlogPost } from "@/types/blog";
import { getServerTranslation } from "@/utils/getServerTranslation";

type BlogMainPageProps = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<any>;
};

export default async function Blog({ params }: BlogMainPageProps) {
  const { lang } = await params;
  const blogData: BlogPost[] = await GetBlogs(lang);
  const blogTranslations = await getServerTranslation(lang, "common");

  return (
    <div className="bg-gray-100 min-h-screen px-5">
      <h1 className="text-3xl font-bold text-center py-8">
        {blogTranslations ? blogTranslations("blogs") : "Loading..."}
      </h1>
      {
        blogData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogData.map((blog) => (
              <BlogPostCard
                key={blog.id}
                blog={blog}
                lang={lang} // Pass the lang prop to BlogPostCard
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-8">
            {blogTranslations ? blogTranslations("noBlogs") : "No blogs available."}
          </p>
        )
      }
    </div>
    
  );
}

async function GetBlogs(lang: string) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  try {
    const res = await fetch(`${baseUrl}/api/blogs`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Accept-Language": lang,
      },
      next: { revalidate: 3600 } 
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error('Failed to fetch blogs:', error);
    return []; 
  }
}
