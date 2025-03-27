'use client';

import { Stethoscope } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Patient Self-Scheduling',
    description: 'Enable patients to book appointments online while respecting your scheduling rules and availability.',
  },
  {
    title: 'Appointment Reminders',
    description: 'Reduce no-shows with automated reminders via email or SMS, including pre-appointment instructions.',
  },
  {
    title: 'Multi-Provider Support',
    description: 'Manage schedules for multiple healthcare providers, specialties, and locations.',
  },
  {
    title: 'Resource Management',
    description: 'Efficiently manage rooms, equipment, and facilities. Prevent double-booking and optimize resource utilization.',
  },
  {
    title: 'Client Records',
    description: 'Keep detailed patient records, medical history, and preferences in one secure place for personalized care.',
  },
  {
    title: 'Integration Ready',
    description: 'Connect with your existing practice management or EMR system for seamless operations.',
  },
];

const benefitCategories = [
  {
    title: "For Patients",
    icon: "👨‍👩‍👧‍👦",
    benefits: [
      { title: "Easy Scheduling", description: "Book appointments online anytime, anywhere" },
      { title: "Timely Reminders", description: "Get appointment reminders and pre-visit instructions" },
      { title: "Flexible Booking", description: "Find and book available slots that fit your schedule" },
      { title: "Seamless Communication", description: "Receive updates and communicate with your provider easily" },
    ],
  },
  {
    title: "For Healthcare Providers",
    icon: "👨‍⚕️",
    benefits: [
      { title: "Organized Schedule", description: "View and manage your daily patient appointments efficiently" },
      { title: "Patient Information", description: "Access patient records and history instantly" },
      { title: "Reduced No-Shows", description: "Minimize missed appointments with automated reminders" },
    ],
  },
  {
    title: "For Practice Managers",
    icon: "🏥",
    benefits: [
      { title: "Resource Optimization", description: "Maximize facility and equipment utilization" },
      { title: "Staff Management", description: "Coordinate provider schedules and availability" },
      { title: "Practice Growth", description: "Scale your practice with efficient scheduling" },
    ],
  },
];

export default function MedicalAndHealthPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Stethoscope}
        title="Smart Scheduling for Medical & Health Services"
        description="Reduce appointment no-shows, streamline scheduling for consultations, and provide an efficient booking system for patients."
        color="bg-cyan-50"
        iconColor="text-cyan-600"
        features={features}
        imageUrl="/images/solutions/medical-office.jpg"
        benefitCategories={benefitCategories}
        challengeText="Managing a medical practice involves complex scheduling needs that go beyond simple appointment booking. Between coordinating multiple providers, managing patient records, and ensuring optimal resource utilization, traditional scheduling systems fall short. No-shows and last-minute cancellations disrupt your day, while manual reminder calls consume valuable staff time. Meanwhile, patients struggle to book appointments that fit their schedule, leading to frustration and potential delays in care. Your practice needs a solution that streamlines scheduling while maintaining the highest standards of patient care."
      />
      <Footer />
    </>
  );
} 