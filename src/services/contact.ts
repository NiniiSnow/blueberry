import { API_URLS, BASE_URL } from '@/constants/urls';

export type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export async function sendContactForm(data: ContactFormData) {
  const response = await fetch(`${BASE_URL}${API_URLS.CONTACT}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok) {
    throw new Error(result.error || 'Failed to send message');
  }

  return result;
}
