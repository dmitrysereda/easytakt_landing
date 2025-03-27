'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function ContactPage() {
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
    <main className="container mx-auto px-4 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Form Section */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900">
              Contact us
            </h1>
            <p className="text-lg text-gray-600">
              Need help or have feedback? Our team is here to support you and learn how we can make EasyTakt better meet your needs.
            </p>
          </div>

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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
            </div>

            {/* Company and Country Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                  Country
                </label>
                <select
                  id="country"
                  name="country"
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  defaultValue="United States"
                >
                  <option value="United States">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Spain">Spain</option>
                  <option value="Italy">Italy</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                How can we help you?
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                maxLength={500}
                placeholder="Max. 500 characters"
                required
              ></textarea>
            </div>

            {/* Privacy Policy */}
            <div className="text-sm text-gray-600">
              We care about your data. By signing up you agree to our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                Privacy Policy
              </Link>
              .
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={formState.isSubmitting}
              className="w-fit px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState.isSubmitting ? 'Sending...' : 'Send'}
            </button>
          </form>
        </div>

        {/* Image Section */}
        <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden">
          <Image
            src="/images/contact-workspace.jpg"
            alt="Modern workspace with a red bicycle"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </main>
  );
} 