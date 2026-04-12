'use client'

import { motion } from 'motion/react'
import { Users, FolderOpen, Share2 } from 'lucide-react'
import { type ReactNode } from 'react'

const steps: { number: string; icon: ReactNode; title: string; description: string }[] = [
  {
    number: '1',
    icon: <Users className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
    title: 'Add Your Family',
    description: 'One account, everyone\'s health. Mummy, Papa, kids — all in one place.',
  },
  {
    number: '2',
    icon: <FolderOpen className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
    title: 'Store Everything',
    description: 'Prescriptions, lab reports, medicines, vitals. Scan with AI or add manually.',
  },
  {
    number: '3',
    icon: <Share2 className="h-5 w-5 md:h-6 md:w-6 text-blue-500" />,
    title: 'Access Anywhere',
    description: 'Offline, any device. Share with doctors via QR code. Always in your pocket.',
  },
]

export function HowItWorks() {
  return (
    <section className="py-12 md:py-24 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            <span className="gradient-underline visible">3 Steps. That&apos;s It.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 gap-3 md:gap-8 relative">
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
              <div className="relative mb-6 md:mb-8">
                <div className="relative w-12 h-12 md:w-20 md:h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20">
                  <span className="text-white text-xl md:text-3xl font-bold">{step.number}</span>
                </div>
              </div>
              <div className="glass rounded-xl p-3 md:p-6 w-full text-center border-l-2 md:border-l-4 border-l-indigo-500">
                <span className="mb-1 md:mb-3 flex justify-center">{step.icon}</span>
                <h3 className="text-xs md:text-xl font-bold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                <p className="text-gray-600 text-[10px] md:text-base">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-14"
        >
          <a
            href="https://app.medifamily.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-bold text-lg rounded-xl transition-colors shadow-lg shadow-blue-500/25"
          >
            Start Now — It&apos;s Free
          </a>
        </motion.div>
      </div>
    </section>
  )
}
