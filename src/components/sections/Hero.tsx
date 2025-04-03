'use client';

import Image from 'next/image';
import SignupButton from '../SignupButton';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const Hero = () => {
  const textRef = useIntersectionObserver();
  const buttonRef = useIntersectionObserver();
  const imageRef = useIntersectionObserver();

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-y-0 right-0 w-full lg:w-3/5 bg-gradient-to-br from-blue-50/50 to-purple-50/50 rounded-l-[3rem] transform lg:translate-x-24" />
      </div>
      
      <div className="relative max-w-[1600px] mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">
          {/* Left Column - Text Content */}
          <div
            ref={textRef}
            className="relative z-10 text-left max-w-xl mx-auto lg:mx-0 lg:pr-12 animate-fade-in-up"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.15]">
              Running your business
              <br />
              is{' '}
              <span className="text-gray-900">hard.</span>
              <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text mt-4">
                Scheduling
                <br />
                shouldn't be.
              </div>
            </h1>

            <div
              ref={buttonRef}
              className="mt-10 animate-fade-in-up-delay"
            >
              <SignupButton />
            </div>
          </div>

          {/* Right Column - Product Screenshot */}
          <div
            ref={imageRef}
            className="relative lg:absolute lg:inset-y-0 lg:right-0 lg:w-[65%] lg:translate-x-16 xl:translate-x-24 h-full flex items-center animate-fade-in-right"
          >
            <div className="relative w-full">
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5" />
                <div className="relative aspect-[16/9] w-full">
                  <Image
                    src="/images/calendar-dashboard.png"
                    alt="EasyTakt Calendar Dashboard"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1600px) 65vw, 1000px"
                    className="object-contain rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50" />
              <div className="absolute -top-12 -left-12 w-64 h-64 bg-purple-200 rounded-full blur-3xl opacity-30" />
              
              {/* Additional decorative dots */}
              <div className="absolute -right-4 top-1/4 w-4 h-4 bg-blue-500 rounded-full" />
              <div className="absolute -left-4 bottom-1/4 w-4 h-4 bg-purple-500 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 