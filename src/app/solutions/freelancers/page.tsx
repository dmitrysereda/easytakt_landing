'use client';

import { Briefcase } from 'lucide-react';
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

export default function FreelancersPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return <div>Loading...</div>;
  }

  const features: Feature[] = t('solutions.freelancers_page.features', { returnObjects: true });
  const benefitCategories: BenefitCategory[] = [
    {
      title: t('solutions.freelancers_page.benefits.clients.title'),
      icon: t('solutions.freelancers_page.benefits.clients.icon'),
      benefits: t('solutions.freelancers_page.benefits.clients.items', { returnObjects: true }),
    },
    {
      title: t('solutions.freelancers_page.benefits.freelancers.title'),
      icon: t('solutions.freelancers_page.benefits.freelancers.icon'),
      benefits: t('solutions.freelancers_page.benefits.freelancers.items', { returnObjects: true }),
    },
    {
      title: t('solutions.freelancers_page.benefits.business.title'),
      icon: t('solutions.freelancers_page.benefits.business.icon'),
      benefits: t('solutions.freelancers_page.benefits.business.items', { returnObjects: true }),
    },
  ];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Briefcase}
        title={t('solutions.freelancers_page.title')}
        description={t('solutions.freelancers_page.description')}
        color="bg-purple-50"
        iconColor="text-purple-600"
        features={features}
        imageUrl="/images/solutions/freelancer-workspace.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.freelancers_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 