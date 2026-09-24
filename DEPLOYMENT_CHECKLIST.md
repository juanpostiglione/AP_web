# Next.js Migration Setup Checklist

This file guides you through the final setup steps to deploy your Next.js site to Vercel.

## ✅ Pre-Deployment Checklist

### 1. Local Testing
- [ ] Run `npm install` to install all dependencies
- [ ] Run `npm run dev` to start the development server
- [ ] Test all pages:
  - [ ] Home page (/)
  - [ ] About page (/nosotros)
  - [ ] Contact page (/contacto)
  - [ ] Legacy HTML pages (e.g., /chesterton)
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Test mobile menu toggle
- [ ] Test form submission on contact page
- [ ] Verify animations load (GSAP)
- [ ] Test scroll behavior and navigation highlighting

### 2. Build Testing
- [ ] Run `npm run build` to create production build
- [ ] Run `npm start` to test production build locally
- [ ] Verify no build errors or warnings

### 3. Git Repository
- [ ] Commit all changes: `git add .`
- [ ] Commit with message: `git commit -m "Convert Astro to Next.js for Vercel deployment"`
- [ ] Push to GitHub: `git push origin main`

### 4. Vercel Deployment

#### Option A: Using Vercel Dashboard (Recommended)
1. [ ] Go to https://vercel.com/dashboard
2. [ ] Sign in with GitHub account
3. [ ] Click "Add New..." → "Project"
4. [ ] Select your GitHub repository (juanpostiglione/AP_web)
5. [ ] Click "Import"
6. [ ] Vercel will auto-detect Next.js configuration
7. [ ] Click "Deploy"
8. [ ] Wait for deployment to complete
9. [ ] Visit your live site at `ap-web.vercel.app` (or your custom domain)

#### Option B: Using Vercel CLI
1. [ ] Install Vercel CLI: `npm install -g vercel`
2. [ ] Run: `vercel`
3. [ ] Follow interactive prompts
4. [ ] Select "Next.js" when asked about framework
5. [ ] Deploy

### 5. Post-Deployment Verification
- [ ] Visit your Vercel deployment URL
- [ ] Verify all pages load correctly
- [ ] Test responsive design on mobile device
- [ ] Test contact form (ensure EmailJS is configured)
- [ ] Check browser console for any errors
- [ ] Verify images load correctly
- [ ] Verify animations work (open DevTools Performance tab)

### 6. Custom Domain (Optional)
- [ ] In Vercel Dashboard, go to Project Settings
- [ ] Click "Domains"
- [ ] Add your custom domain
- [ ] Follow DNS configuration instructions
- [ ] Wait for DNS propagation (can take 24-48 hours)

### 7. Environment Variables (If Needed)
- [ ] In Vercel Dashboard, go to Settings → Environment Variables
- [ ] Add any environment variables from `.env.example`
- [ ] Redeploy for changes to take effect

## 🔄 Automatic Deployments

Once connected to GitHub, every push to `main` branch will:
1. Trigger automatic build on Vercel
2. Run tests (if configured)
3. Deploy to production if build succeeds
4. Update your live site

## 🐛 Troubleshooting

### Build Fails on Vercel
- Check build logs in Vercel Dashboard
- Ensure `.vercelignore` doesn't exclude necessary files
- Verify Node.js version is 18+ in Vercel settings

### Pages Not Loading
- Check that public assets are accessible
- Verify image paths start with `/`
- Check console for 404 errors

### Styling Looks Broken
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check that Tailwind CSS is compiled
- Verify imports in `app/globals.css`

### Form Not Sending Emails
- Verify EmailJS service ID and template ID
- Check EmailJS public key in contacto component
- Test locally with `npm run dev` first

## 📊 Performance Monitoring

### Vercel Analytics
1. Go to Vercel Dashboard
2. Select your project
3. Click "Analytics" tab
4. Monitor:
   - Response times
   - Page load times
   - Core Web Vitals
   - Error rates

### Google PageSpeed Insights
1. Visit https://pagespeed.web.dev/
2. Enter your Vercel URL
3. Check Mobile and Desktop scores
4. Follow recommendations for optimization

## 🔐 Security Checklist
- [ ] No sensitive data in `.env` file (use `.env.local`)
- [ ] Review files excluded in `.vercelignore`
- [ ] Ensure `.env.local` is in `.gitignore`
- [ ] Use environment variables for API keys
- [ ] Keep dependencies updated: `npm update`

## 📝 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm start               # Run production build locally

# Maintenance
npm update              # Update dependencies
npm audit               # Check security vulnerabilities
npm audit fix           # Auto-fix vulnerabilities
```

## 📚 Resources
- Vercel Docs: https://vercel.com/docs
- Next.js Docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- GSAP: https://gsap.com/docs/

## ✨ Next Steps

After successful deployment:
1. Update your DNS records to point to Vercel (if using custom domain)
2. Set up monitoring and alerts in Vercel Dashboard
3. Configure CI/CD for automated testing (optional)
4. Plan future features and improvements
5. Monitor analytics and user feedback

---

**Deployment complete!** 🎉 Your site is now running on Vercel with continuous deployment from GitHub.
