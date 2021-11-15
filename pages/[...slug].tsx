import { GetStaticProps, GetStaticPaths } from "next";
import PageLayout from "src/layout/PageLayout";
import Panel from "src/components/Panel";
import Markdown from "src/components/Card/elements/Markdown";

const Page = ({ page }) => {
  const { title, description, content } = page[0];
  return (
    <PageLayout title={title} description={description}>
      <Panel>
        <Markdown source={content} />
      </Panel>
    </PageLayout>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params["slug"][0];
  const res = await fetch(
    `https://admin.christopherleemiller.me/pages?slug_eq=${slug}`
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
  try {
    const res = await fetch(`https://admin.christopherleemiller.me/pages`);
    const pages = await res.json();

    const paths = pages.map((page) => ({
      params: { slug: [page.slug] },
    }));

    return { paths, fallback: false };
  } catch (error) {
    // shouldn't ever happen but never know, if so fall back to SSR
    console.log(error);
    return { paths: [], fallback: "blocking" };
  }
};
export default Page;
