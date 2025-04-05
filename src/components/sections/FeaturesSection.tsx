'use client';

import { Calendar, Users, Bell, Car, ChartLine, Smartphone, BarChart, Settings, Play } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const FeaturesSection = () => {
  const titleRef = useIntersectionObserver();
  const featureRefs = Array(6).fill(null).map(() => useIntersectionObserver());
  const videoRef = useIntersectionObserver();
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-50/30 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-50/30 rounded-full blur-3xl transform translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('features.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Calendar,
              key: 'calendar',
              bgColor: 'bg-blue-50',
              iconColor: 'text-blue-600'
            },
            {
              icon: Users,
              key: 'clients',
              bgColor: 'bg-purple-50',
              iconColor: 'text-purple-600'
            },
            {
              icon: Bell,
              key: 'reminders',
              bgColor: 'bg-cyan-50',
              iconColor: 'text-cyan-600'
            }
          ].map((feature, index) => (
            <div
              key={feature.key}
              ref={featureRefs[index]}
              className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t(`features.items.${feature.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`features.items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart,
              key: 'analytics',
              bgColor: 'bg-emerald-50',
              iconColor: 'text-emerald-600'
            },
            {
              icon: Smartphone,
              key: 'mobile',
              bgColor: 'bg-rose-50',
              iconColor: 'text-rose-600'
            },
            {
              icon: Settings,
              key: 'settings',
              bgColor: 'bg-amber-50',
              iconColor: 'text-amber-600'
            }
          ].map((feature, index) => (
            <div
              key={feature.key}
              ref={featureRefs[index + 3]}
              className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {t(`features.items.${feature.key}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`features.items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>

        {/* Video Placeholder */}
        <div
          ref={videoRef}
          className="mt-24 relative aspect-video rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up"
        >
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <Play className="w-16 h-16 text-blue-600" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;