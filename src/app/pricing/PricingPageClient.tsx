'use client';

import { Euro, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PricingHero from '@/components/pricing/PricingHero';
import { useLanguage } from '@/contexts/LanguageContext';

interface Benefit {
  title: string;
  description: string;
  metric: string;
  emphasis: string;
}

interface FAQ {
  question: string;
  answer: string;
}

export default function PricingPageClient() {
  const { t } = useLanguage();

  const features = t<string[]>('pricing.features', { returnObjects: true }) || [];
  const benefits = t<Benefit[]>('pricing.benefits.items', { returnObjects: true }) || [];
  const faqs = t<FAQ[]>('pricing.faq.items', { returnObjects: true }) || [];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <PricingHero />
        
        {/* Pricing Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-start">
                {/* Pricing Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                  <div className="flex items-baseline mb-8">
                    <Euro className="w-12 h-12 text-blue-600 animate-bounce-subtle" strokeWidth={1.5} />
                    <span className="text-6xl font-bold text-gray-900">{t('pricing.price.amount')}</span>
                    <span className="text-xl text-gray-600 ml-2">{t('pricing.price.period')}</span>
                  </div>
                  <p className="text-xl text-gray-600 mb-8">
                    {t('pricing.price.description')}
                  </p>
                  <div className="space-y-4 mb-8">
                    {features.map((feature, index) => (
                      <div 
                        key={index} 
                        className="flex items-start gap-3 animate-fade-right opacity-0" 
                        style={{ animationDelay: `${index * 100 + 400}ms`, animationFillMode: 'forwards' }}
                      >
                        <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="https://app.easytakt.com"
                    className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 group hover:scale-[1.02] animate-fade-up opacity-0 [animation-delay:1200ms] [animation-fill-mode:forwards]"
                  >
                    {t('pricing.cta.primary')}
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <p className="text-sm text-gray-500 text-center mt-4 animate-fade-up opacity-0 [animation-delay:1300ms] [animation-fill-mode:forwards]">
                    {t('pricing.cta.secondary')}
                  </p>
                </div>

                {/* Benefits */}
                <div className="space-y-12">
                  <h2 className="text-3xl font-bold text-gray-900 animate-fade-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                    {t('pricing.benefits.title')}
                  </h2>
                  <div className="grid gap-8">
                    {benefits.map((benefit, index) => (
                      <div 
                        key={index} 
                        className="space-y-3 bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] animate-fade-up opacity-0"
                        style={{ animationDelay: `${index * 200 + 400}ms`, animationFillMode: 'forwards' }}
                      >
                        <h3 className="text-xl font-semibold text-gray-900">
                          {benefit.title}
                        </h3>
                        <p className="text-gray-600">
                          {benefit.description}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <p className="text-sm font-medium text-emerald-600">
                            {benefit.metric}
                          </p>
                          <p className="text-sm font-medium text-blue-600">
                            {benefit.emphasis}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                {t('pricing.faq.title')}
              </h2>
              <div className="space-y-8">
                {faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="space-y-3 animate-fade-up opacity-0"
                    style={{ animationDelay: `${index * 150 + 400}ms`, animationFillMode: 'forwards' }}
                  >
                    <h3 className="text-xl font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 animate-fade-up opacity-0 [animation-delay:200ms] [animation-fill-mode:forwards]">
                {t('pricing.finalCta.title')}
              </h2>
              <p className="text-xl text-gray-600 mb-8 animate-fade-up opacity-0 [animation-delay:300ms] [animation-fill-mode:forwards]">
                {t('pricing.finalCta.description')}
              </p>
              <Link
                href="https://app.easytakt.com"
                className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-all duration-200 group hover:scale-[1.02] animate-fade-up opacity-0 [animation-delay:400ms] [animation-fill-mode:forwards]"
              >
                {t('pricing.finalCta.button')}
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 