'use client'

import { motion } from 'motion/react'
import { X, Check } from 'lucide-react'

const comparisons = [
  {
    old: 'Prescriptions drawer mein kho jaate hain',
    new: 'AI scan karke save — searchable',
  },
  {
    old: 'Dawai bhool jaate ho',
    new: 'Push notification pe time pe',
  },
  {
    old: 'Doctor ko WhatsApp pe reports bhejna',
    new: 'QR code se secure sharing',
  },
  {
    old: 'Internet chahiye har cheez ke liye',
    new: 'Offline kaam karta hai',
  },
  {
    old: 'Alag-alag app family ke liye',
    new: 'Ek app mein poora parivaar',
  },
]

export function Comparison() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="gradient-underline visible">MediLog vs Purana Tarika</span>
          </h2>
        </motion.div>

        {/* Comparison — compact on mobile */}
        <div className="space-y-2 md:space-y-3">
          {comparisons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="glass rounded-lg p-3 md:p-0 md:bg-transparent md:backdrop-blur-0 md:border-0 group"
            >
              {/* Mobile: stacked compact | Desktop: side by side */}
              <div className="md:grid md:grid-cols-2 md:gap-6">
                <div className="flex items-center gap-2 mb-1 md:mb-0 md:bg-red-50 md:border md:border-red-200 md:rounded-lg md:px-4 md:py-4">
                  <X className="h-4 w-4 text-red-500 flex-shrink-0" />
                  <p className="text-gray-500 text-xs md:text-base line-through decoration-red-400/40">{item.old}</p>
                </div>
                <div className="flex items-center gap-2 relative md:bg-blue-50 md:border md:border-blue-200 md:rounded-lg md:px-4 md:py-4 overflow-hidden">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <p className="text-gray-900 font-medium text-xs md:text-base">{item.new}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-6 md:mt-12 glass rounded-xl p-4 md:p-8 text-center border-l-4 border-l-indigo-500"
        >
          <p className="text-gray-900 text-sm md:text-xl font-semibold">
            MediLog = Parivaar ki health, aapke haath mein
          </p>
        </motion.div>
      </div>
    </section>
  )
}
