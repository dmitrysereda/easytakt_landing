'use client';

import { Wrench } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Service Appointment Booking',
    description: 'Enable customers to book maintenance, repairs, and detailing services online with ease.',
  },
  {
    title: 'Vehicle History Tracking',
    description: 'Maintain detailed service records for each vehicle, including maintenance history and notes.',
  },
  {
    title: 'Technician Scheduling',
    description: 'Efficiently manage technician schedules and workload distribution.',
  },
  {
    title: 'Bay Management',
    description: 'Optimize service bay utilization and prevent scheduling conflicts.',
  },
  {
    title: 'Service Reminders',
    description: 'Send automated maintenance reminders and follow-up notifications to customers.',
  },
  {
    title: 'Digital Estimates',
    description: 'Create and send professional service estimates directly through the platform.',
  },
];

const benefitCategories = [
  {
    title: "For Vehicle Owners",
    icon: "🚗",
    benefits: [
      { title: "Convenient Booking", description: "Schedule service appointments anytime without phone calls" },
      { title: "Service Tracking", description: "Access complete vehicle service history and upcoming maintenance" },
      { title: "Clear Communication", description: "Receive updates and estimates directly through the platform" },
    ],
  },
  {
    title: "For Technicians",
    icon: "🔧",
    benefits: [
      { title: "Organized Workflow", description: "View daily tasks and appointments at a glance" },
      { title: "Service Information", description: "Access vehicle history and service requirements instantly" },
      { title: "Time Management", description: "Better schedule planning and work distribution" },
    ],
  },
  {
    title: "For Shop Owners",
    icon: "💼",
    benefits: [
      { title: "Increased Efficiency", description: "Optimize bay utilization and technician scheduling" },
      { title: "Customer Retention", description: "Build loyalty with professional service and follow-ups" },
      { title: "Business Growth", description: "Expand your customer base with online booking capabilities" },
    ],
  },
];

export default function AutomotiveServicesPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Wrench}
        title="Smart Scheduling for Automotive Services"
        description="Streamline vehicle maintenance appointments, manage service bays, and keep detailed service records. Let customers book services online and automate follow-ups."
        color="bg-slate-50"
        iconColor="text-slate-600"
        features={features}
        imageUrl="/images/solutions/automotive-services.jpg"
        benefitCategories={benefitCategories}
        challengeText="Running an automotive service business comes with unique scheduling challenges. Between managing multiple service bays, coordinating technician schedules, and handling last-minute emergency repairs, traditional booking methods create unnecessary headaches. Phone interruptions disrupt work, while paper-based systems make it difficult to track vehicle histories and maintain accurate records. Meanwhile, customers struggle to find convenient times for service appointments. We understand these challenges and have built a solution to address them all."
      />
      <Footer />
    </>
  );
} 