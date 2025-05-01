import { API_URLS, BASE_URL } from '@/constants/urls';

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export async function sendContactForm(data: ContactFormData) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000';
  const response = await fetch(`${baseUrl}/api/contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message');
  }

  return result;
}
