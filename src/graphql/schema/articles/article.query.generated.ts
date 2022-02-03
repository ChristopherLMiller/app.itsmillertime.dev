import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ArticleQuery = { article?: { id: string, _id: string, createdAt: any, updatedAt: any, title: string, content: string, slug: string, published_at?: any | null | undefined, seo?: { id: string, title: string, description?: string | null | undefined, featured_image?: { name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined } | null | undefined, article_tags?: Array<{ id: string, slug: string, title: string } | null | undefined> | null | undefined } | null | undefined };


export const ArticleDocument = `
    query Article($id: ID!, $publicationState: PublicationState) {
  article(id: $id, publicationState: $publicationState) {
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
export const useArticleQuery = <
      TData = ArticleQuery,
      TError = unknown
    >(
      variables: ArticleQueryVariables,
      options?: UseQueryOptions<ArticleQuery, TError, TData>
    ) =>
    useQuery<ArticleQuery, TError, TData>(
      ['Article', variables],
      fetcher<ArticleQuery, ArticleQueryVariables>(ArticleDocument, variables),
      options
    );
export const useInfiniteArticleQuery = <
      TData = ArticleQuery,
      TError = unknown
    >(
      variables: ArticleQueryVariables,
      options?: UseInfiniteQueryOptions<ArticleQuery, TError, TData>
    ) =>
    useInfiniteQuery<ArticleQuery, TError, TData>(
      ['Article.infinite', variables],
      (metaData) => fetcher<ArticleQuery, ArticleQueryVariables>(ArticleDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
