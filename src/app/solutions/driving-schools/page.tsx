'use client';

import { Car } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Student Lesson Management',
    description: 'Schedule theory and practical lessons with ease. Let students book available slots online.',
  },
  {
    title: 'Vehicle Fleet Management',
    description: 'Track and manage your vehicle fleet efficiently. Prevent double-booking and optimize utilization.',
  },
  {
    title: 'Instructor Scheduling',
    description: 'Coordinate instructor schedules, specialties, and availability all in one place.',
  },
  {
    title: 'Automated Reminders',
    description: 'Reduce no-shows with automatic lesson reminders via email or SMS.',
  },
  {
    title: 'Progress Tracking',
    description: 'Keep detailed notes on student progress, test readiness, and learning milestones.',
  },
  {
    title: 'Resource Management',
    description: 'Manage classrooms for theory lessons and training materials with ease.',
  },
];

const benefitCategories = [
  {
    title: "For Students",
    icon: "👨‍🎓",
    benefits: [
      { title: "Stay on track effortlessly", description: "View your upcoming lessons at a glance" },
      { title: "Never miss a lesson", description: "Receive timely reminders and add lessons to your calendar with a single tap" },
      { title: "Reschedule in seconds", description: "Flexible rescheduling means no more back-and-forth hassle" },
      { title: "Plan smarter", description: "See both theory and practice lessons in one place" },
    ],
  },
  {
    title: "For Instructors",
    icon: "👨‍🏫",
    benefits: [
      { title: "Be fully prepared", description: "Access your daily and weekly schedule in one view" },
      { title: "Stay organized", description: "Take notes after each lesson to track student progress" },
      { title: "Adapt on the fly", description: "Easily reschedule lessons to match your availability" },
    ],
  },
  {
    title: "For School Owners",
    icon: "👔",
    benefits: [
      { title: "Get full control", description: "Monitor instructor workload and student progress at a glance" },
      { title: "Manage your assets", description: "Keep track of your fleet—cars and motorcycles—without spreadsheets" },
      { title: "Boost efficiency", description: "Reduce manual work so your staff can focus on teaching" },
    ],
  },
];

export default function DrivingSchoolsPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Car}
        title="Smart Scheduling for Driving Schools"
        description="Streamline lesson bookings, manage your fleet, and track student progress all in one place. Let students book lessons online and automate reminders."
        color="bg-red-50"
        iconColor="text-red-600"
        features={features}
        imageUrl="/images/solutions/driving-school.jpg"
        benefitCategories={benefitCategories}
        challengeText="Running a driving school means juggling multiple instructors, vehicles, and students—all while trying to maintain a smooth operation. Phone calls interrupt lessons, double-bookings cause frustration, and tracking vehicle availability becomes a logistical puzzle. Manual scheduling systems lead to confusion, while paper-based records make it hard to track student progress. And let's not forget the time spent playing phone tag with students trying to schedule or reschedule lessons. Sound familiar? We thought so."
      />
      <Footer />
    </>
  );
} 