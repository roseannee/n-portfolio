"use client"

import Image from "next/image"
import Link from "next/link"
import octopus from "@/public/octopus.png"
import { m } from "framer-motion"

import { siteConfig } from "@/config/site"
import { opacityVariants } from "@/lib/framer-variants"

const MLink = m(Link)

export function ImageCol() {
  return (
    <MLink
      initial="hidden"
      animate="visible"
      variants={opacityVariants}
      href={siteConfig.links.artstation}
      target="_blank"
      rel="noreferrer"
      className="relative order-first size-60 animate-blob cursor-help rounded-blob md:size-72 lg:order-none lg:size-96"
    >
      <Image
        src={octopus.src}
        alt="Octopus"
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        className="animate-blob rounded-blob object-cover shadow-blob"
      />
    </MLink>
  )
}
