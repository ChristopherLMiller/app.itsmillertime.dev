import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticlesSitemapQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type ArticlesSitemapQuery = { __typename?: 'Query', articles?: Array<{ __typename?: 'Article', slug: string, updatedAt: any } | null | undefined> | null | undefined };


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