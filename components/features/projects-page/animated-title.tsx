"use client"

import { m } from "framer-motion"

import { fadeFromBottomVariants } from "@/lib/framer-variants"
import { Typography } from "@/components/ui/typography"

const MTypography = m(Typography)

// TODO maybe component?
export function AnimatedTitle() {
  return (
    <MTypography
      initial="hidden"
      animate="visible"
      variants={fadeFromBottomVariants}
      variant="h1"
    >
      My projects
    </MTypography>
  )
}
