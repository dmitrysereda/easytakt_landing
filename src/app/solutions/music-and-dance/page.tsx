'use client';

import { Music } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Easy Lesson Scheduling',
    description: 'Schedule private lessons and group classes with a few clicks. Students and parents can book available slots online.',
  },
  {
    title: 'Student Progress Tracking',
    description: 'Keep detailed notes on student progress, repertoire, and practice assignments all in one place.',
  },
  {
    title: 'Automated Reminders',
    description: 'Reduce no-shows with automatic lesson reminders via email or SMS.',
  },
  {
    title: 'Room & Resource Management',
    description: 'Efficiently manage practice rooms, instruments, and other resources across all your classes.',
  },
  {
    title: 'Group Class Management',
    description: 'Organize recitals, workshops, and group lessons with ease. Track attendance and capacity.',
  },
  {
    title: 'Payment Integration',
    description: 'Connect with your preferred payment system to handle lesson fees and package purchases.',
  },
];

const benefitCategories = [
  {
    title: "For Students",
    icon: "🎵",
    benefits: [
      { title: "Stay on track effortlessly", description: "View your upcoming lessons and practice schedule at a glance" },
      { title: "Never miss a lesson", description: "Get timely reminders and sync lessons with your calendar instantly" },
      { title: "Reschedule easily", description: "Change lesson times with a few clicks when life gets busy" },
      { title: "Track your progress", description: "Access practice notes and assignments in one place" },
    ],
  },
  {
    title: "For Teachers",
    icon: "👩‍🏫",
    benefits: [
      { title: "Organize your schedule", description: "See all your private and group lessons in one clear view" },
      { title: "Keep detailed records", description: "Track student progress, repertoire, and practice assignments" },
      { title: "Manage resources", description: "Book practice rooms and instruments without conflicts" },
    ],
  },
  {
    title: "For School Owners",
    icon: "🎹",
    benefits: [
      { title: "Streamline operations", description: "Manage multiple teachers and class types effortlessly" },
      { title: "Optimize resources", description: "Maximize studio space and instrument utilization" },
      { title: "Grow your business", description: "Focus on teaching while we handle the scheduling" },
    ],
  },
];

export default function MusicAndDancePage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Music}
        title="Simplified Scheduling for Music & Dance Schools"
        description="Manage private lessons, group classes, and student progress with ease. Allow students and parents to book sessions online and automate reminders."
        color="bg-indigo-50"
        iconColor="text-indigo-600"
        features={features}
        imageUrl="/images/solutions/music-dance-studio.jpg"
        benefitCategories={benefitCategories}
        challengeText="Managing a music or dance school is like conducting an orchestra—every element needs to be perfectly synchronized. Between coordinating private lessons, group classes, and studio space, traditional scheduling methods fall flat. Teachers struggle with last-minute cancellations, while parents and students get frustrated with inflexible booking systems. Practice rooms sit empty during prime times, yet get double-booked during peak hours. And keeping track of student progress across multiple instructors? That's a dance nobody wants to do."
      />
      <Footer />
    </>
  );
} 