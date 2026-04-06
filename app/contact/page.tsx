'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </Link>
          <Image src="/logo-gradient.jpeg" alt="MediFamily" width={100} height={32} className="h-8 w-auto" />
        </div>
      </nav>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 md:py-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Contact Us</h1>
        <p className="text-gray-500 mb-10">Have a question, bug report, or feature request? We&apos;d love to hear from you.</p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a>
                <p className="text-sm text-gray-500 mt-1">For general inquiries, privacy requests, partnerships</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-indigo-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-700">Bangalore, Karnataka, India</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                <Clock className="h-5 w-5 text-teal-500" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
                <p className="text-gray-700">Within 72 hours</p>
                <p className="text-sm text-gray-500 mt-1">Privacy-related requests are prioritized</p>
              </div>
            </div>
          </div>

          {/* Contact Form (mailto-based) */}
          <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Send a Message</h2>
            <form
              action="mailto:sandeep@2xg.in"
              method="GET"
              className="space-y-4"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="body" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="body"
                  name="body"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-700 transition-all shadow-md"
              >
                Send via Email
              </button>
              <p className="text-xs text-gray-400 text-center">Opens your default email client</p>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
