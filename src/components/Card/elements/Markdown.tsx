import { createElement, Fragment, FunctionComponent } from "react";
import { remark } from "remark";
import remarkParse from "remark-parse";
import rehypeReact from "rehype-react";
import remarkRehype from "remark-rehype";

const processor = remark()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeReact, { createElement: createElement });

interface iMarkdown {
  source: string;
}
const Markdown: FunctionComponent<iMarkdown> = ({ source }) => {
  console.log(processor.processSync(source));

  return (
    <Fragment>
      <p>{processor.processSync(source).result}</p>
    </Fragment>
  );
};

export default Markdown;
