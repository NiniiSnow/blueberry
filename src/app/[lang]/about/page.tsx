import { getServerTranslation } from "@/utils/getServerTranslation";
import Image from "next/image";
import ImageSwiper from "@/components/ui/ImageSwiper";

export default async function About({ params }: { params: { lang: string } }){
    const { lang } = params;
    const aboutText = await getServerTranslation(lang, "common");
    
    const images = [
      {
        src: "/images/blueberry_garden_scene.webp",
        alt: "Blueberry field cover"
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

            {/* <section className="text-gray-600 body-font">
              <div className="container px-5 py-24 mx-auto flex flex-wrap">
                <div className="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
                  <Image
                    src={"/images/blueberry_in_hands.webp"}
                    width={500}
                    height={500}
                    alt="Blueberry field"
                    className="object-cover object-center h-full w-full">
                  </Image>
                </div>
                <div className="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
                  <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                      <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    </div>
                  </div>
                  <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <circle cx="6" cy="6" r="3"></circle>
                        <circle cx="6" cy="18" r="3"></circle>
                        <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">The Catalyzer</h2>
                      <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    </div>
                  </div>
                  <div className="flex flex-col mb-10 lg:items-start items-center">
                    <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-6 h-6" viewBox="0 0 24 24">
                        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Neptune</h2>
                      <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section> */}


            {/* About Company Section */}
            {/* <section className="py-10 md:py-20 bg-gray-50" id="aboutCompany">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-12 items-center">
                        <div className="md:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-blue-main">
                                {aboutText ? aboutText("aboutCompany") : "About Company"}
                            </h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                {aboutText ? aboutText("aboutCompanyDescription") : "Lorem ipsum..."}
                            </p>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src="/images/blueberry03.webp"
                                width={500}
                                height={500}
                                alt="Company image"
                                className="rounded-lg shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section> */}

            {/* Gallery Section */}
            <section>
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-blue-main text-center my-12">
                        {aboutText ? aboutText("gallery") : "Our Gallery"}
                    </h2>
                    <p className="text-gray-700 text-lg leading-relaxed text-center mb-8 lg:w-1/2 mx-auto">
                        {aboutText("galleryDescription")}
                    </p>
                    <ImageSwiper images={images} />
                </div>
            </section>
        </div>
    );
}