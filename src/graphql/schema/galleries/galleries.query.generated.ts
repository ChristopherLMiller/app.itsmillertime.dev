import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type GalleriesQueryVariables = Types.Exact<{
  start?: Types.Maybe<Types.Scalars[`Int`]>;
  limit?: Types.Maybe<Types.Scalars[`Int`]>;
  where?: Types.Maybe<Types.Scalars[`JSON`]>;
  sort: Types.Scalars[`String`];
}>;

export type GalleriesQuery = { __typename?: `Query` } & {
  galleries?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: `Gallery` } & Pick<
          Types.Gallery,
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
            featured_image?: Types.Maybe<
              { __typename?: `UploadFile` } & Pick<
                Types.UploadFile,
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
            gallery_categories?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: `GalleryCategories` } & Pick<
                    Types.GalleryCategories,
                    `id` | `_id` | `slug` | `title`
                  >
                >
              >
            >;
            gallery_tags?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: `GalleryTags` } & Pick<
                    Types.GalleryTags,
                    `id` | `_id` | `slug` | `title`
                  >
                >
              >
            >;
            gallery_images?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: `GalleryImage` } & Pick<
                    Types.GalleryImage,
                    | `id`
                    | `_id`
                    | `createdAt`
                    | `updatedAt`
                    | `caption`
                    | `slug`
                  > & {
                      watermarked?: Types.Maybe<
                        { __typename?: `UploadFile` } & Pick<
                          Types.UploadFile,
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
                      clean?: Types.Maybe<
                        { __typename?: `UploadFile` } & Pick<
                          Types.UploadFile,
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
                      share?: Types.Maybe<
                        { __typename?: `ComponentGlobalShare` } & Pick<
                          Types.ComponentGlobalShare,
                          `id` | `_id` | `facebook` | `twitter` | `instagram`
                        >
                      >;
                      sell?: Types.Maybe<
                        { __typename?: `ComponentGlobalSell` } & Pick<
                          Types.ComponentGlobalSell,
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
export const useGalleriesQuery = <TData = GalleriesQuery, TError = unknown>(
  variables: GalleriesQueryVariables,
  options?: UseQueryOptions<GalleriesQuery, TError, TData>
) =>
  useQuery<GalleriesQuery, TError, TData>(
    [`Galleries`, variables],
    fetcher<GalleriesQuery, GalleriesQueryVariables>(
      GalleriesDocument,
      variables
    ),
    options
  );
