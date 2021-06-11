import { UseQueryOptions, useQuery } from 'react-query';
import { fetcher } from 'src/utils/functions/fetch';
import { Exact, Maybe, Scalars, PublicationState } from '../types';
import {
  ComponentGlobalSeo,
  ComponentGlobalShare,
} from '../types/GlobalComponents';
import { Manufacturer } from '../types/Manufacturer';
import { Model } from '../types/Model';
import { ModelTags } from '../types/ModelTag';
import { Scale } from '../types/Scale';
import { UploadFile } from '../types/UploadFile';

export type ModelsQueryVariables = Exact<{
  start?: Maybe<Scalars[`Int`]>;
  limit?: Maybe<Scalars[`Int`]>;
  where?: Maybe<Scalars[`JSON`]>;
  published?: Maybe<PublicationState>;
  sort: Scalars[`String`];
}>;

export type ModelsQuery = { __typename?: `Query` } & {
  models?: Maybe<
    Array<
      Maybe<
        { __typename?: `Model` } & Pick<
          Model,
          | `id`
          | `_id`
          | `createdAt`
          | `updatedAt`
          | `title`
          | `slug`
          | `content`
          | `completed`
          | `kit_number`
          | `year_released`
          | `clockify_project_id`
          | `scalemates_link`
          | `completed_at`
          | `youtube_video`
          | `status`
          | `published_at`
        > & {
            scale?: Maybe<
              { __typename?: `Scale` } & Pick<
                Scale,
                `id` | `_id` | `name` | `slug`
              >
            >;
            manufacturer?: Maybe<
              { __typename?: `Manufacturer` } & Pick<
                Manufacturer,
                `id` | `_id` | `name` | `slug`
              >
            >;
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
            SEO?: Maybe<
              { __typename?: `ComponentGlobalSeo` } & Pick<
                ComponentGlobalSeo,
                `id` | `_id` | `title` | `description`
              > & {
                  Sharing?: Maybe<
                    { __typename?: `ComponentGlobalShare` } & Pick<
                      ComponentGlobalShare,
                      `id` | `_id` | `facebook` | `twitter` | `instagram`
                    >
                  >;
                }
            >;
            model_tags?: Maybe<
              Array<
                Maybe<
                  { __typename?: `ModelTags` } & Pick<
                    ModelTags,
                    `id` | `_id` | `name` | `slug`
                  >
                >
              >
            >;
            images?: Maybe<
              Array<
                Maybe<
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
                >
              >
            >;
          }
      >
    >
  >;
};

export type ModelQueryVariables = Exact<{
  id: Scalars[`ID`];
  published?: Maybe<PublicationState>;
}>;

export type ModelQuery = { __typename?: `Query` } & {
  model?: Maybe<
    { __typename?: `Model` } & Pick<
      Model,
      | `id`
      | `_id`
      | `createdAt`
      | `updatedAt`
      | `title`
      | `slug`
      | `content`
      | `completed`
      | `kit_number`
      | `year_released`
      | `clockify_project_id`
      | `scalemates_link`
      | `completed_at`
      | `youtube_video`
      | `status`
      | `published_at`
    > & {
        scale?: Maybe<
          { __typename?: `Scale` } & Pick<Scale, `id` | `_id` | `name` | `slug`>
        >;
        manufacturer?: Maybe<
          { __typename?: `Manufacturer` } & Pick<
            Manufacturer,
            `id` | `_id` | `name` | `slug`
          >
        >;
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
        SEO?: Maybe<
          { __typename?: `ComponentGlobalSeo` } & Pick<
            ComponentGlobalSeo,
            `id` | `_id` | `title` | `description`
          > & {
              Sharing?: Maybe<
                { __typename?: `ComponentGlobalShare` } & Pick<
                  ComponentGlobalShare,
                  `id` | `_id` | `facebook` | `twitter` | `instagram`
                >
              >;
            }
        >;
        model_tags?: Maybe<
          Array<
            Maybe<
              { __typename?: `ModelTags` } & Pick<
                ModelTags,
                `id` | `_id` | `name` | `slug`
              >
            >
          >
        >;
        images?: Maybe<
          Array<
            Maybe<
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
            >
          >
        >;
      }
  >;
};

export const ModelsDocument = `
    query MODELS($start: Int, $limit: Int, $where: JSON, $published: PublicationState, $sort: String!) {
  models(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $published
    where: $where
  ) {
    id
    _id
    createdAt
    updatedAt
    title
    slug
    content
    completed
    kit_number
    year_released
    clockify_project_id
    scalemates_link
    scale {
      id
      _id
      name
      slug
    }
    manufacturer {
      id
      _id
      name
      slug
    }
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
    completed_at
    youtube_video
    status
    SEO {
      id
      _id
      title
      description
      Sharing {
        id
        _id
        facebook
        twitter
        instagram
      }
    }
    published_at
    model_tags {
      id
      _id
      name
      slug
    }
    images {
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
  }
}
    `;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useModelsQuery = <TData = ModelsQuery, TError = unknown>(
  variables: ModelsQueryVariables,
  options?: UseQueryOptions<ModelsQuery, TError, TData>
) =>
  useQuery<ModelsQuery, TError, TData>(
    [`MODELS`, variables],
    fetcher<ModelsQuery, ModelsQueryVariables>(ModelsDocument, variables),
    options
  );
export const ModelDocument = `
    query MODEL($id: ID!, $published: PublicationState) {
  model(id: $id, publicationState: $published) {
    id
    _id
    createdAt
    updatedAt
    title
    slug
    content
    completed
    kit_number
    year_released
    clockify_project_id
    scalemates_link
    scale {
      id
      _id
      name
      slug
    }
    manufacturer {
      id
      _id
      name
      slug
    }
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
    completed_at
    youtube_video
    status
    SEO {
      id
      _id
      title
      description
      Sharing {
        id
        _id
        facebook
        twitter
        instagram
      }
    }
    published_at
    model_tags {
      id
      _id
      name
      slug
    }
    images {
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
  }
}
    `;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export const useModelQuery = <TData = ModelQuery, TError = unknown>(
  variables: ModelQueryVariables,
  options?: UseQueryOptions<ModelQuery, TError, TData>
) =>
  useQuery<ModelQuery, TError, TData>(
    [`MODEL`, variables],
    fetcher<ModelQuery, ModelQueryVariables>(ModelDocument, variables),
    options
  );
