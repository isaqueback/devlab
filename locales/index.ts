import { enUS } from './en-US'
import { esES } from './es-ES'
import { ptBR } from './pt-BR'

export const locales = {
  'pt-BR': ptBR,
  'en-US': enUS,
  'es-ES': esES,
} as const

export type Locale = keyof typeof locales
