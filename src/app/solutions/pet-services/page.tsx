'use client';

import { Dog } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Pet Appointment Management',
    description: 'Schedule grooming, training, and walking appointments with ease. Track pet-specific requirements and preferences.',
  },
  {
    title: 'Client & Pet Profiles',
    description: 'Maintain detailed records of pets, including breed, age, medical conditions, and special care instructions.',
  },
  {
    title: 'Staff Scheduling',
    description: 'Coordinate groomers, trainers, and pet walkers efficiently. Match pets with the right specialists.',
  },
  {
    title: 'Automated Reminders',
    description: 'Send appointment confirmations and reminders to pet owners via email or SMS.',
  },
  {
    title: 'Service History Tracking',
    description: 'Keep detailed records of past services, pet behavior notes, and grooming preferences.',
  },
  {
    title: 'Online Booking Portal',
    description: 'Let pet owners book services online and manage their appointments 24/7.',
  },
];

const benefitCategories = [
  {
    title: "For Pet Owners",
    icon: "🐾",
    benefits: [
      { title: "Easy Booking", description: "Book pet services anytime, anywhere with just a few clicks" },
      { title: "Service History", description: "Access complete history of pet services and appointments" },
      { title: "Automatic Reminders", description: "Never miss an appointment with timely notifications" },
    ],
  },
  {
    title: "For Staff",
    icon: "👥",
    benefits: [
      { title: "Organized Schedule", description: "View and manage daily appointments efficiently" },
      { title: "Pet Information", description: "Access detailed pet profiles and care instructions instantly" },
      { title: "Service Notes", description: "Record and track pet behavior and preferences" },
    ],
  },
  {
    title: "For Business Owners",
    icon: "💼",
    benefits: [
      { title: "Business Growth", description: "Expand your client base with professional online booking" },
      { title: "Staff Management", description: "Optimize staff schedules and service allocation" },
      { title: "Client Retention", description: "Build lasting relationships with automated follow-ups" },
    ],
  },
];

export default function PetServicesPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Dog}
        title="Smart Scheduling for Pet Services"
        description="Streamline pet grooming, training, and walking appointments. Keep detailed pet records and automate client communications."
        color="bg-amber-50"
        iconColor="text-amber-600"
        features={features}
        imageUrl="/images/solutions/pet-services.jpg"
        benefitCategories={benefitCategories}
        challengeText="Running a pet service business means juggling multiple appointments while ensuring each furry friend gets the attention they deserve. Between managing different service types, coordinating staff schedules, and keeping track of each pet's unique needs, traditional booking systems fall short. Phone calls interrupt services, while paper records make it hard to maintain detailed pet histories. Meanwhile, pet owners struggle to book appointments around their busy schedules. Sound familiar? We've got you covered."
      />
      <Footer />
    </>
  );
} 