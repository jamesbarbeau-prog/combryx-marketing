'use client'
/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { LayoutDashboard, Home, CalendarClock, Wrench, Scale, Palette, Bell, Search, ChevronDown, Sparkles, FileDown, Clock, TriangleAlert, CircleCheck, ClipboardList, DollarSign, Building2, Gavel, Camera, Plus, ArrowRight } from 'lucide-react'
import './product.css'

export type ScreenKey = 'dashboard' | 'homes' | 'deadlines' | 'orders' | 'conciliation' | 'design'
const NAV: { k: ScreenKey; label: string; Icon: typeof Home; badge?: string; amb?: boolean; soon?: boolean }[] = [
  { k: 'dashboard', label: 'Dashboard', Icon: LayoutDashboard },
  { k: 'homes', label: 'Homes & Owners', Icon: Home },
  { k: 'deadlines', label: 'Deadlines', Icon: CalendarClock, badge: '6' },
  { k: 'orders', label: 'Work Orders', Icon: Wrench, badge: '9', amb: true },
  { k: 'conciliation', label: 'Conciliation', Icon: Scale, badge: '2' },
  { k: 'design', label: 'Design Centre', Icon: Palette, soon: true },
]
const TITLES: Record<ScreenKey, string> = { dashboard: 'Dashboard', homes: 'Homes & Owners', deadlines: 'Deadlines', orders: 'Work Orders', conciliation: 'Conciliation Manager', design: 'Design Centre' }

const homes = [
  { lot: 'Lot 48', comm: 'Maple Ridge', type: 'Freehold', owner: 'Priya & Dev Anand', closed: 'Mar 14, 2026', stage: 'Year 1', open: 7, next: 'Year-1 form · 4 days', risk: 'HIGH' },
  { lot: 'Lot 51', comm: 'Maple Ridge', type: 'Freehold', owner: 'Marc Tremblay', closed: 'Apr 02, 2026', stage: 'Year 1', open: 3, next: 'Initial form · 11 days', risk: 'MEDIUM' },
  { lot: 'Suite 1204', comm: 'Bayview Tower', type: 'High-rise', owner: 'Hannah Okafor', closed: 'Jan 22, 2026', stage: 'Year 1', open: 12, next: 'RFC response · 9 days', risk: 'HIGH' },
  { lot: 'Lot 17', comm: 'Stonebridge', type: 'Freehold', owner: 'Liam & Sara Chen', closed: 'Nov 08, 2025', stage: 'Year 1', open: 2, next: 'Mid-year review · 21 days', risk: 'LOW' },
  { lot: 'Suite 0807', comm: 'Bayview Tower', type: 'High-rise', owner: 'R. Gagnon', closed: 'Feb 19, 2026', stage: 'Initial', open: 5, next: 'Day 41 auto-submit · 6 days', risk: 'MEDIUM' },
  { lot: 'Lot 09', comm: 'Stonebridge', type: 'Freehold', owner: 'Ana Costa', closed: 'Jun 30, 2024', stage: 'Year 2', open: 1, next: 'Year-2 form · 34 days', risk: 'LOW' },
  { lot: 'Lot 33', comm: 'Maple Ridge', type: 'Freehold', owner: 'Tom & Jo Walsh', closed: 'May 12, 2026', stage: 'Initial', open: 4, next: 'Day 41 auto-submit · 17 days', risk: 'LOW' },
]
const itemsFor = [
  { t: 'Kitchen: drywall nail pops, north wall', cat: 'Finish', st: 'Open', tr: 'Likely covered. Cosmetic finish item.', pill: 'mid' },
  { t: 'Basement: efflorescence on foundation wall', cat: 'Envelope', st: 'Inspect', tr: 'Needs a site visit before a position is taken.', pill: 'crit' },
  { t: 'Primary bath: cracked grout, tub surround', cat: 'Finish', st: 'Scheduled', tr: 'Likely covered. Tile tech booked Thu.', pill: 'blue' },
  { t: 'Garage door: weatherstrip gap at threshold', cat: 'Envelope', st: 'Done', tr: 'Repaired. Photo on file.', pill: 'good' },
]
const risks = { HIGH: 'crit', MEDIUM: 'mid', LOW: 'good' } as const

