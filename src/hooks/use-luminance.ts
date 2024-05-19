import { ColorType } from '@/app/converter/(components)/(converter)/converter-input'
import {
  OriginalColorValue,
  RGB,
} from '@/app/converter/(components)/(converter)/converter-section'
import { convertColor } from '@/utils/color-conversion'

interface UseLuminanceProps {
  originalColor: OriginalColorValue
  finalColor?: string
  from: ColorType
  to: ColorType
}

function calculateLuminance(r: number, g: number, b: number): number {
  const rNormalized = r / 255
  const gNormalized = g / 255
  const bNormalized = b / 255

  return 0.2126 * rNormalized + 0.7152 * gNormalized + 0.0722 * bNormalized
}

export function useLuminance({
  originalColor,
  from,
}: UseLuminanceProps): number {
  if (!originalColor) return 0

  if (from !== 'rgb') {
    const { r, g, b } = convertColor(originalColor, from, 'rgb') as RGB

    return calculateLuminance(r, g, b)
  }

  const { r, g, b } = originalColor as RGB
  return calculateLuminance(r, g, b)
}
