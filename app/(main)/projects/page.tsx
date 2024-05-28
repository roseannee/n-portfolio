import { Metadata } from "next"

import { siteConfig } from "@/config/site"
import { getPortfolioCollections } from "@/lib/data"
import { AnimatedTitle } from "@/components/features/projects-page/animated-title"
import { Collections } from "@/components/features/projects-page/collections"

export const metadata: Metadata = {
  title: siteConfig.pages.projects,
}

export default async function ProjectsPage() {
  const collections = await getPortfolioCollections()

  return (
    <section className="container flex min-h-screen-with-header flex-col space-y-10 py-6 md:py-10">
      <AnimatedTitle />

      {/* TODO suspense? */}
      <Collections collections={collections} />
    </section>
  )
}
