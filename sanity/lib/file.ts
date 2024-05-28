import { getFile } from "@sanity/asset-utils"

import { dataset, projectId } from "../env"

// FIXME any
export const urlForPath = (source: any) => {
  return getFile(source, {
    projectId: projectId,
    dataset: dataset,
  }).asset.url
}
