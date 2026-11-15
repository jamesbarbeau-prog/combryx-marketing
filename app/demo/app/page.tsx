import type { Metadata } from 'next'
import ProductApp from '@/components/product/ProductApp'

export const metadata: Metadata = {
  title: 'Builder Guardian — the product',
  description: 'The Builder Guardian warranty workspace: dashboard, homes, deadlines, work orders, Conciliation Manager and Design Centre. Sample data.',
  alternates: { canonical: 'https://combryx.com/demo/app' },
}

export default function Page() {
  return (<div style={{ paddingTop: 56, background: '#F4F7FB' }}><ProductApp height={820} /></div>)
}
