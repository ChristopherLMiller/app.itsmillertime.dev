import remarkTypograf from "@mavrin/remark-typograf";
import { MDXProvider } from "@mdx-js/react";
import MDX from "@mdx-js/runtime";
import { FunctionComponent } from "react";
import remarkEmoji from "remark-emoji";
import remarkGuillemets from "remark-fix-guillemets";
import remarkFootnotes from "remark-footnotes";
import remarkFrontmatter from "remark-frontmatter";
import remarkHeadingId from "remark-heading-id";
import remarkHtml from "remark-html";
import remarkSubSuper from "remark-sub-super";
import remarkUnwrapImages from "remark-unwrap-images";

interface iMarkdown {
  source: string;
}
const Markdown: FunctionComponent<iMarkdown> = ({ source }) => (
  <MDXProvider>
    <MDX
      remarkPlugins={[
        remarkHtml,
        remarkTypograf,
        remarkEmoji,
        remarkFootnotes,
        remarkSubSuper,
        remarkGuillemets,
        remarkUnwrapImages,
        remarkFrontmatter,
        remarkHeadingId,
      ]}
    >
      {source}
    </MDX>
  </MDXProvider>
);

export default Markdown;
