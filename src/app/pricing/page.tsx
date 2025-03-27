import { Euro, CheckCircle2, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const features = [
  'All features included - no upsells',
  'Unlimited clients and staff members',
  'Smart scheduling & automated notifications',
  'Comprehensive business analytics',
  'Client history and notes',
  'Custom booking rules',
  'Multiple service locations',
  'Calendar integrations',
  'Mobile app access',
  'Priority support',
];

const benefits = [
  {
    title: 'Reduce No-Shows',
    description: 'Smart reminders and confirmations dramatically reduce missed appointments',
    metric: 'Up to 80% reduction in no-shows'
  },
  {
    title: 'Save Admin Time',
    description: 'Automate your scheduling workflow and free up hours every week',
    metric: '15+ hours saved per month'
  },
  {
    title: 'Boost Client Satisfaction',
    description: 'Deliver a seamless booking experience that keeps clients coming back',
    metric: '95% client satisfaction rate'
  },
  {
    title: 'Increase Revenue',
    description: 'Fill empty slots and optimize your schedule for maximum earnings',
    metric: '25% average revenue increase'
  }
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600">
              No hidden fees. No long-term contracts. Just everything you need to run your business efficiently.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Pricing Card */}
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                <div className="flex items-baseline mb-8">
                  <Euro className="w-12 h-12 text-blue-600" strokeWidth={1.5} />
                  <span className="text-6xl font-bold text-gray-900">35</span>
                  <span className="text-xl text-gray-600 ml-2">/month</span>
                </div>
                <p className="text-xl text-gray-600 mb-8">
                  Everything included. No surprises.
                </p>
                <div className="space-y-4 mb-8">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center w-full px-6 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                >
                  Sign up for early access
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </div>

              {/* Benefits */}
              <div className="space-y-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Your Investment, Multiplied
                </h2>
                <div className="grid gap-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="space-y-3">
                      <h3 className="text-xl font-semibold text-gray-900">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600">
                        {benefit.description}
                      </p>
                      <p className="text-sm font-medium text-emerald-600">
                        {benefit.metric}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Is there a minimum contract period?
                </h3>
                <p className="text-gray-600">
                  No, EasyTakt is a month-to-month service. You can cancel at any time without any penalties.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Are there any setup fees?
                </h3>
                <p className="text-gray-600">
                  None at all. The monthly fee covers everything, including setup and onboarding support.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  What payment methods do you accept?
                </h3>
                <p className="text-gray-600">
                  We accept all major credit cards and can provide invoices for bank transfers within the EU.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-gray-900">
                  Can I change plans later?
                </h3>
                <p className="text-gray-600">
                  We offer a single comprehensive plan that includes all features. No need to worry about upgrading or downgrading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of businesses already saving time and growing with EasyTakt.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
} 