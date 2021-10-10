// eslint-disable-next-line @typescript-eslint/no-var-requires
require(`dotenv-flow`).config();

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  exclude: [`/admin/*`, `/sitemap/*`],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/articles.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/sitemap/galleries.xml`,
      `${process.env.NEXT_PUBLIC_SITE_URL|}/sitemap/models.xl`
    ],
    policies: [
      {
        userAgent: `*`,
        allow: `/`,
        disallow: [`/admin/*`, `/api/*`],
      },
    ],
  },
};
