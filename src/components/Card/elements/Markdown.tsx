import { Fragment } from "react";
import remark from "remark";
import parse from "remark-parse";
import remark2react from "remark-react";

const Markdown = ({ source }) => {
  return (
    <Fragment>
      {remark().use(parse).use(remark2react).processSync(source).result}
    </Fragment>
  );
};

export default Markdown;
