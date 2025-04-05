'use client';

import { Music } from 'lucide-react';
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

export default function MusicAndDancePage() {
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  const features = t('solutions.music_and_dance_page.features', { returnObjects: true }) as Feature[];
  const benefitCategories = [
    {
      title: t('solutions.music_and_dance_page.benefits.students.title'),
      icon: t('solutions.music_and_dance_page.benefits.students.icon'),
      benefits: t('solutions.music_and_dance_page.benefits.students.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.music_and_dance_page.benefits.teachers.title'),
      icon: t('solutions.music_and_dance_page.benefits.teachers.icon'),
      benefits: t('solutions.music_and_dance_page.benefits.teachers.items', { returnObjects: true }) as Benefit[],
    },
    {
      title: t('solutions.music_and_dance_page.benefits.owners.title'),
      icon: t('solutions.music_and_dance_page.benefits.owners.icon'),
      benefits: t('solutions.music_and_dance_page.benefits.owners.items', { returnObjects: true }) as Benefit[],
    },
  ] as BenefitCategory[];

  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Music}
        title={t('solutions.music_and_dance_page.title')}
        description={t('solutions.music_and_dance_page.description')}
        color="bg-indigo-50"
        iconColor="text-indigo-600"
        features={features}
        imageUrl="/images/solutions/music-dance-studio.jpg"
        benefitCategories={benefitCategories}
        challengeText={t('solutions.music_and_dance_page.challenge_text')}
      />
      <Footer />
    </>
  );
} 