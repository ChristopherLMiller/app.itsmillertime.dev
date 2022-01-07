import Markdown from "@components/Markdown";
import ShareButtons from "@components/ShareButtons";
import { defaultImage, pageSettings } from "config";
import { formatRelative, parseISO } from "date-fns";
import { GetServerSideProps, NextPage } from "next";
import { getSession, useSession } from "next-auth/react";
import { NextSeo } from "next-seo";
import Image from "next/image";
import { useRouter } from "next/router";
import { ArticlesDocument } from "src/graphql/schema/articles/articles.query.generated";
import { Article, PublicationState } from "src/graphql/types";
import PageLayout from "src/layout/PageLayout";
import { fetchData } from "src/lib/fetch";
import { countWords, isAdmin, timeToRead } from "src/utils";
import styled from "styled-components";

const StyledBlogPost = styled.article`
  background: var(--color-grey-light);
  column-count: 2;
  column-fill: balance;
  column-gap: 0;
  column-rule: 3px solid var(--color-gold-transparent);
`;

const ArticleListItemContent = styled.div`
  color: var(--color-black-80);
  padding: 0 5%;
  font-family: var(--font-typewriter);

  p {
    break-inside: avoid;
    padding-block-end: 10px;
    padding-block-start: 10px;
    text-indent: 2em;
  }

  h3,
  h4,
  h5,
  h6 {
    font-family: var(--font-alt);
    letter-spacing: normal;
    text-transform: uppercase;
    margin: 0;
    padding-inline-start: 5px;
    color: var(--color-red-dark);
    border-bottom: 5px solid var(--color-gold-transparent);
    border-left: 3px solid var(--color-grey-intermediate);
    opacity: 0.7;
  }

  a {
    color: var(--color-red-intermediate);
    box-shadow: var(--box-shadow-inset-0);

    :hover {
      color: var(--color-gold-transparent);
      box-shadow: var(--box-shadow-inset-2);
    }
    img {
      width: 33%;
      max-width: 33%;
      display: inline-block;
    }
  }

  img {
    max-width: 100%;
    display: inline-block;
  }
`;

const ArticleHeader = styled.div`
  border-bottom: 5px solid var(--color-gold-transparent);
  background: var(--color-red-intermediate);
  color: var(--color-white-100);

  h2 {
    font-family: var(--font-alt);
    font-size: var(--h3-size);
    margin: 0;
    padding: 0 5%;
  }
  h5 {
    font-family: var(--font-block);
    margin: 0;
    font-size: var(--h6-size);
    text-transform: uppercase;
    letter-spacing: 0.5px;
    padding: 0 5%;

    a {
      color: var(--color-white-100);
    }
  }
`;

interface iBlogPost {
  article: Article;
}

const BlogPost: NextPage<iBlogPost> = ({ article }) => {
  const session = useSession();
  const router = useRouter();

  return (
    <PageLayout
      title={pageSettings.blog.title}
      description={pageSettings.blog.description}
    >
      <NextSeo
        title={article.title}
        description={article?.seo?.description}
        openGraph={{
          title: `${article?.title}`,
          description: `${article?.seo?.description}`,
          type: `article`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: article?.seo?.featured_image?.url,
              width: article?.seo?.featured_image?.width,
              height: article?.seo?.featured_image?.height,
              alt: article?.seo?.featured_image?.alternativeText,
            },
          ],
        }}
        noindex={article.published_at == null}
      />
      <StyledBlogPost>
        <ArticleHeader>
          {article?.seo?.featured_image && (
            <Image
              src={
                article?.seo?.featured_image?.provider_metadata?.public_id ||
                defaultImage.public_id
              }
              alt={article?.seo?.featured_image?.alternativeText}
              width={1920}
              height={1080}
              layout="responsive"
              placeholder="blur"
              blurDataURL={defaultImage.blurred}
            />
          )}
          <h2>{article?.title}</h2>
          <h5>
            Published:{` `}
            {article?.published_at
              ? formatRelative(parseISO(article?.published_at), new Date())
              : `DRAFT`}
            {` `}| Time To Read:
            {timeToRead(countWords(article.content))}
          </h5>
          {isAdmin(session.data?.user) && (
            <h5>
              <a
                href={`${process.env.NEXT_PUBLIC_STRAPI_URL}/admin/plugins/content-manager/collectionType/application::article.article/${article.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Edit
              </a>
            </h5>
          )}
        </ArticleHeader>
        <ShareButtons
          url={`${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`}
          media={article?.seo.featured_image?.url}
          title={article?.title}
        />
        <ArticleListItemContent>
          <Markdown source={article.content} />
        </ArticleListItemContent>
      </StyledBlogPost>
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const { slug } = context.query;
  // if the slug isn't found lets eject right away for a 404 error
  if (!slug) {
    return {
      notFound: true,
    };
  }

  // Fetch the data, the publication state depends on the user being an admin or not
  const data = await fetchData(
    ArticlesDocument,
    {
      where: { slug_eq: slug },
      publicationState: isAdmin(session?.user)
        ? PublicationState.Preview
        : PublicationState.Live,
    },
    // TODO: Fix this, unknown and ignoring is shameful
    //@ts-ignore
    session.jwt
  );

  if (data.articles.length) {
    return {
      props: {
        article: data.articles[0],
      },
    };
  } else {
    // If the article isn't found (0 length) we will just redirct to the landing page
    return {
      redirect: {
        destination: "/blog",
        permanent: false,
      },
    };
  }
};
export default BlogPost;
