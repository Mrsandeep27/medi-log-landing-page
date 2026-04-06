'use client'

import { motion } from 'motion/react'
import { FileX, Clock, Users, Building2 } from 'lucide-react'
import { type ReactNode } from 'react'

const problems: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <FileX className="h-6 w-6 text-red-500" />,
    title: 'Prescription kho gaya?',
    description: 'Doctor ne kya likha tha yaad nahi',
  },
  {
    icon: <Clock className="h-6 w-6 text-red-500" />,
    title: 'Dawai ka time bhool jaate ho',
    description: 'Miss ho jaati hai kabhi kabhi',
  },
  {
    icon: <Users className="h-6 w-6 text-red-500" />,
    title: "Mummy-Papa ka health record",
    description: 'Kahin bhi nahi milta ek jagah',
  },
  {
    icon: <Building2 className="h-6 w-6 text-red-500" />,
    title: 'Doctor ke paas jaao toh',
    description: 'Purani reports nahi hoti saath mein',
  },
]

export function Problems() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="gradient-underline visible">
              Yeh Problems Pehchaan Rahe Ho?
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-lg mt-4">
            Kya ye sab familiar lagta hai?
          </p>
        </motion.div>

        {/* Problem Cards Grid — 2 cols on mobile */}
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-6 mb-8 md:mb-12">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-3 md:p-6 group transition-all duration-300 border border-red-200 hover:shadow-[0_0_30px_rgba(239,68,68,0.1)] hover:border-red-300"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-red-50 flex items-center justify-center mb-2 md:mb-4">
                {problem.icon}
              </div>
              <h3 className="text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2">
                {problem.title}
              </h3>
              <p className="text-gray-500 text-xs md:text-base">{problem.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Summary with Gold Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm md:text-xl text-gray-900 font-semibold inline-block relative px-3 py-2">
            {/* Animated gold highlight bar behind text */}
            <motion.span
              className="absolute inset-0 rounded-lg bg-gradient-to-r from-yellow-500/0 via-yellow-200/50 to-yellow-500/0"
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              style={{ originX: 0 }}
            />
            <span className="relative z-10">
              MediFamily sab solve karta hai — aur woh bhi bina internet ke!
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
