import { MobileHeader } from './mobile-header'
import { NonMobileHeader } from './non-mobile-header'

export function Header() {
  return (
    <header>
      <NonMobileHeader />
      <MobileHeader />
    </header>
  )
}
