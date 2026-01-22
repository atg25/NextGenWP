# NewGen Wallcovering - Sprint Plan (Client Revision)

## Current Status

✅ **Completed Sprints 1-7:**

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
- Contact section with form validation and Formspree integration
- Navigation component with mobile menu and smooth scrolling
- Logo integration (NewGen Wallcovering branding)
- SEO meta tags and Open Graph data
- Image optimization (WebP conversion, 56% file reduction)
- Technical debt resolution (all builds passing, no errors)
- 404 page with animations
- Production deployment ready (Vercel configured)

---

## Client Feedback & Revision Requirements

### **Client Notes (January 2026):**

> "Couple notes and questions
> 
> NextGen Wallcovering
> I like the font, spacing, size and shadings, picture placement is good!
> 
> What would it look like with the background navy blue and the lettering gold?
> 
> Is there other options for the "NG" logo?
> The three lines, press it and have a background color, if that makes sense
> On the "traditional Paper" it is "washable" most people want to know that
> Include paint on the site too, don't have to stress it as much as paper but here and there
> Include "free estimates" as well"

---

## Sprint 8: Client Revisions - Brand & Content Updates (3-4 days)

## Success Metrics for Sprint 8

### Client Approval Checklist

- [ ] Navy/gold color scheme approved (or current scheme retained)
- [ ] New logo selected and implemented
- [ ] Mobile menu enhancement meets expectations
- [ ] "Washable" messaging clear and prominent
- [ ] Paint services integrated naturally
- [ ] "Free Estimates" visible and compelling

### Technical Quality

- [ ] All builds passing (TypeScript, ESLint)
- [ ] Zero console errors
- [ ] Mobile-first responsive
- [ ] Lighthouse scores maintained (90+)
- [ ] All animations working smoothly
- [ ] Cross-browser compatibility verified

### Content Accuracy

- [ ] "Washable" prominently featured
- [ ] Paint mentioned in 4-6 locations
- [ ] "Free Estimates" in 5+ locations
- [ ] All copy reviewed by client
- [ ] No typos or grammatical errors

---

## Design System Updates

### Proposed Navy + Gold Color Palette

**Option A (Deep Navy + Rich Gold):**
```css
--navy-bg: #1a2332;
--gold-text: #d4af37;
--gold-accent: #c5a572;
--navy-light: #2d3e50;
```

**Option B (Midnight + Champagne Gold):**
```css
--navy-bg: #0f1419;
--gold-text: #c5a572;
--gold-accent: #b8974f;
--navy-light: #1e2a3a;
```

**Current Scheme (Warm White + Charcoal):**
```css
--warm-white: #faf8f5;
--charcoal: #2a2a2a;
--accent: #2d5450;
--paper-texture: #fdfbf7;
```

### Logo Design Concepts

**Concept 1: Monogram**
- Overlapping N & G in serif font
- Elegant, traditional feel
- Works well at small sizes

**Concept 2: Geometric**
- Angular letterforms with negative space
- Modern, architectural aesthetic
- Strong visual identity

**Concept 3: Badge/Emblem**
- Circular frame with NG inside
- Premium, established look
- Good for print materials

**Concept 4: Minimalist**
- Simple sans-serif N + G
- Clean, contemporary style
- Versatile across applications

**Concept 5: Script**
- Flowing, connected letters
- Sophisticated, artisan feel
- Best for luxury positioning

---

## Next Immediate Actions (Sprint 8)

### Week 1: Design Exploration

1. **Create navy/gold color palette** (4 hours)
   - Design 2-3 variations
   - Apply to Hero, Navigation, Contact sections
   - Generate comparison screenshots

2. **Design logo alternatives** (6 hours)
   - Sketch 5 concepts
   - Digitize 3 strongest options
   - Present in context mockups

3. **Get client feedback** (Meeting: 1 hour)
   - Present color schemes side-by-side
   - Show logo options in situ
   - Document preferences

### Week 2: Implementation

4. **Implement approved logo** (3 hours)
   - Update all instances
   - Generate favicon variants
   - Test responsive scaling

5. **Apply final color scheme** (3 hours)
   - Update Tailwind config
   - Adjust component styles
   - Test contrast/readability

6. **Update content** (4 hours)
   - Add "washable" messaging
   - Integrate paint services
   - Implement "free estimates" CTAs

7. **Mobile menu enhancement** (2 hours)
   - Add background color on active state
   - Smooth animations
   - Test on real devices

8. **Final QA & deploy** (3 hours)
   - Cross-browser testing
   - Mobile device testing
   - Deploy to production

**Target completion: 7-10 days from client approval**

---

