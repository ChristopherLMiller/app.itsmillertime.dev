import { ApiEndpoint, defaultImage, pageSettings } from "config";
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
      const res = await fetch(`${ApiEndpoint}/map/markers`, {
        headers: {
          "Content-Type": "application/json",
          "X-api-key": process.env.NEXT_PUBLIC_API_KEY,
        },
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
        <Map center={[41.5090921, -85.6764342]} zoom={13} markers={markers} />
      )}
    </PageLayout>
  );
};

export default ParksPage;
