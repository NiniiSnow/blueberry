import Image from "next/image";

export default function RecipeCard({ 
  title, 
  image, 
  alt 
}: { 
  title: string; 
  image: string; 
  alt: string; 
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-main">{title}</h3>
      </div>
    </div>
  );
}
