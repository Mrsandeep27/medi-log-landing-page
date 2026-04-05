'use client'

import { motion } from 'motion/react'
import { Mail, Users, Camera } from 'lucide-react'
import { type ReactNode } from 'react'

const steps: { number: string; icon: ReactNode; title: string; description: string }[] = [
  {
    number: '1',
    icon: <Mail className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
    title: 'Sign Up Karo',
    description: 'Email se free account banao — 30 seconds',
  },
  {
    number: '2',
    icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
    title: 'Family Add Karo',
    description: 'Mummy, Papa, Bhai, Behen — sabka naam daalo',
  },
  {
    number: '3',
    icon: <Camera className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
    title: 'Prescription Scan Karo',
    description: 'Camera open karo, photo lo, AI baaki sambhaal lega',
  },
]

export function HowItWorks() {
  return (
    <section className="py-12 md:py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white relative">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-2 md:mb-4">
            <span className="gradient-underline visible">Sirf 3 Steps Mein Shuru</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg mt-4 md:mt-8">Bilkul simple aur fast</p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-3 gap-3 md:gap-8 relative">
          {/* Animated connecting line */}
          <div className="hidden md:block absolute top-[72px] left-[15%] right-[15%] h-0.5">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 origin-left"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="relative flex flex-col items-center"
            >
              {/* Step circle with glow */}
              <div className="relative mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full blur-lg opacity-30" />
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-xl shadow-blue-500/25"
                >
                  <span className="text-white text-xl md:text-3xl font-bold">{step.number}</span>
                </motion.div>
              </div>

              {/* Step content */}
              <div className="glass rounded-xl p-3 md:p-6 w-full text-center border-l-2 md:border-l-4 border-l-indigo-500 hover:border-l-blue-400 transition-all">
                <span className="mb-1 md:mb-3 flex justify-center">{step.icon}</span>
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                <p className="text-gray-500 text-[10px] md:text-base">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <a
            href="https://medi--log.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 animate-shimmer" />
            <span className="relative">Abhi Free Mein Shuru Karo →</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
