import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ConverterErrorMessageProps extends HTMLAttributes<HTMLElement> {
  originalColorValue: string
  isOriginalColorValueValid: boolean
  errorMessage?: string
}

export function ConverterErrorMessage({
  originalColorValue,
  isOriginalColorValueValid,
  errorMessage,
  ...rest
}: ConverterErrorMessageProps) {
  return (
    <small
      className={twMerge(
        `mb-5 ml-2 ${errorMessage ? 'text-red-500' : originalColorValue ? 'text-emerald-500' : 'text-muted-foreground'}`,
        rest.className,
      )}
    >
      {errorMessage ||
        (isOriginalColorValueValid
          ? 'Cor válida!'
          : 'Coloque sua cor hexadecimal')}
    </small>
  )
}
