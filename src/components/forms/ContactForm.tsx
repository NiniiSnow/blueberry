"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";

export default function ContactForm({ lang }: { lang: string }) {
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);

    // Add your form submission logic here
    // Example: send to an API endpoint
    
    setIsSubmitting(false);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t("firstName")}
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-main focus:border-transparent outline-none"
          placeholder={t("firstNamePlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          {t("lastName")}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-main focus:border-transparent outline-none"
          placeholder={t("lastNamePlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          {t("email")}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-main focus:border-transparent outline-none"
          placeholder={t("emailPlaceholder")}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-main focus:border-transparent outline-none"
          placeholder={t("messagePlaceholder")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-blue-main text-white py-3 px-6 rounded-md hover:bg-blue-main/90 transition-colors disabled:bg-gray-400"
      >
        {isSubmitting ? t("sendMessage") : t("sendMessage")}
      </button>
    </form>
  );
}
