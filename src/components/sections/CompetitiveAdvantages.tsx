'use client';

import { Clock, Coins, Shield, Briefcase } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const advantages = [
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'EasyTakt is the simplest way to manage schedules for your business. No complicated setup, no lengthy onboarding—import your existing schedules and data in minutes.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Coins,
    title: 'Simple Pricing',
    description: 'No hidden fees, no long-term contracts. Unlike other platforms that charge for every extra feature, EasyTakt keeps pricing simple and predictable.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: Shield,
    title: 'GDPR-Compliant & Secure',
    description: 'Your data stays safe, stored securely within the EU, ensuring full compliance with GDPR regulations.',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    icon: Briefcase,
    title: 'Your Business, Your Rules',
    description: 'We don\'t interfere with your financial relationships with clients. EasyTakt is here to save you hours of scheduling headaches—not to dictate how you run your business.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  }
];

const CompetitiveAdvantages = () => {
  const titleRef = useIntersectionObserver();
  const refs = advantages.map(() => useIntersectionObserver());

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="text-center mb-12 animate-fade-in-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Save Time. Stay in Control.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => (
            <div
              key={advantage.title}
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
                  {advantage.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {advantage.description}
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