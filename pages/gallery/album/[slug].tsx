import Card from "@components/Card";
import Markdown from "@components/Markdown";
import Table from "@components/Table";
import { pageSettings } from "config";
import { formatRelative } from "date-fns";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { Grid } from "src/components/Grid";
import Image from "src/components/Images";
import ShareButtons from "src/components/ShareButtons";
import { Gallery } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { isAdmin } from "src/utils";
import styled from "styled-components";

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
  album: Gallery;
}
const GalleryPage: NextPage<iGalleryPage> = ({ album }) => {
  console.log(album);
  const [session] = useSession();
  const router = useRouter();
  /*const { data, error, isLoading } = useGalleryQuery({
    id: SEO.id,
  });

  if (error) {
    console.error(error);
  }*/

  return (
    <PageLayout
      title={pageSettings.gallery.title}
      description={pageSettings.gallery.description}
    >
      <ShareButtons
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/gallery/album/${album.slug}`}
        media={album.featured_image?.url}
        title={album?.title}
      />
      <NextSeo
        title={album.title}
        description={album.description}
        openGraph={{
          title: `${album.title}`,
          description: `${album.description}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: album.featured_image?.url,
              width: album.featured_image?.width,
              height: album.featured_image?.height,
              alt: album.featured_image?.alternativeText,
            },
          ],
        }}
      />

      <GalleryGrid>
        <SimpleReactLightbox>
          <SRLWrapper>
            <Grid gap="30px" min="425px" masonry>
              {album.gallery_images?.map((image) => (
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
          <Card heading="About This Gallery" align="left" padding={false}>
            <Table
              rows={[
                ["Album Name", album.title],
                [
                  "Created",
                  formatRelative(
                    new Date(album.createdAt as string),
                    new Date()
                  ),
                ],
                [
                  "Updated Last",
                  formatRelative(
                    new Date(album.updatedAt as string),
                    new Date()
                  ),
                ],
                ["Num Images", album.gallery_images?.length.toString()],
                [
                  {
                    label: isAdmin(session?.user) ? "Edit" : "",
                    url: isAdmin(session?.user)
                      ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::gallery.gallery/${album.id}`
                      : ``,
                  },
                  "",
                ],
              ]}
            />

            <Markdown source={album?.meta} />
          </Card>
        </Reverse>
      </GalleryGrid>
    </PageLayout>
  );
};

/*export const getServerSideProps: GetServerSideProps = async (context) => {
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
};*/

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params["slug"];
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/galleries?slug_eq=${slug}`
  );
  const data = await response.json();

  if (data.length) {
    return {
      props: {
        album: data[0],
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/galleries`;
  let paths = [];

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.length) {
      paths = data.map((item) => ({
        params: { slug: item.slug },
      }));
    }
  } catch (error) {
    // We shouldn't really ever have an issue fetchign this data unless like network is offline
    // log it out and just return empty paths
    console.log(error);
  } finally {
    return { paths, fallback: "blocking", revalidate: 120 };
  }
};

export default GalleryPage;
