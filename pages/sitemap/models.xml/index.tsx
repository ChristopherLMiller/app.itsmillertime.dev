import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch all dynamic content
  const modelsQuery = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/models?_publicationState=live&_sort=published_at:DESC`
  );

  const modelsRaw = await modelsQuery.json();
  const models = modelsRaw.map((model) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/models/model/${model?.slug}`,
    lastmod: model?.upatedAt,
  }));

  return getServerSideSitemap(context, models);
};

const SiteMapPage: NextPage = () => null;

export default SiteMapPage;
