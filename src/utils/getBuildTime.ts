import { ApiEndpoint } from "config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getBuildTime = async (id: string): Promise<any> => {
  const response = await fetch(`${ApiEndpoint}/clockify/buildtime/${id}`, {
    method: `GET`,
    credentials: "omit",
    headers: {
      "x-api-key":
        "46c446ba8878e0fed3da1901828f9a5539989b567915d82e894a63207c1708be",
    },
  });

  const { data, statusCode, error } = await response.json();
  if (statusCode === 200) {
    return data?.duration;
  } else {
    throw new Error(error);
  }
};
