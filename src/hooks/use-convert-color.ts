import { ColorType } from '@/app/converter/(components)/(converter)/converter-input'
import {
  OriginalColorValue,
  RGB,
} from '@/app/converter/(components)/(converter)/converter-section'
import { convertColor } from '@/utils/color-conversion'

interface UseConvertColorProps {
  color: OriginalColorValue
  from: ColorType
  to: ColorType
}

export function useConvertColor({ color, from, to }: UseConvertColorProps) {
  if (!color) return undefined

  const convertedColor = convertColor(color, from, to)

  if (convertedColor === null) return ''

  if (from === 'hex' && to === 'rgb') {
    const rgb = convertedColor as RGB
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  } else if (from === 'rgb' && to === 'hex') {
    return convertedColor as string
  }

  return undefined
}
