'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft, WifiOff, Globe, Heart, Shield, Users, Smartphone, AlertTriangle } from 'lucide-react'
import Link from 'next/link'

const values = [
  {
    icon: <WifiOff className="h-6 w-6 text-blue-500" />,
    title: 'Offline-First',
    description: 'Works without internet. Built for the 65 Crore Indians who don\'t have reliable connectivity.',
  },
  {
    icon: <Shield className="h-6 w-6 text-indigo-500" />,
    title: 'Privacy by Design',
    description: 'Your health data stays on your device. Cloud sync is optional. No tracking, no ads, no data selling.',
  },
  {
    icon: <Globe className="h-6 w-6 text-teal-500" />,
    title: 'Hindi-First',
    description: 'Designed for Indian families — interface and AI features work in Hindi and English.',
  },
  {
    icon: <Shield className="h-6 w-6 text-purple-500" />,
    title: 'Transparent',
    description: 'Fully open source. Anyone can audit the code and verify how your health data is handled.',
  },
  {
    icon: <Heart className="h-6 w-6 text-pink-500" />,
    title: 'No Ads, No Tracking',
    description: 'No advertising, no data selling, no tracking cookies. Your privacy is the product.',
  },
  {
    icon: <Users className="h-6 w-6 text-cyan-500" />,
    title: 'Family-Centric',
    description: 'One account for the entire family. Manage health records for Mummy, Papa, kids — everyone.',
  },
]

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </Link>
          <Image src="/logo.png" alt="MediFamily" width={100} height={32} className="h-8 w-auto" />
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 md:py-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">About MediFamily</h1>

        {/* Mission */}
        <section className="mb-12">
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            MediFamily is India&apos;s first offline-first, AI-powered family health record manager. We help Indian families store, manage, and share health records digitally — even without an internet connection.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            India has over 140 crore people, but reliable internet reaches only a fraction of them. Hospitals give paper prescriptions that get lost. Medicine reminders live in memory. Lab reports sit in drawers.
          </p>
          <p className="text-lg font-semibold text-gray-900">
            We don&apos;t compete with Eka Care. We serve the 65 Crore Indians they can&apos;t reach.
          </p>
        </section>

        {/* Founder */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Founder</h2>
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <p className="text-gray-700">
              <strong>Sandeep Pandey</strong> — Bangalore, Karnataka, India
            </p>
          </div>
        </section>

        {/* What We Believe */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Believe</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="bg-white rounded-xl p-5 border border-gray-200 hover:border-blue-300 transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center flex-shrink-0">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>


        {/* How It Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">How It Works</h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <Smartphone className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span><strong>PWA — No app store needed.</strong> Open in your browser, add to home screen, use like a native app.</span>
            </li>
            <li className="flex items-start gap-3">
              <WifiOff className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span><strong>Offline-first.</strong> All data stored locally on your device. Syncs to cloud when internet is available.</span>
            </li>
            <li className="flex items-start gap-3">
              <Shield className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
              <span><strong>Data stored in India.</strong> Cloud backup on Supabase (AWS Mumbai). Your data doesn&apos;t leave India for storage.</span>
            </li>
          </ul>
        </section>

        {/* Medical Disclaimer */}
        <section className="mb-12">
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
            <p className="flex items-center gap-2 font-semibold text-amber-800 mb-2">
              <AlertTriangle className="h-4 w-4" /> Medical Disclaimer
            </p>
            <p className="text-sm text-amber-800 leading-relaxed">
              MediFamily uses AI for informational purposes only. AI Doctor is NOT a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare professional for medical decisions. AI-powered features are built on Google Gemini AI and may produce inaccurate results. For emergencies, call 112 or visit the nearest hospital.
            </p>
          </div>
        </section>

      </motion.div>
    </div>
  )
}
