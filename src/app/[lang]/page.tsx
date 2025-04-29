import { getServerTranslation } from "@/utils/getServerTranslation";
import Image from "next/image";
import Link from "next/link";

export default async function Home({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const homeText = await getServerTranslation(lang, "common");
  
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-16 items-center">
        {/* Hero Section with Recipes */}
        <section className="w-full h-[600px] relative bg-[url('/images/homepage.webp')] bg-cover bg-center bg-no-repeat">
          <div className="absolute inset-0 bg-gradient-to-b from-blue-main/60 to-transparent"></div>
          <div className="relative z-10 h-full flex flex-col items-center justify-center gap-8 px-4 md:px-8 max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">
              {homeText ? homeText("recipesHeader") : "Loading..."}
            </h1>
            <p className="text-lg md:text-xl text-white text-center max-w-2xl">
              {homeText ? homeText("recipesSectionDescription") : ""}
            </p>
            <Link href={`/${lang}/recipes`}>
              <button className="mt-4 bg-pinkish-purple px-8 py-3 rounded-full text-white font-semibold hover:bg-blue-main transition-all transform hover:scale-105">
                {homeText ? homeText("recipesButtonDescription") : "Discover"}
              </button>
            </Link>
          </div>
        </section>

        {/* Products Section */}
        <section className="w-full max-w-7xl mx-auto px-4 md:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-main">
                {homeText ? homeText("ourProducts") : "Our Products"}
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                {homeText ? homeText("ourProductsDescription") : ""}
              </p>
            </div>  
            <div className="md:w-1/2">
              <Image
                src={"/images/georgia_blueberry_pin.webp"}
                width={500}
                height={500}
                alt="Georgia blueberry pin"
                className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="w-full relative min-h-[500px] flex items-center">
          <div className="absolute inset-0 bg-[url('/images/family_blueberry_field.webp')] bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-main/90 via-blue-main/70 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                {homeText ? homeText("aboutUs") : "About Us"}
              </h2>
              <p className="text-white text-lg leading-relaxed mb-8">
                {homeText ? homeText("aboutUsShortDescription") : ""}
              </p>
              <Link href={`/${lang}/about`}>
                <button className="bg-green-main-2 px-8 py-3 rounded-full text-white font-semibold hover:bg-blue-main transition-all transform hover:scale-105">
                  {homeText ? homeText("seeMore") : "See more"}
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Gallery and Location sections to be added */}
      </main>
    </div>
  );
}

export function RecipeCard(){
  return(
    <div className="flex flex-col gap-4  rounded-lg  p-4 max-w-sm w-full">
      <Image
      src={"/images/blueberry-pie.webp"}
      width={200}
      height={300}
      alt="Recipe image"
      className="rounded-lg object-cover h-[300px] min-w-[200px]"
      loading="lazy"
      priority={false}
      ></Image>
      <h3 className="text-lg font-semibold text-blue-main">Recipe Title</h3>
    </div>
  )
}
