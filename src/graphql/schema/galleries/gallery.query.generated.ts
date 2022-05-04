import * as Types from '../../types';

import { useQuery, useInfiniteQuery, UseQueryOptions, UseInfiniteQueryOptions, QueryFunctionContext } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GalleryQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type GalleryQuery = { gallery?: { id: string, _id: string, createdAt: any, updatedAt: any, title?: string | null, slug?: string | null, status: Types.Enum_Gallery_Status, nsfw?: boolean | null, meta?: string | null, description?: string | null, featured_image?: { id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null, gallery_categories?: Array<{ id: string, _id: string, slug?: string | null, title?: string | null } | null> | null, gallery_tags?: Array<{ id: string, _id: string, slug?: string | null, title?: string | null } | null> | null, gallery_images?: Array<{ id: string, _id: string, createdAt: any, updatedAt: any, caption?: string | null, slug?: string | null, watermarked?: { id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null, clean?: { id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null, caption?: string | null, width?: number | null, height?: number | null, formats?: any | null, hash: string, ext?: string | null, mime: string, size: number, url: string, previewUrl?: string | null, provider: string, provider_metadata?: any | null } | null, share?: { id: string, _id: string, facebook?: boolean | null, twitter?: boolean | null, instagram?: boolean | null } | null, sell?: { id: string, _id: string, price: number } | null } | null> | null } | null };


export const GalleryDocument = `
    query Gallery($id: ID!, $publicationState: PublicationState) {
  gallery(id: $id, publicationState: $publicationState) {
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
export const useGalleryQuery = <
      TData = GalleryQuery,
      TError = unknown
    >(
      variables: GalleryQueryVariables,
      options?: UseQueryOptions<GalleryQuery, TError, TData>
    ) =>
    useQuery<GalleryQuery, TError, TData>(
      ['Gallery', variables],
      fetcher<GalleryQuery, GalleryQueryVariables>(GalleryDocument, variables),
      options
    );
export const useInfiniteGalleryQuery = <
      TData = GalleryQuery,
      TError = unknown
    >(
      variables: GalleryQueryVariables,
      options?: UseInfiniteQueryOptions<GalleryQuery, TError, TData>
    ) =>{
    
    return useInfiniteQuery<GalleryQuery, TError, TData>(
      ['Gallery.infinite', variables],
      (metaData) => fetcher<GalleryQuery, GalleryQueryVariables>(GalleryDocument, {...variables, ...(metaData.pageParam ?? {})})(),
      options
    )};