function Dashboard({ go }: { go: (k: ScreenKey) => void }) {
  return (<>
    <div className="ph"><div><h2>Good morning, Dana</h2><p>Wednesday · 3 communities · 1 tower · everything below is live.</p></div>
      <button className="btn primary" onClick={() => go('homes')}><Plus size={14} />Import Tarion form</button></div>
    <div className="stats">
      <div className="stat"><span><i className="ico" style={{ background: '#DBEAFE', color: '#1D4ED8' }}><ClipboardList size={13} /></i>Open items</span><b>214</b><em>↓ 12 this week</em></div>
      <div className="stat warn"><span><i className="ico" style={{ background: '#FEF3C7', color: '#D97706' }}><Clock size={13} /></i>Due in 7 days</span><b>18</b></div>
      <div className="stat"><span><i className="ico" style={{ background: '#F3E8FF', color: '#7C3AED' }}><CalendarClock size={13} /></i>BRP windows</span><b>12</b></div>
      <div className="stat danger"><span><i className="ico" style={{ background: '#FEE2E2', color: '#DC2626' }}><TriangleAlert size={13} /></i>RFC filed</span><b>3</b></div>
      <div className="stat"><span><i className="ico" style={{ background: '#DCFCE7', color: '#16A34A' }}><DollarSign size={13} /></i>Spend MTD</span><b>$18.4k</b></div>
    </div>
    <div className="grid2">
      <div>
        <div className="panel"><header><h3>Statutory deadlines</h3><button className="link" onClick={() => go('deadlines')}>View all →</button></header>
          {[['Lot 48 · Maple Ridge', 'Year-1 form · Builder response period', '4d', 'HIGH', 't-urgent'], ['Suite 1204 · Bayview Tower', 'RFC filed Day 42 · pre-conciliation BRP', '9d', 'HIGH', 't-urgent'], ['Lot 51 · Maple Ridge', 'Initial form · items to review', '11d', 'MEDIUM', 't-soon'], ['Suite 0807 · Bayview Tower', 'Day 41 auto-submit to Tarion', '6d', 'MEDIUM', 't-soon'], ['Lot 17 · Stonebridge', 'Mid-year review', '21d', 'LOW', 't-ok']].map(r => (
            <button key={r[0]} className={`case ${r[3]}`} onClick={() => go('deadlines')}><div className="grow"><div className="id">{r[0]}</div><div className="sub">{r[1]}</div></div><span className={`tag ${r[4]}`}>{r[2]}</span></button>))}
        </div>
        <div className="panel"><header><h3>Item aging</h3><span className="pill blue">All communities</span></header>
          <div className="pad"><div className="bars">
            {[['0–30 d', 96, '#3B82F6'], ['31–60 d', 62, '#6366F1'], ['61–90 d', 38, '#D97706'], ['90+ d', 18, '#DC2626']].map(b => (<div key={b[0] as string}><em>{b[1]}</em><i style={{ height: `${(b[1] as number) * 0.95}%`, background: b[2] as string }} /><span>{b[0]}</span></div>))}
          </div></div></div>
      </div>
      <div>
        <div className="panel"><header><h3>By category</h3></header><div className="pad" style={{ display: 'flex', gap: 18, alignItems: 'center' }}>
          <div style={{ width: 104, height: 104, borderRadius: '50%', flex: '0 0 auto', background: 'conic-gradient(#3B82F6 0 38%,#7C3AED 38% 62%,#D97706 62% 82%,#16A34A 82% 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><div style={{ width: 66, height: 66, borderRadius: '50%', background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#0F172A' }}>214</div></div>
          <div style={{ fontSize: 12.5, display: 'grid', gap: 6 }}>{[['#3B82F6', 'Finish', '38%'], ['#7C3AED', 'Envelope', '24%'], ['#D97706', 'MEP', '20%'], ['#16A34A', 'Structural', '18%']].map(c => (<div key={c[1]} style={{ display: 'flex', gap: 8, alignItems: 'center' }}><i style={{ width: 10, height: 10, borderRadius: 3, background: c[0] }} /><span style={{ flex: 1 }}>{c[1]}</span><b style={{ color: '#0F172A' }}>{c[2]}</b></div>))}</div>
        </div></div>
        <div className="panel"><header><h3>Activity</h3></header><div className="feed">
          {[[<CircleCheck key="a" size={14} color="#16A34A" />, '#DCFCE7', 'Work order closed', 'Lot 33 · garage weatherstrip · Mike C.', '12 min ago'], [<TriangleAlert key="b" size={14} color="#DC2626" />, '#FEE2E2', 'RFC filed', 'Suite 1204 · 150-day window now tracked', '1 h ago'], [<Sparkles key="c" size={14} color="#4338CA" />, '#E0E7FF', 'AI triage', '5 new items classified for Lot 48', '2 h ago'], [<FileDown key="d" size={14} color="#1D4ED8" />, '#DBEAFE', 'Tarion form imported', 'Maple Ridge · Lot 51 · 11 items created', 'Yesterday']].map((f, i) => (
            <div className="fi" key={i}><span className="dot" style={{ background: f[1] as string }}>{f[0]}</span><div><b>{f[2] as string}</b><small>{f[3] as string} · {f[4] as string}</small></div></div>))}
        </div></div>
      </div>
    </div></>)
}

