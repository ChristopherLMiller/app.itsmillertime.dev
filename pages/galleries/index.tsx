import { NextSeo } from 'next-seo';
import { Grid } from 'src/components/Grid';
import PageLayout from 'src/layout/PageLayout';
import { useGalleries } from 'src/utils/graphql/queries/galleries';
import Image from 'src/components/Images';
import Card from 'src/components/Card';
import { NextPage } from 'next';
import cookies from 'next-cookies';
import Loader from 'src/components/Loader';

const title = `Gallery`;
const description = `A visual of all the things me!`;

const GalleriesIndexPage: NextPage = () => {
  const { isFetching, error, data } = useGalleries();

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
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Image of photo albums`,
              width: 6000,
              height: 4000,
              url: `https://clm-sites-strapi.s3.us-east-2.amazonaws.com/galleries_c48d554971.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/galleries`,
        }}
      />
      {isFetching && <Loader isLoading={isFetching} />}
      <Grid gap="30px" min="425px" masonry>
        {data?.galleries?.map((gallery) => (
          <Image
            image={gallery.featured_image}
            alt={gallery.title}
            key={gallery.featured_image.url}
            hoverable
          >
            <p>{gallery.title}</p>
          </Image>
        ))}
      </Grid>
    </PageLayout>
  );
};

GalleriesIndexPage.getInitialProps = async (ctx) => {
  const clientCookies = cookies(ctx);
  return { nsfw: clientCookies?.nsfw };
};

export default GalleriesIndexPage;
