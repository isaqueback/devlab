import { ChevronDown } from 'lucide-react'

export function PageScrollIndicator() {
  return (
    <div className="flex animate-pulse flex-col items-center">
      <div className="flex h-8 w-5 justify-center rounded-full border border-foreground">
        <span className="block h-1.5 w-1 translate-y-1.5 rounded-full border border-foreground"></span>
      </div>
      <ChevronDown
        strokeWidth="1"
        className="h-5 w-5 animate-ping text-foreground"
      />
    </div>
  )
}
