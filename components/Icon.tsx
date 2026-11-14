import {
  FileInput, Clock, Sparkles, Wrench, Receipt, MailCheck, ClipboardList, Hourglass, Banknote,
  ShieldCheck, BarChart3, Building2, Palette, PenLine, FileText, Camera, ScanSearch, Home,
  Landmark, RefreshCw, Search, HardHat, ArrowRight, Link2, CalendarDays, Lock, Upload,
  FolderInput, Unlock, Scale, Smartphone, Puzzle, LifeBuoy, Zap,
} from 'lucide-react'

const ICONS = {
  FileInput, Clock, Sparkles, Wrench, Receipt, MailCheck, ClipboardList, Hourglass, Banknote,
  ShieldCheck, BarChart3, Building2, Palette, PenLine, FileText, Camera, ScanSearch, Home,
  Landmark, RefreshCw, Search, HardHat, ArrowRight, Link2, CalendarDays, Lock, Upload,
  FolderInput, Unlock, Scale, Smartphone, Puzzle, LifeBuoy, Zap,
}

export function Icon({ name, size = 20, color = '#1E293B' }: { name: string; size?: number; color?: string }) {
  const C = ICONS[name as keyof typeof ICONS] ?? Sparkles
  return <C size={size} color={color} strokeWidth={1.75} aria-hidden="true" />
}

export default function IconTile({ name, color = '#1E293B', bg = '#FFEDD5' }: { name: string; color?: string; bg?: string }) {
  return (
    <span style={{ display:'inline-flex', width:40, height:44, background:bg, clipPath:'polygon(50% 0%,100% 25%,100% 75%,50% 100%,0% 75%,0% 25%)', alignItems:'center', justifyContent:'center', flexShrink:0 }}>
      <Icon name={name} color={color} size={19} />
    </span>
  )
}
