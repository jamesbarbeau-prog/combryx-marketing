'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/',             label: 'Home' },
  { href: '/platform',     label: 'Platform' },
  { href: '/how-it-works', label: 'How It Works' },
  { href: '/about',        label: 'Our Story' },
  { href: '/pricing',      label: 'Pricing' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 h-14 flex items-center justify-between px-8 transition-all duration-300 ${scrolled ? 'bg-black/95 border-b border-[rgba(255,184,0,0.12)]' : 'bg-black/80'} backdrop-blur-xl`}>
      <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
        <div className="w-7 h-7 bg-cb-gold relative flex items-center justify-center"
          style={{ clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', boxShadow:'0 0 12px rgba(255,184,0,0.3)' }}>
          <span className="text-black text-[10px] font-bold absolute">✦</span>
        </div>
        <span className="font-display text-xl tracking-widest text-cb-white">
          COM<span className="text-cb-gold">BRYX</span>
        </span>
      </Link>
      <div className="hidden md:flex items-center">
        {links.map(l => (
          <Link key={l.href} href={l.href}
            className={`font-mono text-[10px] uppercase tracking-widest px-4 h-14 flex items-center transition-colors duration-150 border-b-2 no-underline ${pathname === l.href ? 'text-cb-gold border-cb-gold' : 'text-cb-muted border-transparent hover:text-cb-gold'}`}>
            {l.label}
          </Link>
        ))}
      </div>
      <div className="flex items-center gap-3">
        <Link href="/pricing"
          className="hidden sm:inline-flex bg-cb-gold text-black font-mono text-[10px] font-semibold uppercase tracking-widest px-5 py-2.5 rounded-md transition-all duration-200 hover:bg-cb-gold2 hover:-translate-y-px no-underline"
          style={{ boxShadow:'0 0 16px rgba(255,184,0,0.2)' }}>
          Get Started →
        </Link>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)}>
          <span className={`block w-5 h-0.5 bg-cb-gold transition-all ${open ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-cb-gold transition-all ${open ? 'opacity-0' : ''}`}/>
          <span className={`block w-5 h-0.5 bg-cb-gold transition-all ${open ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>
      {open && (
        <div className="absolute top-14 left-0 right-0 bg-cb-dark2 border-b border-[rgba(255,184,0,0.12)] md:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className={`block font-mono text-[11px] uppercase tracking-widest px-8 py-4 border-b border-[rgba(255,255,255,0.05)] no-underline ${pathname === l.href ? 'text-cb-gold' : 'text-cb-muted'}`}>
              {l.label}
            </Link>
          ))}
          <div className="p-6">
            <Link href="/pricing" className="block bg-cb-gold text-black font-mono text-[11px] font-semibold uppercase tracking-widest py-3 text-center rounded-md no-underline">
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
