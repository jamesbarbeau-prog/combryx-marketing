'use client'
import { useState } from 'react'

interface Feature { icon: string; title: string; body: string }
interface Sector {
  n: string; color: string; tag: string; title: string; sub: string
  features: Feature[]; ai: string
}

export default function SectorAccordion({ sectors }: { sectors: Sector[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-2">
      {sectors.map((s, si) => (
        <div key={s.n} className="bg-cb-dark1 border border-[rgba(255,255,255,0.06)] rounded-xl overflow-hidden">
          <button
            className="w-full text-left grid grid-cols-[60px_1fr_auto] items-center border-b border-[rgba(255,255,255,0.06)] hover:bg-[rgba(255,255,255,0.02)] transition-colors"
            onClick={() => setOpenIdx(openIdx === si ? null : si)}>
            <div className="font-display text-2xl tracking-[0.04em] text-center py-5 border-r border-[rgba(255,255,255,0.06)]" style={{ color: s.color }}>{s.n}</div>
            <div className="px-6 py-4">
              <div className="font-mono text-[9px] uppercase tracking-widest font-semibold mb-1" style={{ color: s.color }}>{s.tag}</div>
              <div className="font-display text-lg md:text-xl tracking-[0.02em] text-cb-white leading-tight">{s.title}</div>
              <div className="text-cb-dim text-[12px] mt-0.5 hidden sm:block">{s.sub}</div>
            </div>
            <div className="px-6 h-full flex items-center border-l border-[rgba(255,255,255,0.06)]">
              <span className="font-mono text-xl text-cb-gold font-light transition-transform"
                style={{ transform: openIdx === si ? 'rotate(45deg)' : 'none' }}>+</span>
            </div>
          </button>
          {openIdx === si && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
              <div className="flex flex-col gap-3">
                {s.features.map(f => (
                  <div key={f.title} className="flex gap-3 p-4 bg-cb-dark2 border border-[rgba(255,255,255,0.05)] rounded-lg hover:border-[rgba(255,255,255,0.1)] transition-colors">
                    <span className="text-xl flex-shrink-0 mt-0.5">{f.icon}</span>
                    <div>
                      <div className="font-body text-[13px] font-bold text-cb-white mb-1">{f.title}</div>
                      <p className="text-cb-muted text-[12px] leading-relaxed">{f.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-col gap-4">
                <div className="aspect-video bg-cb-dark3 rounded-lg overflow-hidden relative">
                  <div className="absolute inset-0 hex-pattern opacity-[0.08]"/>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="font-display text-5xl tracking-[0.04em] mb-2" style={{ color: s.color }}>{s.n}</div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-cb-dim">{s.tag}</div>
                    </div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border" style={{ background: `${s.color}0d`, borderColor: `${s.color}33` }}>
                  <div className="font-mono text-[9px] uppercase tracking-widest font-semibold mb-2" style={{ color: s.color }}>⚡ AI Automation</div>
                  <p className="text-[12px] leading-relaxed" style={{ color: `${s.color}cc` }}>{s.ai}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
