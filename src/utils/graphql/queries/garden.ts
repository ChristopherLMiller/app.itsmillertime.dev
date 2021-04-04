import { gql } from 'graphql-request';
import Cookies from 'js-cookie';
import { UseQueryResult, useQuery } from 'react-query';
import { graphQLClient } from 'src/utils/functions/fetch';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function useGalleries(): UseQueryResult<any> {
  const headers = {} as Headers;

  if (Cookies.get(`jwt`)) {
    headers.append(`authorization`, `Bearer ${Cookies.get(`jwt`)}`);
  }

  return useQuery(`galleries`, async () => {
    const data = await graphQLClient.request(
      gql`
        ${ALL_GARDEN_ITEMS_STRING}
      `,
      undefined,
      headers
    );
    return data;
  });
}
