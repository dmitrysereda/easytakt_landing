'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactForm() {
  const [formState, setFormState] = useState<{
    success?: string;
    error?: string;
    isSubmitting: boolean;
  }>({
    isSubmitting: false,
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState({ isSubmitting: true });

    try {
      const formData = new FormData(e.currentTarget);
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setFormState({
          isSubmitting: false,
          success: 'Thank you for your message. We will get back to you soon!',
        });
        // Reset form
        (e.target as HTMLFormElement).reset();
      } else {
        throw new Error('Failed to submit form');
      }
    } catch (error) {
      setFormState({
        isSubmitting: false,
        error: 'Something went wrong. Please try again later.',
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {formState.success && (
        <div className="p-4 bg-green-50 text-green-700 rounded-lg">
          {formState.success}
        </div>
      )}

      {formState.error && (
        <div className="p-4 bg-red-50 text-red-700 rounded-lg">
          {formState.error}
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
          required
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
          Company
        </label>
        <input
          type="text"
          name="company"
          id="company"
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Phone
        </label>
        <input
          type="tel"
          name="phone"
          id="phone"
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          How can we help you?
        </label>
        <textarea
          name="message"
          id="message"
          rows={4}
          className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 px-4 py-3"
          placeholder="Max. 500 characters"
          maxLength={500}
          required
        />
      </div>

      <div className="text-sm text-gray-500">
        We care about your data. By submitting the form you agree to our{' '}
        <Link href="/privacy" className="text-blue-600 hover:text-blue-700">
          Privacy Policy
        </Link>
        .
      </div>

      <div>
        <button
          type="submit"
          disabled={formState.isSubmitting}
          className="inline-flex justify-center rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {formState.isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </div>
    </form>
  );
} 