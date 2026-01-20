# NextGen Wallpaper - Sprint Plan

## Current Status

✅ **Completed:**

- Project setup with Vite, React, TypeScript
- QA tooling (ESLint, Prettier, Husky, Commitlint)
- Tailwind CSS v4 configuration
- Hero section with split-screen layout and image gallery
- Paper texture background styling
- Framer Motion animations

---

## Sprint 1: Core Content Sections (2-3 days)

### 1.1 Selected Work Section

**Goal:** Showcase installation quality through visual proof

**Components:**

- `SelectedWork.tsx` component
- Before/after image slider/comparison
- Grid layout for multiple projects
- Zoom/lightbox functionality for detail viewing

**Design Notes:**

- Focus on pattern alignment, seam quality
- Macro shots of texture details
- Subtle hover interactions
- Staggered reveal animations on scroll

**Assets Needed:**

- 4-6 high-quality installation photos
- Before/after pairs if available

---

### 1.2 Process Section

**Goal:** Three-step installation overview emphasizing precision

**Components:**

- `Process.tsx` component
- Three numbered steps with icons/illustrations
- Clean vertical or horizontal timeline layout

**Content:**

1. **Preparation** - Surface assessment, measurement, material selection
2. **Installation** - Precise alignment, pattern matching, seam work
3. **Finishing** - Quality inspection, cleanup, final touches

**Design Notes:**

- Minimal, confident presentation
- Subtle progress indicators
- On-scroll animation revealing each step
- Iconography: minimal line icons or simple shapes

---

### 1.3 Materials Section

**Goal:** Honest overview of wallpaper types and considerations

**Components:**

- `Materials.tsx` component
- Card/grid layout for different wallpaper types
- Expandable details or hover states

**Content:**

- Traditional paper
- Vinyl/washable
- Textured/fabric-backed
- Peel-and-stick
- Each with honest notes on durability, maintenance, suitability

**Design Notes:**

- Simple cards with texture samples
- Restrained color palette
- Focus on material photography
- No sales pitch—just facts

---

## Sprint 2: Brand & Contact (1-2 days)

### 2.1 About Section

**Goal:** Short brand story positioning as modern specialist

**Components:**

- `About.tsx` component
- Single column text layout
- Optional photo of work/tools

**Content:**

- Brief origin story
- Philosophy: craft, precision, material respect
- What makes NextGen different (without clichés)
- 2-3 short paragraphs max

**Design Notes:**

- Editorial layout with generous whitespace
- Serif typography for body text
- Minimal, confident tone
- Possibly offset layout with small accent image

---

### 2.2 Contact/CTA Section

**Goal:** Calm, minimal quote request form

**Components:**

- `Contact.tsx` component
- Form with validation
- Success/error states

**Form Fields:**

- Name
- Email
- Phone (optional)
- Project details (textarea)
- Preferred contact method

**Design Notes:**

- Clean input styling
- No pressure language ("Let's discuss your project")
- Subtle validation feedback
- Loading states with smooth transitions
- Consider form backend: Formspree, Netlify Forms, or custom API

---

## Sprint 3: Polish & Optimization (1-2 days)

### 3.1 Navigation

**Components:**

- `Navigation.tsx` component
- Fixed header with smooth scroll links
- Mobile hamburger menu

**Design Notes:**

- Minimal, nearly invisible until scroll
- Smooth scroll behavior
- Active section indicators

---

### 3.2 Scroll Animations & Interactions

**Tasks:**

- Implement IntersectionObserver for scroll-triggered animations
- Add parallax effects on wallpaper images
- Ensure all animations respect `prefers-reduced-motion`
- Subtle scroll progress indicator

---

### 3.3 Performance & SEO

**Tasks:**

- Image optimization (WebP conversion, lazy loading)
- Add meta tags and Open Graph data
- Generate favicon set
- Lighthouse audit and fixes
- Add schema.org markup for local business

---

### 3.4 Responsive Testing

**Tasks:**

- Test all sections on mobile, tablet, desktop
- Fine-tune breakpoints
- Ensure touch interactions work smoothly
- Test on multiple browsers

---

## Sprint 4: Content & Deployment (1 day)

### 4.1 Content Population

**Tasks:**

- Replace placeholder text with final copy
- Add real project photos
- Review tone and messaging consistency

---

### 4.2 Final QA

**Tasks:**

- Cross-browser testing
- Accessibility audit (keyboard nav, screen readers, color contrast)
- Form submission testing
- Performance check

---

### 4.3 Deployment

**Tasks:**

- Deploy to Vercel
- Set up custom domain (if applicable)
- Configure analytics (optional, privacy-focused)
- Add error monitoring (Sentry optional)

---

## Design System Reference

### Typography

- **Headlines:** Cormorant Garamond (serif) - elegant, editorial
- **Body:** Inter (sans-serif) - clean, readable
- **Sizes:** Large (6xl-8xl), Body (xl-2xl), Small (sm-base)

### Colors

- **warm-white:** `#fdfbf7` (backgrounds)
- **charcoal:** `#2a2a2a` (text)
- **accent:** `#2d5450` (deep green)

### Motion Philosophy

- Duration: 0.8-1s for major elements
- Easing: `[0.22, 1, 0.36, 1]` (custom cubic-bezier)
- Scroll-triggered, not aggressive
- Subtle scale/fade combinations

### Spacing

- Generous whitespace
- Sections: `py-20` to `py-32`
- Max-width for content: `max-w-7xl`

---

## Assets Needed

- [ ] 4-6 installation photos (high quality)
- [ ] Before/after pairs (2-3 sets)
- [ ] Material texture samples (4-5)
- [ ] Optional: tools/process photos
- [ ] Logo/brand assets (if available)

---

## Technical Considerations

### Libraries to Add

- `react-intersection-observer` - for scroll animations
- `react-compare-slider` - for before/after images (optional)
- Image lightbox library (optional)

### Form Backend Options

1. **Formspree** - Easy, no backend needed
2. **Netlify Forms** - Built-in if using Netlify
3. **Custom API** - More control, requires backend

### Analytics (Optional)

- Plausible or Fathom (privacy-focused)
- Avoid Google Analytics if privacy is a concern

---

## Success Metrics

- [ ] All sections match design brief vision
- [ ] Mobile-first, fully responsive
- [ ] Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
- [ ] Load time under 2s
- [ ] Zero accessibility violations
- [ ] Clean atomic commits throughout
- [ ] All form validations working
- [ ] Deployed and live

---

## Timeline Summary

- **Sprint 1:** 2-3 days (Content sections)
- **Sprint 2:** 1-2 days (About + Contact)
- **Sprint 3:** 1-2 days (Polish + optimization)
- **Sprint 4:** 1 day (Content + deployment)

**Total: 5-8 days** for complete one-page site
