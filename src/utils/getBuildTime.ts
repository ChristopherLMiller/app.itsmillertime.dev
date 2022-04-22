import { ApiEndpoint } from "config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBuildTime = async (id: string): Promise<any> => {
  const response = await fetch(`${ApiEndpoint}/clockify/buildtime/${id}`, {
    method: `GET`,
    credentials: "omit",
    headers: {
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
  });

  const { data, statusCode, error } = await response.json();
  if (statusCode === 200) {
    return data?.duration;
  } else {
    throw new Error(error);
  }
};
