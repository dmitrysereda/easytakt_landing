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
  const { t } = useLanguage();

  if (!t) {
    return <div>Loading...</div>;
  }

  const features = t('solutions.tutors_and_coaches_page.features', { returnObjects: true }) as Feature[];
  const benefits = t('solutions.tutors_and_coaches_page.benefits', { returnObjects: true }) as {
    students: { title: string; icon: string; items: Benefit[] };
    tutors: { title: string; icon: string; items: Benefit[] };
    centers: { title: string; icon: string; items: Benefit[] };
  };

  const benefitCategories: BenefitCategory[] = [
    {
      title: benefits.students.title,
      icon: benefits.students.icon,
      benefits: benefits.students.items,
    },
    {
      title: benefits.tutors.title,
      icon: benefits.tutors.icon,
      benefits: benefits.tutors.items,
    },
    {
      title: benefits.centers.title,
      icon: benefits.centers.icon,
      benefits: benefits.centers.items,
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