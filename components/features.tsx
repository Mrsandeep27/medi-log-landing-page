'use client'

import { motion } from 'motion/react'
import { Users, WifiOff, Heart, Bell } from 'lucide-react'
import { type ReactNode } from 'react'

const features: {
  icon: ReactNode
  title: string
  description: string
  accent: string
  bgColor: string
}[] = [
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    title: 'Family-First',
    description: 'One login. Papa\'s BP, Maa\'s sugar, your reports, kids\' vaccinations — everyone in one place.',
    accent: 'bento-blue',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <WifiOff className="h-7 w-7 text-teal-500" />,
    title: 'Works Offline',
    description: 'No internet? No problem. Your records are always on your phone. Syncs when you\'re back online.',
    accent: 'bento-teal',
    bgColor: 'bg-teal-50',
  },
  {
    icon: <Heart className="h-7 w-7 text-red-500" />,
    title: 'Emergency Card',
    description: 'Blood group, allergies, medicines — one tap, shareable via WhatsApp. Could save a life.',
    accent: 'bento-pink',
    bgColor: 'bg-red-50',
  },
  {
    icon: <Bell className="h-7 w-7 text-purple-500" />,
    title: 'Medicine Reminders',
    description: 'Never miss a dose. Push notifications on time. Streaks + adherence tracking for the whole family.',
    accent: 'bento-purple',
    bgColor: 'bg-purple-50',
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            <span className="gradient-underline visible">Why Families Choose MediFamily</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`glass glass-hover rounded-xl p-6 md:p-8 transition-colors duration-200 ${feature.accent}`}
            >
              <div className={`w-12 h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-4`}>
                {feature.icon}
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
