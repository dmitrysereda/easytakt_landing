'use client';

import { useSignupForm } from '@/contexts/SignupFormContext';
import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

interface SignupButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'white';
  size?: 'default' | 'large' | 'small';
}

export default function SignupButton({ 
  className, 
  variant = 'primary',
  size = 'default',
  ...props 
}: SignupButtonProps) {
  const { openSignupForm } = useSignupForm();

  return (
    <button
      onClick={openSignupForm}
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 rounded-xl",
        variant === 'primary' ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-white text-gray-900 hover:bg-gray-50",
        size === 'small' ? "px-5 py-2.5 text-sm" : 
        size === 'large' ? "px-8 py-4 text-lg" : 
        "px-7 py-3.5 text-base",
        className
      )}
      {...props}
    >
      Sign up for early access
    </button>
  );
} 