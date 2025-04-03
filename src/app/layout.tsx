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
  title: "EasyTakt - Business Scheduling Made Easy",
  description: "Simplify your business operations with EasyTakt. Manage schedules, reduce admin work, and grow your business with our easy-to-use platform.",
  keywords: "driving school, scheduling software, driving instructor, student management, driving school management",
  openGraph: {
    title: "EasyTakt - Business Scheduling Made Easy",
    description: "Simplify your business operations with EasyTakt. Manage schedules, reduce admin work, and grow your business with our easy-to-use platform.",
    type: "website",
    url: "https://easytakt.com",
    siteName: "EasyTakt",
  },
  twitter: {
    card: "summary_large_image",
    title: "EasyTakt - Business Scheduling Made Easy",
    description: "Simplify your business operations with EasyTakt. Manage schedules, reduce admin work, and grow your business with our easy-to-use platform.",
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
