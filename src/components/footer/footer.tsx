import { Github, Heart, Linkedin } from 'lucide-react'
import Link from 'next/link'

import { createTranslation } from '@/i18n/server'

export async function Footer() {
  const { t } = await createTranslation('footer')

  return (
    <footer className="relative z-10 flex w-full flex-col items-center justify-center gap-1 rounded-sm border border-b-0 border-r-background bg-background pb-2 pt-5 text-muted-foreground sm:max-w-[calc(100vw-212.5px)]">
      <p className="flex items-center justify-center font-mono text-xs tracking-tighter sm:translate-x-[106.25px]">
        <span>{t('This site was developed with')}</span>
        <Heart className="mx-1 h-3 w-3 fill-destructive text-destructive" />
        <span>{t('by Isaque Delfino')}</span>
      </p>
      <div className="flex justify-center gap-2 sm:translate-x-[106.25px]">
        <Link
          title="GitHub"
          target="_blank"
          href="https://github.com/isaqueback"
          className="transition-all duration-300 ease-out hover:text-foreground"
        >
          <Github className="h-3 w-3" />
        </Link>
        <Link
          title="LinkedIn"
          target="_blank"
          href="https://linkedin.com/in/isaqueback"
          className="transition-all duration-300 ease-out hover:text-foreground"
        >
          <Linkedin className="h-3 w-3" />
        </Link>
      </div>
    </footer>
  )
}
