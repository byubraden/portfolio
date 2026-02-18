# Changelog

## 2026-02-17
**Contact: Removed email option**
Removed the "Send an Email" button and HiEnvelope import. LinkedIn is now the sole CTA, centered in the card. Updated body text to remove the email reference.

**Hero: Redesigned with two-column layout and animated code window**
Left side now features status chips ("Open to full-stack roles", "Provo, UT"), a "👋 Hi, I'm" intro, large left-aligned name with "Stevens" in blue accent, and the existing CTAs. Right side shows a floating macOS-style code editor card (BradenStevens.jsx) with syntax-highlighted content and a looping float animation via Framer Motion. Code window is hidden on mobile. Left content uses a staggered entrance animation.

**Navbar: Floating island on scroll + name format fix**
Navbar transitions to a floating rounded island (max-w-4xl, rounded-2xl, border, shadow) when scrolled past 50px, lifting off the top edge with padding. At the top it remains full-width. Mobile dropdown matches the island style when scrolled. Logo updated from `</BradenStevens>` to `<bradenstevens/>`.

**About: Photo left, bio + interests right**
Restructured to photo-only left column, with bio text and interests chips stacked in the right column. Fixes the height mismatch dead space and makes the interests feel like a natural continuation of the bio rather than an afterthought.

## 2026-02-17
**Navbar: Developer-themed logo**
Changed navbar logo from "Braden Stevens." to "</BradenStevens>" styled like an HTML/React closing tag, with the angle brackets and slash in blue accent color.

**Navbar: Reordered links to match page section order**
Nav links now follow the page order: Home, About, Resume, Skills, Projects, Contact.

**Navbar: Redesigned to match reference style**
Updated navbar with full name "Braden Stevens." (with blue accent dot) instead of "BS". Added "Home" link, reordered nav items. Active link now shows a rounded border pill outline instead of just a color change. Added persistent bottom border and subtle backdrop blur. Kept social icons and mobile hamburger menu.

**Skills: Auto-scrolling marquee with category tabs**
Updated Skills section to use a horizontal auto-scrolling marquee while keeping the category tab switcher. Items are repeated 6x to ensure a seamless infinite loop with no visible end. The marquee container is constrained to the middle 70% of the page with a CSS mask-image gradient that fades to transparent on both edges. Animation duration is calculated from the actual rendered pixel width (via useRef) divided by a constant speed (50px/s), ensuring identical visual scroll speed across all tabs regardless of item count or text length.

**Step 5: Animations & Final Polish**
Added subtle fade-in / slide-up entrance animations to all section components (Hero, About, Resume, Skills, Projects, Contact) using Framer Motion. Hero animates on initial page load, while all other sections use `whileInView` to trigger once when scrolled into view. Verified SEO meta tags in index.html are complete and production build passes with no errors.

**Step 1: Project Setup & Configuration**
Scaffolded Vite + React project and installed all dependencies (Tailwind CSS v4, Framer Motion, React Icons, React Scroll). Configured Tailwind with the dark/blue theme (slate-950 background, blue-400/500/600 accents), set up folder structure (components, data, assets), and updated index.html with SEO meta tags and Open Graph placeholders. Dev server and production build both verified working.

**Step 2: Layout, Navbar & Hero**
Built Navbar component with sticky positioning, transparent-to-opaque scroll transition, smooth scroll links (react-scroll), GitHub/LinkedIn icons, and a hamburger menu for mobile. Built Hero component with gradient background, name/title/tagline, and two CTA buttons that scroll to Projects and Contact. Updated App.jsx with all section placeholders (About, Resume, Projects, Skills, Contact) each with scroll-target IDs.

**Step 3: About Me, Resume & Skills**
Built About component with professional summary and fun facts grid (hiking, biking, travel, AI side projects, Apple tech YouTube, Eagle Scout). Created Resume component with timeline layout for work experience and education, parsed from resume PDF, plus a download PDF button. Built Skills component with categorized icon grid (Languages & Frameworks, Backend/Data/APIs, Cloud & DevOps). Updated Navbar with real GitHub/LinkedIn URLs.

**About Me: Added profile photo**
Added profile picture to the About Me section. Photo displays as a rounded circle on the left with text wrapping beside it on desktop, and centered above the text on mobile.

**Resume: Redesigned to card-based tabbed layout**
Rebuilt Resume section with centered header (badge, italic title, subtitle), pill-shaped download button, Experience/Education tab switcher, and card-based entries with timeline connector line. Each card now shows an icon, title, company, date, location, description, bullet points, and tech tags. Updated resume data with location fields and tech tags per entry.

**Unified section design across About & Skills**
Redesigned About Me and Skills sections to match the Resume design pattern. All sections now share: centered header with uppercase badge, large italic title, subtitle, and card-based content with slate-800 backgrounds and border styling. About Me bio and fun facts are now inside cards. Skills categories are each in their own card.

**Skills: Switched to horizontal pill layout**
Replaced the categorized grid with a single flowing flex-wrap layout of horizontal pills. Each pill shows an icon on the left and skill name on the right. Cleaner and less cluttered.

**Step 4: Projects, Contact & Footer**
Built Projects section with 4 project cards (from resume) in a 2-column grid, each with gradient placeholder image, title, year, description, tech tags, and GitHub/live link slots. Built Contact section with centered card, LinkedIn button, and email link. Built Footer with copyright and social icons. All sections follow the unified design pattern (badge, italic title, cards). Wired all components into App.jsx — no more placeholders.

**Skills: Added tab switcher**
Added a pill-shaped tab switcher (matching the Resume tabs) to toggle between Languages & Frameworks, Backend/Data/APIs, and Cloud & DevOps. Each tab has an icon. On mobile, category names are shortened to fit. Skills pills display per selected category.

**About Me: Side-by-side layout**
Moved the bio card and "When I'm Not Coding" fun facts card to sit side by side on desktop (bio takes remaining space, fun facts in a fixed-width column on the right). Stacks vertically on mobile. Fun facts now in a 2-column grid inside the narrower card.

**About Me: Bio card text fills full card space**
Updated the About Me bio card so the text content expands to fill the entire card area. Added flex column layout to the card container and replaced the bottom margin on the inner content with flex-1 growth, eliminating the unused whitespace.