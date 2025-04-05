'use client';

import { Clock, Coins, Shield, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const CompetitiveAdvantages = () => {
  const titleRef = useIntersectionObserver();
  const refs = Array(4).fill(null).map(() => useIntersectionObserver());
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  const advantages = [
    {
      icon: Clock,
      key: 'quick_setup',
      color: 'bg-blue-50',
      iconColor: 'text-blue-600'
    },
    {
      icon: Coins,
      key: 'simple_pricing',
      color: 'bg-purple-50',
      iconColor: 'text-purple-600'
    },
    {
      icon: Shield,
      key: 'gdpr_secure',
      color: 'bg-cyan-50',
      iconColor: 'text-cyan-600'
    },
    {
      icon: Briefcase,
      key: 'your_business',
      color: 'bg-emerald-50',
      iconColor: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="text-center mb-12 animate-fade-in-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t('save_time.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.key}
              ref={refs[index]}
              className={`group flex gap-6 items-start p-6 rounded-2xl hover:bg-white/50 transition-colors duration-300 animate-fade-in-up`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon Container */}
              <div className={`flex-shrink-0 ${advantage.color} rounded-xl p-4 transform group-hover:scale-110 transition-transform duration-300`}>
                <div className="relative">
                  {/* Decorative background circles */}
                  <div className={`absolute inset-0 ${advantage.color} rounded-full transform -rotate-6`} />
                  <div className={`absolute inset-0 ${advantage.color} rounded-full transform rotate-12`} />
                  {/* Icon */}
                  <div className="relative z-10">
                    <advantage.icon className={`w-8 h-8 ${advantage.iconColor}`} />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {t(`save_time.features.${index}.title`)}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {t(`save_time.features.${index}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages; 