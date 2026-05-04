import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-nunito',
  display: 'swap',
})
const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mynzo Carbon – Precision Forest Monitoring',
  description: 'Revolutionizing forest monitoring with AI-powered satellite technology.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${nunito.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
