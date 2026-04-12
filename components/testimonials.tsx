import { Star, MapPin, BadgeCheck } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya',
    city: 'Mumbai',
    quote: "Mummy ki saari reports ek jagah mil gayi. Doctor ne bhi impress ho gaye jab QR se dikhaya!",
    rating: 5,
  },
  {
    name: 'Rajesh',
    city: 'Jaipur',
    quote: 'Medicine ka reminder best feature hai. Pehle roz bhool jaata tha, ab notification aa jaata hai.',
    rating: 5,
  },
  {
    name: 'Anita',
    city: 'Bangalore',
    quote: 'Emergency card se Papa ki blood group aur allergies ek tap mein mil jaati hai. Life saver hai!',
    rating: 5,
  },
]

function getInitials(name: string) {
  return name.split(' ').map((w) => w[0]).join('').toUpperCase()
}

export function Testimonials() {
  return (
    <section className="py-6 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-4 md:mb-16">
          <h2 className="text-xl md:text-4xl font-bold text-gray-900 mb-1 md:mb-4">
            <span className="gradient-underline visible">Families Love MediFamily</span>
          </h2>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-2.5 md:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-4 px-4 md:mx-0 md:px-0 pb-2 md:pb-0">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="glass rounded-xl p-3 md:p-5 relative overflow-hidden w-[calc(100vw-3rem)] max-w-[calc(100vw-3rem)] md:w-auto md:max-w-none snap-center flex-shrink-0"
            >
              <div
                className="absolute top-1 right-3 text-6xl md:text-8xl font-serif text-blue-500/10 leading-none select-none pointer-events-none"
                aria-hidden="true"
              >
                &ldquo;
              </div>

              <div className="flex items-center gap-2 md:gap-3 mb-1.5 md:mb-4 relative z-10">
                <div
                  className="w-9 h-9 md:w-12 md:h-12 rounded-full p-[2px] md:p-[2.5px] flex-shrink-0"
                  style={{ background: 'linear-gradient(180deg, #FF9933 0%, #FFFFFF 50%, #138808 100%)' }}
                >
                  <div className="w-full h-full rounded-full bg-blue-100 flex items-center justify-center">
                    <span className="text-xs md:text-sm font-bold text-blue-700">{getInitials(testimonial.name)}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 md:block">
                  <p className="font-bold text-gray-900 text-sm md:text-base">{testimonial.name}</p>
                  <p className="text-gray-500 text-xs md:text-sm flex items-center gap-1">
                    <MapPin className="h-3 w-3" /> {testimonial.city}
                  </p>
                </div>
                <div className="flex gap-0.5 md:hidden ml-auto">
                  {Array.from({ length: testimonial.rating }).map((_, j) => (
                    <Star key={j} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>

              <div className="hidden md:flex gap-1 mb-4 relative z-10">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-800 mb-2 md:mb-5 text-sm md:text-base italic leading-snug md:leading-relaxed relative z-10 break-words">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="relative z-10 pt-1.5 md:pt-3 border-t border-blue-200/50">
                <span className="inline-flex items-center gap-1 text-[10px] md:text-xs font-medium text-green-600">
                  <BadgeCheck className="h-3 w-3" /> Verified User
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
