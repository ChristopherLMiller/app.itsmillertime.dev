import { cloudinary, pageSettings } from "config";
import { NextSeo } from "next-seo";
import { Grid } from "src/components/Grid";
import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { NextPage } from "next";

const DigitalGardenIndexPage: NextPage = () => (
  <PageLayout
    title={pageSettings.digitalGarden.title}
    description={pageSettings.digitalGarden.description}
  >
    <NextSeo
      title={pageSettings.digitalGarden.title}
      description={pageSettings.digitalGarden.description}
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
        url: pageSettings.digitalGarden.url,
      }}
    />
    <Card heading="Digital Garden">
      <p>
        Welcome to my digital garden, a place for all the random thoughts in my
        head and so on to live. Here you will find things like recipes, books i
        want to read and so on.
      </p>
      {false && <p>There was an error fetching items. {false}</p>}
    </Card>

    <Grid columns="5" gap="30px">
      <Card
        heading="Garden Title"
        actionLinks={[
          {
            title: `View`,
            href: `/digital-garden/slug`,
          },
        ]}
        markdown={`### Contents`}
        align="left"
      />
    </Grid>
  </PageLayout>
);

export default DigitalGardenIndexPage;
