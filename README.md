# MediLog Landing Page

Marketing landing page for **MediLog** — a free, offline-first, AI-powered family health record app built for India.

## Live Demo

[https://medi-log-landing-page.vercel.app](https://medi-log-landing-page.vercel.app)

## Features

- Light, modern design with smooth animations (Framer Motion)
- Fully responsive — optimized for mobile and desktop
- Sections: Hero, Trust Bar, Problems, Features (Bento Grid), How It Works, Testimonials, Comparison, Final CTA, Footer
- Built with Next.js 16, Tailwind CSS, and TypeScript

## Tech Stack

| Tech | Purpose |
|------|---------|
| [Next.js 16](https://nextjs.org/) | React framework (App Router, Turbopack) |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first styling |
| [Framer Motion](https://motion.dev/) | Animations |
| [Lucide React](https://lucide.dev/) | Icons |
| [shadcn/ui](https://ui.shadcn.com/) | UI components |

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles & animations
├── components/
│   ├── navbar.tsx        # Fixed navigation bar
│   ├── hero.tsx          # Hero section with phone mockup
│   ├── trust-bar.tsx     # Scrolling trust badges
│   ├── problems.tsx      # Problem cards
│   ├── features.tsx      # Bento grid features
│   ├── how-it-works.tsx  # 3-step guide
│   ├── testimonials.tsx  # User testimonials
│   ├── comparison.tsx    # Old vs New comparison
│   ├── final-cta.tsx     # Call to action
│   ├── footer.tsx        # Footer
│   ├── floating-cta.tsx  # Mobile floating CTA
│   └── ui/              # shadcn/ui components
└── public/              # Static assets
```

## Related

- [MediLog App](https://medi--log.vercel.app) — The main MediLog application
- [MediLog App Repo](https://github.com/Mrsandeep27/MEDILOG) — Source code for the app

## License

MIT
