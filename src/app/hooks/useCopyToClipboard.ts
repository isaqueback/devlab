import { useRef } from 'react'

export function useCopyToClipboard() {
  const elementRef = useRef<HTMLSpanElement>(null)

  const handleCopyToClipboard = async () => {
    try {
      if (!elementRef.current) return false
      if (!elementRef.current.textContent) return false

      await navigator.clipboard.writeText(elementRef.current.textContent)

      return true
    } catch (err) {
      return false
    }
  }

  return { elementRef, handleCopyToClipboard }
}
