'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image src="/logo.png" alt="MediFamily" width={200} height={48} className="h-[44px] md:h-[48px] w-auto" />
        </a>
        <a
          href="https://app.medifamily.in"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white text-sm font-semibold rounded-lg transition-all shadow-md hover:shadow-lg hover:shadow-blue-500/25"
        >
          Open MediFamily
        </a>
      </div>
    </nav>
  )
}
