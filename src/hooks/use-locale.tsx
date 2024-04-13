'use client'

import { createContext, useContext } from 'react'

import { FALLBACK_LOCALE, Locale } from '@/locales/settings'

const Context = createContext<Locale>(FALLBACK_LOCALE)

export function LocaleProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: Locale
}) {
  return <Context.Provider value={value}>{children}</Context.Provider>
}

export function useLocale() {
  return useContext(Context)
}
