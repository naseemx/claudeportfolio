# Cinematic Portfolio Website

A stunning, single-page portfolio website for a full-stack developer and creative designer, inspired by the visual language and motion design of [landonorris.com](https://landonorris.com).

## 🎨 Features

### Visual Design
- **Dark Theme**: Deep charcoal/black background with electric neon accent colors
- **Cinematic Feel**: Full-bleed visuals, immersive sections, and bold typography
- **Premium Aesthetics**: High contrast, clean spacing, and minimal clutter
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### Animations & Motion
- **Lenis Smooth Scroll**: Ultra-smooth, buttery scrolling experience
- **GSAP Animations**: Advanced timeline-based animations
- **ScrollTrigger**: Scroll-linked reveals and parallax effects
- **Split-Text Effects**: Sequential letter/word reveals on headings
- **Clip-Path Reveals**: Cinematic image and section reveals
- **Parallax Scrolling**: Depth-based movement on backgrounds and images
- **Marquee Animations**: Infinite-loop text strips for skills and design categories
- **Filter Effects**: Blur, grayscale, and saturation shifts on hover
- **Sticky Scroll**: Content pinning while scrolling through sections

### Sections

1. **Hero Section**: Large split headings, layered visual composition, CTAs
2. **ON CODE**: Development projects with tech stacks and live links
3. **ON DESIGN**: Design portfolio gallery with marquee strip
4. **Project Hall of Fame**: Highlighted case studies with results
5. **About/Story**: Timeline of milestones and achievements
6. **Skills & Stack**: Tech marquee and categorized skill cards
7. **Process Section**: 5-step workflow with sticky scroll activation
8. **Testimonials**: Client feedback cards
9. **Contact**: Animated form with social links

## 🚀 Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Custom properties, Grid, Flexbox, animations
- **JavaScript (ES6+)**: Modern syntax and APIs

### Libraries & Frameworks
- **[Lenis](https://github.com/studio-freight/lenis)**: Smooth scroll library (v1.0.29)
- **[GSAP](https://greensock.com/gsap/)**: Animation library (v3.12.5)
- **[ScrollTrigger](https://greensock.com/scrolltrigger/)**: Scroll-based animations (v3.12.5)

### Fonts
- **Space Grotesk**: Display headings
- **Inter**: Body text and UI elements

## 📁 Project Structure

```
claudeportfolio/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styles and animations
├── js/
│   └── main.js         # JavaScript animations and interactions
├── assets/             # Images and media (placeholder structure)
└── README.md           # Project documentation
```

## 🎯 Key Animation Features

### Hero Section
- Split-text animation on name and title
- Layered clip-path reveals on visual elements
- Mouse parallax on hover (desktop)
- Scroll-based parallax on layers

### Project Cards
- Entrance animations with stagger
- Clip-path image reveals
- Hover scale and brightness effects
- Content element stagger

### Design Gallery
- Filter effects (grayscale/blur) on scroll
- Hover state with full color and overlay
- Grid layout with responsive columns

### Process Section
- Sticky scroll behavior
- Sequential step activation
- Active state highlighting
- Number emphasis on active step

### Contact Form
- Focus animations on inputs
- Floating label transitions
- Submit button hover effects
- Form submission feedback

## 🎨 Customization

### Colors
Edit the CSS custom properties in `css/styles.css`:

```css
:root {
    --color-bg: #0a0a0a;                 /* Background color */
    --color-accent: #c0ff00;             /* Primary accent (neon green) */
    --color-text: #e8e8e8;               /* Text color */
    --color-text-secondary: #a0a0a0;     /* Secondary text */
}
```

### Content
Update the following in `index.html`:
- Name and bio in hero section
- Project details in ON CODE and ON DESIGN sections
- Case studies in Hall of Fame
- Story milestones in About section
- Skills and tech stack
- Process steps
- Testimonials
- Contact information and social links

### Animations
Adjust animation parameters in `js/main.js`:
- Duration and easing in GSAP timelines
- ScrollTrigger start/end positions
- Stagger delays
- Parallax intensity

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Responsive Breakpoints

- **Desktop**: 1025px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 767px and below
- **Small Mobile**: 480px and below

## ⚡ Performance Optimizations

- Lazy loading for images
- Reduced motion support for accessibility
- Optimized animations with GSAP ticker
- Efficient ScrollTrigger management
- Mobile-specific animation adjustments

## 🎭 Motion Design Principles

Inspired by landonorris.com, this portfolio implements:

1. **Cinematic Timing**: Slow, deliberate animations that feel premium
2. **Layered Depth**: Parallax and z-index to create spatial hierarchy
3. **Split Reveals**: Breaking text and images into animated pieces
4. **Scroll Choreography**: Carefully timed sequences as user scrolls
5. **Filter Transitions**: Subtle blur/grayscale for focus management
6. **Smooth Easing**: Custom cubic-bezier curves for natural motion

## 🔧 Setup & Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd claudeportfolio
   ```

2. **Open in browser**
   - Simply open `index.html` in a modern browser
   - Or use a local server (recommended):
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

3. **Access the site**
   - Navigate to `http://localhost:8000`

## 📝 Customization Guide

### Adding a New Project

1. Copy an existing `.project-card` in the HTML
2. Update the content (title, description, tags, links)
3. Change the gradient background color
4. Animations will apply automatically

### Changing Accent Color

Replace all instances of `#c0ff00` with your desired color:
- In `css/styles.css` (--color-accent variable)
- Adjust complementary colors as needed

### Adding Real Images

1. Add images to `assets/` folder
2. Replace gradient backgrounds with:
   ```html
   <div class="project-image" style="background-image: url('assets/project.jpg');"></div>
   ```
3. Add `background-size: cover; background-position: center;` in CSS

## 🎨 Design Philosophy

This portfolio embodies:
- **Minimalism**: Only essential elements, maximum impact
- **Motion**: Purposeful animations that guide attention
- **Typography**: Bold, readable, hierarchy-driven
- **Contrast**: High contrast for premium feel
- **Rhythm**: Consistent spacing and timing

## 📄 License

This project is open source and available for personal and commercial use.

## 🙏 Acknowledgments

- Visual inspiration from [Lando Norris Official Website](https://landonorris.com)
- Animation techniques from GSAP and Studio Freight
- Typography using Google Fonts

## 📧 Contact

For questions or feedback about this portfolio template:
- Email: hello@naseemshan.com
- GitHub: [Your GitHub Profile]
- LinkedIn: [Your LinkedIn Profile]

---

**Built with passion for motion design and web experiences** ✨
