import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownContentProps extends HTMLAttributes<HTMLElement> {
  side?: 'top' | 'bottom'
  children: ReactNode
}

export function DropdownContent({
  side,
  children,
  ...rest
}: DropdownContentProps) {
  const sideStyle = side === 'top' ? '-translate-y-[130%]' : 'translate-y-0'

  return (
    <ul
      className={twMerge(
        `absolute ${sideStyle} flex flex-col gap-1 rounded-md border bg-background px-1 py-2 opacity-100 shadow-md transition-opacity duration-300 ease-out group-data-[hidden=true]:hidden group-data-[open=false]:opacity-0`,
        rest.className,
      )}
    >
      {children}
    </ul>
  )
}
