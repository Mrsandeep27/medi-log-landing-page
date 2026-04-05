import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://medi-log-landing-page.vercel.app'

export const metadata: Metadata = {
  title: 'MediLog — Parivaar Ka Health Record App | Free, Offline, AI-Powered',
  description: 'Apne poore parivaar ka health record ek app mein. AI se prescription scan karo, medicine reminders lo, doctor se QR se share karo. 100% free, works offline.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'MediLog — Parivaar Ka Health Record App',
    description: 'Offline-first family health records with AI prescription scanning. 100% free, works offline.',
    type: 'website',
    locale: 'hi_IN',
    url: siteUrl,
    siteName: 'MediLog',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MediLog — Family Health Record App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediLog — Parivaar Ka Health Record App',
    description: 'Offline-first family health records with AI prescription scanning. 100% free.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'MediLog',
        url: siteUrl,
        logo: `${siteUrl}/logo-gradient.jpeg`,
        description: 'AI-powered family health record app for India',
        sameAs: ['https://github.com/Mrsandeep27/MEDILOG'],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'MediLog',
        description: 'Apne poore parivaar ka health record ek app mein. AI se prescription scan karo, medicine reminders lo, doctor se QR se share karo.',
        applicationCategory: 'HealthApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '500',
          bestRating: '5',
        },
      },
      {
        '@type': 'WebSite',
        name: 'MediLog',
        url: siteUrl,
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi-IN">
      <head>
        <JsonLd />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
