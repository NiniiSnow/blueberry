import Image from "next/image";

export default function ProductCard({
  title,
  price,
  image,
  status
}: {
  title: string;
  price: string;
  image: string;
  status: 'available' | 'coming-soon';
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        {status === 'coming-soon' && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-semibold">Coming Soon</span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-main">{title}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
}
