'use client';

import { CheckCircle } from 'lucide-react';
import SignupButton from '../SignupButton';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const PricingSection = () => {
  const headerRef = useIntersectionObserver();
  const pricingRef = useIntersectionObserver();
  const benefitRefs = Array(4).fill(null).map(() => useIntersectionObserver());
  const signupRef = useIntersectionObserver();
  const roiRef = useIntersectionObserver();
  const roiItemRefs = Array(3).fill(null).map(() => useIntersectionObserver());
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={headerRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up"
          >
            {t('pricing.title')} {t('pricing.subtitle')}
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up-delay"
          >
            {t('pricing.description')}
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Pricing */}
          <div
            ref={pricingRef}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-right"
          >
            <div className="text-center mb-8">
              <div className="flex items-end justify-center">
                <span className="text-6xl md:text-7xl font-bold text-gray-900">{t('pricing.price.amount')}€</span>
                <span className="text-xl text-gray-600 mb-2 ml-2">{t('pricing.price.period')}</span>
              </div>
              <p className="text-lg text-gray-600 mt-2">{t('pricing.price.description')}</p>
            </div>

            <div className="space-y-4 mb-10">
              {(t('pricing.features', { returnObjects: true }) as string[]).map((feature: string, index: number) => (
                <div
                  key={feature}
                  ref={benefitRefs[index]}
                  className="flex items-center gap-3 animate-fade-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div
              ref={signupRef}
              className="text-center animate-fade-in-up"
            >
              <SignupButton text={t('pricing.cta.primary')} size="large" className="w-full md:w-auto" />
            </div>
          </div>

          {/* Right Column - ROI */}
          <div
            ref={roiRef}
            className="lg:pt-8 animate-fade-in-right"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              {t('pricing.benefits.title')}
            </h3>
            
            <div className="space-y-6">
              {(t('pricing.benefits.items', { returnObjects: true }) as Array<{ title: string; description: string }>).map((item, index) => (
                <div
                  key={item.title}
                  ref={roiItemRefs[index]}
                  className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 