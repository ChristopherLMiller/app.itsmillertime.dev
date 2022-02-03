import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ModelQuery = { model?: { id: string, createdAt: any, updatedAt: any, title?: string | null | undefined, slug: string, content?: string | null | undefined, completed?: boolean | null | undefined, kit_number?: string | null | undefined, year_released?: number | null | undefined, clockify_project_id?: string | null | undefined, scalemates_link?: string | null | undefined, completed_at?: any | null | undefined, youtube_video?: string | null | undefined, status?: Types.Enum_Model_Status | null | undefined, published_at?: any | null | undefined, scale?: { name?: string | null | undefined, slug?: string | null | undefined } | null | undefined, manufacturer?: { slug: string, name?: string | null | undefined } | null | undefined, model_tags?: Array<{ name?: string | null | undefined, slug?: string | null | undefined } | null | undefined> | null | undefined, SEO?: { title: string, description?: string | null | undefined, featured_image?: { name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined } | null | undefined, sharing?: { facebook?: boolean | null | undefined, twitter?: boolean | null | undefined, instagram?: boolean | null | undefined } | null | undefined, images?: Array<{ name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined };


export const ModelDocument = `
    query Model($id: ID!, $publicationState: PublicationState) {
  model(id: $id, publicationState: $publicationState) {
    id
    createdAt
    updatedAt
    title
    slug
    content
    completed
    kit_number
    year_released
    clockify_project_id
    scalemates_link
    scale {
      name
      slug
    }
    manufacturer {
      slug
      name
    }
    completed_at
    youtube_video
    status
    published_at
    model_tags {
      name
      slug
    }
    SEO {
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
    sharing {
      facebook
      twitter
      instagram
    }
    images {
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
    `;
export const useModelQuery = <
      TData = ModelQuery,
      TError = unknown
    >(
      variables: ModelQueryVariables,
      options?: UseQueryOptions<ModelQuery, TError, TData>
    ) =>
    useQuery<ModelQuery, TError, TData>(
      ['Model', variables],
      fetcher<ModelQuery, ModelQueryVariables>(ModelDocument, variables),
      options
    );
export const useInfiniteModelQuery = <
      TData = ModelQuery,
      TError = unknown
    >(
      variables: ModelQueryVariables,
      options?: UseInfiniteQueryOptions<ModelQuery, TError, TData>
    ) =>
    useInfiniteQuery<ModelQuery, TError, TData>(
      ['Model.infinite', variables],
      (metaData) => fetcher<ModelQuery, ModelQueryVariables>(ModelDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
