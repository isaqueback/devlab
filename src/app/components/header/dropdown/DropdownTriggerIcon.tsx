import { ElementType, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownTriggerIconProps extends HTMLAttributes<SVGAElement> {
  icon: ElementType
}

export function DropdownTriggerIcon({
  icon: Icon,
  ...rest
}: DropdownTriggerIconProps) {
  return (
    <Icon
      {...rest}
      strokeWidth={1.5}
      className={twMerge('font h-5 w-5', rest.className)}
    />
  )
}
