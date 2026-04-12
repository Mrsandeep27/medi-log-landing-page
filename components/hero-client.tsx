'use client'

export function HeroClient() {
  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
      <a
        href="https://app.medifamily.in"
        target="_blank"
        rel="noopener noreferrer"
        className="px-6 py-3 md:px-8 md:py-4 bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold rounded-xl text-center shadow-lg shadow-blue-500/25 transition-all text-base md:text-lg"
      >
        Open MediFamily
      </a>
      <button
        onClick={scrollToFeatures}
        className="px-6 py-3 md:px-8 md:py-4 border-2 border-indigo-500/50 text-indigo-600 hover:bg-indigo-500/10 font-semibold rounded-xl transition-colors"
      >
        See How It Works
      </button>
    </div>
  )
}
