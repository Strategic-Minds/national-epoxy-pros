'use client'

import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import CTAButton from '@/components/ui/CTAButton'

const systems = [
  { id: 'flake', name: 'Decorative Flake', colors: ['Desert Sand', 'Slate Gray', 'Galaxy Black', 'Beach Blend', 'Earth Tone'] },
  { id: 'metallic', name: 'Metallic Epoxy', colors: ['Champagne', 'Gunmetal', 'Bronze', 'Pearl', 'Midnight'] },
  { id: 'solid', name: 'Solid Color', colors: ['Charcoal', 'Dove Gray', 'Slate Blue', 'Warm White', 'Jet Black'] },
  { id: 'quartz', name: 'Quartz Broadcast', colors: ['Sandstone', 'Granite Gray', 'Canyon', 'Bone'] },
  { id: 'polished', name: 'Polished Concrete', colors: ['Natural Cream', 'Salt & Pepper', 'Charcoal Grind'] },
]

export default function VisualizerPage() {
  const [selectedSystem, setSelectedSystem] = useState(systems[0])
  const [selectedColor, setSelectedColor] = useState(systems[0].colors[0])
  const [uploadedImage, setUploadedImage] = useState<string | null>(null)

  function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    if (file.size > 10 * 1024 * 1024) {
      alert('Please upload an image under 10MB.')
      return
    }
    const reader = new FileReader()
    reader.onload = (ev) => setUploadedImage(ev.target?.result as string)
    reader.readAsDataURL(file)
  }

  function handleSystemChange(system: typeof systems[0]) {
    setSelectedSystem(system)
    setSelectedColor(system.colors[0])
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#080808]">
        <section className="py-16 px-6 text-center">
          <p className="text-[#D4AF37] text-sm font-semibold tracking-widest uppercase mb-4">Floor Visualizer</p>
          <h1 className="text-4xl md:text-5xl font-black text-white mb-4">See Your Floor Before You Commit</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Upload a photo of your space and explore floor system options. Results are visual concept references only — not production renders.
          </p>
          <div className="mt-3 inline-block bg-[#1a1400] border border-[#D4AF37]/30 text-[#D4AF37] text-xs px-4 py-2 rounded-full">
            Simulation concept — output is for reference purposes only
          </div>
        </section>

        <section className="pb-20 px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Controls */}
            <div className="space-y-6">
              {/* Upload */}
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
                <h2 className="text-white font-bold mb-4">1. Upload Your Space</h2>
                <label className="block cursor-pointer">
                  <input type="file" accept="image/*" className="sr-only" onChange={handleImageUpload} />
                  <div className="border-2 border-dashed border-[#333] rounded-xl p-8 text-center hover:border-[#D4AF37]/50 transition-colors">
                    {uploadedImage ? (
                      <div>
                        <p className="text-green-400 text-sm font-semibold mb-1">✓ Image uploaded</p>
                        <p className="text-gray-500 text-xs">Click to replace</p>
                      </div>
                    ) : (
                      <div>
                        <div className="w-12 h-12 border-2 border-[#333] rounded-lg mx-auto mb-3 flex items-center justify-center">
                          <svg className="w-6 h-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                        </div>
                        <p className="text-gray-400 text-sm">Drop a photo or click to browse</p>
                        <p className="text-gray-600 text-xs mt-1">JPEG, PNG, or WebP · Max 10MB</p>
                      </div>
                    )}
                  </div>
                </label>
              </div>

              {/* System selection */}
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
                <h2 className="text-white font-bold mb-4">2. Choose a Floor System</h2>
                <div className="space-y-2">
                  {systems.map(s => (
                    <button
                      key={s.id}
                      onClick={() => handleSystemChange(s)}
                      className={`w-full text-left px-4 py-3 rounded-xl border transition-colors ${
                        selectedSystem.id === s.id
                          ? 'border-[#D4AF37] bg-[#1a1400] text-[#D4AF37]'
                          : 'border-[#222] text-gray-400 hover:border-[#444]'
                      }`}
                    >
                      {s.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color selection */}
              <div className="bg-[#111] border border-[#222] rounded-2xl p-6">
                <h2 className="text-white font-bold mb-4">3. Select a Color</h2>
                <div className="flex flex-wrap gap-2">
                  {selectedSystem.colors.map(c => (
                    <button
                      key={c}
                      onClick={() => setSelectedColor(c)}
                      className={`px-3 py-2 rounded-lg border text-sm transition-colors ${
                        selectedColor === c
                          ? 'border-[#D4AF37] bg-[#1a1400] text-[#D4AF37]'
                          : 'border-[#333] text-gray-400 hover:border-[#555]'
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Preview */}
            <div>
              <div className="bg-[#111] border border-[#222] rounded-2xl overflow-hidden sticky top-6">
                <div className="p-4 border-b border-[#222] flex items-center justify-between">
                  <span className="text-white font-semibold">Preview</span>
                  <span className="text-[#D4AF37] text-xs bg-[#1a1400] px-3 py-1 rounded-full">Concept reference only</span>
                </div>

                <div className="aspect-[4/3] relative">
                  {uploadedImage ? (
                    <div className="relative w-full h-full">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={uploadedImage} alt="Your space" className="w-full h-full object-cover" />
                      {/* Overlay to simulate floor system */}
                      <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                        <div>
                          <p className="text-[#D4AF37] text-xs font-semibold uppercase tracking-widest">{selectedSystem.name}</p>
                          <p className="text-white text-sm">{selectedColor}</p>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="w-full h-full bg-[#0d0d0d] flex flex-col items-center justify-center">
                      <p className="text-gray-600 text-sm mb-2">Upload a photo to preview</p>
                      <p className="text-gray-700 text-xs">Selected: {selectedSystem.name} · {selectedColor}</p>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="mb-4 p-3 bg-[#0d0d0d] rounded-lg">
                    <div className="text-xs text-gray-500 mb-1">Selected configuration</div>
                    <div className="text-white text-sm font-semibold">{selectedSystem.name}</div>
                    <div className="text-gray-400 text-sm">{selectedColor}</div>
                  </div>
                  <CTAButton href={`/quote?system=${selectedSystem.id}&color=${encodeURIComponent(selectedColor)}`}>
                    Get a Quote for This System
                  </CTAButton>
                  <p className="text-gray-600 text-xs text-center mt-3">
                    Output is a visual concept only. Actual results depend on concrete condition, surface prep, and application.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
