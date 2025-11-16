'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export default function HeroEnhanced() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!titleRef.current || !subtitleRef.current || !heroRef.current) return;

    // Split text animations
    const titleSplit = new SplitType(titleRef.current, {
      types: 'chars',
      charClass: 'split-char',
    });

    const subtitleSplit = new SplitType(subtitleRef.current, {
      types: 'lines',
      lineClass: 'split-line',
    });

    // Animate title characters
    gsap.fromTo(
      titleSplit.chars,
      {
        y: 100,
        opacity: 0,
        rotateX: -90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 1,
        ease: 'power3.out',
        stagger: 0.03,
        delay: 0.2,
      }
    );

    // Animate subtitle lines
    gsap.fromTo(
      subtitleSplit.lines,
      {
        y: 60,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.1,
        delay: 0.8,
      }
    );

    // Parallax effect on scroll
    gsap.to(heroRef.current, {
      yPercent: 30,
      ease: 'none',
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      if (titleSplit) titleSplit.revert();
      if (subtitleSplit) subtitleSplit.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 gpu-accelerated"
    >
      {/* Animated Background Gradients with Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-1/4 w-96 h-96 bg-indigo-500/30 rounded-full blur-3xl animate-parallax-slow"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5 }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-parallax-fast"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.3 }}
          transition={{ duration: 1.5, delay: 0.2 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
              className="inline-block mb-4 px-4 py-2 rounded-full glass border border-indigo-500/30"
            >
              <span className="text-sm md:text-base text-indigo-400 font-medium">
                Full-Stack Developer & Creative Designer
              </span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
              style={{ perspective: '1000px' }}
            >
              <span className="gradient-text">Your Name</span>
            </h1>

            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 overflow-hidden"
            >
              I build fast, beautiful web experiences that blend clean code with
              creative design. Transforming ideas into pixel-perfect reality.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: 1.2, ease: [0.65, 0.05, 0, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.a
                href="#projects"
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold text-white overflow-hidden hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  View My Work
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>

              <motion.a
                href="#"
                className="group px-8 py-4 border-2 border-indigo-500/50 rounded-lg font-semibold text-white hover:bg-indigo-500/10 transition-all duration-750 hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center justify-center gap-2">
                  Download CV
                  <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </span>
              </motion.a>
            </motion.div>
          </div>

          {/* Right Content - Enhanced 3D Cards */}
          <div className="hidden lg:block relative">
            <div className="relative w-full h-[500px] perspective-1000">
              {/* Floating Cards with Clip-path Reveal */}
              <motion.div
                initial={{ clipPath: 'ellipse(0% 0% at 50% 50%)', opacity: 0 }}
                animate={{ clipPath: 'ellipse(150% 150% at 50% 50%)', opacity: 1 }}
                transition={{ duration: 1, delay: 0.5, ease: [0.65, 0.05, 0, 1] }}
                className="absolute top-0 right-0 w-64 h-80 glass rounded-2xl p-6 shadow-2xl gpu-accelerated hover-lift"
                whileHover={{ rotateY: 10, rotateX: -10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">🚀</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ clipPath: 'ellipse(0% 0% at 50% 50%)', opacity: 0 }}
                animate={{ clipPath: 'ellipse(150% 150% at 50% 50%)', opacity: 1 }}
                transition={{ duration: 1, delay: 0.7, ease: [0.65, 0.05, 0, 1] }}
                className="absolute bottom-0 left-0 w-64 h-80 glass rounded-2xl p-6 shadow-2xl gpu-accelerated hover-lift"
                whileHover={{ rotateY: -10, rotateX: 10 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-6xl">💎</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, delay: 0.9, ease: [0.65, 0.05, 0, 1] }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 glass rounded-2xl p-6 shadow-2xl z-10 gpu-accelerated hover-lift"
                whileHover={{ scale: 1.05, rotateZ: 5 }}
              >
                <div className="w-full h-full bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-xl flex items-center justify-center">
                  <span className="text-7xl">⚡</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center pt-2"
        >
          <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-3 bg-indigo-500 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
