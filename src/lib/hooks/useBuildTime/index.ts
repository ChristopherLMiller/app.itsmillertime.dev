import { ApiEndpoint } from "config";
import { useEffect, useState } from "react";
import { Maybe } from "src/graphql/types";
import makeDurationFriendly from "src/utils/makeDurationFriendly";

export function useBuildTime(clockifyProjectId?: Maybe<string>) {
  const [buildTime, setBuildTime] = useState<string>();

  useEffect(() => {
    async function fetchBuildTime() {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set(
        "X-api-key",
        process.env.NEXT_PUBLIC_API_KEY as string
      );

      const response = await fetch(
        `${ApiEndpoint}/clockify/buildtime/${clockifyProjectId}`,
        {
          method: `GET`,
          credentials: "omit",
          headers: requestHeaders,
        }
      );
      const { data, statusCode, error } = await response.json();

      if (statusCode === 200) {
        setBuildTime(makeDurationFriendly(data?.duration) || "");
      } else {
        throw new Error(error);
      }
    }

    // check if there is a ID passed in, if not just set to none and return
    if (clockifyProjectId) {
      fetchBuildTime();
    } else {
      setBuildTime(`N/A`);
    }
  }, [clockifyProjectId]);

  return { buildTime };
}
