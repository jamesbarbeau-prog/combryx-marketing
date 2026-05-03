import Link from 'next/link'
import type { ReactNode } from 'react'

interface BtnProps {
  href: string
  children: ReactNode
  className?: string
}

export function BtnGold({ href, children, className = '' }: BtnProps) {
  return (
    <Link href={href} className={`btn-gold ${className}`}>
      {children}
    </Link>
  )
}

export function BtnGhost({ href, children, className = '' }: BtnProps) {
  return (
    <Link href={href} className={`btn-ghost ${className}`}>
      {children}
    </Link>
  )
}
