'use client';

import { motion } from 'framer-motion';
import { Clock, Coins, Shield, Briefcase } from 'lucide-react';

const advantages = [
  {
    icon: Clock,
    title: 'Quick Setup',
    description: 'EasyTakt is the simplest way to manage schedules for your business. No complicated setup, no lengthy onboarding—import your existing schedules and data in minutes.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600'
  },
  {
    icon: Coins,
    title: 'Simple Pricing',
    description: 'No hidden fees, no long-term contracts. Unlike other platforms that charge for every extra feature, EasyTakt keeps pricing simple and predictable.',
    color: 'bg-purple-50',
    iconColor: 'text-purple-600'
  },
  {
    icon: Shield,
    title: 'GDPR-Compliant & Secure',
    description: 'Your data stays safe, stored securely within the EU, ensuring full compliance with GDPR regulations.',
    color: 'bg-cyan-50',
    iconColor: 'text-cyan-600'
  },
  {
    icon: Briefcase,
    title: 'Your Business, Your Rules',
    description: 'We don\'t interfere with your financial relationships with clients. EasyTakt is here to save you hours of scheduling headaches—not to dictate how you run your business.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600'
  }
];

const CompetitiveAdvantages = () => {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Save Time. Stay in Control.
          </h2>
        </motion.div>

        <div className="space-y-20 md:space-y-32">
          {advantages.map((advantage, index) => (
            <motion.div
              key={advantage.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 md:gap-16`}
            >
              {/* Icon Container */}
              <div className={`w-full md:w-1/3 ${advantage.color} rounded-3xl p-8 md:p-12 transform hover:scale-105 transition-transform duration-300`}>
                <div className="aspect-square relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <advantage.icon className={`w-16 h-16 ${advantage.iconColor}`} />
                  </div>
                  {/* Decorative background circles */}
                  <div className={`absolute inset-0 ${advantage.color} rounded-full transform -rotate-6 scale-90`} />
                  <div className={`absolute inset-0 ${advantage.color} rounded-full transform rotate-12 scale-95`} />
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {advantage.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveAdvantages; 