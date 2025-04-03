import { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms & Conditions - EasyTakt',
  description: 'Terms and conditions for using EasyTakt scheduling platform.',
};

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
          <div className="prose prose-lg max-w-none">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">EasyTakt Terms & Conditions</h1>
            
            <p className="text-xl text-gray-600 mb-12">
              Welcome to EasyTakt! We're glad you're here. These Terms & Conditions explain how you can use our service. 
              We've kept everything short, clear, and easy to follow.
            </p>

            <section className="space-y-12">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Getting Started</h2>
                <p className="text-gray-600 mb-4">To use EasyTakt:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>You must be at least 18 years old.</li>
                  <li>If you're signing up for someone else (like a company), make sure you're allowed to do that.</li>
                  <li>Keep your login info secure. You're responsible for anything done through your account.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Your Use of EasyTakt</h2>
                <p className="text-gray-600 mb-4">We offer scheduling tools to help you run your business more smoothly. You agree to:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Use your account and booking links responsibly.</li>
                  <li>Avoid offensive, misleading, or spammy booking link names.</li>
                  <li>Not collect links you're not actively using—links unused for 180+ days may be released.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Content and Responsibility</h2>
                <p className="text-gray-600 mb-4">You can share content (like images, text, and links) through EasyTakt. Please:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Only share content you have the rights to.</li>
                  <li>Don't post harmful, illegal, or misleading material.</li>
                  <li>Avoid using bots or scripts to interact with the platform.</li>
                  <li>Know that you're responsible for anything you publish, not us.</li>
                </ul>
                <p className="text-gray-600 mt-4">We don't review or verify content shared by users and aren't liable for it.</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Plans and Payments</h2>
                <p className="text-gray-600 mb-4">We offer both free and paid plans. Here's how it works:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Paid plans come with a 14-day free trial.</li>
                  <li>You can cancel anytime during the trial—no charge.</li>
                  <li>If not canceled, your paid plan will automatically start.</li>
                  <li>All fees must be paid on time. Some features may involve extra charges.</li>
                  <li>Missed payments may result in downgrade to the free plan.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Changes and Cancellations</h2>
                <p className="text-gray-600 mb-4">We may occasionally update our service or terms. If we make significant changes, we'll try to let you know in advance.</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>By continuing to use EasyTakt after updates, you agree to the new terms.</li>
                  <li>If you don't agree, you can cancel your account at any time.</li>
                  <li>We reserve the right to suspend or close accounts that violate these terms.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data & Privacy</h2>
                <p className="text-gray-600 mb-4">We care about your privacy. Here's the quick version:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Read our <Link href="/privacy" className="text-blue-600 hover:text-blue-700">Privacy Policy</Link> to understand how your data is handled.</li>
                  <li>You retain ownership of your content, but by uploading it, you allow us to use it to deliver our service.</li>
                  <li>Data created through EasyTakt may be used (in anonymous or aggregated form) to improve the platform.</li>
                  <li>Back up your own content—we're not responsible for lost data.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Platform Rights</h2>
                <p className="text-gray-600 mb-4">EasyTakt owns and maintains the platform. You:</p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Get a limited, non-transferable right to use the platform while you follow these terms.</li>
                  <li>Cannot copy, sell, or reverse-engineer our software.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Legal Stuff</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>You agree to cover any costs or damages we incur if your use of EasyTakt causes problems (like violating someone else's rights).</li>
                  <li>Our liability is limited: we're not responsible for indirect or unexpected damages.</li>
                  <li>If there's ever an issue, our total liability won't exceed what you paid us—or €100, whichever is higher.</li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Final Notes</h2>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>These terms are the full agreement between you and EasyTakt.</li>
                  <li>If part of these terms is found invalid, the rest still applies.</li>
                  <li>Local laws always take priority if there's a conflict.</li>
                </ul>
              </div>
            </section>

            <div className="mt-12 p-8 bg-gray-50 rounded-2xl">
              <p className="text-gray-600">
                Got questions? Reach us anytime at{' '}
                <a href="mailto:hi@easytakt.com" className="text-blue-600 hover:text-blue-700">
                  hi@easytakt.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
} 