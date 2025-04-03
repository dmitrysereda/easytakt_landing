'use client';

import { CheckCircle } from 'lucide-react';
import SignupButton from '../SignupButton';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const benefits = [
  "All features included - no upsells",
  "Unlimited clients and staff members",
  "Smart scheduling & automated notifications",
  "Comprehensive business analytics"
];

const roi = [
  {
    title: "Reduce No-Shows",
    description: "Smart reminders and confirmations dramatically reduce missed appointments"
  },
  {
    title: "Save Admin Time",
    description: "Automate your scheduling workflow and free up hours every week"
  },
  {
    title: "Boost Client Satisfaction",
    description: "Deliver a seamless booking experience that keeps clients coming back"
  }
];

const PricingSection = () => {
  const headerRef = useIntersectionObserver();
  const pricingRef = useIntersectionObserver();
  const benefitRefs = benefits.map(() => useIntersectionObserver());
  const signupRef = useIntersectionObserver();
  const roiRef = useIntersectionObserver();
  const roiItemRefs = roi.map(() => useIntersectionObserver());

  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={headerRef}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up"
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up-delay"
          >
            No hidden fees. No long-term contracts. Just everything you need to run your business efficiently.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Pricing */}
          <div
            ref={pricingRef}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-fade-in-right"
          >
            <div className="text-center mb-8">
              <div className="flex items-end justify-center">
                <span className="text-6xl md:text-7xl font-bold text-gray-900">15€</span>
                <span className="text-xl text-gray-600 mb-2 ml-2">/month</span>
              </div>
              <p className="text-lg text-gray-600 mt-2">Everything included. No surprises.</p>
            </div>

            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  ref={benefitRefs[index]}
                  className="flex items-center gap-3 animate-fade-in-right"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div
              ref={signupRef}
              className="text-center animate-fade-in-up"
            >
              <SignupButton size="large" className="w-full md:w-auto" />
            </div>
          </div>

          {/* Right Column - ROI */}
          <div
            ref={roiRef}
            className="lg:pt-8 animate-fade-in-right"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Your Investment, Multiplied
            </h3>
            
            <div className="space-y-6">
              {roi.map((item, index) => (
                <div
                  key={item.title}
                  ref={roiItemRefs[index]}
                  className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-colors duration-300 animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 