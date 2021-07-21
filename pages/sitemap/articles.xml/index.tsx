import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch all dynamic content here
  const articlesQuery = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?_publicationState=live&_sort=published_at:DESC`
  );
  const articlesRaw = await articlesQuery.json();

  // Map over the items to put into a final array with just the fields we need
  const articles = articlesRaw.map((article) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${article?.slug}`,
    lastmod: article?.updatedAt,
  }));

  return getServerSideSitemap(ctx, articles);
};

const SiteMapPage: NextPage = () => null;

export default SiteMapPage;
