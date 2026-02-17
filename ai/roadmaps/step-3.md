# Step 3: About Me, Resume & Skills

## Goal
Build the three main content sections. Resume data will come from the user's PDF.

## Tasks

### About Me
- [ ] Create `About.jsx` component
- [ ] Section heading: "About Me"
- [ ] Professional summary paragraph (placeholder until user provides)
- [ ] What drives me / what I'm looking for paragraph
- [ ] Fun facts / hobbies subsection:
  - Small cards or icon+text items
  - Placeholder hobbies (user will customize)
- [ ] Optional photo placeholder spot
- [ ] Responsive layout (stacked on mobile, side-by-side on desktop if photo is added)

### Resume
- [ ] Ask user for resume PDF path and parse content
- [ ] Create `src/data/resume.js` with structured data (experience, education, etc.)
- [ ] Create `Resume.jsx` component
- [ ] Section heading: "Resume"
- [ ] Experience displayed as timeline or card layout
- [ ] Education section
- [ ] Any certifications or other relevant sections from the PDF
- [ ] "Download PDF" button linking to `src/assets/resume.pdf`
- [ ] Copy user's resume PDF into `src/assets/`

### Skills
- [ ] Create `src/data/skills.js` with categorized skills + react-icons icon names
- [ ] Categories: Frontend, Backend, Tools/DevOps (adjust based on resume)
- [ ] Create `Skills.jsx` component
- [ ] Section heading: "Skills"
- [ ] Icon grid grouped by category
- [ ] Each skill: icon + label underneath
- [ ] Responsive grid (2 cols mobile, 3-4 cols tablet, 5-6 cols desktop)

## Done When
- All three sections render with content (placeholder or real)
- Resume data matches the user's actual resume
- Skills icons display correctly from react-icons
- Sections look good on mobile and desktop