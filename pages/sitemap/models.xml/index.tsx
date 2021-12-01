import { GetServerSideProps, NextPage } from "next";
import { getServerSideSitemap } from "next-sitemap";
import { ModelsSitemapDocument } from "src/graphql/schema/models/modelsSitemap.query.generated";
import { fetchData } from "src/lib/fetch";

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch all dynamic content
  const data = await fetchData(ModelsSitemapDocument);

  const models = data.models.map((model) => ({
    loc: `${process.env.NEXT_PUBLIC_SITE_URL}/models/model/${model.slug}`,
    lastmod: model.updatedAt,
  }));

  return getServerSideSitemap(context, models);
};

const SiteMapPage: NextPage = () => null;

export default SiteMapPage;
