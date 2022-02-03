import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GardensQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GardensQuery = { gardens?: Array<{ title: string, contents: string, slug: string, id: string, _id: string, createdAt: any } | null | undefined> | null | undefined };


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
export const useGardensQuery = <
      TData = GardensQuery,
      TError = unknown
    >(
      variables?: GardensQueryVariables,
      options?: UseQueryOptions<GardensQuery, TError, TData>
    ) =>
    useQuery<GardensQuery, TError, TData>(
      variables === undefined ? ['Gardens'] : ['Gardens', variables],
      fetcher<GardensQuery, GardensQueryVariables>(GardensDocument, variables),
      options
    );
export const useInfiniteGardensQuery = <
      TData = GardensQuery,
      TError = unknown
    >(
      variables?: GardensQueryVariables,
      options?: UseInfiniteQueryOptions<GardensQuery, TError, TData>
    ) =>
    useInfiniteQuery<GardensQuery, TError, TData>(
      variables === undefined ? ['Gardens.infinite'] : ['Gardens.infinite', variables],
      (metaData) => fetcher<GardensQuery, GardensQueryVariables>(GardensDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
