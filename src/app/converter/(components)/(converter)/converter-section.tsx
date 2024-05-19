'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard'
import { useTranslation } from '@/i18n/client'

import { Ad } from '../google-adsense-ad'
import { Converter } from '.'
import { ColorType } from './converter-input'

interface ConverterSectionProps {
  title: string
  description: string
  originalColorType: ColorType
  finalColorType: ColorType
  prefix?: string
  placeholder: string
  enterYourColorWarnText: string
}

export type RGB = {
  r: number
  g: number
  b: number
}

export type OriginalColorValue = string | RGB | undefined

export function ConverterSection({
  title,
  description,
  originalColorType,
  finalColorType,
  prefix,
  placeholder,
  enterYourColorWarnText,
}: ConverterSectionProps) {
  const { t } = useTranslation('pages')

  const hexSchema = z
    .string()
    .regex(/^\s*#?\s*([0-9A-F]{3}){1,2}\s*$/i, t('converter.Invalid color!'))
    .transform((data) => {
      let hex = data.trim()
      hex = hex.startsWith('#') ? hex : '#' + hex
      return hex
    })
    .or(z.literal(''))

  const rgbSchema = z
    .string()
    .superRefine((data, ctx) => {
      const isRGBValid =
        /^(rgb\(\s*\d{1,3}\s*,?\s*\d{1,3}\s*,?\s*\d{1,3}\s*\))$/i.test(data) ||
        /^(rgb\(\s*\d{1,3}\s+\d{1,3}\s+\d{1,3}\s*\))$/i.test(data) ||
        /^\d{3}$|^\d{9}$/i.test(data) ||
        /^(\d{1,3}\s*,?\s*\d{1,3}\s*,?\s*\d{1,3})$/i.test(data) ||
        /^(\d{1,3}\s+\d{1,3}\s+\d{1,3})$/i.test(data)

      if (isRGBValid) {
        const matches = data.match(/\d{1,3}/g)
        if (matches) {
          const numbers = matches.map(Number)
          const validRange = numbers.every((val) => val >= 0 && val <= 255)
          if (!validRange) {
            if (numbers.length !== 1) {
              ctx.addIssue({
                code: z.ZodIssueCode.custom,
                message: t('converter.Invalid color!'),
              })
            }
          }
        }
      } else {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: t('converter.Invalid color!'),
        })
      }
    })
    .transform((data, ctx) => {
      const hasRGBFormat = /^rgb\(/i.test(data)
      let numbers: number[] | null = null

      if (hasRGBFormat) {
        const matches = data.match(/\d{1,3}/g)
        if (matches) {
          numbers = matches.map(Number)
        } else {
          const cleanData = data.replace(/rgb\(|\)/gi, '').trim()
          const isThreeDigits = cleanData.length === 3
          const isNineDigits = cleanData.length === 9

          if (isThreeDigits) {
            numbers = cleanData.split('').map((digit) => parseInt(digit, 10))
          } else if (isNineDigits) {
            const parseDigits = (str: string): number[] => {
              return Array.from({ length: str.length / 3 }, (_, i) =>
                parseInt(str.slice(i * 3, (i + 1) * 3), 10),
              )
            }

            numbers = parseDigits(cleanData)
          }
        }
      } else {
        const isThreeDigits = data.length === 3
        const isNineDigits = data.length === 9 && !data.includes(',')

        if (isThreeDigits) {
          numbers = data.split('').map((digit) => parseInt(digit, 10))
        } else if (isNineDigits) {
          const parseDigits = (str: string): number[] => {
            return Array.from({ length: str.length / 3 }, (_, i) =>
              parseInt(str.slice(i * 3, (i + 1) * 3), 10),
            )
          }

          numbers = parseDigits(data)
        } else if (data.includes(',') || data.includes(' ')) {
          const splitNumbers = data
            .split(/[, ]+/)
            .map((num) => parseInt(num.trim(), 10))
          if (
            splitNumbers.length === 3 &&
            splitNumbers.every((num) => !isNaN(num) && num >= 0 && num <= 255)
          ) {
            numbers = splitNumbers
          }
        }
      }

      if (numbers) {
        let r, g, b
        if (numbers.length === 1) {
          if (numbers[0] === 0) {
            r = 0
            g = 0
            b = 0
          } else {
            r = parseInt(String(numbers[0])[0])
            g = parseInt(String(numbers[0])[1])
            b = parseInt(String(numbers[0])[2])
          }
        } else {
          r = numbers[0]
          g = numbers[1]
          b = numbers[2]
        }

        if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
          if (r <= 255 && g <= 255 && b <= 255) return { r, g, b }
        }
      }

      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: t('converter.Invalid color!'),
      })

      return ''
    })
    .or(z.literal(''))

  const totalOriginalColorSchema = z.object({
    hex: hexSchema,
    rgb: rgbSchema,
  })

  const originalColorSchemas = {
    hex: hexSchema,
    rgb: rgbSchema,
    totalOriginalColorSchema,
  }

  type totalOriginalColorSchemaType = z.infer<typeof totalOriginalColorSchema>

  const {
    register,
    watch,
    formState: { errors },
  } = useForm<totalOriginalColorSchemaType>({
    resolver: zodResolver(totalOriginalColorSchema),
    defaultValues: {
      hex: '',
      rgb: '',
    },
    mode: 'onChange',
  })

  const { elementRef, handleCopyToClipboard } = useCopyToClipboard()

  let isOriginalColorValueValid = false
  let originalColorValue
  const result = originalColorSchemas[originalColorType].safeParse(
    watch(originalColorType),
  )
  if (result.success && !!watch(originalColorType)) {
    isOriginalColorValueValid = true
    originalColorValue = result.data
  } else {
    isOriginalColorValueValid = false
    originalColorValue = undefined
  }

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
          enterYourColorWarnText={enterYourColorWarnText}
        />
        <Converter.Output
          originalColorValue={originalColorValue}
          isOriginalColorValueValid={isOriginalColorValueValid}
          originalColorType={originalColorType}
          finalColorType={finalColorType}
          elementRef={elementRef}
        />
        <Converter.Copy
          text={t('converter.Copy')}
          handleCopyToClipboard={handleCopyToClipboard}
        />
      </Converter.Form>

      <Ad />
    </Converter.Root>
  )
}
