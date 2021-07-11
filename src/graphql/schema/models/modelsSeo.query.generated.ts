import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ModelsSeoQueryVariables = Types.Exact<{
  sort?: Types.Maybe<Types.Scalars[`String`]>;
  limit?: Types.Maybe<Types.Scalars[`Int`]>;
  start?: Types.Maybe<Types.Scalars[`Int`]>;
  where?: Types.Maybe<Types.Scalars[`JSON`]>;
  publicationState?: Types.Maybe<Types.PublicationState>;
}>;

export type ModelsSeoQuery = { __typename?: `Query` } & {
  models?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: `Model` } & Pick<Types.Model, `id` | `slug`> & {
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
          }
      >
    >
  >;
};

export const ModelsSeoDocument = `
    query ModelsSeo($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  models(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    id
    slug
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
  }
}
    `;
export const useModelsSeoQuery = <TData = ModelsSeoQuery, TError = unknown>(
  variables?: ModelsSeoQueryVariables,
  options?: UseQueryOptions<ModelsSeoQuery, TError, TData>
) =>
  useQuery<ModelsSeoQuery, TError, TData>(
    [`ModelsSeo`, variables],
    fetcher<ModelsSeoQuery, ModelsSeoQueryVariables>(
      ModelsSeoDocument,
      variables
    ),
    options
  );
