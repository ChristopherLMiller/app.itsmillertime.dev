import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Grid } from 'src/components/Grid';
import PageLayout from 'src/layout/PageLayout';
import Image from 'src/components/Images';
import { useGalleriesQuery } from 'src/utils/graphql/react-query/queries/Galleries';
import { useRouter } from 'next/router';

interface iGalleryPage {
  SEO: any;
}
const GalleryPage: NextPage<iGalleryPage> = ({ SEO }) => {
  const router = useRouter();
  const { data, error, isLoading } = useGalleriesQuery({
    sort: `createdAt:ASC`,
    where: {
      slug: router.query[`slug`],
    },
  });
  const gallery = data?.galleries[0];

  if (error) {
    console.log(error);
  }

  return (
    <PageLayout title={SEO.title} description={SEO.description}>
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={{
          title: `${SEO.title}`,
          description: `${SEO.description}`,
          type: `SEO`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/galleries/gallery/${SEO.slug}`,
          images: [
            {
              url: SEO.featured_image?.url,
              width: SEO.featured_image?.width,
              height: SEO.featured_image?.height,
              alt: SEO.featured_image?.alternativeText,
            },
          ],
        }}
      />

      {!isLoading && (
        <Grid gap="30px" min="425px" masonry>
          {gallery.gallery_images?.map((image) => (
            <Image
              public_id={`${image.watermarked.provider_metadata.public_id}`}
              width={image.watermarked.width}
              height={image.watermarked.height}
              alt={`${image.caption}`}
              caption={`${image.caption}`}
              key={image.slug}
            />
          ))}
        </Grid>
      )}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const jwt = context.req.cookies.jwt;

  const requestHeaders = new Headers({
    Authorization: `Bearer ${jwt}`,
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/galleries?slug=${
      context.query[`slug`]
    }`,
    {
      headers: jwt != null ? requestHeaders : null,
    }
  );

  const data = await res.json();
  if (!data.length) {
    return {
      redirect: {
        destination: `/404`,
        permanent: false,
      },
    };
  }

  return {
    props: { SEO: data[0] },
  };
};

export default GalleryPage;
