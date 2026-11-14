'use client'
import { useState } from 'react'
import Link from 'next/link'

/* ── SCREEN MOCKUP SVGs ── */

const Screen1 = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    {/* App chrome */}
    <rect width="560" height="380" rx="8" fill="#0a0a0a" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.3"/>
    {/* Top bar */}
    <rect width="560" height="44" rx="8" fill="#111"/>
    <rect y="36" width="560" height="8" fill="#111"/>
    <circle cx="20" cy="22" r="5" fill="#FFB800" fillOpacity="0.8"/>
    <text x="34" y="26" fontFamily="monospace" fontSize="10" fill="#FFB800" fontWeight="bold">GUARDIAN</text>
    <text x="120" y="26" fontFamily="monospace" fontSize="9" fill="#888">Warranty · PDI · Field App · Conciliation</text>
    {/* Sidebar */}
    <rect x="0" y="44" width="140" height="336" fill="#0d0d0d" rx="0"/>
    <rect x="0" y="44" width="1" height="336" fill="#FFB800" fillOpacity="0.15"/>
    {[
      {y:70, icon:'🛡', label:'Warranty', active:true},
      {y:100, icon:'📋', label:'PDI', active:false},
      {y:130, icon:'📅', label:'Schedule', active:false},
      {y:160, icon:'💰', label:'POs', active:false},
      {y:190, icon:'📱', label:'Field App', active:false},
      {y:220, icon:'🔐', label:'Vault', active:false},
    ].map(item => (
      <g key={item.y}>
        {item.active && <rect x="0" y={item.y-12} width="140" height="24" fill="#FFB800" fillOpacity="0.1"/>}
        {item.active && <rect x="0" y={item.y-12} width="2" height="24" fill="#FFB800"/>}
        <text x="16" y={item.y+4} fontSize="12" fill={item.active ? '#FFB800' : '#555'}>{item.icon}</text>
        <text x="34" y={item.y+4} fontFamily="monospace" fontSize="9" fill={item.active ? '#FFB800' : '#555'}>{item.label}</text>
      </g>
    ))}
    {/* Main content */}
    <text x="156" y="72" fontFamily="'Bebas Neue',sans-serif" fontSize="18" letterSpacing="0.06em" fill="#F5F5F5">WARRANTY DASHBOARD</text>
    <text x="156" y="86" fontFamily="monospace" fontSize="8" fill="#666">Bayview Heights — 47 active units</text>
    {/* Stats row */}
    {[
      {x:156, label:'Open Cases', n:'12', color:'#FFB800'},
      {x:256, label:'BRP Active', n:'3', color:'#f97316'},
      {x:356, label:'RFC Pending', n:'1', color:'#ef4444'},
      {x:456, label:'Closed Today', n:'5', color:'#22c55e'},
    ].map(s => (
      <g key={s.x}>
        <rect x={s.x} y="94" width="88" height="44" rx="4" fill="#111" stroke={s.color} strokeWidth="0.5" strokeOpacity="0.4"/>
        <text x={s.x+44} y="113" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="20" fill={s.color}>{s.n}</text>
        <text x={s.x+44} y="127" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#666">{s.label}</text>
      </g>
    ))}
    {/* Case list */}
    <text x="156" y="158" fontFamily="monospace" fontSize="8" fill="#555" letterSpacing="0.1em">ACTIVE CASES</text>
    {[
      {unit:'Unit 112', issue:'Drywall crack — living room', status:'BRP Day 45', statusColor:'#FFB800', trade:'Mike Chen'},
      {unit:'Unit 204', issue:'Window seal failure', status:'RFC Pending', statusColor:'#ef4444', trade:'Unassigned'},
      {unit:'Unit 318', issue:'HVAC noise complaint', status:'BRP Day 12', statusColor:'#22c55e', trade:'ProHeat Ltd'},
      {unit:'Unit 067', issue:'Tile grout — master bath', status:'BRP Day 88', statusColor:'#f97316', trade:'TilePro Inc'},
      {unit:'Unit 445', issue:'Exterior caulking gap', status:'Scheduled', statusColor:'#3b82f6', trade:'BuildRight'},
    ].map((c, i) => (
      <g key={i}>
        <rect x="156" y={168+i*32} width="390" height="28" rx="3" fill={i===1 ? '#1a0a0a' : '#0f0f0f'} stroke={i===1 ? '#ef4444' : '#1a1a1a'} strokeWidth="0.8"/>
        <text x="165" y={184+i*32} fontFamily="monospace" fontSize="9" fill="#FFB800" fontWeight="bold">{c.unit}</text>
        <text x="218" y={184+i*32} fontFamily="monospace" fontSize="9" fill="#888">{c.issue}</text>
        <rect x="390" y={170+i*32} width="72" height="16" rx="3" fill={c.statusColor} fillOpacity="0.15"/>
        <text x="426" y={182+i*32} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={c.statusColor}>{c.status}</text>
        <text x="476" y={184+i*32} fontFamily="monospace" fontSize="8" fill="#555">{c.trade}</text>
      </g>
    ))}
  </svg>
)

