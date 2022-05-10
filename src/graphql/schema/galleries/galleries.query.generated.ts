import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GalleriesQueryVariables = Types.Exact<{
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  sort: Types.Scalars['String'];
}>;


export type GalleriesQuery = { galleries?: Array<{ id: string, createdAt: any, updatedAt: any, title?: string | null, slug?: string | null, status: Types.Enum_Gallery_Status, featured_image?: { provider_metadata?: any | null } | null, gallery_categories?: Array<{ id: string, slug?: string | null, title?: string | null } | null> | null, gallery_tags?: Array<{ id: string, slug?: string | null, title?: string | null } | null> | null, gallery_images?: Array<{ id: string } | null> | null } | null> | null };


export const GalleriesDocument = `
    query Galleries($start: Int, $limit: Int, $where: JSON, $sort: String!) {
  galleries(sort: $sort, start: $start, limit: $limit, where: $where) {
    id
    createdAt
    updatedAt
    title
    slug
    featured_image {
      provider_metadata
    }
    status
    gallery_categories {
      id
      slug
      title
    }
    gallery_tags {
      id
      slug
      title
    }
    gallery_images {
      id
    }
  }
}
    `;
export const useGalleriesQuery = <
      TData = GalleriesQuery,
      TError = unknown
    >(
      variables: GalleriesQueryVariables,
      options?: UseQueryOptions<GalleriesQuery, TError, TData>
    ) =>
    useQuery<GalleriesQuery, TError, TData>(
      ['Galleries', variables],
      fetcher<GalleriesQuery, GalleriesQueryVariables>(GalleriesDocument, variables),
      options
    );
export const useInfiniteGalleriesQuery = <
      TData = GalleriesQuery,
      TError = unknown
    >(
      variables: GalleriesQueryVariables,
      options?: UseInfiniteQueryOptions<GalleriesQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GalleriesQuery, TError, TData>(
      ['Galleries.infinite', variables],
      (metaData) => fetcher<GalleriesQuery, GalleriesQueryVariables>(GalleriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
