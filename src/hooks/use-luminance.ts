export function useLuminance(color: string): number {
  let colorFormatted = color.trim()
  let r, g, b

  if (/^#?([0-9A-F]{3}){1,2}$/i.test(colorFormatted)) {
    colorFormatted = colorFormatted.replace('#', '')

    if (colorFormatted.length === 3) {
      colorFormatted = colorFormatted.replace(/./g, '$&$&')
    }

    r = parseInt(colorFormatted.substring(0, 2), 16)
    g = parseInt(colorFormatted.substring(2, 4), 16)
    b = parseInt(colorFormatted.substring(4, 6), 16)
  } else if (/^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/.test(colorFormatted)) {
    colorFormatted = colorFormatted.substring(4, colorFormatted.length - 1)

    const components = colorFormatted.split(',')

    r = parseInt(components[0].trim(), 10)
    g = parseInt(components[1].trim(), 10)
    b = parseInt(components[2].trim(), 10)
  } else {
    return 0
  }

  const rNormalized = r / 255
  const gNormalized = g / 255
  const bNormalized = b / 255

  const luminance =
    0.2126 * rNormalized + 0.7152 * gNormalized + 0.0722 * bNormalized

  return luminance
}
