import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GalleriesSitemapQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GalleriesSitemapQuery = { galleries?: Array<{ slug?: string | null | undefined, updatedAt: any } | null | undefined> | null | undefined };


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
export const useInfiniteGalleriesSitemapQuery = <
      TData = GalleriesSitemapQuery,
      TError = unknown
    >(
      variables?: GalleriesSitemapQueryVariables,
      options?: UseInfiniteQueryOptions<GalleriesSitemapQuery, TError, TData>
    ) =>
    useInfiniteQuery<GalleriesSitemapQuery, TError, TData>(
      variables === undefined ? ['galleriesSitemap.infinite'] : ['galleriesSitemap.infinite', variables],
      (metaData) => fetcher<GalleriesSitemapQuery, GalleriesSitemapQueryVariables>(GalleriesSitemapDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
