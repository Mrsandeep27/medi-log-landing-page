import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — MediLog',
  description: 'How MediLog collects, stores, and protects your personal and health data. Offline-first, no tracking, data stored in India.',
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return children
}
