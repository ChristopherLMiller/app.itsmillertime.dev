import * as Types from 'src/graphql/types';

import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from 'src/lib/fetch';
export type ArticlesSeoQueryVariables = Types.Exact<{
  sort?: Types.Maybe<Types.Scalars['String']>;
  limit?: Types.Maybe<Types.Scalars['Int']>;
  start?: Types.Maybe<Types.Scalars['Int']>;
  where?: Types.Maybe<Types.Scalars['JSON']>;
  publicationState?: Types.Maybe<Types.PublicationState>;
}>;

export type ArticlesSeoQuery = { __typename?: 'Query' } & {
  articles?: Types.Maybe<
    Array<
      Types.Maybe<
        { __typename?: 'Article' } & Pick<Types.Article, 'id' | 'slug'> & {
            seo?: Types.Maybe<
              { __typename?: 'ComponentGlobalSeo' } & Pick<
                Types.ComponentGlobalSeo,
                'title' | 'description'
              > & {
                  featured_image?: Types.Maybe<
                    { __typename?: 'UploadFile' } & Pick<
                      Types.UploadFile,
                      | 'name'
                      | 'alternativeText'
                      | 'caption'
                      | 'width'
                      | 'height'
                      | 'url'
                      | 'previewUrl'
                      | 'provider'
                      | 'provider_metadata'
                    >
                  >;
                }
            >;
          }
      >
    >
  >;
};

export const ArticlesSeoDocument = `
    query ArticlesSeo($sort: String, $limit: Int, $start: Int, $where: JSON, $publicationState: PublicationState) {
  articles(
    sort: $sort
    start: $start
    limit: $limit
    publicationState: $publicationState
    where: $where
  ) {
    id
    slug
    seo {
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
export const useArticlesSeoQuery = <TData = ArticlesSeoQuery, TError = unknown>(
  variables?: ArticlesSeoQueryVariables,
  options?: UseQueryOptions<ArticlesSeoQuery, TError, TData>
) =>
  useQuery<ArticlesSeoQuery, TError, TData>(
    ['ArticlesSeo', variables],
    fetcher<ArticlesSeoQuery, ArticlesSeoQueryVariables>(
      ArticlesSeoDocument,
      variables
    ),
    options
  );
