'use client';

import { Scissors } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

interface Feature {
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
}

interface BenefitCategory {
  title: string;
  icon: string;
  benefits: Benefit[];
}

export default function SalonsAndSpasPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  const features = t('solutions.salons_spas_page.features', { returnObjects: true }) as Feature[];
  const benefitCategories = [
    {
      title: t('solutions.salons_spas_page.benefits.clients.title'),
      icon: t('solutions.salons_spas_page.benefits.clients.icon'),
      benefits: t('solutions.salons_spas_page.benefits.clients.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.salons_spas_page.benefits.staff.title'),
      icon: t('solutions.salons_spas_page.benefits.staff.icon'),
      benefits: t('solutions.salons_spas_page.benefits.staff.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.salons_spas_page.benefits.owners.title'),
      icon: t('solutions.salons_spas_page.benefits.owners.icon'),
      benefits: t('solutions.salons_spas_page.benefits.owners.items', { returnObjects: true }) as Benefit[],
    },
  ] as BenefitCategory[];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Scissors}
        title={t('solutions.salons_spas_page.title')}
        description={t('solutions.salons_spas_page.description')}
        color="bg-pink-50"
        iconColor="text-pink-600"
        features={features}
        imageUrl="/images/solutions/salon-spa-interior.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.salons_spas_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 