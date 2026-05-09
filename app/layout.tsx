import type { Metadata } from 'next'
import { Tajawal } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400','500','700','800'], display: 'swap' })

export const metadata: Metadata = {
  title: 'ميكروبليدنغ — ما هو؟',
  description: 'Created with v0',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={tajawal.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
