import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — MediFamily',
  description: 'Terms and conditions for using MediFamily, the free offline-first family health record app.',
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children
}
