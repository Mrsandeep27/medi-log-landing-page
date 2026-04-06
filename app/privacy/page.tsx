'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicy() {
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

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 md:py-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-2">Last updated: April 2026</p>
        <p className="text-gray-500 text-sm mb-10">Available in: English | Hindi (coming soon)</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-3">

          {/* ── 1. Introduction ── */}
          <section>
            <h2>1. Who We Are</h2>
            <p>
              MediFamily is a free, open-source, offline-first family health record management application developed by <strong>Sandeep Pandey</strong>, operating under the name <strong>2XG</strong>, based in Bangalore, Karnataka, India.
            </p>
            <p>
              For the purposes of the Digital Personal Data Protection Act, 2023 (&quot;DPDPA&quot;) and the Information Technology Act, 2000 (&quot;IT Act&quot;), we act as the <strong>Data Fiduciary</strong> — meaning we determine the purpose and means of processing your personal data.
            </p>
            <p>
              This Privacy Policy explains how we collect, use, store, share, and protect your personal and health information. Because MediFamily handles sensitive health data, we take your privacy extremely seriously.
            </p>
          </section>

          {/* ── 2. Legal Basis ── */}
          <section>
            <h2>2. Legal Basis for Processing</h2>
            <p>We process your personal data based on:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Your consent</strong> — provided when you create an account and agree to these terms. Under the DPDPA, consent must be free, specific, informed, unconditional, and given through a clear affirmative action.</li>
              <li><strong>Legitimate uses</strong> — for performing the service you have requested (storing health records, sending reminders, processing AI queries).</li>
              <li><strong>Legal obligations</strong> — where required by applicable Indian law.</li>
            </ul>
            <p>You may <strong>withdraw your consent at any time</strong>. Withdrawal of consent is as simple as granting it — you can delete your account from within the app or contact us. Upon withdrawal, we will delete your data unless we are required by law to retain it.</p>
          </section>

          {/* ── 3. Data We Collect ── */}
          <section>
            <h2>3. Personal Data We Collect</h2>

            <h3>A. Data You Provide Directly</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Data</th>
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">When Collected</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Required?</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-2 pr-4">Email address</td><td className="py-2 pr-4">Signup</td><td className="py-2">Yes</td></tr>
                  <tr><td className="py-2 pr-4">Password</td><td className="py-2 pr-4">Signup (stored only as bcrypt hash)</td><td className="py-2">Yes</td></tr>
                  <tr><td className="py-2 pr-4">Name</td><td className="py-2 pr-4">Onboarding</td><td className="py-2">Yes</td></tr>
                  <tr><td className="py-2 pr-4">Phone number</td><td className="py-2 pr-4">Profile (optional)</td><td className="py-2">No</td></tr>
                  <tr><td className="py-2 pr-4">Family member names</td><td className="py-2 pr-4">Adding family</td><td className="py-2">Yes (per member)</td></tr>
                  <tr><td className="py-2 pr-4">Date of birth, blood group, gender</td><td className="py-2 pr-4">Adding family</td><td className="py-2">No</td></tr>
                  <tr><td className="py-2 pr-4">Allergies, chronic conditions</td><td className="py-2 pr-4">Adding family</td><td className="py-2">No</td></tr>
                  <tr><td className="py-2 pr-4">Emergency contact name &amp; phone</td><td className="py-2 pr-4">Adding family</td><td className="py-2">No</td></tr>
                  <tr><td className="py-2 pr-4">ABHA Health ID number</td><td className="py-2 pr-4">If user links ABHA</td><td className="py-2">No</td></tr>
                </tbody>
              </table>
            </div>

            <h3>B. Health Records You Create</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Prescription records (doctor name, hospital, diagnosis, notes, images)</li>
              <li>Lab reports, vaccination records, bills, discharge summaries</li>
              <li>Medicine list (name, dosage, frequency, duration, timing)</li>
              <li>Health vitals (blood pressure, blood sugar, weight, temperature, SpO2)</li>
              <li>Symptom/mood tracking entries (<strong>stored locally only</strong>, never synced to cloud)</li>
              <li>Medicine reminder schedules</li>
            </ul>

            <h3>C. Data Generated Automatically</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Reminder adherence logs (taken/missed/skipped status)</li>
              <li>Share access logs (timestamp when someone views your shared link)</li>
              <li>AI usage logs (feature calls for cost tracking and error debugging)</li>
              <li>Sync timestamps (last sync time with cloud)</li>
            </ul>

            <h3>D. Data We Do NOT Collect</h3>
            <p>We explicitly do not collect:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Location or GPS data</li>
              <li>Contacts, address book, call logs, or SMS</li>
              <li>Advertising identifiers</li>
              <li>Browsing history</li>
              <li>Financial or payment information</li>
              <li>Biometric data (fingerprint, face ID)</li>
              <li>Aadhaar number (only ABHA ID is stored, never raw Aadhaar)</li>
            </ul>
            <p>We do <strong>not</strong> use Google Analytics, Mixpanel, or any third-party analytics or advertising platform.</p>
          </section>

          {/* ── 4. Purpose of Processing ── */}
          <section>
            <h2>4. Purpose of Data Processing</h2>
            <p>We process your personal data solely for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Account management:</strong> Creating your account, authenticating logins, managing sessions</li>
              <li><strong>Health record storage:</strong> Storing, organizing, and retrieving your family&apos;s health records</li>
              <li><strong>AI-powered features:</strong> Processing prescriptions, analyzing lab reports, identifying medicines, answering health queries using Google Gemini AI</li>
              <li><strong>Medicine reminders:</strong> Sending push notifications at scheduled times</li>
              <li><strong>Doctor sharing:</strong> Generating time-limited links to share records with healthcare providers</li>
              <li><strong>Data synchronization:</strong> Syncing local data to cloud for backup and cross-device access</li>
              <li><strong>Service improvement:</strong> Debugging errors and monitoring AI feature costs</li>
            </ul>
            <p>We do <strong>not</strong> use your data for advertising, profiling, behavioral targeting, or any purpose beyond delivering the MediFamily service.</p>
          </section>

          {/* ── 5. How We Store Data ── */}
          <section>
            <h2>5. How and Where We Store Your Data</h2>

            <h3>A. Local Storage (Your Device)</h3>
            <p>MediFamily is offline-first. Most of your data lives on your device:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>IndexedDB</strong> (via Dexie.js): All health records, family profiles, medicines, reminders, vitals</li>
              <li><strong>localStorage:</strong> Session data (email, name, user ID), app settings (language, theme, PIN hash, notification preferences)</li>
              <li><strong>Images:</strong> Prescription and lab report images stored as compressed blobs in IndexedDB (max 500KB each, max 10 per record)</li>
              <li><strong>Service Worker Cache:</strong> App shell and assets cached for offline functionality</li>
              <li><strong>Symptom tracking data</strong> is stored <strong>locally only</strong> and is <strong>never synced</strong> to any server</li>
            </ul>

            <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mt-4">
              <p className="font-semibold text-amber-800 mb-1">Important: Browser Storage Risks</p>
              <p className="text-sm text-amber-800">Data stored in your browser (IndexedDB, localStorage) is tied to your browser profile. <strong>Clearing browser data will permanently delete your health records</strong> unless they have been synced to the cloud. Some browsers (especially Safari/iOS) may also automatically evict IndexedDB data under storage pressure. We strongly recommend keeping cloud sync enabled as a backup.</p>
            </div>

            <h3>B. Cloud Storage (Supabase)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Provider:</strong> Supabase (hosted on AWS ap-south-1, Mumbai, India)</li>
              <li><strong>Data location:</strong> India (Mumbai region) — your health data does not leave India for storage purposes</li>
              <li><strong>What is synced:</strong> All records except locally-stored images and symptom tracker data</li>
              <li><strong>Sync frequency:</strong> Automatically every 30 minutes when online, or manually triggered by you</li>
              <li><strong>Encryption in transit:</strong> All connections use HTTPS/TLS 1.2+</li>
              <li><strong>Encryption at rest:</strong> PostgreSQL encryption at rest (AES-256) via Supabase/AWS</li>
              <li><strong>Access control:</strong> Row Level Security (RLS) — every database query is scoped to your user ID. You can only access your own data. No other user or MediFamily employee can access your records.</li>
            </ul>

            <h3>C. Data NOT Stored Anywhere</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Passwords in plaintext (only bcrypt hash via Supabase Auth)</li>
              <li>Credit card or payment information (no payments in app)</li>
              <li>Raw Aadhaar number (only ABHA ID if linked)</li>
            </ul>
          </section>

          {/* ── 6. Third-Party Services ── */}
          <section>
            <h2>6. Third-Party Services and Data Sharing</h2>
            <p>We share your data only with the following services, strictly for delivering the MediFamily service:</p>

            <div className="space-y-6 mt-4">
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 text-base">1. Supabase — Authentication &amp; Cloud Database</h4>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li><strong>Data sent:</strong> Email, password (for authentication), all synced health records</li>
                  <li><strong>Purpose:</strong> User authentication, cloud data storage, session management</li>
                  <li><strong>Data location:</strong> AWS ap-south-1 (Mumbai, India)</li>
                  <li><strong>Privacy policy:</strong> <a href="https://supabase.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">supabase.com/privacy</a></li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 text-base">2. Google Gemini AI — AI-Powered Features</h4>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li><strong>Data sent:</strong> Prescription images, symptom descriptions, lab report images, medicine photos, and relevant patient context (name, age, gender, blood group, allergies, chronic conditions, current medicines)</li>
                  <li><strong>Data NOT sent:</strong> Email, password, phone number, ABHA details, Aadhaar</li>
                  <li><strong>Purpose:</strong> AI-powered prescription scanning, health chat, lab analysis, medicine identification</li>
                  <li><strong>Data location:</strong> Google servers (may be processed outside India — this constitutes a cross-border data transfer)</li>
                  <li><strong>Privacy policy:</strong> <a href="https://policies.google.com/privacy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">policies.google.com/privacy</a></li>
                </ul>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mt-3">
                  <p className="text-sm text-blue-800"><strong>AI Data Processing Notice:</strong> Health-related queries sent to Google Gemini AI are processed by Google&apos;s servers and are subject to Google&apos;s AI API terms. We recommend avoiding inclusion of uniquely identifying information (such as full name combined with Aadhaar/ABHA numbers) in AI queries. The AI features use models: gemini-2.5-flash, gemini-2.5-pro, and gemini-3-flash-preview.</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 text-base">3. Vercel — Website Hosting</h4>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li><strong>Data sent:</strong> Standard web server logs (IP address, user agent, page URLs)</li>
                  <li><strong>Purpose:</strong> Hosting the website and API routes</li>
                  <li><strong>Privacy policy:</strong> <a href="https://vercel.com/legal/privacy-policy" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">vercel.com/legal/privacy-policy</a></li>
                </ul>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <h4 className="font-bold text-gray-900 text-base">4. Tesseract.js — OCR (Text Extraction)</h4>
                <ul className="list-disc pl-6 space-y-1 mt-2 text-sm">
                  <li>Runs <strong>entirely in your browser</strong> — no data is sent to any external server</li>
                  <li>Extracts text from prescription/lab report images locally on your device</li>
                  <li>Supports English and Hindi</li>
                </ul>
              </div>
            </div>

            <h3>Services We Do NOT Use</h3>
            <p>We do not use any advertising networks, analytics platforms (Google Analytics, Mixpanel, etc.), social media SDKs, crash reporting services, A/B testing tools, or data brokers.</p>
          </section>

          {/* ── 7. Data Sharing ── */}
          <section>
            <h2>7. When Your Data is Shared</h2>

            <h3>A. Share Links (Initiated by You)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>You can create time-limited, secure share links to share health records with doctors</li>
              <li><strong>Shared:</strong> Family member profile (name, blood group, allergies, conditions), health records, medicines</li>
              <li><strong>Not shared:</strong> Your email, user ID, reminders, app settings</li>
              <li>Links expire after a configurable duration (default: 24 hours)</li>
              <li>You can revoke any share link at any time</li>
              <li>Doctors see a read-only view — no MediFamily account needed to view</li>
              <li>Access is logged (timestamp only, no IP tracking)</li>
            </ul>

            <h3>B. We Never Share Your Data With</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Advertisers or advertising networks</li>
              <li>Data brokers or data aggregators</li>
              <li>Insurance companies</li>
              <li>Employers</li>
              <li>Government agencies (unless compelled by valid legal process under Indian law)</li>
              <li>Any commercial third party for monetary or non-monetary consideration</li>
            </ul>
          </section>

          {/* ── 8. Cross-Border Transfer ── */}
          <section>
            <h2>8. Cross-Border Data Transfers</h2>
            <p>Your health records are stored in <strong>India</strong> (AWS Mumbai region via Supabase). However, when you use AI-powered features (prescription scanning, AI doctor chat, lab analysis, medicine identification), the relevant data is sent to <strong>Google Gemini AI servers</strong>, which may be located outside India.</p>
            <p>Under the DPDPA 2023, cross-border data transfers are permitted unless the destination country is on a government-notified restricted list. As of the date of this policy, no country has been restricted.</p>
            <p>We minimize cross-border transfers by:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Storing all primary data in India</li>
              <li>Sending only the minimum necessary data to AI services</li>
              <li>Never sending email, password, phone, or ABHA details to AI services</li>
              <li>Processing OCR (text extraction) entirely on your device via Tesseract.js</li>
            </ul>
          </section>

          {/* ── 9. Security ── */}
          <section>
            <h2>9. Security Measures</h2>
            <p>We implement security practices aligned with industry standards to protect your data:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse mt-2">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-2 pr-4 font-semibold text-gray-900">Measure</th>
                    <th className="text-left py-2 font-semibold text-gray-900">Implementation</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr><td className="py-2 pr-4">Password hashing</td><td className="py-2">bcrypt via Supabase Auth</td></tr>
                  <tr><td className="py-2 pr-4">Session tokens</td><td className="py-2">JWT with 7-day expiry, httpOnly, sameSite=strict, secure flags</td></tr>
                  <tr><td className="py-2 pr-4">Optional PIN lock</td><td className="py-2">4-digit PIN, SHA-256 hashed, 5-minute auto-lock</td></tr>
                  <tr><td className="py-2 pr-4">Encryption in transit</td><td className="py-2">HTTPS/TLS 1.2+ on all connections</td></tr>
                  <tr><td className="py-2 pr-4">Encryption at rest</td><td className="py-2">AES-256 via Supabase/AWS</td></tr>
                  <tr><td className="py-2 pr-4">Access control</td><td className="py-2">Row Level Security — users access only their own data</td></tr>
                  <tr><td className="py-2 pr-4">Rate limiting</td><td className="py-2">5 req/min (auth), 3 req/min (signup), 20 req/min (AI)</td></tr>
                  <tr><td className="py-2 pr-4">Bot protection</td><td className="py-2">Honeypot fields + timing checks on signup</td></tr>
                  <tr><td className="py-2 pr-4">Email verification</td><td className="py-2">Required before app access</td></tr>
                  <tr><td className="py-2 pr-4">Image compression</td><td className="py-2">Max 500KB per image, processed locally before storage</td></tr>
                  <tr><td className="py-2 pr-4">Offline security</td><td className="py-2">Data stored in browser&apos;s sandboxed IndexedDB</td></tr>
                  <tr><td className="py-2 pr-4">Soft deletes</td><td className="py-2">Deleted records marked, not immediately purged</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* ── 10. Data Breach ── */}
          <section>
            <h2>10. Data Breach Notification</h2>
            <p>In the event of a personal data breach, we will:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Notify the <strong>Data Protection Board of India</strong> within <strong>72 hours</strong> of becoming aware of the breach, as required under the DPDPA 2023</li>
              <li>Notify <strong>affected users</strong> via email with details of: the nature and extent of the breach, data affected, potential consequences, and steps we are taking to mitigate harm</li>
              <li>Take immediate steps to contain and remedy the breach</li>
              <li>Maintain a record of all breaches and actions taken</li>
            </ul>
          </section>

          {/* ── 11. Your Rights ── */}
          <section>
            <h2>11. Your Rights as a Data Principal</h2>
            <p>Under the DPDPA 2023 and the IT Act 2000, you have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Right to Access:</strong> View all your personal and health data at any time within the app</li>
              <li><strong>Right to Correction:</strong> Edit or update any of your health records, family profiles, medicines, or personal information</li>
              <li><strong>Right to Erasure:</strong> Delete individual records from within the app, or request complete account and data deletion by contacting us</li>
              <li><strong>Right to Data Portability:</strong> Export all your data in JSON or CSV format (More → Download Report)</li>
              <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent at any time by deleting your account. Withdrawal is as easy as granting consent.</li>
              <li><strong>Right to Nominate:</strong> Under the DPDPA, you have the right to nominate another person to exercise your rights in case of your death or incapacity</li>
              <li><strong>Right to Complain:</strong> If we fail to address your concerns, you may file a complaint with the Data Protection Board of India</li>
            </ul>
            <p>To exercise any of these rights, contact us at <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a>.</p>
          </section>

          {/* ── 12. Data Retention ── */}
          <section>
            <h2>12. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Active data:</strong> Retained as long as your account exists and you continue using the service</li>
              <li><strong>Deleted records:</strong> Soft-deleted (marked as <code className="bg-gray-100 px-1 rounded">is_deleted</code>) in the database. Permanently purged during periodic cleanup cycles.</li>
              <li><strong>Share links:</strong> Automatically expire after the duration you set (default: 24 hours)</li>
              <li><strong>AI usage logs:</strong> Retained for cost tracking and debugging purposes</li>
              <li><strong>After account deletion:</strong> All cloud data associated with your account is deleted. Local data on your device remains under your control.</li>
              <li><strong>Full data removal:</strong> Contact us at <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a> to request permanent deletion of all data. We will process your request within 30 days.</li>
            </ul>
          </section>

          {/* ── 13. Cookies ── */}
          <section>
            <h2>13. Cookies and Tracking Technologies</h2>
            <p>MediFamily uses only <strong>strictly essential cookies</strong>:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Supabase session cookie:</strong> Required for authentication and keeping you signed in. This is a first-party, httpOnly, secure cookie.</li>
            </ul>
            <p>We do <strong>not</strong> use:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Tracking cookies</li>
              <li>Advertising cookies</li>
              <li>Third-party cookies</li>
              <li>Browser fingerprinting</li>
              <li>Pixel tracking or web beacons</li>
            </ul>
          </section>

          {/* ── 14. Children ── */}
          <section>
            <h2>14. Children&apos;s Privacy</h2>
            <p>Under the DPDPA 2023, a &quot;child&quot; is any person under <strong>18 years of age</strong>.</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>MediFamily does not allow children under 18 to create their own accounts</li>
              <li>Family members (including children) are added and managed exclusively by the parent or legal guardian who holds the account</li>
              <li>Children&apos;s health records are accessible only to the account holder (parent/guardian)</li>
              <li>We do <strong>not</strong> engage in behavioral monitoring or targeted advertising directed at children</li>
              <li>If we become aware that we have collected personal data from a child without verifiable parental consent, we will delete that data</li>
            </ul>
          </section>

          {/* ── 15. AI Features ── */}
          <section>
            <h2>15. AI Features and Health Data</h2>
            <div className="bg-red-50 border border-red-200 rounded-xl p-5">
              <p className="font-semibold text-red-800 mb-2">Important Disclosure About AI Features</p>
              <ul className="list-disc pl-6 space-y-2 text-sm text-red-800">
                <li>MediFamily uses <strong>Google Gemini AI</strong> to power features like prescription scanning, AI health chat, lab report analysis, and medicine identification</li>
                <li>When you use these features, relevant health data (images, symptoms, patient context) is <strong>sent to Google&apos;s servers for processing</strong></li>
                <li>AI-generated responses are <strong>for informational purposes only</strong> and do <strong>not</strong> constitute medical advice, diagnosis, or treatment</li>
                <li>AI outputs may contain <strong>errors or inaccuracies</strong> — always verify with a qualified healthcare professional</li>
                <li>Google&apos;s use of data submitted via the Gemini API is governed by <a href="https://ai.google.dev/gemini-api/terms" className="text-red-700 underline" target="_blank" rel="noopener noreferrer">Google&apos;s Gemini API Terms</a></li>
              </ul>
            </div>
          </section>

          {/* ── 16. Compliance ── */}
          <section>
            <h2>16. Regulatory Compliance</h2>

            <h3>India: DPDPA 2023 &amp; IT Act 2000</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Personal data processed with explicit user consent</li>
              <li>Health data treated as sensitive personal data with additional care (per IT Rules 2011 SPDI framework)</li>
              <li>Data stored in India (AWS Mumbai region)</li>
              <li>Data minimization: only data necessary for the stated purpose is collected</li>
              <li>No data sold or shared with third parties for commercial purposes</li>
              <li>Users can withdraw consent by deleting their account</li>
              <li>Grievance redressal mechanism provided (see Section 18)</li>
            </ul>

            <h3>GDPR (for EU Users, if applicable)</h3>
            <ul className="list-disc pl-6 space-y-1">
              <li>Data minimization, right to access, right to erasure, and data portability supported</li>
              <li>No automated decision-making that produces legal effects</li>
            </ul>

            <h3>HIPAA (US)</h3>
            <p>MediFamily does <strong>not</strong> claim HIPAA compliance. We have no Business Associate Agreement (BAA) with Supabase or Google. MediFamily is not intended for use by US healthcare providers as an Electronic Health Record (EHR) system.</p>
          </section>

          {/* ── 17. Changes ── */}
          <section>
            <h2>17. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. When we make material changes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>We will update the &quot;Last updated&quot; date at the top of this page</li>
              <li>For significant changes, we will notify you via email or in-app notification</li>
              <li>Continued use of MediFamily after changes constitutes acceptance of the updated policy</li>
              <li>If you do not agree with the changes, you may delete your account</li>
            </ul>
          </section>

          {/* ── 18. Grievance Officer ── */}
          <section>
            <h2>18. Grievance Redressal</h2>
            <p>In accordance with the DPDPA 2023 and the IT Act 2000 (Rule 5(9) of the IT Rules 2011), we have designated a Grievance Officer:</p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-4">
              <p><strong>Grievance Officer:</strong> Sandeep Pandey</p>
              <p><strong>Email:</strong> <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a></p>
              <p><strong>Address:</strong> Bangalore, Karnataka, India</p>
              <p><strong>Response time:</strong> Within 72 hours for acknowledgment; resolution within 30 days</p>
            </div>
            <p className="mt-4">If you are not satisfied with our response, you may file a complaint with the <strong>Data Protection Board of India</strong> as established under the DPDPA 2023.</p>
          </section>

          {/* ── 19. Contact ── */}
          <section>
            <h2>19. Contact Us</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Email:</strong> <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a></li>
              <li><strong>GitHub:</strong> <a href="https://MEDIFAMILY Issues" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MEDIFAMILY Issues</a></li>
              <li><strong>Location:</strong> Bangalore, Karnataka, India</li>
            </ul>
          </section>
        </div>
      </motion.article>
    </div>
  )
}
