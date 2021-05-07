import { CLOUDINARY_CLOUD } from 'config';
import { NextSeo } from 'next-seo';
import { Grid } from 'src/components/Grid';
import PageLayout from 'src/layout/PageLayout';
import Card from 'src/components/Card';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const title = `Digital Garden`;
const description = `Random thoughts of me`;

const DigitalGardenIndexPage: NextPage = () => {
  const router = useRouter();
  const { slug } = router.query;
  /*const { isLoading, error, data } = useQuery([`digitalGarden`, { slug }], () =>
    gqlQuery(ALL_GARDEN_ITEMS_STRING)
  );*/

  //console.log(data);

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Digital Garden`,
              width: 800,
              height: 600,
              url: `https://res.cloudinary.com//${CLOUDINARY_CLOUD}/image/upload/w_800,h_600,q_auto/v1594740865/clm-new/assets/digital-garden.jpg`,
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
        {false && <p>There was an error fetching items. {false}</p>}
      </Card>

      <Grid columns="5" gap="30px">
        <Card
          heading="Item Title"
          actionLinks={[
            {
              title: `View`,
              href: `/digital-garden/slug`,
            },
          ]}
          markdown={`##Cotnents`}
          align="left"
        />
      </Grid>
    </PageLayout>
  );
};

export default DigitalGardenIndexPage;
