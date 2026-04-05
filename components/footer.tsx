'use client'

import { motion } from 'motion/react'
import { Heart } from 'lucide-react'
import Image from 'next/image'

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 md:py-12 px-4 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-4"
        >
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src="/logo-gradient.jpeg" alt="MediLog" width={140} height={42} className="h-10 w-auto brightness-0 invert" />
          </div>

          <p className="text-gray-400 text-sm">
            Parivaar ki sehat, aapke haath mein
          </p>

          {/* Links row */}
          <div className="flex items-center gap-4 text-xs text-gray-400">
            <a href="https://medi--log.vercel.app" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              Open App
            </a>
            <span>·</span>
            <a href="#features" className="hover:text-blue-600 transition-colors">
              Features
            </a>
            <span>·</span>
            <a href="https://github.com/Mrsandeep27/MEDILOG" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
              GitHub
            </a>
            <span>·</span>
            <a href="mailto:hello@medi-log.in" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-4 mt-2 w-full">
            <p className="text-gray-400 text-xs">
              Made with <Heart className="h-3 w-3 inline text-red-500 fill-red-500" /> in Bangalore, India 🇮🇳 · © 2025 MediLog
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
