'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsOfService() {
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

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto px-4 py-12 md:py-16"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-10">Last updated: April 2026</p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-gray-900 [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-gray-900 [&_h3]:mt-6 [&_h3]:mb-3">

          {/* ── 1. Acceptance ── */}
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using the MediFamily application (&quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree, please do not use the Service.
            </p>
            <p>
              MediFamily is operated by <strong>Sandeep Pandey</strong>, operating under the name <strong>2XG</strong>, based in Bangalore, Karnataka, India (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;).
            </p>
            <p>
              These Terms, together with our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>, constitute the entire agreement between you and us regarding your use of MediFamily. They supersede all prior agreements, representations, or understandings.
            </p>
          </section>

          {/* ── 2. Eligibility ── */}
          <section>
            <h2>2. Eligibility</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must be at least <strong>18 years of age</strong> to create a MediFamily account</li>
              <li>If you are between 13 and 18, you may use MediFamily only under the supervision and with the consent of a parent or legal guardian who agrees to these Terms</li>
              <li>By creating an account, you represent that the information you provide is accurate and complete</li>
              <li>If you add family members (including children) to your account, you represent that you are their parent, legal guardian, or have their authorization to manage their health records</li>
            </ul>
          </section>

          {/* ── 3. Service Description ── */}
          <section>
            <h2>3. Description of Service</h2>
            <p>MediFamily is a free, open-source, offline-first family health record management application that allows you to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Store and manage health records for your family members</li>
              <li>Scan prescriptions using AI-powered text extraction</li>
              <li>Set and receive medicine reminders</li>
              <li>Consult an AI health assistant for general health guidance</li>
              <li>Identify medicines from photos using AI</li>
              <li>Understand lab reports with AI-powered explanations</li>
              <li>Share health records with doctors via secure, time-limited links</li>
              <li>Link your ABHA (Ayushman Bharat) Health Account</li>
              <li>Use core features offline without an internet connection</li>
            </ul>
            <p>The Service is provided as a Progressive Web Application (PWA). It runs in your web browser and can be installed on your device&apos;s home screen. No app store download is required.</p>
          </section>

          {/* ── 4. Medical Disclaimer ── */}
          <section>
            <h2>4. Medical Disclaimer</h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-xl p-6">
              <p className="font-bold text-red-900 text-lg mb-3">CRITICAL: READ THIS CAREFULLY</p>
              <ul className="list-disc pl-6 space-y-2 text-red-800">
                <li>MediFamily is a <strong>health record management tool</strong>. It is <strong>NOT</strong> a medical device, diagnostic tool, or clinical system.</li>
                <li>The AI-powered features (AI Doctor Chat, Prescription Scanner, Lab Report Analyzer, Medicine Identifier) provide <strong>general health information only</strong>. They are <strong>NOT</strong> a substitute for professional medical advice, diagnosis, or treatment.</li>
                <li>AI-generated outputs <strong>may contain errors, inaccuracies, or incomplete information</strong>. They should <strong>always be verified by a qualified healthcare professional</strong> before acting on them.</li>
                <li>The AI features are powered by Google Gemini AI and are <strong>not reviewed or endorsed by medical professionals</strong> within MediFamily.</li>
                <li><strong>Never disregard professional medical advice</strong> or delay seeking medical treatment because of information provided by MediFamily.</li>
                <li><strong>In a medical emergency</strong>, call your local emergency services (112 in India) or visit the nearest hospital immediately. Do not rely on MediFamily in emergencies.</li>
                <li>Per India&apos;s Telemedicine Practice Guidelines (2020), AI/ML platforms are <strong>prohibited from prescribing medication</strong>. MediFamily&apos;s AI features do not prescribe — they only provide general informational guidance.</li>
              </ul>
            </div>
          </section>

          {/* ── 5. Account ── */}
          <section>
            <h2>5. Account Registration and Security</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You must provide a valid email address and create a password to register</li>
              <li>Email verification is required before you can access the app</li>
              <li>You are solely responsible for maintaining the confidentiality of your login credentials</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately if you suspect unauthorized access to your account</li>
              <li>We recommend enabling the optional PIN lock feature for additional security</li>
              <li>You may not share your account with others or create multiple accounts</li>
            </ul>
          </section>

          {/* ── 6. Your Data ── */}
          <section>
            <h2>6. Your Data and Content</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Ownership:</strong> All health records, personal information, and content you create in MediFamily <strong>belong to you</strong>. We do not claim any ownership or intellectual property rights over your data.</li>
              <li><strong>Accuracy:</strong> You are responsible for the accuracy, completeness, and legality of the health records and information you enter. MediFamily stores data as you provide it and does not verify its accuracy.</li>
              <li><strong>Export:</strong> You can export your data at any time in JSON or CSV format from within the app.</li>
              <li><strong>Deletion:</strong> You can delete individual records from within the app. For complete account and data deletion, contact us at <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a>.</li>
              <li><strong>License:</strong> By using MediFamily, you grant us a limited, non-exclusive license to process your data solely for the purpose of providing the Service (storing records, syncing data, processing AI queries). This license terminates when you delete your account.</li>
            </ul>
            <p>For complete details on how we handle your data, see our <Link href="/privacy" className="text-blue-600 hover:underline">Privacy Policy</Link>.</p>
          </section>

          {/* ── 7. Acceptable Use ── */}
          <section>
            <h2>7. Acceptable Use</h2>
            <p>You agree <strong>not</strong> to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Use the Service for any unlawful purpose or in violation of any applicable law</li>
              <li>Attempt to gain unauthorized access to the Service, other accounts, or our systems</li>
              <li>Use the AI features to generate harmful, misleading, or dangerous health advice for distribution to others</li>
              <li>Misrepresent AI-generated health information as professional medical advice</li>
              <li>Interfere with, disrupt, or overload the Service or its infrastructure</li>
              <li>Use automated scripts, bots, scrapers, or similar tools to access the Service</li>
              <li>Reverse engineer, decompile, or attempt to extract the source code of the Service (except as permitted under applicable open-source licenses)</li>
              <li>Upload malicious content, viruses, or harmful code</li>
              <li>Use the Service to store data that is not related to health records</li>
              <li>Abuse the AI features by submitting excessive, irrelevant, or automated queries</li>
            </ul>
          </section>

          {/* ── 8. Pricing ── */}
          <section>
            <h2>8. Pricing</h2>
            <p>MediFamily is currently <strong>100% free</strong> with no hidden charges, no paid plans, no premium features, and no in-app purchases.</p>
            <p>If we introduce paid features in the future:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Existing free features will remain free</li>
              <li>We will provide reasonable advance notice before any pricing changes</li>
              <li>You will never be charged without your explicit consent</li>
            </ul>
          </section>

          {/* ── 9. AI Features ── */}
          <section>
            <h2>9. AI-Powered Features</h2>
            <p>MediFamily uses <strong>Google Gemini AI</strong> (models: gemini-2.5-flash, gemini-2.5-pro, gemini-3-flash-preview) to power several features. By using these features, you acknowledge that:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>AI outputs are <strong>algorithmically generated</strong> and may be inaccurate, incomplete, or outdated</li>
              <li>Health data you submit to AI features (prescription images, symptoms, lab reports, medicine photos) is <strong>sent to Google&apos;s servers</strong> for processing</li>
              <li>AI features are subject to Google&apos;s <a href="https://ai.google.dev/gemini-api/terms" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Gemini API Terms of Service</a></li>
              <li>AI features require an internet connection and may be temporarily unavailable</li>
              <li>We are <strong>not responsible</strong> for any decisions you make based on AI-generated information</li>
              <li>The AI does not &quot;remember&quot; your previous conversations across sessions</li>
              <li>Per Google&apos;s Gemini API terms, the AI features are <strong>not intended for use in clinical practice</strong> or as a medical device</li>
            </ul>
          </section>

          {/* ── 10. Intellectual Property ── */}
          <section>
            <h2>10. Intellectual Property</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>MediFamily is an <strong>open-source project</strong> — source code is available at <a href="https://github.com/Mrsandeep27/MEDIFAMILY" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a> under its respective license</li>
              <li>The MediFamily name, logo, and branding are proprietary and may not be used without our written permission</li>
              <li>All health records and personal data you create <strong>belong to you</strong></li>
              <li>Third-party libraries, services, and content used in MediFamily are subject to their respective licenses and terms</li>
            </ul>
          </section>

          {/* ── 11. Third-Party Services ── */}
          <section>
            <h2>11. Third-Party Services</h2>
            <p>MediFamily integrates with third-party services including Supabase (database), Google Gemini AI (AI features), and Vercel (hosting). Your use of MediFamily involves interaction with these services, which are governed by their own terms and privacy policies.</p>
            <p>We are not responsible for the availability, accuracy, or practices of third-party services. If a third-party service experiences downtime, certain MediFamily features may be temporarily unavailable.</p>
          </section>

          {/* ── 12. Offline & Browser Storage ── */}
          <section>
            <h2>12. Offline Mode and Browser Storage</h2>
            <p>MediFamily is designed to work offline. You should be aware of the following:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your health records are stored locally in your browser&apos;s <strong>IndexedDB</strong> storage</li>
              <li><strong>Clearing your browser data</strong> (cache, cookies, site data) <strong>will permanently delete your local health records</strong></li>
              <li>Some browsers (particularly Safari on iOS) may <strong>automatically evict IndexedDB data</strong> under storage pressure if the PWA hasn&apos;t been used recently</li>
              <li>We <strong>strongly recommend</strong> keeping cloud sync enabled to maintain a backup of your data</li>
              <li>The PWA updates automatically via Service Workers — you will always have the latest version when online</li>
              <li>MediFamily works best on modern browsers (Chrome, Edge, Firefox, Safari). We do not guarantee compatibility with older browsers.</li>
            </ul>
          </section>

          {/* ── 13. Disclaimer of Warranties ── */}
          <section>
            <h2>13. Disclaimer of Warranties</h2>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <p>THE SERVICE IS PROVIDED ON AN <strong>&quot;AS IS&quot;</strong> AND <strong>&quot;AS AVAILABLE&quot;</strong> BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:</p>
              <ul className="list-disc pl-6 space-y-1 mt-3">
                <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT</li>
                <li>WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR FREE OF VIRUSES</li>
                <li>WARRANTIES REGARDING THE ACCURACY, RELIABILITY, OR COMPLETENESS OF ANY AI-GENERATED CONTENT</li>
                <li>WARRANTIES THAT YOUR DATA WILL NOT BE LOST DUE TO BROWSER STORAGE LIMITATIONS, DEVICE FAILURE, OR SERVICE INTERRUPTIONS</li>
              </ul>
              <p className="mt-3">No advice or information, whether oral or written, obtained from MediFamily shall create any warranty not expressly stated in these Terms.</p>
            </div>
          </section>

          {/* ── 14. Limitation of Liability ── */}
          <section>
            <h2>14. Limitation of Liability</h2>
            <p>To the maximum extent permitted by applicable law:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>MediFamily and its creator shall <strong>not be liable</strong> for any indirect, incidental, special, consequential, or punitive damages arising from your use of (or inability to use) the Service</li>
              <li>We are <strong>not liable for any medical decisions</strong> you make based on information provided by MediFamily&apos;s AI features or any other part of the Service</li>
              <li>We are <strong>not liable for any data loss</strong> resulting from device failure, browser limitations, IndexedDB eviction, third-party service outages, or circumstances beyond our reasonable control</li>
              <li>We are <strong>not liable for any actions</strong> taken by third-party services (Supabase, Google, Vercel) in processing your data</li>
              <li>Our <strong>total aggregate liability</strong> for all claims related to the Service shall not exceed the total amount you have paid us in the 12 months preceding the claim (which is currently zero, as the Service is free)</li>
            </ul>
            <p>Nothing in these Terms excludes liability for fraud, willful misconduct, or any liability that cannot be excluded under applicable Indian law.</p>
          </section>

          {/* ── 15. Indemnification ── */}
          <section>
            <h2>15. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless MediFamily, its creator, and affiliates from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable legal fees) arising from:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Your use of or access to the Service</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any applicable law or third-party rights</li>
              <li>Any inaccurate or misleading health records you create or share</li>
              <li>Any claim by a third party related to health records you shared via share links</li>
            </ul>
          </section>

          {/* ── 16. Termination ── */}
          <section>
            <h2>16. Termination</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>You can stop using MediFamily at any time</li>
              <li>You can sign out to remove local data from your device</li>
              <li>You can request complete account and cloud data deletion by contacting us</li>
              <li>We reserve the right to suspend or terminate accounts that violate these Terms, with or without notice</li>
              <li>Upon termination, your right to use the Service ceases immediately</li>
              <li>Sections that by their nature should survive termination (including Disclaimer of Warranties, Limitation of Liability, Indemnification, and Governing Law) shall survive</li>
            </ul>
          </section>

          {/* ── 17. Force Majeure ── */}
          <section>
            <h2>17. Force Majeure</h2>
            <p>We shall not be liable for any failure or delay in performing our obligations under these Terms if such failure or delay results from circumstances beyond our reasonable control, including but not limited to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Natural disasters (earthquakes, floods, pandemics)</li>
              <li>Acts of government or regulatory bodies</li>
              <li>Internet or telecommunications outages</li>
              <li>Cyberattacks, DDoS attacks, or security breaches at third-party providers</li>
              <li>Power outages or infrastructure failures</li>
              <li>Third-party service outages (Supabase, Google Gemini AI, Vercel)</li>
            </ul>
          </section>

          {/* ── 18. Dispute Resolution ── */}
          <section>
            <h2>18. Dispute Resolution</h2>
            <h3>Governing Law</h3>
            <p>These Terms shall be governed by and construed in accordance with the <strong>laws of India</strong>, without regard to conflict of law principles.</p>

            <h3>Informal Resolution</h3>
            <p>Before initiating any formal proceedings, you agree to first contact us at <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a> and attempt to resolve the dispute informally within <strong>30 days</strong>.</p>

            <h3>Jurisdiction</h3>
            <p>If informal resolution fails, any disputes shall be subject to the <strong>exclusive jurisdiction of the courts in Bangalore, Karnataka, India</strong>.</p>

            <h3>Consumer Rights</h3>
            <p>Nothing in these Terms restricts your rights under the <strong>Consumer Protection Act, 2019</strong>. If you have a consumer dispute, you may approach the appropriate Consumer Disputes Redressal Commission.</p>
          </section>

          {/* ── 19. General Provisions ── */}
          <section>
            <h2>19. General Provisions</h2>

            <h3>Severability</h3>
            <p>If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect.</p>

            <h3>Waiver</h3>
            <p>Our failure to enforce any right or provision of these Terms shall not constitute a waiver of that right or provision. A waiver of any term shall not be deemed a further or continuing waiver of such term or any other term.</p>

            <h3>Assignment</h3>
            <p>You may not assign or transfer your rights or obligations under these Terms without our written consent. We may assign our rights and obligations to a successor in the event of a merger, acquisition, or sale of assets, with notice to you.</p>

            <h3>No Agency</h3>
            <p>Nothing in these Terms creates an employer-employee, agency, partnership, or joint venture relationship between you and us.</p>

            <h3>Electronic Communications</h3>
            <p>By using MediFamily, you consent to receiving electronic communications from us (email, in-app notifications). You agree that electronic notices satisfy any legal requirement for written communication.</p>
          </section>

          {/* ── 20. Modifications ── */}
          <section>
            <h2>20. Modifications to Terms</h2>
            <p>We reserve the right to modify these Terms at any time. When we make changes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>The updated Terms will be posted on this page with a new &quot;Last updated&quot; date</li>
              <li>For material changes, we will provide notice via email or in-app notification at least <strong>15 days</strong> before the changes take effect</li>
              <li>Your continued use of MediFamily after the effective date constitutes acceptance</li>
              <li>If you disagree with the updated Terms, you should stop using the Service and delete your account</li>
            </ul>
          </section>

          {/* ── 21. Modifications to Service ── */}
          <section>
            <h2>21. Modifications to Service</h2>
            <p>We reserve the right to modify, suspend, or discontinue any part of the Service at any time, with or without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation of the Service.</p>
            <p>As MediFamily is an open-source project, the source code will remain publicly available on GitHub even if the hosted service is discontinued.</p>
          </section>

          {/* ── 22. Contact ── */}
          <section>
            <h2>22. Contact Us</h2>
            <p>If you have any questions about these Terms:</p>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mt-4">
              <p><strong>Name:</strong> Sandeep Pandey</p>
              <p><strong>Email:</strong> <a href="mailto:sandeep@2xg.in" className="text-blue-600 hover:underline">sandeep@2xg.in</a></p>
              <p><strong>GitHub:</strong> <a href="https://MEDIFAMILY Issues" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">MEDIFAMILY Issues</a></p>
              <p><strong>Location:</strong> Bangalore, Karnataka, India</p>
            </div>
          </section>
        </div>
      </motion.article>
    </div>
  )
}
