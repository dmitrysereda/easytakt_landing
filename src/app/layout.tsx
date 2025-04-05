import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GoogleTagManager from '@/components/analytics/GoogleTagManager';
import { LanguageProviderWrapper } from '@/components/providers/LanguageProviderWrapper';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

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
  title: 'EasyTakt - Smart Scheduling for Your Business',
  description: 'Streamline your operations, reduce no-shows, and grow your business with our powerful scheduling platform.',
  keywords: 'scheduling software, appointment booking, business management, online booking system',
  alternates: {
    canonical: 'https://easytakt.com',
  },
  openGraph: {
    title: 'EasyTakt - Smart Scheduling for Your Business',
    description: 'Streamline your operations, reduce no-shows, and grow your business with our powerful scheduling platform.',
    type: 'website',
    locale: 'en_US',
    siteName: 'EasyTakt',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EasyTakt - Smart Scheduling for Your Business',
    description: 'Streamline your operations, reduce no-shows, and grow your business with our powerful scheduling platform.',
  },
  metadataBase: new URL("https://easytakt.com"),
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <GoogleTagManager />
      </head>
      <body className={inter.className}>
        <LanguageProviderWrapper>
          <div className="min-h-screen">
            <main id="main-content" tabIndex={-1}>
              {children}
            </main>
          </div>
        </LanguageProviderWrapper>
      </body>
    </html>
  );
}
