'use client'

import { motion } from 'motion/react'
import { Heart, AlertTriangle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-8 md:py-12 px-4 pb-24 md:pb-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center gap-5"
        >
          {/* Brand */}
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="MediFamily" width={140} height={42} className="h-10 w-auto brightness-0 invert" />
          </div>

          <p className="text-gray-400 text-sm">
            Parivaar ki sehat, aapke haath mein
          </p>

          {/* Links row */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-gray-400">
            <a href="https://app.medilog.in" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">
              Open App
            </a>
            <span className="hidden sm:inline">·</span>
            <a href="#features" className="hover:text-blue-400 transition-colors">
              Features
            </a>
            <span className="hidden sm:inline">·</span>
            <Link href="/about" className="hover:text-blue-400 transition-colors">
              About
            </Link>
            <span className="hidden sm:inline">·</span>
            <Link href="/contact" className="hover:text-blue-400 transition-colors">
              Contact
            </Link>
          </div>

          {/* Legal links */}
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <Link href="/privacy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </Link>
            <span>·</span>
            <Link href="/terms" className="hover:text-blue-400 transition-colors">
              Terms of Service
            </Link>
          </div>

          {/* Medical Disclaimer */}
          <div className="max-w-2xl border border-gray-800 rounded-lg px-4 py-3 text-[11px] text-gray-500 leading-relaxed">
            <p className="flex items-center justify-center gap-1.5 mb-1 text-gray-400 font-medium">
              <AlertTriangle className="h-3 w-3" /> Medical Disclaimer
            </p>
            <p>
              MediFamily uses AI for informational purposes only. AI Doctor is NOT a substitute for professional medical advice. Always consult a qualified doctor for diagnosis and treatment. For emergencies, call 112 or visit the nearest hospital.
            </p>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-800 pt-4 mt-1 w-full">
            <p className="text-gray-500 text-xs">
              Made with <Heart className="h-3 w-3 inline text-red-500 fill-red-500" /> in Bangalore, India · © 2025 MediFamily
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
