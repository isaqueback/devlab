import Link from 'next/link'

import { useTranslationServer } from '@/hooks/use-translation/use-translation-server'

import { CircleDesign } from './components/circle-design'
import { PageScrollIndicator } from './components/page-scroll-indicator'

export default function Home() {
  const { t } = useTranslationServer()

  return (
    <main className="flex h-screen w-screen justify-center overflow-hidden">
      <section className="relative flex h-screen w-full max-w-screen-md flex-col items-center justify-center gap-4">
        <CircleDesign />
        <h1 className="animate__animated animate__fadeIn text-center text-5xl font-black max-sm:text-4xl max-xs:text-3xl">
          {t.pages.home.heroSection['Welcome to DevLab: Your Laboratory of']}{' '}
          <strong className="text-ring">
            {t.pages.home.heroSection.Design}
          </strong>{' '}
          <span>{t.pages.home.heroSection.and} </span>
          <strong className="text-ring">{t.pages.home.heroSection.CSS}</strong>
        </h1>
        <p className="animate__animated animate__fadeInUp text-center text-lg text-muted-foreground max-xs:text-base">
          {
            t.pages.home.heroSection[
              'At DevLab, we elevate your design and frontend development with a versatile suite of tools, designed to ease and inspire your creativity.'
            ]
          }
        </p>

        <Link
          href="#"
          className="animate__animated animate__fadeIn absolute bottom-0 flex flex-col items-center gap-1"
        >
          <span className="text-sm tracking-tighter">
            {t.pages.home.heroSection['View tools']}
          </span>
          <PageScrollIndicator />
        </Link>
      </section>
    </main>
  )
}
