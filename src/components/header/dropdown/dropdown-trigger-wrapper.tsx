import { ChevronDown } from 'lucide-react'
import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownTriggerWrapper extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function DropdownTriggerWrapper({
  children,
  ...rest
}: DropdownTriggerWrapper) {
  return (
    <div
      className={twMerge(
        'relative flex cursor-pointer items-center gap-1 p-2',
        rest.className,
      )}
    >
      {children}
      <ChevronDown
        strokeWidth={1.5}
        className="h-4 w-4 transition-all duration-300 ease-out group-hover:text-ring"
      />
    </div>
  )
}
