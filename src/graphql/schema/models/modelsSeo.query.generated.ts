import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsSeoQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ModelsSeoQuery = { __typename?: 'Query', models?: Array<{ __typename?: 'Model', id: string, slug: string, SEO?: { __typename?: 'ComponentGlobalSeo', title: string, description?: string | null | undefined, featured_image?: { __typename?: 'UploadFile', name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined } | null | undefined } | null | undefined> | null | undefined };


export const ModelsSeoDocument = `
    query ModelsSeo($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  models(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    id
    slug
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
  }
}
    `;
export const useModelsSeoQuery = <
      TData = ModelsSeoQuery,
      TError = unknown
    >(
      variables?: ModelsSeoQueryVariables,
      options?: UseQueryOptions<ModelsSeoQuery, TError, TData>
    ) =>
    useQuery<ModelsSeoQuery, TError, TData>(
      variables === undefined ? ['ModelsSeo'] : ['ModelsSeo', variables],
      fetcher<ModelsSeoQuery, ModelsSeoQueryVariables>(ModelsSeoDocument, variables),
      options
    );