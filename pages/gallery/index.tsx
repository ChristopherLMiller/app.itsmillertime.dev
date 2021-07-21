import { NextSeo } from "next-seo";
import { Grid } from "src/components/Grid";
import PageLayout from "src/layout/PageLayout";
import Image from "src/components/Images";
import Card from "src/components/Card";
import { NextPage } from "next";
import Loader from "src/components/Loader";
import styled from "styled-components";
import Link from "next/link";
import { ArrayList } from "src/components/arrayList";
import { useRouter } from "next/router";
import { useGalleriesQuery } from "src/graphql/schema/galleries/galleries.query.generated";
import { formatRelative, parseISO } from "date-fns";
import { SITE_DEFAULT_IMAGE_FILE } from "config";
import { isAdmin } from "src/utils";
import { useSession } from "next-auth/client";

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

const SubText = styled.div`
  p {
    font-size: 0.75em;

    span {
      font-size: 1em;
    }
  }
`;

const GalleriesIndexPage: NextPage = () => {
  const router = useRouter();
  const [session] = useSession();
  const queryParams = router.query;

  console.log(queryParams);
  const { isLoading, error, data, isSuccess } = useGalleriesQuery({
    sort: `createdAt:ASC`,
    where: queryParams,
  });

  if (error) {
    console.error(error);
    return (
      <Card heading="Uh Oh!">
        <p>We were unable to fetch the data requested for whatever reason.</p>
        <p>More specifically: {error}</p>
      </Card>
    );
  }

  return (
    <PageLayout title={title} description={description} padding={false}>
      {isLoading && <Loader isLoading={isLoading} />}
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
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery`,
        }}
      />

      <Grid gap="30px" columns={3} masonry>
        {isSuccess &&
          data?.galleries?.map((gallery) => (
            <Link href={`/galleries/album/${gallery.slug}`} key={gallery.slug}>
              <Anchor>
                <Image
                  public_id={`${
                    gallery?.featured_image?.provider_metadata?.public_id ||
                    SITE_DEFAULT_IMAGE_FILE
                  }`}
                  width={gallery?.featured_image?.width || 900}
                  height={gallery?.featured_image?.height || 450}
                  alt={`${gallery.title}`}
                  caption={`${gallery.title}${
                    gallery.status === `PUBLIC` ? `` : ` - ${gallery.status}`
                  }`}
                  hoverable
                  key={gallery.slug}
                >
                  <SubText>
                    <p>
                      Added:{` `}
                      {formatRelative(parseISO(gallery.createdAt), new Date())}
                      {` - Updated: `}
                      {formatRelative(parseISO(gallery.updatedAt), new Date())}
                      {` - Image Count: ${gallery?.gallery_images?.length}`}
                    </p>
                    <p>
                      Categories:{` `}
                      <ArrayList array={gallery.gallery_categories} />
                    </p>
                    <p>
                      Tags: <ArrayList array={gallery.gallery_tags} />
                    </p>
                    {isAdmin(session?.user) && (
                      <a
                        href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::gallery.gallery/${gallery.id}`}
                        target="_blank"
                        rel="noopener norefer"
                      >
                        Edit
                      </a>
                    )}
                  </SubText>
                </Image>
              </Anchor>
            </Link>
          ))}
      </Grid>
    </PageLayout>
  );
};

export default GalleriesIndexPage;
