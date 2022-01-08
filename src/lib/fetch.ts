import { GraphQLClient } from "graphql-request";
import { isDev } from "src/utils";

export const graphQLClient = new GraphQLClient(
  `${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`
);

export function fetcher<TData, TVariables>(
  query: string,
  variables?: TVariables
) {
  return async (): Promise<TData> => {
    // if the jwt is supplied in the variables and isn't null/undefined
    // then lets set the request header to include it
    // @ts-ignore
    const jwt = variables?.jwt;

    // Filter out the JWt now so that we don't accidently send it along as a variable
    const finalVariables = Object.keys(variables)
      .filter((key) => key != "jwt")
      .reduce((obj, key) => {
        obj[key] = variables[key];
        return obj;
      }, {});

    const requestHeaders = {
      authorization: `Bearer ${jwt}`,
    };
    return await graphQLClient.request(
      query,
      finalVariables,
      jwt && requestHeaders
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