function Homes() {
  const [sel, setSel] = useState(0); const [f, setF] = useState('All')
  const list = homes.filter(h => f === 'All' || h.type === f || h.stage === f)
  const h = homes[sel] ?? homes[0]
  return (<>
    <div className="ph"><div><h2>Homes &amp; Owners</h2><p>Lots, suites and owner records, with the Tarion stage and next statutory date.</p></div><button className="btn line"><FileDown size={14} />Export</button></div>
    <div className="chips">{['All', 'Freehold', 'High-rise', 'Initial', 'Year 1', 'Year 2'].map(c => <button key={c} className={`chip ${f === c ? 'on' : ''}`} onClick={() => setF(c)}>{c}</button>)}</div>
    <div className="panel"><table><thead><tr><th>Home</th><th>Owner</th><th>Closed</th><th>Stage</th><th>Open</th><th>Next date</th><th>Risk</th></tr></thead><tbody>
      {list.map(r => (<tr key={r.lot} className={`row ${r === h ? 'on' : ''}`} onClick={() => setSel(homes.indexOf(r))}><td><b>{r.lot}</b><small>{r.comm} · {r.type}</small></td><td>{r.owner}</td><td>{r.closed}</td><td><span className="pill stg">{r.stage}</span></td><td><b>{r.open}</b></td><td>{r.next}</td><td><span className={`pill ${risks[r.risk as keyof typeof risks]}`}>{r.risk[0] + r.risk.slice(1).toLowerCase()}</span></td></tr>))}
    </tbody></table></div>
    <div className="panel"><header><h3>{h.lot} · {h.comm} · {h.owner}</h3><button className="btn sec"><Sparkles size={13} />Run AI triage</button></header>
      {itemsFor.map(i => (<div className="sel-row" key={i.t}><div className="grow"><b>{i.t}</b><small><Sparkles size={11} style={{ verticalAlign: -1, color: '#6366F1' }} /> {i.tr}</small></div><span className="pill">{i.cat}</span><span className={`pill ${i.pill}`}>{i.st}</span></div>))}
    </div></>)
}

