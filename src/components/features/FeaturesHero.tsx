'use client';

import { motion } from 'framer-motion';

export default function FeaturesHero() {
  return (
    <section className="relative pt-32 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900">Running your business</span>
            <br />
            <span className="text-gray-900">is hard.</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 text-transparent bg-clip-text">
              Scheduling shouldn't be.
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A smarter, faster way to manage appointments and schedules for businesses of all sizes – all in one easy-to-use platform
          </p>
        </motion.div>
      </div>
    </section>
  );
} 