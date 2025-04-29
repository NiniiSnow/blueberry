import { BlogPost } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

export default function BlogPostCard({blog, lang}: { blog: BlogPost , lang: string}) {
  return (
    <Link
    href={`/${lang}/blogs/${blog.id}`}
    >
        <div className="flex flex-col items-start justify-evenly p-4  rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
          <Image 
          src={blog.image} 
          alt={blog.title} 
          width={300}
          height={300}
          className="w-full h-48 object-cover rounded-t-lg"
          />
          <span className="text-sm text-gray-400">{blog.date}</span>
          <h2 className="text-xl font-semibold mt-4">{blog.title}</h2>
          <p className="mt-2 text-gray-600 min-h-12">{blog.shortDescription}</p>
        </div>
    </Link>
  );

}