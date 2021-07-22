import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch all dynamic content here
  const galleriesQuery = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/galleries?_publicationState=live&_sort=published_at:DESC`
  );
  const galleriesRaw = await galleriesQuery.json();
  const galleries = galleriesRaw.map((gallery) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery/album/${gallery?.slug}`,
    lastmod: gallery?.updatedAt,
  }));

  return getServerSideSitemap(ctx, galleries);
};

const SiteMapPage: NextPage = () => null;

export default SiteMapPage;
