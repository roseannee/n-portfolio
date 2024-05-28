import { notFound } from "next/navigation"
import { runQuery } from "@/sanity/lib/fetch"
import { q } from "groqd"

import {
  collectionImagesSelection,
  collectionLinksSelection,
  collectionSelection,
  portfolioCollectionsSelection,
} from "./sanity"

export const getPortfolioCollections = async () => {
  try {
    const collections = await runQuery(
      q(`*[_type == "portfolioCollections"]`, { isArray: true })
        .grab$(portfolioCollectionsSelection)
        // FIXME update order
        .order("title")
    )

    return collections
  } catch (error) {
    console.error(error)
    // TODO add notFound page
    return notFound()
  }
}

export const getCollectionData = async (slug: string) => {
  try {
    const query = q(
      `*[_type == "portfolioCollections" && slug.current == '${slug}'][0]`
    )

    const { title, models } = await runQuery(query.grab$(collectionSelection))
    const { images } = await runQuery(query.grab$(collectionImagesSelection))
    const { links } = await runQuery(query.grab$(collectionLinksSelection))

    return { title, models, images, links }
  } catch (error) {
    console.error(error)
    // TODO not found
    return notFound()
  }
}