## Client Decision Points

### Decision 1: Color Scheme
- **Option A:** Keep current warm-white + charcoal
- **Option B:** Switch to navy + gold
- **Option C:** Create toggle for both themes

### Decision 2: Logo Selection
- **Client to choose from 3-5 presented concepts**
- **Revisions:** Allow 1-2 rounds of adjustments

### Decision 3: Paint Prominence
- **Level 1:** Minimal (5 mentions, small visual presence)
- **Level 2:** Moderate (dedicated section, equal visual weight)
- **Level 3:** Equal (50/50 with wallpaper)

### Decision 4: Free Estimates Approach
- **Subtle:** Mentioned in copy, standard CTA
- **Prominent:** Multiple CTAs, sticky bar, bold buttons
- **Aggressive:** Pop-up, exit intent, urgency language

---

## Content Copy Updates

### Hero Section - Updated Options

**Option 1 (Current):**
> "Premium Wallcovering Installation"

**Option 2 (With Paint):**
> "Premium Wallcovering & Paint Services"

**Option 3 (Free Estimate Focus):**
> "Transform Your Space – Free Estimates"

### CTA Button Text - Updated Options

**Current:**
- "View Our Work"
- "Get in Touch"

**Revised:**
- "Get Your Free Estimate"
- "View Our Projects"

### Washable Messaging - Traditional Paper

**Before:**
> "Traditional paper wallcovering offers timeless elegance with a range of patterns and textures."

**After:**
> "**Washable & Durable Traditional Paper** – Classic elegance meets modern practicality. Easy to maintain and perfect for any room, our traditional wallpapers are built to last."

---

## Archived: Previous Sprint 5-7 Plans

### ✅ 5.1 Form Backend Integration **[COMPLETED]**

**Goal:** Create navy blue & gold color variant for client review

**Client Request:** "What would it look like with the background navy blue and the lettering gold?"

**Tasks:**

- [ ] Design navy blue + gold color palette
  - Navy blue background options: `#1a2332`, `#0f1419`, `#1e2a3a` (3 variants)
  - Gold text/accent options: `#d4af37`, `#c5a572`, `#b8974f` (3 variants)
  - Ensure WCAG AA accessibility (4.5:1 contrast minimum)
- [ ] Create alternative color scheme in Tailwind config
  - Add `theme-navy` CSS variables
  - Keep current warm-white theme as default
- [ ] Implement theme switcher mechanism
  - Add theme toggle in navigation or footer
  - Use localStorage to persist user preference
  - OR create separate branch for client comparison
- [ ] Generate comparison screenshots for client
  - Current design (warm-white + charcoal)
  - Navy blue + gold variant
  - Side-by-side comparison
- [ ] Test readability with navy/gold scheme
  - Hero section contrast
  - Body text legibility
  - CTA button visibility
  - Form field readability
- [ ] Create Vercel preview deployment for navy theme
  - Deploy to separate preview URL for client review
  - Share link: `https://nextgenwp-navy.vercel.app`

**Design Considerations:**

- Navy + gold = luxury, premium aesthetic
- Risk: May reduce warm, approachable feel
- Opportunity: Could differentiate from competitors
- **Action:** Present both options to client for final decision

**Deliverables:**

- [ ] Live preview URL with navy/gold theme
- [ ] Screenshot comparison PDF
- [ ] Client feedback form/meeting

---

### 8.2 Logo Design Variations **[HIGH PRIORITY]**

**Goal:** Create alternative "NG" logo options for client selection

**Client Request:** "Is there other options for the 'NG' logo?"

**Tasks:**

- [ ] Analyze current logo limitations
  - Current logo style and dimensions
  - Where it's used (navigation, footer, favicon)
- [ ] Design 3-5 alternative "NG" logo concepts:
  1. **Monogram Style:** Overlapping N+G letters
  2. **Geometric:** Angular/modern letterforms
  3. **Script/Serif:** Elegant, traditional style
  4. **Badge/Emblem:** Circular or shield shape with NG
  5. **Minimalist:** Simple sans-serif with clever negative space
- [ ] Create logo variations in multiple formats
  - SVG (scalable, preferred)
  - PNG (transparent background)
  - Sizes: small (40px), medium (80px), large (200px)
- [ ] Present logo options to client
  - Create visual mood board
  - Show each logo in context (navigation, business card mockup)
  - Include rationale for each design direction
- [ ] Implement selected logo across site
  - Update `Logo.tsx` component
  - Replace `/public/logo-small.png` and `/public/logo-big.png`
  - Update favicon
  - Ensure responsive scaling

**Design Directions:**

