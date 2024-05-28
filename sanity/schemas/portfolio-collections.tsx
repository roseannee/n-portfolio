import { defineArrayMember, defineField } from "sanity"

export const portfolioCollections = {
  type: "document",
  name: "portfolioCollections",
  title: "Portfolio Collections",
  fields: [
    defineField({
      name: "title",
      type: "string",
      title: "Collection Name",
    }),
    defineField({
      name: "slug",
      type: "slug",
      title: "Slug",
      options: {
        source: "title",
      },
    }),
    defineField({
      name: "coverImage",
      type: "image",
      title: "Cover Image",
    }),
    defineField({
      name: "models",
      type: "array",
      title: "Models",
      of: [defineArrayMember({ type: "file" })],
    }),
    defineField({
      name: "images",
      type: "array",
      title: "Models Cover Images",
      of: [defineArrayMember({ type: "image" })],
    }),
    defineField({
      name: "links",
      type: "array",
      title: "Models' links on ArtStation",
      of: [defineArrayMember({ type: "url" })],
    }),
  ],
}
