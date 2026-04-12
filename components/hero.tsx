import Image from 'next/image'
import { Shield, Wifi } from 'lucide-react'
import { HeroClient } from './hero-client'

export function Hero() {
  return (
    <section className="min-h-[100dvh] aurora-bg relative overflow-hidden pt-16 md:pt-20 pb-8 px-4">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(37,99,235,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(37,99,235,0.04)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10">
        {/* Phone Mockup */}
        <div className="flex justify-center relative order-first md:order-last">
          <div className="relative w-44 md:w-full md:max-w-sm">
            <div className="relative bg-gray-900 rounded-[1.8rem] md:rounded-[2.5rem] border-4 md:border-[6px] border-gray-700 shadow-2xl overflow-hidden aspect-[9/18]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-black rounded-b-xl md:rounded-b-2xl w-20 md:w-32 h-3 md:h-5 z-10" />
              <Image
                src="/app-home.jpg"
                alt="MediFamily App dashboard showing family health records, prescriptions, medicine reminders, and emergency health card"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 768px) 176px, 384px"
              />
            </div>
          </div>
        </div>

        {/* Content — server-rendered for SEO */}
        <div className="space-y-4 md:space-y-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent bg-[size:200%] animate-gradient-text">
              Your Whole Family&apos;s Health,
            </span>
            <br />
            <span className="text-gray-900 text-2xl sm:text-3xl md:text-5xl">In Your Pocket.</span>
          </h1>

          <h2 className="text-sm md:text-xl text-gray-600 leading-relaxed font-normal">
            Free offline health app for Indian families. Prescriptions, medicines, lab reports — one app, everyone&apos;s health.
          </h2>

          <HeroClient />

          <p className="text-xs md:text-sm text-gray-500">
            No download needed. Works in your browser.
          </p>

          <div className="grid grid-cols-3 gap-2 md:gap-3">
            {[
              { icon: <Shield className="h-4 w-4" />, text: 'Private' },
              { icon: <Wifi className="h-4 w-4" />, text: 'Offline' },
              { text: 'Made in India' },
            ].map((badge) => (
              <div key={badge.text} className="glass rounded-lg md:rounded-xl p-2 md:p-3 text-center">
                <p className="text-xs md:text-sm text-gray-700 font-medium flex items-center justify-center gap-1.5">
                  {badge.icon} {badge.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path fill="#ffffff" d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,60 L0,60 Z" />
        </svg>
      </div>
    </section>
  )
}