function Deadlines() {
  return (<>
    <div className="ph"><div><h2>Deadlines</h2><p>Every statutory date counted down for you, per home.</p></div><button className="btn line"><Bell size={14} />Alert rules</button></div>
    <div className="panel"><header><h3>Suite 1204 · Bayview Tower · RFC filed on Day 42</h3><span className="pill crit">9 days left</span></header><div className="pad">
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, fontWeight: 600, marginBottom: 8 }}><span>Builder response period · 120 days</span><span>Pre-conciliation · 30 days</span></div>
      <div className="prog"><i style={{ width: '80%', background: '#3B82F6' }} /><i style={{ width: '13%', background: '#D97706' }} /><i style={{ width: '7%', background: '#E2E8F0' }} /></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11.5, color: '#64748B', marginTop: 8 }}><span>Day 0</span><span>Day 120</span><span>Day 141 · today</span><span>Day 150</span></div>
    </div></div>
    <div className="grid2" style={{ gridTemplateColumns: 'repeat(3,minmax(0,1fr))' }}>
      {[['Today & tomorrow', '#DC2626', [['Lot 48', 'Respond to Year-1 form', '4d'], ['Suite 1204', 'Upload evidence to RFC file', '2d']]], ['This week', '#D97706', [['Suite 0807', 'Day 41 auto-submit', '6d'], ['Lot 51', 'Review initial items', '11d']]], ['Next 30 days', '#2563EB', [['Lot 17', 'Mid-year review', '21d'], ['Lot 09', 'Year-2 form window opens', '34d']]]].map(c => (
        <div className="panel" key={c[0] as string}><header><h3 style={{ color: c[1] as string }}>{c[0] as string}</h3></header>
          {(c[2] as string[][]).map(r => (<div className="sel-row" key={r[0]}><div className="grow"><b>{r[0]}</b><small>{r[1]}</small></div><span className="tag t-soon" style={{ minWidth: 0 }}>{r[2]}</span></div>))}
        </div>))}
    </div>
    <div className="panel"><header><h3>Upcoming by home</h3></header><table><tbody>
      {[['Lot 17 · Stonebridge', 'Mid-year review', 'Jun 4'], ['Lot 09 · Stonebridge', 'Year-2 form window opens', 'Jun 17'], ['Lot 33 · Maple Ridge', 'Day 41 auto-submit to Tarion', 'May 31'], ['Suite 0612 · Bayview Tower', 'Year-1 form · BRP starts', 'Jun 21']].map(r => (<tr key={r[0]}><td><b>{r[0]}</b></td><td>{r[1]}</td><td style={{ textAlign: 'right', fontWeight: 700, color: '#0F172A' }}>{r[2]}</td></tr>))}
    </tbody></table></div></>)
}

const cols0 = [
  { n: 'New', c: [['Basement efflorescence', 'Lot 48 · Maple Ridge', 'Foundation', 'HI'], ['Cracked grout', 'Lot 48 · Maple Ridge', 'Tile', 'LO']] },
  { n: 'Scheduled', c: [['Drywall nail pops', 'Lot 48 · Maple Ridge', 'Drywall', 'LO'], ['Stuck patio door', 'Suite 1204 · Bayview', 'Doors', 'MED']] },
  { n: 'In progress', c: [['No hot water, ensuite', 'Lot 51 · Maple Ridge', 'Plumbing', 'HI']] },
  { n: 'Done', c: [['Garage weatherstrip', 'Lot 33 · Maple Ridge', 'Doors', 'LO'], ['Loose stair tread', 'Lot 17 · Stonebridge', 'Carpentry', 'MED']] },
]
function Orders() {
  const [cols, setCols] = useState(cols0)
  const adv = (ci: number, ii: number) => { if (ci > 2) return; setCols(p => p.map((c, i) => i === ci ? { ...c, c: c.c.filter((_, j) => j !== ii) } : i === ci + 1 ? { ...c, c: [...c.c, p[ci].c[ii]] } : c)) }
  const pr = { HI: ['crit', 'High'], MED: ['mid', 'Medium'], LO: ['good', 'Low'] } as const
  return (<>
    <div className="ph"><div><h2>Work Orders</h2><p>Dispatch to trades and techs. Tap a card to move it forward.</p></div><button className="btn primary"><Plus size={14} />New work order</button></div>
    <div className="kan">{cols.map((c, ci) => (<div className="kcol" key={c.n}><h4><span>{c.n}</span><span>{c.c.length}</span></h4>
      {c.c.map((k, ii) => (<div className="kc" key={k[0]} onClick={() => adv(ci, ii)} style={{ cursor: ci < 3 ? 'pointer' : 'default' }}><span className={`pill ${pr[k[3] as keyof typeof pr][0]}`}>{pr[k[3] as keyof typeof pr][1]}</span><b>{k[0]}</b><small>{k[1]}</small><div className="ft"><span className="pill">{k[2]}</span>{ci < 3 && <ArrowRight size={14} color="#94A3B8" />}{ci === 3 && <CircleCheck size={15} color="#16A34A" />}</div></div>))}</div>))}</div></>)
}

