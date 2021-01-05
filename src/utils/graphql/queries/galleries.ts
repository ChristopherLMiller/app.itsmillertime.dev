import gql from 'graphql-tag';

export const ALL_GALLERIES_STRING = `
query ALL_GALLERIES {
    galleries(where{
        id
        createdAt
        updatedAt
        title
        slug
        description
        featured_image {
            url
            width
            height
        }
        status
        nsfw
        gallery_categories {
            id
            title
            slug
        }
        gallery_tags {
            id
            title
            slug
        }
    }
}
`;