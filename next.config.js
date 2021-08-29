/* eslint-disable @typescript-eslint/no-var-requires */
const withOffline = require(`next-offline`);
const { withSentryConfig } = require(`@sentry/nextjs`);

const rehypePrism = require(`@mapbox/rehype-prism`);
const remarkTypograf = require('@mavrin/remark-typograf');
const remarkEmoji = require('next-transpile-modules')(['remark-emoji']);
const remarkFootnotes = require('next-transpile-modules')(['remark-footnotes']);
const remarkSubSuper = require('next-transpile-modules')(['remark-sub-super']);
const remarkGuillemets = require('next-transpile-modules')(['remark-fix-guillemets']);
const remarkUnwrapImages = require('next-transpile-modules')(['remark-unwrap-images']);

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
    ],
  },
});

// Config
const nextConfig = {
  experimental: {
    esmExternals: "loose"
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
    domains: [
      `res.cloudinary.com`,
    ],
  },
};

const SentryWebpackPluginOptions = {
  // Additional config options for the Sentry Webpack plugin. Keep in mind that
  // the following options are set automatically, and overriding them is not
  // recommended:
  //   release, url, org, project, authToken, configFile, stripPrefix,
  //   urlPrefix, include, ignore

  silent: true, // Suppresses all logs
  // For all available options, see:
  // https://github.com/getsentry/sentry-webpack-plugin#options.
};

module.exports = withOffline(
  withMDX(withSentryConfig(nextConfig, SentryWebpackPluginOptions))
);