const Screen2 = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="560" height="380" rx="8" fill="#0a0a0a" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.3"/>
    <rect width="560" height="44" rx="8" fill="#111"/>
    <rect y="36" width="560" height="8" fill="#111"/>
    <circle cx="20" cy="22" r="5" fill="#FFB800" fillOpacity="0.8"/>
    <text x="34" y="26" fontFamily="monospace" fontSize="10" fill="#FFB800" fontWeight="bold">GUARDIAN</text>
    <text x="120" y="26" fontFamily="monospace" fontSize="9" fill="#888">PDI Walkthrough — Unit 445</text>
    {/* PDI form */}
    <text x="20" y="72" fontFamily="'Bebas Neue',sans-serif" fontSize="18" letterSpacing="0.06em" fill="#F5F5F5">PDI SIGN-OFF</text>
    <text x="20" y="86" fontFamily="monospace" fontSize="8" fill="#666">Unit 445 · Bayview Heights · Sarah Thompson</text>
    {/* Progress bar */}
    <rect x="20" y="94" width="520" height="6" rx="3" fill="#1a1a1a"/>
    <rect x="20" y="94" width="364" height="6" rx="3" fill="#FFB800"/>
    <text x="390" y="102" fontFamily="monospace" fontSize="8" fill="#FFB800">7 of 10 rooms complete</text>
    {/* Room checklist */}
    {[
      {room:'Living Room', status:'complete', items:2, defects:1},
      {room:'Kitchen', status:'complete', items:5, defects:0},
      {room:'Master Bedroom', status:'complete', items:3, defects:0},
      {room:'Master Ensuite', status:'active', items:4, defects:2},
      {room:'Bedroom 2', status:'pending', items:3, defects:0},
      {room:'Main Bathroom', status:'pending', items:4, defects:0},
    ].map((r,i) => (
      <g key={i}>
        <rect x="20" y={112+i*34} width="250" height="28" rx="4"
          fill={r.status==='active'?'#1a1200':r.status==='complete'?'#0a1a0a':'#0f0f0f'}
          stroke={r.status==='active'?'#FFB800':r.status==='complete'?'#22c55e':'#1a1a1a'} strokeWidth="1"/>
        <text x="32" y={130+i*34} fontFamily="monospace" fontSize="9"
          fill={r.status==='active'?'#FFB800':r.status==='complete'?'#22c55e':'#555'}>{r.room}</text>
        <text x="32" y={140+i*34} fontFamily="monospace" fontSize="7" fill="#444">{r.items} checks · {r.defects} defects</text>
        <text x="240" y={131+i*34} fontFamily="monospace" fontSize="8"
          fill={r.status==='active'?'#FFB800':r.status==='complete'?'#22c55e':'#333'}>
          {r.status==='complete'?'✓':r.status==='active'?'→':'○'}
        </text>
      </g>
    ))}
    {/* Active defect panel */}
    <rect x="286" y="112" width="254" height="180" rx="6" fill="#111" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.5"/>
    <text x="296" y="128" fontFamily="monospace" fontSize="8" fill="#FFB800" letterSpacing="0.1em">DEFECT #2 — MASTER ENSUITE</text>
    <rect x="296" y="134" width="234" height="90" rx="4" fill="#1a1a1a"/>
    <text x="413" y="184" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#555">📷 Photo Required</text>
    <text x="413" y="197" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#444">Tap to capture</text>
    <text x="296" y="242" fontFamily="monospace" fontSize="8" fill="#888">Category:</text>
    <rect x="296" y="248" width="70" height="16" rx="3" fill="#FFB800" fillOpacity="0.15" stroke="#FFB800" strokeWidth="0.5"/>
    <text x="331" y="259" textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#FFB800">Tile/Grout</text>
    <text x="296" y="278" fontFamily="monospace" fontSize="8" fill="#888">Description: Grout gap at shower base</text>
    {/* Signature area */}
    <rect x="20" y="320" width="520" height="46" rx="6" fill="#0f1a0f" stroke="#22c55e" strokeWidth="1" strokeOpacity="0.5"/>
    <text x="30" y="338" fontFamily="monospace" fontSize="8" fill="#22c55e">HOMEOWNER SIGNATURE</text>
    <text x="30" y="352" fontFamily="monospace" fontSize="8" fill="#555">Sign on screen to confirm PDI completion</text>
    <text x="490" y="348" fontFamily="monospace" fontSize="20" fill="#22c55e" opacity="0.4">✍</text>
  </svg>
)

