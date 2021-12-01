import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ModelsQuery = { __typename?: 'Query', models?: Array<{ __typename?: 'Model', _id: string, id: string, createdAt: any, updatedAt: any, title?: string | null | undefined, slug: string, content?: string | null | undefined, completed?: boolean | null | undefined, kit_number?: string | null | undefined, year_released?: number | null | undefined, clockify_project_id?: string | null | undefined, scalemates_link?: string | null | undefined, completed_at?: any | null | undefined, youtube_video?: string | null | undefined, status?: Types.Enum_Model_Status | null | undefined, published_at?: any | null | undefined, scale?: { __typename?: 'Scale', name?: string | null | undefined, slug?: string | null | undefined } | null | undefined, manufacturer?: { __typename?: 'Manufacturer', slug: string, name?: string | null | undefined } | null | undefined, model_tags?: Array<{ __typename?: 'ModelTags', name?: string | null | undefined, slug?: string | null | undefined } | null | undefined> | null | undefined, SEO?: { __typename?: 'ComponentGlobalSeo', title: string, description?: string | null | undefined, featured_image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined } | null | undefined, sharing?: { __typename?: 'ComponentGlobalShare', facebook?: boolean | null | undefined, twitter?: boolean | null | undefined, instagram?: boolean | null | undefined } | null | undefined, images?: Array<{ __typename?: 'UploadFile', name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


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