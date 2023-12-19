import Card from "@components/Card";
import ClockifyControls from "@components/ClockifyControls";
import { Grid, GridItem } from "@components/Grid";
import CloudinaryImage from "@components/Images/CloudinaryImage";
import Markdown from "@components/Markdown";
import Panel from "@components/Panel";
import Table from "@components/Table";
import { pageSettings } from "@fixtures/json/pages";
import { defaultImage, lightboxOptions } from "config";
import { format, formatRelative, parseISO } from "date-fns";
import { DiscussionEmbed } from "disqus-react";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import Youtube from "react-youtube";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import {
  ModelsDocument,
  useModelsQuery,
} from "src/graphql/schema/models/models.query.generated";
import { Model, PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";
import { useBuildTime } from "src/lib/hooks/useBuildTime";
import { getYouTubeVideoId, isAdmin } from "src/utils";
import styled from "styled-components";

const YoutubeWrapper = styled.div`
  div > iframe {
    display: block;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  cursor: pointer;
`;

interface iModelPage {
  seo: Model;
}

const ModelPage: NextPage<iModelPage> = ({ seo }) => {
  let model;
  const router = useRouter();
  const session = useSession();
  const { buildTime } = useBuildTime(seo?.clockify_project_id);

  // 1) We parse out the SEO stuff first so that we have it to get to SEO
  const imageURL = seo.SEO?.featured_image?.provider_metadata.public_id;
  const imageAlt = seo.SEO?.featured_image?.alternativeText;

  // 2) Now we load the data using hooks
  const { data, isSuccess } = useModelsQuery({
    where: {
      slug: seo.slug,
    },
  });

  if (!isSuccess) {
    return null;
  } else if (data?.models !== null && data?.models !== undefined) {
    model = data?.models[0];
  }

  // so for the sake of UI, if the completed_at field is null/undefined
  // we'll just set it to Yes, to reflect that it's done
  const completedAt = model?.completed_at
    ? format(parseISO(model?.completed_at), "PP")
    : "Yes";

  const videoId = model?.youtube_video
    ? getYouTubeVideoId(model.youtube_video)
    : null;

  const hasContent = model?.content !== undefined && model?.content !== null;

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
      boxed={`var(--max-width-desktop)`}
    >
      <NextSeo
        title={seo?.SEO?.title}
        description={seo?.SEO?.description || seo?.SEO?.title}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: `${seo?.SEO?.title}`,
          description: `${seo?.SEO?.description}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: seo?.SEO?.featured_image?.url || defaultImage.path,
              width: seo?.SEO?.featured_image?.width || defaultImage.width,
              height: seo?.SEO?.featured_image?.height || defaultImage.height,
              alt:
                seo?.SEO?.featured_image?.alternativeText ||
                defaultImage.altText,
            },
          ],
        }}
        noindex={seo.published_at == null}
      />
      {isSuccess && !hasContent && (
        <Grid columns={3} gap="2rem">
          <GridItem start={1} end={3}>
            <CloudinaryImage
              public_id={imageURL}
              width={600}
              height={400}
              alt={seo?.SEO?.featured_image?.alternativeText as string}
              priority={true}
            />
          </GridItem>
          <GridItem>
            <Grid gap="2rem">
              <InfoCard
                model={model}
                buildTime={buildTime}
                completedAt={completedAt}
              />
              <ClockifyControls
                session={session}
                clockify_project_id={model?.clockify_project_id || ""}
                completed={model.completed || false}
              />
              {videoId && (
                <Panel padding={false}>
                  <YoutubeWrapper>
                    <Youtube videoId={videoId} />
                  </YoutubeWrapper>
                </Panel>
              )}
              {model?.images !== undefined && model?.images !== null && (
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
      {isSuccess && hasContent && (
        <Grid columns={3} gap="2rem">
          <GridItem start={1} end={4}>
            <CloudinaryImage
              public_id={imageURL}
              width={600}
              height={400}
              alt={imageAlt as string}
              priority={true}
            />
          </GridItem>
          <GridItem start={1} end={3}>
            {model?.content && (
              <Card align="left">
                <Markdown source={model?.content} />
              </Card>
            )}
          </GridItem>
          <GridItem>
            <Grid gap="3rem">
              <InfoCard
                model={model}
                buildTime={buildTime}
                completedAt={completedAt}
              />
              <ClockifyControls
                session={session}
                completed={model?.completed || false}
                clockify_project_id={model?.clockify_project_id || ""}
              />
              {videoId && (
                <Panel padding={false}>
                  <YoutubeWrapper>
                    <Youtube videoId={videoId} />
                  </YoutubeWrapper>
                </Panel>
              )}
              {model?.images?.length > 0 && (
                <Panel padding={false}>
                  <SimpleReactLightbox>
                    <SRLWrapper options={lightboxOptions}>
                      <Grid columns={3} masonry>
                        {model?.images?.length > 0 &&
                          model?.images?.map((image) => (
                            <ImageWrapper
                              key={image?.provider_metadata.public_id}
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
  const session = await getSession(context);
  const { slug } = context.query;

  return {
    redirect: { destination: "/models", permanent: false },
  };

  // if the slug isn't found lets eject right away for a 404 error
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Fetch the data, the publication state depends on the user being an admin or not
  const { data } = await fetchData(ModelsDocument, {
    where: { slug_eq: slug },
    publicationState: isAdmin(session, true)
      ? PublicationState.Preview
      : PublicationState.Live,
  });

  if (data?.models) {
    return {
      props: {
        seo: data.models[0],
      },
    };
  } else {
    // If the model isn't found (0 length) we will just redirct to the landing page
    return {
      redirect: {
        destination: "/models",
        permanent: false,
      },
    };
  }
};

const InfoCard = ({ model, completedAt, buildTime }) => {
  return (
    <Card padding={false} heading={model.title} fullWidth>
      <Table
        rows={[
          [
            `Started: ${formatRelative(parseISO(model.createdAt), new Date())}`,
            `Updated: ${formatRelative(parseISO(model.updatedAt), new Date())}`,
          ],
          [
            "Brand",
            {
              label: model?.manufacturer?.name,
              url: `/models?manufacturer=${model?.manufacturer?.slug}`,
            },
          ],
          [
            "Scale",
            {
              label: model?.scale?.name,
              url: `/models?scale=${model?.scale?.slug}`,
            },
          ],
          ["Kit Number", model?.kit_number],
          ["Year Released", model?.year_released],
          [
            "Scalemates",
            {
              label: "Link",
              url: model?.scalemates_link,
              target: "new",
            },
          ],
          ["Completed", model?.completed ? completedAt : "No"],
          ["Build Time", buildTime],
        ]}
      />
    </Card>
  );
};

export default ModelPage;
