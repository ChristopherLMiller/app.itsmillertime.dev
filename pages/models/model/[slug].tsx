import Card from "@components/Card";
import ClockifyControls from "@components/ClockifyControls";
import { Grid, GridItem } from "@components/Grid";
import CloudinaryImage from "@components/Images/CloudinaryImage";
import Panel from "@components/Panel";
import Table from "@components/Table";
import { pageSettings } from "@fixtures/json/pages";
import { createPagesServerClient } from "@supabase/auth-helpers-nextjs";
import { defaultImage, lightboxOptions } from "config";
import { format, parseISO } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";

import Markdown from "@components/Markdown";
import { DiscussionEmbed } from "disqus-react";
import PageLayout from "src/layout/PageLayout";
import { fetchFromAPI } from "src/lib/fetch";
import { useBuildTime } from "src/lib/hooks/useBuildTime";
import { getYouTubeVideoId } from "src/utils";
import styled from "styled-components";

const YoutubeWrapper = styled.div`
  div > iframe {
    display: block;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  cursor: pointer;
  border: 2px solid var(--color-red-intermediate);

  img {
    object-fit: contain;
    position: relative;
    width: 100%;
    height: auto;
    display: block;
  }
`;

const FeaturedImage = styled.div`
  img {
    object-fit: contain;
    position: relative;
    width: 100%;
    height: auto;
    display: block;
  }
`;

