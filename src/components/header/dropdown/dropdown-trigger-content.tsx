import { HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownTriggerContentProps extends HTMLAttributes<HTMLElement> {
  content: string
}

export function DropdownTriggerContent({
  content,
  ...rest
}: DropdownTriggerContentProps) {
  return (
    <span
      {...rest}
      className={twMerge(
        'transition-all duration-300 ease-out group-hover:text-ring',
        rest.className,
      )}
    >
      {content}
    </span>
  )
}
