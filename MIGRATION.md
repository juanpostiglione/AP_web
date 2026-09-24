# A.P Asociados - Next.js Migration

This project has been successfully converted from Astro to Next.js for Vercel deployment.

## 📋 What Changed

### Project Structure
```
Old (Astro):
- src/pages/
- src/components/
- src/layouts/

New (Next.js):
- app/
- app/components/
- app/[legacy]/  (for legacy HTML files)
```

### Key Files
- **app/layout.tsx** - Root layout component (replaces BaseLayout.astro)
- **app/page.tsx** - Home page (replaces pages/index.astro)
- **app/nosotros/page.tsx** - About page
- **app/contacto/page.tsx** - Contact page
- **app/[legacy]/page.tsx** - Dynamic route for legacy HTML files
- **app/components/** - React components (Header, Footer, ClientScript)
- **next.config.ts** - Next.js configuration
- **tailwind.config.js** - Updated for Next.js app directory

### Styling
- Tailwind CSS configuration updated for Next.js
- All existing CSS and Tailwind styles preserved
- PostCSS configuration maintained

### JavaScript Functionality
- GSAP animations loaded from public/vendor/
- Scroll-based navigation and animations
- Mobile menu toggle functionality
- Email form handled with EmailJS (contacto page)
- Back-to-top button
- All original web.js functionality integrated

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Development
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the application.

### 3. Build for Production
```bash
npm run build
npm start
```

## 🌐 Deployment to Vercel

### Option 1: Automatic Deployment (Recommended)
1. Push this repository to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure everything
6. Click Deploy

### Option 2: Using Vercel CLI
```bash
npm install -g vercel
vercel
```

## 📝 Configuration

### Environment Variables
1. Copy `.env.example` to `.env.local`
2. Update with your configuration values
3. For EmailJS functionality, update the API keys in the contacto page component

### Legacy HTML Files
Legacy HTML files (e.g., `chesterton.html`, `orange-technologies.html`) are served via the dynamic route handler at `app/[legacy]/page.tsx`. These files are served as-is from the root directory.

## 🔗 Routes

- `/` - Home page
- `/nosotros` - About page
- `/contacto` - Contact page
- `/{legacy-page-name}` - Any legacy HTML files (served as static HTML)

## 📦 Dependencies

### Production
- `next` - Next.js framework
- `react` - React library
- `react-dom` - React DOM
- `gsap` - Animation library

### Development
- `typescript` - TypeScript support
- `tailwindcss` - Utility-first CSS
- `postcss` - CSS processing
- `autoprefixer` - CSS vendor prefixes

## ✅ What's Been Converted

- [x] Astro components → React components
- [x] Astro layouts → Next.js layout.tsx
- [x] Astro pages → Next.js pages
- [x] Tailwind CSS configuration
- [x] JavaScript functionality (GSAP, scroll events, etc.)
- [x] Email form handling (contacto page)
- [x] Mobile menu toggle
- [x] Styling and CSS imports
- [x] Image handling and paths
- [x] Dynamic legacy HTML routes

## 🔄 Migration Notes

- All image paths have been updated to use `/public/images/`
- Component-based architecture allows for easier future maintenance
- Server-side rendering with React Server Components by default
- Static generation with ISR (Incremental Static Regeneration) where applicable
- All GSAP animations and scroll-based interactions preserved

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [GSAP Documentation](https://gsap.com/docs/)

## 🛠 Troubleshooting

### Build Issues
- Ensure Node.js version 18+ is installed
- Clear `.next` folder: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

### Image Not Loading
- Check that images exist in `public/images/`
- Image paths should start with `/` for public assets

### Styling Issues
- Ensure Tailwind CSS is properly imported in `app/globals.css`
- Check that CSS files are in the public folder for CSS imports

## 📞 Support

For issues with the migration or deployment, refer to:
- Next.js Documentation: https://nextjs.org/docs
- Vercel Status: https://www.vercel-status.com/
