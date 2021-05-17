import { NextSeo } from 'next-seo';
import { Grid } from 'src/components/Grid';
import PageLayout from 'src/layout/PageLayout';
import Image from 'src/components/Images';
import Card from 'src/components/Card';
import { NextPage } from 'next';
import cookies from 'next-cookies';
import Loader from 'src/components/Loader';
import styled from 'styled-components';
import Link from 'next/link';
import { useGalleriesQuery } from 'src/utils/graphql/react-query/queries/Galleries';

const title = `Gallery`;
const description = `A visual of all the things me!`;

// TODO: fix anchor tag on the main tag in system default, breaks this here
const Anchor = styled.a`
  box-shadow: none;
  cursor: pointer;
  &:hover {
    box-shadow: none;
  }
`;
interface iGalleriesIndexPage {
  nsfw: string;
}
const GalleriesIndexPage: NextPage<iGalleriesIndexPage> = ({ nsfw }) => {
  const { isFetching, error, data } = useGalleriesQuery({
    sort: `createdAt:ASC`,
    where: { nsfw },
  });

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
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977270/clm-new/uploads/galleries_be8f339ef5.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/galleries`,
        }}
      />
      {isFetching && <Loader isLoading={isFetching} />}
      <Grid gap="30px" min="500px" masonry>
        {data?.galleries?.map((gallery) => (
          <Link href={`/galleries/album/${gallery.slug}`} key={gallery.slug}>
            <Anchor>
              <Image
                public_id={`${gallery.featured_image.provider_metadata.public_id}`}
                width={gallery.featured_image.width}
                height={gallery.featured_image.height}
                alt={`${gallery.title}`}
                caption={`${gallery.title}${
                  gallery.status === `PUBLIC` ? `` : ` - ${gallery.status}`
                }`}
                hoverable
                key={gallery.slug}
              />
            </Anchor>
          </Link>
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
