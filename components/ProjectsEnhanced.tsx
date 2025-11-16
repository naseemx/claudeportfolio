'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GSAPScrollReveal from './GSAPScrollReveal';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description:
      'A full-featured e-commerce platform with real-time inventory, payment processing, and advanced analytics dashboard.',
    image: '🛍️',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'AI-Powered SaaS Dashboard',
    description:
      'Modern SaaS application with AI-driven insights, real-time collaboration, and advanced data visualization.',
    image: '🤖',
    tags: ['React', 'Node.js', 'OpenAI', 'MongoDB'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Social Media Analytics',
    description:
      'Comprehensive analytics platform for social media management with automated reporting and sentiment analysis.',
    image: '📊',
    tags: ['Vue.js', 'Python', 'FastAPI', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Portfolio Management App',
    description:
      'Investment portfolio tracker with real-time market data, performance analytics, and risk assessment tools.',
    image: '💼',
    tags: ['React', 'Django', 'PostgreSQL', 'WebSocket'],
    liveUrl: '#',
    githubUrl: '#',
    gradient: 'from-green-500 to-teal-500',
  },
];

export default function ProjectsEnhanced() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Parallax effect for the entire section
    gsap.to(sectionRef.current, {
      yPercent: -10,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-parallax-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <GSAPScrollReveal animationType="fadeUp">
          <div className="text-center mb-16">
            <span className="text-indigo-400 font-semibold text-sm md:text-base uppercase tracking-wider">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              A selection of projects that showcase my expertise in building modern web
              applications
            </p>
          </div>
        </GSAPScrollReveal>

        <div className="space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={project.title}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image with Clip-path Reveal */}
                <GSAPScrollReveal
                  animationType="clip"
                  delay={index * 0.1}
                  className={`${!isEven ? 'md:order-2' : ''}`}
                >
                  <motion.div
                    className="relative group cursor-pointer"
                    onMouseEnter={() => setActiveProject(index)}
                    onMouseLeave={() => setActiveProject(null)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
                  >
                    <div className="glass rounded-2xl p-8 md:p-12 aspect-video flex items-center justify-center overflow-hidden relative hover-lift">
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                        animate={{
                          opacity: activeProject === index ? 0.4 : 0.2,
                        }}
                        transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
                      />
                      <motion.span
                        className="text-8xl md:text-9xl z-10 transition-all duration-750"
                        animate={{
                          scale: activeProject === index ? 1.2 : 1,
                          rotateZ: activeProject === index ? 5 : 0,
                        }}
                        transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
                      >
                        {project.image}
                      </motion.span>

                      {/* Hover overlay */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                          opacity: activeProject === index ? 1 : 0,
                        }}
                        transition={{ duration: 0.75, ease: [0.65, 0.05, 0, 1] }}
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center gap-4"
                      >
                        <motion.a
                          href={project.liveUrl}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: activeProject === index ? 0 : 20,
                            opacity: activeProject === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold flex items-center gap-2 hover:bg-indigo-500 hover:text-white transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                          View Live
                        </motion.a>
                        <motion.a
                          href={project.githubUrl}
                          initial={{ y: 20, opacity: 0 }}
                          animate={{
                            y: activeProject === index ? 0 : 20,
                            opacity: activeProject === index ? 1 : 0,
                          }}
                          transition={{ duration: 0.5, delay: 0.2 }}
                          className="px-6 py-3 border-2 border-white text-white rounded-lg font-semibold flex items-center gap-2 hover:bg-white hover:text-gray-900 transition-all"
                        >
                          <Github className="w-4 h-4" />
                          Code
                        </motion.a>
                      </motion.div>
                    </div>
                  </motion.div>
                </GSAPScrollReveal>

                {/* Project Info */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <GSAPScrollReveal
                    animationType={isEven ? 'fadeLeft' : 'fadeRight'}
                    delay={index * 0.1 + 0.2}
                  >
                    <h3 className="text-3xl md:text-4xl font-display font-bold mb-4 text-white">
                      {project.title}
                    </h3>
                  </GSAPScrollReveal>

                  <GSAPScrollReveal
                    animationType={isEven ? 'fadeLeft' : 'fadeRight'}
                    delay={index * 0.1 + 0.3}
                  >
                    <div className="glass rounded-xl p-6 mb-6">
                      <p className="text-gray-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </GSAPScrollReveal>

                  <GSAPScrollReveal
                    animationType={isEven ? 'fadeLeft' : 'fadeRight'}
                    delay={index * 0.1 + 0.4}
                  >
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm font-medium text-indigo-300 hover:bg-indigo-500/30 hover:scale-105 transition-all duration-750 cursor-pointer"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </GSAPScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
