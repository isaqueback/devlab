import { Languages } from 'lucide-react'

import { Dropdown } from './dropdown'

const languages = [
  { label: 'Português', lang: 'pt-BR' },
  { label: 'English', lang: 'en-US' },
  { label: 'Espanhol', lang: 'es-ES' },
]

export function LanguageDropdown() {
  return (
    <Dropdown.Root>
      <Dropdown.TriggerWrapper>
        <Dropdown.TriggerIcon icon={Languages} className="" />
      </Dropdown.TriggerWrapper>
      <Dropdown.Content>
        <Dropdown.ContentItem>Português</Dropdown.ContentItem>
        <Dropdown.ContentItem>English</Dropdown.ContentItem>
        <Dropdown.ContentItem>Espanhol</Dropdown.ContentItem>
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
