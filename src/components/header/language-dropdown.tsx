'use client'

import { Languages } from 'lucide-react'

import { useLocale } from '@/hooks/use-locale'
import { switchLocaleAction } from '@/locales/actions/switch-locale'
import { Locale } from '@/locales/settings'

import { Dropdown } from './dropdown'

interface LanguageDropdownProps {
  side?: 'bottom' | 'top'
}

const languages: { label: string; lang: Locale }[] = [
  { label: 'Português', lang: 'pt-BR' },
  { label: 'English', lang: 'en-US' },
  { label: 'Español', lang: 'es-ES' },
]

export function LanguageDropdown({ side }: LanguageDropdownProps) {
  const lang = useLocale()

  function handleClickLanguage(lang: Locale) {
    switchLocaleAction(lang)
  }
  return (
    <Dropdown.Root>
      <Dropdown.TriggerWrapper>
        <Dropdown.TriggerIcon icon={Languages} className="" />
      </Dropdown.TriggerWrapper>
      <Dropdown.Content side={side}>
        {languages.map((language, idx) => (
          <Dropdown.ContentItem
            className={
              language.lang === lang
                ? 'cursor-not-allowed bg-input hover:bg-input'
                : ''
            }
            key={idx}
            onClick={() => {
              language.lang !== lang && handleClickLanguage(language.lang)
            }}
          >
            {language.label}
          </Dropdown.ContentItem>
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  )
}
