import { FunctionComponent } from 'react';
import { iArticle } from 'src/utils/graphql/types/article';
import Card from '.';
import Markdown from './elements/Markdown';
import styled from 'styled-components';
import ImageDefault from '../Images';
import { formatRelative, parseISO } from 'date-fns';
import { timeToRead } from 'src/utils/functions/timeToRead';
import { countWords } from 'src/utils/functions/countWords';
import { truncate } from 'src/utils/functions/truncate';

const StyledArticleHead = styled.div`
  font-weight: 100;
`;

const StyledArticleHeaderInfo = styled.div`
  background: var(--color-red-intermediate);
  padding: 20px 40px;
  margin: 0;
  color: var(--color-grey-light);
`;

const StyledHeading = styled.h2`
  font-size: 4rem;
  margin: 5px 0;
  font-weight: 200;
`;

const StyledPublishDate = styled.p`
  margin: 0;
  font-size: 1.5em;
  text-transform: uppercase;
  font-weight: 100;
`;

const ContentArea = styled.div`
  padding: 10%;
`;

interface iArticleCard {
  article: iArticle;
  brief?: boolean;
}

const ArticleCard: FunctionComponent<iArticleCard> = ({ article, brief }) => {
  console.log(article.featured_image);
  return (
    <Card padding={false} align="left">
      <StyledArticleHead>
        {article.featured_image !== null && (
          <ImageDefault
            image={{
              url: article.featured_image.url,
              width: article.featured_image.width,
              height: article.featured_image.height,
            }}
            alt={article.featured_image.alternativeText}
          />
        )}
      </StyledArticleHead>
      <StyledArticleHeaderInfo>
        <StyledPublishDate>
          Published: {formatRelative(parseISO(article.createdAt), new Date())} |
          Time To Read: {timeToRead(countWords(article.content))}
        </StyledPublishDate>
        <StyledHeading>{article.title}</StyledHeading>
      </StyledArticleHeaderInfo>

      <ContentArea>
        <Markdown
          source={brief ? truncate(article.content, 3) : article.content}
        />
        {brief && <p>Not all content is shown, the rest is in progress</p>}
      </ContentArea>
    </Card>
  );
};

export default ArticleCard;
