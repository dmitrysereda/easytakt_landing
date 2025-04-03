import { Metadata } from 'next';
import FeaturesHero from '@/components/features/FeaturesHero';
import FeatureBlock from '@/components/features/FeatureBlock';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Features - EasyTakt',
  description: 'Discover all the powerful features that make EasyTakt the best choice for managing your business schedule.',
};

type Feature = {
  title: string;
  description: string;
  icon: 'calendar' | 'users' | 'bell' | 'bar-chart' | 'smartphone' | 'settings';
  image: string;
  imageAlt: string;
  align: 'left' | 'right';
};

const features: Feature[] = [
  {
    title: 'Interactive Calendar',
    description: 'Easily manage your schedule with our intuitive calendar. Set availability, handle bookings, and view your entire schedule at a glance.',
    icon: 'calendar',
    image: '/features/interactive_calendar.png',
    imageAlt: 'EasyTakt Calendar Interface',
    align: 'right'
  },
  {
    title: 'Client Management',
    description: 'Keep track of client information, preferences, and booking history in one organized system. Build stronger relationships with detailed insights.',
    icon: 'users',
    image: '/features/client_management.png',
    imageAlt: 'Client Management Interface',
    align: 'left'
  },
  {
    title: 'Smart Notifications',
    description: 'Reduce no-shows with automated reminders. Keep clients and staff informed with timely notifications about appointments and changes.',
    icon: 'bell',
    image: '/features/placeholder.svg',
    imageAlt: 'Smart Notifications Interface',
    align: 'right'
  },
  {
    title: 'Business Analytics',
    description: 'Make data-driven decisions with insights into booking patterns, client preferences, and business performance metrics.',
    icon: 'bar-chart',
    image: '/features/business_analytics.png',
    imageAlt: 'Business Analytics Dashboard',
    align: 'left'
  },
  {
    title: 'Mobile-Friendly',
    description: 'Manage your business on the go. Access your schedule, handle bookings, and stay connected from any device.',
    icon: 'smartphone',
    image: '/features/mobile_view.png',
    imageAlt: 'Mobile Interface',
    align: 'right'
  },
  {
    title: 'Customizable Settings',
    description: 'Tailor the platform to your business needs. Set custom booking rules, service durations, and availability windows.',
    icon: 'settings',
    image: '/features/customization.png',
    imageAlt: 'Settings Interface',
    align: 'left'
  }
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-white">
        <FeaturesHero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-32">
          {features.map((feature, index) => (
            <FeatureBlock
              key={feature.title}
              {...feature}
              index={index}
            />
          ))}
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
} 