import Link from 'next/link'

const cols = [
  { title: 'Modules', links: [['Warranty Core','/pricing'],['Financial Ledger','/pricing'],['Build & Field Ops','/pricing'],['Sales & Leasing','/pricing'],['IoT & Security','/pricing']] },
  { title: 'Platform', links: [['How It Works','/how-it-works'],['Platform Overview','/platform'],['Field App','/how-it-works#field'],['Tarion Compliance','/how-it-works#tarion'],['Download APK','#']] },
  { title: 'Company', links: [['About','/about'],['Pricing','/pricing'],['Book a Demo','mailto:demo@combryx.com'],['Support','mailto:support@combryx.com'],['Privacy Policy','#']] },
]

export default function Footer() {
  return (
    <footer className="bg-black border-t border-[rgba(255,184,0,0.08)] pt-14 pb-8 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-[rgba(255,255,255,0.05)]">
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:28, height:28, background:'#FFB800', clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', display:'flex', alignItems:'center', justifyContent:'center', position:'relative' }}>
                <span style={{ color:'#000', fontSize:10, fontWeight:'bold', position:'absolute' }}>✦</span>
              </div>
              <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize:18, letterSpacing:'0.1em', color:'#F5F5F5' }}>COM<span style={{ color:'#FFB800' }}>BRYX</span></span>
            </div>
            <p className="text-cb-muted text-sm leading-relaxed mb-4">
              Modular construction ERP built for Ontario homebuilders. Tarion-compliant. Built by the trade, for the trade.
            </p>
            <p className="font-mono text-[10px] text-cb-dim uppercase tracking-wider">Ontario · Canada · ONHWPA Compliant</p>
          </div>
          {cols.map(col => (
            <div key={col.title}>
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-cb-dim mb-4">{col.title}</div>
              <div className="flex flex-col gap-2.5">
                {col.links.map(([label, href]) => (
                  <Link key={label} href={href} style={{ color:"#888888", fontSize:14, textDecoration:"none" }}>{label}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[10px] text-cb-dim">© {new Date().getFullYear()} Combryx Inc. All rights reserved.</p>
          <div className="flex gap-5 flex-wrap justify-center">
            {['Tarion Compliant','ONHWPA Ready','OBC Part 9','PIPEDA Compliant','Canadian Data'].map(t => (
              <span key={t} className="font-mono text-[9px] uppercase tracking-wider text-cb-dim">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
