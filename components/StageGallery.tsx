'use client'
import { useState } from 'react'

const stages = [
  { label: 'Framing', note: 'Studs, headers and openings, before anything is covered.' },
  { label: 'Insulation', note: 'Exterior walls insulated, before the vapour barrier and drywall.' },
  { label: 'Pre-drywall', note: 'Wiring, plumbing and ducts in place. The last look inside the walls.' },
  { label: 'At close', note: 'The finished home on the day the owner takes possession.' },
]
const rooms = [
  { key: 'kitchen', label: 'Kitchen' },
  { key: 'foyer', label: 'Entry' },
  { key: 'bath', label: 'Main bath' },
  { key: 'bedroom', label: 'Bedroom' },
]

export default function StageGallery() {
  const [stage, setStage] = useState(3)
  const [open, setOpen] = useState<string | null>(null)
  return (
    <section className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3 flex items-center gap-3">
          <span className="w-5 h-px bg-cb-gold opacity-60" />Photo record, stage by stage
        </div>
        <h2 className="font-display text-[clamp(36px,5vw,60px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-3">
          See what is behind the wall,<br /><span className="text-cb-gold">years later.</span>
        </h2>
        <p className="text-cb-muted text-base leading-relaxed max-w-xl mb-8">
          Every room is recorded at framing, insulation, pre-drywall and close. Owners can look and ask. Warranty keeps the same record for the life of the home. Sample home shown.
        </p>
        <div className="flex gap-2 flex-wrap mb-3" role="tablist" aria-label="Build stage">
          {stages.map((s, i) => (
            <button key={s.label} role="tab" aria-selected={i === stage} onClick={() => setStage(i)}
              className="font-mono text-[11px] uppercase tracking-[0.08em] font-semibold px-4 py-2.5 rounded-md cursor-pointer"
              style={{ background: i === stage ? '#1E3A8A' : '#FFFFFF', color: i === stage ? '#FFFFFF' : '#475569', border: `1px solid ${i === stage ? '#1E3A8A' : '#CBD5E1'}` }}>
              {s.label}
            </button>
          ))}
        </div>
        <p className="text-sm text-cb-muted mb-5">{stages[stage].note}</p>
        <div className="grid sm:grid-cols-2 gap-4">
          {rooms.map(r => {
            const src = `/renders/${r.key}_${stage}.jpg`
            return (
              <button key={r.key} onClick={() => setOpen(src)} className="relative block w-full text-left rounded-xl overflow-hidden cursor-zoom-in" style={{ border: '1px solid #CBD5E1', aspectRatio: '8 / 5', background: '#E9EDF2' }} aria-label={`${r.label}, ${stages[stage].label.toLowerCase()}. Enlarge.`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img key={src} src={src} alt={`${r.label} at ${stages[stage].label.toLowerCase()}`} loading="lazy" className="w-full h-full object-cover block" />
                <span className="absolute left-3 bottom-3 font-mono text-[10px] uppercase tracking-[0.1em] px-2.5 py-1 rounded" style={{ background: 'rgba(15,23,42,0.8)', color: '#F8FAFC' }}>{r.label} · {stages[stage].label}</span>
              </button>
            )
          })}
        </div>
      </div>
      {open && (
        <div role="dialog" aria-modal="true" onClick={() => setOpen(null)} className="fixed inset-0 z-[100] flex items-center justify-center p-4 cursor-zoom-out" style={{ background: 'rgba(15,23,42,0.88)' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={open} alt="Enlarged room view" className="max-w-full max-h-full rounded-lg" />
        </div>
      )}
    </section>
  )
}
