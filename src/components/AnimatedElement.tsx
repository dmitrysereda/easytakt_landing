'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedElement({ children, className = '', style = {} }: AnimatedElementProps) {
  const ref = useIntersectionObserver();
  
  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
} 