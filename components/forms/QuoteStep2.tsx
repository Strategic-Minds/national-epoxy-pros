import { QuoteFormData } from './QuoteWizard'

interface StepProps {
  data: QuoteFormData
  updateData: (partial: Partial<QuoteFormData>) => void
  errors: Record<string, string>
}

const measurementMethods = [
  { value: 'tape', label: 'I measured with a tape measure' },
  { value: 'estimate', label: 'I am estimating' },
  { value: 'professional', label: 'A professional measured it' },
]

const surfaceTypes = ['Bare Concrete', 'Painted Concrete', 'Tile', 'Wood Subfloor', 'Other']
const existingCoatings = ['None', 'Paint', 'Epoxy/Coating (Intact)', 'Epoxy/Coating (Peeling)', 'Sealer', 'Unsure']

const inputClass = 'w-full rounded-lg border border-light-gray px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors'
const errorClass = 'border-red-300 focus:border-red-500'

export default function QuoteStep2({ data, updateData, errors }: StepProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-heading font-bold text-xl text-black mb-1">Measurements & Surface</h2>
        <p className="text-slate-brand text-sm">Help us understand your space dimensions and current surface.</p>
      </div>

      {/* Measurement Method */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">How did you measure? *</label>
        <div className="space-y-2">
          {measurementMethods.map((method) => (
            <button
              key={method.value}
              type="button"
              onClick={() => updateData({ measurementMethod: method.value })}
              className={`w-full text-left px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                data.measurementMethod === method.value
                  ? 'border-gold bg-gold/10 text-black'
                  : 'border-light-gray text-slate-brand hover:border-gold/50'
              }`}
            >
              {method.label}
            </button>
          ))}
        </div>
        {errors.measurementMethod && <p className="text-red-500 text-xs mt-1">{errors.measurementMethod}</p>}
      </div>

      {/* Length & Width */}
      {(data.measurementMethod === 'tape' || data.measurementMethod === 'professional') && (
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Length (ft) *</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={data.length}
              onChange={(e) => updateData({ length: e.target.value })}
              placeholder="e.g., 24"
              className={`${inputClass} ${errors.length ? errorClass : ''}`}
            />
            {errors.length && <p className="text-red-500 text-xs mt-1">{errors.length}</p>}
          </div>
          <div>
            <label className="block text-sm font-semibold text-black mb-2">Width (ft) *</label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={data.width}
              onChange={(e) => updateData({ width: e.target.value })}
              placeholder="e.g., 22"
              className={`${inputClass} ${errors.width ? errorClass : ''}`}
            />
            {errors.width && <p className="text-red-500 text-xs mt-1">{errors.width}</p>}
          </div>
        </div>
      )}

      {/* Access Notes */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Access Notes</label>
        <textarea
          value={data.accessNotes}
          onChange={(e) => updateData({ accessNotes: e.target.value })}
          placeholder="Any notes about access, stairs, tight spaces, parking, etc."
          rows={3}
          maxLength={1000}
          className={inputClass}
        />
      </div>

      {/* Surface Type */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Current Surface Type *</label>
        <select
          value={data.surfaceType}
          onChange={(e) => updateData({ surfaceType: e.target.value })}
          className={`${inputClass} ${errors.surfaceType ? errorClass : ''}`}
        >
          <option value="">Select surface type...</option>
          {surfaceTypes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {errors.surfaceType && <p className="text-red-500 text-xs mt-1">{errors.surfaceType}</p>}
      </div>

      {/* Existing Coating */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Existing Coating *</label>
        <select
          value={data.existingCoating}
          onChange={(e) => updateData({ existingCoating: e.target.value })}
          className={`${inputClass} ${errors.existingCoating ? errorClass : ''}`}
        >
          <option value="">Select existing coating...</option>
          {existingCoatings.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
        {errors.existingCoating && <p className="text-red-500 text-xs mt-1">{errors.existingCoating}</p>}
      </div>
    </div>
  )
}
