import { GetServerSideProps, NextPage } from 'next';
import { NextSeo } from 'next-seo';
import { Grid } from 'src/components/Grid';
import PageLayout from 'src/layout/PageLayout';
import Image from 'src/components/Images';
import { useGalleriesQuery } from 'src/utils/graphql/react-query/queries/Galleries';
import { useRouter } from 'next/router';
import Card from 'src/components/Card';
import Markdown from 'src/components/Card/elements/Markdown';
import styled from 'styled-components';
import { formatRelative } from 'date-fns';
import { getServerSideSEO } from 'src/utils/functions/fetch';

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media screen and (min-width: 750px) {
    grid-template-columns: auto 1fr;
  }
`;

const Reverse = styled.div`
  grid-row: 1;

  @media screen and (min-width: 750px) {
    grid-row: auto;
  }
`;
interface iGalleryPage {
  SEO: {
    title: string;
    slug: string;
    description: string;
    featured_image: {
      url: string;
      width: number;
      height: number;
      alternativeText: string;
    };
  };
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
    <PageLayout title={SEO.title} description={SEO.description} padding={false}>
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
        <GalleryGrid>
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

          <Reverse>
            <Card heading="About This Gallery" align="left">
              <p>Album Name: {gallery.title}</p>
              <p>
                Created On:{` `}
                {formatRelative(
                  new Date(gallery.createdAt as string),
                  new Date()
                )}
              </p>
              <p>
                Last Updated:{` `}
                {formatRelative(
                  new Date(gallery.updatedAt as string),
                  new Date()
                )}
              </p>
              <p># Images: {gallery.gallery_images.length}</p>
              <Markdown source={gallery?.meta} />
            </Card>
          </Reverse>
        </GalleryGrid>
      )}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await getServerSideSEO(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/galleries?slug=${
      context.query[`slug`]
    }`,
    context
  );
  if (data.length) {
    return {
      props: { SEO: data[0] },
    };
  } else {
    return {
      redirect: {
        destination: `/404`,
        permanent: false,
      },
    };
  }
};

export default GalleryPage;
