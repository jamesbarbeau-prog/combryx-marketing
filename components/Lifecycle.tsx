'use client'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

const stages = [
  {
    n: '01',
    color: '#ef4444',
    label: 'Land Acquisition',
    title: 'Find the land.\nModel the deal.\nGet the permit.',
    desc: 'AI pro-forma from your own comparable projects. Live municipal zoning API — permitted uses, density, setbacks. When the permit is approved, the first construction phase unlocks automatically. No manual trigger.',
    bullets: ['AI pro-forma in minutes — backed by your own portfolio data','Live zoning API — density, height, setbacks, OPA status','Permit tracker → approval unlocks Build phase automatically','Acquisition pipeline from first MLS look to close'],
    photo: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=900&q=80',
    connection: 'Permit approved → Build phase unlocked in Stage 2',
  },
  {
    n: '02',
    color: '#f97316',
    label: 'Build & Field Ops',
    title: 'Build it.\nTrack every phase.\nDrive the draws.',
    desc: 'CPM scheduling per lot. Phase gate sign-offs from the field app — photo required, no paper. When a site super signs off a phase on site, the lender draw package auto-assembles in the office. Sub-trades sign digitally via a link — no app install needed.',
    bullets: ['Dynamic CPM Gantt — drag to reschedule, dependencies cascade','Phase gate signed on site → lender draw assembled in office','Sub-trade digital sign-off via shareable link','Safety observation log with photo evidence and escalation'],
    photo: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=900&q=80',
    connection: 'Phase complete → draw request auto-assembled in Financial',
  },
  {
    n: '03',
    color: '#3b82f6',
    label: 'Financial Ledger',
    title: 'Job costing.\nLender draws.\nInvoice OCR.',
    desc: 'Real-time job costing by community and cost code. Invoice OCR reads any format, matches to open POs, flags anomalies — duplicates, amounts outside expected range for that trade. Budget vs actual alerts at 80% and 95%.',
    bullets: ['Invoice OCR — AI extracts, matches POs, flags anomalies','Lender draw packages auto-assembled on phase sign-off','Budget vs actual alerts at 80% and 95% threshold','CapEx vs OpEx auto-classification per line item'],
    photo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&q=80',
    connection: 'Unit sold → revenue recorded, Tarion clock triggered in Stage 4',
  },
  {
    n: '04',
    color: '#FFB800',
    label: 'Close & Warranty',
    title: 'CPP signed.\nTarion clock starts.\nDefence Vault open.',
    desc: 'CPP/PDI signature is the legal trigger. Day 41, 183, and 366 auto-submission windows initialized per unit. 120-day BRP tracked with RFC status — if the homeowner requests conciliation, the 30-day pre-conciliation BRP adds automatically. Defence Vault assembles from day one.',
    bullets: ['PDI on tablet — dual signature, PDF auto-sent, vaulted instantly','Day 41, 183 & 366 auto-submissions tracked per unit','120-day BRP + 30-day pre-conciliation = 150 days total','Lex Structura AI answers OBC Part 9 and CPG questions'],
    photo: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=900&q=80',
    connection: 'Unit closed → trade keys revoked, homeowner access provisioned',
  },
  {
    n: '05',
    color: '#a855f7',
    label: 'Condo Corp & Rental',
    title: 'Building registered.\nCorporation running\non the same platform.',
    desc: 'After turnover, the condo corp or rental portfolio picks up where the builder left off — same data, continuous record. Common element tracking, reserve fund AI forecasting, owner portal, amenity booking with IoT key issuance, and RTA-compliant lease management.',
    bullets: ['Common element maintenance — every asset tracked from day one','Reserve fund AI — shortfall alerts at 18-month and 6-month','Amenity booking → digital key auto-issued for booking window','RTA lease management — renewal alerts at 90, 60, and 30 days'],
    photo: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=900&q=80',
    connection: 'Sensor spike → warranty case created, trade dispatched automatically',
  },
  {
    n: '06',
    color: '#22c55e',
    label: 'Property Management',
    title: 'AI-powered.\nField-first.\nAlways proactive.',
    desc: 'Ticket management from the truck in 60 seconds. IoT sensors create warranty cases before the tenant calls. Vendor performance tracked — AI flags underperformers. Monthly owner reports generated automatically from live operational data.',
    bullets: ['Ticket logged in 60 seconds from the field — trade auto-dispatched','IoT moisture sensor → case created before tenant calls','Vendor performance AI — adjusts future dispatch priority','Monthly owner reports auto-generated from live data'],
    photo: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&q=80',
    connection: 'Portfolio AI learns from every building — pro-forma improves over time',
  },
]

