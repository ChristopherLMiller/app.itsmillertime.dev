/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { UseQueryOptions, useQuery } from 'react-query';
import { fetcher } from 'src/utils/functions/fetch';
import { Exact, Maybe, Scalars } from '../types';
import { Gallery } from '../types/Gallery';
import { GalleryCategories } from '../types/GalleryCategory';
import { GalleryImage } from '../types/GalleryImage';
import { GalleryTags } from '../types/GalleryTag';
import {
  ComponentGlobalShare,
  ComponentGlobalSell,
} from '../types/GlobalComponents';
import { UploadFile } from '../types/UploadFile';

export type GalleriesQueryVariables = Exact<{
  start?: Maybe<Scalars[`Int`]>;
  limit?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  sort: Scalars[`String`];
}>;

export type GalleriesQuery = { __typename?: `Query` } & {
  galleries?: Maybe<
    Array<
      Maybe<
        { __typename?: `Gallery` } & Pick<
          Gallery,
          | `id`
          | `_id`
          | `createdAt`
          | `updatedAt`
          | `title`
          | `slug`
          | `status`
          | `nsfw`
          | `meta`
          | `description`
        > & {
            featured_image?: Maybe<
              { __typename?: `UploadFile` } & Pick<
                UploadFile,
                | `id`
                | `_id`
                | `createdAt`
                | `updatedAt`
                | `name`
                | `alternativeText`
                | `caption`
                | `width`
                | `height`
                | `formats`
                | `hash`
                | `ext`
                | `mime`
                | `size`
                | `url`
                | `previewUrl`
                | `provider`
                | `provider_metadata`
              >
            >;
            gallery_categories?: Maybe<
              Array<
                Maybe<
                  { __typename?: `GalleryCategories` } & Pick<
                    GalleryCategories,
                    `id` | `_id` | `title` | `slug`
                  >
                >
              >
            >;
            gallery_tags?: Maybe<
              Array<
                Maybe<
                  { __typename?: `GalleryTags` } & Pick<
                    GalleryTags,
                    `id` | `_id` | `slug` | `title`
                  >
                >
              >
            >;
            gallery_images?: Maybe<
              Array<
                Maybe<
                  { __typename?: `GalleryImage` } & Pick<
                    GalleryImage,
                    | `id`
                    | `_id`
                    | `createdAt`
                    | `updatedAt`
                    | `caption`
                    | `slug`
                  > & {
                      watermarked?: Maybe<
                        { __typename?: `UploadFile` } & Pick<
                          UploadFile,
                          | `id`
                          | `_id`
                          | `createdAt`
                          | `updatedAt`
                          | `name`
                          | `alternativeText`
                          | `caption`
                          | `width`
                          | `height`
                          | `formats`
                          | `hash`
                          | `ext`
                          | `mime`
                          | `size`
                          | `url`
                          | `previewUrl`
                          | `provider`
                          | `provider_metadata`
                        >
                      >;
                      clean?: Maybe<
                        { __typename?: `UploadFile` } & Pick<
                          UploadFile,
                          | `id`
                          | `_id`
                          | `createdAt`
                          | `updatedAt`
                          | `name`
                          | `alternativeText`
                          | `caption`
                          | `width`
                          | `height`
                          | `formats`
                          | `hash`
                          | `ext`
                          | `mime`
                          | `size`
                          | `url`
                          | `previewUrl`
                          | `provider`
                          | `provider_metadata`
                        >
                      >;
                      share?: Maybe<
                        { __typename?: `ComponentGlobalShare` } & Pick<
                          ComponentGlobalShare,
                          `id` | `_id` | `facebook` | `twitter` | `instagram`
                        >
                      >;
                      sell?: Maybe<
                        { __typename?: `ComponentGlobalSell` } & Pick<
                          ComponentGlobalSell,
                          `id` | `_id` | `price`
                        >
                      >;
                    }
                >
              >
            >;
          }
      >
    >
  >;
};

export const GalleriesDocument = `
    query GALLERIES($start: Int, $limit: Int, $where: JSON, $sort: String!) {
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
export const useGalleriesQuery = <TData = GalleriesQuery, TError = unknown>(
  variables: GalleriesQueryVariables,
  options?: UseQueryOptions<GalleriesQuery, TError, TData>
) =>
  useQuery<GalleriesQuery, TError, TData>(
    [`GALLERIES`, variables],
    fetcher<GalleriesQuery, GalleriesQueryVariables>(
      GalleriesDocument,
      variables
    ),
    options
  );
