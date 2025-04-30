import { getServerTranslation } from "@/utils/getServerTranslation";
import Image from "next/image";
import ImageSwiper from "@/components/ui/ImageSwiper";
// import Map from '@/components/ui/Map';

type AboutPageProps = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<any> | undefined;
};

export default async function AboutPage({ params }: AboutPageProps) {
  const { lang } = await params;
  const aboutText = await getServerTranslation(lang, "common");
  
  const images = [
    {
      src: "/images/cxunkur.webp",
      alt: "Blueberry field from above"
    },
    {
      src: "/images/blueberry_in_hands.webp",
      alt: "Blueberry field"
    },
  ];

  return (
      <div className="min-h-screen w-full">
          <section className="relative h-[600px]">
              <Image
                  src="/images/blueberry_garden_scene.webp"
                  fill
                  alt="Blueberry field cover"
                  className="object-cover"
                  priority
              />
              <div className="absolute inset-0">
                  <div className="container mx-auto h-full flex flex-col  md:w-1/2 items-center justify-center px-4">
                      <h1 className="text-white text-lg md:text-xl text-center mt-4  md:max-w-2xl">
                          {aboutText("aboutUsShortDescription")}
                      </h1>
                  </div>
              </div>
          </section>
          {/* Timeline Section */}
          <section className="text-gray-600 body-font py-10 md:py-20" id="development">
              <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-main text-center mb-16">
                      {aboutText ? aboutText("ourJourney") : "Our Journey"}
                  </h2>
                  <div className="flex flex-wrap justify-evenly items-center w-full">
                      <div className="md:pr-10 md:py-6">
                          <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 inline-flex items-center justify-center text-white relative z-10">
                                <Image
                                src={"/icons/seedling.svg"}
                                width={20}
                                height={20}
                                alt="Seedling icon"
                                ></Image>
                              </div>
                              <div className="flex-grow pl-4">
                                  <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">2021</h2>
                                  <p className="leading-relaxed font-semibold">პირველი ნერგების ჩამოტანა </p>
                                  <p className="leading-relaxed">Blueberry Gardens არის ოჯახური მეურნეობა, რომელიც მდებარეობს საქართველოს გულში. ჩვენ ვმუშაობთ უმაღლესი ხარისხის მოცვის მოყვანაზე და ვაწვდით ჩვენს მომხმარებლებს ყველაზე ახალ და გემრიელ კენკრას. </p>
                              </div>
                          </div>
                          <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 inline-flex items-center justify-center text-white relative z-10">
                                <Image
                                src={"/icons/tractor.svg"}
                                width={20}
                                height={20}
                                alt="Tractor icon"
                                ></Image>
                              </div>
                              <div className="flex-grow pl-4">  
                                  <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">2022</h2>
                                  <p className="leading-relaxed font-semibold">გამზადებულ და შემოწმებულ მიწაზე დარგვა</p>
                                  <p className="leading-relaxed">Blueberry Gardens არის ოჯახური მეურნეობა, რომელიც მდებარეობს საქართველოს გულში. ჩვენ ვმუშაობთ უმაღლესი ხარისხის მოცვის მოყვანაზე და ვაწვდით ჩვენს მომხმარებლებს ყველაზე ახალ და გემრიელ კენკრას. </p>
                              </div>
                          </div>
                          <div className="flex relative pb-12">
                              <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
                                  <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
                              </div>
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 inline-flex items-center justify-center text-white relative z-10">
                                <Image
                                src={"/icons/single_blueberry.svg"}
                                width={20}
                                height={20}
                                alt="Tractor icon"
                                ></Image>
                              </div>
                              <div className="flex-grow pl-4">
                                  <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">2023</h2>
                                  <p className="leading-relaxed font-semibold">პირველი მოსავალი</p>
                                  <p className="leading-relaxed">Blueberry Gardens არის ოჯახური მეურნეობა, რომელიც მდებარეობს საქართველოს გულში. ჩვენ ვმუშაობთ უმაღლესი ხარისხის მოცვის მოყვანაზე და ვაწვდით ჩვენს მომხმარებლებს ყველაზე ახალ და გემრიელ კენკრას. </p>
                              </div>
                          </div>
                          <div className="flex relative pb-12">
                              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 inline-flex items-center justify-center text-white relative z-10">
                              <Image
                                src={"/icons/multiple_blueberries.svg"}
                                width={20}
                                height={20}
                                alt="Tractor icon"
                                ></Image>
                              </div>
                              <div className="flex-grow pl-4">
                                  <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">2024</h2>
                                  <p className="leading-relaxed font-semibold">უხვი მოსავალი</p>
                                  <p className="leading-relaxed">Blueberry Gardens არის ოჯახური მეურნეობა, რომელიც მდებარეობს საქართველოს გულში. ჩვენ ვმუშაობთ უმაღლესი ხარისხის მოცვის მოყვანაზე და ვაწვდით ჩვენს მომხმარებლებს ყველაზე ახალ და გემრიელ კენკრას. </p> 
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>

          {/* Gallery Section */}
          <section>
              <div className="flex">
                  <div className="w-1/2 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-main text-center my-12">
                        {aboutText ? aboutText("gallery") : "Our Gallery"}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-center mb-8 lg:w-1/2 mx-auto">
                        {aboutText("galleryDescription")}
                    </p>
                  </div>
                  <div className="w-1/2 flex justify-center items-center">

                    <ImageSwiper images={images} />
                  </div>
              </div>
          </section>

          {/* Location Section */}
          <section className="py-16 bg-gray-50">
              <div className="container mx-auto px-4">
                  <h2 className="text-3xl md:text-4xl font-bold text-blue-main text-center mb-8">
                      {aboutText ? aboutText("location") : "Our Locations"}
                  </h2>
                  <p className="text-gray-700 text-lg text-center mb-12 max-w-2xl mx-auto">
                      {aboutText ? aboutText("locationDescription") : 
                      "Visit our blueberry gardens in Georgia. Click on the markers to get directions."}
                  </p>
                  {/* <div className="rounded-lg overflow-hidden shadow-xl">
                      <Map />
                  </div> */}
                  <div className="grid md:grid-cols-2 gap-8 mt-12">
                      <div className="text-center p-6 bg-white rounded-lg shadow-md">
                          <h3 className="text-xl font-semibold text-blue-main mb-2">Cxunkuri</h3>
                          <p className="text-gray-600">
                              {aboutText ? aboutText("cxunkuriAddress") : "Cxunkuri, Imereti Region"}
                          </p>
                      </div>
                      <div className="text-center p-6 bg-white rounded-lg shadow-md">
                          <h3 className="text-xl font-semibold text-blue-main mb-2">Ternali</h3>
                          <p className="text-gray-600">
                              {aboutText ? aboutText("potiAddress") : "Ternali"}
                          </p>
                      </div>
                  </div>
              </div>
          </section>
      </div>
  );
}