const Screen3 = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="560" height="380" rx="8" fill="#0a0a0a" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.3"/>
    <rect width="560" height="44" rx="8" fill="#111"/>
    <rect y="36" width="560" height="8" fill="#111"/>
    <circle cx="20" cy="22" r="5" fill="#FFB800" fillOpacity="0.8"/>
    <text x="34" y="26" fontFamily="monospace" fontSize="10" fill="#FFB800" fontWeight="bold">GUARDIAN</text>
    <text x="120" y="26" fontFamily="monospace" fontSize="9" fill="#888">Field App — Tech View</text>
    {/* Phone mockup inside screen */}
    <rect x="155" y="50" width="250" height="320" rx="20" fill="#111" stroke="#FFB800" strokeWidth="1.5" strokeOpacity="0.6"/>
    <rect x="190" y="55" width="180" height="8" rx="4" fill="#1a1a1a"/>
    {/* Phone content */}
    <text x="280" y="86" textAnchor="middle" fontFamily="'Bebas Neue',sans-serif" fontSize="16" letterSpacing="0.06em" fill="#FFB800">TODAY</text>
    <text x="280" y="98" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="#666">Monday · 3 jobs assigned</text>
    {/* Job cards */}
    {[
      {unit:'Unit 112', time:'9:00 AM', issue:'Drywall repair', status:'Done', statusC:'#22c55e'},
      {unit:'Unit 204', time:'11:30 AM', issue:'Window seal', status:'Next', statusC:'#FFB800'},
      {unit:'Unit 318', time:'2:00 PM', issue:'HVAC noise', status:'Later', statusC:'#555'},
    ].map((j,i) => (
      <g key={i}>
        <rect x="168" y={112+i*68} width="224" height="58" rx="6"
          fill={j.status==='Done'?'#0a1a0a':j.status==='Next'?'#1a1200':'#0f0f0f'}
          stroke={j.status==='Done'?'#22c55e':j.status==='Next'?'#FFB800':'#1a1a1a'} strokeWidth="1"/>
        <text x="180" y={128+i*68} fontFamily="monospace" fontSize="10" fontWeight="bold"
          fill={j.status==='Done'?'#22c55e':j.status==='Next'?'#FFB800':'#888'}>{j.unit}</text>
        <text x="180" y={140+i*68} fontFamily="monospace" fontSize="8" fill="#666">{j.time} · {j.issue}</text>
        <rect x="310" y={116+i*68} width="44" height="16" rx="3" fill={j.statusC} fillOpacity="0.2"/>
        <text x="332" y={127+i*68} textAnchor="middle" fontFamily="monospace" fontSize="7" fill={j.statusC}>{j.status}</text>
        {j.status==='Done' && <text x="332" y={155+i*68} textAnchor="middle" fontSize="14" fill="#22c55e">✓</text>}
        {j.status==='Next' && (
          <>
            <rect x="168" y={148+i*68} width="105" height="16" rx="3" fill="#22c55e" fillOpacity="0.9"/>
            <text x="220" y={159+i*68} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#000" fontWeight="bold">MARK COMPLETE</text>
            <rect x="279" y={148+i*68} width="113" height="16" rx="3" fill="#ef4444" fillOpacity="0.15" stroke="#ef4444" strokeWidth="0.5"/>
            <text x="335" y={159+i*68} textAnchor="middle" fontFamily="monospace" fontSize="7" fill="#ef4444">NO SHOW</text>
          </>
        )}
      </g>
    ))}
    {/* FAB button */}
    <circle cx="280" cy="340" r="18" fill="#FFB800"/>
    <text x="280" y="346" textAnchor="middle" fontSize="14" fill="#000">📷</text>
    {/* Side panel - desktop */}
    <text x="28" y="72" fontFamily="monospace" fontSize="8" fill="#666" letterSpacing="0.08em">LIVE UPDATES</text>
    <rect x="20" y="80" width="120" height="260" rx="6" fill="#0d0d0d" stroke="#1a1a1a" strokeWidth="1"/>
    {[
      {t:'9:18 AM', msg:'Unit 112 complete', c:'#22c55e'},
      {t:'9:15 AM', msg:'Photo uploaded', c:'#888'},
      {t:'9:02 AM', msg:'Unit 112 arrived', c:'#888'},
      {t:'8:55 AM', msg:'Route started', c:'#888'},
      {t:'8:30 AM', msg:'Day started', c:'#555'},
    ].map((u,i) => (
      <g key={i}>
        <text x="28" y={100+i*44} fontFamily="monospace" fontSize="7" fill="#555">{u.t}</text>
        <text x="28" y={112+i*44} fontFamily="monospace" fontSize="8" fill={u.c}>{u.msg}</text>
        {i<4 && <line x1="28" y1={118+i*44} x2="128" y2={118+i*44} stroke="#1a1a1a" strokeWidth="0.5"/>}
      </g>
    ))}
    {/* Right panel */}
    <text x="426" y="72" fontFamily="monospace" fontSize="8" fill="#666" letterSpacing="0.08em">COORDINATOR VIEW</text>
    <rect x="420" y="80" width="120" height="260" rx="6" fill="#0d0d0d" stroke="#1a1a1a" strokeWidth="1"/>
    <text x="430" y="100" fontFamily="monospace" fontSize="7" fill="#888">Mike Chen — Field</text>
    <rect x="430" y="106" width="100" height="8" rx="2" fill="#22c55e" fillOpacity="0.6"/>
    <text x="480" y="114" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#000">Unit 112 Done</text>
    <text x="430" y="128" fontFamily="monospace" fontSize="7" fill="#555">Tom Park — Field</text>
    <rect x="430" y="134" width="70" height="8" rx="2" fill="#FFB800" fillOpacity="0.6"/>
    <text x="465" y="142" textAnchor="middle" fontFamily="monospace" fontSize="6" fill="#000">En route</text>
    <text x="430" y="165" fontFamily="monospace" fontSize="8" fill="#FFB800">No signal? No problem.</text>
    <text x="430" y="177" fontFamily="monospace" fontSize="7" fill="#555">Offline queue syncs</text>
    <text x="430" y="188" fontFamily="monospace" fontSize="7" fill="#555">automatically.</text>
  </svg>
)

