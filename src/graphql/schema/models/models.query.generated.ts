import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsQueryVariables = Types.Exact<{
  sort?: Types.Maybe<Types.Scalars[`String`]>;
  limit?: Types.Maybe<Types.Scalars[`Int`]>;
  start?: Types.Maybe<Types.Scalars[`Int`]>;
  where?: Types.Maybe<Types.Scalars[`JSON`]>;
  publicationState?: Types.Maybe<Types.PublicationState>;
}>;

export type ModelsQuery = { __typename?: `Query` } & {
  models?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: `Model` } & Pick<
          Types.Model,
          | `id`
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
            scale?: Types.Maybe<
              { __typename?: `Scale` } & Pick<Types.Scale, `name` | `slug`>
            >;
            manufacturer?: Types.Maybe<
              { __typename?: `Manufacturer` } & Pick<
                Types.Manufacturer,
                `slug` | `name`
              >
            >;
            model_tags?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: `ModelTags` } & Pick<
                    Types.ModelTags,
                    `name` | `slug`
                  >
                >
              >
            >;
            SEO?: Types.Maybe<
              { __typename?: `ComponentGlobalSeo` } & Pick<
                Types.ComponentGlobalSeo,
                `title` | `description`
              > & {
                  featured_image?: Types.Maybe<
                    { __typename?: `UploadFile` } & Pick<
                      Types.UploadFile,
                      | `name`
                      | `alternativeText`
                      | `caption`
                      | `width`
                      | `height`
                      | `url`
                      | `previewUrl`
                      | `provider`
                      | `provider_metadata`
                    >
                  >;
                }
            >;
            sharing?: Types.Maybe<
              { __typename?: `ComponentGlobalShare` } & Pick<
                Types.ComponentGlobalShare,
                `facebook` | `twitter` | `instagram`
              >
            >;
            images?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: `UploadFile` } & Pick<
                    Types.UploadFile,
                    | `name`
                    | `alternativeText`
                    | `caption`
                    | `width`
                    | `height`
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

export const ModelsDocument = `
    query Models($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  models(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    id
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
      name
      slug
    }
    manufacturer {
      slug
      name
    }
    completed_at
    youtube_video
    status
    published_at
    model_tags {
      name
      slug
    }
    SEO {
      title
      description
      featured_image {
        name
        alternativeText
        caption
        width
        height
        url
        previewUrl
        provider
        provider_metadata
      }
    }
    sharing {
      facebook
      twitter
      instagram
    }
    images {
      name
      alternativeText
      caption
      width
      height
      url
      previewUrl
      provider
      provider_metadata
    }
  }
}
    `;
export const useModelsQuery = <TData = ModelsQuery, TError = unknown>(
  variables?: ModelsQueryVariables,
  options?: UseQueryOptions<ModelsQuery, TError, TData>
) =>
  useQuery<ModelsQuery, TError, TData>(
    [`Models`, variables],
    fetcher<ModelsQuery, ModelsQueryVariables>(ModelsDocument, variables),
    options
  );
