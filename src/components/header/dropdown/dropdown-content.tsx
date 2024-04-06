import { HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownContentProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function DropdownContent({ children, ...rest }: DropdownContentProps) {
  return (
    <ul
      className={twMerge(
        `absolute -bottom-0 left-2 flex translate-y-full flex-col gap-1 rounded-md border bg-background px-1 py-2 opacity-100 shadow-md transition-opacity duration-300 ease-out group-data-[hidden=true]:hidden group-data-[open=false]:opacity-0`,
        rest.className,
      )}
    >
      {children}
    </ul>
  )
}