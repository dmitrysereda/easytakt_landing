'use client';

import { motion } from 'framer-motion';
import { Calendar, Users, Bell, BarChart, Smartphone, Settings, LucideIcon } from 'lucide-react';
import Image from 'next/image';

const iconMap: Record<string, LucideIcon> = {
  'calendar': Calendar,
  'users': Users,
  'bell': Bell,
  'bar-chart': BarChart,
  'smartphone': Smartphone,
  'settings': Settings,
};

interface FeatureBlockProps {
  title: string;
  description: string;
  icon: keyof typeof iconMap;
  image: string;
  imageAlt: string;
  align: 'left' | 'right';
  index: number;
}

export default function FeatureBlock({
  title,
  description,
  icon,
  image,
  imageAlt,
  align,
  index
}: FeatureBlockProps) {
  const contentOrder = align === 'left' ? 'order-2' : 'order-1';
  const imageOrder = align === 'left' ? 'order-1' : 'order-2';
  
  const Icon = iconMap[icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-[1400px] mx-auto"
    >
      {/* Content */}
      <div className={`${contentOrder} lg:px-12`}>
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-blue-50 p-3 rounded-xl">
              <Icon className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          </div>
          <p className="text-lg text-gray-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>

      {/* Image */}
      <div className={`${imageOrder} relative group`}>
        <div className="relative rounded-3xl overflow-hidden bg-gray-50 shadow-2xl">
          <div className="aspect-[16/10] w-full">
            <Image
              src={image}
              alt={imageAlt}
              fill
              className="object-contain p-6 transition-transform duration-300 group-hover:scale-102"
              sizes="(max-width: 768px) 100vw, (max-width: 1400px) 60vw, 800px"
              quality={95}
            />
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -inset-x-6 -inset-y-6 z-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
} 