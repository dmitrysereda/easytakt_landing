'use client';

import { LucideIcon } from 'lucide-react';
import SignupButton from '../SignupButton';
import Image from 'next/image';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface Feature {
  title: string;
  description: string;
}

interface BenefitCategory {
  title: string;
  icon: string;
  benefits: {
    title: string;
    description: string;
  }[];
}

interface SolutionPageTemplateProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
  iconColor: string;
  features: Feature[];
  imageUrl: string;
  benefitCategories: BenefitCategory[];
  challengeText: string;
}

const SolutionPageTemplate = ({
  icon: Icon,
  title,
  description,
  color,
  iconColor,
  features,
  imageUrl,
  benefitCategories,
  challengeText,
}: SolutionPageTemplateProps) => {
  const featureRefs = features.map(() => useIntersectionObserver());
  const challengeTextRef = useIntersectionObserver();
  const challengeImageRef = useIntersectionObserver();
  const whyEasyTaktRef = useIntersectionObserver();
  const benefitRefs = benefitCategories.map(() => useIntersectionObserver());

  return (
    <div className="min-h-screen">
      {/* Combined Hero & Image Section */}
      <section className="relative h-[800px] md:h-[700px] lg:h-[800px] overflow-hidden pt-20">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-white"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center h-full max-w-3xl">
            <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${color} mb-8`}>
              <Icon className={`w-8 h-8 ${iconColor}`} />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                ref={featureRefs[index]}
                className="bg-gray-50 rounded-2xl p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
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

      {/* Common Scheduling Challenges Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div
              ref={challengeTextRef}
              className="text-left animate-fade-in-right"
            >
              <div className="space-y-4 mb-8">
                <span
                  className="inline-block text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  The Challenge
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Time to Say Goodbye to
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Scheduling Headaches
                  </span>
                </h2>
              </div>
              <p className="text-xl text-gray-600 leading-relaxed">
                {challengeText}
              </p>
            </div>

            {/* Image */}
            <div
              ref={challengeImageRef}
              className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-xl animate-fade-in-right"
            >
              <Image
                src="/images/mess.jpg"
                alt="Scheduling challenges illustration"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Why EasyTakt Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 
              ref={whyEasyTaktRef}
              className="text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up"
            >
              Why EasyTakt?
            </h2>
            <p className="text-xl text-gray-600 animate-fade-in-up-delay">
              Designed to make scheduling effortless
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {benefitCategories.map((category, index) => (
              <div
                key={category.title}
                ref={benefitRefs[index]}
                className="relative bg-white rounded-2xl p-8 shadow-md transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <div className="text-4xl mb-6">{category.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.title}</h3>
                  <ul className="space-y-4">
                    {category.benefits.map((benefit) => (
                      <li key={benefit.title}>
                        <h4 className="font-medium text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600">{benefit.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Get Up & Running with EasyTakt in 3 Ridiculously Simple Steps
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Want to make booking and managing your business a breeze? We've got you. With EasyTakt, setting up takes about as much effort as making a cup of coffee (okay, maybe two). Just follow these three steps:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                step: "01",
                title: "Create Your EasyTakt Account",
                description: "Sign up, drop in your business details, and boom—you're on your way to a stress-free booking system. It's so easy, even your cat could do it (if they had opposable thumbs).",
                color: "from-blue-500/20 to-blue-600/20",
                image: "/images/steps/signup-screen.png"
              },
              {
                step: "02",
                title: "Add Your Services & Team",
                description: "Got appointments, events, or a dream team ready to roll? Add them all in. With just a few clicks, they're officially bookable, and you look like a total pro.",
                color: "from-purple-500/20 to-purple-600/20",
                image: "/images/steps/services-screen.png"
              },
              {
                step: "03",
                title: "Customize & Connect Like a Boss",
                description: "Make your booking page as stylish as your brand, then slap it onto your website, social media, or wherever your customers hang out. More bookings, less hassle. You're welcome.",
                color: "from-cyan-500/20 to-cyan-600/20",
                image: "/images/steps/customize-screen.png"
              }
            ].map((step, index) => (
              <div
                key={step.title}
                className="relative text-center group"
              >
                {/* Step background with gradient */}
                <div 
                  className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-all duration-500 ease-in-out rounded-3xl -z-10 group-hover:opacity-100`}
                  style={{ transitionDelay: '150ms' }}
                />
                
                {/* Content */}
                <div
                  className="mb-6"
                >
                  <span className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-8">
                  {step.description}
                </p>

                {/* Image Container */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-white shadow-lg transform transition-transform duration-500 ease-in-out group-hover:scale-[1.02]">
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />
                </div>
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
              Ready to streamline your scheduling?
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Join thousands of businesses that trust EasyTakt to handle their scheduling needs.
              Get started today with our 30-day free trial.
            </p>
            <SignupButton size="large" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SolutionPageTemplate; 