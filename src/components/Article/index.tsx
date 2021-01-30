import { FunctionComponent, useState } from 'react';
import { iArticle } from 'src/utils/graphql/types/article';
import styled from 'styled-components';
import { timeToRead } from 'src/utils/functions/timeToRead';
import { countWords } from 'src/utils/functions/countWords';
import Button from 'src/components/inputs/Button';
import ArticleHead from './elements/Header';
import ArticleContent from './elements/Content';

const StyledArticle = styled.div`
  margin-bottom: 50px;
`;

interface iArticleCard {
  article: iArticle;
  brief?: boolean;
}

const ArticleCard: FunctionComponent<iArticleCard> = ({ article, brief }) => {
  const [isExpanded, setExpanded] = useState(brief ? false : true);

  return (
    <StyledArticle>
      <ArticleHead
        featuredImage={article.featured_image}
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
