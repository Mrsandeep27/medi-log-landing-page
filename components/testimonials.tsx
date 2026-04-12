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
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2 md:mb-4">
            <span className="gradient-underline visible">Families Love MediFamily</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className="glass rounded-xl p-5 relative overflow-hidden"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
