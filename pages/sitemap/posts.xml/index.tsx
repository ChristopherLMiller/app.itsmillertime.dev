import { APIEndpoint } from "config";
import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch all dynamic content here
  const response = await fetch(
    `${APIEndpoint.live}/post?select=slug,updatedAt`,
  );
  const data = await response.json();

  // Map over the items to put into a final array with just the fields we need
  const articles = data.data.map((article) => ({
    loc: `${APIEndpoint.live}/blog/post/${article?.slug}`,
    lastmod: article?.updatedAt,
  }));

  // Set caching
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=86400",
  );

  return getServerSideSitemapLegacy(ctx, articles);
};

const SiteMapPage: NextPage = () => null;

export default SiteMapPage;