- **Option A:** Bold, modern (target younger clientele)
- **Option B:** Classic, refined (target luxury market)
- **Option C:** Playful, approachable (target homeowners)

**Timeline:** 2-3 days for design + client feedback round

---

### 8.3 Mobile Menu Enhancement **[MEDIUM PRIORITY]**

**Goal:** Add background color to hamburger menu when active

**Client Request:** "The three lines, press it and have a background color, if that makes sense"

**Tasks:**

- [ ] Update mobile hamburger menu button styling
  - Add background color when menu is open
  - Options: Navy blue, charcoal, or accent green
  - Add subtle border or shadow for depth
- [ ] Implement active state animation
  - Background color fades in when clicked
  - Hamburger icon transforms to X with animation
  - Smooth transition (0.3s ease)
- [ ] Ensure accessibility
  - Sufficient contrast ratio (4.5:1 minimum)
  - Clear visual indicator for active state
  - Keyboard focus states visible
- [ ] Test on real mobile devices
  - iOS Safari touch feedback
  - Android Chrome tap response
  - Ensure no double-tap issues

**Implementation:**

```tsx
// Add to Navigation.tsx hamburger button
className={cn(
  "relative p-3 rounded-md transition-all duration-300",
  isOpen 
    ? "bg-charcoal/90 text-warm-white" 
    : "bg-transparent text-charcoal hover:bg-charcoal/10"
)}
```

**Visual Result:**

- Closed: Transparent background, charcoal lines
- Open: Dark background (charcoal/navy), white X icon
- Clear visual feedback that menu is active

---

### 8.4 Materials Content Update **[HIGH PRIORITY]**

**Goal:** Update "Traditional Paper" description to highlight washability

**Client Request:** "On the 'traditional Paper' it is 'washable' most people want to know that"

**Tasks:**

- [ ] Audit current Materials section content
  - Review all 4 wallpaper type descriptions
  - Identify where "washable" is mentioned
- [ ] Update "Traditional Paper" card
  - **Add prominent "Washable" badge or label**
  - Rewrite description to lead with washability benefit
  - Example: "Washable & durable traditional wallpaper..."
- [ ] Add visual indicator for washable products
  - Icon: water droplet or cleaning cloth
  - Badge: "Easy Clean" or "Washable"
  - Color-coded: blue accent for washable options
- [ ] Review other material types for washability
  - Vinyl: Already washable (emphasize)
  - Fabric-backed: May be washable (clarify)
  - Peel-and-stick: Wipeable surface (specify)
- [ ] Create "Care & Maintenance" quick reference
  - Add small section below materials cards
  - Table: Material type → Cleaning method
  - Washable vs. Wipeable vs. Spot-clean only

**Updated Copy Example:**

**Before:**
> "Traditional paper wallcovering offers timeless elegance..."

**After:**
> "**Washable Traditional Paper** – Durable and easy to maintain, traditional wallpaper combines classic elegance with modern practicality. Perfect for high-traffic areas."

**Visual Enhancement:**

- Add small "Washable" badge in top-right of card
- Use water droplet icon (🌊 or 💧 style)
- Highlight in accent color (green or blue)

---

### 8.5 Paint Services Integration **[HIGH PRIORITY]**

**Goal:** Add paint services throughout the site without overshadowing wallpaper

**Client Request:** "Include paint on the site too, don't have to stress it as much as paper but here and there"

**Tasks:**

- [ ] **1. Hero Section Update**
  - Update tagline: "Premium Wallcovering **& Paint** Installation"
  - OR: "Transforming spaces with wallpaper and paint"
  - Subtle mention, not primary focus

- [ ] **2. Services Section (NEW)**
  - Create new section between Process and Materials
  - Two columns: Wallcovering (70%) | Paint (30%)
  - Paint services:
    - Interior painting
    - Color consultation
    - Surface preparation
    - Accent walls
  Status:** ✅ Complete - Formspree integrated (ID: xaycrgja)

- ✅ Form submits to Formspree endpoint
- ✅ Error handling implemented
- ✅ Success/error states with auto-reset
- ✅ Form resets after successful submission
- ✅ Tested and working in production
**Visual Balance:**

- Keep wallpaper imagery dominant
- Add 1-2 subtle paint-related images (paint swatches, color consultation)
- Maintain current design aesthetic

---

### 8.6 "Free Estimates" Call-to-Action **[HIGH PRIORITY]**

**Goal:** Prominently feature "Free Estimates" across the site

**Client Request:** "Include 'free estimates' as well"

**Tasks:**

