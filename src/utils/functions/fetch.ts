import Axios from 'axios';
import Router from 'next/router';
import { GraphQLClient } from 'graphql-request';

// All of this is the old way till you reach the bottom of the document
// This should be considered depricated at this point
const fetch = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
  headers: {
    Accept: `application/json`,
    'Content-Type': `application/json`,
  },
});

fetch.interceptors.response.use(
  (response) => response,
  function (error) {
    if (error.response.status === 401) {
      Router.push(`/login`);
    } else {
      return Promise.reject(error);
    }
  }
);

export const addBearerToken = (token: string): void => {
  fetch.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeBearerToken = (): void => {
  delete fetch.defaults.headers.Authorization;
};

export default fetch;

// New way to query data
export const graphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
);

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const res = await graphQLClient.request(query, variables);

    return res;
  };
}
