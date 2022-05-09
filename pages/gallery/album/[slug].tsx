import Card from "@components/Card";
import { ImageLayouts } from "@components/Images";
import CloudinaryImage from "@components/Images/CloudinaryImage";
import Markdown from "@components/Markdown";
import ShareButtons from "@components/ShareButtons";
import Table from "@components/Table";
import { lightboxOptions, pageSettings } from "config";
import { formatRelative } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { GalleriesDocument } from "src/graphql/schema/galleries/galleries.query.generated";
import { Enum_Gallery_Status, Gallery } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";
import { isAdmin } from "src/utils";
import { isSessionLoading } from "src/utils/auth";
import styled from "styled-components";

const Padding = styled.div`
  padding-inline: 2rem;
`;

interface iGalleryPage {
  album: Gallery;
}
const GalleryPage: NextPage<iGalleryPage> = ({ album }) => {
  const session = useSession();
  const router = useRouter();

  const isPublic = album.status === Enum_Gallery_Status.Public;

  return (
    <PageLayout
      title={pageSettings.gallery.title}
      description={pageSettings.gallery.description}
      padding={false}
    >
      <ShareButtons
        url={`${process.env.NEXT_PUBLIC_SITE_URL}/gallery/album/${album.slug}`}
        media={album.featured_image?.url}
        title={album?.title}
      />
      <NextSeo
        title={album.title}
        description={album.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
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
        noindex={!isPublic}
      />

      <SimpleReactLightbox>
        <SRLWrapper options={lightboxOptions}>
          <ResponsiveMasonry>
            <Masonry gutter="3em">
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
                        label:
                          !isSessionLoading(session) && isAdmin(session)
                            ? "Edit"
                            : "",
                        url:
                          !isSessionLoading(session) && isAdmin(session)
                            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::gallery.gallery/${album.id}`
                            : ``,
                      },
                      "",
                    ],
                  ]}
                />

                <Padding>
                  <Markdown source={album?.meta} />
                </Padding>
              </Card>
              {album.gallery_images?.map((image) => (
                <CloudinaryImage
                  layout={ImageLayouts.responsive}
                  public_id={image.watermarked.provider_metadata.public_id}
                  width={600}
                  height={400}
                  alt={`${image.caption}`}
                  caption={`${image.caption}`}
                  hoverable={true}
                  getExif={true}
                  key={image.watermarked?.provider_metadata.public_id}
                />
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </SRLWrapper>
      </SimpleReactLightbox>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { slug } = context.query;

  const defaultReturn = {
    redirect: {
      destination: "/gallery",
      permanent: false,
    },
  };

  // if the slug isn't provided, lets eject and 404
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Fetch the data at this point
  const data = await fetchData(GalleriesDocument, {
    where: { slug_eq: slug },
    sort: "title:ASC",
  });

  // next step is make sure we got at least one result
  if (data?.galleries?.length == 0) {
    return defaultReturn;
  }

  const album = data.galleries[0];

  // use a switch to determine if the user is allowed to view the gallery from here
  switch (album.status) {
    case Enum_Gallery_Status.Private:
    case Enum_Gallery_Status.Draft:
    case Enum_Gallery_Status.Archived:
      // if the user isn't an admin, then its a no go
      if (!isAdmin(session?.user)) {
        return defaultReturn;
      }
      break;
    case Enum_Gallery_Status.Protected:
      // Albums of this type we need to check the persons role and group as they are used to determine access
      if (!session?.user) {
        return defaultReturn;
      }

      const userRole = session.user.role.name;
      const albumGroups = album.roles.map((role) => role.name);
      const albumPersons = album.users_permissions_users.map((user) => user.id);

      if (
        isAdmin(session?.user) ||
        albumGroups.includes(userRole) ||
        albumPersons.includes(session?.user?.id)
      ) {
        break;
      } else {
        return defaultReturn;
      }
    case Enum_Gallery_Status.Public:
    default:
      // nothing needs to be done here
      break;
  }

  return {
    props: {
      album: data?.galleries[0],
    },
  };
};

export default GalleryPage;
