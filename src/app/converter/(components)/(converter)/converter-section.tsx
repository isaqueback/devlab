'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'

import { Converter } from '../..'
import { ConverterCopy } from './converter-copy'
import { ConverterOutput } from './converter-output'

interface ConverterSectionProps {
  title: string
  description: string
  originalColorType: 'hex' | 'rgb'
  finalColorType: 'rgb'
  prefix?: string
  placeholder: string
}

export function ConverterSection({
  title,
  description,
  originalColorType,
  finalColorType,
  prefix,
  placeholder,
}: ConverterSectionProps) {
  const originalColorSchema = z.lazy(() =>
    z.object({
      [originalColorType]: z
        .string()
        .regex(/^\s*#?\s*([0-9A-F]{3}){1,2}\s*$/i, 'Cor inválida!'),
    }),
  )

  type OriginalColorType = z.infer<typeof originalColorSchema>

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<OriginalColorType>({
    resolver: zodResolver(originalColorSchema),
    defaultValues: {
      hex: '',
    },
    mode: 'onChange',
  })

  const { elementRef, handleCopyToClipboard } = useCopyToClipboard()

  const originalColorValue = watch(originalColorType).trim()
    ? watch(originalColorType).trim().startsWith('#')
      ? watch(originalColorType).trim()
      : `#${watch(originalColorType).trim()}`
    : ''

  const isOriginalColorValueValid =
    !errors[originalColorType] && !!originalColorValue

  return (
    <Converter.Root>
      <Converter.Info title={title} description={description} />

      <Converter.Form>
        <Converter.Input
          originalColorType={originalColorType}
          prefix={prefix}
          placeholder={placeholder}
          register={register}
        />
        <Converter.ErrorMessage
          errorMessage={errors[originalColorType]?.message}
          originalColorValue={originalColorValue}
          isOriginalColorValueValid={isOriginalColorValueValid}
        />
        <ConverterOutput
          originalColorValue={originalColorValue}
          isOriginalColorValueValid={isOriginalColorValueValid}
          finalColorType={finalColorType}
          elementRef={elementRef}
        />
        <ConverterCopy
          text="Copiar"
          handleCopyToClipboard={handleCopyToClipboard}
        />
      </Converter.Form>

      <div className="flex h-[90px] w-full max-w-[728px] items-center justify-center bg-muted-foreground text-background">
        Propaganda
      </div>
    </Converter.Root>
  )
}
