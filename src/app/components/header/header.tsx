'use client'

import Image from 'next/image'
import Link from 'next/link'

import { ConverterDropdown } from './ConverterDropdown'
import { LanguageDropdown } from './LanguageDropdown'

export function Header() {
  return (
    <header className="fixed z-20 flex h-14 w-full items-center gap-10 border-b border-neutral-200 bg-background px-5">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          width={1024}
          height={1024}
          alt="logo"
          className="h-10 w-10"
        />
        <span className="text-lg font-extralight">DevLab</span>
      </Link>
      <nav className="flex gap-2">
        <ConverterDropdown />
      </nav>
      <div className="ml-auto flex gap-2">
        <LanguageDropdown />
        <div>DARK MODE</div>
      </div>
    </header>
  )
}
