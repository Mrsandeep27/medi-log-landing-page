'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-10">Last updated: April 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
          <section>
            <p>
              MediLog (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is a free, open-source, offline-first family health record manager built by Sandeep Pandey, based in Bangalore, India. This Privacy Policy explains how we collect, use, store, and protect your personal and health information when you use the MediLog application.
            </p>
            <p>
              We take your privacy seriously — especially because MediLog handles sensitive health data. Please read this policy carefully.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Information We Collect</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">A. Information You Provide</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Account data:</strong> Email address, password (stored only as a hashed version), and name</li>
              <li><strong>Family profiles:</strong> Names, date of birth, blood group, gender, allergies, chronic conditions, and emergency contacts for each family member</li>
              <li><strong>Health records:</strong> Prescriptions, lab reports, vaccination records, bills, discharge summaries — including doctor name, hospital, diagnosis, notes, and attached images</li>
              <li><strong>Medicines:</strong> Name, dosage, frequency, duration, before/after food instructions</li>
              <li><strong>Health vitals:</strong> Blood pressure, blood sugar, weight, temperature, SpO2</li>
              <li><strong>Reminders:</strong> Medicine name, scheduled time, days of week</li>
              <li><strong>ABHA ID:</strong> Ayushman Bharat Health Account number, if you choose to link it</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">B. Information Generated Automatically</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Reminder adherence logs:</strong> When you mark a medicine as taken, missed, or skipped</li>
              <li><strong>Share access logs:</strong> Timestamps when someone views your shared health link</li>
              <li><strong>AI usage logs:</strong> Records of AI feature calls for cost tracking and debugging</li>
              <li><strong>Sync timestamps:</strong> When your data was last synced to the cloud</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">C. Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>No location or GPS data</li>
              <li>No contacts or address book access</li>
              <li>No call logs or SMS</li>
              <li>No advertising IDs or third-party cookies</li>
              <li>No browsing history</li>
              <li>No financial or payment data</li>
              <li>No biometric data (fingerprint, face ID)</li>
              <li>No analytics tracking (no Google Analytics, no Mixpanel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. How We Store Your Data</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Local Storage (On Your Device)</h3>
            <p>Most of your data lives on your device first:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>IndexedDB</strong> (via Dexie.js): All health records, family profiles, medicines, reminders, and vitals</li>
              <li><strong>localStorage:</strong> User session info (email, name, ID), app settings (language, theme, PIN hash)</li>
              <li><strong>Images:</strong> Prescription and lab report images stored as compressed blobs (max 500KB each, max 10 per record)</li>
              <li><strong>Symptom tracking data</strong> is stored locally only and is never synced to the cloud</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Cloud Storage (Supabase)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Provider:</strong> Supabase, hosted on AWS ap-south-1 (Mumbai, India)</li>
              <li><strong>What&apos;s synced:</strong> All records except locally-stored images and symptom tracker data</li>
              <li><strong>Sync frequency:</strong> Automatically every 30 minutes when online, or manually triggered</li>
              <li><strong>Encryption:</strong> All connections use HTTPS/TLS; database uses PostgreSQL encryption at rest</li>
              <li><strong>Access control:</strong> Row Level Security (RLS) ensures you can only access your own data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Third-Party Services</h2>
            <p>We use a limited number of third-party services. Here&apos;s exactly what each one receives:</p>

            <div className="bg-gray-50 rounded-xl p-6 mt-4 space-y-6">
              <div>
                <h4 className="font-semibold text-gray-900">Supabase (Authentication + Database)</h4>
                <p className="text-sm mt-1">Receives your email, password (for authentication), and synced health records. Data stored in AWS Mumbai region. <a href="https://supabase.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Supabase Privacy Policy</a></p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Google Gemini AI (AI Features)</h4>
                <p className="text-sm mt-1">Receives prescription images, symptom descriptions, lab report images, medicine photos, and relevant patient context (name, age, gender, blood group, allergies, conditions, current medicines). Does NOT receive your email, password, phone number, or ABHA details. <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Google Privacy Policy</a></p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Vercel (Website Hosting)</h4>
                <p className="text-sm mt-1">Standard web server logs (IP address, user agent, URLs visited). <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Vercel Privacy Policy</a></p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Tesseract.js (OCR)</h4>
                <p className="text-sm mt-1">Runs entirely in your browser. No data is sent to any external server.</p>
              </div>
            </div>

            <p className="mt-4 font-medium text-gray-900">We do NOT use any advertising networks, analytics platforms, social media SDKs, crash reporting services, or A/B testing tools.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Sharing</h2>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Share Links (User-Initiated Only)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You can create time-limited share links to share health records with doctors</li>
              <li>Shared data includes: family member profile, health records, and medicines</li>
              <li>NOT shared via links: your email, user ID, reminders, or app settings</li>
              <li>Links expire after a configurable duration (default: 24 hours) and can be revoked anytime</li>
              <li>Doctors see a read-only view — no account needed to view</li>
            </ul>

            <h3 className="text-lg font-semibold text-gray-900 mt-6 mb-3">We Never Share Your Data With</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Advertisers or data brokers</li>
              <li>Insurance companies</li>
              <li>Employers</li>
              <li>Government agencies (unless legally required)</li>
              <li>Any commercial third party</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Security</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-4">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 pr-4 font-semibold text-gray-900">Measure</th>
                    <th className="text-left py-3 font-semibold text-gray-900">Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-2 pr-4">Password hashing</td><td className="py-2">Supabase Auth (bcrypt)</td></tr>
                  <tr><td className="py-2 pr-4">Session tokens</td><td className="py-2">JWT, 7-day expiry, httpOnly, sameSite=strict, secure</td></tr>
                  <tr><td className="py-2 pr-4">PIN lock</td><td className="py-2">Optional 4-digit PIN, SHA-256 hashed, 5-min auto-lock</td></tr>
                  <tr><td className="py-2 pr-4">Rate limiting</td><td className="py-2">5 req/min for auth, 3 req/min for signup, 20/min for AI</td></tr>
                  <tr><td className="py-2 pr-4">Bot protection</td><td className="py-2">Honeypot fields + timing checks</td></tr>
                  <tr><td className="py-2 pr-4">Email verification</td><td className="py-2">Required before app access</td></tr>
                  <tr><td className="py-2 pr-4">HTTPS</td><td className="py-2">All connections encrypted in transit</td></tr>
                  <tr><td className="py-2 pr-4">Row Level Security</td><td className="py-2">Users can only query their own data</td></tr>
                  <tr><td className="py-2 pr-4">Image compression</td><td className="py-2">Max 500KB per image, processed locally</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access:</strong> View all your data anytime within the app</li>
              <li><strong>Edit & Delete:</strong> Full control over all health records, family members, medicines, and reminders</li>
              <li><strong>Export:</strong> Download your data as JSON or CSV (More → Download Report)</li>
              <li><strong>Account deletion:</strong> Sign out removes local data; contact us for full cloud data deletion</li>
              <li><strong>Control sharing:</strong> Create, revoke, and delete share links at any time</li>
              <li><strong>Offline access:</strong> Use the app without internet — no data leaves your device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">7. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Active data:</strong> Kept as long as your account exists</li>
              <li><strong>Deleted records:</strong> Soft-deleted (marked as deleted) — not immediately purged from the database</li>
              <li><strong>Share links:</strong> Automatically expire after the set duration</li>
              <li><strong>AI usage logs:</strong> Kept indefinitely for cost tracking</li>
              <li><strong>Full deletion:</strong> Contact us to request complete removal of all your data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">8. Cookies</h2>
            <p>MediLog uses only essential cookies:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Supabase session cookie:</strong> Required for authentication and keeping you signed in</li>
              <li>We do NOT use tracking cookies, advertising cookies, or any third-party cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">9. Children&apos;s Privacy</h2>
            <p>MediLog does not knowingly collect data from children under 13. Family members (including children) are added and managed by the parent or guardian who holds the account. Children&apos;s health records are accessible only to the account holder.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">10. Compliance</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>India IT Act & DPDP Act (2023):</strong> Personal data processed with user consent. Health data handled as sensitive personal data. Data stored in India (AWS Mumbai). No data sold to third parties.</li>
              <li><strong>GDPR:</strong> Data minimization, right to access, right to delete, and data portability (JSON/CSV export) are supported.</li>
              <li><strong>HIPAA:</strong> MediLog does NOT claim HIPAA compliance and is not intended for use by US healthcare providers as an EHR system.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">11. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &quot;Last updated&quot; date. Continued use of MediLog after changes constitutes acceptance of the updated policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">12. Contact Us</h2>
            <p>For any privacy-related questions or requests:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a></li>
              <li><strong>GitHub:</strong> <a href="https://github.com/Mrsandeep27/MEDILOG/issues" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/Mrsandeep27/MEDILOG/issues</a></li>
              <li><strong>Location:</strong> Bangalore, Karnataka, India</li>
              <li><strong>Response time:</strong> Within 72 hours for privacy-related requests</li>
            </ul>
          </section>
        </div>
      </motion.article>
    </div>
  )
}
