'use client';

import { Calendar, Users, Bell, Car, ChartLine, Smartphone, BarChart, Settings, Play } from 'lucide-react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const features = [
  {
    icon: Calendar,
    title: 'Interactive Calendar',
    description: 'Easily schedule and manage lessons in a visual, user-friendly planner'
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Keep track of student progress, attendance, and lesson history'
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description: 'Reduce no-shows with smart notifications for upcoming lessons'
  },
  {
    icon: Car,
    title: 'Manage Facitilties',
    description: 'Optimize vehicle availability and prevent scheduling conflicts'
  },
  {
    icon: ChartLine,
    title: 'Progress Tracking',
    description: 'Monitor student performance with clear insights and reports'
  },
  {
    icon: Smartphone,
    title: 'Mobile Version',
    description: 'Works seamlessly on mobile - schedule always at hand'
  }
];

const FeaturesSection = () => {
  const titleRef = useIntersectionObserver();
  const featureRefs = Array(6).fill(null).map(() => useIntersectionObserver());
  const videoRef = useIntersectionObserver();

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
            EasyTakt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A smarter way to manage your business schedule - streamline bookings, automate reminders, and delight your clients
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Calendar,
              title: 'Interactive Calendar',
              description: 'Easily manage your schedule with our intuitive calendar. Set availability, handle bookings, and view your entire schedule at a glance.',
              bgColor: 'bg-blue-50',
              iconColor: 'text-blue-600'
            },
            {
              icon: Users,
              title: 'Client Management',
              description: 'Keep track of client information, preferences, and booking history in one organized system. Build stronger relationships with detailed insights.',
              bgColor: 'bg-purple-50',
              iconColor: 'text-purple-600'
            },
            {
              icon: Bell,
              title: 'Smart Notifications',
              description: 'Reduce no-shows with automated reminders. Keep clients and staff informed with timely notifications about appointments and changes.',
              bgColor: 'bg-cyan-50',
              iconColor: 'text-cyan-600'
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              ref={featureRefs[index]}
              className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: BarChart,
              title: 'Business Analytics',
              description: 'Make data-driven decisions with insights into booking patterns, client preferences, and business performance metrics.',
              bgColor: 'bg-emerald-50',
              iconColor: 'text-emerald-600'
            },
            {
              icon: Smartphone,
              title: 'Mobile-Friendly',
              description: 'Manage your business on the go. Access your schedule, handle bookings, and stay connected from any device.',
              bgColor: 'bg-rose-50',
              iconColor: 'text-rose-600'
            },
            {
              icon: Settings,
              title: 'Customizable Settings',
              description: 'Tailor the platform to your business needs. Set custom booking rules, service durations, and availability windows.',
              bgColor: 'bg-amber-50',
              iconColor: 'text-amber-600'
            }
          ].map((feature, index) => (
            <div
              key={feature.title}
              ref={featureRefs[index + 3]}
              className="bg-white rounded-2xl p-8 shadow-lg animate-fade-in-up"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <div className={`${feature.bgColor} w-12 h-12 rounded-xl flex items-center justify-center mb-6`}>
                <feature.icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
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