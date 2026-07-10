'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, ArrowRight, Check } from 'lucide-react'
import QuoteStep1 from './QuoteStep1'
import QuoteStep2 from './QuoteStep2'
import QuoteStep3 from './QuoteStep3'
import QuoteStep4 from './QuoteStep4'
import QuoteStep5 from './QuoteStep5'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

export interface QuoteFormData {
  // Step 1
  projectType: string
  customerType: string
  squareFootage: string
  city: string
  state: string
  zip: string
  timeline: string
  // Step 2
  measurementMethod: string
  length: string
  width: string
  accessNotes: string
  surfaceType: string
  existingCoating: string
  // Step 3
  floorSystem: string
  colorPreference: string
  finish: string
  concreteConditions: string[]
  coatingRemoval: boolean
  // Step 4
  files: File[]
  notes: string
  // Step 5
  fullName: string
  email: string
  phone: string
  preferredContact: string
  bestTime: string
  consent: boolean
}

const initialData: QuoteFormData = {
  projectType: '',
  customerType: '',
  squareFootage: '',
  city: '',
  state: '',
  zip: '',
  timeline: '',
  measurementMethod: '',
  length: '',
  width: '',
  accessNotes: '',
  surfaceType: '',
  existingCoating: '',
  floorSystem: '',
  colorPreference: '',
  finish: '',
  concreteConditions: [],
  coatingRemoval: false,
  files: [],
  notes: '',
  fullName: '',
  email: '',
  phone: '',
  preferredContact: '',
  bestTime: '',
  consent: false,
}

const stepLabels = ['Project Details', 'Measurements', 'Floor System', 'Photos & Notes', 'Contact Info']

