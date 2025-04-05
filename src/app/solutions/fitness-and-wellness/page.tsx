'use client';

import { Dumbbell } from 'lucide-react';
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

export default function FitnessAndWellnessPage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  const features = t('solutions.fitness_and_wellness_page.features', { returnObjects: true }) as Feature[];
  const benefitCategories = [
    {
      title: t('solutions.fitness_and_wellness_page.benefits.members.title'),
      icon: t('solutions.fitness_and_wellness_page.benefits.members.icon'),
      benefits: t('solutions.fitness_and_wellness_page.benefits.members.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.fitness_and_wellness_page.benefits.trainers.title'),
      icon: t('solutions.fitness_and_wellness_page.benefits.trainers.icon'),
      benefits: t('solutions.fitness_and_wellness_page.benefits.trainers.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.fitness_and_wellness_page.benefits.owners.title'),
      icon: t('solutions.fitness_and_wellness_page.benefits.owners.icon'),
      benefits: t('solutions.fitness_and_wellness_page.benefits.owners.items', { returnObjects: true }) as Benefit[],
    },
  ] as BenefitCategory[];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Dumbbell}
        title={t('solutions.fitness_and_wellness_page.title')}
        description={t('solutions.fitness_and_wellness_page.description')}
        color="bg-green-50"
        iconColor="text-green-600"
        features={features}
        imageUrl="/images/solutions/fitness-studio.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.fitness_and_wellness_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 