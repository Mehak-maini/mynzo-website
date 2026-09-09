import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import Script from 'next/script'

const GA_MEASUREMENT_ID = 'G-WQW0T7W18B'

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
  metadataBase: new URL('https://www.mynzocarbon.com'),
  title: 'Mynzo Carbon – Precision Forest Monitoring',
  description: 'Revolutionizing forest monitoring with AI-powered satellite technology.',
  icons: {
    icon: 'https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/favicon.png',
    apple: 'https://mynzocarbon-website.s3.ap-south-1.amazonaws.com/favicon.png',
  },

}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if (['www.mynzocarbon.com', 'mynzocarbon.com'].includes(window.location.hostname)) {
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}');
            }
          `}
        </Script>
      </head>
      <body className={`${nunito.variable} ${inter.variable}`}>{children}</body>
    </html>
  )
}
