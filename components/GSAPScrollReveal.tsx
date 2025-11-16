'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface GSAPScrollRevealProps {
  children: React.ReactNode;
  animationType?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale' | 'clip';
  delay?: number;
  duration?: number;
  className?: string;
}

export default function GSAPScrollReveal({
  children,
  animationType = 'fadeUp',
  delay = 0,
  duration = 0.75,
  className = '',
}: GSAPScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!elementRef.current) return;

    const element = elementRef.current;

    let animationConfig: gsap.TweenVars = {};

    switch (animationType) {
      case 'fadeUp':
        animationConfig = {
          y: 60,
          opacity: 0,
        };
        break;
      case 'fadeLeft':
        animationConfig = {
          x: -60,
          opacity: 0,
        };
        break;
      case 'fadeRight':
        animationConfig = {
          x: 60,
          opacity: 0,
        };
        break;
      case 'scale':
        animationConfig = {
          scale: 0.85,
          opacity: 0,
        };
        break;
      case 'clip':
        animationConfig = {
          clipPath: 'ellipse(0% 0% at 50% 50%)',
          opacity: 0,
        };
        break;
    }

    gsap.set(element, animationConfig);

    const animation = gsap.to(element, {
      ...Object.keys(animationConfig).reduce((acc, key) => {
        if (key === 'opacity') {
          acc[key] = 1;
        } else if (key === 'clipPath') {
          acc[key] = 'ellipse(150% 150% at 50% 50%)';
        } else {
          acc[key] = 0;
        }
        return acc;
      }, {} as any),
      y: animationType === 'fadeUp' ? 0 : undefined,
      x: animationType === 'fadeLeft' || animationType === 'fadeRight' ? 0 : undefined,
      scale: animationType === 'scale' ? 1 : undefined,
      opacity: 1,
      duration,
      delay,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [animationType, delay, duration]);

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  );
}