const cases = [
  { id: 'CM-2026-0114', lot: 'Suite 1204 · Bayview Tower', sub: 'Inspection booked Dec 02 · 12 items', risk: 'HIGH', tag: '9d', cls: 't-urgent' },
  { id: 'CM-2026-0109', lot: 'Lot 48 · Maple Ridge', sub: 'CAR received · comments due', risk: 'MEDIUM', tag: '14d', cls: 't-soon' },
  { id: 'CM-2026-0097', lot: 'Lot 22 · Stonebridge', sub: 'Cash offer pending release', risk: 'LOW', tag: '27d', cls: 't-ok' },
]
function Conciliation() {
  const [sel, setSel] = useState(0); const [tab, setTab] = useState('Overview'); const c = cases[sel]
  return (<>
    <div className="ph"><div><h2>Conciliation Manager</h2><p>Every case from inspection booked to CAR, with the file in order.</p></div><button className="btn gold"><Gavel size={14} />Export builder comments package</button></div>
    <div className="stats"><div className="stat"><span>Active cases</span><b>7</b></div><div className="stat danger"><span>Needs action</span><b>2</b></div><div className="stat"><span>Inspections booked</span><b>3</b></div><div className="stat"><span>Offers outstanding</span><b>$6,450</b></div></div>
    <div className="grid2" style={{ gridTemplateColumns: 'minmax(0,1fr) minmax(0,1.25fr)' }}>
      <div className="panel" style={{ alignSelf: 'start' }}>{cases.map((k, i) => (<button key={k.id} className={`case ${k.risk} ${i === sel ? 'sel1' : ''}`} onClick={() => setSel(i)}><div className="grow"><div className="id">{k.id}</div><div className="sub">{k.lot}</div><div className="meta">{k.sub}</div></div><span className={`tag ${k.cls}`}>{k.tag}</span></button>))}</div>
      <div className="panel"><header><h3>{c.id} · {c.lot}</h3><span className={`pill ${risks[c.risk as keyof typeof risks]}`}>{c.risk[0] + c.risk.slice(1).toLowerCase()} risk</span></header><div className="pad">
        <div className="tabs">{['Overview', 'Cycles', 'Offers', 'Evidence'].map(t => <button key={t} className={`tb ${tab === t ? 'on' : ''}`} onClick={() => setTab(t)}>{t}</button>)}</div>
        {tab === 'Overview' && <dl className="kv"><dt>Owner</dt><dd>Hannah Okafor</dd><dt>Stage</dt><dd>Year 1 · RFC filed Day 42</dd><dt>Items in dispute</dt><dd>5 of 12</dd><dt>Inspection</dt><dd>Dec 02, 10:00 · Tarion WSR assigned</dd><dt>Builder lead</dt><dd>Dana R. · Warranty</dd><dt>Exposure</dt><dd>$3,200 est. · $2,850 offered</dd></dl>}
        {tab === 'Cycles' && <div className="tl">{[['Request for conciliation filed', 'Day 42 · Oct 28', 'done'], ['Pre-conciliation BRP started', '30 days · ends Nov 24', 'done'], ['Inspection booked', 'Dec 02, 10:00', 'now'], ['Conciliation report (CAR)', 'Expected 3–4 weeks after', ''], ['Builder comments due', 'Counted from the CAR date', '']].map(t => <div key={t[0]} className={`ti ${t[2]}`}><b>{t[0]}</b><small>{t[1]}</small></div>)}</div>}
        {tab === 'Offers' && <dl className="kv"><dt>Cash offer</dt><dd>$2,850 · sent Nov 12</dd><dt>Release</dt><dd><span className="pill mid">Awaiting signature</span></dd><dt>Items bought out</dt><dd>Drywall, grout, paint touch-up</dd><dt>Remaining in dispute</dt><dd>Efflorescence, patio door</dd></dl>}
        {tab === 'Evidence' && <div style={{ display: 'grid', gap: 8 }}>{[['PDI signed by owner', 'PDF · 14 pages'], ['Photos, basement wall', '23 photos · dated'], ['Trade report, waterproofing', 'PDF · 3 pages']].map(e => <div key={e[0]} className="sel-row" style={{ padding: '8px 0' }}><Camera size={16} color="#64748B" /><div className="grow"><b>{e[0]}</b><small>{e[1]}</small></div><span className="pill good">Attached</span></div>)}</div>}
      </div></div>
    </div></>)
}

