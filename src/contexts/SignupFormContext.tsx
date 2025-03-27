'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import SignupForm from '@/components/SignupForm';

interface SignupFormContextType {
  openSignupForm: () => void;
  closeSignupForm: () => void;
}

const SignupFormContext = createContext<SignupFormContextType | undefined>(undefined);

export function SignupFormProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const openSignupForm = () => setIsOpen(true);
  const closeSignupForm = () => setIsOpen(false);

  return (
    <SignupFormContext.Provider value={{ openSignupForm, closeSignupForm }}>
      {children}
      <SignupForm isOpen={isOpen} onClose={closeSignupForm} />
    </SignupFormContext.Provider>
  );
}

export function useSignupForm() {
  const context = useContext(SignupFormContext);
  if (context === undefined) {
    throw new Error('useSignupForm must be used within a SignupFormProvider');
  }
  return context;
} 