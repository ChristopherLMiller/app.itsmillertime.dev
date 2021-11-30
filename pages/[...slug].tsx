import Markdown from "@components/Markdown";
import Panel from "@components/Panel";
import { GetStaticPaths, GetStaticProps } from "next";
import { NextSeo } from "next-seo";
import PageLayout from "src/layout/PageLayout";

const Page = ({ page }) => {
  const { title, description, content, seo, slug } = page[0];
  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={seo.title}
        description={seo.description}
        openGraph={{
          title: seo.title,
          description: seo.description,
          type: "website",
          images: [
            {
              alt: seo?.featured_image?.alternativeText,
              width: 800,
              height: 600,
              url: seo?.featured_image?.url,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/${slug}`,
        }}
      />
      <Panel boxed>
        <Markdown source={content} />
      </Panel>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params["slug"][0];
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/pages?slug_eq=${slug}`
  );
  const data = await res.json();

  // if we have no page, we should return a 404
  if (data.length) {
    return {
      props: {
        page: data,
      },
    };
  } else {
    return {
      props: {
        notFound: true,
      },
    };
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/pages`;
  let paths = [];

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (data.length) {
      paths = data.map((item) => ({
        params: { slug: item.slug },
      }));
    }
  } catch (error) {
    // We shouldn't really ever have an issue fetchign this data unless like network is offline
    // log it out and just return empty paths
    console.log(error);
  } finally {
    return { paths, fallback: "blocking", revalidate: 120 };
  }
};
export default Page;
