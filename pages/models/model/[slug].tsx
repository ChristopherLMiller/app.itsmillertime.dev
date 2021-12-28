import Card from "@components/Card";
import { Grid, GridItem } from "@components/Grid";
import Markdown from "@components/Markdown";
import Panel from "@components/Panel";
import Table from "@components/Table";
import { defaultImage, pageSettings } from "config";
import { format, formatRelative, parseISO } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { ModelsDocument } from "src/graphql/schema/models/models.query.generated";
import { Model, PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";
import {
  getBuildTime,
  getYouTubeVideoId,
  isAdmin,
  makeDurationFriendly,
} from "src/utils";
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
  model: Model;
}

const ModelPage: NextPage<iModelPage> = ({ model }) => {
  const [session] = useSession();
  const router = useRouter();

  const [buildTime, setBuildTime] = useState<string>();
  const imageURL =
    model.SEO?.featured_image?.provider_metadata.public_id ||
    defaultImage.public_id;
  const imageWidth = model?.SEO?.featured_image?.width || defaultImage.width;
  const imageHeight = model?.SEO?.featured_image?.height || defaultImage.height;
  const imageAlt =
    model.SEO?.featured_image?.alternativeText || defaultImage.altText;

  // so for the sake of UI, if the completed_at field is null/undefined
  // we'll just set it to Yes, to reflect that it's done
  const completedAt = model?.completed_at
    ? format(parseISO(model?.completed_at), "PP")
    : "Yes";

  const videoId = model?.youtube_video
    ? getYouTubeVideoId(model?.youtube_video)
    : null;

  useEffect(() => {
    async function fetchTime() {
      if (model?.clockify_project_id) {
        const duration = await getBuildTime(model?.clockify_project_id);
        setBuildTime(makeDurationFriendly(duration, false, true));
      } else {
        setBuildTime("None");
      }
    }

    fetchTime();
  }, [model?.clockify_project_id]);

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
    >
      <NextSeo
        title={model.SEO.title}
        description={model.SEO.description}
        openGraph={{
          title: `${model.SEO.title}`,
          description: `${model.SEO.description}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: model.SEO?.featured_image?.url,
              width: model.SEO?.featured_image?.width,
              height: model.SEO?.featured_image?.height,
              alt: model.SEO?.featured_image?.alternativeText,
            },
          ],
        }}
      />
      <Grid columns={3} gap="2rem">
        <GridItem start={1} end={3}>
          <Image
            src={imageURL}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            layout="responsive"
            priority={true}
          />
        </GridItem>
        <GridItem>
          <Card padding={false} heading={model.title} fullWidth>
            <Table
              rows={[
                [
                  `Started: ${formatRelative(
                    parseISO(model.createdAt),
                    new Date()
                  )}`,
                  `Updated: ${formatRelative(
                    parseISO(model.updatedAt),
                    new Date()
                  )}`,
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
        </GridItem>
        <GridItem start={1} end={3}>
          {model?.content && (
            <Card>
              <Markdown source={model.content} />
            </Card>
          )}
        </GridItem>
        <GridItem>
          <Grid gap="3rem">
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
                  <SRLWrapper>
                    <Grid columns={3} masonry>
                      {model.images.length > 0 &&
                        model.images.map((image) => (
                          <ImageWrapper key={image.id}>
                            <Image
                              src={image.provider_metadata.public_id}
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
      publicationState: isAdmin(session?.user)
        ? PublicationState.Preview
        : PublicationState.Live,
    },
    session?.jwt
  );

  if (data.models.length) {
    return {
      props: {
        model: data.models[0],
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

export default ModelPage;
