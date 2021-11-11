import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { Grid } from "src/components/Grid";
import PageLayout from "src/layout/PageLayout";
import Image from "src/components/Images";
import Card from "src/components/Card";
import Markdown from "src/components/Card/elements/Markdown";
import styled from "styled-components";
import { formatRelative } from "date-fns";
import { getServerSideSEO, isAdmin } from "src/utils";
import { useGalleryQuery } from "src/graphql/schema/galleries/gallery.query.generated";
import { Gallery } from "src/graphql/types";
import { useSession } from "next-auth/client";
import ShareButtons from "src/components/ShareButtons";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 30px;

  @media screen and (min-width: 750px) {
    grid-template-columns: 1fr 25%;
  }
`;

const Reverse = styled.div`
  grid-row: 1;

  @media screen and (min-width: 750px) {
    grid-row: auto;
  }
`;
interface iGalleryPage {
  SEO: Gallery;
}
const GalleryPage: NextPage<iGalleryPage> = ({ SEO }) => {
  const [session] = useSession();
  const { data, error, isLoading } = useGalleryQuery({
    id: SEO.id,
  });

  if (error) {
    console.error(error);
  }

  return (
    <PageLayout
      title={SEO.title}
      description={`A visual of all the things me!`}
      padding={false}
    >
      <NextSeo
        title={SEO.title}
        description={SEO.description}
        openGraph={{
          title: `${SEO.title}`,
          description: `${SEO.description}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery/album/${SEO.slug}`,
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
          <SimpleReactLightbox>
            <SRLWrapper>
              <Grid gap="30px" min="425px" masonry>
                {data.gallery.gallery_images?.map((image) => (
                  <a key={image.slug} href={image.watermarked.url}>
                    <Image
                      public_id={`${image.watermarked.provider_metadata.public_id}`}
                      width={image.watermarked.width}
                      height={image.watermarked.height}
                      alt={`${image.caption}`}
                      caption={`${image.caption}`}
                      key={image.slug}
                    />
                  </a>
                ))}
              </Grid>
            </SRLWrapper>
          </SimpleReactLightbox>
          <Reverse>
            <Card heading="About This Gallery" align="left">
              <ShareButtons
                url={`${process.env.NEXT_PUBLIC_SITE_URL}/gallery/album/${SEO.slug}`}
                media={SEO.featured_image?.url}
                title={SEO?.title}
              />
              {isAdmin(session?.user) && (
                <a
                  href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::gallery.gallery/${data.gallery.id}`}
                  target="_blank"
                  rel="noopener norefer"
                >
                  Edit
                </a>
              )}
              <p>Album Name: {data.gallery.title}</p>
              <p>
                Created On:{` `}
                {formatRelative(
                  new Date(data.gallery.createdAt as string),
                  new Date()
                )}
              </p>
              <p>
                Last Updated:{` `}
                {formatRelative(
                  new Date(data.gallery.updatedAt as string),
                  new Date()
                )}
              </p>
              <p># Images: {data.gallery.gallery_images.length}</p>
              <Markdown source={data.gallery?.meta} />
            </Card>
          </Reverse>
        </GalleryGrid>
      )}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.query?.slug;

  if (slug) {
    const response = await getServerSideSEO(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/galleries?slug=${
        context.query[`slug`]
      }`,
      context
    );

    const data = await response.json();

    if (data.length) {
      return {
        props: { SEO: data[0] },
      };
    }
  }

  // default return 404, as not found for whatever reason
  return {
    redirect: {
      destination: `/404`,
      permanent: false,
    },
  };
};

export default GalleryPage;
