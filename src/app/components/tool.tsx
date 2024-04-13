'use client'

import { Sparkles } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { useTranslation } from '@/i18n/client'

interface ToolProps {
  imgSrc: string
  href: string
  title: string
  description: string
  isNew: boolean
  idx: number
}

export function Tool({
  description,
  href,
  imgSrc,
  isNew,
  title,
  idx,
}: ToolProps) {
  const [imagesLoaded, setImagesLoaded] = useState(
    {} as Record<number, boolean>,
  )

  const handleImageLoaded = (idx: number) => {
    setImagesLoaded((prev) => ({ ...prev, [idx]: true }))
  }

  const { t } = useTranslation('pages')

  return (
    <Link key={idx} className="group" href={href}>
      <Card className="flex w-full max-w-[350px] flex-col gap-2 border-2 p-2 shadow-sm transition-all duration-300 ease-out hover:shadow-md hover:shadow-neutral-300 dark:border-ring dark:hover:shadow-lg dark:hover:shadow-ring">
        <CardFooter className="mx-2 flex cursor-pointer justify-between p-0">
          <div className="flex items-center justify-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground"></span>
          </div>
          {isNew && (
            <strong className="flex animate-pulse items-center justify-center gap-1 font-mono text-xs font-medium text-emerald-300">
              <Sparkles className="h-3 w-3" />
              {t('home.toolsSection.New')}
            </strong>
          )}
        </CardFooter>
        <CardContent className="h-64 w-full overflow-hidden rounded-sm border-2 p-0 dark:border-ring">
          {!imagesLoaded[idx] && (
            <div className="flex h-full w-full items-center justify-center">
              <Skeleton className="m-auto h-3/5 w-3/4" />
            </div>
          )}
          <Image
            alt={title}
            width={1024}
            height={1024}
            src={imgSrc}
            className={`h-full w-full object-cover transition-all duration-300 ease-out group-hover:scale-105`}
            onLoad={() => {
              handleImageLoaded(idx)
            }}
          />
        </CardContent>
        <CardHeader className="mt-3 pt-0">
          <CardTitle className="text-xl group-hover:underline">
            {title}
          </CardTitle>
          <CardDescription className="text-sm">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  )
}
