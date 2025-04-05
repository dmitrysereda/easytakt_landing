'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type TranslationValue = string | string[] | Record<string, any>[] | Record<string, any>;
type TranslationParams = {
  returnObjects?: boolean;
  replace?: Record<string, string | number>;
};

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: <T = string>(key: string, params?: TranslationParams) => T;
  loading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState('en');
  const [translations, setTranslations] = useState<Record<string, any>>({});
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
        setTranslations({});
      } finally {
        setLoading(false);
      }
    };

    if (isClient) {
      loadTranslations();
    }
  }, [language, isClient]);

  const t = useCallback(<T = string>(key: string, params?: TranslationParams): T => {
    const keys = key.split('.');
    let value: any = translations;
    
    // Navigate through the translation object using the key path
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k];
      } else {
        // If we're expecting an array but the value is missing, return an empty array
        if (params?.returnObjects) {
          return ([] as unknown) as T;
        }
        return key as unknown as T;
      }
    }
    
    if (value === undefined || value === null) {
      if (params?.returnObjects) {
        return ([] as unknown) as T;
      }
      return key as unknown as T;
    }

    // If returnObjects is true, return the value as is
    if (params?.returnObjects) {
      return value as unknown as T;
    }
    
    // Handle string translations with parameter replacement
    if (typeof value === 'string' && params?.replace) {
      Object.entries(params.replace).forEach(([paramKey, paramValue]) => {
        value = value.replace(`{{${paramKey}}}`, String(paramValue));
      });
    }
    
    return (value || key) as unknown as T;
  }, [translations]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, loading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
} 