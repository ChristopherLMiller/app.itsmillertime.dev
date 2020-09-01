const rehypePrism = require("@mapbox/rehype-prism");
const remarkEmoji = require("remark-emoji");
const remarkFootnotes = require("remark-footnotes");
const remarkTypograf = require("@mavrin/remark-typograf");
const remarkSubSuper = require("remark-sub-super");
const remarkHtml = require("remark-html");
const remarkGuillemets = require("remark-fix-guillemets");

const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    rehypePlugins: [rehypePrism],
    remarkPlugins: [
      remarkEmoji,
      remarkFootnotes,
      remarkTypograf,
      remarkSubSuper,
      remarkHtml,
      remarkGuillemets,
    ],
  },
});

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
};

module.exports = withMDX(nextConfig);
