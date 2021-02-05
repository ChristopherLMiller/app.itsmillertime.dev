require('dotenv-flow').config();

module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL,
  generateRobotsTxt: true,
  exclude: [`/test`, `/registry`, `/admin/*`, `/server-sitemap.xml`],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/server-sitemap.xml`,
    ],
    policies: [
      {
        userAgent: `*`,
        allow: `/`,
        disallow: [`/test`, `/registry`, `/admin/*`],
      },
    ],
  },
};
