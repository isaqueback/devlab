'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useTranslation } from '@/i18n/client'

export function Aside() {
  const { t } = useTranslation('aside')

  const pathname = usePathname()
  const isShowed = !(pathname === '/')

  const asideLink = [
    { label: t('HEX to RGB'), pathname: '/converter/hex-to-rgb' },
    { label: t('RGB to HEX'), pathname: '/converter/rgb-to-hex' },
    // {
    //   label: t('HEX to RGBA'),
    //   pathname: '/converter/hex-to-rgba',
    // },
    // {
    //   label: t('RGBA to HEX'),
    //   pathname: '/converter/rgba-to-hex',
    // },
    // {
    //   label: t('Opacity for HEX'),
    //   pathname: '/converter/opacity-for-hex',
    // },
  ]

  return (
    <>
      {isShowed && (
        <aside className="animate__animated animate__fadeInRightBig fixed right-0 top-0 z-10 flex h-screen flex-col items-center justify-center gap-4 border-l bg-background px-10 max-sm:hidden">
          <h2 className="text-lg font-medium tracking-tight">
            {t('Other Options')}
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
      )}
    </>
  )
}
