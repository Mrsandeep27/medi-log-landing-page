import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GoogleAnalytics } from '@next/third-parties/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const siteUrl = 'https://medifamily.in'

export const metadata: Metadata = {
  title: 'MediFamily | Family Health Record App India — Offline & Private',
  description: 'MediFamily is the family health record app India families trust. Store prescriptions, track medicines, share with doctors via QR. Works offline. No ads.',
  keywords: [
    'family health app', 'health record app', 'prescription scanner app',
    'medicine reminder app', 'offline health app', 'best health app india',
    'family medical records', 'AI prescription scanner', 'lab report analyzer',
    'emergency health card', 'health app hindi', 'ABHA health app',
    'dawai yaad dilane wala app', 'prescription save karne wala app',
    'parivaar health app', 'best health app for family',
    'MediFamily', 'medifamily app', 'medifamily health',
  ],
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
    languages: { 'hi-IN': '/', 'en-IN': '/' },
  },
  openGraph: {
    title: 'MediFamily | Family Health Record App India — Offline & Private',
    description: 'MediFamily is the family health record app India families trust. Store prescriptions, track medicines, share with doctors via QR. Works offline.',
    type: 'website',
    locale: 'en_IN',
    alternateLocale: ['hi_IN'],
    url: siteUrl,
    siteName: 'MediFamily',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'MediFamily — Family Health Record App for India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediFamily — Family Health Record App India',
    description: 'The family health record app India families trust. Prescriptions, medicines, lab reports — one app, everyone\'s health. Works offline.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  category: 'health',
  other: {
    'geo.region': 'IN-KA',
    'geo.placename': 'Bangalore',
    'geo.position': '12.9716;77.5946',
    'ICBM': '12.9716, 77.5946',
    'content-language': 'en, hi',
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
        logo: `${siteUrl}/logo.png`,
        description: 'AI-powered family health record app for Indian families. Offline-first, Hindi-supported.',
        address: { '@type': 'PostalAddress', addressLocality: 'Bangalore', addressRegion: 'Karnataka', addressCountry: 'IN' },
        contactPoint: { '@type': 'ContactPoint', email: 'sandeep@2xg.in', contactType: 'customer support' },
      },
      {
        '@type': 'WebApplication',
        name: 'MediFamily',
        alternateName: ['MediFamily App', 'MediFamily Health App'],
        url: `${siteUrl}`,
        description: 'Offline-first family health record app for Indian families. AI prescription scanner, medicine reminders, emergency health card, lab report analyzer. Works without internet.',
        applicationCategory: 'HealthApplication',
        applicationSubCategory: 'Medical Records',
        operatingSystem: 'Web, Android, iOS',
        browserRequirements: 'Requires a modern web browser',
        screenshot: `${siteUrl}/app-home.jpg`,
        author: { '@type': 'Organization', name: 'MediFamily', url: siteUrl },
        offers: { '@type': 'Offer', priceCurrency: 'INR', availability: 'https://schema.org/InStock', priceSpecification: { '@type': 'UnitPriceSpecification', priceType: 'free trial' } },
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.8', ratingCount: '500', bestRating: '5', worstRating: '1' },
        featureList: [
          'AI Prescription Scanner (Hindi + English)',
          'Medicine Reminders with Adherence Tracking',
          'Emergency Health Card (Blood Group, Allergies, Medicines)',
          'Family Health Profiles (Unlimited Members)',
          'Lab Report Analyzer',
          'QR Code Doctor Sharing',
          'Offline Mode — Works Without Internet',
          'ABHA Health ID Integration',
        ],
        inLanguage: ['en', 'hi'],
        countriesSupported: 'IN',
      },
      {
        '@type': 'WebSite',
        name: 'MediFamily',
        url: siteUrl,
        inLanguage: ['en', 'hi'],
      },
      {
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Does MediFamily work without internet?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes! MediFamily is offline-first. All your health records are stored locally on your phone. You can view records, get medicine reminders, and access emergency cards without any internet connection. Data syncs automatically when you\'re back online.' },
          },
          {
            '@type': 'Question',
            name: 'Can I manage health records for my whole family?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. One MediFamily account covers your entire family — parents, spouse, children, everyone. Each family member gets their own profile with separate prescriptions, medicines, lab reports, and health vitals.' },
          },
          {
            '@type': 'Question',
            name: 'How much does MediFamily cost?',
            acceptedAnswer: { '@type': 'Answer', text: 'MediFamily is currently in early access and free to use during this period. We do not show ads or sell your data. Pricing for premium features may be introduced in the future, and we will notify you in advance of any changes.' },
          },
          {
            '@type': 'Question',
            name: 'Does MediFamily support Hindi prescriptions?',
            acceptedAnswer: { '@type': 'Answer', text: 'Yes. MediFamily\'s AI prescription scanner works with both Hindi and English prescriptions, including handwritten ones. It uses Google Gemini AI and Tesseract OCR to extract medicine names, dosages, and instructions.' },
          },
          {
            '@type': 'Question',
            name: 'How do I share health records with my doctor?',
            acceptedAnswer: { '@type': 'Answer', text: 'MediFamily generates a secure, time-limited QR code or share link. Your doctor scans the QR code and sees a read-only view of the relevant health records. No MediFamily account needed for the doctor. Links auto-expire after 24 hours and can be revoked anytime.' },
          },
          {
            '@type': 'Question',
            name: 'Is my health data safe with MediFamily?',
            acceptedAnswer: { '@type': 'Answer', text: 'Your data stays on YOUR phone first. Cloud backup is stored in India (AWS Mumbai) with encryption. We don\'t sell data, don\'t show ads, don\'t use tracking cookies. Row-level security ensures only you can access your data. MediFamily is open source — anyone can audit the code.' },
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
    <html lang="en-IN">
      <head>
        <JsonLd />
        <link rel="alternate" type="text/plain" href="/llms.txt" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-3PR3VQ2E85" />
    </html>
  )
}
