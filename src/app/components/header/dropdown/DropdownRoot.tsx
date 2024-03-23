import { HTMLAttributes, ReactNode, useState } from 'react'
import { twMerge } from 'tailwind-merge'

interface DropdownProps extends HTMLAttributes<HTMLElement> {
  children: ReactNode
}

export function DropdownRoot({ children, ...rest }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isHidden, setIsHidden] = useState(true)

  const handleMouseEnter = () => {
    setIsHidden(false)
    setTimeout(() => setIsOpen(true), 25)
  }
  const handleMouseLeave = () => {
    setIsOpen(false)
    setTimeout(() => setIsHidden(true), 200)
  }

  const handleClick = () => {
    if (isOpen) {
      setIsOpen(false)
      setTimeout(() => setIsHidden(true), 500)
    } else {
      setIsHidden(false)
      setTimeout(() => setIsOpen(true), 25)
    }
  }

  return (
    <div
      {...rest}
      className={twMerge('group relative', rest.className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      data-open={isOpen}
      data-hidden={isHidden}
    >
      {children}
    </div>
  )
}
