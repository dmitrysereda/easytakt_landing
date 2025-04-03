import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';
import ContactForm from '@/components/forms/ContactForm';

export const metadata: Metadata = {
  title: 'Contact Us - EasyTakt',
  description: 'Get in touch with EasyTakt team for support or feedback.',
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact us</h1>
              <p className="text-lg text-gray-600 mb-8">
                Need help or have feedback? Our team is here to support you and learn how we can make EasyTakt better meet your needs.
              </p>

              <ContactForm />
            </div>

            {/* Image Section */}
            <div className="relative h-[600px] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src="/images/contact-page.jpg"
                alt="fortune-cookie"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 