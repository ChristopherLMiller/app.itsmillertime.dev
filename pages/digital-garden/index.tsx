import { CLOUDINARY_CLOUD, CLOUDINARY_URL } from "config";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Card from "src/components/Card";
import { Grid } from "src/components/Grid";
import PageLayout from "src/layout/PageLayout";

const RecipeMarkdown = require("data/digital_garden/recipes/italian-sausage-bake.md")
  .default;
const MeatloafMarkdown = require("data/digital_garden/recipes/meatloaf.md")
  .default;

const title = "Digital Garden";
const description = "Random thoughts of me";

const DigitalGardenIndexPage: NextPage = () => {
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
      <Grid columns={5} gap="5rem">
        <Card>
          <RecipeMarkdown />
        </Card>
        <Card>
          <MeatloafMarkdown />
        </Card>
        <Card>
          <RecipeMarkdown />
        </Card>
      </Grid>
    </PageLayout>
  );
};

export default DigitalGardenIndexPage;
