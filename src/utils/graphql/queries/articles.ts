import { QueryResult, useQuery } from 'react-query';
import { gql } from 'graphql-request';
import { graphQLClient } from 'src/utils/functions/fetch';

export const ARTICLES_BRIEF_QUERY_STRING = `query ARTICLES {
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
}`;

export const ARTICLE_QUERY_STRING = `query ARTICLE($where: JSON) {
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
}`;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useArticles(): QueryResult<any> {
  return useQuery(`articles`, async () => {
    const data = await graphQLClient.request(gql`
      ${ARTICLES_BRIEF_QUERY_STRING}
    `);
    return data;
  });
}

export function useArticle(articleSlug: string): QueryResult<any> {
  return useQuery([`article`, articleSlug], async () => {
    const data = await graphQLClient.request(
      gql`
        ${ARTICLE_QUERY_STRING}
      `,
      {
        where: {
          slug: articleSlug,
        },
      }
    );
    return data;
  });
}
