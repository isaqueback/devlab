import acceptLanguageParser from 'accept-language-parser'
import { NextRequest, NextResponse } from 'next/server'

import { Locale, locales } from '../locales'

function determineUserLocale(req: NextRequest, res: NextResponse): Locale {
  const cookieLang = req.cookies.get('lang')?.value
  if (cookieLang && cookieLang in locales) {
    return cookieLang as Locale
  }

  let matchedLocale: Locale | null = null

  const acceptLanguage = req.headers.get('accept-language') || ''
  const languages = acceptLanguage
    ? acceptLanguageParser.parse(acceptLanguage)
    : []

  const getMatchedLocale = (
    langCode: string,
    regionCode?: string,
  ): Locale | null => {
    const testLocale = regionCode ? `${langCode}-${regionCode}` : langCode

    if (locales[testLocale as Locale]) {
      return testLocale as Locale
    }

    const possibleLocales = Object.keys(locales).filter((locale) =>
      locale.startsWith(langCode + '-'),
    )
    return possibleLocales.length > 0 ? (possibleLocales[0] as Locale) : null
  }

  for (const { code, region } of languages) {
    matchedLocale = getMatchedLocale(code, region)
    if (matchedLocale) break
  }

  matchedLocale = matchedLocale ?? 'pt-BR'

  const expiryDate = new Date()
  expiryDate.setFullYear(expiryDate.getFullYear() + 2) // adds 2 years to the current date

  res.cookies.set('lang', matchedLocale, { expires: expiryDate })

  return matchedLocale
}

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  if (!request.nextUrl.pathname.startsWith('/_next')) {
    determineUserLocale(request, response)
  }

  return response
}
