import Cookies from 'js-cookie'
import { Languages } from 'lucide-react'

import { useTranslationClient } from '@/hooks/use-translation/use-translation-client'

import { Locale } from '../../../locales'
import { Dropdown } from './dropdown'

const languages: { label: string; lang: Locale }[] = [
  { label: 'Português', lang: 'pt-BR' },
  { label: 'English', lang: 'en-US' },
  { label: 'Español', lang: 'es-ES' },
]

export function LanguageDropdown() {
  const { lang } = useTranslationClient()

  function handleClickLanguage(lang: Locale) {
    const expiryDate = new Date()
    expiryDate.setFullYear(expiryDate.getFullYear() + 2) // adds 2 years to the current date
    Cookies.set('lang', lang, { expires: expiryDate })

    window.location.reload()
  }
  return (
    <Dropdown.Root>
      <Dropdown.TriggerWrapper>
        <Dropdown.TriggerIcon icon={Languages} className="" />
      </Dropdown.TriggerWrapper>
      <Dropdown.Content>
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
