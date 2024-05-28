import { visionTool } from "@sanity/vision"
import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId } from "./sanity/env"
import { schema } from "./sanity/schema"

const config = defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  title: "n-portfolio",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
})

export default config
