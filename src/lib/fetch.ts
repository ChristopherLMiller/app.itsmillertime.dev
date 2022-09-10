import { GraphQLClient } from "graphql-request";

export const graphQLClient = new GraphQLClient(
  "http://admin.itsmillertime.dev/graphql"
);

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    const requestHeaders = {
      //authorization: `Bearer ${jwt}`,
      "x-api-key": `${process.env.NEXT_PUBLIC_API_KEY}`,
    };
    return await graphQLClient.request(query, variables, requestHeaders);
  };
}
