'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200/50 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center gap-4">
          <Link href="/" className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-sm">Back</span>
          </Link>
          <Image src="/logo-gradient.jpeg" alt="MediLog" width={100} height={32} className="h-8 w-auto" />
        </div>
      </nav>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 md:py-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: April 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              Welcome to MediLog. By accessing or using the MediLog application (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
            </p>
            <p>
              MediLog is operated by Sandeep Pandey (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), based in Bangalore, Karnataka, India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Service Description</h2>
            <p>MediLog is a free, open-source, offline-first family health record management application. It allows you to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Store and manage health records for your family</li>
              <li>Scan prescriptions using AI-powered extraction</li>
              <li>Set medicine reminders</li>
              <li>Chat with an AI health assistant for general health guidance</li>
              <li>Identify medicines from photos</li>
              <li>Understand lab reports with AI explanations</li>
              <li>Share health records with doctors via secure, time-limited links</li>
              <li>Use the app offline without an internet connection</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Medical Disclaimer</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-6">
              <p className="font-semibold text-red-800 mb-3">IMPORTANT: Please read this carefully.</p>
              <ul className="list-disc pl-6 space-y-2 text-red-800">
                <li>MediLog is a <strong>health record management tool</strong>, NOT a medical diagnostic tool.</li>
                <li>The AI Doctor feature provides <strong>general health information only</strong>. It is NOT a substitute for professional medical advice, diagnosis, or treatment.</li>
                <li>AI-generated prescription extractions and lab report analyses should always be <strong>verified by a qualified healthcare professional</strong>.</li>
                <li>Never disregard professional medical advice or delay seeking treatment because of information provided by MediLog.</li>
                <li>In case of a medical emergency, contact your local emergency services immediately.</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Account & Registration</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must provide a valid email address to create an account</li>
              <li>Email verification is required before you can use the app</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You must be at least 13 years old to create an account</li>
              <li>If you create health records for family members (including children), you represent that you are their parent or legal guardian</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Your Data</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Your data belongs to you.</strong> We do not claim ownership of any health records, personal information, or content you create in MediLog.</li>
              <li>You are responsible for the accuracy and completeness of the health records you enter</li>
              <li>You can export your data at any time in JSON or CSV format</li>
              <li>You can delete individual records or request complete account and data deletion by contacting us</li>
              <li>For full details on how we handle your data, see our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link></li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Acceptable Use</h2>
            <p>You agree NOT to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the Service for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to the Service or its systems</li>
              <li>Use the AI features to generate harmful, misleading, or dangerous medical advice for others</li>
              <li>Interfere with or disrupt the Service or its infrastructure</li>
              <li>Use automated scripts, bots, or scrapers to access the Service</li>
              <li>Share your account credentials with others</li>
              <li>Misrepresent AI-generated health information as professional medical advice</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Pricing & Payment</h2>
            <p>MediLog is currently <strong>100% free</strong> with no hidden charges. There are no paid plans, premium features, or in-app purchases at this time. If we introduce paid features in the future, existing free features will remain free, and we will notify you in advance of any changes.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>MediLog is an <strong>open-source project</strong> available on <a href="https://github.com/Mrsandeep27/MEDILOG" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
              <li>The MediLog name, logo, and branding are owned by us</li>
              <li>All health records and personal data you create belong to you</li>
              <li>Third-party libraries and services used in MediLog are subject to their respective licenses</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Third-Party Services</h2>
            <p>MediLog integrates with the following third-party services:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Supabase:</strong> Authentication and cloud data storage</li>
              <li><strong>Google Gemini AI:</strong> AI-powered features (prescription scanning, health chat, lab analysis, medicine identification)</li>
              <li><strong>Vercel:</strong> Website hosting</li>
            </ul>
            <p className="mt-2">Your use of these services is subject to their respective terms and privacy policies. We are not responsible for the practices of these third-party services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Service Availability</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>The Service is provided <strong>&quot;as-is&quot;</strong> and <strong>&quot;as available&quot;</strong></li>
              <li>We strive to maintain uptime but do not guarantee uninterrupted access</li>
              <li>The offline-first design ensures core features work without internet access</li>
              <li>AI-powered features require an internet connection and are subject to availability of Google Gemini AI</li>
              <li>We may perform maintenance, updates, or modifications to the Service at any time</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Limitation of Liability</h2>
            <div className="bg-gray-50 rounded-xl p-6">
              <p>To the maximum extent permitted by applicable law:</p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>MediLog and its creator shall NOT be liable for any <strong>indirect, incidental, special, consequential, or punitive damages</strong> arising from your use of the Service</li>
                <li>We are NOT liable for any <strong>medical decisions</strong> made based on information provided by MediLog&apos;s AI features</li>
                <li>We are NOT liable for any <strong>data loss</strong> resulting from device failure, browser issues, or circumstances beyond our control</li>
                <li>Our total liability shall not exceed the amount you have paid us for the Service (which is currently zero)</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Account Termination</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You can stop using MediLog at any time by signing out (this removes local data)</li>
              <li>You can request full account and cloud data deletion by contacting us</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms</li>
              <li>Upon termination, your cloud data will be deleted; local data on your device remains under your control</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Changes to Terms</h2>
            <p>We may update these Terms from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Your continued use of MediLog after changes are posted constitutes acceptance of the updated Terms. For significant changes, we will make reasonable efforts to notify you via the app or email.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">13. Governing Law</h2>
            <p>These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising from these Terms or your use of the Service shall be subject to the exclusive jurisdiction of the courts in Bangalore, Karnataka, India.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">14. Contact Us</h2>
            <p>If you have any questions about these Terms:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/Mrsandeep27/MEDILOG/issues" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Mrsandeep27/MEDILOG/issues</a></li>
              <li><strong>Location:</strong> Bangalore, Karnataka, India</li>
            </ul>
          </section>
        </div>
      </motion.article>
    </div>
  )
}
