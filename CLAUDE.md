# CLAUDE.md - Project Guidelines

## Project Overview
Personal portfolio website for Braden Stevens (Full Stack Development Engineer).
Static single-page React app built with Vite, Tailwind CSS, Framer Motion, and React Icons.

## Rules

### Ask Before Acting
- Ask my opinion before starting complex or multi-file work
- If there are multiple valid approaches, present options — don't just pick one
- When a decision affects architecture or UX, check with me first
- Don't add new dependencies without asking

### Keep It Simple
- Do not over-engineer. Build the minimum that works
- No premature abstractions, no "just in case" code
- Prefer flat structures over deep nesting
- If a feature isn't in mvp.md, don't build it
- One component per file, no barrel exports
- Data lives in `src/data/` as plain JS objects — no fetching, no CMS

### Be Honest
- Flag uncertainty instead of guessing — say "I'm not sure" when you're not
- If something seems wrong or risky, say so directly
- Don't silently skip errors or edge cases — call them out
- If a task is blocked (missing content, unclear requirement), stop and ask

### Code Style
- React functional components with hooks
- Tailwind utility classes for all styling — no CSS modules, no styled-components
- Mobile-first responsive design (sm → md → lg → xl breakpoints)
- Use react-icons for all icons (prefer `si` prefix for brand icons, `hi` for UI)

### Theme
- Dark background: slate-900 / slate-950
- Primary blue: blue-500 / blue-600
- Accent highlights: blue-400
- Text: white (primary), slate-300 (secondary)
- Cards/surfaces: slate-800

### After Every Edit
- Log all changes to `ai/changelog.md`. Each entry should include the date and a 2-3 sentence summary of what changed. Keep entries simple.
- Run `npm run build` (and `npm run dev` if needed) to verify the site still works correctly
- After verifying, prompt me to ask if further edits are needed before moving on

### What NOT to Do
- No routing library — this is a single-page scroll site
- No state management library — useState/useEffect is sufficient
- No backend, no API calls, no database
- No TypeScript unless I ask for it
- No tests unless I ask for them
- Don't create README.md or documentation files unless asked