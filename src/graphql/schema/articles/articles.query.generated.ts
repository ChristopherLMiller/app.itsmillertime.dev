import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticlesQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ArticlesQuery = { articles?: Array<{ id: string, _id: string, createdAt: any, updatedAt: any, title: string, content: string, slug: string, published_at?: any | null, seo?: { id: string, title: string, description?: string | null, featured_image?: { name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null } | null, article_tags?: Array<{ id: string, slug: string, title: string } | null> | null } | null> | null, articlesConnection?: { aggregate?: { totalCount?: number | null, count?: number | null } | null } | null };


export const ArticlesDocument = `
    query Articles($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  articles(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    id
    _id
    createdAt
    updatedAt
    title
    content
    slug
    seo {
      id
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
    published_at
    article_tags {
      id
      slug
      title
    }
  }
  articlesConnection {
    aggregate {
      totalCount
      count
    }
  }
}
    `;
export const useArticlesQuery = <
      TData = ArticlesQuery,
      TError = unknown
    >(
      variables?: ArticlesQueryVariables,
      options?: UseQueryOptions<ArticlesQuery, TError, TData>
    ) =>
    useQuery<ArticlesQuery, TError, TData>(
      variables === undefined ? ['Articles'] : ['Articles', variables],
      fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, variables),
      options
    );
export const useInfiniteArticlesQuery = <
      TData = ArticlesQuery,
      TError = unknown
    >(
      variables?: ArticlesQueryVariables,
      options?: UseInfiniteQueryOptions<ArticlesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<ArticlesQuery, TError, TData>(
      variables === undefined ? ['Articles.infinite'] : ['Articles.infinite', variables],
      (metaData) => fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
