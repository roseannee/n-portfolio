import { Metadata } from "next"
import Link from "next/link"

import { siteConfig } from "@/config/site"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContactForm } from "@/components/features/contact-page/contact-form"
import { ImagesSlider } from "@/components/features/contact-page/images-slider"

export const metadata: Metadata = {
  title: siteConfig.pages.contact,
}

const images = [
  "/temporary/1.png",
  "/temporary/2.png",
  "/temporary/3.png",
  "/temporary/4.png",
  "/temporary/5.png",
]

export default function ContactPage() {
  return (
    // <ImagesSlider images={images}>
    <section className="container flex min-h-screen-with-header items-center justify-center py-6 md:py-10">
      <Card className="sm:w-4/5 md:w-1/2 lg:w-2/5 xl:w-1/3">
        <CardHeader>
          <CardTitle>Contact me</CardTitle>
          <CardDescription className="text-balance">
            If you are interested in my work, you can fill out this form or
            write directly at{" "}
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
      </Card>
    </section>
    // </ImagesSlider>
  )
}
