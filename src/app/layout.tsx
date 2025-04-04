import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from '@/components/analytics/GoogleTagManager';

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#2563eb",
};

export const metadata: Metadata = {
  title: {
    template: '%s | EasyTakt',
    default: 'EasyTakt - Smart Scheduling Software for Businesses',
  },
  description: 'Streamline your business operations with EasyTakt\'s smart scheduling software. Manage appointments, reduce no-shows, and grow your business with our powerful booking platform.',
  keywords: 'scheduling software, appointment booking, business management, online booking system, appointment scheduling, business automation',
  alternates: {
    canonical: 'https://easytakt.com',
  },
  openGraph: {
    title: 'EasyTakt - Smart Scheduling Software for Businesses',
    description: 'Streamline your business operations with EasyTakt\'s smart scheduling software. Manage appointments, reduce no-shows, and grow your business with our powerful booking platform.',
    type: 'website',
    url: 'https://easytakt.com',
    siteName: 'EasyTakt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyTakt - Smart Scheduling Software for Businesses',
    description: 'Streamline your business operations with EasyTakt\'s smart scheduling software. Manage appointments, reduce no-shows, and grow your business with our powerful booking platform.',
  },
  metadataBase: new URL("https://easytakt.com"),
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={inter.className}>
        <GoogleTagManager />
        <main id="main-content" tabIndex={-1}>
          {children}
        </main>
      </body>
    </html>
  );
}
