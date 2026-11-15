'use client'
import { useRef, useState } from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import type { ViewInfo } from './House3D'
import {
  Palette, Camera, Home, HardHat, Check, X, PenLine, CalendarDays, MessageCircleQuestion,
  CircleCheck, Clock, Wrench, MapPin, ChevronRight, FileText, ShieldCheck,
} from 'lucide-react'

const C = {
  ink:'#0F172A', steel:'#475569', dim:'#64748B', line:'#E2E8F0', line2:'#CBD5E1',
  canvas:'#F1F3F6', tile:'#F8FAFC', navy:'#1E3A8A', navyBg:'#EFF6FF',
  amber:'#D97706', amberText:'#92400E', amberBg:'#FEF3C7',
  indigo:'#4338CA', green:'#15803D', greenBg:'#DCFCE7', red:'#B91C1C',
}
const mono = "'Fira Code',monospace"
const display = "'Bebas Neue',sans-serif"

/* ───────────── shared pieces ───────────── */
function Phone({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div style={{ width:'100%', maxWidth:360, margin:'0 auto', background:'#FFFFFF', border:`1px solid ${C.line2}`, borderRadius:28, boxShadow:'0 2px 4px rgba(15,23,42,0.06), 0 24px 48px rgba(15,23,42,0.12)', overflow:'hidden' }}>
      <div style={{ background:C.ink, padding:'14px 18px 12px' }}>
        <div style={{ fontFamily:mono, fontSize:9, letterSpacing:'0.16em', textTransform:'uppercase', color:'#FBBF24', marginBottom:3 }}>{sub}</div>
        <div style={{ fontSize:15, fontWeight:600, color:'#F8FAFC' }}>{title}</div>
      </div>
      <div style={{ padding:16, background:C.canvas, minHeight:440 }}>{children}</div>
    </div>
  )
}
function Chip({ children, tone = 'navy' }: { children: React.ReactNode; tone?: 'navy'|'amber'|'green' }) {
  const t = tone === 'amber' ? [C.amberBg, C.amberText] : tone === 'green' ? [C.greenBg, C.green] : [C.navyBg, C.navy]
  return <span style={{ display:'inline-block', alignSelf:'flex-start', flexShrink:0, fontFamily:mono, fontSize:9, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase', padding:'3px 8px', borderRadius:5, background:t[0], color:t[1], whiteSpace:'nowrap' }}>{children}</span>
}
const card: React.CSSProperties = { background:'#FFFFFF', border:`1px solid ${C.line}`, borderRadius:12, padding:14 }
const btn = (primary: boolean): React.CSSProperties => ({
  display:'inline-flex', alignItems:'center', justifyContent:'center', gap:6, width:'100%',
  fontFamily:mono, fontSize:11, fontWeight:600, letterSpacing:'0.08em', textTransform:'uppercase',
  padding:'12px 14px', borderRadius:8, cursor:'pointer',
  background: primary ? C.navy : '#FFFFFF', color: primary ? '#FFFFFF' : C.ink,
  border: primary ? 'none' : `1px solid ${C.line2}`,
})

/* ───────────── 1. Design Centre ───────────── */
const categories = [
  { key:'floor', label:'Main floor flooring', options:[
    { name:'Engineered oak', swatch:'#C8A77A', price:0, pros:['Real wood surface','Can be refinished once'], cons:['Marks from pets and grit','Avoid standing water'] },
    { name:'Luxury vinyl plank', swatch:'#9A8F84', price:-600, pros:['Waterproof','Hard to scratch'], cons:['Cannot be refinished','Less natural underfoot'] },
    { name:'Wide-plank hickory', swatch:'#8A5A3B', price:2400, pros:['Hardest of the three','Strong grain hides wear'], cons:['Moves more with humidity','Highest cost'] },
  ]},
  { key:'counter', label:'Kitchen counters', options:[
    { name:'Quartz — standard', swatch:'#E8E6E1', price:0, pros:['No sealing needed','Consistent colour'], cons:['Hot pots can mark it'] },
    { name:'Granite — level 2', swatch:'#5B5F66', price:950, pros:['Handles heat well','Every slab is unique'], cons:['Needs sealing','Pattern varies from the sample'] },
    { name:'Laminate', swatch:'#CDBFAE', price:-1100, pros:['Lowest cost','Easy to replace later'], cons:['Seams are visible','Cuts and heat damage it'] },
  ]},
  { key:'cab', label:'Cabinet finish', options:[
    { name:'White shaker', swatch:'#F4F4F0', price:0, pros:['Brightens the room','Easy to match later'], cons:['Shows marks sooner'] },
    { name:'Navy shaker', swatch:'#27364F', price:700, pros:['Hides marks','Strong contrast with counters'], cons:['Shows dust','Touch-ups must match exactly'] },
    { name:'Natural maple', swatch:'#D9B98A', price:400, pros:['Warm tone','Wear blends in'], cons:['Colour deepens with sunlight'] },
  ]},
]
const money = (n: number) => n === 0 ? 'Included' : n > 0 ? `+$${n.toLocaleString()}` : `−$${Math.abs(n).toLocaleString()} credit`

function DesignCentre() {
  const [cat, setCat] = useState(0)
  const [picks, setPicks] = useState<Record<string, number>>({ floor:0, counter:0, cab:0 })
  const [signed, setSigned] = useState(false)
  const total = categories.reduce((t, c) => t + c.options[picks[c.key]].price, 0)
  const c = categories[cat]

  if (signed) return (
    <Phone title="Your selections" sub="Design Centre · Lot 48">
      <div style={{ ...card, textAlign:'center', marginBottom:12 }}>
        <CircleCheck size={30} color={C.green} strokeWidth={1.75} />
        <div style={{ fontSize:15, fontWeight:700, color:C.ink, marginTop:6 }}>Signed and sent to your builder</div>
        <div style={{ fontSize:12, color:C.steel, lineHeight:1.5, marginTop:4 }}>You will see the real samples at your appointment. You can keep these choices or change them then.</div>
      </div>
      {categories.map(k => (
        <div key={k.key} style={{ ...card, display:'flex', alignItems:'center', gap:10, marginBottom:8, padding:10 }}>
          <span style={{ width:30, height:30, borderRadius:6, background:k.options[picks[k.key]].swatch, border:`1px solid ${C.line2}`, flexShrink:0 }} />
          <div style={{ flex:1, minWidth:0 }}>
            <div style={{ fontSize:10, color:C.dim }}>{k.label}</div>
            <div style={{ fontSize:13, fontWeight:600, color:C.ink }}>{k.options[picks[k.key]].name}</div>
          </div>
          <span style={{ fontFamily:mono, fontSize:10, color:C.steel, whiteSpace:'nowrap' }}>{money(k.options[picks[k.key]].price)}</span>
        </div>
      ))}
      <div style={{ display:'flex', justifyContent:'space-between', padding:'10px 4px', fontSize:13, fontWeight:700, color:C.ink }}>
        <span>Upgrades and credits</span><span>{total === 0 ? '$0' : money(total)}</span>
      </div>
      <button style={btn(false)} onClick={() => setSigned(false)}>Change my selections</button>
    </Phone>
  )

  return (
    <Phone title="Choose your finishes" sub="Design Centre · Lot 48">
      <div style={{ display:'flex', gap:6, marginBottom:12, overflowX:'auto' }}>
        {categories.map((k, i) => (
          <button key={k.key} onClick={() => setCat(i)} style={{ flexShrink:0, fontFamily:mono, fontSize:9, fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', padding:'7px 10px', borderRadius:6, cursor:'pointer', background: i === cat ? C.navy : '#FFFFFF', color: i === cat ? '#FFFFFF' : C.steel, border:`1px solid ${i === cat ? C.navy : C.line2}` }}>
            {i + 1}. {k.label.split(' ').slice(-1)[0]}
          </button>
        ))}
      </div>
      <div style={{ fontSize:13, fontWeight:700, color:C.ink, marginBottom:8 }}>{c.label}</div>
      {c.options.map((o, i) => {
        const on = picks[c.key] === i
        return (
          <button key={o.name} onClick={() => setPicks({ ...picks, [c.key]: i })} style={{ ...card, display:'block', width:'100%', textAlign:'left', cursor:'pointer', marginBottom:8, padding:12, border:`${on ? 2 : 1}px solid ${on ? C.navy : C.line}` }}>
            <div style={{ display:'flex', alignItems:'center', gap:10 }}>
              <span style={{ width:34, height:34, borderRadius:7, background:o.swatch, border:`1px solid ${C.line2}`, flexShrink:0 }} />
              <div style={{ flex:1 }}>
                <div style={{ fontSize:13, fontWeight:700, color:C.ink }}>{o.name}</div>
                <div style={{ fontFamily:mono, fontSize:10, color: o.price > 0 ? C.amberText : o.price < 0 ? C.green : C.dim }}>{money(o.price)}</div>
              </div>
              {on && <CircleCheck size={20} color={C.navy} strokeWidth={2} />}
            </div>
            {on && (
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:8, marginTop:10, paddingTop:10, borderTop:`1px solid ${C.line}` }}>
                <div>{o.pros.map(p => <div key={p} style={{ display:'flex', gap:5, fontSize:11, color:C.steel, lineHeight:1.4, marginBottom:3 }}><Check size={12} color={C.green} style={{ flexShrink:0, marginTop:2 }} />{p}</div>)}</div>
                <div>{o.cons.map(p => <div key={p} style={{ display:'flex', gap:5, fontSize:11, color:C.steel, lineHeight:1.4, marginBottom:3 }}><X size={12} color={C.red} style={{ flexShrink:0, marginTop:2 }} />{p}</div>)}</div>
              </div>
            )}
          </button>
        )
      })}
      <div style={{ display:'flex', justifyContent:'space-between', padding:'6px 4px 10px', fontSize:12, color:C.steel }}>
        <span>Upgrades and credits so far</span><strong style={{ color:C.ink }}>{total === 0 ? '$0' : money(total)}</strong>
      </div>
      {cat < categories.length - 1
        ? <button style={btn(true)} onClick={() => setCat(cat + 1)}>Next: {categories[cat + 1].label} <ChevronRight size={14} /></button>
        : <button style={btn(true)} onClick={() => setSigned(true)}><PenLine size={14} /> Review and sign</button>}
    </Phone>
  )
}

/* ───────────── 2. 360 stages ───────────── */
const stages = ['Framing', 'Insulation', 'Pre-drywall', 'At close']
const House3D = dynamic(() => import('./House3D'), {
  ssr: false,
  loading: () => <div style={{ height:320, borderRadius:10, border:`1px solid ${C.line2}`, background:'#E9EDF2', display:'flex', alignItems:'center', justifyContent:'center', fontFamily:mono, fontSize:10, color:C.dim, letterSpacing:'0.1em', textTransform:'uppercase' }}>Loading the sample home…</div>,
})
const rooms = [
  { key:'kitchen', label:'Kitchen', floor:'Main floor' },
  { key:'foyer', label:'Entry', floor:'Main floor' },
  { key:'bath', label:'Main bath', floor:'Upper floor' },
  { key:'bedroom', label:'Bedroom', floor:'Upper floor' },
]
type Pin = { room: string; floor: string; stage: number; x: number; y: number }
function Stages360() {
  const [stage, setStage] = useState(3)
  const [room, setRoom] = useState(0)
  const [mode, setMode] = useState<'photo' | 'walk'>('photo')
  const [asking, setAsking] = useState(false)
  const [sent, setSent] = useState(false)
  const [pin, setPin] = useState<Pin | null>(null)
  const [text, setText] = useState('')
  const viewRef = useRef<ViewInfo>({ room: 'Foyer', floor: 'Main floor', heading: 'N' })
  const notes = [
    'Studs, headers and openings before anything is covered.',
    'Insulation in the exterior walls, before vapour barrier and drywall.',
    'Wiring, plumbing and ducts in place. The last look inside the walls.',
    'The finished home on the day you take possession.',
  ]
  const r = rooms[room]
  const src = `/renders/${r.key}_${stage}.jpg`
  const reset = () => { setAsking(false); setSent(false); setPin(null); setText('') }
  const place = (e: React.MouseEvent<HTMLDivElement>) => {
    const box = e.currentTarget.getBoundingClientRect()
    setPin({ room: r.label, floor: r.floor, stage, x: Math.round(((e.clientX - box.left) / box.width) * 100), y: Math.round(((e.clientY - box.top) / box.height) * 100) })
    setAsking(true); setSent(false)
  }
  const startAskWalk = () => {
    const v = viewRef.current
    setPin({ room: v.room, floor: v.floor, stage, x: -1, y: -1 })
    setAsking(true)
  }
  const chip = (on: boolean): React.CSSProperties => ({ flexShrink:0, fontFamily:mono, fontSize:9, fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase', padding:'7px 10px', borderRadius:6, cursor:'pointer', background: on ? C.navy : '#FFFFFF', color: on ? '#FFFFFF' : C.steel, border:`1px solid ${on ? C.navy : C.line2}` })
  return (
    <Phone title="Your home, stage by stage" sub="Photo record · Lot 48 · Sample home">
      <div style={{ display:'grid', gridTemplateColumns:'repeat(4,1fr)', gap:5, marginBottom:8 }}>
        {stages.map((s, i) => (
          <button key={s} onClick={() => { setStage(i); reset() }} style={{ ...chip(i === stage), fontSize:8.5, padding:'8px 2px', letterSpacing:'0.04em' }}>{s}</button>
        ))}
      </div>
      {mode === 'photo' && (
        <>
          <div style={{ display:'flex', gap:6, marginBottom:8, overflowX:'auto' }}>
            {rooms.map((k, i) => <button key={k.key} onClick={() => { setRoom(i); reset() }} style={chip(i === room)}>{k.label}</button>)}
          </div>
          <div onClick={place} role="button" aria-label={`${r.label}, ${stages[stage]}. Tap anything to ask about it.`} style={{ position:'relative', width:'100%', aspectRatio:'8 / 5', borderRadius:10, overflow:'hidden', border:`1px solid ${C.line2}`, background:'#E9EDF2', cursor:'crosshair' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img key={src} src={src} alt={`${r.label} at ${stages[stage].toLowerCase()}`} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} />
            {pin && pin.x >= 0 && pin.room === r.label && pin.stage === stage && (
              <span style={{ position:'absolute', left:`${pin.x}%`, top:`${pin.y}%`, width:22, height:22, marginLeft:-11, marginTop:-11, borderRadius:'50%', background:C.amber, border:'3px solid #FFFFFF', boxShadow:'0 2px 8px rgba(15,23,42,0.45)' }} />
            )}
            {!pin && <span style={{ position:'absolute', left:8, bottom:8, fontFamily:mono, fontSize:9, letterSpacing:'0.08em', textTransform:'uppercase', background:'rgba(15,23,42,0.78)', color:'#F8FAFC', padding:'4px 8px', borderRadius:5 }}>Tap anything to ask about it</span>}
          </div>
        </>
      )}
      {mode === 'walk' && <House3D stage={stage} viewRef={viewRef} />}
      <div style={{ fontSize:12, color:C.steel, lineHeight:1.5, margin:'10px 2px 6px' }}>{notes[stage]}</div>
      <button onClick={() => { setMode(mode === 'photo' ? 'walk' : 'photo'); reset() }} style={{ background:'none', border:'none', padding:'0 2px 10px', cursor:'pointer', fontFamily:mono, fontSize:9.5, letterSpacing:'0.08em', textTransform:'uppercase', color:C.navy, textDecoration:'underline' }}>
        {mode === 'photo' ? 'Or walk the 3D model' : 'Back to photo views'}
      </button>
      {mode === 'walk' && !asking && !sent && <button style={btn(false)} onClick={startAskWalk}><MessageCircleQuestion size={15} color={C.navy} /> See something wrong? Ask here</button>}
      {asking && !sent && pin && (
        <div style={card}>
          <div style={{ display:'flex', gap:10, marginBottom:8 }}>
            {pin.x >= 0 && <div role="img" aria-label="The spot your question is pinned to" style={{ width:96, height:72, borderRadius:8, border:`1px solid ${C.line2}`, flexShrink:0, backgroundImage:`url(/renders/${rooms.find(k => k.label === pin.room)?.key}_${pin.stage}.jpg)`, backgroundSize:'320% auto', backgroundPosition:`${pin.x}% ${pin.y}%` }} />}
            <div style={{ minWidth:0 }}>
              <div style={{ display:'flex', alignItems:'center', gap:4, fontFamily:mono, fontSize:9, textTransform:'uppercase', letterSpacing:'0.08em', color:C.amberText, marginBottom:3 }}><MapPin size={11} /> Pinned to this spot</div>
              <div style={{ fontSize:12, fontWeight:700, color:C.ink, lineHeight:1.35 }}>{pin.room}</div>
              <div style={{ fontSize:11, color:C.steel, lineHeight:1.4 }}>{pin.floor} · {stages[pin.stage]}</div>
            </div>
          </div>
          <textarea value={text} onChange={e => setText(e.target.value)} placeholder="Is there supposed to be an outlet on this wall?" rows={3} style={{ width:'100%', fontFamily:'inherit', fontSize:12, color:C.ink, border:`1px solid ${C.line2}`, borderRadius:8, padding:'10px 12px', background:C.tile, marginBottom:8, resize:'none' }} />
          <button style={btn(true)} onClick={() => setSent(true)}>Send to my builder</button>
        </div>
      )}
      {sent && (
        <div style={{ ...card, display:'flex', gap:10, alignItems:'flex-start' }}>
          <CircleCheck size={20} color={C.green} style={{ flexShrink:0, marginTop:1 }} />
          <div style={{ fontSize:12, color:C.steel, lineHeight:1.5 }}><strong style={{ color:C.ink }}>Sent, pinned to this spot.</strong> Your builder sees the room, the stage and exactly what you pointed at. The answer appears here and in your email.</div>
        </div>
      )}
    </Phone>
  )
}

/* ───────────── 3. Owner portal ───────────── */
function OwnerPortal() {
  const [slot, setSlot] = useState<string | null>(null)
  const [picking, setPicking] = useState(false)
  const [signedOff, setSignedOff] = useState(false)
  const slots = ['Tue Dec 1 · 8–10 am', 'Wed Dec 2 · 1–3 pm', 'Fri Dec 4 · 8–10 am']
  return (
    <Phone title="12 Maple Ridge Cres" sub="Owner portal · Lot 48 · Year-end form">
      <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:6, marginBottom:12 }}>
        {[['3','Open'],['1','Booked'],['8','Done']].map(([n,l]) => (
          <div key={l} style={{ ...card, padding:'8px 6px', textAlign:'center' }}>
            <div style={{ fontFamily:display, fontSize:24, color:C.navy, lineHeight:1 }}>{n}</div>
            <div style={{ fontFamily:mono, fontSize:8.5, textTransform:'uppercase', letterSpacing:'0.08em', color:C.dim }}>{l}</div>
          </div>
        ))}
      </div>

      <div style={{ ...card, marginBottom:8 }}>
        <div style={{ display:'flex', justifyContent:'space-between', gap:8, marginBottom:6 }}>
          <div style={{ fontSize:13, fontWeight:700, color:C.ink }}>Item 4 · Ensuite door rubs on frame</div>
          {slot ? <Chip tone="green">Booked</Chip> : <Chip tone="amber">Needs a time</Chip>}
        </div>
        <div style={{ fontSize:11, color:C.steel, marginBottom:10 }}>Warranted · Finish carpentry</div>
        {slot && <div style={{ display:'flex', gap:6, alignItems:'center', fontSize:12, color:C.ink }}><CalendarDays size={14} color={C.navy} /> {slot}</div>}
        {!slot && !picking && <button style={btn(true)} onClick={() => setPicking(true)}><CalendarDays size={14} /> Choose a time</button>}
        {!slot && picking && slots.map(s => (
          <button key={s} style={{ ...btn(false), marginBottom:6, justifyContent:'flex-start' }} onClick={() => setSlot(s)}><Clock size={13} color={C.navy} /> {s}</button>
        ))}
      </div>

      <div style={{ ...card, marginBottom:8 }}>
        <div style={{ display:'flex', justifyContent:'space-between', gap:8, marginBottom:6 }}>
          <div style={{ fontSize:13, fontWeight:700, color:C.ink }}>Item 2 · Caulking gap at tub</div>
          {signedOff ? <Chip tone="green">Signed off</Chip> : <Chip>Completed</Chip>}
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:6, marginBottom:10 }}>
          {['Before','After'].map(l => (
            <div key={l} style={{ height:54, borderRadius:8, background: l === 'Before' ? '#D9DEE5' : '#E6EEF8', border:`1px solid ${C.line2}`, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:mono, fontSize:9, textTransform:'uppercase', letterSpacing:'0.1em', color:C.dim }}>{l} photo</div>
          ))}
        </div>
        {!signedOff
          ? <button style={btn(true)} onClick={() => setSignedOff(true)}><PenLine size={14} /> Confirm it is fixed</button>
          : <div style={{ fontSize:12, color:C.steel }}>Thank you. Your sign-off is saved with the photos.</div>}
      </div>

      <div style={{ ...card, display:'flex', alignItems:'center', gap:10 }}>
        <FileText size={18} color={C.navy} />
        <div style={{ flex:1, fontSize:12, color:C.steel }}>Documents, selections and your 360 record</div>
        <ChevronRight size={16} color={C.dim} />
      </div>
    </Phone>
  )
}

/* ───────────── 4. Trade portal ───────────── */
function TradePortal() {
  const [status, setStatus] = useState<null | 'done' | 'scheduled' | 'not'>(null)
  return (
    <Phone title="Work order WO-1042" sub="Trade link · No login · Finish carpentry">
      <div style={{ ...card, marginBottom:10 }}>
        <div style={{ display:'flex', gap:6, alignItems:'center', fontSize:12, color:C.ink, fontWeight:600, marginBottom:6 }}><MapPin size={14} color={C.navy} /> 12 Maple Ridge Cres · Lot 48</div>
        <div style={{ fontSize:13, fontWeight:700, color:C.ink, marginBottom:4 }}>Ensuite door rubs on frame</div>
        <div style={{ fontSize:12, color:C.steel, lineHeight:1.5, marginBottom:8 }}>Door binds at the top of the latch side. Adjust or plane and touch up paint.</div>
        <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}><Chip tone="amber">Due Dec 9</Chip><Chip>Owner picks the time</Chip></div>
      </div>

      <div style={{ fontFamily:mono, fontSize:9, textTransform:'uppercase', letterSpacing:'0.12em', color:C.dim, margin:'0 2px 8px' }}>Where is this job at?</div>
      <div style={{ display:'grid', gap:6, marginBottom:10 }}>
        {([['done','Done', CircleCheck],['scheduled','Scheduled — Dec 2, 1–3 pm', CalendarDays],['not','Not scheduled yet', Clock]] as const).map(([k, l, I]) => (
          <button key={k} onClick={() => setStatus(k)} style={{ ...btn(status === k), justifyContent:'flex-start' }}><I size={15} color={status === k ? '#FFFFFF' : C.navy} /> {l}</button>
        ))}
      </div>

      {status === 'done' && (
        <div style={card}>
          <div style={{ height:60, borderRadius:8, border:`1.5px dashed ${C.line2}`, display:'flex', alignItems:'center', justifyContent:'center', gap:6, fontSize:12, color:C.steel, marginBottom:8 }}><Camera size={15} color={C.navy} /> Add an after photo</div>
          <div style={{ fontSize:12, color:C.steel, lineHeight:1.5 }}>Marked done. The owner is asked to confirm, and the builder&apos;s list updates on its own.</div>
        </div>
      )}
      {status === 'scheduled' && <div style={{ ...card, fontSize:12, color:C.steel, lineHeight:1.5 }}>Got it. The date is on the builder&apos;s schedule and the owner has been told.</div>}
      {status === 'not' && <div style={{ ...card, fontSize:12, color:C.steel, lineHeight:1.5 }}>Noted. The coordinator will see this is still open and will follow up before the due date.</div>}
      {!status && <div style={{ display:'flex', gap:8, alignItems:'center', fontSize:11, color:C.dim, padding:'0 2px' }}><Wrench size={13} /> One tap updates the builder. No account, no app, no reply email.</div>}
    </Phone>
  )
}

