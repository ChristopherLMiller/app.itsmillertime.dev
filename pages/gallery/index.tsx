import Card from "@components/Card";
import { pageSettings } from "@fixtures/json/pages";
import { NextPage } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import PageLayout from "src/layout/PageLayout";

const GalleriesIndexPage: NextPage = () => {
  const router = useRouter();
  const queryParams = router.query;
  const where = { nsfw: false, ...queryParams };

  return (
    <PageLayout
      title={pageSettings.gallery.title}
      description={pageSettings.gallery.description}
      boxed="var(--max-width-wide)"
    >
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
      <Card heading="Galleries">
        <p>The Galleries page is currently broken</p>
      </Card>
      {false && (
        <Card heading="No Galleries Found">
          <p>
            We were unable to find any galleries matching your criteria. Sorry
          </p>
        </Card>
      )}
    </PageLayout>
  );

  /*
      {false && (
        <ResponsiveMasonry>
          <Masonry gutter="3rem">
            {data?.galleries?.map((gallery) => (
              <CloudinaryImage
                key={gallery?.id}
                width={gallery?.featured_image?.width || 0}
                height={gallery?.featured_image?.height || 0}
                alt={gallery?.featured_image?.provider_metadata?.public_id}
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
  );*/
};

export default GalleriesIndexPage;
