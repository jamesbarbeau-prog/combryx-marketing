export function LogoMark({ size = 30 }: { size?: number }) {
  // eslint-disable-next-line @next/next/no-img-element
  return <img src="/brand/shield.png" alt="Builder Guardian" width={Math.round(size * 338 / 368)} height={size} style={{ display:'block', width:'auto', height:size }} />
}

export default function Logo({ size = 30, fontSize = 19 }: { size?: number; fontSize?: number }) {
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:9 }}>
      <LogoMark size={size} />
      <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize, letterSpacing:'0.08em', lineHeight:1, color:'#0F172A', whiteSpace:'nowrap' }}>
        BUILDER <span style={{ color:'#D97706' }}>GUARDIAN</span>
      </span>
    </span>
  )
}
