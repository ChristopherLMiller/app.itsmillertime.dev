import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticlesSeoQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ArticlesSeoQuery = { articles?: Array<{ id: string, slug: string, seo?: { title: string, description?: string | null, featured_image?: { name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null } | null } | null> | null };


export const ArticlesSeoDocument = `
    query ArticlesSeo($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  articles(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    id
    slug
    seo {
      title
      description
      featured_image {
        name
        alternativeText
        caption
        width
        height
        url
        previewUrl
        provider
        provider_metadata
      }
    }
  }
}
    `;
export const useArticlesSeoQuery = <
      TData = ArticlesSeoQuery,
      TError = unknown
    >(
      variables?: ArticlesSeoQueryVariables,
      options?: UseQueryOptions<ArticlesSeoQuery, TError, TData>
    ) =>
    useQuery<ArticlesSeoQuery, TError, TData>(
      variables === undefined ? ['ArticlesSeo'] : ['ArticlesSeo', variables],
      fetcher<ArticlesSeoQuery, ArticlesSeoQueryVariables>(ArticlesSeoDocument, variables),
      options
    );
export const useInfiniteArticlesSeoQuery = <
      TData = ArticlesSeoQuery,
      TError = unknown
    >(
      variables?: ArticlesSeoQueryVariables,
      options?: UseInfiniteQueryOptions<ArticlesSeoQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<ArticlesSeoQuery, TError, TData>(
      variables === undefined ? ['ArticlesSeo.infinite'] : ['ArticlesSeo.infinite', variables],
      (metaData) => fetcher<ArticlesSeoQuery, ArticlesSeoQueryVariables>(ArticlesSeoDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
