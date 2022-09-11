import { pageSettings } from "@fixtures/json/pages";
import { ApiEndpoint, defaultImage } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PageLayout from "src/layout/PageLayout";

const ParksPage: NextPage = () => {
  const router = useRouter();
  const [markers, setMarkers] = useState<Array<any>>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const Map = dynamic(() => import("@components/Map"), { ssr: false });

  useEffect(() => {
    async function fetchMarkers() {
      const requestHeaders: HeadersInit = new Headers();
      requestHeaders.set(
        "x-api-key",
        process.env.NEXT_PUBLIC_API_KEY as string
      );
      requestHeaders.set("Content-Type", "application/json");
      const res = await fetch(`${ApiEndpoint}/maps/markers`, {
        headers: requestHeaders,
      });
      const { statusCode, data } = await res.json();
      if (statusCode === 200) {
        setMarkers(data.markers);
        setIsLoading(false);
      }
    }

    fetchMarkers();
  }, []);

  return (
    <PageLayout
      title={pageSettings.parks.title}
      description={pageSettings.parks.description}
      boxed="var(--max-width-wide)"
    >
      <NextSeo
        title={pageSettings.parks.title}
        description={pageSettings.parks.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: pageSettings.parks.title,
          description: pageSettings.parks.description,
          type: `website`,
          images: [
            {
              alt: pageSettings.parks.title,
              width: defaultImage.width,
              height: defaultImage.height,
              url: `https://images.itsmillertime.dev/w_800,f_auto,q_auto/clm-new/uploads/lukasz_szmigiel_j_FC_Vi_YF_Ycus_unsplash_7256aa8380.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      {!isLoading && (
        <Map center={[41.5976259, -85.9981081]} zoom={10} markers={markers} />
      )}
    </PageLayout>
  );
};

export default ParksPage;
