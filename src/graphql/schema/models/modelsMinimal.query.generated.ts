import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsMinimalQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ModelsMinimalQuery = { __typename?: 'Query', models?: Array<{ __typename?: 'Model', clockify_project_id?: string | null | undefined, published_at?: any | null | undefined, title?: string | null | undefined, slug: string, kit_number?: string | null | undefined, year_released?: number | null | undefined, completed?: boolean | null | undefined, SEO?: { __typename?: 'ComponentGlobalSeo', featured_image?: { __typename?: 'UploadFile', provider_metadata?: any | null | undefined, width?: number | null | undefined, height?: number | null | undefined, alternativeText?: string | null | undefined } | null | undefined } | null | undefined, model_tags?: Array<{ __typename?: 'ModelTags', slug?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined, manufacturer?: { __typename?: 'Manufacturer', slug: string, name?: string | null | undefined } | null | undefined, scale?: { __typename?: 'Scale', slug?: string | null | undefined, name?: string | null | undefined } | null | undefined } | null | undefined> | null | undefined, modelsConnection?: { __typename?: 'ModelConnection', aggregate?: { __typename?: 'ModelAggregator', count?: number | null | undefined, totalCount?: number | null | undefined } | null | undefined } | null | undefined };


export const ModelsMinimalDocument = `
    query ModelsMinimal($sort: String, $start: Int, $limit: Int, $where: JSON, $publicationState: PublicationState) {
  models(
    sort: $sort
    start: $start
    limit: $limit
    where: $where
    publicationState: $publicationState
  ) {
    SEO {
      featured_image {
        provider_metadata
        width
        height
        alternativeText
      }
    }
    clockify_project_id
    model_tags {
      slug
      name
    }
    published_at
    title
    slug
    manufacturer {
      slug
      name
    }
    scale {
      slug
      name
    }
    kit_number
    year_released
    completed
  }
  modelsConnection {
    aggregate {
      count
      totalCount
    }
  }
}
    `;
export const useModelsMinimalQuery = <
      TData = ModelsMinimalQuery,
      TError = unknown
    >(
      variables?: ModelsMinimalQueryVariables,
      options?: UseQueryOptions<ModelsMinimalQuery, TError, TData>
    ) =>
    useQuery<ModelsMinimalQuery, TError, TData>(
      variables === undefined ? ['ModelsMinimal'] : ['ModelsMinimal', variables],
      fetcher<ModelsMinimalQuery, ModelsMinimalQueryVariables>(ModelsMinimalDocument, variables),
      options
    );