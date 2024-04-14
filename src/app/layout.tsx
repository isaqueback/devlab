import './globals.css'
import 'animate.css'

import { Analytics } from '@vercel/analytics/react'
import clsx from 'clsx'
import { Metadata } from 'next'
import { Work_Sans as WorkSans } from 'next/font/google'

import { Header } from '@/components/header/header'
import { ThemeProvider } from '@/components/themes/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { LocaleProvider } from '@/hooks/use-locale'
import { getLocale } from '@/i18n/server'

import { Aside } from '../components/aside/aside'
import { Footer } from '../components/footer/footer'
import { ConsentCookieContainer } from './components/consent-cookie-container'
import { GoogleAdsense } from './components/google-adsense'

const inter = WorkSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bem-vindo ao DevLab: Laboratório de Design e CSS',
  description:
    'No DevLab, aprimoramos seu design e desenvolvimento frontend com ferramentas versáteis projetadas para inspirar e facilitar sua criatividade.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const langAndRegion = getLocale()
  const lang = langAndRegion.split('-')[0]

  return (
    <html lang={lang} className="scroll-smooth">
      <head>
        <GoogleAdsense pId={process.env.pId as string} />
      </head>
      <body className={clsx(inter.className, '')}>
        <ThemeProvider attribute="class" enableSystem>
          <LocaleProvider value={langAndRegion}>
            <Analytics />
            <Header />
            <Aside />
            {children}
            <Footer />
            <Toaster />
            <ConsentCookieContainer />
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
