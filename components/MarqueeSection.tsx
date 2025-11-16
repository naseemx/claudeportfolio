'use client';

import Marquee from './Marquee';

const skills = [
  '⚛️ React',
  '🚀 Next.js',
  '💎 TypeScript',
  '🎨 Tailwind CSS',
  '⚡ Node.js',
  '🔷 PostgreSQL',
  '🎭 Framer Motion',
  '🔮 GSAP',
  '📱 Responsive Design',
  '🎯 Performance',
];

export default function MarqueeSection() {
  return (
    <div className="py-12 border-y border-white/10 bg-white/5 overflow-hidden">
      <Marquee speed={30} className="py-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-6 mx-4 text-2xl md:text-3xl font-display font-bold text-gray-400 hover:text-white transition-colors duration-750"
            style={{
              textShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
            }}
          >
            {skill}
          </span>
        ))}
      </Marquee>
      <Marquee speed={25} reverse className="py-4">
        {[...skills].reverse().map((skill, index) => (
          <span
            key={index}
            className="inline-flex items-center px-6 mx-4 text-2xl md:text-3xl font-display font-bold text-gray-400 hover:text-white transition-colors duration-750"
            style={{
              textShadow: '0 0 20px rgba(168, 85, 247, 0.3)',
            }}
          >
            {skill}
          </span>
        ))}
      </Marquee>
    </div>
  );
}
