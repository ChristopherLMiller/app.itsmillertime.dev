import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelQueryVariables = Types.Exact<{
  id: Types.Scalars[`ID`];
  publicationState?: Types.Maybe<Types.PublicationState>;
}>;

export type ModelQuery = { __typename?: `Query` } & {
  model?: Types.Maybe<
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
  >;
};

export const ModelDocument = `
    query Model($id: ID!, $publicationState: PublicationState) {
  model(id: $id, publicationState: $publicationState) {
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
export const useModelQuery = <TData = ModelQuery, TError = unknown>(
  variables: ModelQueryVariables,
  options?: UseQueryOptions<ModelQuery, TError, TData>
) =>
  useQuery<ModelQuery, TError, TData>(
    [`Model`, variables],
    fetcher<ModelQuery, ModelQueryVariables>(ModelDocument, variables),
    options
  );
