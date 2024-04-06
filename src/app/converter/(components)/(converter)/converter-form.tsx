import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ConverterFormProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
}

export function ConverterForm({ children, ...rest }: ConverterFormProps) {
  return (
    <div {...rest} className={twMerge('flex flex-col gap-2', rest.className)}>
      {children}
    </div>
  )
}
