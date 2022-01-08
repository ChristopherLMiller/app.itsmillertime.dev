import Card from "@components/Card";
import { Grid } from "@components/Grid";
import { defaultImage, pageSettings } from "config";
import { formatRelative, parseISO } from "date-fns";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { ArrayList } from "src/components/arrayList";
import Image from "src/components/Images";
import Loader from "src/components/Loader";
import { useGalleriesQuery } from "src/graphql/schema/galleries/galleries.query.generated";
import PageLayout from "src/layout/PageLayout";
import styled from "styled-components";

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
  const queryParams = router.query;
  const where = { nsfw: false, ...queryParams };

  const { isLoading, error, data, isSuccess } = useGalleriesQuery({
    sort: `createdAt:ASC`,
    where: where,
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
    <PageLayout
      title={pageSettings.gallery.title}
      description={pageSettings.gallery.description}
    >
      {isLoading && <Loader isLoading={isLoading} />}
      <NextSeo
        title={pageSettings.gallery.title}
        description={pageSettings.gallery.description}
        openGraph={{
          title: pageSettings.gallery.title,
          description: pageSettings.gallery.description,
          type: `website`,
          images: [
            {
              alt: `Image of photo albums`,
              width: 800,
              height: 600,
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/w_800,f_auto,q_auto/clm-new/uploads/galleries_be8f339ef5.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      {isSuccess && data?.galleries.length === 0 && (
        <Card heading="No Galleries Found">
          <p>
            We were unable to find any galleries matching your criteria. Sorry
          </p>
        </Card>
      )}
      <Grid gap="30px" columns={3} masonry>
        {isSuccess &&
          data?.galleries?.map((gallery) => (
            <Link
              href={`/gallery/album/${gallery.slug}`}
              key={gallery.slug}
              passHref
            >
              <Anchor>
                <Image
                  public_id={`${
                    gallery?.featured_image?.provider_metadata?.public_id ||
                    defaultImage.public_id
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