/* ───────────── page ───────────── */
const tabs = [
  { key:'design', label:'Design Centre', icon:Palette, tag:'Flagship · Add-on · Coming',
    title:'Choose and sign before the appointment.',
    body:'Owners go through every selection at home, at their own pace, with the trade-offs spelled out. The sales centre visit becomes a short confirmation against real samples.',
    steps:['At purchase, the owner gets a link to their Design Centre.','Each option shows what it costs and its pros and cons in plain words.','They choose, review the total of upgrades and credits, and sign.','At the sample appointment they keep their choices or change them.','Final selections become the site instruction list and the upgrade ledger.'],
    Mock: DesignCentre },
  { key:'360', label:'360 Stages', icon:Camera, tag:'Part of the Design Centre · Coming',
    title:'See inside the walls, stage by stage.',
    body:'Every home is captured in 360 at each stage from framing to close. Owners can look around and ask about anything that seems wrong. Warranty keeps the same record for the life of the home.',
    steps:['The site team captures each room at framing, insulation, pre-drywall and close.','The owner opens a stage and looks around the room.','A question is pinned to the exact view and sent to the builder.','The answer comes back in the portal and by email.','Years later, warranty can check what is behind the wall before opening it.'],
    Mock: Stages360 },
  { key:'owner', label:'Owner Portal', icon:Home, tag:'Included with Builder Guardian Warranty · Coming',
    title:'One link for everything about their home.',
    body:'No account to create. The owner sees every warranty item, picks appointment times, checks before and after photos and confirms the fix.',
    steps:['A private link is created automatically for every owner.','They see each item from their Tarion form and where it stands.','They pick an appointment time from the slots offered.','After the repair they see the photos and confirm it is fixed.','Every offer, booking and missed appointment is logged for the builder.'],
    Mock: OwnerPortal },
  { key:'trade', label:'Trade Portal', icon:HardHat, tag:'Included with Builder Guardian Warranty · Coming',
    title:'One tap from the email. No login.',
    body:'Trades open the work order from the email and tap where the job is at. The builder never re-types a reply.',
    steps:['The trade gets the work order by email with a private link.','They see the address, the item and the due date.','They tap done, scheduled with a date, or not scheduled.','When done, they add an after photo from their phone.','The builder’s list, the owner and the aging report all update on their own.'],
    Mock: TradePortal },
]