export default function QuoteWizard() {
  const router = useRouter()
  const [step, setStep] = useState(1)
  const [data, setData] = useState<QuoteFormData>(initialData)
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const updateData = (partial: Partial<QuoteFormData>) => {
    setData((prev) => ({ ...prev, ...partial }))
  }

  const validateStep = (currentStep: number): boolean => {
    const newErrors: Record<string, string> = {}

    if (currentStep === 1) {
      if (!data.projectType) newErrors.projectType = 'Please select a project type'
      if (!data.customerType) newErrors.customerType = 'Please select a customer type'
      if (!data.squareFootage || parseInt(data.squareFootage) < 1) newErrors.squareFootage = 'Enter approximate square footage'
      if (!data.city.trim()) newErrors.city = 'City is required'
      if (!data.state.trim()) newErrors.state = 'State is required'
      if (!data.zip.trim()) newErrors.zip = 'ZIP code is required'
      if (!data.timeline) newErrors.timeline = 'Please select a timeline'
    }

    if (currentStep === 2) {
      if (!data.measurementMethod) newErrors.measurementMethod = 'Select a measurement method'
      if (data.measurementMethod === 'tape' || data.measurementMethod === 'professional') {
        if (!data.length.trim()) newErrors.length = 'Length is required'
        if (!data.width.trim()) newErrors.width = 'Width is required'
      }
      if (!data.surfaceType) newErrors.surfaceType = 'Select a surface type'
      if (!data.existingCoating) newErrors.existingCoating = 'Select an existing coating status'
    }

    if (currentStep === 3) {
      if (!data.floorSystem) newErrors.floorSystem = 'Please select a floor system'
      if (!data.finish) newErrors.finish = 'Please select a finish'
    }

    if (currentStep === 5) {
      if (!data.fullName.trim() || data.fullName.trim().length < 2) newErrors.fullName = 'Full name is required'
      if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) newErrors.email = 'Valid email is required'
      if (!data.phone.trim() || data.phone.replace(/[^0-9]/g, '').length < 10) newErrors.phone = 'Valid phone number is required'
      if (!data.preferredContact) newErrors.preferredContact = 'Select a preferred contact method'
      if (!data.consent) newErrors.consent = 'You must consent to be contacted'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleNext = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 5))
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1))
    setErrors({})
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleSubmit = async () => {
    if (!validateStep(5)) return
    setSubmitting(true)
    setSubmitError('')

    try {
      const payload = {
        project_type: data.projectType,
        customer_type: data.customerType,
        square_footage: parseInt(data.squareFootage) || 0,
        city: data.city.trim(),
        state: data.state.trim(),
        zip: data.zip.trim(),
        timeline: data.timeline,
        measurement_method: data.measurementMethod,
        length: parseFloat(data.length) || 0,
        width: parseFloat(data.width) || 0,
        access_notes: data.accessNotes.trim(),
        surface_type: data.surfaceType,
        existing_coating: data.existingCoating,
        floor_system: data.floorSystem,
        color_preference: data.colorPreference.trim(),
        finish: data.finish,
        concrete_conditions: data.concreteConditions,
        coating_removal: data.coatingRemoval,
        notes: data.notes.trim(),
        full_name: data.fullName.trim(),
        email: data.email.trim().toLowerCase(),
        phone: data.phone.trim(),
        preferred_contact: data.preferredContact,
        best_time: data.bestTime.trim(),
        consent: data.consent,
        file_count: data.files.length,
      }

      const res = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const result = await res.json()

      if (!res.ok) {
        throw new Error(result.error || result.message || 'Submission failed')
      }

      router.push(`/thank-you?ref=${result.quoteNumber}`)
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please try again or call us.')
      setSubmitting(false)
    }
  }

  const progress = (step / 5) * 100

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-3">
          {stepLabels.map((label, i) => (
            <div key={label} className="flex items-center flex-1 last:flex-none">
              <div className="flex items-center gap-2">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-colors ${
                    i + 1 < step
                      ? 'bg-gold text-black'
                      : i + 1 === step
                      ? 'bg-charcoal text-gold border-2 border-gold'
                      : 'bg-light-gray text-slate-brand'
                  }`}
                >
                  {i + 1 < step ? <Check size={16} /> : i + 1}
                </div>
                <span className={`text-xs font-medium hidden sm:inline ${i + 1 <= step ? 'text-black' : 'text-slate-brand'}`}>
                  {label}
                </span>
              </div>
              {i < stepLabels.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${i + 1 < step ? 'bg-gold' : 'bg-light-gray'}`} />
              )}
            </div>
          ))}
        </div>
        <div className="w-full bg-light-gray rounded-full h-1.5">
          <div className="gold-gradient h-1.5 rounded-full transition-all duration-300" style={{ width: `${progress}%` }} />
        </div>
      </div>

      {/* Step content */}
      <div className="bg-white rounded-xl border border-light-gray p-6 md:p-8">
        {step === 1 && <QuoteStep1 data={data} updateData={updateData} errors={errors} />}
        {step === 2 && <QuoteStep2 data={data} updateData={updateData} errors={errors} />}
        {step === 3 && <QuoteStep3 data={data} updateData={updateData} errors={errors} />}
        {step === 4 && <QuoteStep4 data={data} updateData={updateData} errors={errors} />}
        {step === 5 && <QuoteStep5 data={data} updateData={updateData} errors={errors} />}
      </div>

      {/* Error message */}
      {submitError && (
        <div className="mt-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-lg p-4">
          {submitError}
        </div>
      )}

      {/* Navigation buttons */}
      <div className="flex items-center justify-between mt-6">
        {step > 1 ? (
          <button
            onClick={handleBack}
            disabled={submitting}
            className="flex items-center gap-2 text-slate-brand hover:text-black text-sm font-medium disabled:opacity-50"
          >
            <ArrowLeft size={18} /> Back
          </button>
        ) : (
          <div />
        )}

        {step < 5 ? (
          <button
            onClick={handleNext}
            className="flex items-center gap-2 gold-gradient text-black font-heading font-bold px-6 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity"
          >
            Next <ArrowRight size={18} />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="flex items-center gap-2 gold-gradient text-black font-heading font-bold px-8 py-3 rounded-lg text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
          >
            {submitting ? 'Submitting...' : 'Submit Quote Request'}
          </button>
        )}
      </div>

      {submitting && (
        <div className="mt-6 flex justify-center">
          <LoadingSpinner label="Submitting your quote request..." />
        </div>
      )}
    </div>
  )
}
