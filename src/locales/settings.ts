import type { InitOptions } from 'i18next'

export const supportedLocales = ['pt-BR', 'en-US', 'es-ES'] as const

export type Locale = (typeof supportedLocales)[number]
export const FALLBACK_LOCALE = 'pt-BR'

export const LANGUAGE_COOKIE = 'lang'

export function getOptions(lang = FALLBACK_LOCALE, ns = 'pages'): InitOptions {
  return {
    debug: false, // Set to true to see console logs
    supportedLngs: supportedLocales,
    fallbackLng: FALLBACK_LOCALE,
    lng: lang,
    ns,
  }
}
