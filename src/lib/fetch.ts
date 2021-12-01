import { GraphQLClient } from "graphql-request";
import { getSession } from "next-auth/client";

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

export const fetchData = async (query: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: query }),
    }
  );
  const data = await response.json();
  return data.data;
};
