# Step 2: Layout, Navbar & Hero

## Goal
Build the page skeleton with a sticky navbar that scrolls to sections and a hero section that introduces Braden.

## Tasks

### Navbar
- [ ] Create `Navbar.jsx` component
- [ ] Name/logo on the left
- [ ] Nav links on the right: About, Resume, Projects, Skills, Contact
- [ ] GitHub + LinkedIn icon links (react-icons)
- [ ] Smooth scroll to sections on click (react-scroll)
- [ ] Navbar background: transparent at top, opaque (slate-900) on scroll
- [ ] Mobile: hamburger menu icon that toggles a dropdown/slide menu
- [ ] Close mobile menu when a link is clicked

### Hero
- [ ] Create `Hero.jsx` component
- [ ] Large heading: "Braden Stevens"
- [ ] Subtitle: "Full Stack Development Engineer"
- [ ] Short tagline/intro sentence (placeholder text)
- [ ] Two CTA buttons:
  - "View My Work" → scrolls to Projects section
  - "Get In Touch" → scrolls to Contact section
- [ ] Subtle gradient background (dark to blue tones)

### App Layout
- [ ] Set up `App.jsx` importing Navbar, Hero, and placeholder sections
- [ ] Each section has an `id` attribute for scroll targeting
- [ ] Sections spaced with consistent padding

## Done When
- Navbar is sticky and links scroll to correct sections
- Hamburger menu works on mobile
- Hero displays name, title, tagline, and working CTA buttons
- Page looks clean on mobile and desktop