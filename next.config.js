const { withSentryConfig } = require(`@sentry/nextjs`);
const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
  maximumFileSizeToCacheInBytes: 5*1024*1024,

});
const rehypePrism = require(`@mapbox/rehype-prism`);
const remarkTypograf = require("@mavrin/remark-typograf");
const remarkHtml = require("next-transpile-modules")(["remark-html"]);
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
const rehypeRaw = require("next-transpile-modules")(["rehype-raw"]);

// MDX
const withMDX = require(`@next/mdx`)({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism, rehypeRaw],
    remarkPlugins: [
      remarkEmoji,
      remarkFootnotes,
      remarkFrontmatter,
      remarkGuillemets,
      remarkHeadingId,
      remarkHtml,
      remarkSubSuper,
      remarkTypograf,
      remarkUnwrapImages,
    ],
  },
});

// Config
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: [`js`, `jsx`, `mdx`, `ts`, `tsx`],
  serverRuntimeConfig: {
    rootDir: __dirname,
  },
  images: {
    domains: [`images.itsmillertime.dev`, `www.gravatar.com`],
  },
  sentry: {
    hideSourceMaps: false,
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {},
  swcMinify: true,
};

const SentryWebpackPluginOptions = {
  silent: true,
};

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

module.exports = withPWA(
  withBundleAnalyzer(
    withMDX(withSentryConfig(nextConfig, SentryWebpackPluginOptions))
  )
);
