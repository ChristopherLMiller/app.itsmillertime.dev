import { NextSeo } from "next-seo";
import { useQuery } from "react-query";
import { Grid } from "src/components/Grid";
import PageLayout from "src/layout/PageLayout";
import { gqlQuery } from "src/utils/functions/fetch";
import { ALL_GALLERIES_STRING } from "src/utils/graphql/queries";
import Image from "src/components/Images";
import Card from "src/components/Card";

const title = "Gallery";
const description = "A visual of all the things me!";

const GalleriesIndexPage = () => {
  const { isLoading, error, data } = useQuery("galleries", () =>
    gqlQuery(ALL_GALLERIES_STRING)
  );

  if (error) {
    console.log(error);
    return (
      <Card heading="Uh Oh!">
        <p>We were unable to fetch the data requested for whatever reason.</p>
        <p>More specifically: {error}</p>
      </Card>
    );
  }

  return (
    <PageLayout title={title} description={description}>
      <NextSeo title={title} description={description} />
      <Grid columns="3" gap="30px" min="425px">
        {!isLoading &&
          data.galleries.map((gallery) => (
            <Image image={gallery.featured_image.url} alt={gallery.title}>
              <p>{gallery.title}</p>
            </Image>
          ))}
      </Grid>
    </PageLayout>
  );
};

export default GalleriesIndexPage;
