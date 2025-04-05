'use client';

import { Car, Music, Scissors, Dumbbell, GraduationCap, Briefcase, Dog, Wrench, Shirt, Rocket, Wallet, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import SignupButton from '@/components/SignupButton';
import SolutionsHero from '@/components/solutions/SolutionsHero';
import { useLanguage } from '@/contexts/LanguageContext';

const solutions = [
  {
    icon: Scissors,
    key: "salons_spas",
    title: "Salons & Spas",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    image: "/images/solutions/salon-spa-interior.jpg",
    href: "/solutions/salons-and-spas"
  },
  {
    icon: Music,
    key: "music_dance",
    title: "Music & Dance Schools",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    image: "/images/solutions/music-dance-studio.jpg",
    href: "/solutions/music-and-dance"
  },
  {
    icon: Car,
    key: "driving_schools",
    title: "Driving Schools",
    color: "bg-red-50",
    iconColor: "text-red-600",
    image: "/images/solutions/driving-school.jpg",
    href: "/solutions/driving-schools"
  },
  {
    icon: Dumbbell,
    key: "fitness_wellness",
    title: "Fitness & Wellness",
    color: "bg-green-50",
    iconColor: "text-green-600",
    image: "/images/solutions/fitness-studio.jpg",
    href: "/solutions/fitness-and-wellness"
  },
  {
    icon: GraduationCap,
    key: "tutors_coaches",
    title: "Tutors & Coaches",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "/images/solutions/tutoring-session.jpg",
    href: "/solutions/tutors-and-coaches"
  },
  {
    icon: Briefcase,
    key: "freelancers",
    title: "Freelancers",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    image: "/images/solutions/freelancer-workspace.jpg",
    href: "/solutions/freelancers"
  },
  {
    icon: Dog,
    key: "pet_services",
    title: "Pet Services",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "/images/solutions/pet-services.jpg",
    href: "/solutions/pet-services"
  },
  {
    icon: Wrench,
    key: "automotive",
    title: "Automotive Services",
    color: "bg-slate-50",
    iconColor: "text-slate-600",
    image: "/images/solutions/automotive-services.jpg",
    href: "/solutions/automotive-services"
  },
  {
    icon: Shirt,
    key: "personal_stylists",
    title: "Personal Stylists & Fashion Consultants",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    image: "/images/solutions/personal-stylists.jpg",
    href: "/solutions/personal-stylists"
  }
];

export default function SolutionsPage() {
  const { t } = useLanguage();
  
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  const coreFeatures = t<Array<{ title: string; description: string }>>('solutions.core_features.items', { returnObjects: true }) || [];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <SolutionsHero />

        {/* Solutions Grid */}
        <section className="pb-32">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <Link 
                    key={solution.title}
                    href={solution.href} 
                    className="block group h-full animate-fade-up opacity-0"
                    style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
                  >
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500">
                      <Image
                        src={solution.image}
                        alt={solution.title}
                        fill
                        priority={index < 3}
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 transition-opacity duration-300 group-hover:opacity-90"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <div className={`inline-flex items-center justify-center p-3 rounded-xl ${solution.color} bg-opacity-90 backdrop-blur-sm mb-3 transition-all duration-300 ease-out group-hover:scale-110 group-hover:rotate-3`}>
                          <Icon className={`w-6 h-6 ${solution.iconColor}`} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 transition-transform duration-300 ease-out group-hover:translate-x-2">
                          {t(`solutions.industries.${solution.key}.title`)}
                        </h3>
                        <p className="text-gray-200 text-sm min-h-[3rem] transition-all duration-300 group-hover:opacity-90 group-hover:translate-x-1">
                          {t(`solutions.industries.${solution.key}.description`)}
                        </p>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                {t('solutions.core_features.title')}
              </h2>
              <p className="text-xl text-gray-600">
                {t('solutions.core_features.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {coreFeatures.map((feature, index) => (
                <div
                  key={feature.title}
                  className="bg-gray-50 rounded-2xl p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-fade-up opacity-0"
                  style={{ animationDelay: `${index * 100 + 400}ms`, animationFillMode: 'forwards' }}
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Save Time Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 animate-fade-up opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {t('save_time.title')}
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {t<Array<{ title: string; description: string }>>('save_time.features', { returnObjects: true }).map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start space-x-6"
                >
                  <div className={`flex-shrink-0 w-16 h-16 ${index === 0 ? 'bg-blue-50' : index === 1 ? 'bg-purple-50' : 'bg-green-50'} rounded-2xl flex items-center justify-center`}>
                    {index === 0 && <Rocket className={`w-8 h-8 text-blue-600`} />}
                    {index === 1 && <Wallet className={`w-8 h-8 text-purple-600`} />}
                    {index === 2 && <Shield className={`w-8 h-8 text-green-600`} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The Numbers Don't Lie Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20">
              {t('metrics.title')}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {t<Array<{ number: string; description: string }>>('metrics.items', { returnObjects: true }).map((stat, index) => (
                <div
                  key={stat.description}
                  className="text-center"
                >
                  <div className="mb-4">
                    <span className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${
                      index === 0 ? 'from-blue-400 to-indigo-600' :
                      index === 1 ? 'from-indigo-400 to-purple-600' :
                      'from-purple-400 to-blue-600'
                    } bg-clip-text text-transparent`}>
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                {t('solutions.cta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                {t('solutions.cta.description')}
              </p>
              <SignupButton size="large" text={t('solutions.cta.button')} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 