- [ ] **1. Hero Section CTA Update**
  - Change primary button from "View Our Work" to "Get Your Free Estimate"
  - Keep secondary button: "View Our Work"
  - Make "Free Estimate" button more prominent (larger, accent color)

- [ ] **2. Sticky CTA Bar (NEW)**
  - Add fixed bottom bar on mobile: "Free Estimates • Call Now"
  - Appears after scrolling past hero section
  - Click to scroll to contact form or call directly
  - Dismissible with X button
### ✅ 5.2 Dependency Updates **[COMPLETED]**

**Status:** ✅ Complete - All dependencies updated

- ✅ 37 packages updated via `npm update`
- ✅ 0 vulnerabilities found
- ✅ Build passing (828ms)
- ✅ TypeScript, ESLint all passing
- ✅ Framer Motion 12.28.1, Sharp 0.34.5 installed

- Use consistent language: "Free Estimate" (not "Free Quote")
- Icon: 📋 or calculator icon
- Accent color for emphasis (green or gold)
- Make CTAs large and tappable on mobile (44px minimum)

**Psychological Triggers:**

- "Free" = no risk
- "Estimate" = professional, detailed
- "24 hours" = fast response time
- "No obligation" = low pressure

---

## Sprint 9: Advanced Enhancements (2-3 days) **[OPTIONAL - POST REVISION]**

### 9.1 Before/After Gallery

**Goal:** Showcase transformation power visually

**Tasks:**

- [ ] Collect 6-10 before/after photo pairs
- [ ] Implement image comparison slider
- [ ] Add to SelectedWork section
- [ ] Include paint and wallpaper projects

### 9.2 Color Visualizer Tool

**Goal:** Let users preview wallpaper/paint in their space

**Tasks:**

- [ ] Research/integrate AR visualization API
- [ ] OR: Simple color overlay tool
- [ ] Add to Materials section
- [ ] Test on mobile camera

### 9.3 Customer Testimonials

**Goal:** Build trust with social proof

**Tasks:**

- [ ] Collect 5-10 customer reviews
- [ ] Create testimonials section
- [ ] Add star ratings
- [ ] Include photos if available
- [ ] Integrate with Google Reviews API

### 9.4 Blog/Resources Section

**Goal:** SEO boost and client education

**Topics:**

- "How to Choose the Right Wallpaper for Your Space"
- "Top 2026 Interior Design Trends"
- "Wallpaper vs. Paint: Which is Right for You?"
- "How to Care for Your Wallpaper"
- "The Truth About Washable Wallpapers"

---

## Revised Priority Matrix

### 🔴 **Must Have (Sprint 8 - Client Revisions)**

1. ✅ Color scheme exploration (navy + gold variant)
2. ✅ Logo design alternatives (3-5 options)
3. ✅ Mobile menu background color
4. ✅ "Washable" content update (Traditional Paper)
5. ✅ Paint services integration (subtle throughout)
6. ✅ "Free Estimates" CTA additions

### 🟡 **Should Have (Sprint 9 - Post-Revision)**

7. Before/after gallery
8. Customer testimonials
9. Enhanced SEO content

### 🟢 **Nice to Have (Future)**

10. Color visualizer tool
11. Blog section
12. Live chat integration

---

## Timeline Summary

### **Sprint 8: Client Revisions (3-4 days)**

- **Day 1:** Navy/gold color exploration + logo design (8 hours)
- **Day 2:** Logo finalization + mobile menu enhancement (6 hours)
- **Day 3:** Content updates (washable, paint, free estimates) (6 hours)
- **Day 4:** Client review + implement feedback (4 hours)

**Total: 24 hours / 3-4 days**

### **Sprint 9: Optional Enhancements (2-3 days)**

- Testimonials: 4 hours
- Before/after gallery: 6 hours
- Blog setup: 8 hours

**Total: 18 hours / 2-3 days**

---

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
### ✅ 5.3 Image Optimization **[COMPLETED]**

**Status:** ✅ Complete - 56% file reduction achieved

- ✅ Sharp installed
- ✅ 13 JPEG images converted to WebP
- ✅ 56% average file size reduction (5.4MB → 2.3MB)
- ✅ All component image paths updated
- ✅ Reusable script created: `scripts/optimize-images.js`
- ✅ Build verified passing with WebP images
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
### ✅ 7.1 Vercel Deployment **[READY]**

**Status:** ✅ Configuration complete - Ready for deployment

- ✅ `vercel.json` created with production config
- ✅ `docs/DEPLOYMENT.md` guide created
- ✅ Security headers configured
- ✅ Cache optimization for assets
- ✅ All builds passing, ready to deploy

**Awaiting:** Client to connect GitHub → Vercel and deploy
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
