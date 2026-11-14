'use client'
import { useState } from 'react'

interface FaqItem { q: string; a: string }

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <div className="flex flex-col gap-2">
      {items.map((f, i) => (
        <div key={i} className={`bg-cb-dark2 border rounded-lg overflow-hidden transition-colors ${open === i ? 'border-cb-gold' : 'border-[rgba(15,23,42,0.1)]'}`}>
          <button
            className="w-full text-left px-6 py-5 flex justify-between items-center gap-4 font-body text-[14px] font-semibold hover:text-cb-gold transition-colors"
            style={{ color: open === i ? '#D97706' : '#0F172A' }}
            onClick={() => setOpen(open === i ? null : i)}>
            {f.q}
            <span className="text-cb-gold flex-shrink-0 text-xl leading-none transition-transform" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>+</span>
          </button>
          {open === i && (
            <div className="px-6 pb-5 text-[13px] text-cb-muted leading-relaxed border-t border-[rgba(15,23,42,0.1)] pt-4">
              {f.a}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
