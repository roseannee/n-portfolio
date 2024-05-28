import { makeSafeQueryRunner } from "groqd"
import type { QueryParams } from "next-sanity"

import { useCdn } from "../env"
import { client } from "./client"

export async function sanityFetch<QueryResponse>({
  query,
  params,
  cache,
}: {
  query: string
  params?: QueryParams
  cache?: RequestCache
}): Promise<QueryResponse> {
  // @ts-expect-error
  return client.fetch<QueryResponse>(query, params, {
    cache: cache ?? "force-cache",
    useCdn: useCdn,
  })
}

export const runQuery = makeSafeQueryRunner(
  (query: string, params?: QueryParams, cache?: RequestCache) =>
    sanityFetch({ query, params, cache })
)
