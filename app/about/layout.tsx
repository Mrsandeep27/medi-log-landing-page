import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About — MediFamily',
  description: 'MediFamily is India\'s first offline-first, AI-powered family health record manager. Built for 65Cr+ Indians without reliable internet.',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
