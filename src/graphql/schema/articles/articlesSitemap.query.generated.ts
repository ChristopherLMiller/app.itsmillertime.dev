import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticlesSitemapQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ArticlesSitemapQuery = { articles?: Array<{ slug: string, updatedAt: any } | null> | null };


export const ArticlesSitemapDocument = `
    query articlesSitemap {
  articles {
    slug
    updatedAt
  }
}
    `;
export const useArticlesSitemapQuery = <
      TData = ArticlesSitemapQuery,
      TError = unknown
    >(
      variables?: ArticlesSitemapQueryVariables,
      options?: UseQueryOptions<ArticlesSitemapQuery, TError, TData>
    ) =>
    useQuery<ArticlesSitemapQuery, TError, TData>(
      variables === undefined ? ['articlesSitemap'] : ['articlesSitemap', variables],
      fetcher<ArticlesSitemapQuery, ArticlesSitemapQueryVariables>(ArticlesSitemapDocument, variables),
      options
    );
export const useInfiniteArticlesSitemapQuery = <
      TData = ArticlesSitemapQuery,
      TError = unknown
    >(
      variables?: ArticlesSitemapQueryVariables,
      options?: UseInfiniteQueryOptions<ArticlesSitemapQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<ArticlesSitemapQuery, TError, TData>(
      variables === undefined ? ['articlesSitemap.infinite'] : ['articlesSitemap.infinite', variables],
      (metaData) => fetcher<ArticlesSitemapQuery, ArticlesSitemapQueryVariables>(ArticlesSitemapDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
