import { ColorType } from '@/app/converter/(components)/(converter)/converter-input'
import {
  RGB,
  RGBA,
} from '@/app/converter/(components)/(converter)/converter-section'

function hexToRgb(hex: string): RGB {
  hex = hex.replace(/^#/, '').trim()

  if (hex.length === 3) {
    hex = hex.replace(/./g, '$&$&')
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

function rgbToHex(rgb: RGB): string {
  const componentToHex = (component: number): string => {
    if (component === undefined) return '00' // handle undefined component
    const hex = component.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }

  const redHex = componentToHex(rgb.r)
  const greenHex = componentToHex(rgb.g)
  const blueHex = componentToHex(rgb.b)

  return `#${redHex}${greenHex}${blueHex}`.toUpperCase()
}

function rgbStringToRgb(rgbString: string): RGB | null {
  const colorFormatted = rgbString.trim().substring(4, rgbString.length - 1)
  const components = colorFormatted.split(',')

  if (components.length !== 3) return null

  const r = parseInt(components[0].trim(), 10)
  const g = parseInt(components[1].trim(), 10)
  const b = parseInt(components[2].trim(), 10)

  return { r, g, b }
}

function hexWithOpacityToRgba(hexWithOpacity: string): RGBA | null {
  hexWithOpacity = hexWithOpacity.replace(/^#/, '').trim()

  if (hexWithOpacity.length !== 8) return null

  const r = parseInt(hexWithOpacity.substring(0, 2), 16)
  const g = parseInt(hexWithOpacity.substring(2, 4), 16)
  const b = parseInt(hexWithOpacity.substring(4, 6), 16)
  const a = Number(
    (parseInt(hexWithOpacity.substring(6, 8), 16) / 255).toFixed(2),
  )

  return { r, g, b, a }
}

function hexWithOpacityToRgb(hexWithOpacity: string): RGB | null {
  hexWithOpacity = hexWithOpacity.replace(/^#/, '').trim()

  if (hexWithOpacity.length !== 8) return null

  const r = parseInt(hexWithOpacity.substring(0, 2), 16)
  const g = parseInt(hexWithOpacity.substring(2, 4), 16)
  const b = parseInt(hexWithOpacity.substring(4, 6), 16)

  return { r, g, b }
}

function convertColor(
  color: string | RGB,
  from: ColorType,
  to: ColorType,
): string | RGB | null {
  if (from === 'hex' && to === 'rgb') {
    return hexToRgb(color as string)
  } else if (from === 'rgb' && to === 'hex') {
    return rgbToHex(color as RGB)
  } else if (
    typeof color === 'string' &&
    /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(color)
  ) {
    return rgbStringToRgb(color)
  } else if (from === 'hexWithOpacity' && to === 'rgba') {
    return hexWithOpacityToRgba(color as string)
  } else if (from === 'hexWithOpacity' && to === 'rgb') {
    return hexWithOpacityToRgb(color as string)
  }

  return null
}

export { hexToRgb, rgbToHex, rgbStringToRgb, convertColor }
