import { Users, WifiOff, Heart, Bell, Camera } from 'lucide-react'
import { type ReactNode } from 'react'

const features: { icon: ReactNode; title: string; description: string; accent: string; bgColor: string }[] = [
  {
    icon: <Users className="h-7 w-7 text-blue-500" />,
    title: 'Family-First: One Login, Everyone\'s Health',
    description: 'Papa\'s BP, Maa\'s sugar, your reports, kids\' vaccinations — one account covers the entire family.',
    accent: 'bento-blue',
    bgColor: 'bg-blue-50',
  },
  {
    icon: <WifiOff className="h-7 w-7 text-teal-500" />,
    title: 'Works Offline: No Internet? No Problem',
    description: 'Your records are always on your phone. Syncs when you\'re back online. Village mein bhi chalega.',
    accent: 'bento-teal',
    bgColor: 'bg-teal-50',
  },
  {
    icon: <Heart className="h-7 w-7 text-red-500" />,
    title: 'Emergency Card: Blood Group, Allergies, Medicines — One Tap',
    description: 'Shareable via WhatsApp in seconds. Could save a life in an emergency.',
    accent: 'bento-pink',
    bgColor: 'bg-red-50',
  },
  {
    icon: <Camera className="h-7 w-7 text-indigo-500" />,
    title: 'Prescription Scanner: Hindi + English, Handwritten or Printed',
    description: 'Point your camera, AI extracts medicines, dosage, and instructions. Works with doctor\'s handwriting too.',
    accent: 'bento-indigo',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: <Bell className="h-7 w-7 text-purple-500" />,
    title: 'Medicine Reminders: Never Miss a Dose',
    description: 'Push notifications on time. Streaks + adherence tracking for the whole family.',
    accent: 'bento-purple',
    bgColor: 'bg-purple-50',
  },
]

export function Features() {
  return (
    <section id="features" className="py-8 md:py-24 px-4 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            <span className="gradient-underline visible">Why Families Choose MediFamily</span>
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-2 md:mt-4 max-w-2xl mx-auto">
            The family health record app India built for real family needs — offline, free, and made for every member.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`glass glass-hover rounded-lg md:rounded-xl px-3 py-2.5 md:p-8 transition-colors duration-200 ${feature.accent}`}
            >
              <div className="flex items-center gap-2.5 md:block">
                <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg ${feature.bgColor} flex items-center justify-center flex-shrink-0 md:mb-4`}>
                  {feature.icon}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm md:text-lg font-bold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-xs md:text-base leading-snug md:leading-relaxed md:mt-2">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