const Screen4 = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="560" height="380" rx="8" fill="#0a0a0a" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.3"/>
    <rect width="560" height="44" rx="8" fill="#111"/>
    <rect y="36" width="560" height="8" fill="#111"/>
    <circle cx="20" cy="22" r="5" fill="#FFB800" fillOpacity="0.8"/>
    <text x="34" y="26" fontFamily="monospace" fontSize="10" fill="#FFB800" fontWeight="bold">GUARDIAN</text>
    <text x="120" y="26" fontFamily="monospace" fontSize="9" fill="#888">Tarion Deadline Tracker — Bayview Heights</text>
    {/* Header */}
    <text x="20" y="70" fontFamily="'Bebas Neue',sans-serif" fontSize="18" letterSpacing="0.06em" fill="#F5F5F5">TARION DEADLINE TRACKER</text>
    <text x="20" y="84" fontFamily="monospace" fontSize="8" fill="#666">Post-May 2024 CSS · Day 41 / 183 / 366 Auto-Submissions</text>
    {/* Timeline header row */}
    <rect x="20" y="92" width="520" height="24" rx="3" fill="#111"/>
    {['UNIT','HOMEOWNER','CLOSE DATE','DAY 41 FORM','BRP STATUS','120D EXPIRES','RFC STATUS'].map((h,i) => (
      <text key={h} x={[28,88,180,258,340,428,490][i]} y={108} fontFamily="monospace" fontSize="7" fill="#FFB800" letterSpacing="0.08em">{h}</text>
    ))}
    {/* Deadline rows */}
    {[
      {unit:'U-112', name:'Thompson, S.', close:'Mar 12/26', d41:'Apr 22 ✓', brp:'Day 45/120', exp:'Aug 20/26', rfc:'Not Filed', rfc_c:'#888'},
      {unit:'U-204', name:'Mehta, P.', close:'Mar 15/26', d41:'Apr 25 ✓', brp:'Day 42/120', exp:'Aug 23/26', rfc:'FILED D42', rfc_c:'#ef4444'},
      {unit:'U-318', name:'Anderson, R.', close:'Apr 01/26', d41:'May 12', brp:'Pre-BRP', exp:'Sep 09/26', rfc:'—', rfc_c:'#555'},
      {unit:'U-445', name:'Thompson, S.', close:'May 10/26', d41:'Jun 20', brp:'Not Started', exp:'Oct 18/26', rfc:'—', rfc_c:'#555'},
      {unit:'U-067', name:'Chen, W.', close:'Feb 02/26', d41:'Mar 15 ✓', brp:'Day 88/120', exp:'Jul 13/26', rfc:'—', rfc_c:'#555'},
    ].map((r,i) => (
      <g key={i}>
        <rect x="20" y={118+i*34} width="520" height="28" rx="2"
          fill={r.rfc==='FILED D42'?'#1a0808':i%2===0?'#0d0d0d':'#0a0a0a'}
          stroke={r.rfc==='FILED D42'?'#ef4444':'transparent'} strokeWidth="0.8"/>
        <text x="28" y={136+i*34} fontFamily="monospace" fontSize="9" fill="#FFB800">{r.unit}</text>
        <text x="88" y={136+i*34} fontFamily="monospace" fontSize="8" fill="#888">{r.name}</text>
        <text x="180" y={136+i*34} fontFamily="monospace" fontSize="8" fill="#666">{r.close}</text>
        <text x="258" y={136+i*34} fontFamily="monospace" fontSize="8" fill="#22c55e">{r.d41}</text>
        <text x="340" y={136+i*34} fontFamily="monospace" fontSize="8" fill="#FFB800">{r.brp}</text>
        <text x="428" y={136+i*34} fontFamily="monospace" fontSize="8" fill="#888">{r.exp}</text>
        <text x="490" y={136+i*34} fontFamily="monospace" fontSize="8" fill={r.rfc_c}>{r.rfc}</text>
      </g>
    ))}
    {/* Alert banner */}
    <rect x="20" y="295" width="520" height="36" rx="6" fill="#1a0808" stroke="#ef4444" strokeWidth="1"/>
    <text x="32" y="308" fontFamily="monospace" fontSize="9" fill="#ef4444" fontWeight="bold">⚠ ALERT — Unit 204: RFC filed Day 42. Your 30-day pre-conciliation BRP has been added automatically.</text>
    <text x="32" y="322" fontFamily="monospace" fontSize="8" fill="#888">Total repair window: 150 days · Expires Aug 23, 2026 · Lex Structura has flagged 2 CPG items for review</text>
    {/* BRP progress bars */}
    <text x="20" y="352" fontFamily="monospace" fontSize="8" fill="#666" letterSpacing="0.08em">BRP PROGRESS</text>
    {[
      {unit:'U-112', pct:37, color:'#22c55e'},
      {unit:'U-204', pct:97, color:'#ef4444'},
      {unit:'U-067', pct:73, color:'#f97316'},
    ].map((b,i) => (
      <g key={i}>
        <text x={28+i*180} y={368} fontFamily="monospace" fontSize="7" fill="#555">{b.unit}</text>
        <rect x={28+i*180} y={370} width="140" height="6" rx="3" fill="#1a1a1a"/>
        <rect x={28+i*180} y={370} width={140*b.pct/100} height="6" rx="3" fill={b.color}/>
        <text x={172+i*180} y={378} fontFamily="monospace" fontSize="7" fill={b.color}>{b.pct}%</text>
      </g>
    ))}
  </svg>
)

