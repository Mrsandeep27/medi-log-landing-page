'use client'

import { Building2, Star, Shield, Gift, Stethoscope, Smartphone, ShieldCheck } from 'lucide-react'
import { type ReactNode } from 'react'

const trustItems: { icon: ReactNode; text: string }[] = [
  { icon: <Building2 className="h-4 w-4" />, text: '500+ Families Trust MediFamily' },
  { icon: <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />, text: '4.8 Rating' },
  { icon: <Shield className="h-4 w-4" />, text: 'Data Sirf Aapke Phone Mein' },
  { icon: null, text: 'Made in India, For India' },
  { icon: <Gift className="h-4 w-4" />, text: '100% Free — No Hidden Charges' },
  { icon: <Stethoscope className="h-4 w-4" />, text: 'Doctor Approved' },
  { icon: <Smartphone className="h-4 w-4" />, text: 'Works Without Internet' },
  { icon: <ShieldCheck className="h-4 w-4" />, text: 'No Data Sold Ever' },
]

export function TrustBar() {
  const doubled = [...trustItems, ...trustItems]

  return (
    <section className="bg-blue-50/80 py-6 overflow-hidden relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-blue-50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-blue-50 to-transparent z-10 pointer-events-none" />

      <div className="flex gap-4 animate-marquee w-max">
        {doubled.map((item, i) => (
          <div
            key={i}
            className="glass rounded-xl px-6 py-3 whitespace-nowrap flex items-center gap-2 hover:border-blue-400/40 transition-all"
          >
            <span className="text-blue-600">{item.icon ?? '🇮🇳'}</span>
            <span className="text-sm font-medium text-gray-700">{item.text}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
