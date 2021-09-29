import { FunctionComponent } from "react";
import MDX from "@mdx-js/runtime";
import { MDXProvider } from "@mdx-js/react";
interface iMarkdown {
  source: string;
}
const Markdown: FunctionComponent<iMarkdown> = ({ source }) => (
  <MDXProvider>
    <MDX>{source}</MDX>
  </MDXProvider>
);

export default Markdown;
