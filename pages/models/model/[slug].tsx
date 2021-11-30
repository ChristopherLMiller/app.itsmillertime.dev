import Card from "@components/Card";
import Markdown from "@components/Markdown";
import { pageSettings } from "config";
import { GetServerSideProps, NextPage } from "next";
import { useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useModelQuery } from "src/graphql/schema/models/model.query.generated";
import { Model } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { getServerSideSEO } from "src/utils";

interface iModelPage {
  SEO: Model;
}

const ModelPage: NextPage<iModelPage> = ({ SEO }) => {
  const [session] = useSession();
  const router = useRouter();
  const { data, error, isLoading } = useModelQuery({
    id: SEO.id,
  });

  if (error) {
    // TODO: Add more useful notification of the error
    console.log(error);
  }

  console.log(session);

  return (
    <PageLayout
      title={pageSettings.models.title}
      description={pageSettings.models.description}
    >
      <NextSeo
        title={SEO.title}
        description={SEO.SEO.description}
        openGraph={{
          title: `${SEO.title}`,
          description: `${SEO.SEO.description}`,
          type: `website`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: SEO?.SEO?.featured_image?.url,
              width: SEO?.SEO?.featured_image?.width,
              height: SEO?.SEO?.featured_image?.height,
              alt: SEO?.SEO?.featured_image?.alternativeText,
            },
          ],
        }}
      />
      {!isLoading && (
        <Card heading={data.model.title}>
          <Markdown source={data.model.content} />
        </Card>
      )}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.query?.slug;

  if (slug) {
    const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/models?slug=${slug}`;
    const response = await getServerSideSEO(url, context);

    const data = await response.json();

    if (data.length) {
      return {
        props: { SEO: data[0] },
      };
    }
  }

  // default return 404, not found
  return {
    redirect: {
      destination: `/404`,
      permanent: false,
    },
  };
};

export default ModelPage;
