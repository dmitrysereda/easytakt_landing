'use client';

import { GraduationCap } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: 'Session Scheduling',
    description: 'Let students book one-on-one or group sessions at times that work for everyone.',
  },
  {
    title: 'Online & In-Person',
    description: 'Manage both virtual and physical sessions with integrated video call links.',
  },
  {
    title: 'Progress Tracking',
    description: 'Keep detailed notes on student progress, assignments, and learning goals.',
  },
  {
    title: 'Resource Sharing',
    description: 'Share study materials, homework, and resources directly through the platform.',
  },
  {
    title: 'Automated Reminders',
    description: 'Reduce no-shows with session reminders via email or SMS.',
  },
  {
    title: 'Payment Integration',
    description: 'Handle session payments and package purchases seamlessly.',
  },
];

const benefitCategories = [
  {
    title: "For Students",
    icon: "📚",
    benefits: [
      { title: "Book flexibly", description: "Schedule sessions that fit your learning pace and availability" },
      { title: "Stay organized", description: "Access session materials and homework in one place" },
      { title: "Track progress", description: "Monitor your learning journey and achievements" },
      { title: "Never miss a session", description: "Get timely reminders for upcoming lessons" },
    ],
  },
  {
    title: "For Tutors & Coaches",
    icon: "👩‍🏫",
    benefits: [
      { title: "Manage your time", description: "Set your availability and let students book within your schedule" },
      { title: "Keep detailed records", description: "Track student progress and maintain session notes" },
      { title: "Share resources easily", description: "Distribute materials and assignments efficiently" },
    ],
  },
  {
    title: "For Educational Centers",
    icon: "🏫",
    benefits: [
      { title: "Streamline operations", description: "Coordinate multiple tutors and subjects seamlessly" },
      { title: "Track performance", description: "Monitor student engagement and tutor effectiveness" },
      { title: "Scale your impact", description: "Grow your tutoring business without administrative overhead" },
    ],
  },
];

export default function TutorsAndCoachesPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={GraduationCap}
        title="Smart Scheduling for Tutors & Coaches"
        description="Manage your tutoring sessions, track student progress, and share resources all in one place. Let students book sessions online and automate reminders."
        color="bg-blue-50"
        iconColor="text-blue-600"
        features={features}
        imageUrl="/images/solutions/tutoring-session.jpg"
        benefitCategories={benefitCategories}
        challengeText="As an educator or coach, your focus should be on helping students succeed—not wrestling with calendars and scheduling conflicts. Yet you find yourself buried in emails and text messages, trying to coordinate sessions across different time zones and juggle multiple students' availability. Last-minute cancellations leave gaps in your schedule, while tracking payments and managing lesson materials becomes a part-time job in itself. And don't even mention the headache of switching between in-person and online sessions. It's like trying to teach algebra while doing a handstand—technically possible, but unnecessarily complicated."
      />
      <Footer />
    </>
  );
} 