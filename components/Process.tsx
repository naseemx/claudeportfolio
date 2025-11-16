'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Search, Pencil, Code2, Rocket } from 'lucide-react';

const processSteps = [
  {
    number: '01',
    icon: Search,
    title: 'Discover',
    description:
      'Understanding your goals, target audience, and project requirements through in-depth research and analysis.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    number: '02',
    icon: Pencil,
    title: 'Design',
    description:
      'Creating wireframes, mockups, and interactive prototypes that bring your vision to life with pixel-perfect precision.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    number: '03',
    icon: Code2,
    title: 'Develop',
    description:
      'Building robust, scalable applications using cutting-edge technologies and best practices for optimal performance.',
    color: 'from-orange-500 to-red-500',
  },
  {
    number: '04',
    icon: Rocket,
    title: 'Deploy',
    description:
      'Launching your project with thorough testing, optimization, and ongoing support to ensure success.',
    color: 'from-green-500 to-teal-500',
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
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
            My Process
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            How I <span className="gradient-text">Work</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            A proven methodology for delivering exceptional results
          </p>
        </motion.div>

        {/* Desktop: Horizontal Flow */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
          {/* Connecting Lines */}
          <div className="absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500 opacity-30" />

          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.05 }}
                className="glass rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group cursor-pointer"
              >
                {/* Step Number */}
                <div className="text-6xl font-display font-bold text-white/10 mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:shadow-xl`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold mb-3 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors">
                  {step.description}
                </p>

                {/* Progress Bar */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`h-1 bg-gradient-to-r ${step.color} rounded-full mt-4`}
                />
              </motion.div>

              {/* Connecting Dot */}
              <div className={`absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gradient-to-r ${step.color} rounded-full z-10 shadow-lg`} />
            </motion.div>
          ))}
        </div>

        {/* Mobile: Vertical Flow */}
        <div className="md:hidden space-y-6">
          {processSteps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass rounded-2xl p-6"
            >
              <div className="flex items-start gap-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}
                >
                  <step.icon className="w-7 h-7 text-white" />
                </motion.div>

                <div className="flex-1">
                  <div className="text-3xl font-display font-bold text-white/10 mb-2">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2 text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
