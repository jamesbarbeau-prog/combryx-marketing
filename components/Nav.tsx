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
  { href: '/demo',         label: 'See It Live' },
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

  // Close menu on route change
  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        height: 56,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 16px',
        background: scrolled ? 'rgba(0,0,0,0.98)' : 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(255,184,0,0.10)',
        transition: 'background 0.3s',
        overflow: 'hidden',
        boxSizing: 'border-box' as const,
      }}>
        {/* Logo */}
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:9, textDecoration:'none', flexShrink:0 }}>
          <div style={{
            width: 26, height: 26, background: '#FFB800', flexShrink:0,
            clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 0 12px rgba(255,184,0,0.3)', position:'relative',
          }}>
            <span style={{ color:'#000', fontSize:10, fontWeight:'bold', position:'absolute' }}>✦</span>
          </div>
          <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:19, letterSpacing:'0.1em', color:'#F5F5F5' }}>
            COM<span style={{ color:'#FFB800' }}>BRYX</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div style={{ display:'flex', alignItems:'center' }} className="hidden md:flex">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily:"'Fira Code',monospace", fontSize:10,
              textTransform:'uppercase', letterSpacing:'0.1em',
              color: pathname === l.href ? '#FFB800' : '#888888',
              padding:'0 14px', height:56, display:'flex', alignItems:'center',
              textDecoration:'none',
              borderBottom: pathname === l.href ? '2px solid #FFB800' : '2px solid transparent',
              transition:'color 0.15s',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div style={{ display:'flex', alignItems:'center', gap:10 }}>
          <Link href="/pricing" className="nav-cta" style={{ display:'none' }}
            // hide on mobile, show on sm+
          >Get Started →</Link>

          {/* Desktop CTA */}
          <Link href="/pricing" style={{
            background:'#FFB800', color:'#000',
            fontFamily:"'Fira Code',monospace", fontSize:10, fontWeight:600,
            letterSpacing:'0.1em', textTransform:'uppercase',
            padding:'8px 16px', borderRadius:5, textDecoration:'none',
            boxShadow:'0 0 14px rgba(255,184,0,0.2)', transition:'all 0.2s',
            display:'none',
          }} className="hidden sm:inline-flex">
            Get Started →
          </Link>

          {/* Hamburger — mobile only */}
          <button
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            style={{ background:'none', border:'none', cursor:'pointer', padding:'8px', display:'flex', flexDirection:'column', gap:5, flexShrink:0 }}
            className="md:hidden">
            <span style={{ display:'block', width:22, height:2, background:'#FFB800', borderRadius:1, transition:'all 0.25s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}/>
            <span style={{ display:'block', width:22, height:2, background:'#FFB800', borderRadius:1, transition:'all 0.25s', opacity: open ? 0 : 1 }}/>
            <span style={{ display:'block', width:22, height:2, background:'#FFB800', borderRadius:1, transition:'all 0.25s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu — full screen overlay */}
      {open && (
        <div style={{
          position:'fixed', top:56, left:0, right:0, bottom:0,
          background:'rgba(0,0,0,0.97)',
          backdropFilter:'blur(24px)',
          zIndex:99,
          display:'flex', flexDirection:'column',
          borderTop:'1px solid rgba(255,184,0,0.1)',
          overflowY:'auto',
        }} className="md:hidden">
          {/* Nav links */}
          <div style={{ flex:1, padding:'16px 0' }}>
            {links.map((l, i) => (
              <Link key={l.href} href={l.href}
                style={{
                  display:'flex', alignItems:'center', justifyContent:'space-between',
                  padding:'18px 28px',
                  fontFamily:"'Bebas Neue',sans-serif", fontSize:28,
                  letterSpacing:'0.06em',
                  color: pathname === l.href ? '#FFB800' : '#F5F5F5',
                  textDecoration:'none',
                  borderBottom:'1px solid rgba(255,255,255,0.04)',
                  transition:'color 0.15s',
                  animationDelay:`${i * 0.05}s`,
                }}>
                <span>{l.label}</span>
                {pathname === l.href && <span style={{ color:'#FFB800', fontSize:16 }}>←</span>}
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div style={{ padding:'24px 28px 48px' }}>
            <Link href="/pricing" style={{
              display:'block', textAlign:'center',
              background:'#FFB800', color:'#000',
              fontFamily:"'Fira Code',monospace", fontSize:12,
              fontWeight:600, letterSpacing:'0.12em',
              textTransform:'uppercase', padding:'18px',
              borderRadius:8, textDecoration:'none',
              boxShadow:'0 0 24px rgba(255,184,0,0.3)',
            }}>
              Get Started — $149/community →
            </Link>
            <p style={{ textAlign:'center', fontFamily:"'Fira Code',monospace", fontSize:10, color:'#444', marginTop:12, textTransform:'uppercase', letterSpacing:'0.1em' }}>
              No setup fee · Cancel anytime
            </p>
          </div>
        </div>
      )}
    </>
  )
}
