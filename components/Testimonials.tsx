'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      'Working with this developer was an absolute pleasure. The attention to detail and commitment to delivering a high-quality product was exceptional. Our website exceeded all expectations!',
    author: 'Sarah Johnson',
    role: 'CEO, TechStartup Inc.',
    avatar: '👩‍💼',
  },
  {
    quote:
      'The combination of technical expertise and creative design skills is rare. Our e-commerce platform not only looks stunning but performs flawlessly. Highly recommended!',
    author: 'Michael Chen',
    role: 'Founder, ShopFlow',
    avatar: '👨‍💻',
  },
  {
    quote:
      'From initial concept to final deployment, the process was smooth and professional. The result was a beautiful, fast, and user-friendly application that our customers love.',
    author: 'Emily Rodriguez',
    role: 'Product Manager, InnovateCo',
    avatar: '👩‍🎨',
  },
];

export default function Testimonials() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
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
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mt-4 mb-6">
            Client <span className="gradient-text">Feedback</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: index * 0.5,
                }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <Quote className="w-6 h-6 text-white" />
              </motion.div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-500/30 to-purple-500/30 rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: index * 0.2 + i * 0.1 }}
                    className="text-yellow-400 text-xl"
                  >
                    ★
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
