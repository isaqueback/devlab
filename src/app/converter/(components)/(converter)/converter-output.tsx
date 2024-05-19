import { HTMLAttributes, RefObject } from 'react'
import { twMerge } from 'tailwind-merge'

import { useConvertColor } from '@/hooks/use-convert-color'
import { useLuminance } from '@/hooks/use-luminance'

import { ColorType } from './converter-input'
import { OriginalColorValue } from './converter-section'

interface ConverterOutputProps extends HTMLAttributes<HTMLDivElement> {
  originalColorValue: OriginalColorValue
  isOriginalColorValueValid: boolean
  originalColorType: ColorType
  finalColorType: ColorType
  elementRef: RefObject<HTMLSpanElement>
}

export function ConverterOutput({
  originalColorValue,
  isOriginalColorValueValid,
  originalColorType,
  finalColorType,
  elementRef,
  ...rest
}: ConverterOutputProps) {
  const finalColorValue = useConvertColor({
    color: originalColorValue,
    from: originalColorType,
    to: finalColorType,
  })

  const luminance = useLuminance({
    originalColor: originalColorValue,
    finalColor: finalColorValue,
    from: originalColorType,
    to: finalColorType,
  })

  return (
    <div
      className={twMerge(
        `animate__animated animate__fadeIn flex h-10 w-full max-w-[229.55px] items-center overflow-hidden rounded-md border bg-background outline-foreground transition-all duration-500 ease-out dark:border dark:border-muted dark:outline dark:outline-2 ${isOriginalColorValueValid ? 'px-2' : 'px-0'}`,
        rest.className,
      )}
      style={{
        backgroundColor: isOriginalColorValueValid ? finalColorValue : '',
      }}
    >
      <span
        ref={elementRef}
        className={`text-xs font-light tracking-wide ${luminance > 0.5 ? 'text-foreground dark:text-background' : 'text-background dark:text-foreground'}`}
        id="hex-value"
      >
        {finalColorValue}
      </span>
      {!isOriginalColorValueValid && (
        <div className="flex h-full w-full flex-col items-center gap-1 bg-[repeating-linear-gradient(_145deg,_#fff_6%,_#fff_8%,_#E5E5E5_9%,_#E5E5E5_9%_)] dark:bg-[repeating-linear-gradient(_145deg,_#030712_6%,_#030712_8%,_#E5E5E5_9%,_#E5E5E5_9%_)]"></div>
      )}
    </div>
  )
}
