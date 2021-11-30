import { formatRelative, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { useSession } from "next-auth/client";
import Link from "next/link";
import { FunctionComponent } from "react";
import Image from "src/components/Images";
import { Article, ArticleTags } from "src/graphql/types";
import { countWords, isAdmin, timeToRead } from "src/utils";
import styled from "styled-components";

const StyledArticleListItem = styled(motion.article)`
  display: grid;
  grid-template-columns: 1fr;
  margin-block-end: 30px;
  grid-gap: 30px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 30% 1fr;
  }

  a {
    color: var(--color-white-100);
    text-decoration: none;
    box-shadow: var(--box-shadow-inset-0);
    transition: all 0.25s ease;

    :hover {
      box-shadow: var(--box-shadow-inset-1);
      scale: 1.05;
    }
  }
`;

const ArticleListItemImage = styled.div``;

const ArticleListItemContent = styled.div`
  background: var(--color-white-60);
  color: var(--color-black-80);
  padding: 3% 5%;

  ${(props) =>
    props.published == null && `border-left: 10px solid var(--color-gold)`}
`;

const ArticleHeader = styled.div`
  border-bottom: 5px solid var(--color-gold-transparent);

  h3 {
    font-family: var(--font-alt);
    font-weight: 100;
    margin: 0;
  }
  h5,
  h6 {
    font-family: var(--font-block);
    margin: 0;
    font-size: var(--h6-size);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  h6 {
    font-size: 0.75em;
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

const Excerpt = styled.p`
  margin: 10px 0 0 0;
  font-family: var(--font-typewriter);
  font-weight: 400;
  letter-spacing: 0.5px;

  @media screen and (min-width: 600px) {
    font-weight: 600;
  }
`;
interface iArticleListItem {
  article: Article;
}

const ArticleListItem: FunctionComponent<iArticleListItem> = ({ article }) => {
  const [session] = useSession();

  return (
    <StyledArticleListItem>
      <ArticleListItemImage>
        {article?.seo?.featured_image && (
          <Image
            public_id={`${article?.seo?.featured_image.provider_metadata.public_id}`}
            width={parseInt(`${article?.seo?.featured_image.width}`)}
            height={parseInt(`${article?.seo?.featured_image.height}`)}
            alt={article?.seo?.featured_image.alternativeText}
          />
        )}
      </ArticleListItemImage>
      <ArticleListItemContent published={article.published_at}>
        <ArticleHeader>
          <Link href={`/blog/post/${article.slug}`}>
            <a>
              <h3>{article.title}</h3>
            </a>
          </Link>
          <h5>
            Published:{` `}
            {article.published_at
              ? formatRelative(parseISO(article.published_at), new Date())
              : `Draft`}
            {` `}| Time To Read: {timeToRead(countWords(article.content))}
          </h5>
          {isAdmin(session?.user) && (
            <h6>
              <a
                href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::article.article/${article.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </h6>
          )}
        </ArticleHeader>
        <Excerpt>{article.seo.description}</Excerpt>
        <PostMeta>
          <List>
            {article.article_tags.map((tag: ArticleTags) => (
              <li key={tag.id}>
                <Link href={`/blog?tag=${tag.slug}`} shallow passHref>
                  <MetaButton>{tag.title}</MetaButton>
                </Link>
              </li>
            ))}
          </List>
        </PostMeta>
      </ArticleListItemContent>
    </StyledArticleListItem>
  );
};

export default ArticleListItem;
