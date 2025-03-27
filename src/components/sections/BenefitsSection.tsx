'use client';

import { motion } from 'framer-motion';

const BenefitsSection = () => {
  const categories = [
    {
      title: "For Students",
      icon: "👨‍🎓",
      benefits: [
        { title: "Stay on track effortlessly", description: "View your upcoming lessons at a glance" },
        { title: "Never miss a lesson", description: "Receive timely reminders and add lessons to your calendar with a single tap" },
        { title: "Reschedule in seconds", description: "Flexible rescheduling means no more back-and-forth hassle" },
        { title: "Plan smarter", description: "See both theory and practice lessons in one place" },
      ],
    },
    {
      title: "For Instructors",
      icon: "👨‍🏫",
      benefits: [
        { title: "Be fully prepared", description: "Access your daily and weekly schedule in one view" },
        { title: "Stay organized", description: "Take notes after each lesson to track student progress" },
        { title: "Adapt on the fly", description: "Easily reschedule lessons to match your availability" },
      ],
    },
    {
      title: "For School Owners",
      icon: "👔",
      benefits: [
        { title: "Get full control", description: "Monitor instructor workload and student progress at a glance" },
        { title: "Manage your assets", description: "Keep track of your fleet—cars and motorcycles—without spreadsheets" },
        { title: "Boost efficiency", description: "Reduce manual work so your staff can focus on teaching" },
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="benefits" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Why EasyTakt?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600"
          >
            Designed to make scheduling effortless
          </motion.p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12"
        >
          {categories.map((category) => (
            <motion.div
              key={category.title}
              variants={item}
              whileHover={{ 
                y: -8,
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
              className="relative bg-white rounded-2xl p-8 shadow-md transition-all duration-500"
            >
              {/* Gradient background that appears on hover */}
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl -z-10"
              />
              
              {/* Card content */}
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative"
              >
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
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BenefitsSection; 