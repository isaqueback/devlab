'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useTranslationClient } from '@/hooks/use-translation/use-translation-client'

export function Aside() {
  const { t } = useTranslationClient()
  const pathname = usePathname()

  const asideLink = [
    { label: t?.aside['HEX to RGB'], pathname: '/converter/hex-to-rgb' },
    { label: t?.aside['RGB to HEX'], pathname: '/converter/rgb-to-hex' },
    {
      label: t?.aside['HEX to RGBA'],
      pathname: '/converter/hex-to-rgba',
    },
    {
      label: t?.aside['RGBA to HEX'],
      pathname: '/converter/rgba-to-hex',
    },
    {
      label: t?.aside['Opacity for HEX'],
      pathname: '/converter/opacity-for-hex',
    },
  ]

  return (
    <aside className="fixed right-0 top-0 z-10 flex h-screen flex-col items-center justify-center gap-4 border-l bg-background px-10 max-sm:hidden">
      <h2 className="text-lg font-medium tracking-tight">
        {t?.aside['Other Options']}
      </h2>
      <nav className="flex flex-col items-center gap-2 text-sm tracking-tight text-muted-foreground">
        {asideLink.map((link) => (
          <Link
            key={link.pathname}
            className={`w-fit transition-all duration-300 ease-out ${link.pathname === pathname ? 'text-foreground' : 'hover:text-foreground'}`}
            href={link.pathname}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  )
}
