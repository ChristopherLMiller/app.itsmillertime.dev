import Card from "@components/Card";
import CloudinaryImage from "@components/Images/CloudinaryImage";
import Loader from "@components/Loader";
import { pageSettings } from "@fixtures/json/pages";
import { formatRelative, parseISO } from "date-fns";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { ArrayList } from "src/components/arrayList";
import { useGalleriesQuery } from "src/graphql/schema/galleries/galleries.query.generated";
import PageLayout from "src/layout/PageLayout";

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
        <p>
          We were unable to fetch the data requested for whatever reason. Check
          the console for error or try again later.
        </p>
      </Card>
    );
  }

  return (
    <PageLayout
      title={pageSettings.gallery.title}
      description={pageSettings.gallery.description}
      boxed="var(--max-width-wide)"
    >
      {isLoading && <Loader isLoading={isLoading} />}
      <NextSeo
        title={pageSettings.gallery.title}
        description={pageSettings.gallery.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: pageSettings.gallery.title,
          description: pageSettings.gallery.description,
          type: `website`,
          images: [
            {
              alt: `Image of photo albums`,
              width: 800,
              height: 600,
              url: `https://images.itsmillertime.dev/w_800,f_auto,q_auto/clm-new/uploads/galleries_be8f339ef5.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
        }}
      />
      {isSuccess && data?.galleries?.length === 0 && (
        <Card heading="No Galleries Found">
          <p>
            We were unable to find any galleries matching your criteria. Sorry
          </p>
        </Card>
      )}
      {isSuccess && (
        <ResponsiveMasonry>
          <Masonry gutter="3rem">
            {data?.galleries?.map((gallery) => (
              <CloudinaryImage
                key={gallery?.id}
                width={gallery?.featured_image?.width || 0}
                height={gallery?.featured_image?.height || 0}
                public_id={
                  gallery?.featured_image?.provider_metadata?.public_id
                }
                hoverable={true}
                onClick={() => {
                  router.push(`/gallery/album/${gallery?.slug}`);
                }}
                caption={gallery?.title || "Default Title"}
              >
                <ul>
                  <li>
                    {`Added: ${formatRelative(
                      parseISO(gallery?.createdAt),
                      new Date()
                    )} - Updated: ${formatRelative(
                      parseISO(gallery?.updatedAt),
                      new Date()
                    )}`}
                  </li>
                  <li>
                    Categories:{` `}
                    <ArrayList array={gallery?.gallery_categories || []} />
                  </li>
                  <li>
                    Tags: <ArrayList array={gallery?.gallery_tags || []} />
                  </li>
                </ul>
              </CloudinaryImage>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      )}
    </PageLayout>
  );
};

export default GalleriesIndexPage;
