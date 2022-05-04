import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ModelsQuery = { models?: Array<{ _id: string, id: string, createdAt: any, updatedAt: any, title?: string | null, slug: string, content?: string | null, completed?: boolean | null, kit_number?: string | null, year_released?: number | null, clockify_project_id?: string | null, scalemates_link?: string | null, completed_at?: any | null, youtube_video?: string | null, status?: Types.Enum_Model_Status | null, published_at?: any | null, scale?: { name?: string | null, slug?: string | null } | null, manufacturer?: { slug: string, name?: string | null } | null, model_tags?: Array<{ name?: string | null, slug?: string | null } | null> | null, SEO?: { title: string, description?: string | null, featured_image?: { name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null } | null, sharing?: { facebook?: boolean | null, twitter?: boolean | null, instagram?: boolean | null } | null, images?: Array<{ name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null> | null } | null> | null };


export const ModelsDocument = `
    query Models($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  models(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    _id
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
export const useModelsQuery = <
      TData = ModelsQuery,
      TError = unknown
    >(
      variables?: ModelsQueryVariables,
      options?: UseQueryOptions<ModelsQuery, TError, TData>
    ) =>
    useQuery<ModelsQuery, TError, TData>(
      variables === undefined ? ['Models'] : ['Models', variables],
      fetcher<ModelsQuery, ModelsQueryVariables>(ModelsDocument, variables),
      options
    );
export const useInfiniteModelsQuery = <
      TData = ModelsQuery,
      TError = unknown
    >(
      variables?: ModelsQueryVariables,
      options?: UseInfiniteQueryOptions<ModelsQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<ModelsQuery, TError, TData>(
      variables === undefined ? ['Models.infinite'] : ['Models.infinite', variables],
      (metaData) => fetcher<ModelsQuery, ModelsQueryVariables>(ModelsDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
