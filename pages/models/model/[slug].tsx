import Card from "@components/Card";
import Markdown from "@components/Markdown";
import { pageSettings } from "config";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useSession } from "next-auth/client";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { ModelsSitemapDocument } from "src/graphql/schema/models/modelsSitemap.query.generated";
import { Model } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";

interface iModelPage {
  model: Model;
}

const ModelPage: NextPage<iModelPage> = ({ model }) => {
  const [session] = useSession();
  const router = useRouter();

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
      <Card heading={model.title}>
        <Markdown source={model.content} />
      </Card>
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
