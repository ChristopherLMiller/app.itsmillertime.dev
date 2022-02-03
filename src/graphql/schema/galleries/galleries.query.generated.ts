import * as Types from '../../types';

import { useQuery, UseQueryOptions, useInfiniteQuery, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GalleriesQueryVariables = Types.Exact<{
  start?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  where?: Types.InputMaybe<Types.Scalars['JSON']>;
  sort: Types.Scalars['String'];
}>;


export type GalleriesQuery = { galleries?: Array<{ id: string, _id: string, createdAt: any, updatedAt: any, title?: string | null | undefined, slug?: string | null | undefined, status: Types.Enum_Gallery_Status, nsfw?: boolean | null | undefined, meta?: string | null | undefined, description?: string | null | undefined, featured_image?: { id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined, gallery_categories?: Array<{ id: string, _id: string, slug?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined, gallery_tags?: Array<{ id: string, _id: string, slug?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined, gallery_images?: Array<{ id: string, _id: string, createdAt: any, updatedAt: any, caption?: string | null | undefined, slug?: string | null | undefined, watermarked?: { id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined, clean?: { id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined, share?: { id: string, _id: string, facebook?: boolean | null | undefined, twitter?: boolean | null | undefined, instagram?: boolean | null | undefined } | null | undefined, sell?: { id: string, _id: string, price: number } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };


export const GalleriesDocument = `
    query Galleries($start: Int, $limit: Int, $where: JSON, $sort: String!) {
  galleries(sort: $sort, start: $start, limit: $limit, where: $where) {
    id
    _id
    createdAt
    updatedAt
    title
    slug
    featured_image {
      id
      _id
      createdAt
      updatedAt
      name
      alternativeText
      caption
      width
      height
      formats
      hash
      ext
      mime
      size
      url
      previewUrl
      provider
      provider_metadata
    }
    status
    nsfw
    meta
    description
    gallery_categories {
      id
      _id
      slug
      title
    }
    gallery_tags {
      id
      _id
      slug
      title
    }
    gallery_images {
      id
      _id
      createdAt
      updatedAt
      caption
      slug
      watermarked {
        id
        _id
        createdAt
        updatedAt
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        mime
        size
        url
        previewUrl
        provider
        provider_metadata
      }
      clean {
        id
        _id
        createdAt
        updatedAt
        name
        alternativeText
        caption
        width
        height
        formats
        hash
        ext
        mime
        size
        url
        previewUrl
        provider
        provider_metadata
      }
      share {
        id
        _id
        facebook
        twitter
        instagram
      }
      sell {
        id
        _id
        price
      }
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
    ) =>
    useInfiniteQuery<GalleriesQuery, TError, TData>(
      ['Galleries.infinite', variables],
      (metaData) => fetcher<GalleriesQuery, GalleriesQueryVariables>(GalleriesDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    );
