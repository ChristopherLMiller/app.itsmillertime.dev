import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemap } from "next-sitemap";
import { ArticlesSitemapDocument } from "src/graphql/schema/articles/articlesSitemap.query.generated";
import { fetchData } from "src/lib/fetch";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch all dynamic content here
  const data = await fetchData(ArticlesSitemapDocument, {});

  // Map over the items to put into a final array with just the fields we need
  const articles = data.articles.map((article) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${article?.slug}`,
    lastmod: article?.updatedAt,
  }));

  // Set caching
  ctx.res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=86400"
  );

  return getServerSideSitemap(ctx, articles);
};

const SiteMapPage: NextPage = () => null;

export default SiteMapPage;
