import { defineConfig } from "sanity"
import { structureTool } from "sanity/structure"

import { apiVersion, dataset, projectId } from "./sanity/env"

const config = defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  apiVersion,
  title: "n-portfolio",
  plugins: [structureTool()],
})

export default config
