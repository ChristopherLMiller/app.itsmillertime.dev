import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemap } from "next-sitemap";
import { GalleriesSitemapDocument } from "src/graphql/schema/galleries/galleriesSitemap.query.generated";
import { fetchData } from "src/lib/fetch";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch all dynamic content here
  const { data } = await fetchData(GalleriesSitemapDocument, {});

  // Map the data
  const galleries = data.galleries.map((gallery) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery/album/${gallery.slug}`,
    lastmod: gallery.updatedAt,
  }));

  // Set caching
  context.res.setHeader(
    "Cache-Control",
    "public, s-maxage=604800, stale-while-revalidate=86400"
  );

  return getServerSideSitemap(context, galleries);
};

const SiteMapPage: NextPage = () => null;

export default SiteMapPage;
