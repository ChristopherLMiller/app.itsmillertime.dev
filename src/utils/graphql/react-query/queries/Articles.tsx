import { Article } from '../types/Article';
import { Exact, fetcher, Maybe, Scalars } from '../types';
import { ArticleCategory } from '../types/ArticleCategory';
import { ArticleTags } from '../types/ArticleTags';
import { UploadFile } from '../types/UploadFile';
import { UsersPermissionsUser } from '../types/UsersPermissions';

export type ArticlesQueryVariables = Exact<{ [key: string]: never }>;

export type ArticlesQuery = { __typename?: 'Query' } & {
  articles?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Article' } & Pick<
          Article,
          | 'id'
          | 'title'
          | 'createdAt'
          | 'updatedAt'
          | 'published_at'
          | 'excerpt'
          | 'content'
          | 'slug'
        > & {
            featured_image?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'url' | 'width' | 'height' | 'alternativeText' | 'caption'
              >
            >;
            users_permissions_user?: Maybe<
              { __typename?: 'UsersPermissionsUser' } & Pick<
                UsersPermissionsUser,
                'username' | 'id'
              >
            >;
            article_tags?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'ArticleTags' } & Pick<
                    ArticleTags,
                    'slug' | 'id' | 'title'
                  >
                >
              >
            >;
            article_categories?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'ArticleCategory' } & Pick<
                    ArticleCategory,
                    'slug' | 'id' | 'title'
                  >
                >
              >
            >;
          }
      >
    >
  >;
};

export type ArticleQueryVariables = Exact<{
  where?: Maybe<Scalars['JSON']>;
}>;

export type ArticleQuery = { __typename?: 'Query' } & {
  articles?: Maybe<
    Array<
      Maybe<
        { __typename?: 'Article' } & Pick<
          Article,
          | 'id'
          | 'title'
          | 'createdAt'
          | 'updatedAt'
          | 'published_at'
          | 'content'
          | 'slug'
        > & {
            featured_image?: Maybe<
              { __typename?: 'UploadFile' } & Pick<
                UploadFile,
                'url' | 'width' | 'height' | 'alternativeText' | 'caption'
              >
            >;
            users_permissions_user?: Maybe<
              { __typename?: 'UsersPermissionsUser' } & Pick<
                UsersPermissionsUser,
                'username' | 'id'
              >
            >;
            article_tags?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'ArticleTags' } & Pick<
                    ArticleTags,
                    'slug' | 'id' | 'title'
                  >
                >
              >
            >;
            article_categories?: Maybe<
              Array<
                Maybe<
                  { __typename?: 'ArticleCategory' } & Pick<
                    ArticleCategory,
                    'slug' | 'id' | 'title'
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
    query ARTICLES {
  articles(sort: "published_at:DESC") {
    id
    title
    createdAt
    updatedAt
    published_at
    excerpt
    content
    featured_image {
      url
      width
      height
      alternativeText
      caption
    }
    slug
    users_permissions_user {
      username
      id
    }
    article_tags {
      slug
      id
      title
    }
    article_categories {
      slug
      id
      title
    }
  }
}
    `;

export const ArticleDocument = `
    query ARTICLE($where: JSON) {
  articles(where: $where) {
    id
    title
    createdAt
    updatedAt
    published_at
    content
    featured_image {
      url
      width
      height
      alternativeText
      caption
    }
    slug
    users_permissions_user {
      username
      id
    }
    article_tags {
      slug
      id
      title
    }
    article_categories {
      slug
      id
      title
    }
  }
}
    `;

export const useArticlesQuery = <TData = ArticlesQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: ArticlesQueryVariables,
  options?: UseQueryOptions<ArticlesQuery, TError, TData>
) =>
  useQuery<ArticlesQuery, TError, TData>(
    ['ARTICLES', variables],
    fetcher<ArticlesQuery, ArticlesQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ArticlesDocument,
      variables
    ),
    options
  );

export const useArticleQuery = <TData = ArticleQuery, TError = unknown>(
  dataSource: { endpoint: string; fetchParams?: RequestInit },
  variables?: ArticleQueryVariables,
  options?: UseQueryOptions<ArticleQuery, TError, TData>
) =>
  useQuery<ArticleQuery, TError, TData>(
    ['ARTICLE', variables],
    fetcher<ArticleQuery, ArticleQueryVariables>(
      dataSource.endpoint,
      dataSource.fetchParams || {},
      ArticleDocument,
      variables
    ),
    options
  );