const journey = [
  ['Purchase', 'The owner receives their portal link with the agreement.'],
  ['Choose and sign', 'Selections made online in the Design Centre, with pros and cons for each.'],
  ['Sample appointment', 'A short visit to confirm against real samples. Keep or change.'],
  ['Site instructions', 'Final choices go to construction as one instruction list per home.'],
  ['360 at each stage', 'Framing, insulation, pre-drywall. The owner can look and ask.'],
  ['QCI and PDI', 'Selections checked room by room before delivery.'],
  ['The home at close', 'Selections, 360 record and documents stay with the home for warranty.'],
]

export default function PortalShowcase() {
  const [active, setActive] = useState(0)
  const t = tabs[active]
  const Mock = t.Mock
  return (
    <>
      {/* HERO */}
      <section className="relative pt-28 pb-12 px-4 md:px-8 text-center bg-gradient-to-b from-white to-cb-dark1 overflow-hidden">
        <div className="absolute inset-0 hex-pattern opacity-[0.05]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="font-mono text-[11px] uppercase tracking-[0.22em] text-cb-gold mb-5">Portals &amp; Design Centre · Design Preview</div>
          <h1 className="font-display text-[clamp(44px,7vw,88px)] leading-[0.95] tracking-[0.04em] text-cb-white mb-5">
            ONE LINK.<br/><span className="text-cb-gold">EVERY HOME.</span><br/>EVERYONE IN THE LOOP.
          </h1>
          <p className="text-lg text-cb-muted leading-relaxed max-w-xl mx-auto">
            How owners and trades will work with your warranty team, and how the Design Centre carries a home from purchase to close. Tap through the examples below.
          </p>
        </div>
      </section>

      {/* SHOWCASE */}
      <section className="bg-cb-dark1 pb-20 px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-10">
            {tabs.map((x, i) => {
              const I = x.icon; const on = i === active
              return (
                <button key={x.key} onClick={() => setActive(i)} style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:8, padding:'14px 10px', borderRadius:10, cursor:'pointer', background: on ? C.navy : '#FFFFFF', color: on ? '#FFFFFF' : C.ink, border:`1px solid ${on ? C.navy : C.line2}`, fontFamily:mono, fontSize:11, fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase' }}>
                  <I size={16} strokeWidth={1.75} /> {x.label}
                </button>
              )
            })}
          </div>

          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div key={t.key}><Mock /></div>
            <div>
              <Chip tone={active === 0 ? 'amber' : 'navy'}>{t.tag}</Chip>
              <h2 className="font-display text-[clamp(30px,4vw,48px)] tracking-[0.04em] text-cb-white leading-[1.02] mt-4 mb-4">{t.title}</h2>
              <p className="text-cb-muted text-base leading-relaxed mb-6">{t.body}</p>
              <div style={{ display:'grid', gap:8 }}>
                {t.steps.map((s, i) => (
                  <div key={s} style={{ ...card, display:'flex', gap:12, alignItems:'flex-start' }}>
                    <span style={{ fontFamily:display, fontSize:22, lineHeight:1, color:C.navy, width:22, flexShrink:0 }}>{i + 1}</span>
                    <span style={{ fontSize:14, color:C.steel, lineHeight:1.5 }}>{s}</span>
                  </div>
                ))}
              </div>
              <p style={{ fontFamily:mono, fontSize:10, color:C.dim, marginTop:14, lineHeight:1.6 }}>Design preview. Sample home, options and prices are for illustration only.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section className="bg-cb-dark2 py-20 px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-cb-gold mb-3">From purchase to close</div>
          <h2 className="font-display text-[clamp(32px,4.5vw,56px)] tracking-[0.04em] text-cb-white leading-[1.02] mb-8">One record that <span className="text-cb-gold">stays with the home.</span></h2>
          <div style={{ display:'grid', gap:0 }}>
            {journey.map(([h, d], i) => (
              <div key={h} style={{ display:'grid', gridTemplateColumns:'36px 1fr', gap:14 }}>
                <div style={{ display:'flex', flexDirection:'column', alignItems:'center' }}>
                  <span style={{ width:32, height:32, borderRadius:'50%', background: i === journey.length - 1 ? C.navy : C.navyBg, color: i === journey.length - 1 ? '#FFFFFF' : C.navy, display:'flex', alignItems:'center', justifyContent:'center', fontFamily:mono, fontSize:12, fontWeight:600, flexShrink:0 }}>{i === journey.length - 1 ? <ShieldCheck size={16} /> : i + 1}</span>
                  {i < journey.length - 1 && <span style={{ flex:1, width:2, background:C.line, minHeight:18 }} />}
                </div>
                <div style={{ paddingBottom:22 }}>
                  <div style={{ fontSize:16, fontWeight:700, color:C.ink, marginBottom:2 }}>{h}</div>
                  <div style={{ fontSize:14, color:C.steel, lineHeight:1.55 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cb-dark1 py-20 px-4 md:px-8 text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="font-display text-[clamp(36px,5vw,64px)] tracking-[0.04em] text-cb-white leading-[0.97] mb-5">WANT IT<br/><span className="text-cb-gold">FIRST?</span></h2>
          <p className="text-cb-muted text-base mb-8">The portals and the Design Centre are in development. Early builders help decide what ships first.</p>
          <div className="flex gap-3 justify-center flex-wrap">
            <Link href="/demo#waitlist" className="btn-gold">Join the Waitlist →</Link>
            <Link href="/pricing" className="btn-ghost">See Pricing</Link>
          </div>
        </div>
      </section>
    </>
  )
}
