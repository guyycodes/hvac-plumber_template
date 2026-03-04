# ProFlow Mechanical — HVAC & Plumbing Template

A modern, production-ready website template for HVAC and plumbing businesses. Built with React, Vite, and Tailwind CSS. Deploys to Netlify with edge functions for Google Reviews integration.

## Tech Stack

- **React 18** — Component-based UI with lazy-loaded pages
- **Vite 5** — Fast build tooling with optimized chunking
- **Tailwind CSS 3** — Utility-first styling with custom blue/orange theme
- **React Router 6** — Client-side routing with SPA fallback
- **Lucide React** — Consistent icon set
- **Netlify** — Edge functions, headers, redirects, and caching
- **Widgetfied** — Booking, Estimates, and Client Portal widgets
- **PostHog + Google Analytics** — Analytics providers (opt-in via env vars)

## Features

- **Responsive Design** — Mobile-first, works on all screen sizes
- **SEO Optimized** — Structured data (JSON-LD), meta tags, sitemap, robots.txt
- **Performance** — Lazy-loaded pages, optimized images, code splitting
- **Scroll Animations** — Intersection Observer-based fade/slide animations
- **Google Reviews** — Live reviews via Netlify edge function + Google Places API
- **Booking Widget** — Integrated Widgetfied booking system
- **Estimate Widget** — Free estimate request widget
- **Client Portal** — Appointment lookup via Job Portal widget
- **Contact Form** — Service request form (connect your form handler)
- **24/7 Emergency** — Prominent emergency contact throughout

## Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, services overview, social proof, CTAs |
| Services | `/services` | Detailed service pages with images and pricing |
| About | `/about` | Company story, credentials, values, timeline |
| Contact | `/contact` | Service request form, contact info, map |

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Configuration

### Widgetfied Widgets
Update the `TENANT_ID` in `src/hooks/useWidgetfied.jsx` with your Widgetfied tenant ID.

### Google Reviews (Netlify Edge Function)
Set these environment variables in your Netlify dashboard:
- `GOOGLE_PLACES_API_KEY` — Your Google Places API key
- `GOOGLE_PLACE_ID` — Your Google Place ID

### Analytics (Optional)
Set environment variables:
- `VITE_GA_MEASUREMENT_ID` — Google Analytics 4 measurement ID
- `VITE_POSTHOG_API_KEY` — PostHog project API key
- `VITE_POSTHOG_HOST` — PostHog instance URL (defaults to us.i.posthog.com)

### Business Info
Update these files with your business details:
- `index.html` — Meta tags, structured data, business name/phone/email
- `src/components/Header.jsx` — Phone, email, nav links
- `src/components/Footer.jsx` — All contact info, social links, map embed
- `src/pages/Contact.jsx` — Contact details, map embed
- `public/manifest.json` — PWA manifest
- `public/robots.txt` — Sitemap URL
- `public/sitemap.xml` — Page URLs

## Deployment (Netlify)

1. Push to GitHub
2. Connect repo to Netlify
3. Build settings are auto-detected from `netlify.toml`
4. Add environment variables in Netlify dashboard
5. Deploy

## Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `accent-blue` | `#1E40AF` | Primary brand color, links, buttons |
| `accent-orange` | `#F97316` | Accent highlights, CTAs, emergency |
| `accent-sky` | `#0EA5E9` | Light accent |
| `near-black` | `#0F172A` | Dark backgrounds |
| `off-white` | `#F8FAFC` | Light backgrounds |

## License

MIT — Free to use for commercial and personal projects.
