import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GardensSitemapQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GardensSitemapQuery = { gardens?: Array<{ slug: string, updatedAt: any } | null | undefined> | null | undefined };


export const GardensSitemapDocument = `
    query gardensSitemap {
  gardens {
    slug
    updatedAt
  }
}
    `;
export const useGardensSitemapQuery = <
      TData = GardensSitemapQuery,
      TError = unknown
    >(
      variables?: GardensSitemapQueryVariables,
      options?: UseQueryOptions<GardensSitemapQuery, TError, TData>
    ) =>
    useQuery<GardensSitemapQuery, TError, TData>(
      variables === undefined ? ['gardensSitemap'] : ['gardensSitemap', variables],
      fetcher<GardensSitemapQuery, GardensSitemapQueryVariables>(GardensSitemapDocument, variables),
      options
    );
export const useInfiniteGardensSitemapQuery = <
      TData = GardensSitemapQuery,
      TError = unknown
    >(
      variables?: GardensSitemapQueryVariables,
      options?: UseInfiniteQueryOptions<GardensSitemapQuery, TError, TData>
    ) =>
    useInfiniteQuery<GardensSitemapQuery, TError, TData>(
      variables === undefined ? ['gardensSitemap.infinite'] : ['gardensSitemap.infinite', variables],
      (metaData) => fetcher<GardensSitemapQuery, GardensSitemapQueryVariables>(GardensSitemapDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
