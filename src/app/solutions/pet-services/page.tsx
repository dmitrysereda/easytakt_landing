'use client';

import { Dog } from 'lucide-react';
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

export default function PetServicesPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return <div>Loading...</div>;
  }

  const features: Feature[] = t('solutions.pet_services_page.features', { returnObjects: true });
  const benefitCategories: BenefitCategory[] = [
    {
      title: t('solutions.pet_services_page.benefits.pet_owners.title'),
      icon: t('solutions.pet_services_page.benefits.pet_owners.icon'),
      benefits: t('solutions.pet_services_page.benefits.pet_owners.items', { returnObjects: true }),
    },
    {
      title: t('solutions.pet_services_page.benefits.staff.title'),
      icon: t('solutions.pet_services_page.benefits.staff.icon'),
      benefits: t('solutions.pet_services_page.benefits.staff.items', { returnObjects: true }),
    },
    {
      title: t('solutions.pet_services_page.benefits.owners.title'),
      icon: t('solutions.pet_services_page.benefits.owners.icon'),
      benefits: t('solutions.pet_services_page.benefits.owners.items', { returnObjects: true }),
    },
  ];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Dog}
        title={t('solutions.pet_services_page.title')}
        description={t('solutions.pet_services_page.description')}
        color="bg-amber-50"
        iconColor="text-amber-600"
        features={features}
        imageUrl="/images/solutions/pet-services.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.pet_services_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 