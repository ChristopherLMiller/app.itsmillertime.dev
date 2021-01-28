export const ARTICLES_BRIEF_QUERY_STRING = `query ARTICLES {
  articles(sort: "published_at:DESC") {
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
