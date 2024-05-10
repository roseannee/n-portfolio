"use client"

import Link from "next/link"
import { m } from "framer-motion"

import { siteConfig } from "@/config/site"
import { fadeFromBottomVariants } from "@/lib/framer-variants"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContactForm } from "@/components/features/contact-page/contact-form"

const MCard = m(Card)

export function AnimatedContactCard() {
  return (
    <MCard
      initial="hidden"
      animate="visible"
      variants={fadeFromBottomVariants}
      className="sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3"
    >
      <CardHeader>
        <CardTitle>Contact me</CardTitle>
        <CardDescription className="text-balance">
          If you are interested in my work, you can fill out this form or write
          directly at{" "}
          <Link
            href={`mailto:${siteConfig.links.mail}`}
            className="underline underline-offset-4 transition-colors hover:text-foreground"
          >
            {siteConfig.links.mail}
          </Link>
        </CardDescription>
      </CardHeader>

      <CardContent>
        <ContactForm />
      </CardContent>
    </MCard>
  )
}
