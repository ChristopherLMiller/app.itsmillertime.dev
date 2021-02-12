import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';
import fetch from 'src/utils/functions/fetch';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch all dynamic content here
  const articles = await fetch
    .get(`/articles?_publicationState=live&_sort=published_at:DESC`)
    .then(({ data }) =>
      data?.map((article) => ({
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/article/${article?.slug}`,
        lastmod: article?.updatedAt,
      }))
    );

  const galleries = await fetch
    .get(`/galleries?_publicationState=live&_sort=published_at:DESC`)
    .then(({ data }) =>
      data?.map((gallery) => ({
        loc: `${process.env.NEXT_PUBLIC_SITE_URL}/gallery/${gallery?.slug}`,
        lastmod: gallery?.updatedAt,
      }))
    );

  const fields = [articles, galleries];
  return getServerSideSitemap(ctx, fields.flat(1));
};

const SiteMapPage = () => {};

export default SiteMapPage;
