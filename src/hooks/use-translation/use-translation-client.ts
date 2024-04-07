import Cookies from 'js-cookie'
import { useEffect, useState } from 'react'

import { Locale, locales } from '@/../locales'
import { LocaleType } from '@/../locales/localeType'

export function useTranslationClient() {
  const [lang, setLang] = useState('' as Locale)
  const [t, setT] = useState<undefined | LocaleType>(undefined)

  useEffect(() => {
    const lang = Cookies.get('lang') as Locale

    setLang(lang)
    setT(locales[lang])
  }, [])

  return { t, lang }
}
