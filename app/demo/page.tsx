import type { Metadata } from 'next'
import DemoWalkthrough from '@/components/DemoWalkthrough'

export const metadata: Metadata = {
  title: 'See Combryx in Action — Warranty Workflow Demo',
  description: 'A step-by-step walkthrough of how Combryx handles a real Ontario builder warranty day — from PDI sign-off to Defence Vault export. Join the early access waitlist.',
  alternates: { canonical: 'https://combryx.com/demo' },
}

export default function DemoPage() {
  return <DemoWalkthrough />
}
