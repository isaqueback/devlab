import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed z-20 flex h-14 w-full items-center gap-5 border-b border-neutral-200 bg-background px-5">
      <div>DevLab</div>
      <nav className="flex gap-2">
        <Link href="#">HEX</Link>
        <Link href="#">RGBA</Link>
      </nav>
      <div className="ml-auto flex gap-2">
        <div>LANG</div>
        <div>DARK MODE</div>
      </div>
    </header>
  )
}
