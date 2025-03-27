import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CompetitiveAdvantages from '@/components/sections/CompetitiveAdvantages';
import PricingSection from '@/components/sections/PricingSection';
import WhoItsForSection from '@/components/sections/WhoItsForSection';
import Image from 'next/image';
import Link from 'next/link';
import { Zap, Clock, Settings, Calendar } from 'lucide-react';
import FeatureBlock from '@/components/home/FeatureBlock';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhoItsForSection />
      <FeaturesSection />
      <TestimonialsSection />
      <CompetitiveAdvantages />
      <PricingSection />
      <Footer />
    </main>
  );
}
