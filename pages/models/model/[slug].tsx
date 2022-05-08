import Card from "@components/Card";
import ClockifyControls from "@components/ClockifyControls";
import { Grid, GridItem } from "@components/Grid";
import Markdown from "@components/Markdown";
import Panel from "@components/Panel";
import Table from "@components/Table";
import {
  defaultImage,
  ImagesEndpoint,
  lightboxOptions,
  pageSettings,
} from "config";
import { format, formatRelative, parseISO } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import {
  ModelsDocument,
  useModelsQuery,
} from "src/graphql/schema/models/models.query.generated";
import { Model, PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";
import { getBuildTime, getYouTubeVideoId, isAdmin } from "src/utils";
import makeDurationFriendly from "src/utils/makeDurationFriendly";
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

const Contents = styled.div`
  h4 {
    margin-block: 1rem;
    position: relative;
    padding-inline-start: 2rem;
    color: var(--color-black-60);
    font-family: var(--font-block);
    text-transform: uppercase;
    font-style: italic;

    :before {
      content: "\\A";
      position: absolute;
      left: 5px;
      width: 50%;
      height: 100%;
      border-inline-start: 3px solid var(--color-gold-transparent);
      border-block-end: 5px solid var(--color-red-dark);
      opacity: 0.7;
      transform: skewX(-12deg);
    }
  }

  img {
    max-width: 50%;
    display: inline-block;
  }
`;

interface iModelPage {
  seo: Model;
}

const ModelPage: NextPage<iModelPage> = ({ seo }) => {
  const router = useRouter();
  const session = useSession();

  // 1) We parse out the SEO stuff first so that we have it to get to SEO
  const imageURL =
    seo.SEO?.featured_image?.provider_metadata.public_id ||
    defaultImage.public_id;
  const imageWidth = seo?.SEO?.featured_image?.width || defaultImage.width;
  const imageHeight = seo?.SEO?.featured_image?.height || defaultImage.height;
  const imageAlt =
    seo.SEO?.featured_image?.alternativeText || defaultImage.altText;

  // 2) Now we load the data using hooks
  const { data, isSuccess } = useModelsQuery({
    where: {
      slug: seo.slug,
    },
  });

  const model = isSuccess && data?.models[0];

  // 3)  Then we set the rest of the variables and output
  const [buildTime, setBuildTime] = useState<string>();

  // so for the sake of UI, if the completed_at field is null/undefined
  // we'll just set it to Yes, to reflect that it's done
  const completedAt = model.completed_at
    ? format(parseISO(model.completed_at), "PP")
    : "Yes";

  const videoId = model.youtube_video
    ? getYouTubeVideoId(model.youtube_video)
    : null;

  const hasContent = model.content?.length > 0;

  useEffect(() => {
    async function fetchTime() {
      if (model.clockify_project_id) {
        const duration = await getBuildTime(model.clockify_project_id);
        setBuildTime(makeDurationFriendly(duration, false, true));
      } else {
        setBuildTime("None");
      }
    }

    fetchTime();
  }, [model]);

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
      boxed={`var(--max-width-desktop)`}
    >
      <NextSeo
        title={seo.SEO.title}
        description={seo.SEO.description}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
        openGraph={{
          title: `${seo.SEO.title}`,
          description: `${seo.SEO.description}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: seo.SEO?.featured_image?.url,
              width: seo.SEO?.featured_image?.width,
              height: seo.SEO?.featured_image?.height,
              alt: seo.SEO?.featured_image?.alternativeText,
            },
          ],
        }}
        noindex={seo.published_at == null}
      />
      {isSuccess && !hasContent && (
        <Grid columns={3} gap="2rem">
          <GridItem start={1} end={3}>
            <Image
              src={`${ImagesEndpoint}/${imageURL}`}
              width={imageWidth}
              height={imageHeight}
              alt={imageAlt}
              layout="responsive"
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
                clockify_project_id={model?.clockify_project_id}
                completed={model.completed}
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
                        {model?.images.length > 0 &&
                          model?.images.map((image) => (
                            <ImageWrapper
                              key={image.provider_metadata?.public_id}
                            >
                              <Image
                                src={`${ImagesEndpoint}/${image.provider_metadata?.public_id}`}
                                alt={image.alternativeText}
                                width={image.width}
                                height={image.height}
                                layout="responsive"
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
            <Image
              src={`${ImagesEndpoint}/${imageURL}`}
              width={imageWidth}
              height={imageHeight}
              alt={imageAlt}
              layout="responsive"
              priority={true}
            />
          </GridItem>
          <GridItem start={1} end={3}>
            {model?.content && (
              <Card align="left">
                <Contents>
                  <Markdown source={model?.content} />
                </Contents>
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
                completed={model.completed}
                clockify_project_id={model.clockify_project_id}
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
                        {model?.images.length > 0 &&
                          model?.images.map((image) => (
                            <ImageWrapper
                              key={image.provider_metadata.public_id}
                            >
                              <Image
                                src={`${ImagesEndpoint}/${image.provider_metadata?.public_id}`}
                                alt={image.alternativeText}
                                width={image.width}
                                height={image.height}
                                layout="responsive"
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
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { slug } = context.query;

  // if the slug isn't found lets eject right away for a 404 error
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Fetch the data, the publication state depends on the user being an admin or not
  const data = await fetchData(
    ModelsDocument,
    {
      where: { slug_eq: slug },
      publicationState: isAdmin(session, true)
        ? PublicationState.Preview
        : PublicationState.Live,
    },
    // TODO: Fix this, unknown and ignoring is shameful
    //@ts-ignore
    session?.jwt
  );

  if (data?.models.length) {
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
