import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticleQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ArticleQuery = { article?: { id: string, _id: string, createdAt: any, updatedAt: any, title: string, content: string, slug: string, published_at?: any | null, seo?: { id: string, title: string, description?: string | null, featured_image?: { name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null } | null, article_tags?: Array<{ id: string, slug: string, title: string } | null> | null } | null };


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
    ) =>{
    
    return useInfiniteQuery<ArticleQuery, TError, TData>(
      ['Article.infinite', variables],
      (metaData) => fetcher<ArticleQuery, ArticleQueryVariables>(ArticleDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
