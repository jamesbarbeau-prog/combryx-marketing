'use client'
import { useState } from 'react'
import Link from 'next/link'

const shots = [
  { k: 'dashboard', label: 'Dashboard', note: 'Open items, deadlines, BRP windows, RFCs and spend across every community and tower.' },
  { k: 'homes', label: 'Homes & Owners', note: 'Import a Tarion form and the items create themselves, with AI triage on each one.' },
  { k: 'deadlines', label: 'Deadlines', note: 'Every statutory date counted down per home, including the added 30-day pre-conciliation period.' },
  { k: 'orders', label: 'Work Orders', note: 'Dispatch to trades and techs and watch each order move from new to done.' },
  { k: 'conciliation', label: 'Conciliation Manager', note: 'Add-on. Cases from inspection booked to CAR, with offers, releases and evidence in one file.' },
  { k: 'design', label: 'Design Centre', note: 'Add-on, coming. Signed owner selections, upgrade ledger and site instructions.' },
]

export default function ProductShots() {
  const [i, setI] = useState(0)
  const s = shots[i]
  return (
    <section className="bg-cb-dark1 py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3">
          <span className="w-5 h-px bg-cb-gold opacity-60" />The workspace
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-3">
          Clean, readable, <span className="text-cb-gold">built for a warranty day.</span>
        </h2>
        <p className="text-cb-muted text-base leading-relaxed max-w-xl mb-8">Sample data shown. Click through the live version on the demo page.</p>
        <div className="flex gap-2 overflow-x-auto pb-3" role="tablist" aria-label="Product screens">
          {shots.map((x, n) => (
            <button key={x.k} role="tab" aria-selected={n === i} onClick={() => setI(n)}
              className="flex-shrink-0 text-[13px] font-semibold px-4 py-2 rounded-lg cursor-pointer"
              style={{ background: n === i ? '#2563EB' : '#FFFFFF', color: n === i ? '#FFFFFF' : '#475569', border: `1px solid ${n === i ? '#2563EB' : '#CBD5E1'}` }}>{x.label}</button>
          ))}
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid #CBD5E1', boxShadow: '0 24px 60px rgba(15,23,42,0.14)', background: '#fff' }}>
          <div className="flex items-center gap-2 px-3.5 py-2.5" style={{ background: '#E9EDF2', borderBottom: '1px solid #CBD5E1' }}>
            {['#F87171', '#FBBF24', '#4ADE80'].map(c => <span key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />)}
            <span className="flex-1 text-center font-mono text-[11px] text-cb-dim">Builder Guardian · sample data</span>
          </div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img key={s.k} src={`/screens/${s.k}.jpg`} alt={`Builder Guardian ${s.label} screen`} width={1600} height={964} className="w-full h-auto block" loading="lazy" />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 mt-5">
          <p className="text-cb-muted text-[15px] leading-relaxed max-w-2xl"><strong className="text-cb-white">{s.label}.</strong> {s.note}</p>
          <Link href="/demo" className="btn-gold">Click through it live →</Link>
        </div>
      </div>
    </section>
  )
}
