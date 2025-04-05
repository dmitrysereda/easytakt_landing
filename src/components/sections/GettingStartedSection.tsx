'use client';

import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const GettingStartedSection = () => {
  const titleRef = useIntersectionObserver();
  const stepRefs = Array(3).fill(null).map(() => useIntersectionObserver());
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  const steps = [
    {
      color: "from-blue-500/20 to-blue-600/20",
      image: "/images/steps/signup-screen.png"
    },
    {
      color: "from-purple-500/20 to-purple-600/20",
      image: "/images/steps/services-screen.png"
    },
    {
      color: "from-cyan-500/20 to-cyan-600/20",
      image: "/images/steps/customize-screen.png"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
          >
            {t('getting_started.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('getting_started.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              ref={stepRefs[index]}
              className="relative text-center group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Step background with gradient */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-all duration-500 ease-in-out rounded-3xl -z-10 group-hover:opacity-100`}
                style={{ transitionDelay: '150ms' }}
              />
              
              {/* Content */}
              <div className="mb-6">
                <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {t(`getting_started.steps.${index}.number`)}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t(`getting_started.steps.${index}.title`)}
              </h3>
              
              <p className="text-gray-600 mb-8">
                {t(`getting_started.steps.${index}.description`)}
              </p>

              {/* Image Container */}
              <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-lg transform transition-transform duration-500 ease-in-out group-hover:scale-[1.02]">
                <Image
                  src={step.image}
                  alt={t(`getting_started.steps.${index}.title`)}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GettingStartedSection; 