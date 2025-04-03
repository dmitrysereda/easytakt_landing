'use client';

import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-blue-600 font-semibold text-lg mb-4">EasyTakt</h3>
            <p className="text-gray-600">
              Smart scheduling solutions for modern businesses.
            </p>
          </div>

          {/* Solutions */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="font-semibold text-gray-900 mb-4">Solutions</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/solutions/driving-schools" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Driving Schools
                </Link>
              </li>
              <li>
                <Link href="/solutions/music-and-dance" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Music & Dance Schools
                </Link>
              </li>
              <li>
                <Link href="/solutions/salons-and-spas" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Salons & Spas
                </Link>
              </li>
              <li>
                <Link href="/solutions/fitness-and-wellness" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Fitness & Wellness
                </Link>
              </li>
              <li>
                <Link href="/solutions/tutors-and-coaches" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Tutors & Coaches
                </Link>
              </li>
              <li>
                <Link href="/solutions/freelancers" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Freelancers
                </Link>
              </li>
              <li>
                <Link href="/solutions/pet-services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pet Services
                </Link>
              </li>
              <li>
                <Link href="/solutions/automotive-services" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Automotive Services
                </Link>
              </li>
              <li>
                <Link href="/solutions/personal-stylists" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Personal Stylists
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            © {new Date().getFullYear()} EasyTakt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 