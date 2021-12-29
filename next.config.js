/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require(`next-offline`);
const { withSentryConfig } = require(`@sentry/nextjs`);

const rehypePrism = require(`@mapbox/rehype-prism`);
const remarkTypograf = require("@mavrin/remark-typograf");
const remarkEmoji = require("next-transpile-modules")(["remark-emoji"]);
const remarkFootnotes = require("next-transpile-modules")(["remark-footnotes"]);
const remarkSubSuper = require("next-transpile-modules")(["remark-sub-super"]);
const remarkGuillemets = require("next-transpile-modules")([
  "remark-fix-guillemets",
]);
const remarkUnwrapImages = require("next-transpile-modules")([
  "remark-unwrap-images",
]);
const remarkFrontmatter = require("next-transpile-modules")([
  "remark-frontmatter",
]);
const remarkHeadingId = require("next-transpile-modules")(["remark-heading-id"]);

// MDX
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [
      remarkEmoji,
      remarkFootnotes,
      remarkTypograf,
      remarkSubSuper,
      remarkGuillemets,
      remarkUnwrapImages,
      remarkFrontmatter,
      remarkHeadingId,
    ],
  },
});

// Config
const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: require.resolve("path-browserify"),
    };
    return config;
  },
  reactStrictMode: true,
  pageExtensions: [`js`, `jsx`, `mdx`, `ts`, `tsx`],
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  workboxOpts: {
    swDest: `../public/service-worker.js`,
    offlineGoogleAnalytics: true,
    runtimeCaching: [
      {
        urlPattern: /\.(?:gif|ico|jpg|jpeg|png|svg|webp)(?:\?|$)/,
        handler: `CacheFirst`,
        options: {
          cacheName: `image-cache`,
          expiration: {
            maxEntries: 500,
            maxAgeSeconds: 60 * 60 * 24 * 7,
          },
        },
      },
      {
        urlPattern: /api/,
        handler: `NetworkFirst`,
        options: {
          cacheableResponse: {
            statuses: [0, 200],
            headers: {
              "x-test": `true`,
            },
          },
        },
      },
    ],
  },
  images: {
    loader: `cloudinary`,
    path: `https://res.cloudinary.com/christopherleemiller/image/upload`,
    domains: [`res.cloudinary.com`, `gravatar.com`],
  },
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withOffline(
  withMDX(withSentryConfig(nextConfig, SentryWebpackPluginOptions))
);
