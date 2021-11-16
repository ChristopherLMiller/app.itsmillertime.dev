import * as Types from "src/graphql/types";

import { useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "src/lib/fetch";
export type GalleriesQueryVariables = Types.Exact<{
  start?: Types.Maybe<Types.Scalars["Int"]>;
  limit?: Types.Maybe<Types.Scalars["Int"]>;
  where?: Types.Maybe<Types.Scalars["JSON"]>;
  sort: Types.Scalars["String"];
}>;

export type GalleriesQuery = {
  __typename?: "Query";
  galleries?:
    | Array<
        | {
            __typename?: "Gallery";
            id: string;
            _id: string;
            createdAt: any;
            updatedAt: any;
            title?: string | null | undefined;
            slug?: string | null | undefined;
            status: Types.Enum_Gallery_Status;
            nsfw?: boolean | null | undefined;
            meta?: string | null | undefined;
            description?: string | null | undefined;
            featured_image?:
              | {
                  __typename?: "UploadFile";
                  id: string;
                  _id: string;
                  createdAt: any;
                  updatedAt: any;
                  name: string;
                  alternativeText?: string | null | undefined;
                  caption?: string | null | undefined;
                  width?: number | null | undefined;
                  height?: number | null | undefined;
                  formats?: any | null | undefined;
                  hash: string;
                  ext?: string | null | undefined;
                  mime: string;
                  size: number;
                  url: string;
                  previewUrl?: string | null | undefined;
                  provider: string;
                  provider_metadata?: any | null | undefined;
                }
              | null
              | undefined;
            gallery_categories?:
              | Array<
                  | {
                      __typename?: "GalleryCategories";
                      id: string;
                      _id: string;
                      slug?: string | null | undefined;
                      title?: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
            gallery_tags?:
              | Array<
                  | {
                      __typename?: "GalleryTags";
                      id: string;
                      _id: string;
                      slug?: string | null | undefined;
                      title?: string | null | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
            gallery_images?:
              | Array<
                  | {
                      __typename?: "GalleryImage";
                      id: string;
                      _id: string;
                      createdAt: any;
                      updatedAt: any;
                      caption?: string | null | undefined;
                      slug?: string | null | undefined;
                      watermarked?:
                        | {
                            __typename?: "UploadFile";
                            id: string;
                            _id: string;
                            createdAt: any;
                            updatedAt: any;
                            name: string;
                            alternativeText?: string | null | undefined;
                            caption?: string | null | undefined;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            formats?: any | null | undefined;
                            hash: string;
                            ext?: string | null | undefined;
                            mime: string;
                            size: number;
                            url: string;
                            previewUrl?: string | null | undefined;
                            provider: string;
                            provider_metadata?: any | null | undefined;
                          }
                        | null
                        | undefined;
                      clean?:
                        | {
                            __typename?: "UploadFile";
                            id: string;
                            _id: string;
                            createdAt: any;
                            updatedAt: any;
                            name: string;
                            alternativeText?: string | null | undefined;
                            caption?: string | null | undefined;
                            width?: number | null | undefined;
                            height?: number | null | undefined;
                            formats?: any | null | undefined;
                            hash: string;
                            ext?: string | null | undefined;
                            mime: string;
                            size: number;
                            url: string;
                            previewUrl?: string | null | undefined;
                            provider: string;
                            provider_metadata?: any | null | undefined;
                          }
                        | null
                        | undefined;
                      share?:
                        | {
                            __typename?: "ComponentGlobalShare";
                            id: string;
                            _id: string;
                            facebook?: boolean | null | undefined;
                            twitter?: boolean | null | undefined;
                            instagram?: boolean | null | undefined;
                          }
                        | null
                        | undefined;
                      sell?:
                        | {
                            __typename?: "ComponentGlobalSell";
                            id: string;
                            _id: string;
                            price: number;
                          }
                        | null
                        | undefined;
                    }
                  | null
                  | undefined
                >
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
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
    ["Galleries", variables],
    fetcher<GalleriesQuery, GalleriesQueryVariables>(
      GalleriesDocument,
      variables
    ),
    options
  );
