'use client'

import * as SwitchPrimitives from '@radix-ui/react-switch'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import * as React from 'react'

import { useTranslationClient } from '@/hooks/use-translation/use-translation-client'
import { cn } from '@/lib/utils'

const DarkModeSwitch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => {
  const { setTheme, theme } = useTheme()
  const [isClient, setIsClient] = React.useState(false)
  const { t } = useTranslationClient()

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const isDarkMode = isClient && theme === 'dark'

  const handleSwitchDarkMode = (isChecked: boolean) => {
    isChecked ? setTheme('dark') : setTheme('light')
  }
  return (
    <SwitchPrimitives.Root
      title={
        isDarkMode
          ? t?.header['Dark mode'] ?? ''
          : t?.header['Light mode'] ?? ''
      }
      checked={isDarkMode}
      className={cn(
        'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border border-neutral-400 transition-colors hover:border-purple-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-background data-[state=unchecked]:bg-input',
        className,
      )}
      {...props}
      ref={ref}
      onCheckedChange={handleSwitchDarkMode}
    >
      <SwitchPrimitives.Thumb
        className={cn(
          'group pointer-events-none flex h-5 w-5 items-center justify-center rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0 dark:bg-black',
        )}
      >
        <Moon className="h-3.5 w-3.5 text-muted-foreground group-data-[state=unchecked]:hidden dark:text-foreground" />
        <Sun className="h-3.5 w-3.5 text-muted-foreground group-data-[state=checked]:hidden" />
      </SwitchPrimitives.Thumb>
    </SwitchPrimitives.Root>
  )
})
DarkModeSwitch.displayName = SwitchPrimitives.Root.displayName

export { DarkModeSwitch }
