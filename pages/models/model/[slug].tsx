import Card from "@components/Card";
import { Grid, GridItem } from "@components/Grid";
import Markdown from "@components/Markdown";
import Table from "@components/Table";
import { defaultImage, pageSettings } from "config";
import { format, formatRelative, parseISO } from "date-fns";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Youtube from "react-youtube";
import SimpleReactLightbox, { SRLWrapper } from "simple-react-lightbox";
import { ModelsSitemapDocument } from "src/graphql/schema/models/modelsSitemap.query.generated";
import { Model } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";
import {
  getBuildTime,
  getYouTubeVideoId,
  makeDurationFriendly,
} from "src/utils";
import styled from "styled-components";

const ImageLabel = styled.div`
  background: var(--color-red-intermediate);
  padding: 3% 5%;
  color: var(--color-white-100);
  font-family: var(--font-main);
  text-align: center;
  font-size: var(--h4-size);
`;

const YoutubeWrapper = styled.div`
  div > iframe {
    display: block;
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
      <Grid columns={3} gap="30px">
        <GridItem start={1} end={3}>
          <Image
            src={imageURL}
            width={imageWidth}
            height={imageHeight}
            alt={imageAlt}
            layout="responsive"
          />
          {model?.content && (
            <Card>
              <Markdown source={model.content} />
            </Card>
          )}
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
                  { label: "Link", url: model?.scalemates_link, target: "new" },
                ],
                ["Completed", model?.completed ? completedAt : "No"],
                ["Build Time", buildTime],
                //model.model_tags
              ]}
            />
          </Card>
          {videoId && (
            <Card subHeading="Youtube Video" padding={false}>
              <YoutubeWrapper>
                <Youtube videoId={videoId} />
              </YoutubeWrapper>
            </Card>
          )}
          <ImageLabel>Images</ImageLabel>
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
                        layout="intrinsic"
                      />
                    </ImageWrapper>
                  ))}
              </Grid>
            </SRLWrapper>
          </SimpleReactLightbox>
        </GridItem>
      </Grid>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug;
  console.log(context);
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/models?slug_eq=${slug}`
  );

  const data = await response.json();

  if (data.length) {
    return {
      props: {
        model: data[0],
      },
      revalidate: 30,
    };
  } else {
    return {
      props: {
        model: null,
        fetchClientSide: true,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await fetchData(ModelsSitemapDocument);
  const paths = data.models.map((model) => {
    return { params: { slug: model.slug } };
  });

  return { paths, fallback: "blocking" };
};

export default ModelPage;
