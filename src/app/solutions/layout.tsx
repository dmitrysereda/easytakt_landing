import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | EasyTakt Solutions',
    default: 'Business Solutions | EasyTakt',
  },
  description: 'Discover how EasyTakt can streamline your business operations with our specialized scheduling software solutions.',
  keywords: 'business scheduling software, appointment management, online booking system, business automation, scheduling solutions',
  alternates: {
    canonical: 'https://easytakt.com/solutions',
  },
  openGraph: {
    title: 'Business Solutions | EasyTakt',
    description: 'Discover how EasyTakt can streamline your business operations with our specialized scheduling software solutions.',
    type: 'website',
    url: 'https://easytakt.com/solutions',
  }
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
} 