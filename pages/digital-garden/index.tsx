import Card from "@components/Card";
import { cloudinary, pageSettings } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PageLayout from "src/layout/PageLayout";

const DigitalGardenIndexPage: NextPage = () => {
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.digitalGarden.title}
      description={pageSettings.digitalGarden.description}
    >
      <NextSeo
        title={pageSettings.digitalGarden.title}
        description={pageSettings.digitalGarden.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: pageSettings.digitalGarden.title,
          description: pageSettings.digitalGarden.description,
          type: `website`,
          images: [
            {
              alt: `Digital Garden`,
              width: 800,
              height: 600,
              url: `https://res.cloudinary.com/${cloudinary.cloudName}/image/upload/w_800,h_600,q_auto,f_auto/v1594740865/clm-new/assets/digital-garden.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      <Card heading="Digital Garden">
        <p>
          Welcome to my digital garden, a place for all the random thoughts in
          my head and so on to live. Here you will find things like recipes,
          books i want to read and so on.
        </p>
        {false && <p>There was an error fetching items. {false}</p>}
      </Card>
    </PageLayout>
  );
};
export default DigitalGardenIndexPage;
