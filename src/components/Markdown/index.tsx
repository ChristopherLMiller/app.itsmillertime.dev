import { marked } from "marked";
import customHeadingId from "marked-custom-heading-id";
import * as extendedTables from "marked-extended-tables";
import { FunctionComponent } from "react";

interface iMarkdown {
  source: string;
}
const Markdown: FunctionComponent<iMarkdown> = ({ source }) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
    //highlighting,
  });

  // Extensions
  marked.use(customHeadingId(), extendedTables);
  const output = marked.parse(source);
  return <div dangerouslySetInnerHTML={{ __html: output }} />;
};

export default Markdown;
