import Markdown from "@components/Markdown";
import { cloudinary } from "config";
import { FunctionComponent } from "react";
import { truncate } from "src/utils";
import styled from "styled-components";

interface iCardBody {
  align: string;
  padding?: boolean;
}

const StyledCardBody = styled.div<iCardBody>`
  background: var(--color-grey-light);
  background-image: url("https://images.itsmillertime.dev/${cloudinary.folder}/assets/linen.jpg");
  padding: 0;
  position: relative;
  text-align: left;
  font-weight: 300;

  p {
    word-break: break-word;
  }

  strong {
    color: var(--color-red-dark);
  }

  img {
    max-width: 100%;
    display: inline-block;
  }

  table {
    border: 2px solid var(--color-red-dark);
    border-collapse: collapse;
  }

  a:hover {
    color: var(--color-black-0);
  }

  thead {
    background: var(--color-red-dark);
    color: var(--color-white-100);
  }

  thead th {
    padding: 5px;
  }

  td {
    border: 1px solid var(--color-gold-transparent);
    padding: 5px;
  }

  blockquote {
    border-left: 5px solid var(--color-red-intermediate);
    padding-inline-start: 10px;
    background: var(--color-red-40);
  }
`;
const ContentArea = styled.div`
  padding: 5%;
  padding-block-start: 2rem;
  background: var(--color-grey-light);
  background-image: url("https://images.itsmillertime.dev/${cloudinary.folder}/assets/linen.jpg");
  transition: all 0.5s;
`;

interface iArticleContent {
  content: string;
  isExpanded: boolean;
}
const ArticleContent: FunctionComponent<iArticleContent> = ({
  content,
  isExpanded,
}) => (
  <StyledCardBody>
    <ContentArea>
      {content[0] !== `<` && (
        <Markdown source={isExpanded ? content : truncate(content, 5)} />
      )}
      {content[0] === `<` && (
        <div
          dangerouslySetInnerHTML={{
            __html: isExpanded ? content : truncate(content, 5),
          }}
        ></div>
      )}
    </ContentArea>
  </StyledCardBody>
);

export default ArticleContent;
