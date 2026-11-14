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

  useEffect(() => { setOpen(false) }, [pathname])

  return (
    <>
      <style>{`
        .nav-root {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 56px; display: flex; align-items: center;
          justify-content: space-between;
          padding: 0 16px;
          border-bottom: 1px solid rgba(255,184,0,0.10);
          box-sizing: border-box; width: 100%; overflow: hidden;
          backdrop-filter: blur(20px);
        }
        .nav-logo-text { font-family:'Bebas Neue',sans-serif; letter-spacing:0.1em; color:#F5F5F5; white-space:nowrap; font-size:19px; }
        @media (max-width: 400px) { .nav-logo-text { font-size:15px; } }
        .nav-desktop { display:none; }
        @media (min-width: 1024px) { .nav-desktop { display:flex; align-items:center; } }
        .nav-cta-desktop { display:none; }
        @media (min-width: 1024px) { .nav-cta-desktop { display:inline-flex; } }
        .nav-hamburger { display:flex; }
        @media (min-width: 1024px) { .nav-hamburger { display:none; } }
        .nav-overlay { display:flex; }
        @media (min-width: 1024px) { .nav-overlay { display:none; } }
      `}</style>

      <nav
        className="nav-root"
        style={{ background: scrolled ? 'rgba(15,23,42,0.98)' : 'rgba(15,23,42,0.90)' }}>

        {/* Logo — always visible, shrinks on very small screens */}
        <Link href="/" style={{ display:'flex', alignItems:'center', gap:8, textDecoration:'none', flexShrink:0, minWidth:0 }}>
          <div style={{
            width:26, height:26, background:'#FFB800', flexShrink:0,
            clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
            display:'flex', alignItems:'center', justifyContent:'center', position:'relative',
          }}>
            <span style={{ color:'#000', fontSize:10, fontWeight:'bold', position:'absolute' }}>✦</span>
          </div>
          <span className="nav-logo-text">
            COM<span style={{ color:'#FFB800' }}>BRYX</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="nav-desktop">
          {links.map(l => (
            <Link key={l.href} href={l.href} style={{
              fontFamily:"'Fira Code',monospace", fontSize:10,
              textTransform:'uppercase', letterSpacing:'0.08em',
              color: pathname === l.href ? '#FFB800' : '#CBD5E1',
              padding:'0 12px', height:56, display:'flex', alignItems:'center',
              textDecoration:'none',
              borderBottom: pathname === l.href ? '2px solid #FFB800' : '2px solid transparent',
              whiteSpace:'nowrap',
            }}>
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right side — ALWAYS reserve space for hamburger */}
        <div style={{ display:'flex', alignItems:'center', gap:8, flexShrink:0 }}>
          <Link href="/pricing" className="nav-cta-desktop" style={{
            background:'#FFB800', color:'#000',
            fontFamily:"'Fira Code',monospace", fontSize:10, fontWeight:600,
            letterSpacing:'0.1em', textTransform:'uppercase',
            padding:'8px 16px', borderRadius:5, textDecoration:'none', whiteSpace:'nowrap',
          }}>
            Get Started →
          </Link>

          {/* Hamburger — always visible on mobile */}
          <button
            className="nav-hamburger"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(!open)}
            style={{
              background:'none', border:'none', cursor:'pointer',
              padding:'8px 4px', flexDirection:'column',
              gap:5, flexShrink:0, alignItems:'center', justifyContent:'center',
              width:40, height:40,
            }}>
            <span style={{ display:'block', width:24, height:2, background:'#FFB800', borderRadius:1, transition:'all 0.25s', transform: open ? 'rotate(45deg) translateY(7px)' : 'none' }}/>
            <span style={{ display:'block', width:24, height:2, background:'#FFB800', borderRadius:1, transition:'all 0.25s', opacity: open ? 0 : 1 }}/>
            <span style={{ display:'block', width:24, height:2, background:'#FFB800', borderRadius:1, transition:'all 0.25s', transform: open ? 'rotate(-45deg) translateY(-7px)' : 'none' }}/>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="nav-overlay" style={{
          position:'fixed', top:56, left:0, right:0, bottom:0,
          background:'rgba(15,23,42,0.98)', backdropFilter:'blur(24px)',
          zIndex:99, flexDirection:'column',
          borderTop:'1px solid rgba(255,184,0,0.1)', overflowY:'auto',
        }}>
          <div style={{ flex:1, padding:'8px 0' }}>
            {links.map(l => (
              <Link key={l.href} href={l.href} style={{
                display:'flex', alignItems:'center', justifyContent:'space-between',
                padding:'20px 28px',
                fontFamily:"'Bebas Neue',sans-serif", fontSize:32, letterSpacing:'0.06em',
                color: pathname === l.href ? '#FFB800' : '#F5F5F5',
                textDecoration:'none',
                borderBottom:'1px solid rgba(255,255,255,0.05)',
              }}>
                <span>{l.label}</span>
                {pathname === l.href && <span style={{ color:'#FFB800', fontSize:18 }}>←</span>}
              </Link>
            ))}
          </div>
          <div style={{ padding:'24px 28px 52px' }}>
            <Link href="/pricing" style={{
              display:'block', textAlign:'center',
              background:'#FFB800', color:'#000',
              fontFamily:"'Fira Code',monospace", fontSize:13, fontWeight:600,
              letterSpacing:'0.12em', textTransform:'uppercase',
              padding:'20px', borderRadius:8, textDecoration:'none',
              boxShadow:'0 0 24px rgba(255,184,0,0.3)',
            }}>
              Get Started — $129/community →
            </Link>
            <p style={{ textAlign:'center', fontFamily:"'Fira Code',monospace", fontSize:10, color:'#94A3B8', marginTop:12, textTransform:'uppercase', letterSpacing:'0.1em' }}>
              No setup fee · Cancel anytime
            </p>
          </div>
        </div>
      )}
    </>
  )
}