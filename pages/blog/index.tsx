import { NextSeo } from 'next-seo';
import { useQuery } from 'react-query';
import PageLayout from 'src/layout/PageLayout';
import { gqlQuery } from 'src/utils/functions/fetch';
import Card from 'src/components/Card';
import { NextPage } from 'next';
import { ARTICLES_BRIEF_QUERY_STRING } from 'src/utils/graphql/queries/articles';
import { iArticle } from 'src/utils/graphql/types/article';
import styled from 'styled-components';
import ArticleListItem from 'src/components/Article/ListItem';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const ArticleList = styled.ul`
  padding-inline-start: 0;
`;

const BlogIndexpage: NextPage = () => {
  const { isLoading, error, data } = useQuery(`articles`, () =>
    gqlQuery(ARTICLES_BRIEF_QUERY_STRING)
  );

  if (error) {
    console.log(error);
  }

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title,
          description,
          type: `website`,
          images: [
            {
              alt: `Blogging`,
              width: 4076,
              height: 2712,
              url: `https://clm-sites-strapi.s3.us-east-2.amazonaws.com/blog_20c9f525f2.jpg`,
            },
          ],
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog`,
        }}
      />

      {error && (
        <Card heading="Uh Oh!">
          <p>We were unable to fetch the data requested for whatever reason.</p>
          <p>More specifically: {error}</p>
        </Card>
      )}

      {isLoading && <h1>Please Be patient articles are loading</h1>}
      <ArticleList>
        {data?.articles?.map((article: iArticle) => (
          <ArticleListItem key={article.id} article={article} />
        ))}
      </ArticleList>
    </PageLayout>
  );
};

export default BlogIndexpage;
