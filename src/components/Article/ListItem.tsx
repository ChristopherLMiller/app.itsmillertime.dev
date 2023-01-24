import CloudinaryImage from "@components/Images/CloudinaryImage";
import { formatRelative, parseISO } from "date-fns";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { FunctionComponent } from "react";
import useDynamicContent from "src/lib/context/dynamicContent";
import { timeToRead } from "src/utils";
import styled from "styled-components";

const StyledArticleListItem = styled(motion.article)`
  display: grid;
  grid-template-columns: 1fr;
  margin-block-end: 30px;
  grid-gap: 30px;

  @media screen and (min-width: 800px) {
    grid-template-columns: 40% 1fr;
  }

  a {
    color: var(--color-white-100);
    text-decoration: none;
    box-shadow: var(--box-shadow-inset-0);
    transition: all 0.25s ease;

    :hover {
      box-shadow: var(--box-shadow-inset-2);
      scale: 1.05;
    }
  }
`;

const ArticleListItemImage = styled.div``;

const ArticleListItemContent = styled.div`
  background: var(--color-white-60);
  color: var(--color-black-80);
  padding: 3% 5%;
  border-left: 10px solid var(--color-gold);
`;

const ArticleHeader = styled.div`
  border-block-end: 5px solid var(--color-gold-transparent);
  padding-block-end: 0.5rem;

  h3 {
    font-size: 1.75em;
    line-height: 1.5em;
    font-family: var(--font-alt);
    color: var(--color-black-60);
    font-weight: 100;
    margin: 0;
    transition: color 0.25s ease;

    :hover {
      color: var(--color-white-60);
    }
  }
  h5,
  h6 {
    font-family: var(--font-block);
    margin: 0;
    font-size: var(--h6-size);
    text-transform: uppercase;
  }
  h6 {
    font-size: 0.75em;
    line-height: 1.25em;
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
  border-width: 5px;
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
  article: any;
}

const ArticleListItem: FunctionComponent<iArticleListItem> = ({ article }) => {
  const session = useSession();
  const { setCategory, setTag } = useDynamicContent();

  return (
    <StyledArticleListItem>
      <ArticleListItemImage>
        {article.featuredImage && (
          <CloudinaryImage
            public_id={`${article.featuredImage.public_id}`}
            width={600}
            height={400}
            alt={article.featuredImage.alt || ""}
          />
        )}
      </ArticleListItemImage>
      <ArticleListItemContent>
        <ArticleHeader>
          <Link href={`/blog/post/${article.slug}`}>
            <h3>{article.title}</h3>
          </Link>
          <h6>
            Published:{` `}
            {article.published
              ? formatRelative(parseISO(article?.publishedAt), new Date())
              : `Draft`}
            {` | `}Updated:
            {` ${formatRelative(parseISO(article.updatedAt), new Date())}`}
          </h6>
          <h6>
            Posted to{" "}
            <a
              onClick={() => {
                setCategory(article.category.slug);
              }}
            >
              {article.category.title}
            </a>
            {` | `} Time To Read: {timeToRead(article.wordCount)}
          </h6>
        </ArticleHeader>
        <Excerpt>{article.summary}</Excerpt>
        <PostMeta>
          <List>
            {article?.tags?.map((tag) => (
              <li key={tag.slug}>
                <MetaButton
                  onClick={() => {
                    setTag(tag.slug);
                  }}
                >
                  {tag.title}
                </MetaButton>
              </li>
            ))}
          </List>
        </PostMeta>
      </ArticleListItemContent>
    </StyledArticleListItem>
  );
};

export default ArticleListItem;
