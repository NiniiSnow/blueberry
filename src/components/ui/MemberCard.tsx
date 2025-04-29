import Image from "next/image";

export default function MemberCard({
  name,
  image,
  alt,
  position,
}: {
  name: string;
  image: string;
  alt: string;
  position: string;
}) {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
      <div className="relative h-14">
        <Image
          src={image}
          alt={alt}
          fill
          className="object-cover rounded-full"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-blue-main">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </div>
  );
}