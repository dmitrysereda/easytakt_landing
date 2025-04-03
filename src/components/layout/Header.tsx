'use client';

import { useState } from 'react';
import Link from 'next/link';
import SignupButton from '../SignupButton';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 justify-between items-center">
          <Link 
            href="/" 
            className="relative"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <motion.div
              animate={{
                color: isLogoHovered ? "#1d4ed8" : "#2563eb",
              }}
              transition={{ duration: 0.2 }}
              className="font-semibold text-xl"
            >
              EasyTakt
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/features" className="text-gray-600 hover:text-blue-600 transition-colors">
              Features
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-blue-600 transition-colors">
              Solutions
            </Link>
            <Link href="/pricing" className="text-gray-600 hover:text-blue-600 transition-colors">
              Pricing
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition-colors">
              Blog
            </Link>
            <SignupButton size="small" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/features"
                className="text-gray-600 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="/solutions"
                className="text-gray-600 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Solutions
              </Link>
              <Link
                href="/pricing"
                className="text-gray-600 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                href="/blog"
                className="text-gray-600 hover:text-blue-600 transition-colors px-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <div className="px-2">
                <SignupButton className="w-full" size="small" onClick={() => setIsMenuOpen(false)} />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 