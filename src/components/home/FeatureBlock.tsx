import { LucideIcon } from 'lucide-react';

interface FeatureBlockProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
}

export default function FeatureBlock({ title, description, icon: Icon, className = '' }: FeatureBlockProps) {
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="relative aspect-square w-16">
        {/* Main icon container */}
        <div className="absolute inset-0 flex items-center justify-center bg-emerald-50 rounded-3xl p-4">
          <Icon className="w-16 h-16 text-emerald-600" strokeWidth={1} />
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 bg-emerald-50 rounded-full transform -rotate-6 scale-90" />
        <div className="absolute inset-0 bg-emerald-50 rounded-full transform -rotate-12 scale-95" />
      </div>
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
} 