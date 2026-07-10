interface LoadingSpinnerProps {
  size?: number
  label?: string
}

export default function LoadingSpinner({ size = 40, label }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <div
        className="animate-spin rounded-full border-4 border-light-gray border-t-gold"
        style={{ width: size, height: size }}
      />
      {label && <p className="text-slate-brand text-sm">{label}</p>}
    </div>
  )
}
