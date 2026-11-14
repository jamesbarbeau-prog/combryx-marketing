export function LogoMark({ size = 30 }: { size?: number }) {
  return (
    <svg width={size} height={size * 52 / 48} viewBox="0 0 48 52" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Builder Guardian">
      {/* chimney */}
      <rect x="32.5" y="2.5" width="5" height="9" fill="#1E293B" />
      {/* upper frame: roofline */}
      <path d="M4 26 V14 L24 3 L44 14 V26" stroke="#1E293B" strokeWidth="3.6" strokeLinejoin="miter" />
      {/* lower chevron */}
      <path d="M4 26 V38 L24 49 L44 38 V26" stroke="#EA580C" strokeWidth="3.6" strokeLinejoin="miter" />
      {/* inner roof accent */}
      <path d="M12.5 19.5 L24 13 L35.5 19.5" stroke="#EA580C" strokeWidth="2.2" strokeLinecap="square" />
      <text x="24" y="37" textAnchor="middle" fontFamily="'Outfit',Arial,Helvetica,sans-serif" fontSize="17" fontWeight="800" letterSpacing="-0.5" fill="#1E293B">BG</text>
    </svg>
  )
}

export default function Logo({ size = 30, fontSize = 19 }: { size?: number; fontSize?: number }) {
  return (
    <span style={{ display:'inline-flex', alignItems:'center', gap:9 }}>
      <LogoMark size={size} />
      <span style={{ fontFamily:"'Bebas Neue',sans-serif", fontSize, letterSpacing:'0.08em', lineHeight:1, color:'#1E293B', whiteSpace:'nowrap' }}>
        BUILDER <span style={{ color:'#EA580C' }}>GUARDIAN</span>
      </span>
    </span>
  )
}
