import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface ConverterInfoProps extends HTMLAttributes<HTMLElement> {
  title: string
  description: string
}

export function ConverterInfo({
  title,
  description,
  ...rest
}: ConverterInfoProps) {
  return (
    <div
      {...rest}
      className={twMerge('flex flex-col items-center gap-1', rest.className)}
    >
      <h1
        className={twMerge(
          'animate__animated animate__fadeIn text-4xl font-bold',
          rest.className,
        )}
      >
        {title}
      </h1>
      <p
        className={twMerge(
          'animate__animated animate__fadeIn text-xl text-muted-foreground',
          rest.className,
        )}
      >
        {description}
      </p>
    </div>
  )
}
