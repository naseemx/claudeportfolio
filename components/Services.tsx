'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Palette, Smartphone, Zap } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Web Application Development',
    description:
      'Building scalable, high-performance web applications using modern frameworks like React, Next.js, and Node.js. From concept to deployment.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Palette,
    title: 'Responsive UI/UX Design',
    description:
      'Creating beautiful, intuitive interfaces that provide exceptional user experiences across all devices. Pixel-perfect designs that convert.',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    icon: Smartphone,
    title: 'Branding & Visual Identity',
    description:
      'Developing cohesive brand identities that resonate with your audience. From logos to complete design systems.',
    gradient: 'from-orange-500 to-red-500',
  },
  {
    icon: Zap,
    title: 'API Integration & Backend',
    description:
      'Designing and implementing robust backend systems, RESTful APIs, and third-party integrations that power your applications.',
    gradient: 'from-green-500 to-teal-500',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl" />
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
            What I Do
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Comprehensive solutions tailored to bring your digital vision to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                rotateX: 5,
                rotateY: 5,
              }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group cursor-pointer perspective-1000"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl`}
              >
                <service.icon className="w-8 h-8 text-white" />
              </motion.div>

              <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-400 group-hover:to-purple-400 transition-all">
                {service.title}
              </h3>

              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                {service.description}
              </p>

              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className={`h-1 bg-gradient-to-r ${service.gradient} rounded-full mt-6`}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 md:p-12 inline-block">
            <h3 className="text-2xl md:text-3xl font-display font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Let's collaborate to create something amazing together. I'm always
              excited to work on new and challenging projects.
            </p>
            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
