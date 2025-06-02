import { getServerTranslation } from "@/utils/getServerTranslation";
import Image from "next/image";

type Contactparams = {
  params: Promise<{ lang: string }>;
  searchParams?: Promise<string> | undefined;
};

export default async function Contact({ params }: Contactparams) {
  const { lang } = await params;
  const contactText = await getServerTranslation(lang, "common");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center justify-center">
          {/* Contact Information */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-blue-main mb-4">
                {contactText ? contactText("contactUs") : "Contact Us"}
              </h1>
              <p className="text-gray-600 text-lg">
                {contactText ? contactText("contactUsDescription") : "We would love to hear from you!"}
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image src="/icons/location_white.svg" width={24} height={24} alt="Location" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-main">
                    {contactText ? contactText("address") : "Address"}
                  </h3>
                  <p className="text-gray-600">Imereti, Georgia</p>
                </div>
              </div>

              <a 
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/995592094883"
              className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image src="/icons/phone_white.svg" width={24} height={24} alt="Phone" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-main">
                    {contactText ? contactText("phone") : "Phone"}
                  </h3>
                  <p
                    className="text-gray-600 hover:text-green-600 transition-colors cursor-pointer"
                  >
                    +995 592 09 48 83
                  </p>
                </div>
              </a>

              <a 
                href="mailto:blueberrygardens2021@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image src="/icons/email_white.svg" width={24} height={24} alt="Email" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-main">
                    {contactText ? contactText("email") : "Email"}
                  </h3>
                  <p className="text-gray-600 hover:text-blue-600 transition-colors">
                    blueberrygardens2021@gmail.com
                  </p>
                </div>
              </a>

              <a 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4"
              href="https://www.facebook.com/share/14yDahunSH/?mibextid=wwXIfr" 
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="inline-flex text-white hover:text-blue-600 transition-colors">
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </span>
                </div>
                <div>
                  <h3 className="font-semibold text-blue-main">
                    Facebook
                  </h3>
                  <p className="text-gray-600">Blueberry Gardens</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <ContactForm />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}