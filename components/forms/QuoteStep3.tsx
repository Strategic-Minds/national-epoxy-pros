import { QuoteFormData } from './QuoteWizard'

interface StepProps {
  data: QuoteFormData
  updateData: (partial: Partial<QuoteFormData>) => void
  errors: Record<string, string>
}

const floorSystems = [
  { value: 'Flake', label: 'Flake — Decorative, textured, slip-resistant' },
  { value: 'Metallic', label: 'Metallic — Pearlescent, 3D-like, high-end' },
  { value: 'Solid Color', label: 'Solid Color — Clean, uniform, modern' },
  { value: 'Quartz', label: 'Quartz — Durable, high-traffic, safety' },
  { value: 'Polished Concrete', label: 'Polished Concrete — Natural, low-maintenance' },
]

const finishes = ['High-Gloss', 'Satin', 'Matte']
const concreteConditions = ['Cracks', 'Stains/Oil', 'Spalling/Pitting', 'Moisture Issues', 'Uneven/Joints', 'Good Condition']

const inputClass = 'w-full rounded-lg border border-light-gray px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors'
const errorClass = 'border-red-300 focus:border-red-500'

export default function QuoteStep3({ data, updateData, errors }: StepProps) {
  const toggleCondition = (condition: string) => {
    const conditions = data.concreteConditions.includes(condition)
      ? data.concreteConditions.filter((c) => c !== condition)
      : [...data.concreteConditions, condition]
    updateData({ concreteConditions: conditions })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-heading font-bold text-xl text-black mb-1">Floor System & Finish</h2>
        <p className="text-slate-brand text-sm">Choose your preferred system, color, and finish.</p>
      </div>

      {/* Floor System */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Floor System *</label>
        <div className="space-y-2">
          {floorSystems.map((system) => (
            <button
              key={system.value}
              type="button"
              onClick={() => updateData({ floorSystem: system.value })}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                data.floorSystem === system.value
                  ? 'border-gold bg-gold/10 text-black'
                  : 'border-light-gray text-slate-brand hover:border-gold/50'
              }`}
            >
              {system.label}
            </button>
          ))}
        </div>
        {errors.floorSystem && <p className="text-red-500 text-xs mt-1">{errors.floorSystem}</p>}
      </div>

      {/* Color Preference */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Color Preference</label>
        <textarea
          value={data.colorPreference}
          onChange={(e) => updateData({ colorPreference: e.target.value })}
          placeholder="e.g., Light gray with dark flakes, or metallic bronze..."
          rows={2}
          maxLength={500}
          className={inputClass}
        />
      </div>

      {/* Finish */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Finish *</label>
        <div className="grid grid-cols-3 gap-3">
          {finishes.map((finish) => (
            <button
              key={finish}
              type="button"
              onClick={() => updateData({ finish })}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                data.finish === finish
                  ? 'border-gold bg-gold/10 text-black'
                  : 'border-light-gray text-slate-brand hover:border-gold/50'
              }`}
            >
              {finish}
            </button>
          ))}
        </div>
        {errors.finish && <p className="text-red-500 text-xs mt-1">{errors.finish}</p>}
      </div>

      {/* Concrete Conditions */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Concrete Condition (select all that apply)</label>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {concreteConditions.map((condition) => (
            <button
              key={condition}
              type="button"
              onClick={() => toggleCondition(condition)}
              className={`px-3 py-2.5 rounded-lg border-2 text-xs font-medium transition-colors ${
                data.concreteConditions.includes(condition)
                  ? 'border-gold bg-gold/10 text-black'
                  : 'border-light-gray text-slate-brand hover:border-gold/50'
              }`}
            >
              {condition}
            </button>
          ))}
        </div>
      </div>

      {/* Coating Removal */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.coatingRemoval}
            onChange={(e) => updateData({ coatingRemoval: e.target.checked })}
            className="w-5 h-5 rounded border-light-gray text-gold focus:ring-gold"
          />
          <span className="text-sm font-medium text-black">I need existing coating removed</span>
        </label>
      </div>
    </div>
  )
}
