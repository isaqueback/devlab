import { cookies } from 'next/headers'

import { Locale, locales } from '@/../locales'

export function useTranslationServer() {
  const cookieStore = cookies()
  const lang = cookieStore.get('lang')?.value as Locale

  const t = locales[lang]

  return { t, lang }
}
