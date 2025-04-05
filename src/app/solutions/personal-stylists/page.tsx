'use client';

import { Shirt } from 'lucide-react';
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

export default function PersonalStylistsPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return <div>Loading...</div>;
  }

  const features: Feature[] = t('solutions.personal_stylists_page.features', { returnObjects: true });
  const benefitCategories: BenefitCategory[] = [
    {
      title: t('solutions.personal_stylists_page.benefits.clients.title'),
      icon: t('solutions.personal_stylists_page.benefits.clients.icon'),
      benefits: t('solutions.personal_stylists_page.benefits.clients.items', { returnObjects: true }),
    },
    {
      title: t('solutions.personal_stylists_page.benefits.stylists.title'),
      icon: t('solutions.personal_stylists_page.benefits.stylists.icon'),
      benefits: t('solutions.personal_stylists_page.benefits.stylists.items', { returnObjects: true }),
    },
    {
      title: t('solutions.personal_stylists_page.benefits.owners.title'),
      icon: t('solutions.personal_stylists_page.benefits.owners.icon'),
      benefits: t('solutions.personal_stylists_page.benefits.owners.items', { returnObjects: true }),
    },
  ];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Shirt}
        title={t('solutions.personal_stylists_page.title')}
        description={t('solutions.personal_stylists_page.description')}
        color="bg-rose-50"
        iconColor="text-rose-600"
        features={features}
        imageUrl="/images/solutions/personal-stylists.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.personal_stylists_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 