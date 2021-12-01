import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ArticleQuery = { __typename?: 'Query', article?: { __typename?: 'Article', id: string, _id: string, createdAt: any, updatedAt: any, title: string, content: string, slug: string, published_at?: any | null | undefined, seo?: { __typename?: 'ComponentGlobalSeo', id: string, title: string, description?: string | null | undefined, featured_image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined } | null | undefined, article_tags?: Array<{ __typename?: 'ArticleTags', id: string, slug: string, title: string } | null | undefined> | null | undefined } | null | undefined };


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