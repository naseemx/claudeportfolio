'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Target, Lightbulb, TrendingUp } from 'lucide-react';

const stats = [
  { value: '+40%', label: 'Faster Load Time' },
  { value: '100%', label: 'SEO Optimized' },
  { value: '5★', label: 'Client Rating' },
];

const steps = [
  {
    icon: Target,
    title: 'Problem',
    description:
      'The client needed a high-performance e-commerce platform that could handle thousands of concurrent users while maintaining fast page loads and seamless checkout experience.',
  },
  {
    icon: Lightbulb,
    title: 'Solution',
    description:
      'Implemented a modern tech stack with Next.js for SSR, optimized images with CDN, implemented caching strategies, and streamlined the checkout process with real-time validation.',
  },
  {
    icon: TrendingUp,
    title: 'Result',
    description:
      'Achieved 40% faster page loads, 99.9% uptime, increased conversion rate by 25%, and received outstanding client feedback with continued partnership.',
  },
];

export default function CaseStudy() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-gradient-to-b from-transparent via-indigo-950/20 to-transparent">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-indigo-400 font-semibold text-sm md:text-base uppercase tracking-wider">
            Case Study
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Project <span className="gradient-text">Spotlight</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            A deep dive into one of my most impactful projects
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-3 gap-4 md:gap-8 mb-16 max-w-4xl mx-auto"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div className="text-3xl md:text-5xl font-display font-bold gradient-text mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-gray-400">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Steps */}
        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
              className="relative"
            >
              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-indigo-500/50 to-purple-500/50 z-0" />
              )}

              <div className="glass rounded-2xl p-8 h-full hover:bg-white/10 transition-all duration-300 relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mb-6 shadow-lg"
                >
                  <step.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white">
                  {step.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Project Image Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.4 }}
          className="mt-16"
        >
          <div className="glass rounded-2xl p-8 md:p-12 aspect-video flex items-center justify-center overflow-hidden relative group cursor-pointer">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20"
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />
            <span className="text-9xl z-10 group-hover:scale-110 transition-transform duration-300">
              🚀
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
