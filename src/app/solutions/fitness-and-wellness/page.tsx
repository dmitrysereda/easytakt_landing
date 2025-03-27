'use client';

import { Dumbbell } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Class & Session Booking',
    description: 'Let members book group classes and personal training sessions online with ease.',
  },
  {
    title: 'Capacity Management',
    description: 'Set and track class sizes, waitlists, and equipment availability automatically.',
  },
  {
    title: 'Trainer Scheduling',
    description: 'Coordinate trainer schedules, specialties, and availability in one place.',
  },
  {
    title: 'Member Management',
    description: 'Track member attendance, progress, and preferences for personalized service.',
  },
  {
    title: 'Automated Reminders',
    description: 'Reduce no-shows with class and session reminders via email or SMS.',
  },
  {
    title: 'Resource Management',
    description: 'Optimize studio space and equipment usage across all classes and sessions.',
  },
];

const benefitCategories = [
  {
    title: "For Members",
    icon: "💪",
    benefits: [
      { title: "Book with ease", description: "Reserve your spot in classes and sessions anytime, anywhere" },
      { title: "Stay committed", description: "Get timely reminders to keep your fitness routine on track" },
      { title: "Flexible scheduling", description: "Easily swap classes or reschedule when plans change" },
      { title: "Track your journey", description: "Monitor your attendance and progress over time" },
    ],
  },
  {
    title: "For Trainers",
    icon: "🏋️‍♂️",
    benefits: [
      { title: "Organized schedule", description: "View all your classes and private sessions in one place" },
      { title: "Client insights", description: "Access member profiles and fitness goals instantly" },
      { title: "Capacity control", description: "Manage class sizes and waitlists effortlessly" },
    ],
  },
  {
    title: "For Facility Owners",
    icon: "🏢",
    benefits: [
      { title: "Maximize efficiency", description: "Optimize studio space and equipment utilization" },
      { title: "Data-driven decisions", description: "Track class popularity and attendance patterns" },
      { title: "Scale with ease", description: "Add new classes and trainers as your business grows" },
    ],
  },
];

export default function FitnessAndWellnessPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Dumbbell}
        title="Smart Scheduling for Fitness & Wellness"
        description="Streamline class bookings, manage member attendance, and coordinate trainer schedules all in one place. Let members book sessions online and automate reminders."
        color="bg-green-50"
        iconColor="text-green-600"
        features={features}
        imageUrl="/images/solutions/fitness-studio.jpg"
        benefitCategories={benefitCategories}
        challengeText="Running a fitness or wellness facility is about helping people transform their lives—not getting tangled up in scheduling chaos. But between managing class capacities, coordinating trainer schedules, and handling last-minute cancellations, you're spending more time on admin than actual coaching. Members get frustrated when classes are full, trainers struggle with schedule conflicts, and your front desk is overwhelmed with booking requests. Meanwhile, prime studio time goes unused while peak hours are overbooked. It's enough to make anyone break a sweat—and not in a good way."
      />
      <Footer />
    </>
  );
} 