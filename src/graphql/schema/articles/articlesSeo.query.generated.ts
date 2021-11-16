import * as Types from "src/graphql/types";

import { useQuery, UseQueryOptions } from "react-query";
import { fetcher } from "src/lib/fetch";
export type ArticlesSeoQueryVariables = Types.Exact<{
  sort?: Types.Maybe<Types.Scalars["String"]>;
  limit?: Types.Maybe<Types.Scalars["Int"]>;
  start?: Types.Maybe<Types.Scalars["Int"]>;
  where?: Types.Maybe<Types.Scalars["JSON"]>;
  publicationState?: Types.Maybe<Types.PublicationState>;
}>;

export type ArticlesSeoQuery = {
  __typename?: "Query";
  articles?:
    | Array<
        | {
            __typename?: "Article";
            id: string;
            slug: string;
            seo?:
              | {
                  __typename?: "ComponentGlobalSeo";
                  title: string;
                  description?: string | null | undefined;
                  featured_image?:
                    | {
                        __typename?: "UploadFile";
                        name: string;
                        alternativeText?: string | null | undefined;
                        caption?: string | null | undefined;
                        width?: number | null | undefined;
                        height?: number | null | undefined;
                        url: string;
                        previewUrl?: string | null | undefined;
                        provider: string;
                        provider_metadata?: any | null | undefined;
                      }
                    | null
                    | undefined;
                }
              | null
              | undefined;
          }
        | null
        | undefined
      >
    | null
    | undefined;
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
    variables === undefined ? ["ArticlesSeo"] : ["ArticlesSeo", variables],
    fetcher<ArticlesSeoQuery, ArticlesSeoQueryVariables>(
      ArticlesSeoDocument,
      variables
    ),
    options
  );
