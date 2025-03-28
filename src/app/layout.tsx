import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SignupFormProvider } from '@/contexts/SignupFormContext';
import GoogleTagManager from '@/components/analytics/GoogleTagManager';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "EasyTakt - Business Scheduling Made Easy",
  description: "Simplify your business operations with EasyTakt. Manage schedules, reduce admin work, and grow your business with our easy-to-use platform.",
  keywords: "driving school, scheduling software, driving instructor, student management, driving school management",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager />
        <SignupFormProvider>
          {children}
        </SignupFormProvider>
      </body>
    </html>
  );
}
