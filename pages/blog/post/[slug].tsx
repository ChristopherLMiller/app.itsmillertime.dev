import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { FunctionComponent } from 'react';
import PageLayout from 'src/layout/PageLayout';
import { useArticles } from 'src/utils/graphql/queries/articles';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

const BlogPost: FunctionComponent = () => {
  const router = useRouter();
  const { data, error, isLoading } = useArticles();

  const slug = router.query[`slug`];

  // log any errors
  if (error) {
    console.log(error);
  }

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={title}
        description={description}
        openGraph={{
          title: `${slug}`,
          description: ``,
          type: `article`,
          url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/post/${slug}`,
        }}
      />
    </PageLayout>
  );
};

export default BlogPost;
