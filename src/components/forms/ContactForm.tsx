"use client";

import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { sendContactForm } from '@/services/contact';

export default function ContactForm() {  // removed lang parameter
  const { t } = useTranslation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const formRef = useRef<HTMLFormElement>(null);

  const resetForm = () => {
    if (formRef.current) {
      formRef.current.reset();
      setSubmitStatus('idle');
      setErrorMessage('');
    }
  };

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get('firstName') as string,
      lastName: formData.get('name') as string,
      email: formData.get('email') as string,
      message: formData.get('message') as string,
    };

    try {
      const response = await sendContactForm(data);
      if (!response.success) {
        throw new Error(response.error || 'Failed to send message');
      }
      setSubmitStatus('success');
      resetForm();
    } catch (error) {
      console.error('Form submission failed:', error);
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message');
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
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
        {isSubmitting ? t("sending") : t("sendMessage")}
      </button>
      
      {submitStatus === 'success' && (
        <p className="text-green-600 text-center">{t("messageSent")}</p>
      )}
      {submitStatus === 'error' && (
        <p className="text-red-600 text-center">
          {t(errorMessage) || t("messageError")}
        </p>
      )}
    </form>
  );
}
