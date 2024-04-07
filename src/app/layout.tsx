import './globals.css'
import 'animate.css'

import clsx from 'clsx'
import { Metadata } from 'next'
import { Work_Sans as WorkSans } from 'next/font/google'
import { cookies } from 'next/headers'

import { Header } from '@/components/header/header'
import { ThemeProvider } from '@/components/themes/theme-provider'
import { Toaster } from '@/components/ui/toaster'

import { Locale } from '../../locales'
import { Aside } from '../components/aside/aside'
import { Footer } from '../components/footer/footer'

const inter = WorkSans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevLab',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const cookieStore = cookies()
  const lang = cookieStore.get('lang')?.value as Locale

  return (
    <html lang={lang}>
      <body className={clsx(inter.className, '')}>
        <ThemeProvider attribute="class" enableSystem>
          <Header />
          <Aside />
          {children}
          <Footer />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