const Screen5 = () => (
  <svg viewBox="0 0 560 380" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
    <rect width="560" height="380" rx="8" fill="#0a0a0a" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.3"/>
    <rect width="560" height="44" rx="8" fill="#111"/>
    <rect y="36" width="560" height="8" fill="#111"/>
    <circle cx="20" cy="22" r="5" fill="#FFB800" fillOpacity="0.8"/>
    <text x="34" y="26" fontFamily="monospace" fontSize="10" fill="#FFB800" fontWeight="bold">GUARDIAN</text>
    <text x="120" y="26" fontFamily="monospace" fontSize="9" fill="#888">Defence Vault — Unit 204 · Conciliation Export</text>
    {/* Header */}
    <text x="20" y="70" fontFamily="'Bebas Neue',sans-serif" fontSize="18" letterSpacing="0.06em" fill="#F5F5F5">DEFENCE VAULT</text>
    <text x="20" y="84" fontFamily="monospace" fontSize="8" fill="#666">Unit 204 · Mehta, P. · RFC Filed Day 42 · Export Ready</text>
    {/* Export button */}
    <rect x="400" y="60" width="150" height="32" rx="5" fill="#FFB800"/>
    <text x="475" y="80" textAnchor="middle" fontFamily="monospace" fontSize="9" fill="#000" fontWeight="bold">EXPORT VAULT PDF →</text>
    {/* Timeline audit */}
    <text x="20" y="106" fontFamily="monospace" fontSize="8" fill="#666" letterSpacing="0.08em">CASE AUDIT TRAIL</text>
    {[
      {date:'Mar 15', time:'10:22', event:'Unit closed — CPP signed by P. Mehta', type:'legal', icon:'📋'},
      {date:'Mar 15', time:'10:24', event:'Tarion clock initialized — Day 41 form due Apr 25', type:'system', icon:'⏱'},
      {date:'Apr 25', time:'00:00', event:'Initial Form auto-submitted via MyHome', type:'tarion', icon:'✓'},
      {date:'Apr 25', time:'09:15', event:'BRP started — 120-day window open', type:'system', icon:'🛡'},
      {date:'Apr 26', time:'14:33', event:'RFC submitted by homeowner — Day 42', type:'alert', icon:'⚠️'},
      {date:'Apr 26', time:'14:34', event:'30-day pre-conciliation BRP appended automatically', type:'system', icon:'🔗'},
      {date:'May 02', time:'09:00', event:'Work order assigned — Mike Chen · Window seal', type:'action', icon:'🔧'},
      {date:'May 08', time:'11:45', event:'Repair completed · 3 photos uploaded · Homeowner notified', type:'complete', icon:'✅'},
    ].map((e,i) => {
      const typeColor = {legal:'#3b82f6',system:'#888',tarion:'#22c55e',alert:'#ef4444',action:'#FFB800',complete:'#22c55e'}[e.type] || '#888'
      return (
        <g key={i}>
          <rect x="20" y={112+i*28} width="520" height="24" rx="2" fill={i%2===0?'#0d0d0d':'#0a0a0a'}/>
          <text x="28" y={128+i*28} fontFamily="monospace" fontSize="8" fill="#555">{e.date} {e.time}</text>
          <text x="108" y={128+i*28} fontSize="10">{e.icon}</text>
          <text x="126" y={128+i*28} fontFamily="monospace" fontSize="8" fill={typeColor}>{e.event}</text>
        </g>
      )
    })}
    {/* CPG citations */}
    <rect x="20" y="344" width="520" height="28" rx="4" fill="#0a1a12" stroke="#22c55e" strokeWidth="0.8"/>
    <text x="30" y="356" fontFamily="monospace" fontSize="8" fill="#22c55e">LEX STRUCTURA CITATIONS ATTACHED:</text>
    <text x="30" y="368" fontFamily="monospace" fontSize="7" fill="#666">CPG Section 5.2.1 — Window Installation Tolerances · OBC 9.7.5 — Air Barrier Requirements · Tarion Bulletin 2024-03</text>
  </svg>
)

