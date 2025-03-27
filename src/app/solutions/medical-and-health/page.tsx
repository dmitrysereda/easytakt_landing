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
      />
      <Footer />
    </>
  );
} 