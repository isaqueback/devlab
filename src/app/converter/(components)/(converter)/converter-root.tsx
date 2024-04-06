import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface ConverterRootProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function ConverterRoot({ children, ...rest }: ConverterRootProps) {
  return (
    <section
      {...rest}
      className={twMerge(
        'flex min-h-screen w-full flex-col items-center justify-center gap-10 pt-10',
        rest.className,
      )}
    >
      {children}
    </section>
  )
}
