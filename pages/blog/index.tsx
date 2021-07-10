import { NextSeo } from 'next-seo';
import PageLayout from 'src/layout/PageLayout';
import Card from 'src/components/Card';
import { NextPage } from 'next';
import styled from 'styled-components';
import ArticleListItem from 'src/components/Article/ListItem';
import { useRouter } from 'next/router';
import Loader from 'src/components/Loader';
import { useArticlesQuery } from 'src/graphql/schema/articles/articles.query.generated';
import { Article } from 'src/graphql/types';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const ArticleList = styled.ul`
  padding-inline-start: 0;
`;

const BlogIndexpage: NextPage = () => {
  const router = useRouter();
  const { data, error, isFetching } = useArticlesQuery({
    sort: `createdAt:DESC`,
  });

  if (!isFetching) {
    console.log(data.articles);
  }

  // TODO:  Add queries to get by category, tag etc
  console.log(router.query);
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
              url: `https://res.cloudinary.com/christopherleemiller/image/upload/v1620977613/clm-new/uploads/blog_adb6d70b97.jpg`,
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
      {isFetching && <Loader isLoading={isFetching} />}(
      {!isFetching && (
        <ArticleList>
          {data?.articles?.map((article) => (
            <ArticleListItem key={article.id} article={article as Article} />
          ))}
        </ArticleList>
      )}
    </PageLayout>
  );
};

export default BlogIndexpage;
