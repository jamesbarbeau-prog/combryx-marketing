import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://combryx.com'),
  title: { default: 'Combryx — Warranty Management for Ontario Builders | Tarion', template: '%s | Combryx' },
  description: 'Warranty management software for Ontario homebuilders, low-rise and high-rise. Tarion form import, deadline tracking, AI triage, work orders and a Conciliation Manager add-on. Built by a Tarion insider.',
  openGraph: { siteName: 'Combryx', locale: 'en_CA', type: 'website' },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Outfit:wght@300;400;500;600;700&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet"/>
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
