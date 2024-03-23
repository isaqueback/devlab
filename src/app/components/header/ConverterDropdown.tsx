import Link from 'next/link'

import { Dropdown } from './dropdown'

const colorConverters = [
  { label: 'Hex para RGB', link: '/hex-to-rgb' },
  { label: 'RGB para HEX', link: '/rgb-to-hex' },
  { label: 'Hex com Opacidade para RGBA', link: '/hex-with-opacity-to-rgba' },
  { label: 'RGBA para HEX com opacidade', link: '/rgba-to-hex-with-opacity' },
  { label: 'HSL para HEX', link: '/hsl-to-hex' },
  { label: 'HSL para RGB', link: '/hsl-to-rgb' },
  { label: 'HEX para HSL', link: '/hex-to-hsl' },
  { label: 'RGB para HSL', link: '/rgb-to-hsl' },
  { label: 'RGBA para HSLA', link: '/rgba-to-hsla' },
  { label: 'HSLA para RGBA', link: '/hsla-to-rgba' },
  { label: 'HEX com Opacidade para HSLA', link: '/hex-with-opacity-to-hsla' },
  { label: 'HSLA para HEX com Opacidade', link: '/hsla-to-hex-with-opacity' },
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
