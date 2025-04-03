'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function PricingHero() {
  const heroRef = useIntersectionObserver();

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className="text-center max-w-4xl mx-auto animate-fade-in-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block text-gray-900 mb-4">Simple, Transparent</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text pb-2">
              Pricing for Everyone
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-10">
            No hidden fees. No long-term contracts. Just everything you need to run your business efficiently.
          </p>
        </div>
      </div>
    </section>
  );
} 