import { ImageContainer } from "@components/Images/styles";
import { blurhashToBase64 } from "blurhash-base64";
import { formatRelative, parseISO } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";
import useDynamicContent from "src/lib/context/dynamicContent";
import { timeToRead } from "src/utils";
import styled from "styled-components";

const StyledArticleListItem = styled(motion.article)`
  display: grid;
  grid-template-columns: 1fr;
  margin-block-end: 4rem;
  grid-gap: 4rem;

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

  &:not(:has(img)) {
    grid-template-columns: 1fr;
  }
`;

const ArticleListItemImage = styled.div`
  &:not(:has(img)) {
    display: none;
  }
  position: relative;

  img {
    position: relative;
  }
`;

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
  const { setCategory, setTag } = useDynamicContent();
  const imageHeight = article?.seo?.metaImage?.data?.height;
  const imageWidth = article?.seo?.metaImage?.data?.width;
  const aspectRatio = imageWidth / imageHeight;
  return (
    <StyledArticleListItem>
      <ArticleListItemImage>
        {article.seo.metaImage !== null && (
          <ImageContainer>
            <Image
              src={article.seo.metaImage.formats.small.url}
              alt={article.seo.metaImage.alternativeText}
              width={article.seo.metaImage.formats.small.width}
              height={article.seo.metaImage.formats.small.height}
              placeholder="blur"
              blurDataURL={blurhashToBase64(article.seo.metaImage.blurhash)}
              loading="lazy"
            />
          </ImageContainer>
        )}
      </ArticleListItemImage>
      <ArticleListItemContent>
        <ArticleHeader>
          <Link href={`/blog/post/${article.slug}`}>
            <h3>{article.title}</h3>
          </Link>
          <h6>
            Published:{` `}
            {article.publishedAt
              ? formatRelative(parseISO(article?.publishedAt), new Date())
              : `Draft`}
            {` | `}Updated:
            {` ${formatRelative(parseISO(article.updatedAt), new Date())}`}
          </h6>
          <h6>
            Posted to{" "}
            <a
              onClick={() => {
                setCategory(article.postCategory.slug);
              }}
            >
              {article?.postCategory?.data?.title}
            </a>
            {` | `} Time To Read: {timeToRead(article.wordCount)}
          </h6>
        </ArticleHeader>
        <Excerpt>{article.seo.metaDescription}</Excerpt>
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
