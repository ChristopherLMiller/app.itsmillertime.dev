import { ApiEndpoint, ImagesEndpoint } from "config";
import { useEffect, useState } from "react";

export function useEXIF(public_id: string, enabled: boolean) {
  const [exifData, setExifData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchExif() {
      const imageURL = encodeURIComponent(`${ImagesEndpoint}/${public_id}.jpg`);
      console.log(imageURL);
      try {
        const response = await fetch(
          `${ApiEndpoint}/images/exif?url=${imageURL}`,
          {
            credentials: "same-origin",
            headers: {
              "Content-Type": `application/json`,
              Accept: `application/json`,
              "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
            },
          }
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
  }, [public_id]);

  return { isLoading, exifData };
}
