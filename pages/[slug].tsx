import Markdown from "@components/Markdown";
import Panel from "@components/Panel";
import { APIEndpoint } from "config";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import PageLayout from "src/layout/PageLayout";

interface iPage {
  page: any;
}
const Page: FC<iPage> = ({ page }) => {
  const { title, summary, content, slug, featuredImage } = page;
  return (
    <PageLayout
      title={title}
      description={summary}
      boxed="var(--max-width-desktop)"
    >
      <NextSeo
        title={title}
        description={summary}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
        openGraph={{
          title: title,
          description: summary,
          type: "website",
          images: [
            {
              alt: featuredImage?.alternativeText,
              width: 800,
              height: 600,
              url: featuredImage?.url,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
        }}
      />
      <Panel>
        <Markdown source={content} />
      </Panel>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (context.params?.slug === undefined) return { notFound: true };

  const slug = context.params["slug"];
  const res = await fetch(`${APIEndpoint.live}/page/${slug}`, {
    headers: {
      "x-api-key": APIEndpoint.key,
    },
  });
  const data = await res.json();

  // if we have no page, we should return a 404
  if (data.data) {
    return {
      props: {
        page: data.data,
      },
      revalidate: 10,
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${APIEndpoint.live}/page`);
  const data = await res.json();
  const paths = data.data.map((item: any) => {
    return { params: { slug: item.slug } };
  });

  return { paths, fallback: "blocking" };
};

export default Page;
