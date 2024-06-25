import { useEffect, useState } from "react";
import makeDurationFriendly from "src/utils/makeDurationFriendly";

export function useBuildTime(clockifyProjectId?: string) {
  const [buildTime, setBuildTime] = useState<string>();

  useEffect(() => {
    async function fetchBuildTime() {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set(
        "X-Api-Key",
        process.env.NEXT_PUBLIC_CLOCKIFY_API_KEY as string,
      );

      /*const response = await fetch(
        `${APIEndpoint.live}clockify/buildtime/${clockifyProjectId}`,
        {
          method: `GET`,
          credentials: "omit",
          headers: requestHeaders,
        },
      );*/
      const response = await fetch(
        `https://api.clockify.me/api/v1/workspaces/${process.env.NEXT_PUBLIC_CLOCKIFY_WORKSPACE}/projects/${clockifyProjectId}`,
        {
          headers: requestHeaders,
        },
      );

      if (response.status === 200) {
        const data = await response.json();
        setBuildTime(makeDurationFriendly(data?.duration));
      } else {
        setBuildTime("N/A");
      }
    }

    // check if there is a ID passed in, if not just set to none and return
    if (clockifyProjectId !== null) {
      fetchBuildTime();
    } else {
      setBuildTime(`N/A`);
    }
  }, [clockifyProjectId]);

  return { buildTime };
}
