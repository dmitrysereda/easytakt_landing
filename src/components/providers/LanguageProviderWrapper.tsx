'use client';

import { LanguageProvider } from '@/contexts/LanguageContext';

export const LanguageProviderWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <LanguageProvider>{children}</LanguageProvider>;
}; 