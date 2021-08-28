import { Fragment, FunctionComponent, createElement } from "react";
import { remark } from "remark";
import parse from "remark-parse";
import rehypeReact from "rehype-react";
import remarkHtml from "remark-html";
import remarkFootnotes from "remark-footnotes";
import remarkTypograf from "@mavrin/remark-typograf";
import remarkSubSuper from "remark-sub-super";
import remarkGuillemets from "remark-fix-guillemets";
import remarkUnwrapImages from "remark-unwrap-images";

interface iMarkdown {
  source: string;
}
const Markdown: FunctionComponent<iMarkdown> = ({ source }) => {
  const output = remark()
    /*   .use(parse)
    .use(remarkHtml)
    .use(remarkFootnotes)
    .use(remarkTypograf)
    .use(remarkGuillemets)
    .use(remarkUnwrapImages)
    .use(rehypeReact, { createElement: createElement })*/
    .processSync(source).result;

  console.log(source);

  return <Fragment>{output}</Fragment>;
};

export default Markdown;
