'use client'
import { useState } from 'react'
import Link from 'next/link'

const modules = [
  {
    letter:'W', color:'#FFB800', badge:'Base — Always Included',
    name:'Combryx Warranty',
    outcome:'Every form, item, trade and deadline in one place — low-rise and high-rise.',
    why:'Built for the warranty department only. It sits beside whatever your construction and sales teams already use.',
    icons:[
      { icon:'📥', label:'Tarion Import', sub:'Forms become items automatically' },
      { icon:'⏱', label:'Deadlines', sub:'BRP and statutory dates per home' },
      { icon:'🤖', label:'AI Triage', sub:'Risk · CPG/OBC · draft notes' },
      { icon:'🔧', label:'Work Orders', sub:'Trades and technicians' },
      { icon:'💰', label:'POs & Ledger', sub:'Approvals · back-charges · export' },
      { icon:'📧', label:'Aging Emails', sub:'Weekly per site · automatic' },
    ],
    href:'/how-it-works#features',
  },
  {
    letter:'C', color:'#a855f7', badge:'Add-on — Managers Only',
    name:'Conciliation Manager',
    outcome:'Never lose a Tarion conciliation from poor documentation again.',
    why:'Cases, CARs, cash offers and the builder comments package — for freehold and common elements. Now being built into Combryx.',
    icons:[
      { icon:'📋', label:'Case Stages', sub:'Booked → assessed → CAR' },
      { icon:'⏳', label:'Timers', sub:'Every cycle on its own clock' },
      { icon:'💵', label:'Cash Offers', sub:'Offers and releases' },
      { icon:'🛡', label:'Builder Comments', sub:'One package · evidence attached' },
      { icon:'📊', label:'Control Centre', sub:'Every community at a glance' },
      { icon:'🏢', label:'Freehold / CE', sub:'Toggle for high-rise' },
    ],
    href:'/platform',
  },
  {
    letter:'D', color:'#3b82f6', badge:'Add-on — Coming',
    name:'Design Centre',
    outcome:'Owners choose and sign their selections before they sit down with sales.',
    why:'Shorter design appointments, a clean site instruction list, and a record warranty can check years later.',
    icons:[
      { icon:'🎨', label:'Selections', sub:'Every option explained' },
      { icon:'✍️', label:'Signed Record', sub:'Per home · in the portal' },
      { icon:'📝', label:'Site Instructions', sub:'Built from final choices' },
      { icon:'🧾', label:'Upgrade Ledger', sub:'Credits and upgrades · export' },
      { icon:'📷', label:'360 Stages', sub:'Framing to close · per home' },
      { icon:'🔍', label:'AI Walk-Through', sub:'Checks selections at QCI' },
    ],
    href:'/platform',
  },
]

export default function ModuleCards() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section style={{ background:'#111111', padding:'96px 0' }}>
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'0 16px' }}>
        {/* header */}
        <div style={{ marginBottom:52 }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#FFB800', marginBottom:12, display:'flex', alignItems:'center', gap:12 }}>
            <span style={{ width:24, height:1, background:'#FFB800', opacity:0.6, display:'inline-block' }}/>
            One Product · Two Add-ons
          </div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,60px)', letterSpacing:'0.04em', lineHeight:0.97, color:'#F5F5F5', marginBottom:12 }}>
            Built for the warranty team.<br/>Nothing you don&apos;t need.
          </h2>
          <p style={{ fontSize:15, color:'#888', lineHeight:1.75, maxWidth:580 }}>
            Combryx Warranty is the whole product. Add the Conciliation Manager for your managers, and the Design Centre when it launches. It works beside your existing construction and sales software.
          </p>
        </div>

        {/* grid */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:3, background:'rgba(255,255,255,0.05)', borderRadius:14, overflow:'hidden', border:'1px solid rgba(255,255,255,0.06)' }}>
          {modules.map((m, i) => (
            <div key={m.letter}
              style={{ background:'#0d0d0d', padding:'20px 16px 18px', borderTop:`3px solid ${m.color}`, position:'relative', overflow:'hidden', cursor:'pointer', transition:'background 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.background='#141414')}
              onMouseLeave={e => (e.currentTarget.style.background='#0d0d0d')}
              onClick={() => setExpanded(expanded === i ? null : i)}>

              {/* background letter */}
              <div style={{ position:'absolute', bottom:-8, right:12, fontFamily:"'Bebas Neue',sans-serif", fontSize:88, color:'rgba(255,255,255,0.03)', lineHeight:1, pointerEvents:'none', letterSpacing:'0.04em' }}>{m.letter}</div>

              {/* badge */}
              <div style={{ display:'inline-block', fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', padding:'3px 10px', borderRadius:4, fontWeight:600, marginBottom:14,
                background: m.badge === 'Base — Always Included' ? 'rgba(255,184,0,0.12)' : 'rgba(59,130,246,0.10)',
                color: m.badge === 'Base — Always Included' ? '#FFB800' : '#93c5fd' }}>
                {m.badge}
              </div>

              {/* name */}
              <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:22, letterSpacing:'0.04em', color:'#F5F5F5', marginBottom:8, lineHeight:1.1 }}>{m.name}</div>

              {/* OUTCOME — the Why */}
              <div style={{ fontSize:13, color:m.color, fontWeight:600, lineHeight:1.5, marginBottom:6 }}>{m.outcome}</div>
              <div style={{ fontSize:12, color:'#666', lineHeight:1.6, marginBottom:20 }}>{m.why}</div>

              {/* icon grid */}
              <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(88px, 1fr))', gap:6 }}>
                {m.icons.map(ic => (
                  <div key={ic.label} style={{ background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.06)', borderRadius:7, padding:'10px 8px', textAlign:'center' }}>
                    <div style={{ fontSize:20, marginBottom:4 }}>{ic.icon}</div>
                    <div style={{ fontFamily:"'Fira Code',monospace", fontSize:9, fontWeight:600, color:'#F5F5F5', textTransform:'uppercase', letterSpacing:'0.08em', marginBottom:2 }}>{ic.label}</div>
                    <div style={{ fontSize:10, color:'#555', lineHeight:1.4 }}>{ic.sub}</div>
                  </div>
                ))}
              </div>

              {/* learn more */}
              <div style={{ marginTop:16, paddingTop:14, borderTop:'1px solid rgba(255,255,255,0.05)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color:'#444', textTransform:'uppercase', letterSpacing:'0.1em' }}>Low-rise · High-rise</span>
                <Link href={m.href} onClick={e => e.stopPropagation()}
                  style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color:m.color, textDecoration:'none', textTransform:'uppercase', letterSpacing:'0.1em' }}>
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
