import { FunctionComponent } from "react";
import MDX from "@mdx-js/runtime";
import { MDXProvider } from "@mdx-js/react";

import remarkTypograf from "@mavrin/remark-typograf";
import remarkEmoji from "remark-emoji";
import remarkFootnotes from "remark-footnotes";
import remarkSubSuper from "remark-sub-super";
import remarkGuillemets from "remark-fix-guillemets";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkFrontmatter from "remark-frontmatter";

interface iMarkdown {
  source: string;
}
const Markdown: FunctionComponent<iMarkdown> = ({ source }) => (
  <MDXProvider>
    <MDX
      remarkPlugins={[
        remarkTypograf,
        remarkEmoji,
        remarkFootnotes,
        remarkSubSuper,
        remarkGuillemets,
        remarkUnwrapImages,
        remarkFrontmatter,
      ]}
    >
      {source}
    </MDX>
  </MDXProvider>
);

export default Markdown;
