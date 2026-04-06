import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://medi-log-landing-page.vercel.app'

export const metadata: Metadata = {
  title: 'MediFamily — Family Health Record App | Free Prescription Scanner & Medicine Reminder',
  description: 'India ka #1 family health record app. AI se prescription scan karo, dawai ka reminder lo, doctor ko QR se dikhao. Parivaar ka poora medical record ek app mein — 100% free, offline bhi chalega. Best health app for Indian families.',
  keywords: [
    // English — high search volume
    'health record app',
    'family health record app',
    'medical record app',
    'prescription scanner app',
    'medicine reminder app',
    'medicine reminder app india',
    'health record app india',
    'family medical records app',
    'AI prescription scanner',
    'lab report analyzer app',
    'doctor appointment app',
    'health card app',
    'offline health app',
    'free health app india',
    'ABHA health app',
    'ayushman bharat app',
    // Hindi — long-tail Indian searches
    'health record app hindi',
    'dawai yaad dilane wala app',
    'prescription save karne wala app',
    'medical record rakhne wala app',
    'parivaar health app',
    'family health app hindi',
    'doctor prescription scanner',
    'lab report samjhne wala app',
    'medicine reminder hindi',
    'health app offline',
    'free medical app india',
    // Hinglish — how Indians actually search
    'best health app for family',
    'prescription photo save app',
    'medical report store app',
    'family doctor record app',
    'medicine alarm app',
    'health checkup record app',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: {
      'hi-IN': '/',
      'en-IN': '/',
    },
  },
  openGraph: {
    title: 'MediFamily — Parivaar Ka Health Record App | Free & Offline',
    description: 'AI se prescription scan karo, dawai ka reminder lo, lab reports samjho, doctor ko QR se dikhao. 100% free, bina internet chalega. 500+ Indian families trust MediFamily.',
    type: 'website',
    locale: 'hi_IN',
    alternateLocale: ['en_IN'],
    url: siteUrl,
    siteName: 'MediFamily',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'MediFamily — India ka Family Health Record App',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediFamily — Parivaar Ka Health Record App',
    description: 'AI prescription scanner, medicine reminders, lab report analyzer — sab ek app mein. 100% free, offline works.',
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
  category: 'health',
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
    'content-language': 'hi, en',
    'audience': 'Indian families',
  },
}

function JsonLd() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        name: 'MediFamily',
        url: siteUrl,
        logo: `${siteUrl}/logo-gradient.jpeg`,
        description: 'AI-powered family health record app for Indian families. Free, offline-first, Hindi-supported.',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Bangalore',
          addressRegion: 'Karnataka',
          addressCountry: 'IN',
        },
      },
      {
        '@type': 'SoftwareApplication',
        name: 'MediFamily',
        alternateName: ['MediFamily App', 'MediFamily Health App', 'मेडीफैमिली'],
        description: 'India ka #1 family health record app. AI se prescription scan karo, dawai ka reminder lo, doctor ko QR se dikhao. Parivaar ka poora medical record ek app mein.',
        applicationCategory: 'HealthApplication',
        applicationSubCategory: 'Medical Records',
        operatingSystem: 'Web, Android, iOS',
        availableOnDevice: 'Mobile, Desktop',
        countriesSupported: 'IN',
        inLanguage: ['hi', 'en'],
        isAccessibleForFree: true,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '500',
          bestRating: '5',
          worstRating: '1',
        },
        featureList: [
          'AI Prescription Scanner',
          'Medicine Reminders',
          'AI Doctor Chat',
          'Lab Report Analyzer',
          'QR Code Doctor Sharing',
          'Family Health Profiles',
          'Offline Mode',
          'ABHA Health ID Integration',
          'Hindi Language Support',
        ],
      },
      {
        '@type': 'WebSite',
        name: 'MediFamily',
        url: siteUrl,
        inLanguage: ['hi', 'en'],
        potentialAction: {
          '@type': 'SearchAction',
          target: `${siteUrl}/?q={search_term_string}`,
          'query-input': 'required name=search_term_string',
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Kya MediFamily free hai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Haan, MediFamily 100% free hai. Koi hidden charges nahi, koi premium plan nahi. Sabhi features free mein available hain.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kya MediFamily bina internet ke kaam karta hai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Haan, MediFamily offline-first app hai. Aap bina internet ke apne health records dekh sakte hain, medicine reminders le sakte hain. Jab internet aaye, data automatically sync ho jaata hai.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kya mera health data safe hai?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Haan, aapka data aapke phone mein locally store hota hai. Cloud backup India (Mumbai) mein hota hai. Hum kisi ko aapka data nahi bechte. No ads, no tracking.',
            },
          },
          {
            '@type': 'Question',
            name: 'AI Doctor se medical advice le sakte hain?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'MediFamily ka AI Doctor sirf general health information deta hai. Yeh real doctor ki jagah nahi le sakta. Emergency mein 112 call karo ya nearest hospital jaao.',
            },
          },
        ],
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
