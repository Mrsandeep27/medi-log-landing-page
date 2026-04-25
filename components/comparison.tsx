import { Check, X, Minus } from 'lucide-react'

const features = [
  { name: 'Family health profiles', medifamily: true, practo: false, onemg: false, apollo: false },
  { name: 'Works offline', medifamily: true, practo: false, onemg: false, apollo: false },
  { name: 'Hindi prescription scanner', medifamily: true, practo: false, onemg: false, apollo: false },
  { name: 'Privacy-first (data on YOUR phone)', medifamily: true, practo: false, onemg: false, apollo: false },
  { name: 'Emergency health card', medifamily: true, practo: false, onemg: false, apollo: false },
  { name: 'Medicine reminders', medifamily: true, practo: true, onemg: true, apollo: true },
  { name: 'Doctor sharing via QR', medifamily: true, practo: false, onemg: false, apollo: false },
  { name: 'No ads, no data selling', medifamily: true, practo: false, onemg: false, apollo: false },
]

function Cell({ value }: { value: boolean }) {
  return value
    ? <Check className="h-4 w-4 text-green-600 mx-auto" />
    : <X className="h-4 w-4 text-gray-300 mx-auto" />
}

export function Comparison() {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            <span className="gradient-underline visible">Why MediFamily Over Other Apps?</span>
          </h2>
        </div>

        <div className="overflow-x-auto -mx-4 px-4">
          <table className="w-full text-sm border-collapse min-w-[500px]">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-3 pr-4 font-semibold text-gray-700">Feature</th>
                <th className="py-3 px-2 font-bold text-blue-600 text-center">MediFamily</th>
                <th className="py-3 px-2 font-medium text-gray-500 text-center">Practo</th>
                <th className="py-3 px-2 font-medium text-gray-500 text-center">1mg</th>
                <th className="py-3 px-2 font-medium text-gray-500 text-center">Apollo 247</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((f) => (
                <tr key={f.name} className="hover:bg-gray-50/50">
                  <td className="py-3 pr-4 text-gray-800 font-medium">{f.name}</td>
                  <td className="py-3 px-2 bg-blue-50/30"><Cell value={f.medifamily} /></td>
                  <td className="py-3 px-2 text-center"><Cell value={f.practo} /></td>
                  <td className="py-3 px-2 text-center"><Cell value={f.onemg} /></td>
                  <td className="py-3 px-2 text-center"><Cell value={f.apollo} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Comparison based on publicly available features as of April 2026.
        </p>
      </div>
    </section>
  )
}
