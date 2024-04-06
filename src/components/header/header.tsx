'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Separator } from '@/components/ui/separator'

import { ConverterDropdown } from './converter-dropdown'
import { DarkModeSwitch } from './darkMode/dark-mode-switch'
import { LanguageDropdown } from './language-dropdown'

export function Header() {
  return (
    <header className="fixed z-20 flex h-14 w-full items-center gap-2 border border-b bg-background px-5">
      <Link href="/" className="flex items-center">
        <Image
          src="/images/logo.png"
          width={1024}
          height={1024}
          alt="logo"
          className="h-8 w-8"
        />
        <span className="font-extralight">DevLab</span>
      </Link>
      <nav className="ml-auto flex gap-2">
        <ConverterDropdown />
      </nav>
      <div className="flex h-full items-center gap-2 py-3">
        <Separator orientation="vertical" />
        <LanguageDropdown />
        <Separator orientation="vertical" />
        <DarkModeSwitch />
      </div>
    </header>
  )
}
