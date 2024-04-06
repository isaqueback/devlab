import { HTMLAttributes } from 'react'
import { UseFormRegister } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

import { Input } from '@/components/ui/input'

interface OriginalColorType {
  [x: string]: string
}

interface ConverterInputProps extends HTMLAttributes<HTMLDivElement> {
  prefix?: string
  placeholder?: string
  originalColorType: 'hex' | 'rgb'
  register: UseFormRegister<OriginalColorType>
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
        'border-radius flex items-center justify-center rounded-lg border px-2 ring-2 ring-background ring-offset-2 focus-within:ring-ring',
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
