'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';

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

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            A selection of projects that showcase my expertise in building modern web
            applications
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  !isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Project Image */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`${!isEven ? 'md:order-2' : ''}`}
                >
                  <div className="glass rounded-2xl p-8 md:p-12 aspect-video flex items-center justify-center group cursor-pointer overflow-hidden relative">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20`}
                      whileHover={{ opacity: 0.3 }}
                      transition={{ duration: 0.3 }}
                    />
                    <span className="text-8xl md:text-9xl z-10 group-hover:scale-110 transition-transform duration-300">
                      {project.image}
                    </span>
                  </div>
                </motion.div>

                {/* Project Info */}
                <div className={`${!isEven ? 'md:order-1' : ''}`}>
                  <motion.h3
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.2 }}
                    className="text-3xl md:text-4xl font-display font-bold mb-4 text-white"
                  >
                    {project.title}
                  </motion.h3>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                    className="glass rounded-xl p-6 mb-6"
                  >
                    <p className="text-gray-300 leading-relaxed">
                      {project.description}
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
                    className="flex flex-wrap gap-2 mb-6"
                  >
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 rounded-full text-sm font-medium text-indigo-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                    className="flex gap-4"
                  >
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
                    >
                      <ExternalLink className="w-4 h-4" />
                      View Live
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-6 py-3 border-2 border-indigo-500/50 rounded-lg font-semibold text-white hover:bg-indigo-500/10 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View Code
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
