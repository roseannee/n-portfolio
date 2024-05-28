import type { SchemaTypeDefinition } from "sanity"

import { portfolioCollections } from "./schemas/portfolio-collections"

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [portfolioCollections],
}
