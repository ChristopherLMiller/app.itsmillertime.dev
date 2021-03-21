import { NextSeo } from 'next-seo';
import PageLayout from 'src/layout/PageLayout';
//import { useArticles } from 'src/utils/graphql/queries/articles';
import { GetServerSideProps, NextPage } from 'next';
import Card from 'src/components/Card';

const title = `From My Desk`;
const description = `Archives concerning all matters web development and beyond`;

interface iBlogPost {
  SEO: any;
}

const BlogPost: NextPage<iBlogPost> = ({ SEO }) => {
  //const { data, error, isLoading } = useArticles();
  console.log(SEO);

  // log any errors
  /*if (error) {
    console.log(error);
  }*/

  return (
    <PageLayout title={title} description={description}>
      <NextSeo
        title={SEO.title}
        description={SEO.excerpt}
        openGraph={{
          title: `${SEO.title}`,
          description: `${SEO.excerpt}`,
          type: `article`,
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
      <Card>
        <h2>{SEO.title}</h2>
        <p>{SEO.content}</p>
      </Card>
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
        destination: `/blog`,
        permanent: false,
      },
    };
  }

  return {
    props: { SEO: data[0] },
  };
};

export default BlogPost;
