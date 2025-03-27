'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Bell, Car, ChartLine, Smartphone, BarChart, Settings, Play } from 'lucide-react';

const features = [
  {
    icon: Calendar,
    title: 'Interactive Calendar',
    description: 'Easily schedule and manage lessons in a visual, user-friendly planner'
  },
  {
    icon: Users,
    title: 'Student Management',
    description: 'Keep track of student progress, attendance, and lesson history'
  },
  {
    icon: Bell,
    title: 'Automated Reminders',
    description: 'Reduce no-shows with smart notifications for upcoming lessons'
  },
  {
    icon: Car,
    title: 'Manage Facitilties',
    description: 'Optimize vehicle availability and prevent scheduling conflicts'
  },
  {
    icon: ChartLine,
    title: 'Progress Tracking',
    description: 'Monitor student performance with clear insights and reports'
  },
  {
    icon: Smartphone,
    title: 'Mobile Version',
    description: 'Works seamlessly on mobile - schedule always at hand'
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-white" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-blue-50/30 rounded-full blur-3xl transform -translate-y-1/2" />
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-purple-50/30 rounded-full blur-3xl transform translate-y-1/2" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            EasyTakt
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A smarter way to manage your business schedule - streamline bookings, automate reminders, and delight your clients
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-blue-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Calendar className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Interactive Calendar
            </h3>
            <p className="text-gray-600">
              Easily manage your schedule with our intuitive calendar. Set availability, handle bookings, and view your entire schedule at a glance.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-purple-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Client Management
            </h3>
            <p className="text-gray-600">
              Keep track of client information, preferences, and booking history in one organized system. Build stronger relationships with detailed insights.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-cyan-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Bell className="w-6 h-6 text-cyan-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Smart Notifications
            </h3>
            <p className="text-gray-600">
              Reduce no-shows with automated reminders. Keep clients and staff informed with timely notifications about appointments and changes.
            </p>
          </motion.div>
        </div>

        {/* Additional Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-emerald-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <BarChart className="w-6 h-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Business Analytics
            </h3>
            <p className="text-gray-600">
              Make data-driven decisions with insights into booking patterns, client preferences, and business performance metrics.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-rose-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Smartphone className="w-6 h-6 text-rose-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Mobile-Friendly
            </h3>
            <p className="text-gray-600">
              Manage your business on the go. Access your schedule, handle bookings, and stay connected from any device.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="bg-amber-50 w-12 h-12 rounded-xl flex items-center justify-center mb-6">
              <Settings className="w-6 h-6 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Customizable Settings
            </h3>
            <p className="text-gray-600">
              Tailor the platform to your business needs. Set custom booking rules, service durations, and availability windows.
            </p>
          </motion.div>
        </div>

        {/* Video Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-24 relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
            <Play className="w-16 h-16 text-blue-600" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;