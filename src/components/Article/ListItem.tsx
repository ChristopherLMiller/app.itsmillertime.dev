import { formatRelative, parseISO } from 'date-fns';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FunctionComponent } from 'react';
import { timeToRead } from 'src/utils/functions';
import { countWords } from 'src/utils/functions/countWords';
import { iArticle } from 'src/utils/graphql/types/article';
import { iArticleCategory } from 'src/utils/graphql/types/articleCategories';
import { iArticleTags } from 'src/utils/graphql/types/articleTags';
import styled from 'styled-components';
import ImageDefault from '../Images';

const StyledArticleListItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  margin-block-end: 30px;
  grid-gap: 30px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 30% 1fr;
  }
`;

const ArticleListItemImage = styled.div``;

const ArticleListItemContent = styled.div`
  background: var(--color-white-60);
  color: var(--color-black-80);
  padding: 3% 5%;

  p {
    margin: 0;
  }
`;

const ArticleHeader = styled.div`
  border-bottom: 5px solid var(--color-gold-transparent);

  h3 {
    font-family: var(--font-alt);
    margin: 0;
  }
  h5 {
    font-family: var(--font-block);
    margin: 0;
    font-size: var(--h6-size);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
`;

const PostMeta = styled.div`
  padding-block-start: 20px;
`;

const MetaButton = styled.a`
  background: var(--color-red);
  padding: 10px;
  text-align: center;
  letter-spacing: 2px;
  cursor: pointer;
  border-radius: 20px;
  color: var(--color-white-100);
`;

const List = styled.ul`
  padding-inline-start: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;

  li {
    margin-block-end: 10px;
    margin-inline-end: 10px;
    white-space: nowrap;
    display: flex;
  }

  @media screen and (min-width: 500px) {
    flex-direction: row;
  }
`;

interface iArticleListItem {
  article: iArticle;
}

const ArticleListItem: FunctionComponent<iArticleListItem> = ({ article }) => (
  <StyledArticleListItem>
    <ArticleListItemImage>
      {article.featured_image && (
        <ImageDefault
          image={{
            url: article.featured_image.url,
            width: article.featured_image.width,
            height: article.featured_image.height,
          }}
          alt={article.featured_image.alternativeText}
        />
      )}
    </ArticleListItemImage>
    <ArticleListItemContent>
      <ArticleHeader>
        <Link href={`/blog/post/${article.slug}`}>
          <a>
            <h3>{article.title}</h3>
          </a>
        </Link>
        <h5>
          Published:{` `}
          {formatRelative(parseISO(article.published_at), new Date())} | Time To
          Read: {timeToRead(countWords(article.content))}
        </h5>
      </ArticleHeader>
      <p>{article.excerpt}</p>
      <PostMeta>
        <List>
          {article.article_categories.map((category: iArticleCategory) => (
            <li key={category.id}>
              <Link href={`/blog?category=${category.slug}`}>
                <MetaButton>{category.title}</MetaButton>
              </Link>
            </li>
          ))}
        </List>
        <List>
          {article.article_tags.map((tag: iArticleTags) => (
            <li key={tag.id}>
              <Link href={`/blog?tag=${tag.slug}`} shallow>
                <MetaButton>{tag.title}</MetaButton>
              </Link>
            </li>
          ))}
        </List>
      </PostMeta>
    </ArticleListItemContent>
  </StyledArticleListItem>
);

export default ArticleListItem;
