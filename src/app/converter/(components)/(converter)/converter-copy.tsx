import { BadgeAlert, BadgeCheck } from 'lucide-react'
import { HTMLAttributes } from 'react'

import { Button } from '@/components/ui/button'
import { toast } from '@/components/ui/use-toast'

interface ConverterCopyProps extends HTMLAttributes<HTMLButtonElement> {
  text: string
  handleCopyToClipboard: () => Promise<boolean>
}

export function ConverterCopy({
  text,
  handleCopyToClipboard,
}: ConverterCopyProps) {
  async function handleClickToCopy(
    handleCopyToClipboard: () => Promise<boolean>,
  ) {
    const isCopied = await handleCopyToClipboard()

    if (!isCopied) {
      toast({
        success: false,
        duration: 1000 * 2, // 2s
        variant: 'destructive',
        description: (
          <p className="flex items-center gap-2 font-medium">
            <BadgeAlert className="h-6 w-6" strokeWidth={1.75} /> Falha ao
            copiar a cor!
          </p>
        ),
      })
    } else {
      toast({
        duration: 1000 * 2, // 2s
        success: true,
        description: (
          <p className="flex items-center gap-2 text-neutral-50">
            <BadgeCheck strokeWidth={1.75} className="h-6 w-6" /> Cor copiada
            com sucesso!
          </p>
        ),
      })
    }
  }

  return (
    <Button onClick={() => handleClickToCopy(handleCopyToClipboard)}>
      {text}
    </Button>
  )
}
