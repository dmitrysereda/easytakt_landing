'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesHero: React.FC = () => {
  const { t, loading } = useLanguage();
  const heroRef = useIntersectionObserver();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  const title = t('features.title');
  const subtitle = t('features.subtitle');
  const description = t('features.description');

  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={heroRef}
          className="text-center max-w-4xl mx-auto animate-fade-in-up"
        >
          <h1 className="text-5xl md:text-6xl font-bold">
            <span className="block text-gray-900 mb-4">{title}</span>
            <span className="block bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text pb-2">
              {subtitle}
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-10">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesHero; 