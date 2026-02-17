# MVP - Minimum Viable Product

Everything below is in scope for the initial build. If it's not listed here, don't build it.

## Tech Stack
- Vite + React
- Tailwind CSS v4
- React Icons
- Framer Motion (subtle entrance animations only)
- React Scroll (smooth section navigation)

## Sections (in order, all on one page)

### 1. Navbar
- [x] Sticky at top
- [x] Name/logo on left
- [x] Nav links: About, Resume, Projects, Skills, Contact
- [x] GitHub + LinkedIn icon links on right
- [x] Smooth scroll to sections on click
- [x] Background becomes opaque on scroll
- [x] Hamburger menu on mobile

### 2. Hero
- [x] Large name: "Braden Stevens"
- [x] Title: "Full Stack Development Engineer"
- [x] Short tagline
- [x] CTA buttons: "View My Work" → projects, "Get In Touch" → contact
- [x] Subtle gradient background

### 3. About Me
- [x] Professional summary
- [x] What I'm looking for / what drives me
- [x] Fun facts / hobbies section (cards or icon+text items)
- [x] Optional photo placeholder

### 4. Resume
- [x] Web-formatted resume content (from PDF data)
- [x] Experience section (timeline or cards)
- [x] Education section
- [x] "Download PDF" button
- [ ] Resume PDF file in assets (user will provide)

### 5. Projects
- [x] 3-4 project cards in responsive grid
- [x] Each card: image, title, description, tech tags, links (GitHub/live)
- [x] Hover effects
- [ ] Project screenshots (user will provide)
- [ ] Real project data (user will provide)

### 6. Skills
- [x] Icon grid with labels
- [x] Grouped by category (Frontend, Backend, Tools/DevOps)
- [x] Uses react-icons brand icons

### 7. Contact
- [x] "Get In Touch" heading + brief message
- [x] Prominent LinkedIn button/link

### 8. Footer
- [x] Copyright notice
- [x] Social links (GitHub, LinkedIn)

## Cross-Cutting Requirements
- [x] Fully responsive (mobile, tablet, desktop)
- [x] Dark + blue theme throughout
- [x] Smooth scroll navigation
- [x] Framer Motion entrance animations on sections
- [x] SEO meta tags + Open Graph tags in index.html
- [x] Favicon
- [x] Production build succeeds (`npm run build`)

## NOT in MVP (do not build)
- Contact form (Formspree/EmailJS)
- Blog / writing section
- Testimonials
- Dark/light mode toggle (always dark)
- Analytics integration
- CMS or admin panel
- Custom domain setup
- Deployment pipeline
- TypeScript migration
- Unit/integration tests