'use client'

import { motion } from 'motion/react'
import { Check } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative w-full py-24 px-4 bg-gradient-to-b from-blue-50 via-indigo-50 to-blue-50 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Aaj Hi Shuru Karo
        </h2>

        <p className="text-lg md:text-xl text-gray-700 mb-6">
          Bilkul Free! No credit card. No hidden charges. Sirf 30 seconds mein setup.
        </p>

        {/* Social proof */}
        <p className="text-blue-600 text-sm md:text-base mb-10">
          Join 500+ families already using MediFamily
        </p>

        {/* CTA Button with pulse rings */}
        <div className="relative inline-block">
          {/* 3 concentric pulse rings */}
          <div className="pulse-ring" style={{ animationDelay: '0s' }} />
          <div className="pulse-ring" style={{ animationDelay: '0.6s' }} />
          <div className="pulse-ring" style={{ animationDelay: '1.2s' }} />

          <motion.a
            href="https://medi--log.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            className="group relative inline-flex items-center justify-center min-w-64 py-5 text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-2xl shadow-blue-500/25 overflow-hidden"
          >
            {/* Shimmer overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-30 animate-shimmer" />
            <span className="relative flex items-center justify-center gap-2">
              MediFamily Open Karo
            </span>
          </motion.a>
        </div>

        {/* Benefit badges with spring animation */}
        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4 text-gray-800 text-sm md:text-base">
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.3 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1"
          >
            <Check className="h-4 w-4 text-green-500" /> Free forever for families
          </motion.span>
          <span className="hidden md:inline">•</span>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1"
          >
            <Check className="h-4 w-4 text-green-500" /> Works offline
          </motion.span>
          <span className="hidden md:inline">•</span>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.7 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-1"
          >
            <Check className="h-4 w-4 text-green-500" /> Made in India 🇮🇳
          </motion.span>
        </div>
      </motion.div>
    </section>
  )
}
