'use client'

import { motion } from 'motion/react'
import { Camera, Bell, Stethoscope, BarChart3, QrCode, WifiOff } from 'lucide-react'
import { type ReactNode } from 'react'

const features: {
  icon: ReactNode
  title: string
  description: string
  details: string
  accent: string
  glow: string
  badge?: string
  span: string
  bgColor: string
}[] = [
  {
    icon: <Camera className="h-8 w-8 md:h-10 md:w-10 text-blue-500" />,
    title: 'AI Prescription Scanner',
    description: 'Camera point karo, AI sab extract kar dega',
    details: "Doctor ka handwriting? Hindi mein likha? Koi problem nahi!",
    accent: 'bento-blue',
    glow: 'hover:shadow-blue-500/15',
    badge: 'Most Popular',
    span: 'md:col-span-2 md:row-span-2',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <Bell className="h-7 w-7 text-purple-500" />,
    title: 'Medicine Reminders',
    description: 'Time pe notification — kabhi miss nahi hoga',
    details: 'Khane se pehle ya baad? Sab set karo',
    accent: 'bento-purple',
    glow: 'hover:shadow-purple-500/15',
    span: '',
    bgColor: 'bg-purple-50',
  },
  {
    icon: <Stethoscope className="h-7 w-7 text-cyan-500" />,
    title: 'AI Doctor Chat',
    description: 'Symptoms batao, AI guide karega',
    details: 'OTC medicines, gharelu nuskhe sab batayega',
    accent: 'bento-cyan',
    glow: 'hover:shadow-cyan-500/15',
    span: '',
    bgColor: 'bg-cyan-50',
  },
  {
    icon: <BarChart3 className="h-7 w-7 text-pink-500" />,
    title: 'Lab Report Samjho',
    description: 'Report upload karo, AI samjhayega',
    details: 'Normal, High, Critical — simple bhasha mein',
    accent: 'bento-pink',
    glow: 'hover:shadow-pink-500/15',
    span: '',
    bgColor: 'bg-pink-50',
  },
  {
    icon: <QrCode className="h-7 w-7 text-indigo-500" />,
    title: 'QR Se Doctor Ko Share',
    description: 'QR scan karke doctor ko dikhao',
    details: 'Secure link, auto expire hoga',
    accent: 'bento-indigo',
    glow: 'hover:shadow-indigo-500/15',
    span: '',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: <WifiOff className="h-7 w-7 text-teal-500" />,
    title: 'Offline First',
    description: 'Internet Nahi? Koi baat nahi!',
    details: 'Village mein bhi kaam karega — tested!',
    accent: 'bento-teal',
    glow: 'hover:shadow-teal-500/15',
    span: 'md:col-span-2',
    bgColor: 'bg-teal-50',
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            <span className="gradient-underline visible">Yeh Sab Kar Sakta Hai MediFamily</span>
          </h2>
          <p className="text-gray-500 text-lg mt-8">
            6 powerful features — ek hi app mein
          </p>
        </motion.div>

        {/* Bento Grid — compact on mobile, bento on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              viewport={{ once: true, amount: 0.2 }}
              className={`glass glass-hover rounded-xl p-4 md:p-8 group transition-colors duration-200 relative overflow-hidden ${feature.accent} ${feature.span}`}
            >
              {/* Badge */}
              {feature.badge && (
                <div className="absolute top-2 right-2 md:top-4 md:right-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[10px] md:text-xs font-bold px-2 py-0.5 md:px-3 md:py-1 rounded-full">
                  {feature.badge}
                </div>
              )}

              {/* Icon */}
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl ${feature.bgColor} flex items-center justify-center mb-2 md:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>

              <h3 className={`text-sm md:text-xl font-bold text-gray-900 mb-1 md:mb-2 ${feature.span.includes('row-span-2') ? 'md:text-3xl' : ''}`}>
                {feature.title}
              </h3>
              <p className="text-gray-700 font-medium text-xs md:text-base mb-1 md:mb-2">
                {feature.description}
              </p>
              <p className="text-gray-500 text-[10px] md:text-sm hidden md:block">
                {feature.details}
              </p>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
