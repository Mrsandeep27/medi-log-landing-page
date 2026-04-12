import { AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-6 md:py-12 px-4 pb-20 md:pb-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-3 md:gap-5">
        <Image src="/logo.png" alt="MediFamily" width={140} height={40} className="h-8 md:h-14 w-auto" />

        <nav className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[11px] md:text-xs text-gray-400">
          <a href="https://app.medifamily.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">Open App</a>
          <span>·</span>
          <a href="#features" className="hover:text-blue-400">Features</a>
          <span>·</span>
          <Link href="/about" className="hover:text-blue-400">About</Link>
          <span>·</span>
          <Link href="/contact" className="hover:text-blue-400">Contact</Link>
          <span>·</span>
          <Link href="/privacy" className="hover:text-blue-400">Privacy</Link>
          <span>·</span>
          <Link href="/terms" className="hover:text-blue-400">Terms</Link>
        </nav>

        <p className="text-[10px] md:text-xs text-gray-500 max-w-md leading-snug flex items-start gap-1">
          <AlertTriangle className="h-3 w-3 flex-shrink-0 mt-0.5" />
          <span>MediFamily AI is for informational purposes only — not a substitute for professional medical advice. For emergencies, call 112.</span>
        </p>

        <p className="text-[10px] md:text-xs text-gray-600">
          &copy; 2025 MediFamily · Bangalore, India
        </p>
      </div>
    </footer>
  )
}
