'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useTranslation } from '@/i18n/client'

import { Dropdown } from './dropdown'

export function ConverterDropdown() {
  const { t } = useTranslation('header')

  const pathname = usePathname()

  const colorConverters = [
    { label: t('HEX to RGB'), link: '/converter/hex-to-rgb' },
    { label: t('RGB to HEX'), link: '/converter/rgb-to-hex' },
    {
      label: t('HEX to RGBA'),
      link: '/converter/hex-with-opacity-to-rgba',
    },
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

  return (
    <Dropdown.Root className="animate__animated animate__fadeInDownBig">
      <Dropdown.TriggerWrapper>
        <Dropdown.TriggerContent
          content={t('Color Converter')}
          className="tracking-tighter"
        />
      </Dropdown.TriggerWrapper>
      <Dropdown.Content className="absolute w-60">
        {colorConverters.map((converter, idx) => (
          <Dropdown.ContentItem
            className={
              converter.link === pathname
                ? 'cursor-not-allowed bg-input hover:bg-input'
                : ''
            }
            key={idx}
          >
            <Link
              href={converter.link}
              className={`${idx > 3 ? 'font-light' : ''} ${converter.link === pathname ? 'cursor-not-allowed' : ''} w-full`}
            >
              {converter.label}
            </Link>
          </Dropdown.ContentItem>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
