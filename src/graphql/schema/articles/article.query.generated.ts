import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticleQueryVariables = Types.Exact<{
  id: Types.Scalars[`ID`];
  publicationState?: Types.Maybe<Types.PublicationState>;
}>;

export type ArticleQuery = { __typename?: `Query` } & {
  article?: Types.Maybe<
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
  >;
};

export const ArticleDocument = `
    query Article($id: ID!, $publicationState: PublicationState) {
  article(id: $id, publicationState: $publicationState) {
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
export const useArticleQuery = <TData = ArticleQuery, TError = unknown>(
  variables: ArticleQueryVariables,
  options?: UseQueryOptions<ArticleQuery, TError, TData>
) =>
  useQuery<ArticleQuery, TError, TData>(
    [`Article`, variables],
    fetcher<ArticleQuery, ArticleQueryVariables>(ArticleDocument, variables),
    options
  );
