# Sprint 7: Vercel Deployment Guide

## Quick Start - Deployment Steps

### Step 1: Create/Access Vercel Account

1. Go to https://vercel.com
2. Sign up or log in with your GitHub account
3. Authorize Vercel to access your GitHub repositories

### Step 2: Import & Deploy Repository

1. Click "Add New..." → "Project"
2. Select "Import Git Repository"
3. Find and select `NextGenWP` repository (atg25/NextGenWP)
4. Click "Import"

### Step 3: Configure Project Settings

Vercel should auto-detect these settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

All settings are already configured in `vercel.json` - Vercel will automatically use them.

### Step 4: Deploy

1. Click "Deploy"
2. Wait for build to complete (~1-2 minutes)
3. Vercel will provide a preview URL
4. Check email for deployment confirmation

### Step 5: Set Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add custom domain: `newgenwc.com` (if you own it)
3. Follow DNS configuration instructions
4. Wait for SSL certificate (automatic, ~5 minutes)

---

## Post-Deployment Testing Checklist

### 🔗 Links & Navigation

- [ ] All navigation links work
- [ ] Smooth scrolling to sections functions
- [ ] Mobile menu opens/closes correctly
- [ ] Home link returns to top

### 🖼️ Images & Assets

- [ ] All 13 wallpaper images load correctly
- [ ] WebP images display properly
- [ ] Logo displays at full size and in navigation
- [ ] No broken image placeholders

### 📝 Form Submission

- [ ] Contact form submits successfully
- [ ] Success message appears after submission
- [ ] Email received in your inbox with form data
- [ ] Form resets after successful submission
- [ ] Error handling works (test by going offline or providing invalid email)

### 🎨 Design & Layout

- [ ] All sections render with correct colors
- [ ] Fonts display correctly (Cormorant Garamond, Inter)
- [ ] Spacing and padding look right
- [ ] Responsive breakpoints work (test on mobile, tablet, desktop)

### ✨ Animations

- [ ] Scroll animations trigger on page scroll
- [ ] Hero section animations appear smoothly
- [ ] No animation jank or lag
- [ ] Animations respect reduced motion preferences (if enabled)

### 📱 Mobile Experience

- [ ] Test on iOS (Safari) - minimum iPhone 12
- [ ] Test on Android (Chrome) - minimum Pixel 5
- [ ] Touch interactions responsive
- [ ] Navigation menu accessible on small screens
- [ ] Forms usable on mobile keyboards

### 🌐 Browser Compatibility

- [ ] Chrome (latest)
- [ ] Safari (latest)
- [ ] Firefox (latest)
- [ ] Edge (latest)

### ⚡ Performance

- [ ] Run Lighthouse audit: https://web.dev/measure/
  - Performance: 90+ ✅
  - Accessibility: 95+ ✅
  - Best Practices: 95+ ✅
  - SEO: 100 ✅
- [ ] Page loads in <1.5 seconds
- [ ] No console errors or warnings

### 🔒 Security

- [ ] HTTPS works (green lock icon)
- [ ] No mixed content warnings
- [ ] Form submission is secure
- [ ] Headers configured properly (X-Frame-Options, etc.)

### 🚫 Error Handling

- [ ] 404 page displays when navigating to invalid URL
- [ ] 404 page has working navigation back to home
- [ ] 404 page matches site design

---

## Vercel Features to Check

### Build Logs

1. Go to Deployments tab
2. Click latest deployment
3. Check "Build Logs" for any warnings
4. Verify build completed in ~828ms

### Environment Variables

If form backend requires configuration:

1. Go to Settings → Environment Variables
2. Add any necessary variables (none needed for Formspree currently)

### Deployment Preview

- Each git commit generates a preview URL
- Share preview link before pushing to main
- Use for QA before production deployment

### Analytics

1. Go to Analytics tab
2. Monitor visitor stats
3. Check Core Web Vitals

---

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Common issues:
   - TypeScript errors → Run `npm run type-check` locally
   - Missing dependencies → Check `package.json` is committed
   - Wrong build command → Verify `vercel.json` settings

### Images Not Loading

1. Check if WebP files are in `/public/wallpapers/`
2. Verify image paths in components use `/wallpapers/...webp`
3. Check browser DevTools → Network tab for 404 errors

### Form Not Submitting

1. Verify Formspree ID: `xaycrgja` in Contact.tsx
2. Check browser console for fetch errors
3. Ensure CORS is not blocking (Formspree handles this)
4. Test form at: https://formspree.io (check submission history)

### Slow Performance

1. Run Lighthouse audit
2. Check if images are properly optimized (WebP conversion)
3. Verify caching headers in `vercel.json`
4. Check Vercel Analytics for slow endpoints

---

## Post-Launch Monitoring

### Day 1

- [ ] Monitor Vercel Analytics for traffic/errors
- [ ] Check email inbox for form submissions
- [ ] Verify no critical errors in error tracking

### Week 1

- [ ] Check Lighthouse scores remain 90+
- [ ] Monitor Core Web Vitals
- [ ] Ensure form submissions reach inbox reliably
- [ ] Check mobile experience on real devices

### Ongoing

- [ ] Monthly Lighthouse audit
- [ ] Quarterly dependency security updates
- [ ] Monitor error rates in Vercel dashboard
- [ ] Backup form submissions and analytics data

---

## DNS Configuration (If Using Custom Domain)

### For `newgenwc.com`:

1. **If registrar supports NS records:**
   - Use Vercel nameservers (provided in dashboard)
   - Point domain to: `ns1.vercel-dns.com`, `ns2.vercel-dns.com`

2. **If using CNAME/A records:**
   - Add CNAME: `newgenwc.com` → `cname.vercel-dns.com`
   - Add A record for `www`: → Vercel's A record
   - Add MX records if you want email (optional)

3. **Verify Configuration:**
   - Allow 5-15 minutes for propagation
   - Check in Vercel dashboard when DNS shows "Valid"

---

## Deployment Rollback

If something goes wrong after deployment:

1. Go to Deployments tab in Vercel
2. Click previous stable deployment
3. Click "Redeploy" to rollback instantly

---

## Environment Setup for Production

Current configuration in `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "framework": "vite",
  "installCommand": "npm install"
}
```

This configuration:

- ✅ Builds with TypeScript compilation + Vite optimization
- ✅ Serves from `dist/` directory
- ✅ Caches static assets for 1 year (immutable)
- ✅ Sets security headers automatically
- ✅ Handles CSR (Client-Side Rendering) properly

No additional configuration needed!

---

## Success Criteria

✅ Deployment complete when:

- [ ] Repository connected to Vercel
- [ ] Build successful on first deploy
- [ ] Public URL accessible (https://[project].vercel.app)
- [ ] All content loads without errors
- [ ] Form submissions working
- [ ] Lighthouse scores 90+
- [ ] Custom domain configured (optional)
- [ ] SSL certificate active (green lock)

---

## Questions?

If you encounter issues:

1. Check Vercel Build Logs first
2. Compare production behavior to local `npm run dev`
3. Check browser DevTools Console for errors
4. Verify all files were pushed to GitHub

Good luck! 🚀
