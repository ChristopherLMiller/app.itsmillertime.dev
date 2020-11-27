import gql from 'graphql-tag';

export const ALL_GALLERIES_STRING = `
query ALL_GALLERIES {
    galleries {
        id
        createdAt
        updatedAt
        title
        slug
        description
        featured_image {
            previewUrl
            url
        }
        status
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