'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Translation } from '@/types/translations';

type TranslationValue = string | string[] | Record<string, any>[] | Record<string, any>;

type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
  t: <T = string>(key: string, options?: { returnObjects?: boolean }) => T;
  loading: boolean;
};

const defaultTranslations: Translation = {
  common: {
    language: 'Language',
    loading: 'Loading...'
  },
  navigation: {
    solutions: 'Solutions',
    features: 'Features',
    pricing: 'Pricing',
    contact: 'Contact',
    blog: 'Blog'
  },
  hero: {
    title: 'Smart Scheduling for Your Business',
    subtitle: 'Streamline your operations, reduce no-shows, and grow your business with our powerful scheduling platform.',
    cta: 'Get Started'
  },
  features: {
    title: 'Powerful Scheduling Features for Business',
    subtitle: 'All in One Platform',
    description: 'Streamline your scheduling workflow with powerful tools that drive business growth',
    items: []
  },
  solutions: {
    title: 'Solutions for Every Business',
    subtitle: 'Discover how EasyTakt can help your specific industry',
    items: []
  },
  pricing: {
    title: 'Simple, Transparent',
    subtitle: 'Pricing for Everyone',
    description: 'No hidden fees. No long-term contracts. Just everything you need to run your business efficiently.',
    features: [],
    price: {
      amount: '15',
      period: '/month',
      description: 'Everything included. No surprises.'
    },
    cta: {
      primary: 'Try now for free',
      secondary: 'No credit card required'
    },
    benefits: {
      title: 'Your Investment, Multiplied',
      items: []
    },
    faq: {
      title: 'Frequently Asked Questions',
      items: []
    },
    finalCta: {
      title: 'Ready to Transform Your Business?',
      description: 'Join thousands of businesses already saving time and growing with EasyTakt.',
      button: 'Get Started Free'
    }
  },
  footer: {
    copyright: '© 2024 EasyTakt. All rights reserved.',
    links: []
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  setLanguage: () => {},
  t: ((key: string) => key) as LanguageContextType['t'],
  loading: false
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState('en');
  const [translations, setTranslations] = useState<Translation>(defaultTranslations);
  const [loading, setLoading] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // Handle client-side initialization
  useEffect(() => {
    setIsClient(true);
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguageState(savedLanguage);
    }
  }, []);

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('language', lang);
    }
  };

  useEffect(() => {
    const loadTranslations = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/translations/${language}.json`);
        if (!response.ok) {
          throw new Error('Failed to load translations');
        }
        const data = await response.json();
        setTranslations(data);
      } catch (error) {
        console.error('Error loading translations:', error);
        setTranslations(defaultTranslations);
      } finally {
        setLoading(false);
      }
    };

    loadTranslations();
  }, [language]);

  const t = <T = string>(key: string, options?: { returnObjects?: boolean }): T => {
    const keys = key.split('.');
    let value: any = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // If we're expecting an array but the value is missing, return an empty array
        if (options?.returnObjects) {
          return ([] as unknown) as T;
        }
        return key as unknown as T;
      }
    }
    
    if (value === undefined || value === null) {
      if (options?.returnObjects) {
        return ([] as unknown) as T;
      }
      return key as unknown as T;
    }
    
    if (options?.returnObjects && Array.isArray(value)) {
      return value as unknown as T;
    }
    
    return (value || key) as unknown as T;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 
