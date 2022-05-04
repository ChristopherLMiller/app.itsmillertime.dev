import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsMinimalQueryVariables = Types.Exact<{
  sort?: Types.InputMaybe<Types.Scalars['String']>;
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type ModelsMinimalQuery = { models?: Array<{ clockify_project_id?: string | null, published_at?: any | null, title?: string | null, slug: string, kit_number?: string | null, year_released?: number | null, completed?: boolean | null, SEO?: { featured_image?: { provider_metadata?: any | null, width?: number | null, height?: number | null, alternativeText?: string | null } | null } | null, model_tags?: Array<{ slug?: string | null, name?: string | null } | null> | null, manufacturer?: { slug: string, name?: string | null } | null, scale?: { slug?: string | null, name?: string | null } | null } | null> | null, modelsConnection?: { aggregate?: { count?: number | null, totalCount?: number | null } | null } | null };


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
export const useInfiniteModelsMinimalQuery = <
      TData = ModelsMinimalQuery,
      TError = unknown
    >(
      variables?: ModelsMinimalQueryVariables,
      options?: UseInfiniteQueryOptions<ModelsMinimalQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<ModelsMinimalQuery, TError, TData>(
      variables === undefined ? ['ModelsMinimal.infinite'] : ['ModelsMinimal.infinite', variables],
      (metaData) => fetcher<ModelsMinimalQuery, ModelsMinimalQueryVariables>(ModelsMinimalDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
