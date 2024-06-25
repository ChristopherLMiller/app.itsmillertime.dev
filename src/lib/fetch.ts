import { EndpointAPI } from "config";
import qs from "qs";

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
  path: string,
  queryParams?: Record<string, unknown>,
  options?: {
    additionalHeaders?: { [key: string]: any };
    method?: "POST" | "GET" | "PUT" | "DELETE";
  },
): Promise<any> {
  // setup some basic headers
  const headers = new Headers();
  headers.set("Content-Type", "application/json");
  headers.set("Accept", "application/json");

  // Construct the URL
  const url = `${EndpointAPI}${path}?${qs.stringify(queryParams)}`;
  const response = await fetch(url, {
    method: options?.method || "GET",
    headers,
  });

  if (response.status === 200) {
    const data = await response.json();
    return {
      ...data,
      meta: { statusCode: response.status, ...data.meta },
    };
  } else {
    console.log(response);
    throw new Error(response.statusText);
  }
}