/* ── STEP DATA ── */
const steps = [
  {
    n:'01',
    time:'7:00 AM',
    actor:'Warranty Coordinator — Office',
    title:'Good morning. Your warranty dashboard is already up to date.',
    desc:"You open Builder Guardian to start the day. Every active case, every BRP countdown, and every unit's Tarion status is live — updated from field activity the night before. No phone calls to find out what happened yesterday.",
    outcome:'12 open cases · 3 BRP windows active · 1 RFC filed overnight — all visible in 3 seconds',
    Screen: Screen1,
    color:'#D97706',
  },
  {
    n:'02',
    time:'9:00 AM',
    actor:'PDI Inspector — Unit 445, Bayview Heights',
    title:'Room-by-room PDI on the tablet. Homeowner signs on glass.',
    desc:"The inspector walks Unit 445 with the tablet. Each room has a structured checklist. Any deficiency gets a photo before the item can be submitted. At the end, the homeowner signs directly on screen. PDF generated on-device, emailed to the homeowner, uploaded to the Defence Vault — before the inspector leaves the building.",
    outcome:'Signed legal PDI document in the Vault · Tarion clock starts automatically · Outstanding items become warranty cases',
    Screen: Screen2,
    color:'#1D4ED8',
  },
  {
    n:'03',
    time:'10:30 AM',
    actor:'Field Tech — Mike Chen, 3 jobs today',
    title:'Opens the app in the truck. Jobs are already loaded.',
    desc:"Mike's day is pre-loaded: addresses, unit numbers, issue descriptions, scheduled times. He taps Unit 112 — it opens in Maps. On arrival he marks it complete, takes the required photo, and drives to the next lot. The coordinator sees the update appear in real time. Works in basement parkades. Works with no signal.",
    outcome:'Job completed in 15 seconds · Coordinator notified automatically · Photo stored in case file',
    Screen: Screen3,
    color:'#15803D',
  },
  {
    n:'04',
    time:'11:45 AM',
    actor:'Warranty Coordinator — Tarion deadline alert fires',
    title:'RFC alert. Unit 204 homeowner filed conciliation on Day 42.',
    desc:"The system catches it before anyone calls. Unit 204's homeowner filed an RFC on Day 42 of the BRP. Builder Guardian automatically appends the 30-day pre-conciliation BRP — extending the total window to 150 days. The coordinator sees exactly how many days remain, which cases are outstanding, and what needs to happen before the conciliation date.",
    outcome:'150-day window tracked automatically · Lex Structura flags 2 CPG items · Coordinator notified instantly',
    Screen: Screen4,
    color:'#DC2626',
  },
  {
    n:'05',
    time:'2:30 PM',
    actor:'Director — Tarion calls about Unit 204 conciliation',
    title:'Pull the Defence Vault. One click. Walk in ready.',
    desc:"Tarion calls to schedule a conciliation for Unit 204. The director opens the case, clicks Export Vault Package. Every status change, every photo, every interaction log, every signed document — organized into a PDF formatted for Tarion's process. CPG citations from Lex Structura attached automatically. This is what winning a conciliation looks like.",
    outcome:'Complete audit trail exported in 60 seconds · CPG citations included · No scrambling through folders',
    Screen: Screen5,
    color:'#4338CA',
  },
]

/* ── WAITLIST FORM ── */
function WaitlistForm() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    if (!email || !name) return
    // In production this would POST to an API route
    setSubmitted(true)
  }

  if (submitted) return (
    <div style={{ textAlign:'center', padding:'48px 0' }}>
      <div style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:48, letterSpacing:'0.04em', color:'#D97706', marginBottom:12 }}>YOU ARE IN.</div>
      <p style={{ fontSize:14, color:'#475569', marginBottom:8 }}>We will be in touch at <strong style={{ color:'#0F172A' }}>{email}</strong> when early access opens.</p>
      <p style={{ fontSize:13, color:'#64748B' }}>In the meantime — <Link href="mailto:demo@combryx.com" style={{ color:'#D97706' }}>email us directly</Link> to book a live walkthrough.</p>
    </div>
  )

  return (
    <div style={{ maxWidth:520, margin:'0 auto' }}>
      <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:12 }}>
          <div>
            <label style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#64748B', display:'block', marginBottom:6 }}>Your Name</label>
            <input value={name} onChange={e => setName(e.target.value)} placeholder="James Barbeau"
              style={{ width:'100%', background:'#FFFFFF', border:'1px solid #CBD5E1', borderRadius:6, padding:'10px 14px', fontFamily:'monospace', fontSize:13, color:'#0F172A', outline:'none' }}/>
          </div>
          <div>
            <label style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#64748B', display:'block', marginBottom:6 }}>Company</label>
            <input value={company} onChange={e => setCompany(e.target.value)} placeholder="Bayview Homes"
              style={{ width:'100%', background:'#FFFFFF', border:'1px solid #CBD5E1', borderRadius:6, padding:'10px 14px', fontFamily:'monospace', fontSize:13, color:'#0F172A', outline:'none' }}/>
          </div>
        </div>
        <div>
          <label style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:'#64748B', display:'block', marginBottom:6 }}>Work Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} placeholder="you@yourbuilder.com" type="email"
            style={{ width:'100%', background:'#FFFFFF', border:'1px solid #CBD5E1', borderRadius:6, padding:'10px 14px', fontFamily:'monospace', fontSize:13, color:'#0F172A', outline:'none' }}/>
        </div>
        <button onClick={handleSubmit}
          style={{ background:'#D97706', color:'#000', fontFamily:"'Fira Code',monospace", fontSize:11, fontWeight:600, letterSpacing:'0.12em', textTransform:'uppercase', padding:'14px', borderRadius:7, border:'none', cursor:'pointer', boxShadow:'0 0 24px rgba(217,119,6,0.3)', marginTop:4 }}>
          Join Early Access →
        </button>
        <p style={{ textAlign:'center', fontFamily:"'Fira Code',monospace", fontSize:10, color:'#64748B', textTransform:'uppercase', letterSpacing:'0.1em' }}>
          No credit card · No commitment · First access when we launch
        </p>
      </div>
    </div>
  )
}

