import { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Pricing - EasyTakt',
  description: 'Simple, transparent pricing with no hidden fees. Everything you need to manage your business schedule efficiently.',
};

export default function PricingPage() {
  return <PricingPageClient />;
} 