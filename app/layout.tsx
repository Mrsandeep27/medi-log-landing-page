import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MediLog — Parivaar Ka Health Record App | Free, Offline, AI-Powered',
  description: 'Apne poore parivaar ka health record ek app mein. AI se prescription scan karo, medicine reminders lo, doctor se QR se share karo. 100% free, works offline.',
  generator: 'v0.app',
  openGraph: {
    title: 'MediLog — Parivaar Ka Health Record App',
    description: 'Offline-first family health records with AI prescription scanning',
    type: 'website',
    locale: 'hi_IN',
  },
  icons: {
    icon: '/icon.svg',
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="hi-IN">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
