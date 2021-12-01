import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GalleriesSitemapQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GalleriesSitemapQuery = { __typename?: 'Query', galleries?: Array<{ __typename?: 'Gallery', slug?: string | null | undefined, updatedAt: any } | null | undefined> | null | undefined };


export const GalleriesSitemapDocument = `
    query galleriesSitemap {
  galleries {
    slug
    updatedAt
  }
}
    `;
export const useGalleriesSitemapQuery = <
      TData = GalleriesSitemapQuery,
      TError = unknown
    >(
      variables?: GalleriesSitemapQueryVariables,
      options?: UseQueryOptions<GalleriesSitemapQuery, TError, TData>
    ) =>
    useQuery<GalleriesSitemapQuery, TError, TData>(
      variables === undefined ? ['galleriesSitemap'] : ['galleriesSitemap', variables],
      fetcher<GalleriesSitemapQuery, GalleriesSitemapQueryVariables>(GalleriesSitemapDocument, variables),
      options
    );