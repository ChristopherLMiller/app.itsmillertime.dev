import { EndpointAPI } from "config";

export async function fetchData(document, variables) {
  const body = JSON.stringify({ query: document, variables });
  const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body,
  });
  return await res.json();
}

export async function fetchFromAPI(
  path,
  additionalHeaders?: { [key: string]: string },
  data?: any,
): Promise<any> {
  // setup some basic headers
  const headers = new Headers();

  const response = await fetch(`${EndpointAPI}${path}`, {
    headers: { ...headers, ...additionalHeaders },
  });

  const responseData = await response.json();
  return responseData;
}
