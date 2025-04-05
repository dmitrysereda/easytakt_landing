'use client';

import { Wrench } from 'lucide-react';
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

export default function AutomotiveServicesPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return <div>Loading...</div>;
  }

  const features: Feature[] = t('solutions.automotive_services_page.features', { returnObjects: true });
  const benefitCategories: BenefitCategory[] = [
    {
      title: t('solutions.automotive_services_page.benefits.vehicle_owners.title'),
      icon: t('solutions.automotive_services_page.benefits.vehicle_owners.icon'),
      benefits: t('solutions.automotive_services_page.benefits.vehicle_owners.items', { returnObjects: true }),
    },
    {
      title: t('solutions.automotive_services_page.benefits.technicians.title'),
      icon: t('solutions.automotive_services_page.benefits.technicians.icon'),
      benefits: t('solutions.automotive_services_page.benefits.technicians.items', { returnObjects: true }),
    },
    {
      title: t('solutions.automotive_services_page.benefits.owners.title'),
      icon: t('solutions.automotive_services_page.benefits.owners.icon'),
      benefits: t('solutions.automotive_services_page.benefits.owners.items', { returnObjects: true }),
    },
  ];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Wrench}
        title={t('solutions.automotive_services_page.title')}
        description={t('solutions.automotive_services_page.description')}
        color="bg-slate-50"
        iconColor="text-slate-600"
        features={features}
        imageUrl="/images/solutions/automotive-services.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.automotive_services_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 