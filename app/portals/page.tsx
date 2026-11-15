import type { Metadata } from 'next'
import PortalShowcase from '@/components/PortalShowcase'

export const metadata: Metadata = {
  title: 'Portals & Design Centre — Owner, Trade and Selections',
  description: 'See how owners and trades work with your warranty team, how owners choose and sign their selections in the Design Centre, and how the 360 stage record follows a home from framing to close.',
  alternates: { canonical: 'https://combryx.com/portals' },
}

export default function PortalsPage() {
  return <PortalShowcase />
}
