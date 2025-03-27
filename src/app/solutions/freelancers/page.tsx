'use client';

import { Briefcase } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Smart Availability',
    description: 'Set your working hours and let clients book during times that work for you.',
  },
  {
    title: 'Service Management',
    description: 'Organize your services, packages, and pricing in one professional interface.',
  },
  {
    title: 'Client Portal',
    description: 'Give clients a professional booking experience with your branded portal.',
  },
  {
    title: 'Project Tracking',
    description: 'Keep track of ongoing projects, deadlines, and client communications.',
  },
  {
    title: 'Automated Reminders',
    description: 'Reduce no-shows with meeting reminders via email or SMS.',
  },
  {
    title: 'Calendar Integration',
    description: 'Sync with your favorite calendar to avoid double-booking.',
  },
];

const benefitCategories = [
  {
    title: "For Your Clients",
    icon: "🤝",
    benefits: [
      { title: "Easy booking", description: "Schedule meetings and consultations with just a few clicks" },
      { title: "Clear communication", description: "Get automatic confirmations and meeting reminders" },
      { title: "Professional experience", description: "Book through your branded scheduling portal" },
      { title: "Flexible options", description: "Choose from your available services and time slots" },
    ],
  },
  {
    title: "For You as a Freelancer",
    icon: "💼",
    benefits: [
      { title: "Work on your terms", description: "Control your schedule and availability with precision" },
      { title: "Stay organized", description: "Manage all your client meetings and projects in one place" },
      { title: "Look professional", description: "Present a polished booking experience to clients" },
    ],
  },
  {
    title: "For Your Business",
    icon: "📈",
    benefits: [
      { title: "Save time", description: "Eliminate back-and-forth emails about scheduling" },
      { title: "Grow efficiently", description: "Scale your client base without administrative overhead" },
      { title: "Work smarter", description: "Focus on delivering value instead of managing calendars" },
    ],
  },
];

export default function FreelancersPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Briefcase}
        title="Professional Scheduling for Freelancers"
        description="Take control of your schedule, manage client bookings, and present a professional image. Let clients book meetings online and automate reminders."
        color="bg-purple-50"
        iconColor="text-purple-600"
        features={features}
        imageUrl="/images/solutions/freelancer-workspace.jpg"
        benefitCategories={benefitCategories}
      />
      <Footer />
    </>
  );
} 