'use client';

import { motion } from 'framer-motion';

const EaseOfSwitching = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Switching to new software sounds painful. It's not.
          </h2>

          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="space-y-6 text-gray-600">
              <p className="text-lg">
                Your current system—whether it's Excel or a good old-fashioned notebook—works. It's not perfect, but it gets the job done. And honestly, the thought of moving everything to a new system probably sounds like more trouble than it's worth.
              </p>

              <p className="text-lg">
                Maybe you've even looked at some of those "all-in-one" industry solutions that promise to do everything… if you're willing to spend weeks figuring them out (or hire an IT consultant just to add a new lesson). Powerful? Maybe. But unless your dream is to become an expert in enterprise software, you deserve something easier.
              </p>

              <p className="text-lg text-gray-600 mb-8">
                That's exactly why we built EasyTakt—a simple, easy-to-use tool for managing schedules in your business.
              </p>

              <p className="text-lg">
                No complex setup, no weeks of onboarding. You can import your existing schedules and student data in minutes. And if you don't want to do it yourself, we'll do it for you—free.
              </p>

              <div className="mt-8">
                <p className="text-lg font-semibold text-gray-900 mb-4">
                  Here's how simple it is with EasyTakt:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Auto-notifications for clients and your staff—so they stop calling you</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>Real-time scheduling—you always know who's signed up and what for</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      className="w-6 h-6 text-green-500 mr-2 mt-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>One dashboard to manage everything, with zero training required</span>
                  </li>
                </ul>
              </div>

              <p className="text-lg mt-8">
                If you're spending more time managing schedules than running your business, you're leaving money on the table.
              </p>

              <div className="mt-8 text-center">
                <a
                  href="#demo"
                  className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
                >
                  Watch this quick demo and see how you can fix that today
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EaseOfSwitching; 