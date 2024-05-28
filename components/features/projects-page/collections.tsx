"use client"

import Link from "next/link"
import { urlForImage } from "@/sanity/lib/image"
import { m } from "framer-motion"

import { childrenVariants, parentVariants } from "@/lib/framer-variants"
import { PortfolioCollectionsData } from "@/lib/sanity"
import { buttonVariants } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"

import { CardDesktop } from "./card-desktop"
import { CardMobile } from "./card-mobile"

type CollectionsProps = {
  collections: PortfolioCollectionsData[]
}

export function Collections({ collections }: CollectionsProps) {
  return (
    <m.div
      initial="hidden"
      animate="visible"
      variants={parentVariants({ delayChildren: 0.3 })}
      className="relative grid items-center justify-between gap-5 xs:grid-cols-2 md:grid-cols-3"
    >
      {collections.map(({ title, slug, coverImage }, index) => (
        <m.div key={`collection-${index}`} variants={childrenVariants}>
          {/* FIXME cleanup */}
          <CardDesktop imageUrl={urlForImage(coverImage).url()}>
            <div className="flex items-center space-x-2">
              <Typography variant="h4">{title}</Typography>

              <Link href={`/projects/${slug}`} className={buttonVariants({})}>
                Learn more
              </Link>
            </div>
          </CardDesktop>
          <CardMobile imageUrl={urlForImage(coverImage).url()}>
            <div className="flex flex-col items-start space-y-2">
              <Typography variant="h4">{title}</Typography>

              <Link href={`/projects/${slug}`} className={buttonVariants({})}>
                Learn more
              </Link>
            </div>
          </CardMobile>
        </m.div>
      ))}
    </m.div>
  )
}
