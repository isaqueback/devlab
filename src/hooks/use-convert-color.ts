import { ColorType } from '@/app/converter/(components)/(converter)/converter-input'
import {
  OriginalColorValue,
  RGB,
  RGBA,
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
  } else if (from === 'hexWithOpacity' && to === 'rgba') {
    const rgba = convertedColor as RGBA
    return `rgba(${rgba.r}, ${rgba.g}, ${rgba.b}, ${rgba.a})`
  }

  return undefined
}
