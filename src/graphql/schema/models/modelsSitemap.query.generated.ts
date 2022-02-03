import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsSitemapQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ModelsSitemapQuery = { models?: Array<{ slug: string, updatedAt: any } | null | undefined> | null | undefined };


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
      variables === undefined ? ['modelsSitemap'] : ['modelsSitemap', variables],
      fetcher<ModelsSitemapQuery, ModelsSitemapQueryVariables>(ModelsSitemapDocument, variables),
      options
    );
export const useInfiniteModelsSitemapQuery = <
      TData = ModelsSitemapQuery,
      TError = unknown
    >(
      variables?: ModelsSitemapQueryVariables,
      options?: UseInfiniteQueryOptions<ModelsSitemapQuery, TError, TData>
    ) =>
    useInfiniteQuery<ModelsSitemapQuery, TError, TData>(
      variables === undefined ? ['modelsSitemap.infinite'] : ['modelsSitemap.infinite', variables],
      (metaData) => fetcher<ModelsSitemapQuery, ModelsSitemapQueryVariables>(ModelsSitemapDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
