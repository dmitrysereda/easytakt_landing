'use client';

import { GraduationCap } from 'lucide-react';
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

export default function TutorsAndCoachesPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-gray-600">{t ? t('common.loading') : 'Loading...'}</div>
      </div>
    );
  }

  if (!t) {
    return null;
  }

  const features = t('solutions.tutors_and_coaches_page.features', { returnObjects: true }) as Feature[] || [];
  const benefitCategories: BenefitCategory[] = [
    {
      title: t('solutions.tutors_and_coaches_page.benefits.students.title') || '',
      icon: t('solutions.tutors_and_coaches_page.benefits.students.icon') || '',
      benefits: t('solutions.tutors_and_coaches_page.benefits.students.items', { returnObjects: true }) || [],
    },
    {
      title: t('solutions.tutors_and_coaches_page.benefits.tutors.title') || '',
      icon: t('solutions.tutors_and_coaches_page.benefits.tutors.icon') || '',
      benefits: t('solutions.tutors_and_coaches_page.benefits.tutors.items', { returnObjects: true }) || [],
    },
    {
      title: t('solutions.tutors_and_coaches_page.benefits.centers.title') || '',
      icon: t('solutions.tutors_and_coaches_page.benefits.centers.icon') || '',
      benefits: t('solutions.tutors_and_coaches_page.benefits.centers.items', { returnObjects: true }) || [],
    },
  ];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={GraduationCap}
        title={t('solutions.tutors_and_coaches_page.title')}
        description={t('solutions.tutors_and_coaches_page.description')}
        color="bg-blue-50"
        iconColor="text-blue-600"
        features={features}
        imageUrl="/images/solutions/tutoring-session.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.tutors_and_coaches_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 