import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GardensQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GardensQuery = { __typename?: `Query` } & {
  gardens?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: `Gardens` } & Pick<
          Types.Gardens,
          `title` | `contents` | `slug` | `id` | `_id`
        > & { createdAt: Types.Gardens[`updatedAt`] }
      >
    >
  >;
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
    [`Gardens`, variables],
    fetcher<GardensQuery, GardensQueryVariables>(GardensDocument, variables),
    options
  );
