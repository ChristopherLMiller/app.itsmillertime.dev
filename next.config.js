/* eslint-disable @typescript-eslint/no-var-requires */
const { withSentryConfig } = require(`@sentry/nextjs`);
const withPWA = require('next-pwa');
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
const remarkHeadingId = require("next-transpile-modules")([
  "remark-heading-id",
]);

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
  images: {
    loader: `cloudinary`,
    path: `https://res.cloudinary.com/christopherleemiller/image/upload`,
    domains: [`res.cloudinary.com`, `gravatar.com`],
  },
  pwa: {
    dest: 'public'
  }
};

const SentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withPWA(
  withMDX(withSentryConfig(nextConfig, SentryWebpackPluginOptions))
);
