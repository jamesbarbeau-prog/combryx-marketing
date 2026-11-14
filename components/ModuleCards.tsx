'use client'
import { useState } from 'react'
import Link from 'next/link'
import IconTile from '@/components/Icon'

const modules = [
  {
    letter:'W', color:'#D97706', badge:'Base — Always Included',
    name:'Combryx Warranty',
    outcome:'Every form, item, trade and deadline in one place — low-rise and high-rise.',
    why:'Built for the warranty department only. It sits beside whatever your construction and sales teams already use.',
    icons:[
      { icon:'FileInput', label:'Tarion Import', sub:'Forms become items automatically' },
      { icon:'Clock', label:'Deadlines', sub:'BRP and statutory dates per home' },
      { icon:'Sparkles', label:'AI Triage', sub:'Risk · CPG/OBC · draft notes' },
      { icon:'Wrench', label:'Work Orders', sub:'Trades and technicians' },
      { icon:'Receipt', label:'POs & Ledger', sub:'Approvals · back-charges · export' },
      { icon:'MailCheck', label:'Aging Emails', sub:'Weekly per site · automatic' },
    ],
    href:'/how-it-works#features',
  },
  {
    letter:'C', color:'#4338CA', badge:'Add-on — Managers Only',
    name:'Conciliation Manager',
    outcome:'Never lose a Tarion conciliation from poor documentation again.',
    why:'Cases, CARs, cash offers and the builder comments package — for freehold and common elements. Now being built into Combryx.',
    icons:[
      { icon:'ClipboardList', label:'Case Stages', sub:'Booked → assessed → CAR' },
      { icon:'Hourglass', label:'Timers', sub:'Every cycle on its own clock' },
      { icon:'Banknote', label:'Cash Offers', sub:'Offers and releases' },
      { icon:'ShieldCheck', label:'Builder Comments', sub:'One package · evidence attached' },
      { icon:'BarChart3', label:'Control Centre', sub:'Every community at a glance' },
      { icon:'Building2', label:'Freehold / CE', sub:'Toggle for high-rise' },
    ],
    href:'/platform',
  },
  {
    letter:'D', color:'#1D4ED8', badge:'Add-on — Coming',
    name:'Design Centre',
    outcome:'Owners choose and sign their selections before they sit down with sales.',
    why:'Shorter design appointments, a clean site instruction list, and a record warranty can check years later.',
    icons:[
      { icon:'Palette', label:'Selections', sub:'Every option explained' },
      { icon:'PenLine', label:'Signed Record', sub:'Per home · in the portal' },
      { icon:'FileText', label:'Site Instructions', sub:'Built from final choices' },
      { icon:'Receipt', label:'Upgrade Ledger', sub:'Credits and upgrades · export' },
      { icon:'Camera', label:'360 Stages', sub:'Framing to close · per home' },
      { icon:'ScanSearch', label:'AI Walk-Through', sub:'Checks selections at QCI' },
    ],
    href:'/platform',
  },
]

export default function ModuleCards() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section style={{ background:'#FFFFFF', padding:'96px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
        {/* header */}
        <div style={{ marginBottom:52 }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#D97706', marginBottom:12, display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ width:24, height:1, background:'#D97706', opacity:0.6, display:'inline-block' }}/>
            One Product · Two Add-ons
          </div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,60px)', letterSpacing:'0.04em', lineHeight:0.97, color:'#0F172A', marginBottom:12 }}>
            Built for the warranty team.<br/>Nothing you don&apos;t need.
          </h2>
          <p style={{ fontSize:15, color:'#475569', lineHeight:1.75, maxWidth:580 }}>
            Combryx Warranty is the whole product. Add the Conciliation Manager for your managers, and the Design Centre when it launches. It works beside your existing construction and sales software.
          </p>
        </div>

        {/* grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:16 }}>
          {modules.map((m, i) => (
            <div key={m.letter}
              style={{ background:'#FFFFFF', padding:'20px 16px 18px', borderTop:`3px solid ${m.color}`, border:'1px solid #CBD5E1', borderTopWidth:3, borderTopColor:m.color, borderRadius:12, boxShadow:'0 1px 2px rgba(15,23,42,0.06), 0 8px 24px rgba(15,23,42,0.06)', position:'relative', overflow:'hidden', cursor:'pointer' }}
              onClick={() => setExpanded(expanded === i ? null : i)}>

              {/* background letter */}
              <div style={{ position:'absolute', bottom:-8, right:12, fontFamily:"'Bebas Neue',sans-serif", fontSize:88, color:'rgba(15,23,42,0.04)', lineHeight:1, pointerEvents:'none', letterSpacing:'0.04em' }}>{m.letter}</div>

              {/* badge */}
              <div style={{ display:'inline-block', fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', padding:'3px 10px', borderRadius:4, fontWeight:600, marginBottom:14,
                background: m.badge === 'Base — Always Included' ? 'rgba(217,119,6,0.14)' : 'rgba(67,56,202,0.10)',
                color: m.badge === 'Base — Always Included' ? '#92400E' : '#4338CA' }}>
                {m.badge}
              </div>

              {/* name */}
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:'0.04em', color:'#0F172A', marginBottom:8, lineHeight:1.1 }}>{m.name}</div>

              {/* OUTCOME — the Why */}
              <div style={{ fontSize:13, color:'#1E3A8A', fontWeight:600, lineHeight:1.5, marginBottom:6 }}>{m.outcome}</div>
              <div style={{ fontSize:12, color:'#475569', lineHeight:1.6, marginBottom:20 }}>{m.why}</div>

              {/* icon grid */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(88px, 1fr))', gap:6 }}>
                {m.icons.map(ic => (
                  <div key={ic.label} style={{ background:'#F8FAFC', border:'1px solid #E2E8F0', borderRadius:8, padding:'10px 8px', textAlign:'center' }}>
                    <div style={{ marginBottom:6 }}><IconTile name={ic.icon} /></div>
                    <div style={{ fontFamily:"'Fira Code',monospace", fontSize:9, fontWeight:600, color:'#0F172A', textTransform:'uppercase', letterSpacing:'0.06em', marginBottom:2 }}>{ic.label}</div>
                    <div style={{ fontSize:10, color:'#64748B', lineHeight:1.4 }}>{ic.sub}</div>
                  </div>
                ))}
              </div>

              {/* learn more */}
              <div style={{ marginTop:16, paddingTop:14, borderTop:'1px solid rgba(15,23,42,0.1)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color:'#64748B', textTransform:'uppercase', letterSpacing:'0.1em' }}>Low-rise · High-rise</span>
                <Link href={m.href} onClick={e => e.stopPropagation()}
                  style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color:'#1E3A8A', fontWeight:600, textDecoration:'none', textTransform:'uppercase', letterSpacing:'0.1em' }}>
                  Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
