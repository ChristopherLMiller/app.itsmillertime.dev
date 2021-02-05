import { GetServerSideProps } from 'next';
import { getServerSideSitemap } from 'next-sitemap';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Fetch all dynamic content here

  const fields = [];

  return getServerSideSitemap(ctx, fields);
};

export default () => {};
