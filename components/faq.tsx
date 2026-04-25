// Visible FAQ — mirrors JSON-LD FAQPage schema for max AI citation rate
const faqs = [
  {
    q: 'Does MediFamily work without internet?',
    a: 'Yes. MediFamily is the family health record app India families use offline. All records are stored locally on your phone using IndexedDB. You can view records, get medicine reminders, and access your emergency health card without any internet connection. Data automatically syncs to the cloud (AWS Mumbai) when you reconnect.',
  },
  {
    q: 'Can I manage health records for my whole family?',
    a: 'Yes. As a true family health record app India was missing, MediFamily lets one account cover unlimited family members — parents, spouse, children, grandparents. Each family member gets a separate profile with their own prescriptions, medicines, lab reports, vaccination history, and health vitals.',
  },
  {
    q: 'How much does MediFamily cost?',
    a: 'MediFamily is currently in early access and free to use during this period. There are no ads and no data selling. Premium features may be introduced in the future, with at least 30 days of advance notice before any pricing changes.',
  },
  {
    q: 'Does MediFamily support Hindi prescriptions?',
    a: 'Yes. The AI prescription scanner works with both Hindi and English prescriptions, including handwritten ones. It uses Google Gemini AI and local Tesseract OCR to extract medicine names, dosages, and instructions accurately.',
  },
  {
    q: 'How do I share health records with my doctor?',
    a: 'MediFamily generates a secure, time-limited QR code (default expiry: 24 hours, configurable). Your doctor scans the QR code on their phone and sees a read-only view of the relevant records. No MediFamily account is required for the doctor. You can revoke any share link at any time.',
  },
  {
    q: 'Is my health data safe with MediFamily?',
    a: 'Your health data stays on your phone first — that\'s the privacy promise of the family health record app India trusts. Optional cloud backup is hosted on AWS Mumbai with AES-256 encryption at rest and TLS 1.2+ in transit. Row-Level Security ensures only you can access your records. We do not show ads, do not sell data, and use no third-party analytics or tracking cookies. The codebase is open source and publicly auditable.',
  },
]

export function FAQ() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="gradient-underline visible">Family Health Record App India FAQ</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2">
            Everything you need to know about the family health record app India trusts.
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group bg-white border border-gray-200 rounded-xl px-5 py-4 hover:border-blue-300 transition-colors"
              {...(i === 0 ? { open: true } : {})}
            >
              <summary className="font-semibold text-gray-900 cursor-pointer text-sm md:text-base flex justify-between items-start gap-3 list-none">
                <span>{faq.q}</span>
                <span className="text-blue-500 group-open:rotate-45 transition-transform text-xl leading-none">+</span>
              </summary>
              <p className="text-gray-700 text-sm md:text-base leading-relaxed mt-3">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
