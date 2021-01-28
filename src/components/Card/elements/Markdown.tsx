import { Fragment, FunctionComponent } from 'react';
import remark from 'remark';
import parse from 'remark-parse';
import remark2react from 'remark-react';

interface iMarkdown {
  source: string;
}
const Markdown: FunctionComponent<iMarkdown> = ({ source }) => (
  <Fragment>
    {remark().use(parse).use(remark2react).processSync(source).result}
  </Fragment>
);

export default Markdown;
