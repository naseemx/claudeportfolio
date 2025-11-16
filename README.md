# Premium Portfolio Website

A world-class, single-page portfolio website for a full-stack web developer and creative designer. Built with Next.js, TypeScript, Tailwind CSS, and powered by advanced animation libraries including GSAP, Lenis smooth scroll, and Framer Motion.

**Inspired by premium websites like [landonorris.com](https://landonorris.com/)** with sophisticated scroll animations and cutting-edge visual effects.

## ✨ Advanced Features

### 🎬 Professional-Grade Animations
- **Lenis Smooth Scroll**: Buttery-smooth scrolling experience with physics-based easing
- **GSAP ScrollTrigger**: Advanced scroll-triggered animations and parallax effects
- **Split-Text Animations**: Character-by-character and line-by-line text reveals
- **Clip-Path Reveals**: Sophisticated elliptical mask reveals on scroll
- **Parallax Effects**: Multi-layer depth and movement on scroll
- **Marquee Animations**: Infinite horizontal scrolling text sections
- **3D Transforms**: Hardware-accelerated 3D card animations
- **Blur & Filter Effects**: Dynamic blur-in and filter transitions

### 🎨 Design Excellence
- **Modern Design**: Clean, Apple/F1-inspired aesthetic with dark theme
- **Glassmorphism Effects**: Beautiful frosted glass UI elements
- **Gradient Animations**: Dynamic gradient backgrounds with parallax movement
- **Custom Easing**: Cubic bezier curves matching premium sites (`cubic-bezier(0.65, 0.05, 0, 1)`)
- **Hover States**: Advanced hover effects with scale, lift, and shadow transformations
- **Dark/Light Mode**: Theme toggle in the navbar
- **Fully Responsive**: Optimized for mobile, tablet, and desktop

### ⚡ Performance Optimized
- **GPU Acceleration**: Hardware-accelerated transforms for 60fps animations
- **Will-Change Optimization**: Proper use of will-change for smooth performance
- **Backface Visibility**: Hidden backfaces for 3D transforms
- **Code Splitting**: Next.js automatic code splitting
- **First Load**: Only 186 KB for the entire application

## 📑 Sections

1. **Hero Enhanced** - Split-text animations, 3D floating cards with clip-path reveals
2. **Marquee** - Infinite scrolling skills showcase (bidirectional)
3. **About** - Professional background with staggered animations
4. **Skills** - Interactive tech stack with animated proficiency bars
5. **Marquee** - Secondary animated section divider
6. **Services** - Glassmorphism cards with 3D tilt effects
7. **Projects Enhanced** - Clip-path reveals, parallax scrolling, advanced hover states
8. **Case Study** - In-depth project highlight with animated flow
9. **Process** - Step-by-step workflow with connected animations
10. **Testimonials** - Client feedback with floating animations
11. **Contact** - Interactive form with glow effects
12. **Footer** - Quick links and social connections

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom animations
- **Animations**:
  - **GSAP 3.12+** - Advanced scroll animations and timeline control
  - **Lenis Smooth Scroll** - Physics-based smooth scrolling
  - **Framer Motion 11+** - React animation library
  - **Split-Type** - Text splitting for character animations
- **Icons**: Lucide React
- **Fonts**: Inter, Space Grotesk (Google Fonts)

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

- `components/HeroEnhanced.tsx` - Your name, tagline, and intro text
- `components/About.tsx` - Your experience, stats, and background
- `components/Skills.tsx` - Your tech stack and proficiencies
- `components/MarqueeSection.tsx` - Skills shown in scrolling marquee
- `components/ProjectsEnhanced.tsx` - Your projects with images and details
- `components/Contact.tsx` - Your email and social links
- `app/layout.tsx` - Metadata and SEO information

### Styling & Animations

- **Colors**: Edit `tailwind.config.ts` - modify gradient colors and accents
- **Fonts**: Update in `app/globals.css` - change font imports
- **Animation Timing**: Adjust in `tailwind.config.ts` - modify keyframes and durations
- **Easing Curves**: Customize cubic-bezier values for different feels
- **GSAP Animations**: Modify ScrollTrigger settings in enhanced components
- **Lenis Config**: Adjust smooth scroll settings in `components/SmoothScroll.tsx`

### Animation Utilities

The site includes several reusable animation components:

- **`GSAPScrollReveal`** - Wrap any element for scroll-triggered reveals
  - Supports: fadeUp, fadeLeft, fadeRight, scale, clip animations
- **`Marquee`** - Create infinite scrolling text sections
  - Props: speed, reverse, className
- **`SmoothScroll`** - Global smooth scroll provider (already in layout)

Example usage:
```tsx
<GSAPScrollReveal animationType="fadeUp" delay={0.2}>
  <YourComponent />
</GSAPScrollReveal>
```

## 🚀 Performance

- **60fps Animations**: GPU-accelerated transforms with proper will-change usage
- **Optimized Scroll**: Lenis smooth scroll with requestAnimationFrame
- **Code Splitting**: Next.js automatic code splitting
- **Bundle Size**: 186 KB first load (including all animation libraries)
- **Lazy Loading**: Components load only when needed
- **Image Optimization**: Next.js Image component ready to use

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Your Name. All rights reserved.

## Credits

Designed and developed by Your Name
