import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { AnimatedContactCard } from "@/components/features/contact-page/animated-contact-card"
import { ImagesSlider } from "@/components/features/contact-page/images-slider"

export const metadata: Metadata = {
  title: siteConfig.pages.contact,
}

export default function ContactPage() {
  return (
    // <ImagesSlider images={images}>
    <section className="container flex min-h-screen-with-header items-center justify-center py-6 md:py-10">
      <AnimatedContactCard />
    </section>
    // </ImagesSlider>
  )
}
