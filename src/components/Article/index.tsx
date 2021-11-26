import { FunctionComponent, useState } from "react";
import styled from "styled-components";
import { countWords, timeToRead } from "src/utils";
import Button from "src/components/inputs/Button";
import ArticleHead from "./elements/Header";
import ArticleContent from "./elements/Content";
import { Article } from "src/graphql/types";

const StyledArticle = styled.div`
  margin-bottom: 50px;
`;

interface iArticleCard {
  article: Article;
  brief?: boolean;
}

const ArticleCard: FunctionComponent<iArticleCard> = ({ article, brief }) => {
  const [isExpanded, setExpanded] = useState(brief ? false : true);

  return (
    <StyledArticle>
      <ArticleHead
        featuredImage={article.seo.featured_image}
        publishedDate={article.published_at}
        timeToRead={timeToRead(countWords(article.content))}
        title={article.title}
      />

      <ArticleContent content={article.content} isExpanded={isExpanded} />
      {brief && (
        <Button onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? `Less` : `Read More`}
        </Button>
      )}
    </StyledArticle>
  );
};

export default ArticleCard;
