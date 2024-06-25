import Markdown from "@components/Markdown";
import Panel from "@components/Panel";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import { FC } from "react";
import PageLayout from "src/layout/PageLayout";
import { fetchFromAPI } from "src/lib/fetch";

interface iPage {
  page: any;
}
const Page: FC<iPage> = ({ page }) => {
  const { title, content, slug, seo } = page;

  return (
    <PageLayout
      title={seo.metaTitle}
      description={seo.metaDescription}
      boxed="var(--max-width-desktop)"
    >
      <NextSeo
        title={title}
        description={seo.metaDescription}
        canonical={`${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`}
        openGraph={{
          title: title,
          description: seo.metaDescription,
          type: "website",
          images: [
            {
              alt: seo.metaImage?.alternativeText,
              width: 800,
              height: 600,
              url: seo.metaImage?.url,
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

  const data = await fetchFromAPI(`api/pages`, {
    filters: {
      slug: {
        $eq: slug,
      },
    },
    populate: {
      seo: {
        populate: {
          metaImage: {
            populate: true,
          },
        },
      },
    },
  });

  // if we have no page, we should return a 404
  if (data.data.length) {
    return {
      props: {
        page: data.data[0],
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
  const data = await fetchFromAPI(`api/pages`);
  const paths = data.data.map((page: any) => {
    return { params: { slug: page.slug } };
  });

  return { paths, fallback: "blocking" };
};

export default Page;
