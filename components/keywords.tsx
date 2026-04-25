// SEO content section — keywords Indians actually search for
const searchedAs = [
  'family health record app',
  'medicine reminder app',
  'prescription scanner app',
  'health record app India',
  'offline health app',
  'AI prescription scanner',
  'lab report analyzer app',
  'emergency health card app',
  'medical records app for family',
  'doctor sharing app QR',
  'best health app India',
  'health app for parents',
  'dawai reminder app',
  'prescription save karne wala app',
  'health record rakhne wala app',
  'parivaar health app',
]

export function Keywords() {
  return (
    <section className="py-8 md:py-12 px-4 bg-white border-t border-gray-100">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs md:text-sm text-gray-400 mb-3">Also known as</p>
        <div className="flex flex-wrap justify-center gap-2 text-[11px] md:text-sm">
          {searchedAs.map((k) => (
            <span key={k} className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full border border-gray-100">
              {k}
            </span>
          ))}
        </div>
        <p className="text-xs md:text-sm text-gray-500 mt-6 max-w-2xl mx-auto leading-relaxed">
          MediFamily is the family health record app India families use for prescriptions, medicines, lab reports, and emergency health cards. As a medicine reminder app, prescription scanner app, and offline health app combined — one app for the whole family.
        </p>
      </div>
    </section>
  )
}
