# Professional Portfolio Website — React + Vite

Build a stunning, professional portfolio website with premium design aesthetics, micro-animations, and rich user experience.

## Background

The user wants a professional portfolio site built with **ReactJS + Vite**, following the `frontend-dev-guidelines` SKILL.md which emphasizes:
- Strict TypeScript discipline
- Feature-based code organization
- Lazy loading for heavy components
- Performance-safe defaults (useMemo, useCallback, React.memo)
- Clean component structure

## Design Direction

> [!IMPORTANT]
> The portfolio will use a **dark-mode glassmorphism** design with:
> - Deep navy/dark gradient backgrounds
> - Glass-effect cards with blur and transparency
> - Accent colors: Electric blue (#4F46E5 → #06B6D4 gradient) and soft violet
> - Google Font: **Inter** (clean, modern)
> - Smooth scroll-triggered animations (Framer Motion)
> - Particle/floating orb ambient background effects
> - Responsive design: mobile-first

## Proposed Changes

### 1. Project Scaffolding

#### [NEW] Vite + React + TypeScript Project
- Initialize with `npx create-vite@latest ./ --template react-ts`
- Install dependencies: `framer-motion`, `react-icons`, `react-intersection-observer`
- Configure path aliases (`@/` → `src/`)

---

### 2. Design System & Global Styles

#### [NEW] [index.css](file:///d:/portfolio/src/index.css)
- CSS custom properties for colors, spacing, typography
- Dark mode palette with gradient backgrounds
- Glass-effect utility classes
- Smooth scrolling, custom scrollbar
- Responsive breakpoints

#### [NEW] [App.css](file:///d:/portfolio/src/App.css)
- Layout grid and section spacing
- Animation keyframes (float, glow, fade-in)
- Section-specific styles

---

### 3. Components

#### [NEW] [Navbar.tsx](file:///d:/portfolio/src/components/Navbar/Navbar.tsx)
- Fixed top navigation with glass effect
- Smooth scroll navigation links
- Mobile hamburger menu
- Active section highlighting

#### [NEW] [Hero.tsx](file:///d:/portfolio/src/features/hero/components/Hero.tsx)
- Full-viewport hero section
- Animated typing effect for role title
- Floating particle/orb background
- CTA buttons with hover glow effects
- Social media links (GitHub, LinkedIn)

#### [NEW] [About.tsx](file:///d:/portfolio/src/features/about/components/About.tsx)
- Personal introduction with avatar
- Skill tags with animated entrance
- Stats counters (projects, experience, etc.)
- Glass card layout

#### [NEW] [Skills.tsx](file:///d:/portfolio/src/features/skills/components/Skills.tsx)
- Tech stack grid with icons
- Animated progress bars or radial progress
- Category grouping (Frontend, Backend, Tools)
- Hover effects on skill cards

#### [NEW] [Projects.tsx](file:///d:/portfolio/src/features/projects/components/Projects.tsx)
- Project showcase cards with images
- Hover overlay with description
- Filter by category (All, Web, Mobile, etc.)
- Links to live demo / GitHub
- Staggered entrance animations

#### [NEW] [Experience.tsx](file:///d:/portfolio/src/features/experience/components/Experience.tsx)
- Vertical timeline with animated entries
- Company, role, duration, description
- Alternating left/right layout on desktop
- Scroll-triggered reveal

#### [NEW] [Contact.tsx](file:///d:/portfolio/src/features/contact/components/Contact.tsx)
- Contact form with glass card
- Email, name, message fields
- Social links section
- Animated submit button

#### [NEW] [Footer.tsx](file:///d:/portfolio/src/components/Footer/Footer.tsx)
- Minimal footer with social links
- Copyright text
- Back-to-top button

#### [NEW] [ParticleBackground.tsx](file:///d:/portfolio/src/components/ParticleBackground/ParticleBackground.tsx)
- Canvas-based animated particles/floating orbs
- Ambient depth effect
- Performance-optimized with requestAnimationFrame

#### [NEW] [SectionWrapper.tsx](file:///d:/portfolio/src/components/SectionWrapper/SectionWrapper.tsx)
- Scroll-triggered fade-in/slide-up animation wrapper
- Uses Intersection Observer
- Reusable across all sections

---

### 4. Main Application

#### [NEW] [App.tsx](file:///d:/portfolio/src/App.tsx)
- Single-page layout composing all sections
- Lazy loading for heavy sections
- Smooth scroll behavior

#### [NEW] [main.tsx](file:///d:/portfolio/src/main.tsx)
- React 18 entry point with StrictMode

---

## Open Questions

> [!IMPORTANT]
> **Personal Info**: The portfolio will use placeholder data (name: "Tuan Hung", role: "Full-Stack Developer"). Please confirm if you'd like different information or specific projects to showcase.

> [!NOTE]
> **MUI vs Vanilla CSS**: The SKILL.md references MUI v7, but for a portfolio site, I recommend using **vanilla CSS + Framer Motion** for maximum design flexibility and smaller bundle size. MUI is better suited for dashboard/enterprise apps. Do you agree?

## Verification Plan

### Automated Tests
- Run `npm run build` to verify TypeScript compilation and production build
- Run the dev server and verify all sections render correctly

### Manual Verification
- Launch browser subagent to capture screenshots of the final result
- Verify responsive layout at mobile, tablet, and desktop breakpoints
- Verify all animations work smoothly
