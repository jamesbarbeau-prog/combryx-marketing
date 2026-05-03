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
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      height: 56,
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      padding: '0 40px',
      background: scrolled ? 'rgba(0,0,0,0.97)' : 'rgba(0,0,0,0.85)',
      backdropFilter: 'blur(24px)',
      borderBottom: '1px solid rgba(255,184,0,0.12)',
      transition: 'background 0.3s',
    }}>
      {/* Logo */}
      <Link href="/" style={{ display:'flex', alignItems:'center', gap:10, textDecoration:'none' }}>
        <div style={{
          width: 28, height: 28,
          background: '#FFB800',
          clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 0 14px rgba(255,184,0,0.35)',
          position: 'relative',
          flexShrink: 0,
        }}>
          <span style={{ color:'#000', fontSize:11, fontWeight:'bold', position:'absolute' }}>✦</span>
        </div>
        <span style={{ fontFamily:"'Bebas Neue', sans-serif", fontSize:20, letterSpacing:'0.1em', color:'#F5F5F5' }}>
          COM<span style={{ color:'#FFB800' }}>BRYX</span>
        </span>
      </Link>

      {/* Desktop nav links */}
      <div style={{ display:'flex', alignItems:'center' }} className="hidden md:flex">
        {links.map(l => (
          <Link key={l.href} href={l.href} style={{
            fontFamily: "'Fira Code', monospace",
            fontSize: 10,
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: pathname === l.href ? '#FFB800' : '#888888',
            padding: '0 16px',
            height: 56,
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            borderBottom: pathname === l.href ? '2px solid #FFB800' : '2px solid transparent',
            transition: 'color 0.15s',
          }}>
            {l.label}
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div style={{ display:'flex', alignItems:'center', gap:12 }}>
        <Link href="/pricing" className="nav-cta hidden sm:inline-flex">
          Get Started →
        </Link>
        {/* Hamburger */}
        <button
          className="md:hidden"
          style={{ background:'none', border:'none', cursor:'pointer', padding:8, display:'flex', flexDirection:'column', gap:5 }}
          onClick={() => setOpen(!open)}>
          <span style={{ display:'block', width:20, height:2, background:'#FFB800', transition:'all 0.2s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}/>
          <span style={{ display:'block', width:20, height:2, background:'#FFB800', transition:'all 0.2s', opacity: open ? 0 : 1 }}/>
          <span style={{ display:'block', width:20, height:2, background:'#FFB800', transition:'all 0.2s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}/>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          position:'absolute', top:56, left:0, right:0,
          background:'#111111',
          borderBottom:'1px solid rgba(255,184,0,0.12)',
        }} className="md:hidden">
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} style={{
              display:'block',
              fontFamily:"'Fira Code', monospace",
              fontSize:11, textTransform:'uppercase', letterSpacing:'0.1em',
              color: pathname === l.href ? '#FFB800' : '#888888',
              padding:'16px 32px',
              borderBottom:'1px solid rgba(255,255,255,0.05)',
              textDecoration:'none',
            }}>
              {l.label}
            </Link>
          ))}
          <div style={{ padding:24 }}>
            <Link href="/pricing" className="nav-cta" style={{ display:'block', textAlign:'center' }}>
              Get Started →
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
