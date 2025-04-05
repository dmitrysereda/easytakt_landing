import { Metadata } from 'next';
import FeaturesHero from '@/components/features/FeaturesHero';
import FeatureBlock from '@/components/features/FeatureBlock';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CTASection from '@/components/sections/CTASection';

export const metadata: Metadata = {
  title: 'Features - EasyTakt',
  description: 'Discover EasyTakt\'s powerful scheduling features designed to streamline your business operations and enhance customer experience.',
};

interface Feature {
  translationKey: string;
  icon: 'calendar' | 'users' | 'bell' | 'bar-chart' | 'smartphone' | 'settings';
  image: string;
  align: 'left' | 'right';
}

const features: Feature[] = [
  {
    translationKey: 'calendar',
    icon: 'calendar',
    image: '/features/interactive_calendar.png',
    align: 'right',
  },
  {
    translationKey: 'clients',
    icon: 'users',
    image: '/features/client_management.png',
    align: 'left',
  },
  {
    translationKey: 'reminders',
    icon: 'bell',
    image: '/features/placeholder.svg',
    align: 'right',
  },
  {
    translationKey: 'analytics',
    icon: 'bar-chart',
    image: '/features/business_analytics.png',
    align: 'left',
  },
  {
    translationKey: 'mobile',
    icon: 'smartphone',
    image: '/features/mobile_view.png',
    align: 'right',
  },
  {
    translationKey: 'settings',
    icon: 'settings',
    image: '/features/customization.png',
    align: 'left',
  },
];

export default function FeaturesPage() {
  return (
    <>
      <Header />
      <main>
        <FeaturesHero />
        <section className="py-24 space-y-32 px-4">
          {features.map((feature, index) => (
            <FeatureBlock
              key={feature.translationKey}
              index={index}
              translationKey={feature.translationKey}
              icon={feature.icon}
              image={feature.image}
              align={feature.align}
            />
          ))}
        </section>
        <CTASection />
      </main>
      <Footer />
    </>
  );
} 