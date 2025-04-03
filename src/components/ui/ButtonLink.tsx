'use client';

import { AnchorHTMLAttributes } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  variant?: 'primary' | 'secondary' | 'white' | 'ghost';
  size?: 'small' | 'medium' | 'large' | 'icon';
  fullWidth?: boolean;
  external?: boolean;
}

export default function ButtonLink({
  href,
  className,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  external = false,
  children,
  ...props
}: ButtonLinkProps) {
  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-xl";
  
  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200",
    white: "bg-white text-gray-900 hover:bg-gray-50 shadow-lg hover:shadow-xl transform hover:-translate-y-1",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100"
  };

  const sizes = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
    icon: "p-2"
  };

  const linkProps = {
    className: cn(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    ),
    ...props
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      {...linkProps}
    >
      {children}
    </Link>
  );
} 