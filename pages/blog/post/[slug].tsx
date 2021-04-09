import { NextSeo } from 'next-seo';
import PageLayout from 'src/layout/PageLayout';
import { GetServerSideProps, NextPage } from 'next';
import { iArticle } from 'src/utils/graphql/types/article';
import Markdown from 'src/components/Card/elements/Markdown';
import styled from 'styled-components';
import { formatRelative, parseISO } from 'date-fns';
import { timeToRead } from 'src/utils/functions';
import { countWords } from 'src/utils/functions/countWords';
import { useRouter } from 'next/router';
import { useArticleQuery } from 'src/utils/graphql/react-query/queries/Articles';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const StyledBlogPost = styled.div`
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
    padding-block-start: 20px;
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
  }
`;

interface iBlogPost {
  SEO: iArticle;
}

const BlogPost: NextPage<iBlogPost> = ({ SEO }) => {
  const router = useRouter();
  const { data, error, isLoading } = useArticleQuery({
    where: { slug: router.query?.slug as string },
  });
  const post = data?.articles[0];

  if (error) {
    console.log(error);
  }

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={SEO.title}
        description={SEO.excerpt}
        openGraph={{
          title: `${SEO.title}`,
          description: `${SEO.excerpt}`,
          type: `SEO`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${SEO.slug}`,
          images: [
            {
              url: SEO?.featured_image?.url,
              width: SEO?.featured_image?.width,
              height: SEO?.featured_image?.height,
              alt: SEO?.featured_image?.alternativeText,
            },
          ],
        }}
      />
      {!isLoading && (
        <StyledBlogPost>
          <ArticleHeader>
            <img
              src={post?.featured_image?.url}
              alt={post?.featured_image?.alternativeText}
            />
            <h2>{post.title}</h2>
            <h5>
              Published:{` `}
              {formatRelative(parseISO(post?.published_at), new Date())} | Time
              To Read:
              {timeToRead(countWords(post?.content))}
            </h5>
          </ArticleHeader>
          <ArticleListItemContent>
            <Markdown source={post?.content} />
          </ArticleListItemContent>
        </StyledBlogPost>
      )}
    </PageLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const res = await fetch(
    `https://admin.christopherleemiller.me/articles?slug_eq=${
      context.query[`slug`]
    }`
  );
  const data = await res.json();

  if (!data.length) {
    return {
      redirect: {
        destination: `/404`,
        permanent: false,
      },
    };
  }

  return {
    props: { SEO: data[0] },
  };
};

export default BlogPost;
