import { FileX, Pill, AlertTriangle } from 'lucide-react'
import { type ReactNode } from 'react'

const problems: { icon: ReactNode; title: string; description: string }[] = [
  {
    icon: <FileX className="h-6 w-6 text-red-500" />,
    title: 'Doctor asked for last year\'s prescription.',
    description: 'Can\'t find it. Drawer mein kahin kho gaya.',
  },
  {
    icon: <Pill className="h-6 w-6 text-red-500" />,
    title: 'Papa ki medicine khatam ho gayi.',
    description: 'Kaunsi thi yaad nahi. Dosage bhi bhool gaye.',
  },
  {
    icon: <AlertTriangle className="h-6 w-6 text-red-500" />,
    title: 'Emergency — nobody knows blood group.',
    description: 'Allergies? Chronic conditions? Kisi ko nahi pata.',
  },
]

export function Problems() {
  return (
    <section className="py-8 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="gradient-underline visible">Sound Familiar?</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 mb-4 md:mb-12">
          {problems.map((problem, i) => (
            <div
              key={i}
              className="glass rounded-xl p-3 md:p-6 border border-red-200 hover:border-red-300 transition-colors"
            >
              <div className="flex items-center gap-3 md:block">
                <div className="w-8 h-8 md:w-12 md:h-12 rounded-xl bg-red-50 flex items-center justify-center flex-shrink-0 md:mb-4">
                  {problem.icon}
                </div>
                <div>
                  <h3 className="text-sm md:text-lg font-bold text-gray-900">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-xs md:text-base">{problem.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-base md:text-xl text-gray-900 font-semibold">
            MediFamily — the family health record app India trusts. Fixes all of this, and works without internet.
          </p>
        </div>
      </div>
    </section>
  )
}
