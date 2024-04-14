'use client'

import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import { useTranslation } from '@/i18n/client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { DarkModeSwitch } from './darkMode/dark-mode-switch'
import { LanguageDropdown } from './language-dropdown'

export function MobileHeader() {
  const { t } = useTranslation('header')
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  console.log(pathname)

  const colorConverters = [
    { label: t('HEX to RGB'), link: '/converter/hex-to-rgb' },
    // { label: t('RGB to HEX'), link: '/converter/rgb-to-hex' },
    // {
    //   label: t('HEX with Opacity to RGBA'),
    //   link: '/converter/hex-with-opacity-to-rgba',
    // },
    // {
    //   label: t('RGBA to HEX with Opacity'),
    //   link: '/converter/rgba-to-hex-with-opacity',
    // },
    // { label: t('HSL to HEX'), link: '/converter/hsl-to-hex' },
    // { label: t('HSL to RGB'), link: '/converter/hsl-to-rgb' },
    // { label: t('HEX to HSL'), link: '/converter/hex-to-hsl' },
    // { label: t('RGB to HSL'), link: '/converter/rgb-to-hsl' },
    // { label: t('RGBA to HSLA'), link: '/converter/rgba-to-hsla' },
    // { label: t('HSLA to RGBA'), link: '/converter/hsla-to-rgba' },
    // {
    //   label: t('HEX with Opacity to HSLA'),
    //   link: '/converter/hex-with-opacity-to-hsla',
    // },
    // {
    //   label: t('HSLA to HEX with Opacity'),
    //   link: '/converter/hsla-to-hex-with-opacity',
    // },
  ]

  const handleClickAccordionItem = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div className="animate__animated animate__fadeInDown fixed left-0 right-0 z-20 flex bg-background py-2 sm:hidden">
      <Link href="/" className="ml-2 mr-auto flex items-center">
        <Image
          src="/images/logo.png"
          width={1024}
          height={1024}
          alt="logo"
          className="h-10 w-10"
        />
        <span className="text-2xl font-extralight">DevLab</span>
      </Link>
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger asChild>
          <Menu className="mr-4 h-10 w-10 cursor-pointer" />
        </SheetTrigger>
        <SheetContent className="flex flex-col items-center overflow-auto py-14">
          <Accordion type="single" collapsible className="w-full overflow-auto">
            <AccordionItem value="item-1" className="border-0">
              <AccordionTrigger className="mb-2 rounded-sm px-2 text-sm outline-none transition-all duration-300 ease-out hover:bg-muted-foreground/10 data-[state=open]:bg-muted-foreground/10">
                {t('Color Converter')}
              </AccordionTrigger>
              <AccordionContent>
                {colorConverters.map((converter, idx) => (
                  <Link
                    onClick={() => {
                      converter.link !== pathname && handleClickAccordionItem()
                    }}
                    key={idx}
                    href={converter.link}
                    className={`block w-full rounded-sm p-3 text-xs brightness-75 transition-all duration-300 ease-out hover:bg-muted-foreground/5 ${pathname !== converter.link ? 'hover:brightness-100' : 'cursor-not-allowed'}`}
                  >
                    {converter.label}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="absolute bottom-0 left-0 right-0 z-30 flex items-center justify-center gap-7 bg-muted-foreground/10 py-4 backdrop-blur-sm">
            <DarkModeSwitch />
            <LanguageDropdown side="top" />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
