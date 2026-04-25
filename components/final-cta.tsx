import { Check } from 'lucide-react'

export function FinalCTA() {
  return (
    <section className="relative w-full py-12 md:py-24 px-4 bg-gradient-to-b from-blue-50 via-indigo-50 to-blue-50">
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
          Try the Family Health Record App India Loves.
        </h2>

        <p className="text-sm md:text-xl text-gray-700 mb-6 md:mb-10">
          Free family health record app. No signup wall. No ads. No hidden charges.
        </p>

        <a
          href="https://app.medifamily.in"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 md:px-12 py-4 md:py-5 text-base md:text-xl font-bold bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl hover:from-blue-600 hover:to-indigo-700 transition-colors shadow-xl shadow-blue-500/20"
        >
          Open MediFamily — It&apos;s Free
        </a>

        <div className="mt-10 flex flex-col md:flex-row justify-center gap-4 text-gray-800 text-sm md:text-base">
          <span className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> Free forever for families</span>
          <span className="hidden md:inline">•</span>
          <span className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> Works offline</span>
          <span className="hidden md:inline">•</span>
          <span className="inline-flex items-center gap-1"><Check className="h-4 w-4 text-green-500" /> Built in India, for Indian families</span>
        </div>
      </div>
    </section>
  )
}
