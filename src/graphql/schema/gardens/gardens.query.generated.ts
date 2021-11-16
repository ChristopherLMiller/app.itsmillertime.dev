import * as Types from "src/graphql/types";

import { useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "src/lib/fetch";
export type GardensQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GardensQuery = {
  __typename?: "Query";
  gardens?:
    | Array<
        | {
            __typename?: "Gardens";
            title: string;
            contents: string;
            slug: string;
            id: string;
            _id: string;
            createdAt: any;
          }
        | null
        | undefined
      >
    | null
    | undefined;
};

export const GardensDocument = `
    query Gardens {
  gardens {
    title
    contents
    slug
    id
    _id
    createdAt: updatedAt
  }
}
    `;
export const useGardensQuery = <TData = GardensQuery, TError = unknown>(
  variables?: GardensQueryVariables,
  options?: UseQueryOptions<GardensQuery, TError, TData>
) =>
  useQuery<GardensQuery, TError, TData>(
    variables === undefined ? ["Gardens"] : ["Gardens", variables],
    fetcher<GardensQuery, GardensQueryVariables>(GardensDocument, variables),
    options
  );
