import Link from 'next/link'
import { ReactNode } from 'react'

interface CTAButtonProps {
  href: string
  children: ReactNode
  variant?: 'gold' | 'outline' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function CTAButton({
  href,
  children,
  variant = 'gold',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  const variants = {
    gold: 'gold-gradient text-black font-heading font-bold hover:opacity-90',
    outline: 'border-2 border-gold text-gold font-heading font-bold hover:bg-gold hover:text-black',
    dark: 'bg-black text-white font-heading font-bold hover:bg-charcoal border border-white/20',
  }
  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200 ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </Link>
  )
}
