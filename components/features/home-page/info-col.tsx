"use client"

import Link from "next/link"
import { m } from "framer-motion"
import { ReactTyped } from "react-typed"

import { childrenVariants, parentVariants } from "@/lib/framer-variants"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import { Icons } from "@/components/shared/icons"

const MTypography = m(Typography)

export function InfoCol() {
  return (
    <m.div
      initial="hidden"
      animate="visible"
      variants={parentVariants()}
      className="flex w-full flex-col space-y-4"
    >
      <Typography variant="h1" asChild className="md:text-center lg:text-left">
        <ReactTyped
          strings={[
            "3D Artist",
            "3D Character Artist",
            "3D Environment Artist",
            "And nice dude",
          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
        />
      </Typography>

      <MTypography
        variants={childrenVariants}
        className="md:text-pretty lg:text-balance"
      >
        Hi, I&apos;m Name Surname. A passionate 3D artist from Ukraine currently
        based in Biała Podlaska, Poland. I would be glad to work together.
      </MTypography>

      <m.div
        variants={childrenVariants}
        className="flex flex-col items-center gap-4 md:flex-row md:*:w-full lg:*:w-auto"
      >
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ size: "lg" }),
            "w-full min-w-max gap-2 md:w-auto"
          )}
        >
          My projects <Icons.projects />
        </Link>

        <div className="flex w-full items-center md:gap-4 md:*:grow">
          <Link
            href="/contact"
            className={cn(
              buttonVariants({ variant: "secondary", size: "lg" }),
              "flex-1 gap-2 md:flex-none"
            )}
          >
            Contact me <Icons.send />
          </Link>

          <Link
            href="https://drive.google.com/file/d/1yjVocEWU51WL34agNqaUwF_X7zG_PL2K/view"
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "link" }),
              // TODO add space before arrow
              "after:content-['_↗']"
            )}
          >
            Resume <span className="pr-1"></span>
          </Link>
        </div>
      </m.div>
    </m.div>
  )
}
