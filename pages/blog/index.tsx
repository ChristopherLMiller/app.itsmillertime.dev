import { NextSeo } from 'next-seo';
import { useQuery } from 'react-query';
import PageLayout from 'src/layout/PageLayout';
import { gqlQuery } from 'src/utils/functions/fetch';
import Card from 'src/components/Card';
import { NextPage } from 'next';
import { ARTICLES_BRIEF_QUERY_STRING } from 'src/utils/graphql/queries/articles';
import { iArticle } from 'src/utils/graphql/types/article';
import ArticleCard from 'src/components/Card/article';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const BlogIndexpage: NextPage = () => {
  const { isLoading, error, data } = useQuery(`articles`, () =>
    gqlQuery(ARTICLES_BRIEF_QUERY_STRING)
  );

  if (error) {
    console.log(error);
    return (
      <Card heading="Uh Oh!">
        <p>We were unable to fetch the data requested for whatever reason.</p>
        <p>More specifically: {error}</p>
      </Card>
    );
  }

  if (isLoading) {
    return <h1>Please Be patient articles are loading</h1>;
  }

  return (
    <PageLayout title={title} description={description}>
      <NextSeo title={title} description={description} />
      {data?.articles?.map((article: iArticle) => (
        <ArticleCard article={article} brief key={article.id} />
      ))}
    </PageLayout>
  );
};

export default BlogIndexpage;
