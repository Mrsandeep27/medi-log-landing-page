'use client'

import { motion } from 'motion/react'
import { Star, MapPin, BadgeCheck } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya',
    city: 'Mumbai',
    quote: "Papa ki saari reports ek jagah. Doctor impressed ho gaye jab QR se dikhaya — sab kuch 2 second mein!",
    rating: 5,
  },
  {
    name: 'Rajesh',
    city: 'Jaipur',
    quote: 'Maa ki 5 medicines ka reminder set kiya. Pehle roz bhool jaata tha, ab notification aa jaata hai on time.',
    rating: 5,
  },
  {
    name: 'Anita',
    city: 'Bangalore',
    quote: 'Emergency mein bhai ka blood group chahiye tha. MediFamily mein ek tap mein mil gaya. Lifesaver app hai!',
    rating: 5,
  },
]

function getInitials(name: string) {
  return name.split(' ').map((w) => w[0]).join('').toUpperCase()
}

export function Testimonials() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-16"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            <span className="gradient-underline visible">Families Love MediFamily</span>
          </h2>
        </motion.div>

        <div className="flex md:grid md:grid-cols-3 gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass rounded-xl p-5 relative overflow-hidden min-w-[280px] max-w-[85vw] md:max-w-none md:min-w-0 snap-center flex-shrink-0"
            >
              <div
                className="absolute top-2 right-4 text-8xl font-serif text-blue-500/10 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div
                  className="w-12 h-12 rounded-full p-[2.5px] flex-shrink-0"
                  style={{ background: 'linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)' }}
                >
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-sm font-bold text-blue-700">{getInitials(testimonial.name)}</span>
                  </div>
                </div>
                <div>
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {testimonial.city}
                  </p>
                </div>
              </div>

              <div className="flex gap-1 mb-4 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-800 mb-5 text-base italic leading-relaxed relative z-10 break-words">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="relative z-10 pt-3 border-t border-blue-200/50">
                <span className="inline-flex items-center gap-1 text-xs font-medium text-green-600">
                  <BadgeCheck className="h-3 w-3" /> Verified User
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
