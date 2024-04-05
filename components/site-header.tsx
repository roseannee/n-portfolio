"use client"

import { useState } from "react"
import Link from "next/link"
import { m, useMotionValueEvent, useScroll } from "framer-motion"

import { siteConfig } from "@/config/site"
import { headerVariants } from "@/lib/framer-variants"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ThemeToggle } from "@/components/theme-toggle"

import { AvatarLogo } from "./avatar-logo"
import { MobileNav } from "./mobile-nav"
import { NavList } from "./nav-list"

export function SiteHeader() {
  const { scrollY } = useScroll()

  const [hidden, setHidden] = useState(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()

    if (typeof previous === "number") {
      if (latest > previous && latest > 150) {
        setHidden(true)
      } else {
        setHidden(false)
      }
    }
  })

  return (
    <m.header
      animate={hidden ? "hidden" : "visible"}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      variants={headerVariants}
      className="sticky top-0 z-40 w-full border-b bg-background/60 backdrop-blur-sm"
    >
      <div className="container flex h-16 items-center justify-between">
        <AvatarLogo />

        <NavList items={siteConfig.mainNav} />

        <div className="flex items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Link
              href={siteConfig.links.artstation}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants({
                size: "icon",
                variant: "ghost",
              })}
            >
              <Icons.artstation className="size-5" />
              <span className="sr-only">Artstation</span>
            </Link>

            <ThemeToggle />

            <MobileNav items={siteConfig.mainNav} />
          </nav>
        </div>
      </div>
    </m.header>
  )
}