function HexConnector({ fromColor, toColor, active }: { fromColor: string; toColor: string; active: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '8px 0', position: 'relative' }}>
      <svg width="40" height="80" viewBox="0 0 40 80" style={{ overflow: 'visible' }}>
        <defs>
          <linearGradient id={`grad-${fromColor.replace('#','')}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={fromColor} stopOpacity={active ? 0.8 : 0.2} />
            <stop offset="100%" stopColor={toColor} stopOpacity={active ? 0.8 : 0.2} />
          </linearGradient>
        </defs>
        <line
          x1="20" y1="0" x2="20" y2="80"
          stroke={`url(#grad-${fromColor.replace('#','')})`}
          strokeWidth="2"
          strokeDasharray={active ? "none" : "4 4"}
          style={{ transition: 'all 0.6s ease' }}
        />
        {active && (
          <polygon
            points="20,72 14,60 26,60"
            fill={toColor}
            opacity="0.9"
          />
        )}
      </svg>
      {active && (
        <div style={{
          position: 'absolute', left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(0,0,0,0.85)', border: `1px solid ${fromColor}44`,
          borderRadius: 6, padding: '3px 10px', whiteSpace: 'nowrap',
          fontFamily: "'Fira Code', monospace", fontSize: 9,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          color: fromColor, top: '50%', marginTop: -10,
          zIndex: 2,
        }}>
          auto-connects ↓
        </div>
      )}
    </div>
  )
}

