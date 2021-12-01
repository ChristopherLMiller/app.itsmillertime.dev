import * as Types from '../../types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GalleryQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
  publicationState?: Types.InputMaybe<Types.PublicationState>;
}>;


export type GalleryQuery = { __typename?: 'Query', gallery?: { __typename?: 'Gallery', id: string, _id: string, createdAt: any, updatedAt: any, title?: string | null | undefined, slug?: string | null | undefined, status: Types.Enum_Gallery_Status, nsfw?: boolean | null | undefined, meta?: string | null | undefined, description?: string | null | undefined, featured_image?: { __typename?: 'UploadFile', id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined, gallery_categories?: Array<{ __typename?: 'GalleryCategories', id: string, _id: string, slug?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined, gallery_tags?: Array<{ __typename?: 'GalleryTags', id: string, _id: string, slug?: string | null | undefined, title?: string | null | undefined } | null | undefined> | null | undefined, gallery_images?: Array<{ __typename?: 'GalleryImage', id: string, _id: string, createdAt: any, updatedAt: any, caption?: string | null | undefined, slug?: string | null | undefined, watermarked?: { __typename?: 'UploadFile', id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined, clean?: { __typename?: 'UploadFile', id: string, _id: string, createdAt: any, updatedAt: any, name: string, alternativeText?: string | null | undefined, caption?: string | null | undefined, width?: number | null | undefined, height?: number | null | undefined, formats?: any | null | undefined, hash: string, ext?: string | null | undefined, mime: string, size: number, url: string, previewUrl?: string | null | undefined, provider: string, provider_metadata?: any | null | undefined } | null | undefined, share?: { __typename?: 'ComponentGlobalShare', id: string, _id: string, facebook?: boolean | null | undefined, twitter?: boolean | null | undefined, instagram?: boolean | null | undefined } | null | undefined, sell?: { __typename?: 'ComponentGlobalSell', id: string, _id: string, price: number } | null | undefined } | null | undefined> | null | undefined } | null | undefined };


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