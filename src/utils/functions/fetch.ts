import Axios from 'axios';
import Router from 'next/router';
import Cookies from 'js-cookie';
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

export const gqlQuery = (
  queryString: string,
  variables?: Array<[string, string]>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  const jwt = Cookies.get(`jwt`);
  if (jwt) {
    fetch.defaults.headers.Authorization = `Bearer ${jwt}`;
  }
  return fetch
    .post(`/graphql`, { query: queryString, variables })
    .then((data) => data.data.data);
};

export default fetch;

// New way to query data
export const graphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
);
