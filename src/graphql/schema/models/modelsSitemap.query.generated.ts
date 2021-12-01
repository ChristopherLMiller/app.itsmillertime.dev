import { useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "src/lib/fetch";
import * as Types from "../../types";

export type ModelsSitemapQueryVariables = Types.Exact<{ [key: string]: never }>;

export type ModelsSitemapQuery = {
  __typename?: "Query";
  models?:
    | Array<
        | { __typename?: "Model"; slug: string; updatedAt: any }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const ModelsSitemapDocument = `
    query modelsSitemap {
  models {
    slug
    updatedAt
  }
}
    `;
export const useModelsSitemapQuery = <
  TData = ModelsSitemapQuery,
  TError = unknown
>(
  variables?: ModelsSitemapQueryVariables,
  options?: UseQueryOptions<ModelsSitemapQuery, TError, TData>
) =>
  useQuery<ModelsSitemapQuery, TError, TData>(
    variables === undefined ? ["modelsSitemap"] : ["modelsSitemap", variables],
    fetcher<ModelsSitemapQuery, ModelsSitemapQueryVariables>(
      ModelsSitemapDocument,
      variables
    ),
    options
  );
