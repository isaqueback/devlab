import { LiHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownContentItemProps extends LiHTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function DropdownContentItem({
  children,
  ...rest
}: DropdownContentItemProps) {
  return (
    <li
      {...rest}
      className={twMerge(
        'cursor-pointer rounded-sm px-2 py-1 text-sm transition-all duration-300 ease-out hover:bg-purple-500/50',
        rest.className,
      )}
    >
      {children}
    </li>
  )
}
