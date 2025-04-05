'use client';

import { Car } from 'lucide-react';
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

export default function DrivingSchoolsPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  const features = t('solutions.driving_schools_page.features', { returnObjects: true }) as Feature[];
  const benefitCategories = [
    {
      title: t('solutions.driving_schools_page.benefits.students.title'),
      icon: t('solutions.driving_schools_page.benefits.students.icon'),
      benefits: t('solutions.driving_schools_page.benefits.students.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.driving_schools_page.benefits.instructors.title'),
      icon: t('solutions.driving_schools_page.benefits.instructors.icon'),
      benefits: t('solutions.driving_schools_page.benefits.instructors.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.driving_schools_page.benefits.owners.title'),
      icon: t('solutions.driving_schools_page.benefits.owners.icon'),
      benefits: t('solutions.driving_schools_page.benefits.owners.items', { returnObjects: true }) as Benefit[],
    },
  ] as BenefitCategory[];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Car}
        title={t('solutions.driving_schools_page.title')}
        description={t('solutions.driving_schools_page.description')}
        color="bg-red-50"
        iconColor="text-red-600"
        features={features}
        imageUrl="/images/solutions/driving-school.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.driving_schools_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 