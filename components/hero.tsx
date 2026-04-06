'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { Shield, Wifi } from 'lucide-react'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export function Hero() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-[100dvh] aurora-bg relative overflow-hidden pt-16 md:pt-20 pb-8 px-4">
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <motion.div
        className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Phone Mockup */}
        <motion.div variants={itemVariants} className="flex justify-center relative order-first md:order-last">
          <div className="relative w-44 md:w-full md:max-w-sm">
            <div className="relative bg-gray-900 rounded-[1.8rem] md:rounded-[2.5rem] border-4 md:border-[6px] border-gray-700 shadow-2xl overflow-hidden aspect-[9/18]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-xl md:rounded-b-2xl w-20 md:w-32 h-3 md:h-5 z-10" />
              <Image
                src="/app-home.jpg"
                alt="MediFamily App — Family health record dashboard showing prescriptions, reminders, and family members"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 176px, 384px"
              />
            </div>
          </div>
        </motion.div>

        {/* Left Content */}
        <div className="space-y-4 md:space-y-8 text-center md:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent bg-[size:200%] animate-gradient-text">
              Apne Poore Parivaar Ka Health Record
            </span>
            <br />
            <span className="text-gray-900 text-2xl sm:text-3xl md:text-5xl">— Ek App Mein</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-sm md:text-xl text-gray-600 leading-relaxed">
            AI se prescription scan karo, medicine reminders lo, doctor se QR se share karo. Bilkul FREE.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <a
              href="https://medi--log.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl text-center shadow-lg shadow-blue-500/25 transition-all overflow-hidden"
            >
              <span className="relative text-base md:text-lg">Abhi Try Karo →</span>
            </a>
            <button
              onClick={scrollToFeatures}
              className="px-6 py-3 md:px-8 md:py-4 border-2 border-indigo-500/50 text-indigo-600 hover:bg-indigo-500/10 font-semibold rounded-xl transition-colors"
            >
              Demo Dekho ↓
            </button>
          </motion.div>

          {/* Trust badges */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-2 md:gap-3">
            {[
              { icon: <Shield className="h-4 w-4" />, text: 'Private' },
              { icon: <Wifi className="h-4 w-4" />, text: 'Offline' },
              { icon: null, flag: '🇮🇳', text: 'India' },
            ].map((badge) => (
              <div key={badge.text} className="glass rounded-lg md:rounded-xl p-2 md:p-3 text-center">
                <p className="text-xs md:text-sm text-gray-700 font-medium flex items-center justify-center gap-1.5">
                  {badge.icon ?? badge.flag} {badge.text}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path fill="#ffffff" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
