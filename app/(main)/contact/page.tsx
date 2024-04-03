import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import Typography from "@/components/typography"

export const metadata: Metadata = {
  title: siteConfig.pages.contact,
}

export default function ContactPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <Typography variant="h1">Contact</Typography>
    </section>
  )
}
