'use client';

import { motion } from 'framer-motion';
import { Car, Music, Scissors, Dumbbell, GraduationCap, Briefcase, Dog, Wrench, Shirt, Rocket, Wallet, Shield } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useEffect } from 'react';
import SignupButton from '@/components/SignupButton';

const solutions = [
  {
    icon: Scissors,
    title: "Salons & Spas",
    description: "Streamline appointments, manage staff schedules, and reduce no-shows with automated reminders.",
    color: "bg-pink-50",
    iconColor: "text-pink-600",
    image: "/images/solutions/salon-spa-interior.jpg",
    href: "/solutions/salons-and-spas"
  },
  {
    icon: Music,
    title: "Music & Dance Schools",
    description: "Coordinate lessons, manage practice rooms, and track student progress all in one place.",
    color: "bg-indigo-50",
    iconColor: "text-indigo-600",
    image: "/images/solutions/music-dance-studio.jpg",
    href: "/solutions/music-and-dance"
  },
  {
    icon: Car,
    title: "Driving Schools",
    description: "Manage instructor schedules, track vehicle availability, and let students book lessons online.",
    color: "bg-red-50",
    iconColor: "text-red-600",
    image: "/images/solutions/driving-school.jpg",
    href: "/solutions/driving-schools"
  },
  {
    icon: Dumbbell,
    title: "Fitness & Wellness",
    description: "Handle class bookings, manage memberships, and optimize studio capacity effortlessly.",
    color: "bg-green-50",
    iconColor: "text-green-600",
    image: "/images/solutions/fitness-studio.jpg",
    href: "/solutions/fitness-and-wellness"
  },
  {
    icon: GraduationCap,
    title: "Tutors & Coaches",
    description: "Schedule sessions, track progress, and share resources with your students seamlessly.",
    color: "bg-blue-50",
    iconColor: "text-blue-600",
    image: "/images/solutions/tutoring-session.jpg",
    href: "/solutions/tutors-and-coaches"
  },
  {
    icon: Briefcase,
    title: "Freelancers",
    description: "Take control of your schedule, manage client bookings, and present a professional image.",
    color: "bg-purple-50",
    iconColor: "text-purple-600",
    image: "/images/solutions/freelancer-workspace.jpg",
    href: "/solutions/freelancers"
  },
  {
    icon: Dog,
    title: "Pet Services",
    description: "Manage pet appointments, training sessions, and client communication efficiently.",
    color: "bg-amber-50",
    iconColor: "text-amber-600",
    image: "/images/solutions/pet-services.jpg",
    href: "/solutions/pet-services"
  },
  {
    icon: Wrench,
    title: "Automotive Services",
    description: "Enable easy appointment booking for vehicle maintenance and repairs.",
    color: "bg-slate-50",
    iconColor: "text-slate-600",
    image: "/images/solutions/automotive-services.jpg",
    href: "/solutions/automotive-services"
  },
  {
    icon: Shirt,
    title: "Personal Stylists & Fashion Consultants",
    description: "Manage client appointments for wardrobe styling and shopping sessions.",
    color: "bg-rose-50",
    iconColor: "text-rose-600",
    image: "/images/solutions/personal-stylists.jpg",
    href: "/solutions/personal-stylists"
  }
];

