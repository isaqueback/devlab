import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

import { useTranslation } from '@/i18n/client'

interface ConverterErrorMessageProps extends HTMLAttributes<HTMLElement> {
  enterYourColorWarnText: string
  originalColorValue: string
  isOriginalColorValueValid: boolean
  errorMessage?: string
}

export function ConverterErrorMessage({
  enterYourColorWarnText,
  originalColorValue,
  isOriginalColorValueValid,
  errorMessage,
  ...rest
}: ConverterErrorMessageProps) {
  const { t } = useTranslation('pages')

  return (
    <small
      className={twMerge(
        `animate__animated animate__fadeIn mb-5 ml-2 ${errorMessage ? 'text-red-500' : originalColorValue ? 'text-emerald-500' : 'text-muted-foreground'}`,
        rest.className,
      )}
    >
      {errorMessage ||
        (isOriginalColorValueValid
          ? t('converter.Valid color!')
          : enterYourColorWarnText)}
    </small>
  )
}
