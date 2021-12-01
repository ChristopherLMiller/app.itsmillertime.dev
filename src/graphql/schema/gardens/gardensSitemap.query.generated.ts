import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GardensSitemapQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GardensSitemapQuery = { __typename?: 'Query', gardens?: Array<{ __typename?: 'Gardens', slug: string, updatedAt: any } | null | undefined> | null | undefined };


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