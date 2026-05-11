'use client'
import { useState } from 'react'
import Link from 'next/link'

const modules = [
  {
    letter:'E', color:'#FFB800', badge:'Base — Always Included',
    name:'Warranty & Asset Management',
    outcome:'Never lose a Tarion conciliation from poor documentation again.',
    why:'$30,000+ is the average cost of a lost conciliation. The Defence Vault pays for itself the first time Tarion calls.',
    icons:[
      { icon:'📋', label:'PDI Sign-Off', sub:'Dual sig · PDF auto-sent · Vaulted' },
      { icon:'⏱', label:'Tarion Deadlines', sub:'Day 41, 183, 366 auto-tracked' },
      { icon:'🛡', label:'Defence Vault', sub:'Conciliation-ready in one click' },
      { icon:'🤖', label:'AI Triage', sub:'Cases classified · Responses drafted' },
      { icon:'⚖️', label:'Lex Structura', sub:'OBC Part 9 · CPG answers' },
      { icon:'📱', label:'Field App', sub:'Tech · PDI · Assessment modes' },
    ],
    href:'/how-it-works#features',
  },
  {
    letter:'B', color:'#06b6d4', badge:'Add-on',
    name:'Financial Ledger',
    outcome:'Lender draws assembled automatically — no chasing paperwork.',
    why:'When a phase is signed off on site, the draw request is ready in the office before anyone makes a phone call.',
    icons:[
      { icon:'💰', label:'Job Costing', sub:'By community · By cost code' },
      { icon:'🔍', label:'Invoice OCR', sub:'AI reads · Matches POs · Flags issues' },
      { icon:'🏦', label:'Lender Draws', sub:'Auto-assembled on phase sign-off' },
      { icon:'📊', label:'Budget Alerts', sub:'Warnings at 80% and 95%' },
      { icon:'🏷', label:'CapEx / OpEx', sub:'Auto-classification per line' },
      { icon:'🔗', label:'Connected', sub:'Warranty data · Build phases' },
    ],
    href:'/platform',
  },
  {
    letter:'C', color:'#3b82f6', badge:'Add-on',
    name:'Build & Field Ops',
    outcome:'Phase signed on site. Draw assembled in the office. No phone call needed.',
    why:'Sub-trades sign off digitally via a link — no app install. Phase cannot close until all sign-offs are in.',
    icons:[
      { icon:'📅', label:'CPM Schedule', sub:'Drag to reschedule · Cascade updates' },
      { icon:'✅', label:'Phase Gates', sub:'Photo required · Field sign-off' },
      { icon:'🔧', label:'Sub-Trade Sign-Off', sub:'Shareable link · No install' },
      { icon:'⚠️', label:'Safety Log', sub:'Observations · Photo · Escalation' },
      { icon:'📦', label:'Material Orders', sub:'Requests → PM approval queue' },
      { icon:'📱', label:'Field App', sub:'Phase sign-off · Orders · Safety' },
    ],
    href:'/platform',
  },
  {
    letter:'D', color:'#a855f7', badge:'Add-on',
    name:'Sales, Leasing & Storage',
    outcome:'Unit sold. Revenue recorded, storage assigned, Tarion clock started — automatically.',
    why:'One event fires cascades across every connected module. No coordinator manually triggering anything.',
    icons:[
      { icon:'📝', label:'APS Generation', sub:'DocuSign · Dropbox Sign' },
      { icon:'🎨', label:'Design Studio', sub:'Buyer selects finishes via portal' },
      { icon:'🗺', label:'Visual Site Plan', sub:'Units colour-coded by status' },
      { icon:'🅿️', label:'Storage Auto-Assign', sub:'Proximity algorithm · Override' },
      { icon:'🔑', label:'Smart Handover', sub:'Close → cascade fires everywhere' },
      { icon:'📈', label:'Buyer CRM', sub:'Lead to closing pipeline' },
    ],
    href:'/platform',
  },
  {
    letter:'A', color:'#ef4444', badge:'Add-on',
    name:'Land & Pre-Con',
    outcome:'Permit approved. Construction phase unlocked. No manual trigger.',
    why:'Pro-forma assumptions drawn from your own comparable projects — not industry averages.',
    icons:[
      { icon:'🏔', label:'Acquisition Pipeline', sub:'MLS look → close · All stages' },
      { icon:'📊', label:'AI Pro-Forma', sub:'Your own portfolio data · Minutes' },
      { icon:'🗺', label:'Zoning API', sub:'Density · Setbacks · Height live' },
      { icon:'📋', label:'Permit Tracker', sub:'Approved → unlocks build phase' },
      { icon:'🤝', label:'Due Diligence', sub:'Checklists · Key dates · Team' },
      { icon:'🔗', label:'Connected', sub:'Permit approval → Build Ops' },
    ],
    href:'/platform',
  },
  {
    letter:'F', color:'#10b981', badge:'Add-on',
    name:'IoT & Security',
    outcome:'Moisture sensor spikes. Warranty case created and trade dispatched before the tenant calls.',
    why:'Unit closes — trade keys revoked, homeowner access provisioned. No coordinator needed.',
    icons:[
      { icon:'🔐', label:'Smart Locks', sub:'Salto · Latch · Time-bound keys' },
      { icon:'💧', label:'Sensor Monitoring', sub:'Moisture · Temp · Per unit' },
      { icon:'⚡', label:'Auto-Case', sub:'Sensor spike → case + dispatch' },
      { icon:'🎟', label:'Amenity Booking', sub:'Booking → key auto-issued' },
      { icon:'🔑', label:'Key Revocation', sub:'Unit closed → trades revoked' },
      { icon:'📡', label:'Live Dashboard', sub:'All sensors · All buildings' },
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
            Plug-and-Play Modules
          </div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,60px)', letterSpacing:'0.04em', lineHeight:0.97, color:'#F5F5F5', marginBottom:12 }}>
            Buy what you need.<br/>Add the rest when you&apos;re ready.
          </h2>
          <p style={{ fontSize:15, color:'#888', lineHeight:1.75, maxWidth:580 }}>
            Every module works independently and connects automatically when added. One toggle. No reinstall, no migration, no retraining on what already works.
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
                <span style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color:'#444', textTransform:'uppercase', letterSpacing:'0.1em' }}>Field app included</span>
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
