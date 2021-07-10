import { GraphQLClient } from 'graphql-request';
import { getSession } from 'next-auth/client';

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
