'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SignupButton from '../SignupButton';

const Hero = () => {
  return (
    <section className="min-h-[85vh] flex items-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left max-w-xl mx-auto lg:mx-0 lg:pr-8"
          >
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 tracking-tight leading-[1.15]">
              Running your business
              <br />
              is{' '}
              <span className="text-gray-900">hard.</span>
              <div className="text-blue-600 mt-4">
                Scheduling
                <br />
                shouldn't be.
              </div>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-10"
            >
              <SignupButton />
            </motion.div>
          </motion.div>

          {/* Right Column - Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:block lg:-mr-32 xl:-mr-40 mt-8 lg:mt-0"
          >
            <div className="relative scale-110">
              {/* Background blur effect */}
              <div className="absolute -inset-4 bg-blue-100/30 rounded-[2.5rem] blur-3xl transform -rotate-2" />
              
              {/* Main image container */}
              <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-purple-500/5" />
                <Image
                  src="/images/calendar-dashboard.png"
                  alt="EasyTakt Calendar Dashboard"
                  width={1920}
                  height={1200}
                  className="w-full h-auto rounded-2xl transform transition-all duration-500 hover:scale-[1.02]"
                  priority
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -bottom-12 -right-12 w-56 h-56 bg-blue-200 rounded-full blur-3xl opacity-60" />
              <div className="absolute -top-12 -left-12 w-56 h-56 bg-purple-200 rounded-full blur-3xl opacity-40" />
              
              {/* Additional decorative dots */}
              <div className="absolute -right-4 top-1/4 w-4 h-4 bg-blue-500 rounded-full" />
              <div className="absolute -left-4 bottom-1/4 w-4 h-4 bg-purple-500 rounded-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 