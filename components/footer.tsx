import Link from "next/link"

import { siteConfig } from "@/config/site"

import { AvatarLogo } from "./avatar-logo"
import { NavList } from "./nav-list"
import Typography from "./typography"

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-12 py-10 md:flex-row md:items-center md:justify-between md:py-20">
        <div className="flex flex-col gap-6">
          <AvatarLogo />

          <Typography affects="muted">
            Build with ♡ by{" "}
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4 transition-colors hover:text-foreground/90"
            >
              d.
            </Link>
          </Typography>
        </div>

        <div className="order-first flex flex-col gap-6 md:order-none">
          <NavList items={siteConfig.mainNav} variant="footer" />

          <Link
            href={siteConfig.links.artstation}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground/90"
          >
            Artstation
          </Link>
        </div>
      </div>
    </footer>
  )
}