const sels = [
  ['Kitchen cabinets', 'Shaker · Painted white', '#F5F5F0', 'Included', 'good'], ['Kitchen island', 'Shaker · Navy', '#1E3A8A', '+ $2,400', 'blue'], ['Countertops', 'Quartz · Calacatta', '#E5E1DA', '+ $3,150', 'blue'],
  ['Main floor flooring', 'Engineered oak · Natural', '#C9A27A', '+ $4,900', 'blue'], ['Bathroom tile', 'Porcelain 12×24 · Grey', '#B8BEC4', 'Included', 'good'], ['Interior paint', 'Agreeable Grey', '#D0CCC4', 'Included', 'good'],
]
function Design() {
  return (<>
    <div className="ph"><div><h2>Design Centre</h2><p>Lot 48 · Priya &amp; Dev Anand · selections signed Feb 03</p></div><span className="pill good">Signed record</span></div>
    <div className="stats"><div className="stat"><span>Selections</span><b>24</b></div><div className="stat"><span>Upgrades</span><b>$10,450</b></div><div className="stat"><span>Credits</span><b>$1,200</b></div><div className="stat"><span>Site instructions</span><b>18</b></div></div>
    <div className="grid2" style={{ gridTemplateColumns: 'minmax(0,1.4fr) minmax(0,1fr)' }}>
      <div className="panel"><header><h3>Owner selections</h3></header>{sels.map(s => (<div className="sel-row" key={s[0]}><span className="swatch" style={{ background: s[2] }} /><div className="grow"><b>{s[0]}</b><small>{s[1]}</small></div><span className={`pill ${s[4]}`}>{s[3]}</span></div>))}</div>
      <div><div className="panel"><header><h3>Site instruction list</h3></header>{[['Framing', 'Island blocking for 9-ft overhang'], ['Electrical', 'Two pendants over island, box at 8’ 6"'], ['Flooring', 'Oak main floor · transition at foyer']].map(r => (<div className="sel-row" key={r[1]}><Building2 size={16} color="#64748B" /><div className="grow"><b>{r[0]}</b><small>{r[1]}</small></div></div>))}</div>
        <div className="ai"><Sparkles size={16} color="#4338CA" style={{ flex: '0 0 auto', marginTop: 2 }} /><div><b>AI walk-through, at QCI</b><br />Checks the finished home against the signed selections and flags anything that differs.</div></div></div>
    </div></>)
}

export default function ProductApp({ screen, onScreen, height = 780 }: { screen?: ScreenKey; onScreen?: (k: ScreenKey) => void; height?: number }) {
  const [own, setOwn] = useState<ScreenKey>('dashboard')
  const cur = screen ?? own
  const go = (k: ScreenKey) => { setOwn(k); onScreen?.(k) }
  return (
    <div className="bgx"><div className="shell" style={{ ['--h' as string]: `${height}px` }}>
      <aside className="side">
        <div className="logo"><img src="/brand/shield.png" alt="" /><div><b>Builder Guardian</b><small>Warranty</small></div></div>
        <div className="grp">Workspace</div>
        {NAV.map(n => (<button key={n.k} className={`nv ${cur === n.k ? 'on' : ''}`} onClick={() => go(n.k)}><n.Icon size={16} />{n.label}{n.badge && <span className={`bd ${n.amb ? 'amb' : ''}`}>{n.badge}</span>}{n.soon && <span className="soon">Soon</span>}</button>))}
        <div className="who"><span className="av">DR</span><div><div style={{ color: '#fff', fontWeight: 700, fontSize: 12.5 }}>Dana R.</div>Warranty Manager</div></div>
      </aside>
      <div className="col">
        <div className="top"><h1>{TITLES[cur]}</h1><span className="sel"><Building2 size={14} />All communities<ChevronDown size={14} /></span><span className="search"><Search size={14} />Search lots, owners, items</span><span className="ib"><Bell size={16} /><i /></span></div>
        <div className="main">
          {cur === 'dashboard' && <Dashboard go={go} />}{cur === 'homes' && <Homes />}{cur === 'deadlines' && <Deadlines />}
          {cur === 'orders' && <Orders />}{cur === 'conciliation' && <Conciliation />}{cur === 'design' && <Design />}
        </div>
      </div>
    </div></div>
  )
}
