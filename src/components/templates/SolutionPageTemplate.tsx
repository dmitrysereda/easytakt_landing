'use client';

import React from 'react';
import Image from 'next/image';
import { LucideIcon } from 'lucide-react';
import SignupButton from '@/components/SignupButton';
import AnimatedElement from '@/components/AnimatedElement';
import GettingStartedSection from '@/components/sections/GettingStartedSection';
import { useLanguage } from '@/contexts/LanguageContext';

interface Feature {
  title: string;
  description: string;
}

interface BenefitCategory {
  icon: string;
  title: string;
  benefits: {
    title: string;
    description: string;
  }[];
}

interface SolutionPageTemplateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  features: Feature[];
  imageUrl: string;
  benefitCategories: BenefitCategory[];
  challengeText: string;
}

const SolutionPageTemplate = ({
  icon: Icon,
  title,
  description,
  color,
  iconColor,
  features,
  imageUrl,
  benefitCategories,
  challengeText,
}: SolutionPageTemplateProps) => {
  const { t, loading } = useLanguage();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Combined Hero & Image Section */}
      <section className="relative h-[800px] md:h-[700px] lg:h-[800px] overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color} mb-8`}>
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <AnimatedElement
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Common Scheduling Challenges Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <AnimatedElement className="text-left animate-fade-in-right">
              <div className="space-y-4 mb-8">
                <span className="inline-block text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t('challenge.title')}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {t('challenge.subtitle')}
                  </span>
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                {challengeText}
              </p>
            </AnimatedElement>

            {/* Image */}
            <AnimatedElement className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl animate-fade-in-right">
              <Image
                src="/images/mess.jpg"
                alt="Scheduling challenges illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/0"></div>
            </AnimatedElement>
          </div>
        </div>
      </section>

      {/* Why EasyTakt Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <AnimatedElement className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              <h2>{t('why_easytakt.title')}</h2>
            </AnimatedElement>
            <p className="text-xl text-gray-600 animate-fade-in-up-delay">
              Designed to make scheduling effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {benefitCategories.map((category, index) => (
              <AnimatedElement
                key={category.title}
                className="relative bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="text-4xl mb-6">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.benefits.map((benefit) => (
                      <li key={benefit.title}>
                        <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <GettingStartedSection />

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {t('solutions.cta.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              {t('solutions.cta.description')}
            </p>
            <SignupButton size="large" text={t('solutions.cta.button')} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPageTemplate; 