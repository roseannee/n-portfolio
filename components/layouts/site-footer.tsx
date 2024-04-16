import Link from "next/link"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"

import { Typography, typographyVariants } from "../ui/typography"
import { NavList } from "./nav-list"

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container flex flex-col gap-12 py-5 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4">
          <Typography variant="h4" className="font-logo !font-extralight">
            wiramondi / 3d
          </Typography>

          <Typography variant="muted">
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

        <div className="order-first flex flex-col gap-6 md:order-none md:gap-4">
          <NavList items={siteConfig.mainNav} variant="footer" />

          <div className="flex flex-col justify-end gap-2 *:w-max md:flex-row md:items-center md:gap-4">
            <Typography variant="muted">
              21-500 Biała Podlaska, Polska
            </Typography>

            <Link
              href={`mailto:${siteConfig.links.mail}`}
              className={cn(
                typographyVariants({ variant: "muted" }),
                "transition-colors hover:text-foreground/90"
              )}
            >
              {siteConfig.links.mail}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
