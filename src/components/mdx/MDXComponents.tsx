'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Brain,
  Briefcase,
  Check,
  Clock,
  ClipboardCheck,
  Compass,
  DollarSign,
  Lightbulb,
  MessageSquare,
  RefreshCw,
  Smartphone,
  Target,
  TrendingUp,
  Users,
  type LucideIcon
} from 'lucide-react';

const IconWrapper = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center justify-center w-6 h-6 text-emerald-600">
    {children}
  </span>
);

const icons: Record<string, LucideIcon> = {
  IconAward: Award,
  IconBrain: Brain,
  IconBriefcase: Briefcase,
  IconCheck: Check,
  IconClock: Clock,
  IconClipboardCheck: ClipboardCheck,
  IconCompass: Compass,
  IconDollarSign: DollarSign,
  IconLightbulb: Lightbulb,
  IconMessageSquare: MessageSquare,
  IconRefreshCw: RefreshCw,
  IconSmartphone: Smartphone,
  IconTarget: Target,
  IconTrendingUp: TrendingUp,
  IconUsers: Users,
};

const MDXComponents = {
  // Handle icons
  ...Object.fromEntries(
    Object.entries(icons).map(([name, Icon]) => [
      name,
      () => (
        <IconWrapper>
          <Icon className="w-4 h-4" />
        </IconWrapper>
      ),
    ])
  ),

  // Override base elements
  h1: (props: any) => (
    <h1 className="text-4xl font-bold text-gray-900 mt-8 mb-4" {...props} />
  ),
  h2: (props: any) => (
    <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6 flex items-center gap-2" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-2xl font-semibold text-gray-900 mt-8 mb-4 flex items-center gap-2" {...props} />
  ),
  h4: (props: any) => (
    <h4 className="text-xl font-semibold text-gray-900 mt-6 mb-3" {...props} />
  ),
  p: (props: any) => (
    <p className="text-gray-600 leading-relaxed mb-6" {...props} />
  ),
  a: (props: any) => (
    <Link
      {...props}
      className="text-blue-600 hover:text-blue-800 underline"
    />
  ),
  ul: (props: any) => (
    <ul className="list-none space-y-2 mb-6" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-inside space-y-2 mb-6" {...props} />
  ),
  li: (props: any) => (
    <li className="text-gray-600 flex items-center gap-2" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-emerald-500 pl-4 italic text-gray-700 my-6 py-2 text-lg" {...props} />
  ),
  img: (props: any) => (
    <img className="rounded-lg my-8" {...props} />
  ),
  pre: (props: any) => (
    <pre className="bg-gray-50 rounded-lg p-4 overflow-x-auto my-6" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 rounded px-1 py-0.5 text-sm" {...props} />
  ),
};

export default MDXComponents; 