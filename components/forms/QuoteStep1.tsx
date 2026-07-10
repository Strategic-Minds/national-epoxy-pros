import { QuoteFormData } from './QuoteWizard'

interface StepProps {
  data: QuoteFormData
  updateData: (partial: Partial<QuoteFormData>) => void
  errors: Record<string, string>
}

const projectTypes = ['Garage', 'Commercial', 'Industrial', 'Other']
const customerTypes = ['Homeowner', 'Business Owner', 'Property Manager', 'Contractor']
const timelines = ['ASAP (within 2 weeks)', '1-2 months', '3-6 months', 'Just exploring options']

const inputClass = 'w-full rounded-lg border border-light-gray px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors'
const errorClass = 'border-red-300 focus:border-red-500'

export default function QuoteStep1({ data, updateData, errors }: StepProps) {
  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-heading font-bold text-xl text-black mb-1">Project Details</h2>
        <p className="text-slate-brand text-sm">Tell us about your project and location.</p>
      </div>

      {/* Project Type */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Project Type *</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {projectTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => updateData({ projectType: type })}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                data.projectType === type
                  ? 'border-gold bg-gold/10 text-black'
                  : 'border-light-gray text-slate-brand hover:border-gold/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        {errors.projectType && <p className="text-red-500 text-xs mt-1">{errors.projectType}</p>}
      </div>

      {/* Customer Type */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">I am a... *</label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {customerTypes.map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => updateData({ customerType: type })}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                data.customerType === type
                  ? 'border-gold bg-gold/10 text-black'
                  : 'border-light-gray text-slate-brand hover:border-gold/50'
              }`}
            >
              {type}
            </button>
          ))}
        </div>
        {errors.customerType && <p className="text-red-500 text-xs mt-1">{errors.customerType}</p>}
      </div>

      {/* Square Footage */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Approximate Square Footage *</label>
        <input
          type="number"
          min="1"
          value={data.squareFootage}
          onChange={(e) => updateData({ squareFootage: e.target.value })}
          placeholder="e.g., 500"
          className={`${inputClass} ${errors.squareFootage ? errorClass : ''}`}
        />
        {errors.squareFootage && <p className="text-red-500 text-xs mt-1">{errors.squareFootage}</p>}
      </div>

      {/* Location */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-semibold text-black mb-2">City *</label>
          <input
            type="text"
            value={data.city}
            onChange={(e) => updateData({ city: e.target.value })}
            placeholder="City"
            maxLength={100}
            className={`${inputClass} ${errors.city ? errorClass : ''}`}
          />
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">State *</label>
          <input
            type="text"
            value={data.state}
            onChange={(e) => updateData({ state: e.target.value })}
            placeholder="State"
            maxLength={50}
            className={`${inputClass} ${errors.state ? errorClass : ''}`}
          />
          {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
        </div>
        <div>
          <label className="block text-sm font-semibold text-black mb-2">ZIP Code *</label>
          <input
            type="text"
            value={data.zip}
            onChange={(e) => updateData({ zip: e.target.value })}
            placeholder="ZIP"
            maxLength={10}
            className={`${inputClass} ${errors.zip ? errorClass : ''}`}
          />
          {errors.zip && <p className="text-red-500 text-xs mt-1">{errors.zip}</p>}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Project Timeline *</label>
        <select
          value={data.timeline}
          onChange={(e) => updateData({ timeline: e.target.value })}
          className={`${inputClass} ${errors.timeline ? errorClass : ''}`}
        >
          <option value="">Select a timeline...</option>
          {timelines.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
        {errors.timeline && <p className="text-red-500 text-xs mt-1">{errors.timeline}</p>}
      </div>
    </div>
  )
}
