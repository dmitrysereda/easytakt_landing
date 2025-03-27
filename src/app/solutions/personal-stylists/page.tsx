'use client';

import { Shirt } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Client Wardrobe Management',
    description: 'Keep detailed records of client preferences, sizes, and style goals. Track wardrobe inventories and shopping lists.',
  },
  {
    title: 'Shopping Session Scheduling',
    description: 'Easily schedule and manage personal shopping appointments, virtual consultations, and wardrobe audits.',
  },
  {
    title: 'Style Recommendations',
    description: 'Create and share digital style boards, outfit combinations, and shopping recommendations with clients.',
  },
  {
    title: 'Client Communication',
    description: 'Send automated appointment reminders, follow-ups, and style updates to keep clients engaged.',
  },
  {
    title: 'Service Packages',
    description: 'Manage different service packages and track client sessions, from one-time consultations to ongoing styling services.',
  },
  {
    title: 'Digital Lookbooks',
    description: 'Create and maintain digital lookbooks for each client, making it easy to reference past recommendations and purchases.',
  },
];

const benefitCategories = [
  {
    title: 'For Clients',
    icon: '👗',
    benefits: [
      { title: 'Easy Booking', description: 'Book styling sessions and consultations with just a few clicks' },
      { title: 'Style History', description: 'Access past recommendations and purchases in one place' },
      { title: 'Seamless Communication', description: 'Get timely updates and style recommendations' },
    ],
  },
  {
    title: 'For Stylists',
    icon: '👔',
    benefits: [
      { title: 'Organized Schedule', description: 'Manage all your client appointments in one calendar' },
      { title: 'Client Profiles', description: 'Access detailed client preferences and history instantly' },
      { title: 'Digital Tools', description: 'Create and share style boards and recommendations easily' },
    ],
  },
  {
    title: 'For Business Owners',
    icon: '💼',
    benefits: [
      { title: 'Business Growth', description: 'Scale your styling business with efficient scheduling' },
      { title: 'Client Management', description: 'Build lasting relationships with organized client data' },
      { title: 'Service Tracking', description: 'Monitor styling sessions and package utilization' },
    ],
  },
];

export default function PersonalStylistsPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Shirt}
        title="Personal Stylists & Fashion Consultants"
        description="Transform your styling business with efficient appointment management and client organization. Focus on creating amazing looks while we handle the scheduling."
        features={features}
        imageUrl="/images/solutions/personal-stylists.jpg"
        benefitCategories={benefitCategories}
        challengeText="Managing multiple client appointments, keeping track of style preferences, and coordinating shopping sessions can be overwhelming. EasyTakt helps you stay organized and focused on what matters most - making your clients look and feel their best."
        color="bg-rose-50"
        iconColor="text-rose-600"
      />
      <Footer />
    </>
  );
} 