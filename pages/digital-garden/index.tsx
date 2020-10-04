import { CLOUDINARY_CLOUD, CLOUDINARY_URL } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { Grid } from "src/components/Grid";
import PageLayout from "src/layout/PageLayout";
import Card from "src/components/Card";
import { gqlQuery } from "src/utils/functions/fetch";
import { ALL_GARDEN_ITEMS_STRING } from "src/utils/graphql/queries";
import { useQuery } from "react-query";

const title = "Digital Garden";
const description = "Random thoughts of me";

interface iDigitalGarden {
  directory: Array<string>;
}

const DigitalGardenIndexPage: NextPage<iDigitalGarden> = () => {
  const { isLoading, error, data } = useQuery("digitalGarden", () =>
    gqlQuery(ALL_GARDEN_ITEMS_STRING)
  );

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: "website",
          images: [
            {
              alt: "Digital Garden",
              width: 800,
              height: 600,
              url: `${CLOUDINARY_URL}/${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto/v1594740865/clm-new/assets/digital-garden.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/digital-garden`,
        }}
      />
      <Card heading="Digital Garden">
        <p>
          Welcome to my digital garden, a place for all the random thoughts in
          my head and so on to live. Here you will find things like recipes,
          books i want to read and so on.
        </p>
        {error && <p>There was an error fetching items. {error}</p>}
      </Card>

      <Grid columns="5" gap="30px">
        {!isLoading &&
          data.data.data.gardens.map((item) => (
            <Card
              heading={item.title}
              actionLinks={[
                {
                  title: "View",
                  href: `/digital-garden/${item.slug}`,
                },
              ]}
              markdown={item.contents}
              align="left"
            />
          ))}
      </Grid>
    </PageLayout>
  );
};

export default DigitalGardenIndexPage;
