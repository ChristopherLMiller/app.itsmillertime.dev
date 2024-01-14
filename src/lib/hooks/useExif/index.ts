import { APIEndpoint, ImagesEndpoint } from "config";
import { useEffect, useState } from "react";

export function useEXIF(public_id: string, enabled: boolean) {
  const [exifData, setExifData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExif() {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set("Content-Type", "application/json");
      requestHeaders.set("Accept", "application/json");
      requestHeaders.set(
        "x-api-key",
        process.env.NEXT_PUBLIC_API_KEY as string,
      );
      const imageURL = encodeURIComponent(`${ImagesEndpoint}/${public_id}.jpg`);
      try {
        const response = await fetch(
          `${APIEndpoint.local}/images/exif?url=${imageURL}`,
          {
            credentials: "same-origin",
            headers: requestHeaders,
          },
        );
        const { data, error, statusCode } = await response.json();

        if (statusCode === 200) {
          setIsLoading(false);
          setExifData(data.exif);
        } else {
          console.log(error);
        }
      } catch (error) {
        console.log(error);
      }
    }

    // don't fetch if not enabled
    if (enabled) {
      fetchExif();
    }
  }, [public_id, enabled]);

  return { isLoading, exifData };
}
