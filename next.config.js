
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
    domains: [`images.itsmillertime.dev`, `www.gravatar.com`, 'avatars.githubusercontent.com', 'image-cdn.itsmillertime.dev'],
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

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    org: "christopherleemiller",
    project: "app-itsmillertime-dev",

    // Only print logs for uploading source maps in CI
    silent: !process.env.CI,

    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
    // This can increase your server load as well as your hosting bill.
    // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
    // side errors will fail.
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,

    // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
    // See the following for more information:
    // https://docs.sentry.io/product/crons/
    // https://vercel.com/docs/cron-jobs
    automaticVercelMonitors: true,
  }
);

module.exports = withPWA(
  withBundleAnalyzer(
    withMDX(withSentryConfig(nextConfig, SentryWebpackPluginOptions))
  )
);