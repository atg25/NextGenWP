# NewGen Wallcovering - Sprint Plan

## Current Status

✅ **Completed Sprints 1-3:**

- Project setup with Vite, React, TypeScript
- QA tooling (ESLint, Prettier, Husky, Commitlint)
- Tailwind CSS v4 configuration
- Hero section with split-screen layout and real wallpaper images
- Paper texture background styling
- Framer Motion animations with prefers-reduced-motion support
- SelectedWork section with project gallery
- Process section with 3-step installation breakdown
- Materials section with 4 wallpaper type cards
- About section with brand story and stats
- Contact section with form validation
- Navigation component with mobile menu and smooth scrolling
- Logo integration (NewGen Wallcovering branding)
- SEO meta tags and Open Graph data
- Image lazy loading optimization
- Technical debt resolution (all builds passing, no errors)

---

## Sprint 5: Production Readiness & Optimization (2-3 days)

### 5.1 Form Backend Integration **[HIGH PRIORITY]**

**Goal:** Connect Contact form to real backend service

**Tasks:**

- [ ] Choose form service (Formspree recommended for simplicity)
- [ ] Create Formspree account and get form endpoint
- [ ] Replace TODO in `Contact.tsx` handleSubmit with actual API call
- [ ] Add proper error handling for network failures
- [ ] Add form submission rate limiting/spam protection
- [ ] Test form submissions end-to-end
- [ ] Configure email notifications to client
- [ ] Add form honeypot field for bot protection

**Implementation:**

```typescript
// Replace setTimeout mock with actual Formspree integration
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

**Testing Checklist:**

- [ ] Form submits successfully
- [ ] Email arrives with correct data
- [ ] Error states display properly
- [ ] Success message shows after submission
- [ ] Form resets after successful submission
- [ ] Spam protection working

---

### 5.2 Dependency Updates **[MEDIUM PRIORITY]**

**Goal:** Update all packages to latest stable versions

**Current Outdated Packages:**

- `@types/react`: 19.2.8 → 19.2.9
- `@typescript-eslint/eslint-plugin`: 8.53.0 → 8.53.1
- `@typescript-eslint/parser`: 8.53.0 → 8.53.1
- `framer-motion`: 12.27.0 → 12.28.1
- `globals`: 16.5.0 → 17.0.0 (major, review breaking changes)
- `typescript-eslint`: 8.53.0 → 8.53.1

**Tasks:**

- [ ] Run `npm update` for minor/patch updates
- [ ] Review `globals` v17 changelog before updating
- [ ] Test build after updates
- [ ] Run full test suite (lint, type-check, build)
- [ ] Verify no breaking changes in production
- [ ] Update package-lock.json
- [ ] Commit with descriptive message

---

### 5.3 Image Optimization **[MEDIUM PRIORITY]**

**Goal:** Convert all wallpaper images to modern formats for better performance

**Current State:**

- 13 JPEG images in `/public/wallpapers/`
- Average size: ~2-5MB per image
- No WebP variants
- No responsive image sizes

**Tasks:**

- [ ] Install image optimization tool (`sharp` or `squoosh-cli`)
- [ ] Convert all JPEG images to WebP format
- [ ] Generate multiple sizes (thumbnail, medium, full)
- [ ] Update image paths in components
- [ ] Add `<picture>` element with fallbacks
- [ ] Test image loading across browsers
- [ ] Measure performance improvement (Lighthouse)
- [ ] Add build script for future image optimization

**Implementation:**

```bash
# Install sharp for image conversion
npm install -D sharp

