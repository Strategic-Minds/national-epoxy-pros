'use client'

import { useRef, useState } from 'react'

interface BeforeAfterViewerProps {
  beforeAlt: string
  afterAlt: string
  label?: string
}

export default function BeforeAfterViewer({ beforeAlt, afterAlt, label = 'Before / After' }: BeforeAfterViewerProps) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.max(0, Math.min(100, x)))
  }

  return (
    <div className="w-full">
      {label && (
        <p className="text-center text-slate-brand text-sm mb-3 font-medium">{label}</p>
      )}
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] rounded-xl overflow-hidden cursor-ew-resize select-none bg-light-gray"
        onMouseMove={(e) => e.buttons === 1 && handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* After (background) */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-black flex items-center justify-center">
          <span className="text-white/30 text-sm">After — {afterAlt}</span>
        </div>
        {/* Before (foreground, clipped) */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-light-gray to-slate-brand/30 flex items-center justify-center overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <span className="text-black/30 text-sm">Before — {beforeAlt}</span>
        </div>
        {/* Slider line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-gold pointer-events-none"
          style={{ left: `${position}%` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full gold-gradient flex items-center justify-center shadow-lg">
            <span className="text-black text-xs font-bold">⟔</span>
          </div>
        </div>
        {/* Labels */}
        <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-2 py-1 rounded">Before</div>
        <div className="absolute top-3 right-3 bg-gold/80 text-black text-xs px-2 py-1 rounded">After</div>
      </div>
      <p className="text-center text-slate-brand text-xs mt-2">Drag to compare</p>
    </div>
  )
}