export default function SolutionsPage() {
  useEffect(() => {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  const fadeInUp = {
    hidden: { 
      opacity: 0,
      y: 30
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="py-32 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto mb-20">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="space-y-6"
              >
                <h1 className="text-[2.75rem] md:text-[3.5rem] lg:text-[4rem] font-bold leading-[1.1] tracking-tight">
                  <span className="block text-gray-900">
                    Running your business
                  </span>
                  <span className="block text-gray-900 mt-2">
                    is hard.
                  </span>
                  <span className="block bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mt-6">
                    Scheduling shouldn't be.
                  </span>
                </h1>
              </motion.div>
              <motion.p
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                className="text-xl text-gray-600 max-w-3xl mx-auto mt-10"
              >
                A smarter, faster way to manage appointments and schedules for businesses of all sizes – all in one easy-to-use platform
              </motion.p>
            </div>

            {/* Solutions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              {solutions.map((solution, index) => {
                const Icon = solution.icon;
                return (
                  <motion.div
                    key={solution.title}
                    initial={{ 
                      opacity: 0,
                      y: 40,
                      scale: 0.97
                    }}
                    whileInView={{ 
                      opacity: 1,
                      y: 0,
                      scale: 1
                    }}
                    viewport={{ 
                      once: true,
                      margin: "-10%"
                    }}
                    transition={{ 
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                  >
                    <Link href={solution.href} className="block group h-full">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          priority={index < 3}
                          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 transition-opacity duration-300 group-hover:opacity-90"></div>
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <div className={`inline-flex items-center justify-center p-3 rounded-xl ${solution.color} bg-opacity-90 backdrop-blur-sm mb-3 transition-transform duration-300 ease-out group-hover:scale-105`}>
                            <Icon className={`w-6 h-6 ${solution.iconColor}`} />
                          </div>
                          <h3 className="text-2xl font-bold text-white mb-2 transition-transform duration-300 ease-out group-hover:translate-x-1">{solution.title}</h3>
                          <p className="text-gray-200 text-sm min-h-[3rem] transition-opacity duration-300 group-hover:opacity-90">{solution.description}</p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Core Features Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeInUp}
                className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              >
                Core Features for Every Business
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeInUp}
                className="text-xl text-gray-600"
              >
                No matter your industry, EasyTakt provides powerful tools to streamline your scheduling operations.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "24/7 Online Booking",
                  description: "Let clients book appointments anytime, anywhere. No more phone tag or missed opportunities."
                },
                {
                  title: "Smart Resource Management",
                  description: "Efficiently manage your staff, rooms, equipment, and other resources to maximize utilization."
                },
                {
                  title: "Automated Reminders",
                  description: "Reduce no-shows with customizable email and SMS reminders that keep everyone on track."
                },
                {
                  title: "Calendar Integration",
                  description: "Sync with popular calendar apps to avoid double-booking and stay organized across platforms."
                },
                {
                  title: "Detailed Analytics",
                  description: "Make data-driven decisions with insights into booking patterns, resource usage, and more."
                },
                {
                  title: "Custom Branding",
                  description: "Present a professional image with a booking page that matches your brand identity."
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ 
                    opacity: 0,
                    y: 30,
                    scale: 0.97
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ 
                    once: true,
                    margin: "-10%"
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="bg-gray-50 rounded-2xl p-8 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Save Time Section */}
        <section className="py-24 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Save Time. Stay in Control.
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  icon: "Rocket",
                  title: "Quick Setup",
                  description: "EasyTakt is the simplest way to manage schedules for your business. No complicated setup, no lengthy onboarding—import your existing schedules and data in minutes.",
                  color: "bg-blue-50",
                  iconColor: "text-blue-600"
                },
                {
                  icon: "Wallet",
                  title: "Simple Pricing",
                  description: "No hidden fees, no long-term contracts. Unlike other platforms that charge for every extra feature, EasyTakt keeps pricing simple and predictable.",
                  color: "bg-purple-50",
                  iconColor: "text-purple-600"
                },
                {
                  icon: "Shield",
                  title: "GDPR-Compliant & Secure",
                  description: "Your data stays safe, stored securely within the EU, ensuring full compliance with GDPR regulations.",
                  color: "bg-green-50",
                  iconColor: "text-green-600"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ 
                    opacity: 0,
                    y: 30,
                    scale: 0.97
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ 
                    once: true,
                    margin: "-10%"
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex items-start space-x-6"
                >
                  <div className={`flex-shrink-0 w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center`}>
                    {feature.icon === "Rocket" && <Rocket className={`w-8 h-8 ${feature.iconColor}`} />}
                    {feature.icon === "Wallet" && <Wallet className={`w-8 h-8 ${feature.iconColor}`} />}
                    {feature.icon === "Shield" && <Shield className={`w-8 h-8 ${feature.iconColor}`} />}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* The Numbers Don't Lie Section */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-20"
            >
              The Numbers Don't Lie
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
              {[
                {
                  number: "80%",
                  description: "increase in business efficiency through automated scheduling",
                  gradient: "from-blue-400 to-indigo-600"
                },
                {
                  number: "90%",
                  description: "of businesses report better resource utilization",
                  gradient: "from-indigo-400 to-purple-600"
                },
                {
                  number: "50%",
                  description: "decrease in scheduling conflicts and double bookings",
                  gradient: "from-purple-400 to-blue-600"
                }
              ].map((stat, index) => (
                <motion.div
                  key={stat.description}
                  initial={{ 
                    opacity: 0,
                    y: 30,
                    scale: 0.97
                  }}
                  whileInView={{ 
                    opacity: 1,
                    y: 0,
                    scale: 1
                  }}
                  viewport={{ 
                    once: true,
                    margin: "-10%"
                  }}
                  transition={{ 
                    duration: 0.8,
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="text-center"
                >
                  <div className="mb-4">
                    <span className={`text-6xl md:text-7xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </span>
                  </div>
                  <p className="text-lg text-gray-600">
                    {stat.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <motion.h2
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeInUp}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                Ready to streamline your scheduling?
              </motion.h2>
              <motion.p
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeInUp}
                className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
              >
                Join thousands of businesses that trust EasyTakt to handle their scheduling needs.
                Get started today with our 30-day free trial.
              </motion.p>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-10%" }}
                variants={fadeInUp}
              >
                <SignupButton size="large" />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
} 