/* ── MAIN COMPONENT ── */
export default function DemoWalkthrough() {
  const [active, setActive] = useState(0)
  const s = steps[active]

  return (
    <div style={{ background:'#F1F3F6', minHeight:'100vh', paddingTop:56 }}>

      {/* Hero */}
      <div style={{ background:'#F1F3F6', borderBottom:'1px solid rgba(217,119,6,0.1)', padding:'48px 20px 36px', textAlign:'center', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, opacity:0.04, backgroundImage:`url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='92'%3E%3Cpolygon points='40,2 78,22 78,70 40,90 2,70 2,22' fill='none' stroke='%23FFB800' stroke-width='0.8'/%3E%3C/svg%3E")`, backgroundSize:'80px 92px' }}/>
        <div style={{ position:'relative', zIndex:1 }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#D97706', marginBottom:12, display:'flex', alignItems:'center', justifyContent:'center', gap:12 }}>
            <span style={{ width:32, height:1, background:'#D97706', opacity:0.5, display:'inline-block' }}/>
            Builder Guardian · Workflow Demo · Early Access Preview
            <span style={{ width:32, height:1, background:'#D97706', opacity:0.5, display:'inline-block' }}/>
          </div>
          <h1 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(40px,6vw,80px)', letterSpacing:'0.04em', lineHeight:0.95, color:'#0F172A', marginBottom:16 }}>
            A REAL WARRANTY DAY.<br/><span style={{ color:'#D97706' }}>BUILT INTO ONE SYSTEM.</span>
          </h1>
          <p style={{ fontSize:16, color:'#475569', lineHeight:1.75, maxWidth:560, margin:'0 auto 24px' }}>
            Five steps. One Ontario builder warranty day. From the morning dashboard to the conciliation package — this is what Builder Guardian looks like in use.
          </p>
          <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(217,119,6,0.1)', border:'1px solid rgba(217,119,6,0.3)', borderRadius:100, padding:'8px 20px' }}>
            <span style={{ width:8, height:8, borderRadius:'50%', background:'#D97706', display:'inline-block', animation:'pulse 2s ease-in-out infinite' }}/>
            <span style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color:'#D97706', textTransform:'uppercase', letterSpacing:'0.14em' }}>UI Preview — Early Access Waitlist Open</span>
          </div>
        </div>
      </div>

      {/* Step navigator */}
      <div style={{ background:'#F1F3F6', borderBottom:'1px solid rgba(15,23,42,0.1)', padding:'0 16px', display:'flex', gap:0, overflowX:'auto', scrollbarWidth:'none' }}>
        {steps.map((step, i) => (
          <button key={i} onClick={() => setActive(i)}
            style={{ background:'none', border:'none', cursor:'pointer', padding:'16px 20px', display:'flex', flexDirection:'column', gap:3, alignItems:'flex-start', borderBottom:`2px solid ${active===i ? step.color : 'transparent'}`, transition:'all 0.2s', flexShrink:0, whiteSpace:'nowrap' }}>
            <span style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color: active===i ? step.color : '#64748B' }}>Step {step.n}</span>
            <span style={{ fontFamily:"'Fira Code',monospace", fontSize:10, color: active===i ? '#0F172A' : '#64748B' }}>{step.time}</span>
          </button>
        ))}
      </div>

      {/* Main content */}
      <div style={{ maxWidth:1200, margin:'0 auto', padding:'32px 16px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:32, alignItems:'start' }}>

          {/* Left — screen */}
          <div>
            <div style={{ background:'#FFFFFF', borderRadius:12, padding:3, border:`1px solid ${s.color}33` }}>
              <s.Screen />
            </div>
            {/* Step dots */}
            <div style={{ display:'flex', gap:8, justifyContent:'center', marginTop:20 }}>
              {steps.map((_, i) => (
                <button key={i} onClick={() => setActive(i)}
                  style={{ width: active===i ? 24 : 8, height:8, borderRadius:4, background: active===i ? steps[i].color : '#E2E8F0', border:'none', cursor:'pointer', transition:'all 0.3s', padding:0 }}/>
              ))}
            </div>
          </div>

          {/* Right — copy */}
          <div style={{ display:'flex', flexDirection:'column', gap:20 }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
                <div style={{ width:44, height:44, background:s.color, clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
                  <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:16, color:'#000', fontWeight:'bold' }}>{s.n}</span>
                </div>
                <div>
                  <div style={{ fontFamily:"'Fira Code',monospace", fontSize:9, textTransform:'uppercase', letterSpacing:'0.14em', color:s.color, marginBottom:2 }}>{s.time} · {s.actor}</div>
                </div>
              </div>
              <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(22px,2.5vw,32px)', letterSpacing:'0.04em', color:'#0F172A', lineHeight:1.1, marginBottom:14 }}>{s.title}</h2>
              <p style={{ fontSize:14, color:'#475569', lineHeight:1.8, marginBottom:20 }}>{s.desc}</p>
              <div style={{ background:`${s.color}10`, border:`1px solid ${s.color}30`, borderRadius:8, padding:'12px 16px', fontFamily:"'Fira Code',monospace", fontSize:11, color:s.color, lineHeight:1.6 }}>
                → {s.outcome}
              </div>
            </div>

            {/* Navigation */}
            <div style={{ display:'flex', gap:10, marginTop:8 }}>
              <button onClick={() => setActive(Math.max(0, active-1))}
                style={{ flex:1, background:'#FFFFFF', border:'1px solid #E2E8F0', borderRadius:7, padding:'12px', fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.1em', color: active===0 ? '#CBD5E1' : '#475569', cursor: active===0 ? 'default' : 'pointer' }}>
                ← Previous
              </button>
              {active < steps.length - 1 ? (
                <button onClick={() => setActive(active+1)}
                  style={{ flex:2, background:s.color, border:'none', borderRadius:7, padding:'12px', fontFamily:"'Fira Code',monospace", fontSize:10, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', color:'#000', cursor:'pointer' }}>
                  Next Step →
                </button>
              ) : (
                <button onClick={() => document.getElementById('waitlist')?.scrollIntoView({behavior:'smooth'})}
                  style={{ flex:2, background:'#D97706', border:'none', borderRadius:7, padding:'12px', fontFamily:"'Fira Code',monospace", fontSize:10, fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', color:'#000', cursor:'pointer' }}>
                  Join Early Access →
                </button>
              )}
            </div>

            {/* Progress */}
            <div style={{ display:'flex', flexDirection:'column', gap:4 }}>
              <div style={{ display:'flex', justifyContent:'space-between' }}>
                <span style={{ fontFamily:"'Fira Code',monospace", fontSize:9, color:'#64748B', textTransform:'uppercase', letterSpacing:'0.1em' }}>Workflow progress</span>
                <span style={{ fontFamily:"'Fira Code',monospace", fontSize:9, color:s.color }}>{active+1} of {steps.length}</span>
              </div>
              <div style={{ height:4, background:'#FFFFFF', borderRadius:2 }}>
                <div style={{ height:4, background:s.color, borderRadius:2, width:`${((active+1)/steps.length)*100}%`, transition:'width 0.4s ease' }}/>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What you are seeing */}
      <div style={{ background:'#F1F3F6', borderTop:'1px solid rgba(15,23,42,0.1)', borderBottom:'1px solid rgba(15,23,42,0.1)', padding:'24px 20px' }}>
        <div style={{ maxWidth:1200, margin:'0 auto', display:'flex', gap:12, alignItems:'center', flexWrap:'wrap' }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.14em', color:'#D97706', flexShrink:0 }}>What you are seeing:</div>
          <div style={{ fontSize:13, color:'#64748B', lineHeight:1.6 }}>
            These are UI design previews — not fake screenshots of a finished product. Builder Guardian is in active development. Every screen shown reflects a real planned workflow based on 35+ years in the trade and experience inside 5 Ontario builders and Tarion. <span style={{ color:'#475569' }}>Early access waitlist is open below.</span>
          </div>
        </div>
      </div>

      {/* Waitlist */}
      <div id="waitlist" style={{ background:'#F1F3F6', padding:'56px 20px' }}>
        <div style={{ maxWidth:640, margin:'0 auto', textAlign:'center' }}>
          <div style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.22em', color:'#D97706', marginBottom:14 }}>Early Access</div>
          <h2 style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:'clamp(36px,5vw,64px)', letterSpacing:'0.04em', lineHeight:0.97, color:'#0F172A', marginBottom:14 }}>
            Be first in.<br/><span style={{ color:'#D97706' }}>No setup fee. Ever.</span>
          </h2>
          <p style={{ fontSize:14, color:'#475569', lineHeight:1.75, marginBottom:36, maxWidth:440, margin:'0 auto 36px' }}>
            Early access builders get priority onboarding, direct line to the founder, and the ability to shape which features ship first. Join the waitlist.
          </p>
          <WaitlistForm />
          <div style={{ marginTop:32, display:'flex', gap:24, justifyContent:'center', flexWrap:'wrap' }}>
            {['No credit card','Cancel anytime','Ontario-specific','Built by Tarion insider'].map(t => (
              <span key={t} style={{ fontFamily:"'Fira Code',monospace", fontSize:10, textTransform:'uppercase', letterSpacing:'0.1em', color:'#64748B', display:'flex', alignItems:'center', gap:6 }}>
                <span style={{ color:'#D97706', fontSize:9 }}>✓</span>{t}
              </span>
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}
