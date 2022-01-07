import { GraphQLClient } from "graphql-request";
import { getSession } from "next-auth/react";
import { isDev } from "src/utils";

export const graphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
);

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const session = await getSession();
    const requestHeaders = {
      authorization: `Bearer ${session?.jwt}`,
    };
    return await graphQLClient.request(
      query,
      variables,
      session ? requestHeaders : null
    );
  };
}

export const fetchData = async (
  query: string,
  variables?: any | null,
  jwt?: string
) => {
  const requestHeaders = {
    "Content-Type": "application/json",
  };

  if (jwt) {
    requestHeaders["authorization"] = `Bearer ${jwt}`;
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
    {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify({ query: query, variables: variables }),
    }
  );
  const data = await response.json();
  // TODO: handle errors and return them instead of just tryign to send back data
  isDev() && console.log(data);
  return data.data;
};
