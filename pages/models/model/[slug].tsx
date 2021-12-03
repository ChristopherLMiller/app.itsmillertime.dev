import Card from "@components/Card";
import { Grid, GridItem } from "@components/Grid";
import Markdown from "@components/Markdown";
import Table from "@components/Table";
import { defaultImage, pageSettings } from "config";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ModelsSitemapDocument } from "src/graphql/schema/models/modelsSitemap.query.generated";
import { Model } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";
import { getBuildTime, makeDurationFriendly } from "src/utils";

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
        title={model.title}
        description={model.SEO.description}
        openGraph={{
          title: `${model.title}`,
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
          <Card heading={model.title}>
            <Markdown source={model.content} />
          </Card>
        </GridItem>
        <Card padding={false}>
          <Table
            rows={[
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
                "Completed",
                {
                  label: model?.completed ? "Yes" : "No",
                  url: `/models?completed=${model?.completed ? true : false}`,
                },
              ],
              ["Build Time", buildTime],
            ]}
          />
        </Card>
      </Grid>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context?.params?.slug;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/models?slug_eq=${slug}`
  );

  const data = await response.json();

  if (data.length) {
    return {
      props: {
        model: data[0],
      },
    };
  } else {
    return {
      notFound: true,
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
