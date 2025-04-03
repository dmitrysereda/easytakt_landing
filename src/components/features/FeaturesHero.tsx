'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

export default function FeaturesHero() {
  const heroRef = useIntersectionObserver();

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className="text-center max-w-4xl mx-auto animate-fade-in-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block text-gray-900 mb-4">Powerful Scheduling</span>
            <span className="block text-gray-900 mb-4">Features for Business</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text pb-2">
              All in One Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-10">
            Streamline your scheduling workflow with powerful tools that drive business growth
          </p>
        </div>
      </div>
    </section>
  );
} 