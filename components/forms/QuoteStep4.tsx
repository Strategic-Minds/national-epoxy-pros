'use client'

import { useRef, useState } from 'react'
import { QuoteFormData } from './QuoteWizard'
import { UploadCloud, X, FileText, Image as ImageIcon } from 'lucide-react'

interface StepProps {
  data: QuoteFormData
  updateData: (partial: Partial<QuoteFormData>) => void
  errors: Record<string, string>
}

const MAX_FILE_SIZE = 10 * 1024 * 1024
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf']

export default function QuoteStep4({ data, updateData, errors }: StepProps) {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [dragOver, setDragOver] = useState(false)
  const [fileError, setFileError] = useState('')

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return
    setFileError('')
    const validFiles: File[] = []

    Array.from(fileList).forEach((file) => {
      if (!ACCEPTED_TYPES.includes(file.type)) {
        setFileError('Only JPG, PNG, WebP, and PDF files are accepted')
        return
      }
      if (file.size > MAX_FILE_SIZE) {
        setFileError('Each file must be 10MB or less')
        return
      }
      validFiles.push(file)
    })

    if (validFiles.length > 0) {
      updateData({ files: [...data.files, ...validFiles] })
    }
  }

  const removeFile = (index: number) => {
    updateData({ files: data.files.filter((_, i) => i !== index) })
  }

  const formatSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h2 className="font-heading font-bold text-xl text-black mb-1">Photos & Notes</h2>
        <p className="text-slate-brand text-sm">Upload photos of your space and add any additional notes.</p>
      </div>

      {/* File Upload */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Upload Photos (optional)</label>
        <div
          onDragOver={(e) => { e.preventDefault(); setDragOver(true) }}
          onDragLeave={() => setDragOver(false)}
          onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files) }}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-xl p-8 text-center cursor-pointer transition-colors ${
            dragOver ? 'border-gold bg-gold/5' : 'border-light-gray hover:border-gold/50'
          }`}
        >
          <UploadCloud size={40} className="text-gold mx-auto mb-3" />
          <p className="text-sm font-medium text-black">Drag and drop files here, or click to browse</p>
          <p className="text-xs text-slate-brand mt-1">JPG, PNG, WebP, or PDF — max 10MB each</p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".jpg,.jpeg,.png,.webp,.pdf"
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
        </div>

        {fileError && <p className="text-red-500 text-xs mt-2">{fileError}</p>}

        {/* File list */}
        {data.files.length > 0 && (
          <div className="mt-4 space-y-2">
            {data.files.map((file, index) => (
              <div key={index} className="flex items-center gap-3 bg-light-gray rounded-lg p-3">
                {file.type === 'application/pdf' ? (
                  <FileText size={24} className="text-slate-brand" />
                ) : (
                  <ImageIcon size={24} className="text-slate-brand" />
                )}
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">{file.name}</p>
                  <p className="text-xs text-slate-brand">{formatSize(file.size)}</p>
                </div>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); removeFile(index) }}
                  className="text-slate-brand hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Notes */}
      <div>
        <label className="block text-sm font-semibold text-black mb-2">Additional Notes</label>
        <textarea
          value={data.notes}
          onChange={(e) => updateData({ notes: e.target.value })}
          placeholder="Anything else we should know about your project?"
          rows={4}
          maxLength={2000}
          className="w-full rounded-lg border border-light-gray px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors"
        />
      </div>
    </div>
  )
}
