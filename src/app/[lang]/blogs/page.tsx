import BlogPostCard from "@/components/ui/BlogPostCard";
import { BlogPost } from "@/types/blog";
import { getServerTranslation } from "@/utils/getServerTranslation";

export default async function Blog({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const blogData:BlogPost[] = await GetBlogs(lang);
  const blogTranslations = await getServerTranslation(lang, "common");

  return (
    <div className="bg-gray-100 min-h-screen px-5">
      <h1 className="text-3xl font-bold text-center py-8">
        {blogTranslations ? blogTranslations("blogs") : "Loading..."}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {blogData.map((blog: any) => (
          <BlogPostCard key={blog.id} blog={blog} lang={lang} />
        ))}
      </div>
    </div>
  )
}

async function GetBlogs(lang: string) {
  const res = await fetch(`http://localhost:3000/api/blogs`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Accept-Language": lang,
    },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
