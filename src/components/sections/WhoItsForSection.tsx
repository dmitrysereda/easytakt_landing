'use client';

import { Music, Scissors, Dumbbell, GraduationCap, Briefcase, Stethoscope, Car, Dog, Wrench, Shirt } from 'lucide-react';
import Link from 'next/link';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const businesses = [
  {
    icon: Car,
    title: 'Driving Schools',
    description: 'Manage instructors, vehicles, and student lessons efficiently.',
    color: 'bg-red-50',
    iconColor: 'text-red-600',
    href: '/solutions/driving-schools'
  },
  {
    icon: Music,
    title: 'Music & Dance Schools',
    description: 'Organize private lessons and group classes.',
    color: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    href: '/solutions/music-and-dance'
  },
  {
    icon: Scissors,
    title: 'Salons & Spas',
    description: 'Let clients book appointments without calling.',
    color: 'bg-pink-50',
    iconColor: 'text-pink-600',
    href: '/solutions/salons-and-spas'
  },
  {
    icon: Dumbbell,
    title: 'Fitness & Wellness Studios',
    description: 'Manage sessions, trainers, and class schedules.',
    color: 'bg-orange-50',
    iconColor: 'text-orange-600',
    href: '/solutions/fitness-and-wellness'
  },
  {
    icon: GraduationCap,
    title: 'Tutors & Coaches',
    description: 'Keep track of lessons and student progress effortlessly.',
    color: 'bg-blue-50',
    iconColor: 'text-blue-600',
    href: '/solutions/tutors-and-coaches'
  },
  {
    icon: Briefcase,
    title: 'Freelancers & Service Providers',
    description: 'Spend more time working, less time scheduling.',
    color: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    href: '/solutions/freelancers'
  },
  {
    icon: Dog,
    title: 'Pet Services',
    description: 'Manage pet appointments, training sessions, and client communication.',
    color: 'bg-amber-50',
    iconColor: 'text-amber-600',
    href: '/solutions/pet-services'
  },
  {
    icon: Wrench,
    title: 'Automotive Services',
    description: 'Enable easy appointment booking for vehicle maintenance and repairs.',
    color: 'bg-slate-50',
    iconColor: 'text-slate-600',
    href: '/solutions/automotive-services'
  },
  {
    icon: Shirt,
    title: 'Personal Stylists & Fashion Consultants',
    description: 'Manage client appointments for wardrobe styling and shopping sessions.',
    color: 'bg-rose-50',
    iconColor: 'text-rose-600',
    href: '/solutions/personal-stylists'
  }
];

const WhoItsForSection = () => {
  const titleRef = useIntersectionObserver();
  const businessRefs = businesses.map(() => useIntersectionObserver());

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={titleRef}
          className="text-center mb-16 animate-fade-in-up"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Who It's For?
          </h2>
          <p className="text-xl text-gray-600">
            Designed for small business owners who need a simple, reliable scheduling system
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businesses.map((business, index) => (
            <Link 
              key={business.title} 
              href={business.href}
              className="block group"
            >
              <div
                ref={businessRefs[index]}
                className={`${business.color} rounded-2xl p-8 transform transition-all duration-300 h-full hover:scale-[1.02] hover:shadow-lg animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg ${business.color}`}>
                    <business.icon className={`w-8 h-8 ${business.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {business.title}
                </h3>
                <p className="text-gray-600">
                  {business.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection; 