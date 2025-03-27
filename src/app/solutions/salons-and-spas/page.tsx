'use client';

import { Scissors } from 'lucide-react';
import SolutionPageTemplate from '@/components/templates/SolutionPageTemplate';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const features = [
  {
    title: '24/7 Online Booking',
    description: 'Let clients book appointments anytime, anywhere. No more phone tag or missed calls.',
  },
  {
    title: 'Smart Staff Scheduling',
    description: "Manage your team's availability and specialties. Automatically assign the right stylist for each service.",
  },
  {
    title: 'Automated Reminders',
    description: 'Reduce no-shows with customizable appointment reminders via email or SMS.',
  },
  {
    title: 'Service Management',
    description: 'Easily manage different services, durations, and pricing. Group services into packages.',
  },
  {
    title: 'Client History',
    description: 'Keep track of client preferences, previous services, and notes for personalized experience.',
  },
  {
    title: 'Resource Management',
    description: 'Optimize the use of chairs, rooms, and equipment across all appointments.',
  },
];

const benefitCategories = [
  {
    title: "For Clients",
    icon: "💇‍♀️",
    benefits: [
      { title: "Book anytime", description: "Schedule appointments 24/7 from your phone or computer" },
      { title: "Stay informed", description: "Get automatic reminders and updates about your appointments" },
      { title: "Easy rescheduling", description: "Change your appointment time with just a few taps" },
      { title: "Personal preferences", description: "Your favorite services and stylist preferences are saved for next time" },
    ],
  },
  {
    title: "For Stylists & Staff",
    icon: "✂️",
    benefits: [
      { title: "Clear daily schedule", description: "See all your appointments and breaks in one organized view" },
      { title: "Client history at hand", description: "Access client preferences and service history instantly" },
      { title: "Flexible availability", description: "Easily update your working hours and service offerings" },
    ],
  },
  {
    title: "For Salon Owners",
    icon: "👔",
    benefits: [
      { title: "Full business overview", description: "Monitor staff performance and appointment statistics" },
      { title: "Resource optimization", description: "Maximize chair time and reduce empty slots" },
      { title: "Growth focused", description: "Spend less time managing schedules, more time growing your business" },
    ],
  },
];

export default function SalonsAndSpasPage() {
  return (
    <>
      <Header />
      <SolutionPageTemplate
        icon={Scissors}
        title="Effortless Booking for Salons & Spas"
        description="Let clients schedule appointments 24/7, reduce no-shows with reminders, and manage your team's availability from one dashboard."
        color="bg-pink-50"
        iconColor="text-pink-600"
        features={features}
        imageUrl="/images/solutions/salon-spa-interior.jpg"
        benefitCategories={benefitCategories}
        challengeText="In the fast-paced world of beauty and wellness, scheduling shouldn't be your biggest stress factor. Yet here you are, dealing with a constant stream of phone calls during treatments, trying to coordinate stylist schedules on paper, and losing revenue to no-shows. Your team gets overwhelmed with last-minute changes, while clients get frustrated when they can't book their favorite stylist outside business hours. The result? Double-booked chairs, unhappy clients, and a scheduling system that's more complicated than a multi-step hair color process."
      />
      <Footer />
    </>
  );
} 