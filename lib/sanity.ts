import { q, sanityImage, TypeFromSelection, z, type Selection } from "groqd"

export const portfolioCollectionsSelection = {
  title: q.string(),
  slug: q.slug("slug"),
  coverImage: sanityImage("coverImage"),
} satisfies Selection

export type PortfolioCollectionsData = TypeFromSelection<
  typeof portfolioCollectionsSelection
>

export const collectionSelection = {
  title: q.string(),
  models: q.array(z.any()).optional(),
} satisfies Selection

export type CollectionData = TypeFromSelection<typeof collectionSelection>

export const collectionImagesSelection = {
  images: sanityImage("images", { isList: true }),
} satisfies Selection

export type CollectionImagesData = TypeFromSelection<
  typeof collectionImagesSelection
>

export const collectionLinksSelection = {
  links: q.array(z.string()),
} satisfies Selection

export type CollectionLinksData = TypeFromSelection<
  typeof collectionLinksSelection
>
