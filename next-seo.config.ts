export default {
  titleTemplate: `ChristopherLeeMiller | %s`,
  facebook: {
    appId: process.env.FB_APP_ID,
  },
  openGraph: {
    type: `website`,
    locale: `en_US`,
    url: process.env.NEXT_PUBLIC_SITE_URL,
    site_name: `ChristopherLeeMiller.me`,
  },
  twitter: {
    handle: `@ChrisLMiller_me`,
    site: process.env.NEXT_PUBLIC_SITE_URL,
    cardType: `summary_large_image`,
  },
  additionalMetaTags: [
    {
      name: `msapplication-TileColor`,
      content: `#982929`,
    },
    {
      name: `theme-color`,
      content: `#982929`,
    },
  ],
  additionalLinkTags: [
    {
      rel: `manifest`,
      href: `/manifest.json`,
    },
    {
      rel: `shortcut icon`,
      href: `/logo.png`,
    },
    {
      rel: `apple-touch-icon`,
      href: `/logo.png`,
    },
    {
      rel: `me`,
      href: `https://github.com/ChristopherLMiller`,
    },
    {
      rel: `webmention`,
      href: `https://webmention.io/christopherleemiller.me/webmention`,
    },
    {
      rel: `pingback`,
      href: `https://webmention.io/christopherleemiller.me/xmlrpc`,
    },
  ],
};
