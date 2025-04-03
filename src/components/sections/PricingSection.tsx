'use client';

import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import SignupButton from '../SignupButton';

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
  return (
    <section id="pricing" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            No hidden fees. No long-term contracts. Just everything you need to run your business efficiently.
          </motion.p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left Column - Pricing */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-lg hover:shadow-xl transition-shadow duration-300"
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
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <SignupButton size="large" className="w-full md:w-auto" />
            </motion.div>
          </motion.div>

          {/* Right Column - ROI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Your Investment, Multiplied
            </h3>
            
            <div className="space-y-6">
              {roi.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/50 rounded-2xl p-6 backdrop-blur-sm border border-gray-100 hover:border-gray-200 transition-colors duration-300"
                >
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">
                    {item.title}
                  </h4>
                  <p className="text-gray-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection; 