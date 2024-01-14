import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemapLegacy } from "next-sitemap";
import { fetchFromAPI } from "src/lib/fetch";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch all dynamic content here
  const { data } = await fetchFromAPI(`v1/posts/posts?select=slug,updatedAt`);

  // Map over the items to put into a final array with just the fields we need
  const articles = data.data.map((article) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${article?.slug}`,
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
