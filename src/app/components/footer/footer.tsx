import { Github, Heart, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="relative z-10 mt-10 flex w-full max-w-[calc(100vw-212.5px)] flex-col items-center gap-1 rounded-sm border border-b-0 border-r-background bg-background pb-2 pt-5 text-muted-foreground">
      <p className="flex translate-x-[106.25px] items-center justify-center font-mono text-xs tracking-tighter">
        <span>This site was developed with</span>
        <Heart className="mx-1 h-3 w-3 fill-destructive text-destructive" />
        <span>by Isaque Delfino</span>
      </p>
      <div className="flex translate-x-[106.25px] justify-center gap-2">
        <Link
          target="_blank"
          href="https://github.com/isaqueback"
          className="transition-all duration-300 ease-out hover:text-foreground"
        >
          <Github className="h-3 w-3" />
        </Link>
        <Link
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
