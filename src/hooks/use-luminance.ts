import { useTheme } from 'next-themes'

import { ColorType } from '@/app/converter/(components)/(converter)/converter-input'
import {
  OriginalColorValue,
  RGB,
  RGBA,
} from '@/app/converter/(components)/(converter)/converter-section'
import { convertColor } from '@/utils/color-conversion'

interface UseLuminanceProps {
  originalColor: OriginalColorValue
  finalColor?: string
  from: ColorType
  to: ColorType
}

function calculateLuminance(
  r: number,
  g: number,
  b: number,
  invert: boolean = false,
): number {
  const rNormalized = r / 255
  const gNormalized = g / 255
  const bNormalized = b / 255

  let luminance =
    0.2126 * rNormalized + 0.7152 * gNormalized + 0.0722 * bNormalized

  if (invert) {
    luminance = 1 - luminance
  }

  return luminance
}

export function useLuminance({
  originalColor,
  from,
}: UseLuminanceProps): number {
  const { theme } = useTheme()
  if (!originalColor) return 0

  let r: number, g: number, b: number

  switch (from) {
    case 'hex': {
      const rgbFromHex = convertColor(originalColor, from, 'rgb') as RGB

      r = rgbFromHex.r
      g = rgbFromHex.g
      b = rgbFromHex.b

      return calculateLuminance(r, g, b)
    }
    case 'rgb': {
      const rgbFromRgb = originalColor as RGB
      r = rgbFromRgb.r
      g = rgbFromRgb.g
      b = rgbFromRgb.b

      return calculateLuminance(r, g, b)
    }
    case 'hexWithOpacity': {
      const rgbaFromHexWithOpacity = convertColor(
        originalColor,
        'hexWithOpacity',
        'rgba',
      ) as RGBA
      r = rgbaFromHexWithOpacity.r
      g = rgbaFromHexWithOpacity.g
      b = rgbaFromHexWithOpacity.b

      if (rgbaFromHexWithOpacity.a < 0.5 && theme === 'dark') {
        return calculateLuminance(r, g, b, true)
      }

      return calculateLuminance(r, g, b)
    }
    default:
      return 0
  }
}
