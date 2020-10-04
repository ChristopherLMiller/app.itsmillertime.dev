import gql from "graphql-tag";

export const ALL_GARDEN_ITEMS_STRING = `
query ALL_DIGITAL_GARDEN_ITEMS {
  gardens {
    title
    contents
    slug 
  }
}`;

export const ALL_GARDEN_ITEMS = gql`
  ${ALL_GARDEN_ITEMS_STRING}
`;
