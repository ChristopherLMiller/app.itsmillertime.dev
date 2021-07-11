import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticlesQueryVariables = Types.Exact<{
  sort?: Types.Maybe<Types.Scalars[`String`]>;
  limit?: Types.Maybe<Types.Scalars[`Int`]>;
  start?: Types.Maybe<Types.Scalars[`Int`]>;
  where?: Types.Maybe<Types.Scalars[`JSON`]>;
  publicationState?: Types.Maybe<Types.PublicationState>;
}>;

export type ArticlesQuery = { __typename?: `Query` } & {
  articles?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: `Article` } & Pick<
          Types.Article,
          | `id`
          | `_id`
          | `createdAt`
          | `updatedAt`
          | `title`
          | `content`
          | `slug`
          | `published_at`
        > & {
            users_permissions_user?: Types.Maybe<
              { __typename?: `UsersPermissionsUser` } & Pick<
                Types.UsersPermissionsUser,
                `id` | `username`
              > & {
                  role?: Types.Maybe<
                    { __typename?: `UsersPermissionsRole` } & Pick<
                      Types.UsersPermissionsRole,
                      `id` | `name`
                    >
                  >;
                }
            >;
            seo?: Types.Maybe<
              { __typename?: `ComponentGlobalSeo` } & Pick<
                Types.ComponentGlobalSeo,
                `id` | `title` | `description`
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
            article_tags?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: `ArticleTags` } & Pick<
                    Types.ArticleTags,
                    `id` | `slug` | `title`
                  >
                >
              >
            >;
            article_categories?: Types.Maybe<
              Array<
                Types.Maybe<
                  { __typename?: `ArticleCategory` } & Pick<
                    Types.ArticleCategory,
                    `id` | `slug` | `title`
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export const ArticlesDocument = `
    query Articles($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  articles(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    id
    _id
    createdAt
    updatedAt
    title
    content
    slug
    users_permissions_user {
      id
      username
      role {
        id
        name
      }
    }
    seo {
      id
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
    published_at
    article_tags {
      id
      slug
      title
    }
    article_categories {
      id
      slug
      title
    }
  }
}
    `;
export const useArticlesQuery = <TData = ArticlesQuery, TError = unknown>(
  variables?: ArticlesQueryVariables,
  options?: UseQueryOptions<ArticlesQuery, TError, TData>
) =>
  useQuery<ArticlesQuery, TError, TData>(
    [`Articles`, variables],
    fetcher<ArticlesQuery, ArticlesQueryVariables>(ArticlesDocument, variables),
    options
  );
