'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend',
    icon: '⚛️',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'Tailwind CSS',
      'Framer Motion',
      'Vue.js',
      'HTML5/CSS3',
      'JavaScript ES6+',
    ],
  },
  {
    title: 'Backend',
    icon: '⚙️',
    skills: [
      'Node.js',
      'Express',
      'Python',
      'Django',
      'PostgreSQL',
      'MongoDB',
      'GraphQL',
      'REST APIs',
    ],
  },
  {
    title: 'Tools & Design',
    icon: '🎨',
    skills: [
      'Figma',
      'Adobe XD',
      'Git',
      'Docker',
      'AWS',
      'Vercel',
      'Photoshop',
      'Illustrator',
    ],
  },
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            Skills & Expertise
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable, and beautiful web
            applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-display font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full text-sm font-medium text-gray-200 hover:border-indigo-400 hover:text-white transition-all duration-300 cursor-pointer group"
                  >
                    <span className="relative z-10">{skill}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Proficiency Bars */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 glass rounded-2xl p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-8 text-center">
            Core Competencies
          </h3>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              { name: 'Frontend Development', level: 95 },
              { name: 'Backend Development', level: 90 },
              { name: 'UI/UX Design', level: 85 },
              { name: 'Performance Optimization', level: 88 },
            ].map((competency, index) => (
              <div key={competency.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-semibold">
                    {competency.name}
                  </span>
                  <span className="text-indigo-400 font-semibold">
                    {competency.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${competency.level}%` } : {}}
                    transition={{ duration: 1, delay: 1 + index * 0.1 }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{
                        x: ['-100%', '100%'],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: 'linear',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