export default function Lifecycle() {
  const [visibleStages, setVisibleStages] = useState<number[]>([])
  const stageRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    stageRefs.current.forEach((el, i) => {
      if (!el) return
      const obs = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStages(prev => prev.includes(i) ? prev : [...prev, i])
        }
      }, { threshold: 0.25 })
      obs.observe(el)
      observers.push(obs)
    })
    return () => observers.forEach(o => o.disconnect())
  }, [])

  return (
    <section style={{ background: '#000', padding: '96px 0', position: 'relative', overflow: 'hidden' }}>
      {/* hex grid background */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92'%3E%3Cpolygon points='40,2 78,22 78,70 40,90 2,70 2,22' fill='none' stroke='%23FFB800' stroke-width='0.8'/%3E%3C/svg%3E")`,
        backgroundSize: '80px 92px',
        animation: 'hexDrift 60s linear infinite',
      }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 48px', position: 'relative', zIndex: 1 }}>
        {/* section header */}
        <div style={{ textAlign: 'center', marginBottom: 64 }}>
          <div style={{
            fontFamily: "'Fira Code', monospace", fontSize: 10,
            textTransform: 'uppercase', letterSpacing: '0.22em',
            color: '#FFB800', marginBottom: 12,
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12,
          }}>
            <span style={{ width: 32, height: 1, background: '#FFB800', opacity: 0.6, display: 'inline-block' }} />
            The Full Lifecycle
            <span style={{ width: 32, height: 1, background: '#FFB800', opacity: 0.6, display: 'inline-block' }} />
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(36px, 5vw, 64px)',
            letterSpacing: '0.04em', lineHeight: 0.97,
            color: '#F5F5F5', marginBottom: 16,
          }}>
            From the land deal<br />to <span style={{ color: '#FFB800' }}>year seven.</span><br />One connected system.
          </h2>
          <p style={{ fontSize: 16, color: '#888', lineHeight: 1.75, maxWidth: 520, margin: '0 auto' }}>
            Every stage feeds the next automatically. Scroll to see how each part of your operation connects — and what fires without anyone touching it.
          </p>
        </div>

        {/* stages */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, maxWidth: 900, margin: '0 auto' }}>
          {stages.map((s, i) => {
            const visible = visibleStages.includes(i)
            const nextVisible = visibleStages.includes(i + 1)
            return (
              <div key={s.n}>
                {/* stage card */}
                <div
                  ref={el => { stageRefs.current[i] = el }}
                  style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? 'translateY(0)' : 'translateY(32px)',
                    transition: 'opacity 0.7s ease, transform 0.7s ease',
                    transitionDelay: `${i * 0.05}s`,
                    display: 'grid',
                    gridTemplateColumns: i % 2 === 0 ? '1fr 1fr' : '1fr 1fr',
                    gap: 3,
                    background: '#111',
                    borderRadius: 14,
                    overflow: 'hidden',
                    border: `1px solid ${visible ? s.color + '33' : 'rgba(255,255,255,0.06)'}`,
                  }}>

                  {/* photo side */}
                  <div style={{
                    order: i % 2 === 0 ? 0 : 1,
                    position: 'relative', overflow: 'hidden', minHeight: 320,
                  }}>
                    <img
                      src={s.photo}
                      alt={s.label}
                      style={{
                        width: '100%', height: '100%',
                        objectFit: 'cover',
                        filter: 'brightness(0.7) saturate(1.1)',
                        position: 'absolute', inset: 0,
                        transform: visible ? 'scale(1)' : 'scale(1.06)',
                        transition: 'transform 0.8s ease',
                      }}
                    />
                    {/* stage number overlay */}
                    <div style={{
                      position: 'absolute', top: 20, left: 20,
                      width: 48, height: 48,
                      background: s.color,
                      clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      boxShadow: `0 0 20px ${s.color}66`,
                    }}>
                      <span style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 16, letterSpacing: '0.06em', color: '#000', fontWeight: 'bold' }}>{s.n}</span>
                    </div>
                    {/* label */}
                    <div style={{
                      position: 'absolute', bottom: 0, left: 0, right: 0,
                      padding: '32px 20px 20px',
                      background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                    }}>
                      <div style={{ fontFamily: "'Fira Code', monospace", fontSize: 9, textTransform: 'uppercase', letterSpacing: '0.16em', color: s.color, marginBottom: 4 }}>{s.label}</div>
                    </div>
                  </div>

                  {/* content side */}
                  <div style={{ order: i % 2 === 0 ? 1 : 0, padding: '36px 32px', background: '#0d0d0d', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h3 style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: 'clamp(28px, 3vw, 40px)',
                      letterSpacing: '0.04em', lineHeight: 1.05,
                      color: '#F5F5F5', marginBottom: 16,
                      whiteSpace: 'pre-line',
                    }}>{s.title}</h3>
                    <p style={{ fontSize: 13, color: '#888', lineHeight: 1.7, marginBottom: 20 }}>{s.desc}</p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {s.bullets.map((b, bi) => (
                        <div key={bi} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', fontSize: 12, color: '#888' }}>
                          <span style={{ color: s.color, flexShrink: 0, fontSize: 10, marginTop: 2 }}>→</span>
                          {b}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* connector between stages */}
                {i < stages.length - 1 && (
                  <div style={{
                    display: 'flex', flexDirection: 'column', alignItems: 'center',
                    padding: '0', position: 'relative', zIndex: 2,
                  }}>
                    {/* vertical line */}
                    <div style={{
                      width: 2, height: 40,
                      background: `linear-gradient(to bottom, ${s.color}, ${stages[i+1].color})`,
                      opacity: visible ? 0.7 : 0.15,
                      transition: 'opacity 0.6s ease',
                    }} />
                    {/* hex connector node */}
                    <div style={{
                      width: 44, height: 44,
                      background: visible ? '#111' : '#0a0a0a',
                      border: `2px solid ${visible ? s.color : 'rgba(255,255,255,0.08)'}`,
                      clipPath: 'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      transition: 'all 0.5s ease',
                      boxShadow: visible ? `0 0 16px ${s.color}44` : 'none',
                      position: 'relative',
                    }}>
                      <span style={{ fontFamily: "'Fira Code', monospace", fontSize: 8, color: visible ? s.color : '#444', textTransform: 'uppercase', letterSpacing: '0.06em' }}>→</span>
                    </div>
                    {/* connection label */}
                    {visible && (
                      <div style={{
                        fontFamily: "'Fira Code', monospace",
                        fontSize: 9, textTransform: 'uppercase',
                        letterSpacing: '0.1em', color: s.color,
                        opacity: 0.8, padding: '4px 0',
                        textAlign: 'center', maxWidth: 320,
                        animation: 'fadeUp 0.4s ease forwards',
                      }}>
                        {s.connection}
                      </div>
                    )}
                    {/* second line */}
                    <div style={{
                      width: 2, height: 40,
                      background: `linear-gradient(to bottom, ${s.color}, ${stages[i+1].color})`,
                      opacity: visible ? 0.7 : 0.15,
                      transition: 'opacity 0.6s ease',
                    }} />
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* bottom CTA */}
        <div style={{ textAlign: 'center', marginTop: 64 }}>
          <div style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(28px,4vw,52px)', letterSpacing: '0.04em', color: '#F5F5F5', marginBottom: 20 }}>
            One event. Every connected stage <span style={{ color: '#FFB800' }}>reacts.</span>
          </div>
          <a href="/platform" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#FFB800', color: '#000',
            fontFamily: "'Fira Code', monospace", fontSize: 11,
            fontWeight: 600, letterSpacing: '0.12em',
            textTransform: 'uppercase', padding: '16px 32px',
            borderRadius: 7, textDecoration: 'none',
            boxShadow: '0 0 24px rgba(255,184,0,0.3)',
            transition: 'all 0.2s',
          }}>
            Explore the Full Platform →
          </a>
        </div>
      </div>
    </section>
  )
}
