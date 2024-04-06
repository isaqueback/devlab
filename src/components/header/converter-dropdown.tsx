import Link from 'next/link'

import { Dropdown } from './dropdown'

const colorConverters = [
  { label: 'Hex para RGB', link: '/converter/hex-to-rgb' },
  { label: 'RGB para HEX', link: '/converter/rgb-to-hex' },
  {
    label: 'Hex com Opacidade para RGBA',
    link: '/converter/hex-with-opacity-to-rgba',
  },
  {
    label: 'RGBA para HEX com opacidade',
    link: '/converter/rgba-to-hex-with-opacity',
  },
  { label: 'HSL para HEX', link: '/converter/hsl-to-hex' },
  { label: 'HSL para RGB', link: '/converter/hsl-to-rgb' },
  { label: 'HEX para HSL', link: '/converter/hex-to-hsl' },
  { label: 'RGB para HSL', link: '/converter/rgb-to-hsl' },
  { label: 'RGBA para HSLA', link: '/converter/rgba-to-hsla' },
  { label: 'HSLA para RGBA', link: '/converter/hsla-to-rgba' },
  {
    label: 'HEX com Opacidade para HSLA',
    link: '/converter/hex-with-opacity-to-hsla',
  },
  {
    label: 'HSLA para HEX com Opacidade',
    link: '/converter/hsla-to-hex-with-opacity',
  },
]

export function ConverterDropdown() {
  return (
    <Dropdown.Root>
      <Dropdown.TriggerWrapper>
        <Dropdown.TriggerContent
          content="Conversor de Cores"
          className="tracking-tighter"
        />
      </Dropdown.TriggerWrapper>
      <Dropdown.Content className="w-60">
        {colorConverters.map((converter, idx) => (
          <Dropdown.ContentItem key={idx}>
            <Link
              href={converter.link}
              className={`${idx > 3 ? 'font-light' : ''} w-full`}
            >
              {converter.label}
            </Link>
          </Dropdown.ContentItem>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
