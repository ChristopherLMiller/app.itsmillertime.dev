import { NextSeo } from "next-seo";
import PageLayout from "src/layout/PageLayout";
import { GetServerSideProps, NextPage } from "next";
import Markdown from "src/components/Card/elements/Markdown";
import styled from "styled-components";
import { formatRelative, parseISO } from "date-fns";
import Image from "next/image";

import { countWords, isAdmin, timeToRead } from "src/utils";
import { getServerSideSEO } from "src/utils/getServerSideSEO";
import { useArticleQuery } from "src/graphql/schema/articles/article.query.generated";
import { Article, PublicationState } from "src/graphql/types";
import ShareButtons from "src/components/ShareButtons";
import Loader from "src/components/Loader";
import { useSession } from "next-auth/client";
import { defaultImage, pageSettings } from "config";
import { useRouter } from "next/router";

const StyledBlogPost = styled.article`
  background: var(--color-grey-light);
  column-count: 2;
  column-fill: balance;
  column-gap: 0;
  column-rule: 3px solid var(--color-gold-transparent);

  img {
    width: 100%;
    display: inline-block;
  }
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
  SEO: Article;
}

const BlogPost: NextPage<iBlogPost> = ({ SEO }) => {
  const [session] = useSession();
  const router = useRouter();

  const publicationState =
    session && isAdmin(session?.user)
      ? PublicationState.Preview
      : PublicationState.Live;
  const { data, error, isLoading, isSuccess } = useArticleQuery({
    id: SEO.id,
    publicationState,
  });

  const article = data?.article;

  if (error) {
    console.error(error);
  }

  return (
    <PageLayout
      title={pageSettings.blog.title}
      description={pageSettings.blog.description}
    >
      {isLoading && <Loader isLoading={isLoading} />}
      <NextSeo
        title={SEO?.title}
        description={SEO?.seo?.description}
        openGraph={{
          title: `${SEO?.title}`,
          description: `${SEO?.seo?.description}`,
          type: `article`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}${router.asPath}`,
          images: [
            {
              url: SEO?.seo?.featured_image?.url,
              width: SEO?.seo?.featured_image?.width,
              height: SEO?.seo?.featured_image?.height,
              alt: SEO?.seo?.featured_image?.alternativeText,
            },
          ],
        }}
      />

      {isSuccess && (
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
            {isAdmin(session?.user) && (
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
            url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${SEO?.slug}`}
            media={SEO?.seo.featured_image?.url}
            title={SEO?.title}
          />
          <ArticleListItemContent>
            <Markdown source={article.content} />
          </ArticleListItemContent>
        </StyledBlogPost>
      )}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const slug = context?.query?.slug;

  if (slug) {
    const response = await getServerSideSEO(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/articles?slug_eq=${
        context?.query[`slug`]
      }&_publicationState=preview`,
      context
    );

    const data = await response.json();

    if (data.length) {
      return {
        props: { SEO: data[0] },
      };
    }
  }

  // default go to 404, not found for whatever reason
  return {
    redirect: {
      destination: `/404`,
      permanent: false,
    },
  };
};

export default BlogPost;
