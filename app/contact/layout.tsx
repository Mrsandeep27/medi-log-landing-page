import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact — MediFamily',
  description: 'Get in touch with the MediFamily team. Bug reports, feature requests, privacy inquiries, and partnerships.',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