const ModelPage: NextPage<{ model: any }> = ({ model }) => {
  const router = useRouter();
  const { buildTime } = useBuildTime(model?.projectId);

  const metaImage = model.seo.metaImage;
  const images = model?.images;

  // so for the sake of UI, if the completed_at field is null/undefined
  // we'll just set it to Yes, to reflect that it's done
  const completedAt = model?.completionDate
    ? format(parseISO(model?.completionDate), "PP")
    : "Yes";

  const videoId = model?.youtube_video
    ? getYouTubeVideoId(model.youtube_video)
    : null;

  const hasContent = model?.buildLog.length;

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
      boxed={`var(--max-width-desktop)`}
    >
      <NextSeo
        title={model?.seo?.metaTitle}
        description={model.seo.metaDescription}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: `${model.seo.metaTitle}`,
          description: `${model.seo.metaDescription}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: metaImage.url || defaultImage.path,
              width: metaImage.width || defaultImage.width,
              height: metaImage.height || defaultImage.height,
              alt: metaImage.alternativeText || defaultImage.altText,
            },
          ],
        }}
        noindex={model.publishedAt == null}
      />
      {!hasContent && (
        <Grid columns={3} gap="2rem">
          <GridItem start={1} end={3}>
            <FeaturedImage>
              <Image
                src={metaImage.url}
                width={metaImage.width || 600}
                height={metaImage.height || 400}
                alt={metaImage.alternativeText}
              />
            </FeaturedImage>
          </GridItem>
          <GridItem>
            <Grid gap="2rem">
              <InfoCard
                model={model}
                buildTime={buildTime}
                completedAt={completedAt}
              />

              {videoId && (
                <Panel padding={false}>
                  <YoutubeWrapper>
                    <YouTube videoId={videoId} />
                  </YoutubeWrapper>
                </Panel>
              )}
              {images !== undefined && images !== null && (
                <Panel padding={false}>
                  <SimpleReactLightbox>
                    <SRLWrapper options={lightboxOptions}>
                      <Grid columns={3} masonry>
                        {model?.images.length > 0 &&
                          model?.images.map((image) => (
                            <ImageWrapper
                              key={image?.provider_metadata?.public_id}
                            >
                              <CloudinaryImage
                                public_id={image?.provider_metadata?.public_id}
                                alt={image?.alternativeText || ""}
                                width={300}
                                height={200}
                                border={false}
                              />
                            </ImageWrapper>
                          ))}
                      </Grid>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </Panel>
              )}
            </Grid>
          </GridItem>
        </Grid>
      )}
      {hasContent && (
        <Grid columns={3} gap="2rem">
          <GridItem start={1} end={4}>
            <FeaturedImage>
              <Image
                src={metaImage.url}
                alt={metaImage.alternativeText}
                width={metaImage.width || 600}
                height={metaImage.height || 400}
                priority={true}
              />
            </FeaturedImage>
          </GridItem>
          <GridItem start={1} end={3}>
            <Card align="left">
              {model.buildLog.map((element) => (
                <>
                  <h5 id={`#${element.section}`}>{element.section}</h5>
                  <Markdown key={element.id} source={element.contents} />
                </>
              ))}
            </Card>
          </GridItem>
          <GridItem>
            <Grid gap="3rem">
              <InfoCard
                model={model}
                buildTime={buildTime}
                completedAt={completedAt}
              />
              {false && (
                <ClockifyControls
                  session={null}
                  completed={model?.completed || false}
                  clockify_project_id={model?.clockify_project_id || ""}
                />
              )}
              {videoId && (
                <Panel padding={false}>
                  <YoutubeWrapper>
                    <YouTube videoId={videoId} />
                  </YoutubeWrapper>
                </Panel>
              )}
              {images?.length > 0 && (
                <>
                  <SimpleReactLightbox>
                    <SRLWrapper options={lightboxOptions}>
                      <Grid
                        columns={images.length % 2 === 0 ? 2 : 3}
                        masonry
                        gap="1rem"
                      >
                        {images?.map((imageItem) => {
                          return (
                            <ImageWrapper key={imageItem?.id}>
                              <Image
                                src={imageItem.url}
                                width={imageItem.width}
                                height={imageItem.height}
                                alt={imageItem.alternativeText}
                              />
                            </ImageWrapper>
                          );
                        })}
                      </Grid>
                    </SRLWrapper>
                  </SimpleReactLightbox>
                </>
              )}
              <Panel>
                <DiscussionEmbed
                  shortname="itsmillertimedev"
                  config={{
                    url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
                    identifier: model.id,
                    title: model.title,
                  }}
                />
              </Panel>
            </Grid>
          </GridItem>
        </Grid>
      )}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.query;

  // if the slug isn't found lets eject right away for a 404 error
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Fetch the data, the publication state depends on the user being an admin or not
  const supabase = createPagesServerClient(context);
  const {
    data: { session },
  } = await supabase.auth.getSession();

  // Build the query
  const queryParameters = {
    publicationState: "preview",
    populate: {
      seo: {
        populate: {
          metaImage: {
            populate: true,
          },
        },
      },
      modelKit: {
        fields: [
          "title",
          "scale",
          "kitNumber",
          "scalematesLink",
          "yearReleased",
        ],
        populate: {
          manufacturer: {
            fields: ["title", "slug"],
          },
          scale: {
            fields: ["title", "slug"],
          },
        },
      },
      modelTags: {
        fields: ["tag", "slug"],
      },
      buildLog: {
        populate: true,
      },
      images: {
        populate: true,
      },
    },
    filters: {
      slug: {
        $eq: slug,
      },
    },
  };

  // Fetch the data
  const data = await fetchFromAPI(`api/models`, queryParameters);
  if (data.data.length) {
    return {
      props: {
        model: data.data[0],
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

const InfoCard = ({ model, completedAt, buildTime }) => {
  const modelKit = model.modelKit;
  return (
    <Card padding={false} heading={modelKit.title} fullWidth>
      <Table
        rows={[
          [
            "Brand",
            {
              label: modelKit?.manufacturer?.title,
              url: `/models?manufacturer=${modelKit?.manufacturer?.slug}`,
            },
          ],
          [
            "Scale",
            {
              label: modelKit?.scale?.title,
              url: `/models?scale=${modelKit?.scale?.slug}`,
            },
          ],
          ["Kit Number", modelKit?.kitNumber],
          ["Year Released", modelKit?.yearReleased],
          [
            "Scalemates",
            {
              label: "Link",
              url: model?.scalemates_link,
              target: "new",
            },
          ],
          [
            "Completed",
            model?.buildStatus === "COMPLETED" ? completedAt : "No",
          ],
          ["Build Time", buildTime],
        ]}
      />
    </Card>
  );
};

export default ModelPage;
