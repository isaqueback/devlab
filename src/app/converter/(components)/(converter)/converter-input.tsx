import { HTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { Input } from '@/components/ui/input'

export type ColorType = 'hex' | 'rgb'

interface ConverterInputProps extends HTMLAttributes<HTMLDivElement> {
  placeholder: string
  prefix?: string
  originalColorType: ColorType
  register: UseFormRegister<{
    hex: string
    rgb: (
      | ''
      | {
          r: number
          g: number
          b: number
        }
    ) &
      (
        | ''
        | {
            r: number
            g: number
            b: number
          }
        | undefined
      )
  }>
}

export function ConverterInput({
  placeholder,
  prefix,
  originalColorType,
  register,
  ...rest
}: ConverterInputProps) {
  return (
    <div
      className={twMerge(
        'animate__animated animate__fadeIn border-radius flex items-center justify-center rounded-lg border px-2 ring-2 ring-background ring-offset-2 focus-within:ring-ring',
        rest.className,
      )}
    >
      {!!prefix && <span className="text-muted-foreground">{prefix}</span>}
      <Input
        {...register(originalColorType)}
        type="text"
        placeholder={placeholder}
        className="border-none pl-1 focus-visible:ring-0 focus-visible:ring-offset-0"
      />
    </div>
  )
}
