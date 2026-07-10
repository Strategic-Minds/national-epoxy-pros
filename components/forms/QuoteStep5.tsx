import { QuoteFormData } from './QuoteWizard'
import { Check } from 'lucide-react'

interface StepProps {
  data: QuoteFormData
  updateData: (partial: Partial<QuoteFormData>) => void
  errors: Record<string, string>
}

const contactMethods = ['Phone', 'Email', 'Text']
const inputClass = 'w-full rounded-lg border border-light-gray px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors'
const errorClass = 'border-red-300 focus:border-red-500'

export default function QuoteStep5({ data, updateData, errors }: StepProps) {
  const summaryItems = [
    { label: 'Project Type', value: data.projectType },
    { label: 'Customer Type', value: data.customerType },
    { label: 'Square Footage', value: data.squareFootage ? `${data.squareFootage} sq ft` : '' },
    { label: 'Location', value: data.city ? `${data.city}, ${data.state} ${data.zip}` : '' },
    { label: 'Timeline', value: data.timeline },
    { label: 'Surface Type', value: data.surfaceType },
    { label: 'Floor System', value: data.floorSystem },
    { label: 'Finish', value: data.finish },
    { label: 'Photos Uploaded', value: `${data.files.length} file(s)` },
  ].filter((item) => item.value)

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-heading font-bold text-xl text-black mb-1">Contact Information</h2>
        <p className="text-slate-brand text-sm">Almost done! Tell us how to reach you.</p>
      </div>

      {/* Summary */}
      <div className="bg-light-gray rounded-lg p-4">
        <h3 className="font-heading font-semibold text-sm text-black mb-3">Project Summary</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
          {summaryItems.map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-sm">
              <Check size={14} className="text-gold flex-shrink-0" />
              <span className="text-slate-brand">{item.label}:</span>
              <span className="font-medium text-black truncate">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Full Name */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Full Name *</label>
        <input
          type="text"
          value={data.fullName}
          onChange={(e) => updateData({ fullName: e.target.value })}
          placeholder="John Smith"
          maxLength={100}
          className={`${inputClass} ${errors.fullName ? errorClass : ''}`}
        />
        {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Email *</label>
        <input
          type="email"
          value={data.email}
          onChange={(e) => updateData({ email: e.target.value })}
          placeholder="john@example.com"
          maxLength={200}
          className={`${inputClass} ${errors.email ? errorClass : ''}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Phone *</label>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => updateData({ phone: e.target.value })}
          placeholder="(555) 123-4567"
          maxLength={20}
          className={`${inputClass} ${errors.phone ? errorClass : ''}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>

      {/* Preferred Contact */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Preferred Contact Method *</label>
        <div className="grid grid-cols-3 gap-3">
          {contactMethods.map((method) => (
            <button
              key={method}
              type="button"
              onClick={() => updateData({ preferredContact: method })}
              className={`px-4 py-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                data.preferredContact === method
                  ? 'border-gold bg-gold/10 text-black'
                  : 'border-light-gray text-slate-brand hover:border-gold/50'
              }`}
            >
              {method}
            </button>
          ))}
        </div>
        {errors.preferredContact && <p className="text-red-500 text-xs mt-1">{errors.preferredContact}</p>}
      </div>

      {/* Best Time */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Best Time to Contact You</label>
        <input
          type="text"
          value={data.bestTime}
          onChange={(e) => updateData({ bestTime: e.target.value })}
          placeholder="e.g., Weekday mornings, evenings after 5pm"
          maxLength={100}
          className={inputClass}
        />
      </div>

      {/* Consent */}
      <div>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={data.consent}
            onChange={(e) => updateData({ consent: e.target.checked })}
            className="w-5 h-5 mt-0.5 rounded border-light-gray text-gold focus:ring-gold flex-shrink-0"
          />
          <span className="text-sm text-slate-brand leading-relaxed">
            I consent to be contacted by National Epoxy Pros regarding my quote request. I understand my information will be used solely for this purpose and will not be shared with third parties.
          </span>
        </label>
        {errors.consent && <p className="text-red-500 text-xs mt-1">{errors.consent}</p>}
      </div>
    </div>
  )
}
