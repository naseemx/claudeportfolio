'use client';

import { useEffect, useRef } from 'react';

interface MarqueeProps {
  children: React.ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}

export default function Marquee({
  children,
  speed = 50,
  reverse = false,
  className = '',
}: MarqueeProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`marquee-container ${className}`}>
      <div
        ref={marqueeRef}
        className={`marquee-content ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
      >
        {children}
      </div>
      <div
        className={`marquee-content ${
          reverse ? 'animate-marquee-reverse' : 'animate-marquee'
        }`}
        style={{
          animationDuration: `${speed}s`,
        }}
        aria-hidden="true"
      >
        {children}
      </div>
    </div>
  );
}
