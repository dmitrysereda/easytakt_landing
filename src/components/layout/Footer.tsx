'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface FooterLink {
  href: string;
  label: string;
}

const Footer = () => {
  const { t, loading } = useLanguage();

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="text-gray-600">{t('common.loading')}</div>
      </div>
    );
  }

  return (
    <footer className="bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="text-blue-600 font-semibold text-lg mb-4">EasyTakt</h3>
            <p className="text-gray-600">
              {t('footer.brand.description')}
            </p>
          </div>

          {/* Solutions */}
          <div className="col-span-1 md:col-span-4">
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.sections.solutions.title')}</h3>
            <ul className="space-y-4">
              {(t('footer.sections.solutions.links', { returnObjects: true }) as FooterLink[]).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.sections.quick_links.title')}</h3>
            <ul className="space-y-3">
              {(t('footer.sections.quick_links.links', { returnObjects: true }) as FooterLink[]).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-4">{t('footer.sections.legal.title')}</h3>
            <ul className="space-y-3">
              {(t('footer.sections.legal.links', { returnObjects: true }) as FooterLink[]).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-600 hover:text-blue-600 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-100 text-center">
          <p className="text-gray-600">
            {t('footer.copyright', { year: new Date().getFullYear(), returnObjects: false })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 