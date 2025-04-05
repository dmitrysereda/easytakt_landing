'use client';

import { useState } from 'react';
import Link from 'next/link';
import SignupButton from '../SignupButton';
import { LanguageSwitcher } from '../LanguageSwitcher';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      {/* Skip to main content link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-white focus:text-blue-600"
      >
        Skip to main content
      </a>

      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex h-20 justify-between items-center">
          <Link 
            href="/" 
            className="relative focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md group"
            aria-label="EasyTakt home"
          >
            <span className="font-semibold text-xl text-blue-600 transition-colors duration-200 group-hover:text-blue-700">
              EasyTakt
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10" role="navigation" aria-label="Desktop menu">
            <Link 
              href="/features" 
              className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            >
              Features
            </Link>
            <Link 
              href="/solutions" 
              className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            >
              Solutions
            </Link>
            <Link 
              href="/pricing" 
              className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            >
              Pricing
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
            >
              Blog
            </Link>
            <LanguageSwitcher />
            <SignupButton size="small" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
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
        <div
          id="mobile-menu"
          className={`md:hidden transition-all duration-200 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
          role="navigation"
          aria-label="Mobile menu"
        >
          <div className="py-4 border-t border-gray-100 space-y-4">
            <Link
              href="/features"
              className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="/solutions"
              className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Solutions
            </Link>
            <Link
              href="/pricing"
              className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="/blog"
              className="block text-gray-600 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
            </Link>
            <div className="p-2">
              <LanguageSwitcher />
            </div>
            <div className="p-2">
              <SignupButton className="w-full" size="small" onClick={() => setIsMenuOpen(false)} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 