# Create conversion script
node scripts/optimize-images.js
```

**Expected Results:**

- 30-50% reduction in image file sizes
- Faster initial page load
- Better Lighthouse performance score
- Maintained visual quality

---

### 5.4 Add 404 Page **[MEDIUM PRIORITY]**

**Goal:** Create custom 404 error page for production

**Tasks:**

- [ ] Create `404.tsx` component
- [ ] Match site design aesthetic
- [ ] Add navigation back to home
- [ ] Include helpful links (Home, Contact)
- [ ] Configure Vercel for custom 404 handling
- [ ] Add subtle animation (on-brand)
- [ ] Test 404 page in production environment

**Design:**

- Minimal, elegant
- "Page Not Found" message
- Brief explanation
- Clear call-to-action to return home
- Matches site's serif typography and color scheme

---

## Sprint 6: Advanced Features & Testing (2-3 days)

### 6.1 End-to-End Testing **[LOW PRIORITY - FUTURE]**

**Goal:** Add automated tests for critical user flows

**Framework:** Playwright (recommended) or Cypress

**Test Coverage:**

- [ ] Navigation between sections
- [ ] Mobile menu open/close
- [ ] Form submission flow
- [ ] Scroll animations trigger
- [ ] Image lazy loading
- [ ] Responsive breakpoints
- [ ] Accessibility features (keyboard nav)

**Tasks:**

- [ ] Install Playwright
- [ ] Write test for form submission
- [ ] Write test for navigation
- [ ] Write test for mobile menu
- [ ] Add CI/CD integration
- [ ] Document test running instructions

---

### 6.2 Sitemap Generation **[LOW PRIORITY - FUTURE]**

**Goal:** Generate sitemap.xml for better SEO

**Tasks:**

- [ ] Create `sitemap.xml` in public folder
- [ ] Include all main sections as anchors
- [ ] Add last modified dates
- [ ] Submit to Google Search Console
- [ ] Add robots.txt file
- [ ] Configure for dynamic generation if needed

---

### 6.3 Analytics Integration **[LOW PRIORITY - FUTURE]**

**Goal:** Add privacy-focused analytics to track visitor behavior

**Recommended:** Plausible Analytics (privacy-friendly, GDPR compliant)

**Alternative:** Fathom, Simple Analytics

**Tasks:**

- [ ] Create Plausible account
- [ ] Add tracking script to index.html
- [ ] Configure custom events (form submissions, button clicks)
- [ ] Set up goals in Plausible dashboard
- [ ] Add privacy policy page (if required)
- [ ] Test analytics in production
- [ ] Document for client

**Custom Events to Track:**

- Form submissions
- CTA button clicks
- Section scroll depth
- Navigation link clicks
- Time on page

---

### 6.4 Loading States & Skeleton Screens **[LOW PRIORITY - FUTURE]**

**Goal:** Add skeleton loaders for images to improve perceived performance

**Tasks:**

- [ ] Create skeleton component for image placeholders
- [ ] Add loading states to SelectedWork images
- [ ] Add loading states to Materials images
- [ ] Add loading states to Hero grid images
- [ ] Implement blur-up technique for images
- [ ] Test on slow connections (throttled network)
- [ ] Add fade-in animation when images load

---

## Sprint 7: Deployment & Monitoring (1 day)

### 7.1 Vercel Deployment **[IMMEDIATE]**

**Goal:** Deploy to Vercel with custom domain

**Prerequisites:**

- [ ] All High Priority tasks completed
- [ ] Form backend integrated and tested
- [ ] Build passing with no errors

**Tasks:**

- [ ] Create Vercel account (if not exists)
- [ ] Connect GitHub repository to Vercel
- [ ] Configure build settings (npm run build)
- [ ] Set environment variables (if any)
- [ ] Deploy to production
- [ ] Test deployment thoroughly
- [ ] Configure custom domain (newgenwc.com)
- [ ] Set up SSL certificate (automatic with Vercel)
- [ ] Configure redirects (www to non-www)
- [ ] Test from multiple devices/networks

**Vercel Configuration:**

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

---

### 7.2 Post-Deployment Monitoring

**Tasks:**

- [ ] Run Lighthouse audit on production URL
- [ ] Check all links work
- [ ] Verify form submissions reach inbox
- [ ] Test on real mobile devices (iOS, Android)
- [ ] Test on different browsers (Chrome, Safari, Firefox, Edge)
- [ ] Monitor performance via Vercel dashboard
- [ ] Set up uptime monitoring (optional: UptimeRobot)
- [ ] Document deployment process for future updates

---

## Priority Matrix

### 🔴 **Must Have (Before Deployment)**

1. ✅ Form backend integration
2. ✅ Dependency updates (security patches)
3. ✅ Image optimization (performance)
4. ✅ 404 page
5. ✅ Vercel deployment

### 🟡 **Should Have (Post-Launch)**

6. E2E testing
7. Sitemap generation
8. Analytics integration

### 🟢 **Nice to Have (Future Iterations)**

9. Loading states/skeleton screens
10. Advanced image optimization (multiple sizes)
11. Blog section (if client wants content marketing)
12. Customer testimonials section
13. Instagram feed integration

---

## Timeline Summary

- **Sprint 5 (Production Readiness):** 2-3 days
  - Form backend: 4-6 hours
  - Dependencies: 1-2 hours
  - Image optimization: 4-8 hours
  - 404 page: 2-3 hours

- **Sprint 6 (Advanced Features):** 2-3 days (optional, post-launch)
  - E2E tests: 6-8 hours
  - Sitemap: 1 hour
  - Analytics: 2-3 hours
  - Loading states: 4-6 hours

- **Sprint 7 (Deployment):** 3-4 hours
  - Vercel setup: 1 hour
  - Testing: 2-3 hours

**Total to Launch: 2-3 days**
**Total with optional features: 5-7 days**

---

## Success Metrics

### Pre-Launch Requirements

- [x] All sections complete and functional
- [x] Mobile-first, fully responsive
- [x] All builds passing (TypeScript, ESLint)
- [x] Zero console errors
- [x] Technical debt resolved
- [ ] Form backend integrated and tested
- [ ] Images optimized (WebP)
- [ ] 404 page created
- [ ] Deployed to Vercel

### Performance Goals

- [ ] Lighthouse Performance: 90+
- [ ] Lighthouse Accessibility: 95+
- [ ] Lighthouse Best Practices: 95+
- [ ] Lighthouse SEO: 100
- [ ] First Contentful Paint: <1.5s
- [ ] Time to Interactive: <3s
- [ ] Total page weight: <1MB (with image optimization)

### Quality Assurance

- [x] Clean atomic commits throughout
- [x] All animations respect prefers-reduced-motion
- [x] Keyboard navigation works
- [x] Mobile menu fully functional
- [x] Smooth scrolling to sections
- [ ] Form validation working
- [ ] Form submissions received
- [ ] No broken links
- [ ] Cross-browser compatibility

---

## Design System Reference

### Typography

- **Headlines:** Cormorant Garamond (serif) - elegant, editorial
- **Body:** Inter (sans-serif) - clean, readable
- **Sizes:** Large (6xl-8xl), Body (xl-2xl), Small (sm-base)

### Colors

- **warm-white:** `#fdfbf7` (backgrounds)
- **navbar-white:** `#fdfbf7` (navigation)
- **charcoal:** `#2a2a2a` (text)
- **accent:** `#2d5450` (deep green)

### Motion Philosophy

- Duration: 0.8-1s for major elements
- Easing: `[0.22, 1, 0.36, 1]` (custom cubic-bezier)
- Scroll-triggered, not aggressive
- Subtle scale/fade combinations
- Respects prefers-reduced-motion

### Spacing

- Generous whitespace
- Sections: `py-24` to `py-32`
- Navigation padding matches hero content width
- Consistent horizontal padding: `px-8 lg:px-16 xl:px-24`

---

## Next Immediate Actions

1. **Integrate Formspree** → Contact.tsx (~4 hours)
2. **Update Dependencies** → package.json (~1 hour)
3. **Optimize Images** → Convert to WebP (~6 hours)
4. **Create 404 Page** → New component (~2 hours)
5. **Deploy to Vercel** → Production launch (~3 hours)

**Target Launch Date:** Within 3 days after starting Sprint 5

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
