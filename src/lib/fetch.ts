import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
);

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables,
  jwt?: string
) {
  return async (): Promise<TData> => {
    const requestHeaders: HeadersInit = new Headers();

    if (jwt) {
      requestHeaders.set("authorization", `Bearer ${jwt}`);
    }

    return await graphQLClient.request(query, variables, requestHeaders);
  };
}

export async function fetchData(document, variables) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
    body: JSON.stringify({
      query: document,
      variables,
    }),
  });
  return await res.json();
}
