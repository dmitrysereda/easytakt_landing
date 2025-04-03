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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Powerful Scheduling</span>
            <br />
            <span className="text-gray-900">Features for Business</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text">
              All in One Platform
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up-delay">
            Streamline appointments, automate reminders, and manage your business schedule with our comprehensive suite of scheduling tools
          </p>
        </div>
      </div>
    </section>
  );
} 