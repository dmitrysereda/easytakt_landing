'use client';

import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useLanguage } from '@/contexts/LanguageContext';

const BenefitsSection = () => {
  const titleRef = useIntersectionObserver();
  const categoryRefs = Array(3).fill(null).map(() => useIntersectionObserver());
  const { t, loading } = useLanguage();

  if (loading) {
    return <div>Loading...</div>;
  }

  const categories = [
    {
      title: "For Students",
      icon: "👨‍🎓",
      benefits: [
        { title: "Stay on track effortlessly", description: "View your upcoming lessons at a glance" },
        { title: "Never miss a lesson", description: "Receive timely reminders and add lessons to your calendar with a single tap" },
        { title: "Reschedule in seconds", description: "Flexible rescheduling means no more back-and-forth hassle" },
        { title: "Plan smarter", description: "See both theory and practice lessons in one place" },
      ],
    },
    {
      title: "For Instructors",
      icon: "👨‍🏫",
      benefits: [
        { title: "Be fully prepared", description: "Access your daily and weekly schedule in one view" },
        { title: "Stay organized", description: "Take notes after each lesson to track student progress" },
        { title: "Adapt on the fly", description: "Easily reschedule lessons to match your availability" },
      ],
    },
    {
      title: "For School Owners",
      icon: "👔",
      benefits: [
        { title: "Get full control", description: "Monitor instructor workload and student progress at a glance" },
        { title: "Manage your assets", description: "Keep track of your fleet—cars and motorcycles—without spreadsheets" },
        { title: "Boost efficiency", description: "Reduce manual work so your staff can focus on teaching" },
      ],
    },
  ];

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 
            ref={titleRef}
            className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up"
          >
            {t('why_easytakt.title')}
          </h2>
          <p className="text-xl text-gray-600 animate-fade-in-up-delay">
            {t('why_easytakt.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {categories.map((category, index) => (
            <div
              key={category.title}
              ref={categoryRefs[index]}
              className="relative bg-white rounded-2xl p-8 shadow-md transition-all duration-500 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              
              {/* Card content */}
              <div className="relative transition-transform duration-300 hover:scale-[1.02]">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection; 