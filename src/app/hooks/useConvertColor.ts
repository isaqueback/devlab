interface UseConvertColorProps {
  color: string
  to: 'rgb' | 'hex'
}

function hexToRgb(hex: string): { r: number; g: number; b: number } {
  hex = hex.replace(/^#/, '').trim()

  if (hex.length === 3) {
    hex = hex.replace(/./g, '$&$&')
  }

  const r = parseInt(hex.substring(0, 2), 16)
  const g = parseInt(hex.substring(2, 4), 16)
  const b = parseInt(hex.substring(4, 6), 16)

  return { r, g, b }
}

export function useConvertColor({ color, to }: UseConvertColorProps) {
  if (to === 'rgb') {
    const rgb = hexToRgb(color)
    return `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`
  }

  return ''
}
