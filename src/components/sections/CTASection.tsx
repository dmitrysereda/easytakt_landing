'use client';

import SignupButton from '@/components/SignupButton';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function CTASection() {
  const contentRef = useIntersectionObserver();

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-white" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className="text-center animate-fade-in-up"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to streamline your business?
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses already using EasyTakt to manage their schedules and delight their clients.
          </p>
          <SignupButton className="text-lg px-8 py-4" />
        </div>
      </div>
    </section>
  );
} 