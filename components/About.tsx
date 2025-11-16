'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Palette, Rocket, Award } from 'lucide-react';

const stats = [
  { icon: Code2, label: 'Years Experience', value: '5+' },
  { icon: Rocket, label: 'Projects Completed', value: '50+' },
  { icon: Award, label: 'Happy Clients', value: '30+' },
  { icon: Palette, label: 'Design Awards', value: '10+' },
];

const highlights = [
  {
    title: 'Full-Stack Development',
    description: 'Building scalable web applications with modern frameworks and best practices.',
  },
  {
    title: 'UI/UX Design',
    description: 'Creating intuitive, beautiful interfaces that users love to interact with.',
  },
  {
    title: 'Performance Optimization',
    description: 'Ensuring lightning-fast load times and smooth user experiences.',
  },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <span className="text-indigo-400 font-semibold text-sm md:text-base uppercase tracking-wider">
              About Me
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
              Crafting Digital{' '}
              <span className="gradient-text">Experiences</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
              I'm a passionate full-stack developer and creative designer with a focus on
              building exceptional digital experiences. I specialize in creating web
              applications that are not only functional but also beautiful and intuitive.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="glass rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <stat.icon className="w-8 h-8 md:w-10 md:h-10 mx-auto mb-4 text-indigo-400 group-hover:text-purple-400 transition-colors" />
                <div className="text-3xl md:text-4xl font-display font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                variants={itemVariants}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ y: -10 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="text-xl md:text-2xl font-display font-bold mb-3 text-white">
                  {highlight.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {highlight.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div
            variants={itemVariants}
            className="mt-16 glass rounded-2xl p-8 md:p-12"
          >
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
              My Journey
            </h3>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-indigo-500 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-indigo-400 font-semibold mb-1">
                    2019 - Present
                  </div>
                  <div className="text-white font-semibold mb-1">
                    Senior Full-Stack Developer
                  </div>
                  <div className="text-gray-400">
                    Leading development teams and architecting scalable solutions
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-3 h-3 bg-purple-500 rounded-full mt-1.5 flex-shrink-0" />
                <div>
                  <div className="text-purple-400 font-semibold mb-1">
                    2017 - 2019
                  </div>
                  <div className="text-white font-semibold mb-1">
                    UI/UX Designer & Frontend Developer
                  </div>
                  <div className="text-gray-400">
                    Crafting beautiful interfaces and seamless user experiences
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
