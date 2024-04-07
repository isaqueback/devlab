import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { useTranslationClient } from '@/hooks/use-translation/use-translation-client'

import { Dropdown } from './dropdown'

export function ConverterDropdown() {
  const { t } = useTranslationClient()

  const pathname = usePathname()

  const colorConverters = [
    { label: t?.header['HEX to RGB'] ?? '', link: '/converter/hex-to-rgb' },
    { label: t?.header['RGB to HEX'] ?? '', link: '/converter/rgb-to-hex' },
    {
      label: t?.header['HEX with Opacity to RGBA'] ?? '',
      link: '/converter/hex-with-opacity-to-rgba',
    },
    {
      label: t?.header['RGBA to HEX with Opacity'] ?? '',
      link: '/converter/rgba-to-hex-with-opacity',
    },
    { label: t?.header['HSL to HEX'] ?? '', link: '/converter/hsl-to-hex' },
    { label: t?.header['HSL to RGB'] ?? '', link: '/converter/hsl-to-rgb' },
    { label: t?.header['HEX to HSL'] ?? '', link: '/converter/hex-to-hsl' },
    { label: t?.header['RGB to HSL'] ?? '', link: '/converter/rgb-to-hsl' },
    { label: t?.header['RGBA to HSLA'] ?? '', link: '/converter/rgba-to-hsla' },
    { label: t?.header['HSLA to RGBA'] ?? '', link: '/converter/hsla-to-rgba' },
    {
      label: t?.header['HEX with Opacity to HSLA'] ?? '',
      link: '/converter/hex-with-opacity-to-hsla',
    },
    {
      label: t?.header['HSLA to HEX with Opacity'] ?? '',
      link: '/converter/hsla-to-hex-with-opacity',
    },
  ]

  return (
    <Dropdown.Root className="animate__animated animate__fadeInDownBig">
      <Dropdown.TriggerWrapper>
        <Dropdown.TriggerContent
          content={t?.header['Color Converter'] ?? ''}
          className="tracking-tighter"
        />
      </Dropdown.TriggerWrapper>
      <Dropdown.Content className="w-60">
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
