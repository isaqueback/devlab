'use client'

import Cookie from 'js-cookie'
import { useEffect, useState } from 'react'

import { Button } from '@/components/ui/button'
import { useTranslation } from '@/i18n/client'

export function ConsentCookieContainer() {
  const [consentCookie, setConsentCookie] = useState('true')
  const { t } = useTranslation('pages')

  useEffect(() => {
    const cookie = Cookie.get('consentCookie')

    setConsentCookie(cookie || 'false')
  }, [])

  const handleAcceptCookies = () => {
    const twoYearsFromNow = new Date()
    twoYearsFromNow.setFullYear(twoYearsFromNow.getFullYear() + 2)

    if (consentCookie !== 'true') {
      Cookie.set('consentCookie', 'true', { expires: twoYearsFromNow })
      setConsentCookie('true')
    }
  }

  return (
    consentCookie !== 'true' && (
      <div className="fixed bottom-0 left-1/2 z-10 mb-2 flex -translate-x-1/2 items-center justify-center gap-2 rounded-sm bg-foreground p-2.5 dark:bg-foreground">
        <strong className="text-xs text-neutral-100 dark:text-neutral-600">
          {t('home.We use cookies')}
        </strong>
        <Button
          size="sm"
          className="h-auto w-auto bg-emerald-500 px-2.5 py-1 text-xs hover:bg-emerald-500/85 dark:text-foreground"
          onClick={handleAcceptCookies}
        >
          {t('home.OK')}
        </Button>
      </div>
    )
  )
}
