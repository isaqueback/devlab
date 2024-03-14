import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import { Work_Sans as WorkSans } from 'next/font/google'

import { Aside } from './components/aside/aside'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'

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
  return (
    <html lang="en">
      <body className={clsx(inter.className, '')}>
        <Header />
        <Aside />
        {children}
        <Footer />
      </body>
    </html>
  )
}
