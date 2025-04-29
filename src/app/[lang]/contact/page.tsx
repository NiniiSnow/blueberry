import { getServerTranslation } from "@/utils/getServerTranslation";
import ContactForm from "@/components/forms/ContactForm";
import Image from "next/image";

export default async function Contact({ params }: { params: { lang: string } }) {
  const { lang } = await params;
  const contactText = await getServerTranslation(lang, "common");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
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

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image src="/icons/phone_white.svg" width={24} height={24} alt="Phone" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-main">
                    {contactText ? contactText("phone") : "Phone"}
                  </h3>
                  <p className="text-gray-600">+995 568 20 99 33</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                  <Image src="/icons/email_white.svg" width={24} height={24} alt="Email" />
                </div>
                <div>
                  <h3 className="font-semibold text-blue-main">
                    {contactText ? contactText("email") : "Email"}
                  </h3>
                  <p className="text-gray-600">blueberrygardens2021@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <ContactForm lang={lang} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}