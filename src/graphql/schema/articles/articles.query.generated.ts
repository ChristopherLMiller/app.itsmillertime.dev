import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticlesQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ArticlesQuery = { articles?: Array<{ id: string, _id: string, createdAt: any, updatedAt: any, title: string, content: string, slug: string, published_at?: any | null | undefined, seo?: { id: string, title: string, description?: string | null | undefined, featured_image?: { name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined } | null | undefined, article_tags?: Array<{ id: string, slug: string, title: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


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
    ) =>
    useInfiniteQuery<ArticlesQuery, TError, TData>(
      variables === undefined ? ['Articles.infinite'] : ['Articles.infinite', variables],
      (metaData) => fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
