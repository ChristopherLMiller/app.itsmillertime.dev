import Card from "@components/Card";
import { Polaroid } from "@components/Images/Polaroid";
import Markdown from "@components/Markdown";
import ShareButtons from "@components/ShareButtons";
import Table from "@components/Table";
import { pageSettings } from "@fixtures/json/pages";
import { defaultImage, lightboxOptions } from "config";
import { formatRelative } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import PageLayout from "src/layout/PageLayout";
import { isAdmin } from "src/utils";
import { isSessionLoading } from "src/utils/auth";
import styled from "styled-components";

const Padding = styled.div`
  padding-inline: 2rem;
`;

interface iGalleryPage {
  album: any;
}
const GalleryPage: NextPage<iGalleryPage> = ({ album }) => {
  const router = useRouter();

  const isPublic = album.status === "PUBLIC";

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
        title={album.title || "Default Title"}
        description={album.description || "Default Description"}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: `${album.title}`,
          description: `${album.description}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: album.featured_image?.url || defaultImage.path,
              width: album.featured_image?.width || defaultImage.width,
              height: album.featured_image?.height || defaultImage.height,
              alt:
                album.featured_image?.alternativeText || defaultImage.altText,
            },
          ],
        }}
        noindex={!isPublic}
      />

      <SimpleReactLightbox>
        <SRLWrapper options={lightboxOptions}>
          <ResponsiveMasonry>
            <Masonry gutter="2rem" columnsCount={4}>
              <Card heading="About This Gallery" align="left" padding={false}>
                <Table
                  rows={[
                    ["Album Name", album.title || "Album Title"],
                    [
                      "Created",
                      formatRelative(
                        new Date(album.createdAt as string),
                        new Date(),
                      ),
                    ],
                    [
                      "Updated Last",
                      formatRelative(
                        new Date(album.updatedAt as string),
                        new Date(),
                      ),
                    ],
                    [
                      "Num Images",
                      album.gallery_images?.length.toString() || 0,
                    ],
                    [
                      {
                        label:
                          !isSessionLoading(null) && isAdmin(null)
                            ? "Edit"
                            : "",
                        url:
                          !isSessionLoading(null) && isAdmin(null)
                            ? `${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::gallery.gallery/${album.id}`
                            : ``,
                      },
                      "",
                    ],
                  ]}
                />

                <Padding>
                  <Markdown source={album?.meta || ""} />
                </Padding>
              </Card>
              {album.gallery_images?.map((image) => (
                <Polaroid
                  key={image?.id}
                  public_id={image?.watermarked?.provider_metadata.public_id}
                  width={image?.watermarked?.width as number}
                  height={image?.watermarked?.height as number}
                  alt={image?.caption as string}
                  caption={image?.caption as string}
                  skewed
                  hoverable
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
  const { slug } = context.query;

  const defaultReturn = {
    redirect: {
      destination: "/gallery",
      permanent: false,
    },
  };

  return defaultReturn;
  /*
  // if the slug isn't provided, lets eject and 404
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Fetch the data at this point
  const { data } = await fetchData(GalleryDocument, {
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
  };*/
};

export default GalleryPage;
