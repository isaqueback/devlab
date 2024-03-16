'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const asideLink = [
  { label: 'HEX para RGB', pathname: '/hex-to-rgb' },
  { label: 'RGB para HEX', pathname: '/rgb-to-hex' },
  { label: 'HEX para RGBA', pathname: '/hex-to-rgba' },
  { label: 'RGBA para HEX', pathname: '/rgba-to-hex' },
  { label: 'Opacidade para HEX', pathname: '/hex-opacity' },
]

export function Aside() {
  const pathname = usePathname()

  return (
    <aside className="fixed right-0 top-0 z-10 flex h-screen flex-col items-center justify-center gap-4 border-l bg-background px-10 max-sm:hidden">
      <h2 className="text-lg font-medium tracking-tight">Outras Opções</h2>
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
